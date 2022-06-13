import React from "react";
import Rectangle from "../../Components/Main/ContentComponents/Main/MainComponents/Rectangle";
import "./Search.css";
import "../../App.css";
import "../../responsice.css"
import itemImage from "../../assets/img/p1.jpg";
import BestCities from "../../Components/Main/ContentComponents/Main/MainComponents/BestCities";
const Search = () => {
    return  <>
    <div className="error200">
        <div className="header_title">
            <div className="container">
                <div className="row">
                    <h1>Helicopter rides Kyiv</h1>
                    <p>Sorry, we can’t find this. Try again. </p>
                    <div className="ht_content">
                        <div className="row header_search">
                            <input type="text" className="input_search" placeholder="Enter city, region or country" />
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* Main start */}
        <main>

            {/*Popular start */}
            <div className="catalog_item row">
                <div className="container">
                    <h3>Popular helicopter tours</h3>
                    <div className="row row-15">
                        {/*cat item */}
                        <div className="cat_item">
                            <div className="cat_item_vn row">
                                <div className="cat_item_img"><a href="#"><img src={itemImage} /></a></div>
                                <div className="cat_item_center">
                                    <div className="cat_item_title row">
                                        <i className="fa fa-bookmark" aria-hidden="true"></i>
                                        <a href="#">Tour2Sky VIP: NYC Helicopter Flight and Statue of Liberty Cruise</a>
                                    </div>
                                    <div className="cat_item_price row">
                                        <div className="item_price">$ 420</div>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star deactivate"></i>
                                        </div>
                                    </div>
                                    <div className="cat_item_desk">
                                        This is short tour description, can be few rows of text
                                    </div>
                                </div>
                                <div className="cat_item_details">
                                    <a href="#">Buy</a>
                                </div>
                            </div>
                        </div>
                         {/*cat item*/}

                         {/*cat item */}
                        <div className="cat_item">
                            <div className="cat_item_vn row">
                                <div className="cat_item_img"><a href="#"><img src={itemImage} /></a></div>
                                <div className="cat_item_center">
                                    <div className="cat_item_title row">
                                        <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                                        <a href="#">Tour2Sky VIP: NYC Helicopter Flight and Statue of Liberty Cruise</a>
                                    </div>
                                    <div className="cat_item_price row">
                                        <div className="item_price">$ 420</div>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star deactivate"></i>
                                        </div>
                                    </div>
                                    <div className="cat_item_desk">
                                        This is short tour description, can be few rows of text
                                    </div>
                                </div>
                                <div className="cat_item_details">
                                    <a href="#">Buy</a>
                                </div>
                            </div>
                        </div>
                        {/* cat item*/}
                    </div>
                </div>
            </div>
              {/*Popular end*/}


            {/* best cities  start*/}
            <BestCities/>
            {/*<div className="row best_cities section">
                <div className="container">
                    <h3>The best cities for balloning</h3>
                    <div className="myBestCities">
                        <ul>
                            <li><a href="#">Accra</a></li>
                            <li><a href="#">Cali</a></li>
                            <li><a href="#">Hangzhou</a></li>
                            <li><a href="#">Mumbai</a></li>
                            <li><a href="#">San Jose</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Amsterdam</a></li>
                            <li><a href="#">Brussels</a></li>
                            <li><a href="#">Cape Town</a></li>
                            <li><a href="#">Lagos</a></li>
                            <li><a href="#">Orlando</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Auckland</a></li>
                            <li><a href="#">Barcelona</a></li>
                            <li><a href="#">Busan</a></li>
                            <li><a href="#">Charlotte</a></li>
                            <li><a href="#">Greenville</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Jackson</a></li>
                            <li><a href="#">Los Angeles</a></li>
                            <li><a href="#">Rotterdam</a></li>
                            <li><a href="#">Sydney</a></li>
                            <li><a href="#">Winnipeg</a></li>
                        </ul>
                    </div>
                </div>
            </div>*/}
            {/* best cities end*/}


             {/*rectangle start*/}
            <Rectangle />
            {/*rectangle end*/}

           {/*rectangle start*/}
            <article className="row home_text section error200">
                <div className="container">
                    <div className="article-bottom">

                    <div className="row">
                        <p>Tourism means people traveling for fun. It includes activities such as sightseeing and camping. People who travel for fun are called "tourists". Places where many tourists stay are called "resorts". Places that people go to for tourism are called tourist destinations.</p>
                        <p>Tourism can bring damage to the local area, and/or the tourists. Litter, scuba-diving and deforestation are problems for popular places such as St. Lucia, Hawaii and others. Scuba-diving can damage coral reefs which are home to hundreds of species of sea animals. Tourism means people traveling for fun. It includes activities such as sightseeing and camping. People who travel for fun are called "tourists". </p>
                    </div>
                    </div>
                </div>
            </article>
        </main>





    </div>
</>
}
export default Search