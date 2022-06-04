import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, DecreaseToBasket, RemoveProductBasket} from "../../redux/action/action";
import {PublicApi} from "../../API/api";
import {useForm} from 'react-hook-form';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTrashCan} from "@fortawesome/free-solid-svg-icons";

const Basket = () => {
    const {basket: el} = useSelector(s => s)
    const {register, handleSubmit, formState: {errors}} = useForm();

    const [price ,  setPrice] = useState(0)


    useEffect(() => {
        setPrice(el.reduce((acc , el) => {
            return el.quantity * el.price + acc
        },0))

    })

    const onSubmit = data => {
        PublicApi.post('contact/', data)
            .then(response => {
                alert("ok")
                console.log(response)
            }).catch(e => {
            console.log(e)
            console.log(data)
        })
        console.log(data)
    };
    console.log(el, "ELEMENT")
    const dispatch = useDispatch()

    return (
        <div className="min-h-screen">
            <div className="container mx-auto">
                {
                    el.length === 0 ? '' :
                        <p className="pt-6 pb-16">Главная / Корзина / Оформление заказа</p>
                }
                {
                    el.length === 0 ? <div className='text-gray-800 text-5xl mt-10 text-center' >Корзина пусто!!!</div>
                        :
                        <div className="flex justify-between">
                            <div className="bg-white">
                                <form
                                    className="flex justify-between min-h-screen"
                                    onSubmit={handleSubmit(onSubmit)}>
                                    <div className="w-5/12">
                                        <h1 className="text-[#010049] text-3xl font-bold font-nunito">Контакные данные</h1>
                                        <input
                                            className="border-2 border-[#010049] text-[#010049] rounded w-full py-2 px-3 outline-none my-2"
                                            type="text" placeholder="Фио*" {...register("fullname", {
                                            required: true,
                                            maxLength: 80
                                        })} />
                                        <input
                                            className="mb-32 border-2 border-[#010049] text-[#010049] rounded w-full py-2 px-3 outline-none my-2"
                                            type="tel" placeholder="Телефон*" {...register("number", {
                                            required: true,
                                            minLength: 6
                                        })} />

                                        <div className="">
                                            <h1 className="text-[#010049] text-3xl font-bold font-nunito">Оплата</h1>
                                            <div className="flex justify-between pb-5">
                                                <input
                                                    className="mt-1 mr-3"
                                                    {...register("payment_method", {required: true})} type="radio"
                                                    value="Cart"/>
                                                <p className="text-[#010049] font-nunito text-base">Оплачу наличными при получении заказа</p>
                                            </div>
                                            <div className="flex justify-between pb-2">
                                                <input
                                                    className="mt-1 mr-3"
                                                    {...register("payment_method", {required: true})} type="radio"
                                                    value="Cash"/>
                                                <p className="text-[#010049] font-nunito text-base">Оплата с банковской картой через <span className="text-green-600">PayBox</span></p>
                                            </div>
                                            <input
                                                type="submit"
                                                className='bg-[#010049] text-white py-2 w-full'/>
                                        </div>
                                    </div>

                                    <div className=" w-5/12">
                                        <h1 className="text-[#010049] text-3xl font-bold font-nunito pb-2">Доставка</h1>
                                        <p className="text-gray-500 font-nunito pb-2">Выберите удобный способ доставки для этого заказа.</p>
                                        <div className="flex pb-5">
                                            <input
                                                className="mt-1 mr-3"
                                                {...register("dostavka", {required: true})} type="radio"
                                                value="Самовывоз"/>
                                            <p className="text-[#010049] font-nunito text-base">Самовывоз</p>
                                        </div>
                                        <div className="flex pb-5">
                                            <input
                                                className="mt-1 mr-3"
                                                {...register("dostavka", {required: true})} type="radio"
                                                value="Доставка курьером"/>
                                            <p className="text-[#010049] font-nunito text-base">Доставка курьером</p>
                                        </div>
                                        <input
                                            className="mb-20 border-2 border-[#010049] text-[#010049] rounded w-full h-36 pb-24 px-3 outline-none my-2"
                                            type="text" placeholder="Область, город (район, село), улица, дом№, кв.№*" {...register("address", {
                                            required: true,
                                            minLength: 1
                                        })} />

                                        <div className="mb-10 bg-[#010049] py-3 px-5 text-white">
                                            <div className="flex justify-between">
                                                <p>Общая сумма</p>
                                               <p> {price} сом</p>
                                            </div>
                                            <p className="text-center pt-5">Оплачено</p>
                                        </div>
                                    </div>
                                </form>
                            </div>


                            <div className="mx-12 w-5/12">
                                {
                                    el.map((el, idx) => (
                                        <div className="py-3" key={el.id}>
                                            <div className="w-full  flex justify-betweentext-white">
                                                <div className="w-full h-full flex justify-between">
                                                    <div className="w-7/12 h-72 mr-2">
                                                        <img src={el.image} alt="image"
                                                             className="w-full h-72 object-cover rounded-md"/>
                                                    </div>

                                                    <div className="flex flex-col justify-around w-full">
                                                        <p className="text-[#010049] text-2xl font-nunito ">{el.title}</p>
                                                        <p className="text-[#010049] text-2xl font-nunito ">${el.price * el.quantity}</p>
                                                        <span className="border border-[#010049] w-24 flex justify-between">
                                                 {
                                                     el.quantity === 1 ?    <button
                                                             className="bg-[#010049] text-white px-2 w-1/4">  </button>
                                                         :
                                                         <button
                                                     className="bg-[#010049] text-white px-2"
                                                     onClick={() => dispatch(DecreaseToBasket(idx))}>-</button>
                                                 }
                                                            <span className="text-[#010049] text-center ">{el.quantity}</span>
                                                                    <button
                                                                        className="bg-[#010049] px-2 text-white"
                                                                        onClick={() => dispatch(addToBasket(el))}>+</button>
                                                    </span>
                                                        <button
                                                            onClick={() => dispatch(RemoveProductBasket(el.id))}
                                                            className="text-left text-[#010049] text-sm font-bold font-nunito py-2">Удалить<FontAwesomeIcon className="bg-gray-400 rounded ml-2 py-1 px-1" icon={faTrashCan}/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default Basket;
