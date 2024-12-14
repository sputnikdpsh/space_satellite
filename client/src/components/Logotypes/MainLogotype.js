import React, { useState, useEffect } from 'react';
import LogoSVG from "../../assets/LogoSVG";
import { StyledLogo } from "../NavMenu/Header/HeaderStyles";

const MainLogotype = ({ active }) => {
    const color = active ? 'var(--sunset-orange)' : 'var(--dark-night)';
    const hoverColor = 'var(--sunset-orange)';

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1200);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <StyledLogo $hoverColor={hoverColor}>
            {isMobile ? 'Главная' : <LogoSVG color={color} />}
        </StyledLogo>
    );
};

export default MainLogotype;
