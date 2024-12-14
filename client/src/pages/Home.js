import React, { useEffect, useState } from 'react';
import BackgroundSlider from '../components/BackgroundSlider/BackgroundSlider';
import UnderBurger from '../assets/Background/UnderBurger.svg';
import LogoSVG from '../assets/LogoSVG';
import { PageWrapper } from '../components/PageWrapper';
import styled from 'styled-components';
import MobileBackgroundBox from '../assets/Background/MobileBackground.svg';
import NavMenuFooter from "../components/NavMenu/Footer/NavMenuFooter";

const WelcomePage = styled.div`
  position: relative;
  width: 97vw;
  height: 930px;
  background-image: url(${MobileBackgroundBox});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;

  @media (max-width: 1200px) {
    width: 98.5vw;
  }

  @media (max-width: 1187px) {
    width: 97.9vw;
  }

  @media (max-width: 720px) {
    width: 96.5vw;
  }

  @media (max-width: 500px) {
    width: 100vw;
  }
`;

const UnderBurgerBox = styled.img`
  position: absolute;
  width: 100%;
  height: 25%;
  top: 0;
  right: 0;
  object-fit: cover;
`;

const MobileLogo = styled.div`
  position: absolute;
  z-index: 25;
  width: 12.1875%;
  height: 4.95575221238938%;
  top: 20px;
  left: 43.75%;
`;

const WelcomeHeader = styled.h1`
  position: absolute;
  top: 28.84955752212389%;
  padding: 6.25%;
  color: var(--dark-night);
  font-family: var(--font-family);
  font-weight: 400;
`;

const Home = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1200);
        };

        window.addEventListener('resize', handleResize);

        // Очистка слушателя при размонтировании компонента
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!isMobile) {
        return (
            <>
                <BackgroundSlider />
                <NavMenuFooter/>
            </>
        );
    } else {
        return (
            <WelcomePage>
                <UnderBurgerBox src={UnderBurger} />
                <MobileLogo>
                    <LogoSVG color={"var(--pure-white)"} />
                </MobileLogo>
                <PageWrapper>
                    <WelcomeHeader>
                        СЛЕДИТЕ ЗА ПОЛОЖЕНИЕМ СПУТНИКА В РЕАЛЬНОМ ВРЕМЕНИ
                    </WelcomeHeader>
                </PageWrapper>
            </WelcomePage>
        );
    }
};

export default Home;
