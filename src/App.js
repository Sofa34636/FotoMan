import Footer from "./component/Footer/Footer";
import Gallery from "./component/Gallery/Gallery";

import Header from "./component/Header/Header";
import Info from "./component/Promo/Info/Info";
import Promo from "./component/Promo/Promo";


const App = () => {
  return (
    <div className="wrapper">
    <Header/>
    <Promo/>
    <div className="sdv">
    <Gallery/>
    <Info/>
    <Footer/>
    </div>
    </div>
  );
}

export default App;
