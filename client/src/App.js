import './App.css';
import NavMenuHeader from "./components/NavMenu/Header/NavMenuHeader";
import {BrowserRouter} from "react-router-dom";
import LinksRoute from "./router/Router";
// import NavMenuFooter from "./components/NavMenu/Footer/NavMenuFooter";
import {CarouselProvider} from "./contexts/CarouselContext";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <CarouselProvider>
                    <NavMenuHeader />
                    <LinksRoute />
                    {/*<NavMenuFooter />*/}
                </CarouselProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
