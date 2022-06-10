import s from "./Rectangle.module.css";

const  Rectangle = () => {
    return     <div className={`row rectangle section ${s.row}`} >
        <div className="container">
            <div className="row_title row_title_white">
                <h3>Subscribe to the newsletter</h3>
                <p>Tour2Sky searches any city, town, landmark, attraction or address across the globe with thousands of multi-modal routes to easily get you from A to B.</p>
            </div>

            <div className={`row header_search ${s.header_search}`}>
                <form action="email"><input type="text" className="input_search" placeholder="Entet your e-mail" />
                <button>Subscribe</button></form>
            </div>
        </div>
    </div>
}
export default Rectangle