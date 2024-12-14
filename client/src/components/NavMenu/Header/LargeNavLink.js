import React from 'react';
import {StyledLink} from "./HeaderStyles";

const LargeNavLink = ({ dir, children, location, darkColor, onClick }) => {
    const isActive = location.pathname === dir;
    return (
        <StyledLink to={dir} $darkColor={darkColor} $active={isActive} onClick={onClick}>
            {children}
        </StyledLink>
    );
};

export default LargeNavLink;
