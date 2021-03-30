import React from "react"
import phonelogo from "./Phonelogo.png"
 export default class Navbar extends React.Component {
    render() {
        return(
            <nav className="header">
                <div className="header-container">
                    <h1 className="logo"><span className="logo1">PC   <span className="logo2">    |</span></span> helper</h1>
                    <div className="menu">
                        <p>Услуги</p>
                        <p>Отзывы</p>
                        <p>Контакты</p>
                    </div>
                    <div className="header-phone">
                        <img src={phonelogo}/>
                        <p>+375 (29) 220-12-00</p>
                    </div>
                </div>
                <div className="header-container-mob">
                    <h1 className="logo"><span className="logo1">PC   <span className="logo2">    |</span></span> helper</h1>
                    <div className="header-phone">
                        <img src={phonelogo}/>
                        <p>+375 (29) 220-12-00</p>
                    </div>
                </div>
            </nav>
        )
    }
 }
