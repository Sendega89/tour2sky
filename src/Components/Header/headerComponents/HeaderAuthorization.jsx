import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";




const HeaderAuthorization = () => {
    return  <div className="header_login no_login">
        <div className="login_drop popup">
            <NavLink to="/authorization" className="authorization" data-effect="mfp-zoom-in">
              <span>
                  <i><FontAwesomeIcon icon="fa-solid fa-unlock-alt" aria-hidden="true" pull="left"/></i>
                Authorization
              </span>


            </NavLink>
        </div>
    </div>

}
export default HeaderAuthorization