import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";

const Header = () => {
    const {basket: el} = useSelector(s => s)

    return (
        <div className="  left-0 right-0 m-0 top-0 bg-[#010049] ">
            <div className="container mx-auto ">
                <div className="flex justify-between items-center">
                    <Link to={"/"}
                          className="py-2 text-white font-mochiy font-bold text-2xl">BOOKShop</Link>
                    <Link to={'/shop-basket'}>
                        <button className="flex flex-col  w-full  text-white font-nunito font-bold py-3 px-5">
                            <p className='flex text-center mx-auto'>{el.length === 0 ? '' : el.length}</p>
                            <FontAwesomeIcon
                                className="pl-5 w-6 h-6"
                                icon={faCartShopping}/>
                            <span className="flex justify-between">
                                Корзина
                            </span>
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Header;