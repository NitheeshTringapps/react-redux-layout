import './App.css';
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function Layout(){
    return(
        <div className="Layout">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default Layout;