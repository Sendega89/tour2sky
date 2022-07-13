import s from "./Rectangle.module.css";
import {subscribe} from "../../../../../api/api";


const  Rectangle = () => {

     const subscribeMe =(e)=> {
        subscribe.subscribe(e.target[0].value)
         e.preventDefault()
         e.target[0].value=''
     }


    return     <div className="row rectangle section" >
        <div className="container">
            <div className="row_title row_title_white">
                <h3>Subscribe to the newsletter</h3>
                <p>Tour2Sky searches any city, town, landmark, attraction or address across the globe with thousands of multi-modal routes to easily get you from A to B.</p>
            </div>

            <div className={`row header_search ${s.header_search}`}>
                <form action="email" onSubmit={subscribeMe}>
                    <input type="text" className="input_search" placeholder="Enter your e-mail" />
                    <button  type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    </div>
}
export default Rectangle