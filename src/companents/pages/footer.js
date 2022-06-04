import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (

        <div className="bg-[#010049] text-center">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
                    <div className="flex flex-col">
                        <Link to={"/"} className="mt-16 text-white font-medium text-2xl">BOOKShop</Link>
                    </div>
                    <div className="flex flex-col py-6">
                        <Link to={"/"} className=" py-2 text-white font-medium ">Способ оплаты</Link>
                        <Link to={"/"} className=" py-2 text-white font-medium ">Условия доставки</Link>
                        <Link to={"/"} className=" py-2 text-white font-medium ">Правила покупки</Link>
                    </div>
                    <div className="flex flex-col py-6">
                        <Link to={"/"} className=" py-2 text-white font-medium ">FAQ</Link>
                        <Link to={"/"} className=" py-2 text-white font-medium ">О нас</Link>
                    </div>
                    <div className="flex flex-col py-6">
                        <h3 className=" py-2 text-white font-medium ">Связаться с нами:</h3>
                        <h3 className=" py-2 text-white font-medium ">+996 555 555 555 </h3>
                        <h3 className=" py-2 text-white font-medium ">+996 700 700 700</h3>
                        <h3 className=" py-2 text-white font-medium ">+996 777 777 777</h3>
                    </div>
                    <div className="py-6">
                        <h1 className="py-2 text-white font-medium text-center">Адрес</h1>
                        <p className="py-2 text-white font-normal">
                            Турусбеков 109/3
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;