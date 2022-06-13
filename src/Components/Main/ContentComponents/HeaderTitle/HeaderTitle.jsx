

const  HeaderTitle = () => {
    return  <div className="header_title">
        <div className="container">
            <div className="row">
                <h1>Discover your <br />perfect tour now!</h1>
                <div className="row header_search">
                    <div id="tabs">
                        <form>
                            <div>
                                <div className="header_search_flex">
                                    <div>
                                        <label >Air tours</label>
                                        <input type="text" placeholder="Enter city, region or country" />
                                    </div>
                                    <div>
                                        <label >Our activities</label>
                                        <select>
                                            <option value="all">All</option>
                                            <option value="Ballon rides">Ballon rides</option>
                                            <option value="Ballon rides">Helicopter tours</option>
                                        </select>
                                    </div>

                                </div>

                                <button>Search</button>
                            </div>
                        </form>
                    </div>
                    {/* <div id="tabs">
                                         <form>
                                             <input type="radio" name="tabs" id="toggle-tab1" checked="checked" />
                                             <label for="toggle-tab1">Air tours</label>
                                             <input type="radio" name="tabs" id="toggle-tab2" />
                                             <label for="toggle-tab2">Ballon rides</label>
                                             <input type="radio" name="tabs" id="toggle-tab3" />
                                             <label for="toggle-tab3">Helicopter tours</label>
                                             <input type="radio" name="tabs" id="toggle-tab4" />
                                             <label for="toggle-tab4">Skydiving</label>
                                             <input type="radio" name="tabs" id="toggle-tab5" />
                                             <label for="toggle-tab5">Paragliding</label>

                                             <div id="tab1" className="tab">
                                                 <input type="text" className="input_search" placeholder="Enter city, region or country" />
                                                 <button>Search</button>
                                             </div>
                                             <div id="tab2" className="tab">
                                                 <input type="text" className="input_search" placeholder="Enter city, region or country" />
                                                 <button>Search2</button>
                                             </div>
                                             <div id="tab3" className="tab">
                                                 <input type="text" className="input_search" placeholder="Enter city, region or country" />
                                                 <button>Search3</button>
                                             </div>
                                             <div id="tab4" className="tab">
                                                 <input type="text" className="input_search" placeholder="Enter city, region or country" />
                                                 <button>Search4</button>
                                             </div>
                                             <div id="tab5" className="tab">
                                                 <input type="text" className="input_search" placeholder="Enter city, region or country" />
                                                 <button>Search5</button>
                                             </div>
                                         </form>
                                     </div>*/}
                </div>
            </div>
        </div>
    </div>
}
export default HeaderTitle