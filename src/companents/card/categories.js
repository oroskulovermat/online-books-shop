import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCategory, getCategoryList, getProdList} from "../../redux/action/action";
import BooksCard from "./booksCard";
import CategoryCart from "./categoryCart";
import Slider from "react-slick";
import CategotyCartTwo from "./categotyCartTwo";

const Categories = () => {
    const {idCategory} = useParams()
    const dispatch = useDispatch()
    const {shopProductList : product} = useSelector(s => s)
    const {shopIdCategory : cateqory} = useSelector(s => s)

    useEffect(()=>{
        dispatch(getCategory(idCategory))
        dispatch(getProdList())
        dispatch(getCategoryList())
    },[])
    const books = product.filter(el => el.category === cateqory.id)
    return (
        <div className="container mx-auto">
            <div className="flex justify-between py-5">
                <h1 className="pl-4 sm:text-center md:text-center lg:text-left xl:text-left text-sm w-full py-1 text-center font-medium text-[#010049]"> {cateqory.title}</h1>
            </div>
            <div className="flex justify-between flex-wrap">
                {
                    books.map(el => (
                        <div className="sm:basis-1  md:basis-1/2 lg:basis-1/3 xl:basis-1/4 text-center flex justify-center font-robot" key={el.id}>
                            <div
                                className="text-gray-900  body-font mx-3">

                                <div className="w-full">
                                    <Link to={`/shop-details/${el.id}`}>
                                        <img src={el.image} alt="image"
                                             className="w-full h-96 object-cover rounded-md"/>
                                    </Link>
                                </div>

                                <span className="flex flex-col mt-3 text-black">
                        <h4 className="font-head font-medium pb-5 w-60 text-left font-light text-sm">{el.title}</h4>
                                    <p className="text-left font-bold text-black text-xl">{el.price} сом</p>
                    </span>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;