import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const BooksCard = ({el}) => {

    return (
        <div className="sm:basis-1  md:basis-1/2 lg:basis-1/3 xl:basis-1/4 text-center flex justify-center font-robot" key={el.id}>
            <div
                className="text-gray-900 my-4 body-font mx-3">

               <div className="w-full">
                   <Link to={`/shop-details/${el.id}`}>
                       <img src={el.image} alt="image"
                            className="w-full h-96 object-cover rounded-md"/>
                   </Link>
               </div>

                <span className="flex flex-col mt-3 text-black">
                    <div className="flex justify-between">
                        <p className="text-left font-bold text-black text-xl">{el.price} сом</p>
                        <FontAwesomeIcon
                            className="text-[#010049] w-7 h-7"
                            icon={faShoppingCart}/>
                    </div>
                        <h4 className="font-head font-medium pb-5 w-60 text-left font-light text-sm">{el.title}</h4>
                    </span>
            </div>

        </div>
    );
};

export default BooksCard;