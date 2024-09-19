import React from "react";

const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type ="text" placeholder="find a user"/>
            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/27779028/pexels-photo-27779028/free-photo-of-a-view-of-a-small-town-on-the-water-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
                <div className="userChatInfo">
                <span>Huz</span>
                </div>
                
            </div>
        </div>
    )
}

export default Search