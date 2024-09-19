import React from "react";


const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img src="https://images.pexels.com/photos/27779028/pexels-photo-27779028/free-photo-of-a-view-of-a-small-town-on-the-water-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
                <span> just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                {/* <img src="https://images.pexels.com/photos/27779028/pexels-photo-27779028/free-photo-of-a-view-of-a-small-town-on-the-water-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                 alt="" /> */}
            </div>
            
        </div>
    )
}

export default Message;