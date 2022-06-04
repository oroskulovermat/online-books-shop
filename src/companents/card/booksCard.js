import React,{useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {addToBasket, getCategoryList, getProdDetail, getProdList} from "../../redux/action/action";
import {useDispatch, useSelector} from "react-redux";

const BooksCard = ({el}) => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {shopProductDetail: prodDetail} = useSelector(s => s)
    const {shopProductList: product} = useSelector(s => s)
    const {shopListCategory: category} = useSelector(s => s)

    const {basket} = useSelector(s => s)
    const basketItems = basket.some(basket => basket.id === el.id)

    useEffect(() => {
        dispatch(getCategoryList())
        dispatch(getProdDetail(id))
        dispatch(getProdList())
    }, [])
    return (
        <div className="sm:basis-1  md:basis-1/2 lg:basis-1/3 xl:basis-1/4 text-center flex justify-center font-robot" key={el.id}>
            <div
                className="bg-white rounded-md  w-[80%] hover:scale-105 hover:translate-y-1 text-gray-900 my-4 body-font ">

               <div className="w-full ">
                   <Link to={`/shop-details/${el.id}`}>
                       <img src={el.image} alt="image"
                            className="w-60 h-60 object-cover rounded-md"/>
                   </Link>
               </div>

                <span className="w-full flex flex-col mt-3 text-black">
                    <div className="flex justify-around">
                        <p className="font-bold text-black text-xl">{el.price} сом</p>
                        {
                            basketItems ?
                                    <Link to='/shop-basket'>
                                        <FontAwesomeIcon
                                            className="text-[#010049] w-7 h-7 cursor-pointer"
                                            icon={faCheck}/>
                                    </Link>
                                :
                                    <FontAwesomeIcon
                                        onClick={() => dispatch(addToBasket(el))}
                                        className="text-[#010049] w-7 h-7 cursor-pointer"
                                        icon={faShoppingCart}/>
                        }
                    </div>
                        <h4 className="w-full font-head p-1 font-medium pb-5  text-left font-light text-sm">{el.title}</h4>
                    </span>
            </div>

        </div>
    );
};

export default BooksCard;