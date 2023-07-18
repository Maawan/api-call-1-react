import React from "react";
function Card({data}){
    
    console.log(data)
    return(
    
    <div className="container">
    <img src={data[0]?.picture.large} className="logo" alt=""/>
    <div className="name">
        <span>{data[0]?.name.title !== undefined ? data[0]?.name.title + ". " + data[0]?.name.first + " " + data[0]?.name.last : ""}</span>
        {console.log(data.gender)}
    </div>

    <hr/>
    <div className="otherInfo">
        <div className="item">
            <img src="./email.png"/>
            <p>{data[0]?.email !== undefined ? data[0]?.email : ""}</p>
        </div>
        <div className="item">
            <img src="./home.png"/>
            <p>{data[0]?.location.country}</p>
        </div>
        <div className="item">
            <img src="./call.png"/>
            <p>{data[0]?.phone}</p>
        </div>
        <div className="item">
            <img src="./birthday-cake.png"/>
            <p>{data[0]?.dob.age}</p>
        </div>
    </div>
</div>

)}
export default Card;