import React from "react";
import {Error, Loader, PodCard} from '../components'
import {allCategories} from '../assets/genre/allCategories'
const Discover = () => {

    const categoryTitle = 'Comedy'

    return(
        
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mv-10">
                <h2 className="font-bold text-3xl text-[#e9e2e7] text-left">DISCOVER {categoryTitle}</h2>
                <select
                    onChange={() => {}}
                    value=""
                    className="bg-[#090708] text-[#aa8da2] p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
                >
                    {allCategories.map((category) => <option key={category.id} value={category.id}>{category.title}</option>)}
                </select>
            </div>
            Discover
        </div>
    )
} 
export default Discover;
