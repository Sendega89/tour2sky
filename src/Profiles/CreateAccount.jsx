import {NavLink} from "react-router-dom";
import {Form, Formik,Field} from "formik";

const CreateAccount = () => {
    return <div id="create" className="white-popup mfp-with-anim mfp-hide order_popup">
        <div className="popup_content">
            <div className="h3 center">Create an account</div>
            <div className="popup_form">

                    <div className="login_wrap">
                        <Formik initialValues={{
                            firstName: "",
                            lastName:"",
                            email:"",
                            password: "",

                        }} onSubmit={(values,submitProps) => {
                            console.log(values)
                        }}>
                            {({values, status}) => (
                                <Form>
                                    <div><Field
                                                placeholder={"First name"}
                                                type={"text"}
                                                name={"firstName"}
                                                value={values.firstName}/></div>

                                    <div><Field type="text" placeholder={"Last name"}
                                                name={"lastName"}
                                                value={values.lastName}/></div>

                                    <div><Field type="email"
                                                placeholder={"E-mail"}
                                                name={"email"}
                                                value={values.email}
                                    /></div>
                                    <div><Field type="password"
                                                placeholder={"Password"}
                                                name={"password"}
                                                value={values.password}
                                    /></div>
                                    <button type="submit">Create an account</button>
                                </Form>)}
                        </Formik>


                    </div>


                <div className="row authorization_link">
                    Or <NavLink to="/authorization" className="authorization">log in</NavLink>
                </div>
            </div>
        </div>
    </div>

}
export default CreateAccount