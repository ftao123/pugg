// Customer.tsx
import React from "react";
import "./style.scss";
import logo from '../../images/logo.png'
import medium from '../../images/svg/m.svg'
import tme from '../../images/svg/t.svg'
import twitter from '../../images/svg/tw.svg'
import github from '../../images/svg/g.svg'

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt='logo' />
            </div>
            <div className="links">
                <div className="item">
                    <a href="https://medium.com/@PUGG.io">
                        <img src={medium} alt='medium' />
                    </a>
                </div>
                <div className="item">
                    <a href="https://t.me/PUGG_COIN">
                        <a href="https://medium.com/@PUGG.io">
                            <img src={tme} alt='tme' />
                        </a>
                    </a>
                </div>
                <div className="item">
                    <a href="https://twitter.com/puggcoin">
                        <a href="https://medium.com/@PUGG.io">
                            <img src={twitter} alt='twitter' />
                        </a>
                    </a>
                </div>
                <div className="item">
                    <a href="https://github.com/PuggTeam">
                        <a href="https://medium.com/@PUGG.io">
                            <img src={github} alt='github' />
                        </a>
                    </a>
                </div>
            </div>
            <div className="nav-main" style={{ marginRight: '15px' }}>
                <a href="https://marketplace.pugg.io" className="elementor-button-link elementor-animation-grow">Marketplace</a>
            </div>
            <div className="nav-main" style={{ width: "102px" }}>
                <a href="https://pancakeswap.finance/swap?outputCurrency=0x83404e49ad2a3fde41f3fc4ca946f9c8db3508cd" className="elementor-button-link elementor-animation-grow">Pancake</a>
            </div>
        </div>
    );
}