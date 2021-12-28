// Customer.tsx
import React from "react";
import "./style.scss";

export default function Footer() {
    return (
        <div className="footer">
            {/* <div className="container">
                <div className="row">

                    <div className="join">
                        <div className="title">Join the community</div>
                        <div className="imgs">
                            <a href="https://medium.com/@PUGG.io"><svg t="1639122852693" className="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2299" width="26" height="26" style="width: 19px;font-size: 500%"><path d="M1024 761.124571l0 119.442286-366.884571 0 0-119.442286 76.580571 0 0-529.115429-3.437714 0-179.419429 648.557714-138.825143 0-177.152-648.557714-4.534857 0 0 529.115429 77.165714 0 0 119.442286-307.419429 0 0-119.442286 39.424 0q11.995429 0 24.576-11.117714t12.580571-21.430857l0-503.442286q0-10.313143-12.580571-22.820571t-24.576-12.580571l-39.424 0 0-119.442286 384 0 126.317714 469.138286 3.437714 0 127.414857-469.138286 382.829714 0 0 119.442286-40.594286 0q-10.825143 0-23.405714 12.580571t-12.580571 22.820571l0 503.442286q0 10.313143 12.288 21.430857t23.698286 11.117714l40.594286 0z" p-id="2300" fill="#ffffff"></path></svg></a>
                            <a href="https://t.me/PUGG_COIN"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" style="font-size: 300%"><defs><style>.a{fill:#fff;fill-rule:evenodd}</style></defs><path className="a" d="M39.85,45.37a1.83,1.83,0,0,0,1.71.22,1.78,1.78,0,0,0,1.11-1.3C44,38,47.27,22,48.49,16.28a1.2,1.2,0,0,0-.4-1.18,1.24,1.24,0,0,0-1.23-.21c-6.48,2.4-26.42,9.88-34.58,12.9a1.27,1.27,0,0,0,.08,2.41c3.66,1.1,8.46,2.62,8.46,2.62S23.06,39.59,24.23,43a1.38,1.38,0,0,0,.93.89,1.35,1.35,0,0,0,1.25-.32l4.79-4.52S36.72,43.14,39.85,45.37ZM22.84,32l2.59,8.56L26,35.1,41.74,20.91a.42.42,0,0,0,0-.58.44.44,0,0,0-.58-.1Z"></path></svg></a>
                            <a href="https://twitter.com/puggcoin"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" style="font-size: 300%"><defs><style>.a{fill:#fff}</style></defs><path className="a" d="M47.88,18.76A15.29,15.29,0,0,1,43.51,20a7.58,7.58,0,0,0,3.34-4.21A15.42,15.42,0,0,1,42,17.6a7.61,7.61,0,0,0-13,6.93,21.57,21.57,0,0,1-15.68-7.94,7.61,7.61,0,0,0,2.36,10.15,7.6,7.6,0,0,1-3.45-.95,7.61,7.61,0,0,0,6.1,7.55,7.59,7.59,0,0,1-3.43.13,7.61,7.61,0,0,0,7.1,5.29A15.33,15.33,0,0,1,10.8,41.91a21.62,21.62,0,0,0,11.66,3.41c14.12,0,22.1-11.92,21.62-22.62A15.47,15.47,0,0,0,47.88,18.76Z"></path></svg></a>
                            <a href="https://github.com/PuggTeam"><svg t="1638523170879" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2309" width="25" height="25" style="width: 31px;font-size: 300%;"><path d="M512 73.142857c242.285714 0 438.857143 196.571429 438.857143 438.857143 0 193.718857-125.696 358.290286-299.995429 416.585143-22.272 3.986286-30.281143-9.728-30.281143-21.138286 0-14.299429 0.585143-61.696 0.585143-120.576 0-41.142857-13.714286-67.437714-29.696-81.152 97.718857-10.861714 200.557714-48.018286 200.557715-216.576 0-48.018286-17.152-86.857143-45.129143-117.723428 4.571429-11.446857 19.419429-55.990857-4.571429-116.553143-36.571429-11.446857-120.576 45.129143-120.576 45.129143a412.525714 412.525714 0 0 0-219.428571 0S318.317714 243.419429 281.746286 254.866286c-23.990857 60.562286-9.142857 105.142857-4.571429 116.553143-28.013714 30.866286-45.129143 69.705143-45.129143 117.723428 0 168.009143 102.290286 205.714286 200.009143 216.576-12.580571 11.446857-23.990857 30.866286-28.013714 58.843429-25.161143 11.446857-89.161143 30.866286-127.414857-36.571429-23.990857-41.728-67.437714-45.129143-67.437715-45.129143-42.861714-0.585143-2.852571 26.843429-2.852571 26.843429 28.562286 13.129143 48.566857 64 48.566857 64 25.709714 78.299429 148.004571 52.004571 148.004572 52.004571 0 36.571429 0.585143 70.838857 0.585142 81.700572 0 11.446857-8.009143 25.161143-30.281142 21.138285C198.912 870.253714 73.216 705.682286 73.216 511.963429c0-242.285714 196.571429-438.857143 438.857143-438.857143zM239.433143 703.414857c1.133714-2.304-0.585143-5.156571-3.986286-6.838857-3.437714-1.133714-6.290286-0.585143-7.424 1.133714-1.133714 2.304 0.585143 5.156571 3.986286 6.838857 2.852571 1.718857 6.290286 1.133714 7.424-1.133714z m17.700571 19.456c2.304-1.718857 1.718857-5.705143-1.133714-9.142857-2.852571-2.852571-6.838857-3.986286-9.142857-1.718857-2.304 1.718857-1.718857 5.705143 1.133714 9.142857 2.852571 2.852571 6.838857 3.986286 9.142857 1.718857z m17.152 25.709714c2.852571-2.304 2.852571-6.838857 0-10.861714-2.304-3.986286-6.838857-5.705143-9.728-3.437714-2.852571 1.718857-2.852571 6.290286 0 10.276571s7.424 5.705143 9.728 3.986286z m23.990857 23.990858c2.304-2.304 1.133714-7.424-2.304-10.861715-3.986286-3.986286-9.142857-4.571429-11.446857-1.718857-2.852571 2.304-1.718857 7.424 2.304 10.861714 3.986286 3.986286 9.142857 4.571429 11.446857 1.718858z m32.585143 14.299428c1.133714-3.437714-2.304-7.424-7.424-9.142857-4.571429-1.133714-9.728 0.585143-10.861714 3.986286s2.304 7.424 7.424 8.557714c4.571429 1.718857 9.728 0 10.861714-3.437714z m35.986286 2.852572c0-3.986286-4.571429-6.838857-9.728-6.290286-5.156571 0-9.142857 2.852571-9.142857 6.290286 0 3.986286 3.986286 6.838857 9.728 6.290285 5.156571 0 9.142857-2.852571 9.142857-6.290285z m33.133714-5.705143c-0.585143-3.437714-5.156571-5.705143-10.276571-5.156572-5.156571 1.133714-8.557714 4.571429-8.009143 8.557715 0.585143 3.437714 5.156571 5.705143 10.276571 4.571428s8.557714-4.571429 8.009143-8.009143z" fill="#ffffff" p-id="2310"></path></svg></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="logo">
                        <img src="./images/logo2.png">
                            <div className="title"><a href="/">PUGG</a></div>
                            <div className="content">PUGG, as the starting point of the Metaverse, will disrupt civic, social, gaming, and multiple industries with an open cooperative ecology and scenario extension.</div>
                    </div>
                    <div className="links">
                        <div className="column">
                            <div className="title">Social Media</div>
                            <a href="https://medium.com/@PUGG.io">Medium</a>
                            <a href="https://twitter.com/puggcoin">Twitter</a>
                            <a href="https://www.facebook.com/PUGG.IO2021/">Facebook</a>
                            <a href="https://www.linkedin.com/in/pugg-coin-680a47227/">Linkedin</a>
                        </div>
                        <div className="column">
                            <div className="title">Companies</div>
                            <a href="/">PUGG</a>
                            <a href="/">MetaBorder Envirnment</a>

                        </div>
                        <div className="column">
                            <div className="title">Resources</div>
                            <a href="https://doc.pugg.io">Documents</a>
                            <a href="https://github.com/PuggTeam">Github</a>
                        </div>

                    </div>
                </div>
                <div className="row copyright">
                    <div className="zone">© 2021 PUGG</div>

                </div>
            </div> */}
        </div>
    );
}