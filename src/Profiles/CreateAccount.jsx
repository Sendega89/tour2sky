import {Navigate, NavLink} from "react-router-dom";
import {Form, Formik,Field} from "formik";
import s from "./AuthProfiles.module.css"
import React, {useEffect} from "react";


const CreateAccount = (props) => {

   useEffect(()=>{
       props.getUserType()
    },[]);

    if (props.createdSuccess){
        return   <Navigate to="/authorization"/>
    }

    return <div id="create" className="white-popup mfp-with-anim mfp-hide order_popup">
        <div className="popup_content">
            <div className="h3 center">Create an account</div>
            <div className="popup_form">

                    <div className="login_wrap">
                        <Formik initialValues={{
                            name: "name",
                            surname:"surname",
                            email:"lololo@gmail.com",
                            password: "00000000",
                            phone:"+380956665544",
                            type:props.userType || 1,
                            company_name:"lego",
                            company_type:1

                        }} onSubmit={(values,submitProps) => {
                            props.createAccount(values,submitProps.setStatus)
                        }}>
                            {({values, status}) => (
                                <Form>
                                    <div>
                                    {status && status.error.name && <span className={s.error}>{status.error.name}</span>}
                                        <Field  placeholder={"First name"}
                                                type={"text"}
                                                name={"name"}
                                                value={values.name}
                                                className={status &&status.error.name && s.error}/></div>

                                    <div>
                                    {status && status.error.surname && <span className={s.error}>{status.error.surname}</span>}
                                        <Field type="text"
                                                placeholder={"Last name"}
                                                name={"surname"}
                                                value={values.surname}
                                                className={status &&status.error.surname && s.error}/></div>

                                    <div>
                                    {status && status.error.email && <span className={s.error}>{status.error.email}</span>}
                                        <Field type="email"
                                                placeholder={"E-mail"}
                                                name={"email"}
                                                value={values.email}
                                                className={status &&status.error.email && s.error}
                                    />
                                    </div>
                                    <div>
                                    {status && status.error.password && <span className={s.error}>{status.error.password}</span>}
                                        <Field type="password"
                                                placeholder={"Password"}
                                                name={"password"}
                                                value={values.password}
                                                className={status &&status.error.password && s.error}
                                    /></div>
                                    <div>
                                    {status && status.error.phone && <span className={s.error}>{status.error.phone}</span>}
                                        <Field type="phone"
                                                placeholder={"Phone"}
                                                name={"phone"}
                                                value={values.phone}
                                                className={status && status.error.phone && s.error}
                                    /></div>
                                    <div>
                                    {status && status.error.company_name && <span className={s.error}>{status.error.company_name}</span>}
                                        <Field type="text"
                                                placeholder={"Company Name"}
                                                name={"company_name"}
                                                value={values.company_name}
                                                className={status && status.error.company_name && s.error}
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