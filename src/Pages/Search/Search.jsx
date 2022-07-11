import React from "react";
import Rectangle from "../../Components/Main/ContentComponents/Main/MainComponents/Rectangle";
import "./Search.css";
import "../../App.css";
import "../../responsice.css";
import BestCities from "../../Components/Main/ContentComponents/Main/MainComponents/BestCities";
import ProductCards from "../../assets/common/Cards/ProductCards";
import {Helmet} from "react-helmet";



const Search = (props) => {

   /* useEffect(() => {
        props.getPopularProductCardData();
    },[]);*/

    return  <>
        <Helmet>
            <title>Tour2sky - Search</title>
        </Helmet>
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
                        {/*cat item*/}
                        <ProductCards productCards={props.productCards.data}
                                      addRemoveWishlist={props.addRemoveWishlist}
                                      getProductItemView={props.getProductItemView}
                                      isAuth={props.isAuth}
                                      token={props.token}/>
                        {/* cat item*/}
                    </div>
                </div>
            </div>
              {/*Popular end*/}


            {/* best cities  start*/}
            <BestCities/>
            {/* best cities end*/}


             {/*rectangle start*/}
            <Rectangle />
            {/*rectangle end*/}

           {/*rectangle start*/}
            <article className="row home_text section error200">
                <div className="container">
                    <div className="article-bottom">

                    <div className="row">
                        <p>Tourism means people traveling for fun.
                            It includes activities such as sightseeing and camping.
                            People who travel for fun are called "tourists".
                            Places where many tourists stay are called "resorts".
                            Places that people go to for tourism are called tourist destinations.</p>
                        <p>Tourism can bring damage to the local area, and/or the tourists. Litter,
                            scuba-diving and deforestation are problems for popular places such as St. Lucia,
                            Hawaii and others.
                            Scuba-diving can damage coral reefs which are home to hundreds of species of sea animals.
                            Tourism means people traveling for fun.
                            It includes activities such as sightseeing and camping.
                            People who travel for fun are called "tourists". </p>
                    </div>
                    </div>
                </div>
            </article>
        </main>





    </div>
</>
}
export default Search