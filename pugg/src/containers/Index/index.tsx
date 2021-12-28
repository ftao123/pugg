
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
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210611094Q512b-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643251777&t=20bd84c9977daa2f8af935ced6cc6730',
        title: 'ARUBA',
        name: 'THESSALY ZIMMERMAN'
    },
    {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210611094Q512b-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643251777&t=20bd84c9977daa2f8af935ced6cc6730',
        title: 'ARUBA',
        name: 'THESSALY ZIMMERMAN'
    },
    {
        url: 'https://static.wixstatic.com/media/47cf01_2698e8b88ac84b95ad104f1b5888c23c~mv2.png/v1/fill/w_576,h_709,al_c,lg_1,q_90/shutterstock_1898354080.webp',
        title: 'ARUBA',
        name: 'THESSALY ZIMMERMAN'
    },
]

const data2 = [
    {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210611094Q512b-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643251777&t=20bd84c9977daa2f8af935ced6cc6730',
        title: 'A1',
        name: 'A B'
    },
    {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210611094Q512b-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643251777&t=20bd84c9977daa2f8af935ced6cc6730',
        title: 'A2',
        name: 'A B'
    },
    {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210611094Q512b-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643251777&t=20bd84c9977daa2f8af935ced6cc6730',
        title: 'A3',
        name: 'A B'
    },
    {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210611094Q512b-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643251777&t=20bd84c9977daa2f8af935ced6cc6730',
        title: 'A4',
        name: 'A B'
    },
    {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210611094Q512b-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643251777&t=20bd84c9977daa2f8af935ced6cc6730',
        title: 'A5',
        name: 'A B'
    },
    {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210611094Q512b-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643251777&t=20bd84c9977daa2f8af935ced6cc6730',
        title: 'A6',
        name: 'A B'
    },
    {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210611094Q512b-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643251777&t=20bd84c9977daa2f8af935ced6cc6730',
        title: 'A7',
        name: 'A B'
    },
    {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210611094Q512b-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643251777&t=20bd84c9977daa2f8af935ced6cc6730',
        title: 'A8',
        name: 'A B'
    },
    {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210611094Q512b-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643251777&t=20bd84c9977daa2f8af935ced6cc6730',
        title: 'A9',
        name: 'A B'
    },

]

export default function Index() {
    return (
        <main >
            <div className="grid">
                {data.map((d, index) => <Item {...d} index={index} />)}
            </div>
        </main>
    );
}