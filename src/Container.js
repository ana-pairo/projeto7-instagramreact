import Logo from "./Logo";
import LogoMobile from "./LogoMobile";
import InstagramMobile from "./InstagramMobile";
import Pesquisa from "./Pesquisa";
import IconesMobile from "./IconesMobile";
import IconesNavBar from "./IconesNavBar";

function Container () {
    return (
        <div class="container">
            < Logo />
            < LogoMobile />
            < InstagramMobile/>
            < Pesquisa />
            < IconesNavBar />
            < IconesMobile />
        </div>
    );
}

export default Container;