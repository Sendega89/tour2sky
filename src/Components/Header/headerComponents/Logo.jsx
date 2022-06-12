import logo from "../../../assets/img/logo.png";
import "./logo.css";
import {NavLink} from "react-router-dom";

const Logo = () => {
    return <div className="logo">
        <NavLink to="/"><img className="lozad" src={logo} alt="Tour2Sky"/></NavLink>
</div>
}
export default Logo