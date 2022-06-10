import './App.css';
import "./font-awesome.css"
//import Header from "./Components/Header/Header";
import Content from "./Components/Main/Content";
import Footer from "./Components/Footer/Footer";
import AltHeader from "./Components/ALtHeader/AltHeader";
import Header from "./Components/Header/Header";



function App() {
    return <div className="wrapper">
        <AltHeader />
        {/*<Header/>*/}
        <Content/>
        <Footer/>
    </div>
}

export default App;
