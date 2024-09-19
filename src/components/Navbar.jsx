import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Chat App</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/27779028/pexels-photo-27779028/free-photo-of-a-view-of-a-small-town-on-the-water-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt =''/>
                <span>hi</span>
                <button>logout</button>
            </div>
        </div>
    )
}
export default Navbar;