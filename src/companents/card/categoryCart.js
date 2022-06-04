import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import psi from "./../../img/psiholog940.jpg"
import reli from "./../../img/religion.jpg"
import buss from "./../../img/Business (2).jpg"
import it from "./../../img/ititit.jpg"

const CategoryCart = ({el}) => {
    console.log("img",el.id)


    return (

        <div className="mx-5">
            <Link to={`/shop-category/${el.id}`}
                  className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className='w-full h-32'>
                    <img src={el.id ===7 ? psi : el.id === 6 ? reli : el.id === 5 ? it : buss  } alt="" className="w-full h-full " />
                </div>
                <div className="flex align-middle">
                    <p className="font-bold text-gray-700 dark:text-gray-400">{el.title}</p>
                    <FontAwesomeIcon
                        className="pl-4 pt-1"
                        icon={faArrowRight}/>
                </div>
            </Link>
        </div>
    );
};

export default CategoryCart;