import React from "react";
import s from "./Order.module.css";
import '../../App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import RatingTour2Sky from "../../assets/common/Rating/RatingTour2Sky";
import serviceImage from "../../assets/img/Rectangle Copy 22.jpg";
import {Field, Form, Formik} from "formik";



const Order = (props) => {

    return <main>
        <div className={s.Checkout_wrapper}>
            <div className={s.Checkout_left}>
                <div className={s.Checkout_item}>
                    <h2>Secure Checkout</h2>
                    <p>Checkout securely — it takes only a few minutes</p>

                    <div className={s.Checkout_product}>
                        <div className={s.Checkout_product__image}>
                            <img src={serviceImage}/></div>
                        <div className={s.Checkout_product__right}>
                            <span><i><FontAwesomeIcon icon="fa-solid fa-calendar" aria-hidden="true"/></i>12.20.2019</span>
                            <h3>Sierra Nevada Helicopter day tour</h3>
                            <RatingTour2Sky/>
                        </div>
                    </div>
                    <div className={s.Checkout_Form}>
                    <h4>Traveler Details</h4>
                       <p className={s.Checkout_Form_Info}>Information we need to confirm your tour or activity</p>
                </div>
                    <h5>Lead Traveler</h5>
<OrderForm />
                </div>

                <div className={s.Checkout_right}>

                </div>
            </div>
        </div>

    </main>
}

export const OrderForm = (props) => {
    return <Formik initialValues={{
        name: "",
        surname:"",
        email:"",
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
                    <Field  placeholder={"First name"}
                            type={"text"}
                            name={"name"}
                            value={values.name}
                            /></div>
                <div>

                    <Field type="text"
                           placeholder={"Last name"}
                           name={"surname"}
                           value={values.surname}
                           /></div>

                <div>

                    <Field type="email"
                           placeholder={"E-mail"}
                           name={"email"}
                           value={values.email}

                    />
                </div>
                <div>

                    <Field type="password"
                           placeholder={"Password"}
                           name={"password"}
                           value={values.password}

                    /></div>
                <div>

                    <Field type="phone"
                           placeholder={"Phone"}
                           name={"phone"}
                           value={values.phone}

                    /></div>
                <div>
                    <Field type="text"
                           placeholder={"Company Name"}
                           name={"company_name"}
                           value={values.company_name}

                    /></div>

                <button type="submit">Create an account</button>
            </Form>)}
    </Formik>
}
export default Order