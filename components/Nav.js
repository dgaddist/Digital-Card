import React from "react"

export default function Nav()
{
    return (
        <div>
        <header>
        <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4Ih4kT8hG0c_usMtiSF35SZK2cEaszjBmg&usqp=CAU"/>
        <h1> Destiny Gaddist</h1>
        <h2>Frontend Developer</h2>
        <h3>destineegaddist@gmail.com</h3>
        <nav className="nav-buttons">
        <button className="email-button"> <i className="fa-solid fa-envelope"></i>
        Email </button>
        <button className="linkedinbutton"><i className="fa-brands fa-linkedin"></i>LinkedIn</button>
        </nav>
        </header>
        </div>
    )
}