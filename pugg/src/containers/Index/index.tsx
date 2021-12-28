
import React from "react";
import "./style.scss";
import Item from "./Item";

const data = [
    {
        url: 'https://static.wixstatic.com/media/47cf01_2698e8b88ac84b95ad104f1b5888c23c~mv2.png/v1/fill/w_576,h_709,al_c,lg_1,q_90/shutterstock_1898354080.webp',
        des: 'INA DAJCI'
    }
]

export default function Index() {
    return (
        <main >
            <div className="grid">
                {data.map((d) => <Item {...d} />)}
            </div>
        </main>
    );
}