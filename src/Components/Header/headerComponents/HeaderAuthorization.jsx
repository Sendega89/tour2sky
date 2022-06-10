import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import s from "../Header.module.css";
library.add(fas)


const HeaderAuthorization = () => {
    return  <div className="header_login no_login">
        <div className={`login_drop popup ${s.myLoginBlock}`}>
            <a href="#authorization" className="authorization" data-effect="mfp-zoom-in">
                <span>
                    <i>
                        <FontAwesomeIcon icon="fa fa-unlock-alt" aria-hidden="true" pull="left"></FontAwesomeIcon>
                    </i>Authorization
                </span>
            </a>
        </div>
    </div>

}
export default HeaderAuthorization