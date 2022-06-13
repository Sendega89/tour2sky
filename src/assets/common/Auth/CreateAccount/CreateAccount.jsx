


const CreateAccount = () => {
    return <div id="create" className="white-popup mfp-with-anim mfp-hide order_popup">
        <div className="popup_content">
            <div className="h3 center">Create an account</div>
            <div className="popup_form">
                <form className="fofm">
                    <div className="login_wrap">
                        <input type="text" placeholder="First name"/>
                            <input type="text" placeholder="Last name"/>
                                <input type="text" placeholder="E-mail"/>
                                    <input type="password" placeholder="Password"/>
                                        <button type="button">Create an account</button>
                    </div>
                </form>

                <div className="row authorization_link">
                    Or <a href="#authorization" className="authorization">log in</a>
                </div>
            </div>
        </div>
    </div>

}
export default CreateAccount