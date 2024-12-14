import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import LargeNavLink from './LargeNavLink';
import MainLogotype from '../../Logotypes/MainLogotype';
import {BurgerButton, BurgerInside, ContactsInBurger, StyledNavMenu, StyledWrapperNav} from "./HeaderStyles";
import {useCarousel} from "../../../contexts/CarouselContext";
import ExternalSocial from "../Footer/ExternalSocial";
import contacts from "../../../config/Contacts";
import TelegramLogotype from "../../Logotypes/TelegramLogotype";
import VkLogotype from "../../Logotypes/VkLogotype";
import YouTubeLogotype from "../../Logotypes/YouTubeLogotype";
import WhatsAppLogotype from "../../Logotypes/WhatsAppLogotype";

const NavMenuHeader = () => {
    const location = useLocation();
    const isHomeActive = location.pathname === '/';
    const { currentIndex, handleChangeColor, reverseChangeColor, allDarkColor } = useCarousel();
    const [darkColor, setDarkColor] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (currentIndex === 0) {
            setDarkColor(true);
        } else {
            setDarkColor(false);
        }

        if (menuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        // Cleanup function
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [menuOpen, currentIndex, isHomeActive]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <StyledNavMenu>
            <BurgerButton onClick={toggleMenu}>
                <BurgerInside open={menuOpen} />
            </BurgerButton>
            <StyledWrapperNav open={menuOpen}>
                <LargeNavLink dir="/satellite" location={location} darkColor={darkColor} onClick={() => handleChangeColor()}>Отследить спутник</LargeNavLink>
                <LargeNavLink dir="/events" location={location} darkColor={darkColor} onClick={() => handleChangeColor()}>Мероприятия</LargeNavLink>
                <LargeNavLink dir="/" location={location} onClick={() => reverseChangeColor()}>
                    <MainLogotype active={isHomeActive} />
                </LargeNavLink>
                <LargeNavLink dir="/gallery" location={location} darkColor={allDarkColor} onClick={() => handleChangeColor()}>Галерея</LargeNavLink>
                <LargeNavLink dir="/news" location={location} darkColor={allDarkColor} onClick={() => handleChangeColor()}>Новости</LargeNavLink>
                <LargeNavLink dir="/about" location={location} darkColor={allDarkColor} onClick={() => handleChangeColor()}>О нас</LargeNavLink>
                <ContactsInBurger>
                    <ExternalSocial hovered={true} href={contacts.telegram.href} target={"_blank"}><TelegramLogotype /></ExternalSocial>
                    <ExternalSocial hovered={true} href={contacts.vk.href} target={"_blank"}><VkLogotype /></ExternalSocial>
                    <ExternalSocial hovered={true} href={contacts.youtube.href} target={"_blank"}><YouTubeLogotype /></ExternalSocial>
                    <ExternalSocial hovered={true} href={contacts.whatsapp.href} target={"_blank"}><WhatsAppLogotype /></ExternalSocial>
                </ContactsInBurger>
            </StyledWrapperNav>
        </StyledNavMenu>
    );
};

export default NavMenuHeader;
