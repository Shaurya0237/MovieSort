import React,{useState} from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./menuCard";
import Navbar from "./navbar.js";

const uniqueList=[
    ...new Set(
        Menu.map((currElem)=>{
            return currElem.category;
        })
    ),
    "All",
];

const Restaurant=()=>{
    const [menuData,setmenuData]=useState(Menu);
    const filterItem=(category)=>{
        if(category==="All")
        {
            setmenuData(Menu);
            return;
        }
        const updateList=Menu.filter((currElem)=>{
            return currElem.category===category;
        });
        setmenuData(updateList);
    };
    return (
        <div>
         <Navbar menuList={uniqueList} filterItem={filterItem}/>
         <MenuCard menuData={menuData} />
         </div>
    )  

}
export default Restaurant;