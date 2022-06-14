

const Authorization = () => {
    return <div id="authorization"
                className="white-popup mfp-with-anim mfp-hide order_popup">
        <div className="popup_content">
            <div className="h3 center">Authorization</div>
            <p>Hi and welcome to the Tour2Sky personal account area.<br/> Please, enter your mobile phone number in
                order to verify you. </p>
            <div className="popup_form">
                <form className="fofm">
                    <div className="login_wrap">
                        <input type="text" placeholder="Your name"/>
                            <input type="password" placeholder="Password"/>
                                <button type="button">Log In</button>
                    </div>
                </form>
                <div className="row authorization_link">
                    New her? <a href="#create" className="create">Create an account</a>
                </div>
            </div>
        </div>
    </div>
}
export default Authorization