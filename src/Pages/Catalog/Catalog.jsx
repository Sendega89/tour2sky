import React from "react";
import "../../App.css"

const Catalog = () => {
    return <div className="balloningWrapper">
        <div class="container">
            <div class="row">
                <h1>Sierra Nevada Helicopter tours</h1>
                <p>The best helicopter adventures in USA, Sierra Nevada. You will be as excited as it possible. Professional pilots, experianced guides, best helicopter views ever. </p>
            </div>
        </div>


    <main>

         catalog start
        <div class="catalog_item row">
            <div class="container">
                {/* breadcrumbs */}
                <div class="row breadcrumbs">
                    <a href="#">Home page</a>
                    <a href="#">Balloning</a>
                    <span>Sierra Nevada</span>
                </div>
                 {/*breadcrumbs

                 catalog row */}
                <div class="row catalog_row">
                     Sidebar
                    <div class="sidebar">

                        <a class="pp-credit-block-button" href="#" onclick="return false">
                            <svg class="button-icon fill-secondary" width="17" height="17" aria-hidden="true" role="img" viewBox="0 0 24 24"><path d="M9.6 5.2c-.4-1.3-1.7-2-3-1.6-.8.2-1.5.9-1.7 1.6H3v1.5h1.9C5.3 8.1 6.7 8.8 8 8.4c.8-.2 1.4-.9 1.7-1.7H21V5.2H9.6zM12 15.5c-1.1 0-2 .7-2.4 1.8H3v1.5h6.7c.4 1.3 1.8 2.1 3.1 1.7.8-.2 1.4-.9 1.7-1.7H21v-1.5h-6.6c-.3-1.1-1.3-1.8-2.4-1.8zM16.8 9.5c-1.1 0-2 .7-2.4 1.8H3v1.5h11.4c.4 1.3 1.8 2.1 3.1 1.7.8-.2 1.4-.9 1.7-1.7H21v-1.5h-1.9c-.3-1.1-1.3-1.8-2.3-1.8z"></path></svg>
                            Filter</a>
                        <div class="popup-credit">
                            <div class="credit_block">
                                <a class="cancelComment" title=""><i class="fa fa-times" aria-hidden="true"></i></a>

                                {/* price slider */}
                                <div class="row wighet">
                                    <h4>Filter by price</h4>
                                    <div class="row wighet_row">
                                        <div id="slider-range"></div>
                                        <div class="row price_slider">
                                            <input type="text" id="amount" readonly />
                                        </div>
                                    </div>
                                </div>
                               {/*  price slider

                                 lenth slider */}
                                <div class="row wighet">
                                    <h4>Flight lenth</h4>
                                    <div class="row wighet_row">
                                        <div id="slider_lenth"></div>
                                        <div class="row price_slider">
                                            <input type="text" id="amount_lenth" readonly />
                                        </div>
                                    </div>
                                </div>
                                {/* lenth slider

                                 Rating */}
                                <div class="row wighet">
                                    <h4>Filter by Rating</h4>
                                    <div class="row wighet_row">

                                        <div class="row checkbox_row">
                                            <div class="row checkbox_item">
                                                <label class="custom-big-checkbox">
                                                    <input type="checkbox" name="1" id="otkritka1" class="align-self-center"/>
                                                        <span class="custom-big-checkbox__checkbox"></span>
                                                </label>
                                                <span class="labeltext">5 star</span>
                                            </div>
                                            <div class="row checkbox_item">
                                                <label class="custom-big-checkbox">
                                                    <input type="checkbox" name="2" id="otkritka2" class="align-self-center"/>
                                                        <span class="custom-big-checkbox__checkbox"></span>
                                                </label>
                                                <span class="labeltext">4 star</span>
                                            </div>
                                            <div class="row checkbox_item">
                                                <label class="custom-big-checkbox">
                                                    <input type="checkbox" name="3" id="otkritka3" class="align-self-center"/>
                                                        <span class="custom-big-checkbox__checkbox"></span>
                                                </label>
                                                <span class="labeltext">3 star</span>
                                            </div>
                                            <div class="row checkbox_item">
                                                <label class="custom-big-checkbox">
                                                    <input type="checkbox" name="4" id="otkritka4" class="align-self-center"/>
                                                        <span class="custom-big-checkbox__checkbox"></span>
                                                </label>
                                                <span class="labeltext">2 star</span>
                                            </div>

                                            <div class="row checkbox_item">
                                                <label class="custom-big-checkbox">
                                                    <input type="checkbox" name="5" id="otkritka5" class="align-self-center"/>
                                                        <span class="custom-big-checkbox__checkbox"></span>
                                                </label>
                                                <span class="labeltext">1 star</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 {/*Rating */}

                               {/*  lenth slider*/}
                                <div class="row wighet">
                                    <h4>Top cities</h4>
                                    <div class="row wighet_row">
                                        <div class="filter_links">
                                            <a href="#">Accra</a>
                                            <a href="#">Addis Ababa</a>
                                            <a href="#">Boston</a>
                                            <a href="#">Cali</a>
                                            <a href="#">Dallas</a>
                                            <a href="#">Hangzhou</a>
                                            <a href="#">Kuala Lumpur</a>
                                            <a href="#">Mumbai</a>
                                            <a href="#">San Jose</a>
                                            <a href="#">Taipei</a>
                                        </div>
                                    </div>
                                </div>
                                 {/*lenth slider */}
                            </div>
                        </div>
                    </div>
                 {/*    Sidebar

                     cat right */}
                    <div class="catalog_r">

                        <div class="row cat_top">
                            <h4>96 helicopter tours found</h4>
                            <div class="short">
                                <select>
                                    <option>Sort by price</option>
                                    <option>Sort by rating</option>
                                    <option>Sort by popular</option>
                                </select>
                            </div>
                        </div>

                        <div class="row row-15">
                            {/* cat item */}
                            <div class="cat_item">
                                <div class="cat_item_vn row">
                                    <div class="cat_item_img"><a href="#"><img src="img/p1.jpg" /></a></div>
                                    <div class="cat_item_center">
                                        <div class="cat_item_title row">
                                            <i class="fa fa-bookmark" aria-hidden="true"></i>
                                            <a href="#">Tour2Sky VIP: NYC Helicopter Flight and Statue of Liberty Cruise</a>
                                        </div>
                                        <div class="cat_item_price row">
                                            <div class="item_price">$ 420</div>
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star deactivate"></i>
                                            </div>
                                        </div>
                                        <div class="cat_item_desk">
                                            This is short tour description, can be few rows of text
                                        </div>
                                    </div>
                                    <div class="cat_item_details">
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                            </div>
                            {/* cat item

                             cat item */}
                            <div class="cat_item">
                                <div class="cat_item_vn row">
                                    <div class="cat_item_img"><a href="#"><img src="img/p1.jpg" /></a></div>
                                    <div class="cat_item_center">
                                        <div class="cat_item_title row">
                                            <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                                            <a href="#">Orlando</a>
                                        </div>
                                        <div class="cat_item_price row">
                                            <div class="item_price">$ 420</div>
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star deactivate"></i>
                                            </div>
                                        </div>
                                        <div class="cat_item_desk">
                                            This is short tour description, can be few rows of text
                                        </div>
                                    </div>
                                    <div class="cat_item_details">
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                            </div>
                            {/* cat item

                             cat item */}
                            <div class="cat_item">
                                <div class="cat_item_vn row">
                                    <div class="cat_item_img"><a href="#"><img src="img/p1.jpg" /></a></div>
                                    <div class="cat_item_center">
                                        <div class="cat_item_title row">
                                            <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                                            <a href="#">Tour2Sky VIP: NYC Helicopter Flight and Statue of Liberty Cruise</a>
                                        </div>
                                        <div class="cat_item_price row">
                                            <div class="item_price">$ 420</div>
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star deactivate"></i>
                                            </div>
                                        </div>
                                        <div class="cat_item_desk">
                                            This is short tour description, can be few rows of text
                                        </div>
                                    </div>
                                    <div class="cat_item_details">
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                            </div>
                             cat item
                             cat item
                            <div class="cat_item">
                                <div class="cat_item_vn row">
                                    <div class="cat_item_img"><a href="#"><img src="img/p1.jpg" /></a></div>
                                    <div class="cat_item_center">
                                        <div class="cat_item_title row">
                                            <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                                            <a href="#">San Jose</a>
                                        </div>
                                        <div class="cat_item_price row">
                                            <div class="item_price">$ 420</div>
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star deactivate"></i>
                                            </div>
                                        </div>
                                        <div class="cat_item_desk">
                                            This is short tour description, can be few rows of text
                                        </div>
                                    </div>
                                    <div class="cat_item_details">
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                            </div>
                           {/*  cat item
                             cat item
                             cat item */}
                            <div class="cat_item">
                                <div class="cat_item_vn row">
                                    <div class="cat_item_img"><a href="#"><img src="img/p1.jpg" /></a></div>
                                    <div class="cat_item_center">
                                        <div class="cat_item_title row">
                                            <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                                            <a href="#">San Jose</a>
                                        </div>
                                        <div class="cat_item_price row">
                                            <div class="item_price">$ 420</div>
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star deactivate"></i>
                                            </div>
                                        </div>
                                        <div class="cat_item_desk">
                                            This is short tour description, can be few rows of text
                                        </div>
                                    </div>
                                    <div class="cat_item_details">
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                            </div>
                            {/* cat item
                             cat item */}
                            <div class="cat_item">
                                <div class="cat_item_vn row">
                                    <div class="cat_item_img"><a href="#"><img src="img/p1.jpg" /></a></div>
                                    <div class="cat_item_center">
                                        <div class="cat_item_title row">
                                            <i class="fa fa-bookmark" aria-hidden="true"></i>
                                            <a href="#">Tour2Sky VIP: NYC Helicopter Flight and Statue of Liberty Cruise</a>
                                        </div>
                                        <div class="cat_item_price row">
                                            <div class="item_price">$ 420</div>
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star deactivate"></i>
                                            </div>
                                        </div>
                                        <div class="cat_item_desk">
                                            This is short tour description, can be few rows of text
                                        </div>
                                    </div>
                                    <div class="cat_item_details">
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                            </div>
                            {/* cat item

                             cat item */}
                            <div class="cat_item">
                                <div class="cat_item_vn row">
                                    <div class="cat_item_img"><a href="#"><img src="img/p1.jpg" /></a></div>
                                    <div class="cat_item_center">
                                        <div class="cat_item_title row">
                                            <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                                            <a href="#">Orlando</a>
                                        </div>
                                        <div class="cat_item_price row">
                                            <div class="item_price">$ 420</div>
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star deactivate"></i>
                                            </div>
                                        </div>
                                        <div class="cat_item_desk">
                                            This is short tour description, can be few rows of text
                                        </div>
                                    </div>
                                    <div class="cat_item_details">
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                            </div>
                            {/* cat item

                             cat item */}
                            <div class="cat_item">
                                <div class="cat_item_vn row">
                                    <div class="cat_item_img"><a href="#"><img src="img/p1.jpg" /></a></div>
                                    <div class="cat_item_center">
                                        <div class="cat_item_title row">
                                            <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                                            <a href="#">Kolkata</a>
                                        </div>
                                        <div class="cat_item_price row">
                                            <div class="item_price">$ 420</div>
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star deactivate"></i>
                                            </div>
                                        </div>
                                        <div class="cat_item_desk">
                                            This is short tour description, can be few rows of text
                                        </div>
                                    </div>
                                    <div class="cat_item_details">
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                            </div>
                             {/*cat item

                             cat item */}
                            <div class="cat_item">
                                <div class="cat_item_vn row">
                                    <div class="cat_item_img"><a href="#"><img src="img/p1.jpg" /></a></div>
                                    <div class="cat_item_center">
                                        <div class="cat_item_title row">
                                            <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                                            <a href="#">Tour2Sky VIP: NYC Helicopter Flight and Statue of Liberty Cruise</a>
                                        </div>
                                        <div class="cat_item_price row">
                                            <div class="item_price">$ 420</div>
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star deactivate"></i>
                                            </div>
                                        </div>
                                        <div class="cat_item_desk">
                                            This is short tour description, can be few rows of text
                                        </div>
                                    </div>
                                    <div class="cat_item_details">
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                            </div>
                             {/*cat item*/}
                        </div>

                        {/* pagination */}
                        <div class="row pagination">
                            <ul>
                                <li><a href="#">1</a></li>
                                <li><span class="active">2</span></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">6</a></li>
                            </ul>
                        </div>
                         {/*pagination*/}

                        <article class="row cat_text">
                            <p>Tourism means people traveling for fun. It includes activities such as sightseeing and camping. People who travel for fun are called "tourists". Places where many tourists stay are called "resorts". Places that people go to for tourism are called tourist destinations.</p>
                            <p>Tourism can bring damage to the local area, and/or the tourists. Litter, scuba-diving and deforestation are problems for popular places such as St. Lucia, Hawaii and others. Scuba-diving can damage coral reefs which are home to hundreds of species of sea animals. Tourism means people traveling for fun. It includes activities such as sightseeing and camping. People who travel for fun are called "tourists". </p>
                        </article>

                    </div>
                     {/*cat right */}

                </div>
                 {/*catalog row */}

            </div>
        </div>
          {/*catalog end */}

    </main>
      {/*Main end */}
</div>

}
export default Catalog