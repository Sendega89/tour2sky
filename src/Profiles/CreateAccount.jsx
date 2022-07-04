import {NavLink} from "react-router-dom";
import {Form, Formik,Field} from "formik";


const CreateAccount = (props) => {

    return <div id="create" className="white-popup mfp-with-anim mfp-hide order_popup">
        <div className="popup_content">
            <div className="h3 center">Create an account</div>
            <div className="popup_form">

                    <div className="login_wrap">
                        <Formik initialValues={{
                            name: "",
                            surname:"",
                            email:"",
                            password: "",
                            phone:"",
                            type:1,
                            company_name:"",
                            company_type:1

                        }} onSubmit={(values,submitProps) => {
                            props.createAccount(values,submitProps.setStatus)
                        }}>
                            {({values, status}) => (
                                <Form>
                                    <div><Field
                                                placeholder={"First name"}
                                                type={"text"}
                                                name={"name"}
                                                value={values.name}/></div>

                                    <div><Field type="text" placeholder={"Last name"}
                                                name={"surname"}
                                                value={values.surname}/></div>

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
                                    <div><Field type="phone"
                                                placeholder={"Phone"}
                                                name={"phone"}
                                                value={values.phone}
                                    /></div>
                                    <div><Field type="text"
                                                placeholder={"Company Name"}
                                                name={"company_name"}
                                                value={values.company_name}
                                    /></div>
                                    {status && status.error && (
                                        <div className={"error"}>
                                            {status.error}
                                        </div>)}
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