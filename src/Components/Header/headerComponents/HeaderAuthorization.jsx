import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const HeaderAuthorization = () => {
    return  <div className="header_login no_login">
        <div className="login_drop popup">
            <a href="#authorization" className="authorization" data-effect="mfp-zoom-in">
                <span><FontAwesomeIcon icon="fa fa-unlock-alt" aria-hidden="true"></FontAwesomeIcon>Authorization</span>
            </a>
        </div>
    </div>

}
export default HeaderAuthorization