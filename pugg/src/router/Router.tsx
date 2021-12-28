import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";

import Index from "../containers/Index";
import Home from "../containers/Home";


export default function Router() {
    {/* 所有的路由配置均在 BrowserRouter 内部 */ }
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <Header />
            <BrowserRouter>
                {/* 使用 Routes 替换曾经的 Switch */}
                <Routes>
                    <Route path='/' element={<Index />} />
                    <Route path='home' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}