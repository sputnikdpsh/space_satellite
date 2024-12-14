import React from "react";
import { About, Events, Gallery, Home, News, NotFound, Satellite, EventDetails } from '../pages/index'
import {Navigate, Route, Routes} from "react-router-dom";


const LinksRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/events" element={<Events/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/satellite" element={<Satellite/>} />
            <Route path="/events/:id" element={<EventDetails />} />

            <Route path="*" element={<Navigate to={"/404"}/>}/>
            <Route path="/404" element={<NotFound/>}/>
        </Routes>
    );
};

export default LinksRoute;