
import React from "react";
import "./style.scss";
import Cn from 'classnames'




export default function Item({ url, title, name, index }: any) {
    return (
        <div className={Cn('row', { 'center-row': (index + 2) % 3 === 0, })}>
            <div className="title">
                <h3>
                    <span >{title}</span>
                </h3>
            </div>
            <div className="image">
                <img src={url} alt="img" />
            </div>
            <div className="name">
                <h3 >
                    <span >{name}</span>
                </h3>
            </div>
            <div className="button">
                <button>BUY</button>
            </div>
        </div>
    );
}