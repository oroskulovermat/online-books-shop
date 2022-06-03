import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, getCategoryList, getProdDetail, getProdList} from "../redux/action/action";
import {faBagShopping, faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import BooksCard from "./card/booksCard";
import Slider from "react-slick";

const ShopDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {shopProductDetail: prodDetail} = useSelector(s => s)
    const {shopProductList: product} = useSelector(s => s)
    const {shopListCategory: category} = useSelector(s => s)

    const {basket} = useSelector(s => s)
    const basketItems = basket.some(basket => basket.id === prodDetail.id)

    useEffect(() => {
        dispatch(getCategoryList())
        dispatch(getProdDetail(id))
        dispatch(getProdList())
    }, [])

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
        <div className="container mx-auto">
            <div className="flex flex-row mt-9 pb-20">
                <div className="basis-1/4">
                    <img src={prodDetail.image}
                         className="w-96 h-[100%] object-cover rounded-md " alt="images"/>
                </div>
                <div className="basis-1/2 text-left ml-10">
                    <h1 className="text-4xl font-medium w-9/12 font-nunito text-[#010049]">{prodDetail.title}</h1>
                    <p className="text-2xl font-bold w-9/12 font-nunito text-[#010049]">{prodDetail.price} сом</p>
                    <div className="flex font-nunito sm:text-center md:text-center lg:text-left xl:text-left text-xl w-full py-5 font-medium text-gray-500">
                        Жанры : {category.map(el => (
                        <p className="ml-1">{el.id === prodDetail.category ? el.title : ""}</p>))}
                    </div>
                    <div className="font-nunito sm:text-center md:text-center lg:text-left xl:text-left text-xl w-full py-5 font-medium text-gray-500">
                        <p>Описание</p>
                        <p className="w-full text-[#010049] sm:text-center md:text-center lg:text-left xl:text-left text-sm w-full py-2 font-medium text-gray-500">{prodDetail.description}</p>
                    </div>
                    <div className="flex flex-col w-64">
                        {
                            basketItems ? <button
                                className="border-2 border-[#010049] text-[#010049] hover:bg-[#010049] hover:text-white font-bold py-2 px-4 rounded my-4">
                                Добавлено</button> : <button
                                className="border-2 border-[#010049] text-[#010049] hover:bg-[#010049] hover:text-white font-bold py-2 px-4 rounded my-4 "
                                onClick={() => dispatch(addToBasket(prodDetail))}
                            >добавить в корзину</button>
                        }
                        <button className="border-2 border-[#010049] text-[#010049] hover:bg-[#010049] hover:text-white font-bold py-2 px-4 rounded my-4"
                        >Купить сейчас</button>
                    </div>
                </div>
            </div>

            <h1 className="font-nunito pl-4 sm:text-center md:text-center lg:text-left xl:text-left text-3xl w-full text-black py-5 font-bold text-[#010049]">Возможно,
                Вам понравится</h1>
            <Slider
                {...categorySettings}>
                {
                    product.map(el => (
                        <div key={el.id}>
                            <BooksCard el={el} />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default ShopDetails;