import React from "react";
import Carousel from "../../assets/common/Carousel/Сarousel";
import About from "../../Components/Main/ContentComponents/Main/MainComponents/About";
import BestCities from "../../Components/Main/ContentComponents/Main/MainComponents/BestCities";
import oval from "../../assets/img/oval.png";
import rewiev from "../../assets/img/review_icon.png";
import post from "../../assets/img/post.jpg";
import post2 from "../../assets/img/post2.jpg"
import img1 from "../../assets/img/rectangle.png";
import img2 from "../../assets/img/rectangle-copy-5.png";
import img3 from "../../assets/img/rectangle-copy-6.png";
import img4 from "../../assets/img/rectangle-copy-7.png";
const Balloning = () => {
    return <>
        <div className="section">
            <div className="balloning">
                <div className="header_title">
                    <div className="container">
                        <div className="row">
                            <h1>Find your best<br/> baloon tour now!</h1>
                            <div className="ht_content">
                                <div className="row header_search">
                                    <input type="text" className="input_search"
                                           placeholder="Enter city, region or country"/>
                                    <button>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <main>
                    <div className="row best_cities section">
                        <div className="container">
                            <BestCities/>
                        </div>
                    </div>
                </main>
            </div>
        </div>

        { /*best cities end */}

        {/* Start top */}
        <div className="container">
        <Carousel img1={img1}
                  img2={img2}
                  img3={img3}
                  img4={img4}/>
        </div>
        {/* End top*/}

        {/*post start*/}
        <div className="row post section">
            <div className="container">
                <h3>Our Views</h3>
                <div className="row row-15 blog_grid more2 gallery">

                    <div className="row row_item">

                        <div className="col-2 blogBox blog_item">
                            <a href={post} className="post_big">
                                <img src={post}/>
                            </a>
                            <div className="row-15 row post_smoll">
                                <div className="post_smoll_item">
                                    <a href="../../assets/img/post.jpg">
                                        <img src={post2}/>
                                    </a>
                                </div>
                                <div className="post_smoll_item">
                                    <a href="../../assets/img/post.jpg">
                                        <img src={post2}/>
                                    </a>
                                </div>
                                <div className="post_smoll_item">
                                    <a href="../../assets/img/post2.jpg">
                                        <img src={post2}/>
                                    </a>
                                </div>
                                <div className="post_smoll_item">
                                    <a href="../../assets/img/post.jpg">
                                        <img src={post2}/>
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="col-2 blogBox blog_item">
                            <div className="row-15 row post_smoll">
                                <div className="post_smoll_item">
                                    <a href="../../assets/img/post.jpg">
                                        <img src={post2}/>
                                    </a>
                                </div>
                                <div className="post_smoll_item">
                                    <a href="../../assets/img/post.jpg">
                                        <img src={post2}/>
                                    </a>
                                </div>
                                <div className="post_smoll_item">
                                    <a href="../../assets/img/post.jpg">
                                        <img src={post2}/>
                                    </a>
                                </div>
                                <div className="post_smoll_item">
                                    <a href="../../assets/img/post.jpg">
                                        <img src={post2}/>
                                    </a>
                                </div>
                            </div>
                            <a href="../../assets/img/post.jpg" className="post_big">
                                <img src={post}/>
                            </a>
                        </div>
                        {/*Blog Item col*/}
                    </div>
                    {/* Blog Item row */}

                    {/*Blog Item row */}
                    <div className="row row_item">
                        {/*Blog Item col*/}
                        <div className="col-2 blogBox blog_item">
                            <a href="../../assets/img/post.jpg" className="post_big">
                                <img src={post}/>
                            </a>
                            <div className="row-15 row post_smoll">
                                <div className="post_smoll_item">
                                    <a href="../../assets/img/post.jpg">
                                        <img src={post2}/>
                                    </a>
                                </div>
                                <div className="post_smoll_item">
                                    <a href="../../assets/img/post.jpg">
                                        <img src={post2}/>
                                    </a>
                                </div>
                                <div className="post_smoll_item">
                                    <a href="../../assets/img/post2.jpg">
                                        <img src={post2}/>
                                    </a>
                                </div>
                                <div className="post_smoll_item">
                                    <a href="../../assets/img/post.jpg">
                                        <img src={post2}/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-2 blogBox blog_item">
                            <div className="row-15 row post_smoll">
                                <div className="post_smoll_item">
                                    <a href="../../assets/img/post.jpg">
                                        <img src={post2}/>
                                    </a>
                                </div>
                                <div className="post_smoll_item">
                                    <a href="../../assets/img/post.jpg">
                                        <img src={post2}/>
                                    </a>
                                </div>
                                <div className="post_smoll_item">
                                    <a href="../../assets/img/post.jpg">
                                        <img src={post2}/>
                                    </a>
                                </div>
                                <div className="post_smoll_item">
                                    <a href="#">
                                        <img src={post2}/>
                                    </a>
                                </div>
                            </div>
                            <a href="#" className="post_big">
                                <img src={post}/>
                            </a>
                        </div>

                    </div>

                </div>

                <div className="center">
                    <a href="#" id="loadMore" className="btn">Load more</a>{/*for mobile*/}
                    <a href="#" id="loadMoredesc" className="btn">Load more</a>
                </div>

            </div>
        </div>
        {/* post end

     Faq start*/}
        <div className="row faq section">
            <div className="container">
                <div className="row_title row_title_white">
                    <h3>FAQ for newbie ballooners</h3>
                </div>
                <div className="row">
                    <div className="faq_l">
                        <ul>
                            <li>WARM, COMFORTABLE CLOTHING</li>
                            <li>YOUR CAMERA, BINOCULARS OR CAMCORDER AS OUR BALLOON MAKES AN EXCELLENT PLATFORM FOR
                                PHOTOGRAPHY
                            </li>
                            <li>TO DOUBLE CHECK YOUR FLIGHT TIME</li>
                            <li>TO WEAR APPROPRIATE FOOTWEAR AND CLOTHES WHICH YOU DON'T MIND GETTING A LITTLE DIRTY
                            </li>
                        </ul>
                    </div>

                    <div className="faq_r">
                        <div className="owl_faq owl-carousel owl-theme">
                            <div className="item">
                                <div className="row review">
                                    <div className="row review_top">
                                        <div className="review_top_l"><img src={oval}/></div>
                                        <div className="review_top_r">How to be ready?</div>
                                    </div>
                                    <div className="row review_niz">
                                        <div className="review_niz_l">Just prepare all your warm clothes and be ready to
                                            film your «best ever» flight. Althow please, double check your flight time
                                            and
                                            come a bit earlier to have possibility to listen for our short instructions
                                        </div>
                                        <div className="review_niz_r"><img src={rewiev}/></div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="row review">
                                    <div className="row review_top">
                                        <div className="review_top_l"><img src={oval}/></div>
                                        <div className="review_top_r">How to be ready?</div>
                                    </div>
                                    <div className="row review_niz">
                                        <div className="review_niz_l">Just prepare all your warm clothes and be ready to
                                            film your «best ever» flight. Althow please, double check your flight time
                                            and
                                            come a bit earlier to have possibility to listen for our short instructions
                                        </div>
                                        <div className="review_niz_r"><img src="../../assets/img/review_icon.png"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="row review">
                                    <div className="row review_top">
                                        <div className="review_top_l"><img src={oval}/></div>
                                        <div className="review_top_r">How to be ready?</div>
                                    </div>
                                    <div className="row review_niz">
                                        <div className="review_niz_l">Just prepare all your warm clothes and be ready to
                                            film your «best ever» flight. Althow please, double check your flight time
                                            and
                                            come a bit earlier to have possibility to listen for our short instructions
                                        </div>
                                        <div className="review_niz_r"><img src={rewiev}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="row review">
                                    <div className="row review_top">
                                        <div className="review_top_l"><img src={oval}/></div>
                                        <div className="review_top_r">How to be ready?</div>
                                    </div>
                                    <div className="row review_niz">
                                        <div className="review_niz_l">Just prepare all your warm clothes and be ready to
                                            film your «best ever» flight. Althow please, double check your flight time
                                            and
                                            come a bit earlier to have possibility to listen for our short instructions
                                        </div>
                                        <div className="review_niz_r"><img src={rewiev}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="row review">
                                    <div className="row review_top">
                                        <div className="review_top_l"><img src={oval}/></div>
                                        <div className="review_top_r">How to be ready?</div>
                                    </div>
                                    <div className="row review_niz">
                                        <div className="review_niz_l">Just prepare all your warm clothes and be ready to
                                            film your «best ever» flight. Althow please, double check your flight time
                                            and
                                            come a bit earlier to have possibility to listen for our short instructions
                                        </div>
                                        <div className="review_niz_r"><img src={rewiev}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <About/>
    </>
}
export default Balloning