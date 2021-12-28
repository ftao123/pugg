
import React from "react";
import "./style.scss";
import item from "../../images/svg/item.svg";



export default function Item({ url, des }: any) {
    return (
        <div className="row">
            <h1 style={{ color: 'pink' }}>111 {des}</h1>
            <div id="des">
                <span >
                    {des}
                </span>
            </div>

            <img src={item} alt="title" />
            <div>
                <img src={url} alt="img" />
            </div>

            <h1 style={{ color: 'pink' }}>111 {des}</h1>
            <div id="des">
                <span >
                    {des}
                </span>
            </div>




        </div>
    );
}