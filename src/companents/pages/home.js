import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getCategoryList, getProdList} from "../../redux/action/action";
import BooksCard from "../card/booksCard";
import Slider from "react-slick";
import Bg from "../../img/image 112.png"
import Bg2 from "../../img/1455.webp"
import Bg3 from "../../img/ititit.jpg"
import CategoryCart from "../card/categoryCart";
import {GET_SHOP_PRODUCT_LIST} from "../../redux/type/type";
import {PublicApi} from "../../API/api";


const Home = () => {
    const dispatch = useDispatch()
    const {shopProductList: product} = useSelector(s => s)
    const {shopListCategory: category} = useSelector(s => s)
    console.log(category)

    useEffect(() => {
        dispatch(getProdList())
        dispatch(getCategoryList())
    }, [])



    const handleSelect = (e) => {
        PublicApi(`/books/?ordering=${e.target.value}`)
            .then(({data}) => {
                dispatch({type:GET_SHOP_PRODUCT_LIST , payload:data})
            })
    }

    

    const settings = {
        background: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const categorySettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className="min-h-screen bg-gray-100 ">
            <div className="w-full bg-gray-300">
                <div className="container  w-[80%] h-full mx-auto">
                    <Slider
                        {...settings} >
                        <div className=" text-gray-900 font-bold text-center text-2xl ">
                            <img src={Bg} alt=""/>
                            1
                        </div>

                        <div className="text-gray-900 font-bold  text-center text-2xl w-full">
                            <img src={Bg} alt=""/>
                            2
                        </div>

                        <div className="text-gray-900 font-bold  text-center text-2xl w-full">
                            <img src={Bg} alt=""/>
                            3
                        </div>
                    </Slider>
                </div>
            </div>

            <div className=" container mx-auto p-10 flex-col md:flex-row items-center mx-auto font-inter">
                <h1 className="pl-4 sm:text-center md:text-center lg:text-left xl:text-left text-3xl w-full text-black py-5 font-bold text-[#010049]">Категории</h1>

                <div className=" w-full">
                    <Slider
                        {...categorySettings}>
                        {
                            category.map(el => (
                                <div key={el.id} className="py-2">
                                        <CategoryCart el={el}/>
                                </div>
                            ))
                        }
                    </Slider>
                </div>

                <div className="flex justify-center py-5">
                    <h1 className="sm:flex text-center md:text-center lg:text-left xl:text-left text-3xl w-full text-black py-5 font-bold text-[#010049]">Возможно,
                        Вам понравится</h1>
                    <div className="flex justify-center">
                        <div className=" text-[#010049]">
                            <select
                                onChange={(e)=> handleSelect(e)}
                                className="form-select
                                    text-[#010049]
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                <option value="">Сортировка</option>
                                <option value="title">А-Я</option>
                                <option value="-title">Я - A</option>
                                <option value="-price">Дорогие</option>
                                <option value="price">Дешевые</option>
                                <option value="-pub_date">Hoвинки</option>
                            </select>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around flex-wrap">
                    {
                        product.map(el => (
                            <div
                                className=""
                                key={el.id}>
                                <BooksCard el={el}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
export default Home;