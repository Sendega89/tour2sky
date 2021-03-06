import React, {useEffect, useState} from "react";
import s from "./PersonalInfo.module.css";
import {NavLink} from "react-router-dom";
import AuthContainer from "../../Profiles/AuthContainer";
import {Helmet} from "react-helmet-async";
import {Field, FieldArray, Form, Formik} from "formik";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";


const PersonalInfo = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [deleteAccMode,setDeleteAccMode] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        props.getProfileInfo(props.token)
    },[editMode])
    return <div>
        <Helmet>
            <title>Tour2sky - My Account</title>
        </Helmet>
        {props.isAuth ?
            <div className={"myAccountPage"}>
                <div className="content">
                    <main>
                        <div className="catalog_item row">
                            <div className="container">
                                <div className="row catalog_row">
                                    <div className="sidebar">
                                        <div className="row wighet">
                                            <h5>Hi, {props.name} <br/>{props.surname}</h5>
                                            <div className="row wighet_row">
                                                <div className="account_links">
                                                    <ul>
                                                        <li><NavLink to="/bookings">Bookings</NavLink></li>
                                                        <li><NavLink to="/myAccount">
                                                            Personal info</NavLink></li>
                                                        <li><NavLink to="/wishlist">Wishlist</NavLink></li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="catalog_r">
                                        <div className="row account_settings">
                                            <h4>{editMode ? "Account settings" : "Personal info"}</h4>
                                            <div className="row row-15">
                                                <Formik initialValues={{
                                                    name: props.name,
                                                    surname: props.surname,
                                                    email: props.email,
                                                    phone: props.phone,
                                                    hobbies: "hobbies",
                                                    about: "about",
                                                    subscribe_news: true,
                                                    social_profiles: [props.social_profiles],
                                                }}
                                                        onSubmit={(values) => {
                                                            props.getUpdateProfile(values, props.token);
                                                            props.getProfileInfo(props.token)
                                                            setEditMode(!editMode)
                                                        }}>
                                                    {({values}) => (
                                                        <Form>
                                                            <div className={s.infoContainer}>
                                                                <div className={s.infoItem}>
                                                                    <span>First Name</span>
                                                                    {editMode ? <Field
                                                                            placeholder={props.name}
                                                                            type={"text"}
                                                                            name={"name"}
                                                                            value={values.name}/> :
                                                                        <span>{props.name}</span>}
                                                                </div>
                                                                <div className={s.infoItem}>
                                                                    <span>Last Name</span>
                                                                    {editMode ? <Field
                                                                            placeholder={props.surname}
                                                                            type={"text"}
                                                                            name={"surname"}
                                                                            value={values.surname}/> :
                                                                        <span>{props.surname}</span>}
                                                                </div>
                                                                <div className={s.infoItem}>
                                                                    <span>E-mail</span>
                                                                    {editMode ? <Field type="email"
                                                                                       placeholder={"email"}
                                                                                       name={"email"}
                                                                                       value={values.email}/> :
                                                                        <span>{props.email}</span>}
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className={s.infoItem}>
                                                                    <span>Phone</span>
                                                                    {editMode ? <Field type="phone"
                                                                                       placeholder={"phone"}
                                                                                       name={"phone"}
                                                                                       value={values.phone}/> :
                                                                        <span>{props.phone}</span>}
                                                                </div>

                                                                <div className={s.infoItem}>
                                                                    <span>Social profiles </span>
                                                                    <span>{!props.social_profiles.length > 0 ? props.social_profiles :
                                                                        props.social_profiles.map(item =>
                                                                            <div>{item}</div>)
                                                                    }</span>
                                                                    <FieldArray name="social_profiles">
                                                                        {({remove, push}) => (
                                                                            <div>
                                                                                {values.social_profiles.length > 0 &&
                                                                                    values.social_profiles.map((social_profiles, index) => (
                                                                                        <div className="row"
                                                                                             key={index}>
                                                                                            {editMode && <div>
                                                                                                <Field
                                                                                                    name={`social_profiles.${index}`}
                                                                                                    placeholder="addSocial"
                                                                                                    type="text"
                                                                                                />
                                                                                            </div>}
                                                                                            <div>
                                                                                                {editMode && <div
                                                                                                    className={s.secondaryDel}
                                                                                                    onClick={() => remove(index)}
                                                                                                >
                                                                                                    X
                                                                                                </div>}
                                                                                            </div>
                                                                                        </div>
                                                                                    ))}
                                                                                {editMode && <div
                                                                                    className={s.secondaryAdd}
                                                                                    onClick={() => push()}
                                                                                >
                                                                                    Add
                                                                                </div>}
                                                                            </div>
                                                                        )}
                                                                    </FieldArray>
                                                                </div>

                                                                <div className={s.infoItem}>
                                                                    <label>
                                                                        <span>Subscribe News</span>
                                                                        <Field type={"checkbox"}
                                                                               name={"subscribe_news"}
                                                                        />
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    {!editMode && <button className={s.account_button}
                                                                                          onClick={() => setEditMode(!editMode)}>
                                                                        Edit</button>}

                                                                </div>
                                                                {!editMode &&
                                                                <div className={s.deleteAccountContainer}>
                                                                    <div>
                                                                        <Dialog
                                                                            open={open}
                                                                            onClose={handleClose}
                                                                            aria-labelledby="alert-dialog-title"
                                                                            aria-describedby="alert-dialog-description"
                                                                        >
                                                                            <DialogTitle id="alert-dialog-title">
                                                                                {"Are you sure you want to delete your account?"}
                                                                            </DialogTitle>
                                                                            <DialogActions>
                                                                                <Button onClick={handleClose}>Disagree</Button>
                                                                                <Button onClick={()=>props.getDeleteClientProfile(props.token)} autoFocus>
                                                                                    Agree
                                                                                </Button>
                                                                            </DialogActions>
                                                                        </Dialog>
                                                                    </div>
                                                                    <Button className={s.account_button} variant="outlined" onClick={handleClickOpen}>
                                                                        Delete account
                                                                    </Button>
                                                                </div>}

                                                            </div>
                                                            {editMode &&
                                                                <div className={s.account_buttonContainer}>
                                                                    <button className={s.account_button}
                                                                            onClick={() => setEditMode(!editMode)}>Cancel
                                                                    </button>
                                                                    <button className={s.account_button}
                                                                            type="submit">Save
                                                                    </button>
                                                                </div>}
                                                        </Form>)}
                                                </Formik>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div> : <AuthContainer/>}

    </div>
}

export default PersonalInfo