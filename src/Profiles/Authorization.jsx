import {NavLink, Navigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";



const Authorization = (props) => {

    if(props.isAuth){
      return  <Navigate to={"/myAccount"}/>
    }
    return <div id="authorization"
                className="white-popup mfp-with-anim mfp-hide order_popup">
        <div className="popup_content">
            <div className="h3 center">Authorization</div>
            <p>Hi and welcome to the Tour2Sky personal account area.<br/> Please, enter your mobile phone number in
                order to verify you. </p>
            <div className="popup_form">

                <div className="login_wrap">
                    <Formik initialValues={{
                        email: "sendega89@gmail.com",
                        password: "24052016",
                    }}
                       onSubmit={(values, submitProps) => {
                                props.login(values.email,values.password,values.type)
                            }}>
                        {({values, status}) => (
                            <Form>
                                <div><Field
                                    placeholder={"Your email"}
                                    type={"email"}
                                    name={"email"}
                                    value={values.firstName}/></div>

                                <div><Field type="password"
                                            placeholder={"Password"}
                                            name={"password"}
                                            value={values.password}
                                /></div>
                                <button type="submit">Log In</button>
                            </Form>)}
                    </Formik>

                </div>

                <div className="row authorization_link">
                    New here? <NavLink to="/create" className="create">Create an account</NavLink>
                </div>
            </div>
        </div>
    </div>
}

export default  Authorization