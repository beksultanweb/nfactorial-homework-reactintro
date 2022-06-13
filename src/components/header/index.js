import React from "react";
import {format} from 'date-fns';
import "./style.css";
import Logo from "../../icons/fontawesome";

// const time = format(
//     new Date(2022, 6, 13),
//     'DD.MM.YYYY HH:mm'
//   );
const Header = () =>{
    return(  
        <div className="header-wrapper">
            <div><Logo/></div>
            <div className="time">{format(new Date(), 'do MMMM Y HH:mm')}</div>
        </div>
    )
};

export default Header;