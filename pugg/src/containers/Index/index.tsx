
import React from "react";
import "./style.scss";
import Item from "./Item";

const data = [
    {
        url: 'https://static.wixstatic.com/media/47cf01_2698e8b88ac84b95ad104f1b5888c23c~mv2.png/v1/fill/w_576,h_709,al_c,lg_1,q_90/shutterstock_1898354080.webp',
        title: 'ARUBA',
        name: 'THESSALY ZIMMERMAN'
    },
    {
        url: 'https://static.wixstatic.com/media/47cf01_311550ad2e8e47629fbce5d4a686c132~mv2.png/v1/fill/w_576,h_709,al_c,lg_1,q_90/shutterstock_1898354080.webp',
        title: 'ARGENTINA',
        name: 'JULIETA GARCIA'
    },
    {
        url: 'https://static.wixstatic.com/media/47cf01_aa1b506eb94e4ddb8db3306ad06f1342~mv2.png/v1/fill/w_576,h_709,al_c,lg_1,q_90/shutterstock_1898354080.webp',
        title: 'ARMENIA',
        name: 'NANE AVETISYAN'
    },
    {
        url: 'https://static.wixstatic.com/media/47cf01_2698e8b88ac84b95ad104f1b5888c23c~mv2.png/v1/fill/w_576,h_709,al_c,lg_1,q_90/shutterstock_1898354080.webp',
        title: 'ARUBA',
        name: 'THESSALY ZIMMERMAN'
    },
    {
        url: 'https://static.wixstatic.com/media/47cf01_311550ad2e8e47629fbce5d4a686c132~mv2.png/v1/fill/w_576,h_709,al_c,lg_1,q_90/shutterstock_1898354080.webp',
        title: 'ARGENTINA',
        name: 'JULIETA GARCIA'
    },
    {
        url: 'https://static.wixstatic.com/media/47cf01_aa1b506eb94e4ddb8db3306ad06f1342~mv2.png/v1/fill/w_576,h_709,al_c,lg_1,q_90/shutterstock_1898354080.webp',
        title: 'ARMENIA',
        name: 'NANE AVETISYAN'
    },
    {
        url: 'https://static.wixstatic.com/media/47cf01_2698e8b88ac84b95ad104f1b5888c23c~mv2.png/v1/fill/w_576,h_709,al_c,lg_1,q_90/shutterstock_1898354080.webp',
        title: 'ARUBA',
        name: 'THESSALY ZIMMERMAN'
    },
    {
        url: 'https://static.wixstatic.com/media/47cf01_311550ad2e8e47629fbce5d4a686c132~mv2.png/v1/fill/w_576,h_709,al_c,lg_1,q_90/shutterstock_1898354080.webp',
        title: 'ARGENTINA',
        name: 'JULIETA GARCIA'
    },
    {
        url: 'https://static.wixstatic.com/media/47cf01_aa1b506eb94e4ddb8db3306ad06f1342~mv2.png/v1/fill/w_576,h_709,al_c,lg_1,q_90/shutterstock_1898354080.webp',
        title: 'ARMENIA',
        name: 'NANE AVETISYAN'
    },
]

export default function Index() {

    const indexs = [1, 2]



    return (
        <main >
            <div className="p-head">
                <div className="caption">
                    <div className="title">Global NFT Digital IP &amp; Assets Summit </div>
                    <div className="date-location">
                        <div className="data">
                            <i className="icon-calendar"></i> May 11, 2021
                            - <span aria-hidden="true"></span> May 12, 2021
                        </div>
                        <div className="time">
                            <i className="icon-clock"></i>
                            <span className="" aria-hidden="true"></span> 9:30 am
                            - <span className="" aria-hidden="true"></span> 5:00 pm
                        </div>
                    </div>
                    <div className="location">
                        <i className="icon-location"></i> Tencent Conference + Bilibili Live Stream Beijing Time
                    </div>
                    <p>
                        NFTs, or non-fungible tokens, have exploded in popularity this year. The demand for NFTs is continuing to surge and the NFT market is showing no signs of slowing down. Therefore, we have invited industry leaders and experts to discuss the future of NFT trend.
                    </p>
                    <div className="group-btn">
                        <button className="btn btn-secondary" onClick={() => { alert(11) }}>Attend</button>
                        <button className="btn btn-outline-white">Watch it Live</button>
                    </div>
                </div>
            </div>
            <div className="read-more">
                <h2 className="title title-1">About the Conference</h2>
                <p>This summit covers 3 major topics: 1. NFT Applications in Financial Industry and its Business Models; 2. NFT Applications in Arts and Intellectual Property Protection and its Business Models; 3. NFT Applications in IoT and Edge Computing and its Business Models;</p>
                <p></p>
                <a className="btn btn-secondary" href="http://summit.oumi.group/about-us/">Read More</a>
            </div>

            <div className="node-title">
                <h2 >Speakers2</h2>
            </div>

            <div className="grid">
                {data.map((d, index) => <Item {...d} index={index} />)}
            </div>
            <ul className="pagination">
                <li className="item">
                    <button className="left">
                        <span role="img" aria-label="left" className="anticon anticon-left"><svg viewBox="64 64 896 896" focusable="false" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg></span>
                    </button>
                </li>
                {indexs.map((i) => (
                    <li className="ant-pagination-item ant-pagination-item-2" ><a rel="nofollow">{i}</a></li>
                ))}
                <li style={{ marginRight: '15%' }}>
                    <button className="right" >
                        <span role="img" aria-label="right" className="anticon anticon-right"><svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg></span>
                    </button>
                </li>
            </ul>

            <div className="node-title">
                <h2 >Speakers3</h2>
            </div>

            <div className="sponsor">
                <div className="item">
                    <div className="line" />
                    <div className="row">
                        <div className="left">
                            <span className="sponsor-subtitle">Sponsors</span>
                        </div>
                        <div className="right">
                            <div className="img-holder">
                                <img src="http://summit.oumi.group/wp-content/uploads/2021/04/微信图片_20210413235901.jpg" alt="Home" />
                            </div>
                            <div className="img-holder">
                                <img src="http://summit.oumi.group/wp-content/uploads/2021/04/微信图片_20210414001601.jpg" alt="Home" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="line" />
                    <div className="row">
                        <div className="left">
                            <span className="sponsor-subtitle">Sponsors</span>
                        </div>
                        <div className="right">
                            <div className="img-holder">
                                <img src="http://summit.oumi.group/wp-content/uploads/2021/04/微信图片_20210413235901.jpg" alt="Home" />
                            </div>
                            <div className="img-holder">
                                <img src="http://summit.oumi.group/wp-content/uploads/2021/04/微信图片_20210414001601.jpg" alt="Home" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}