import React from 'react';
import {Link} from "react-router-dom";
import CategoryImg from "../../img/cate.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

const CategotyCartTwo = ({el}) => {
    return (
        <div>
            <div className="mx-5">
                <Link to={`/shop-category/${el.id}`}
                      className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="flex align-middle">
                        <p className="font-bold text-gray-700 dark:text-gray-400">{el.title}</p>
                        <FontAwesomeIcon
                            className="pl-4 pt-1"
                            icon={faArrowRight}/>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CategotyCartTwo;