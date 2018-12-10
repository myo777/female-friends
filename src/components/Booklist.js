import React, { Component } from 'react';
import HeaderUser from './HeaderUser';
import Footer from './Footer';
import { withRouter } from 'react-router-dom';
import "../assets/css/booklist/index.css";

import axios from 'axios';
axios.defaults.withCredentials = true;

class Booklist extends Component {

    render() {
        return (
        <div>  
        <HeaderUser />
            
            <h2 className="book-header">Booklist</h2>

            <div id="book-container">
                <div id="book-submit">

                    <form className="submit-book-form" onSubmit="/">
                        <p>Share your recommended reads with others here:</p>
                        <label for="title">Title</label>
                        <br />
                        <input type="text" name="title"></input>
                        <br />
                        <label for="author">Author</label>
                        <br />
                        <input type="text" name="author"></input>
                        <br />
                        <label for="description">Description</label>
                        <br />
                        <input type="text" name="description"></input>
                        <br />
                        <label for="description">Book cover (optional)</label>
                        <br />
                        <input type="file" name="coverImage"></input>
                        <br />
                        <button type="submit" className="submitbook">Submit recommendation </button>
                    </form>
                </div>

                <div id="book-overview">
                    { /* Book review 1 */ }
                    <div className="fullreview">
                        <div className="book-cover">
                            <img src="https://s3-us-west-2.amazonaws.com/tabs.web.media/b/7/b7b2/b7b2-square-1536.jpg" alt="nice girls don't get the corner office" />
                        </div>
                        <div className="book-review-text">
                            <p className="book-title">Nice Girls Don't Get The Corner Office</p>
                                <p className="book-author">Lois Frankel</p>
                                <p className="book-description">In this new edition, internationally recognized executive coach Lois P. Frankel reveals a distinctive set of behaviors-over 130 in all-that women learn in girlhood that ultimately sabotage them as adults. She teaches you how to eliminate these unconscious mistakes that could be holding you back and offers invaluable coaching tips that can easily be incorporated into your social and business skills. </p>
                        </div>
                    </div>
                    { /* Book review 2 */ }
                    <div className="fullreview">
                        <div className="book-cover">
                            <img src="https://www.altitudetickets.com/assets/img/Michelle-Obama-Event-2018-2ba1d4df46.jpg" alt="becoming" />
                        </div>
                        <div className="book-review-text">
                            <p className="book-title">Becoming</p>
                                <p className="book-author">Michelle Obama</p>
                                <p className="book-description">In this new edition, internationally recognized executive coach Lois P. Frankel reveals a distinctive set of behaviors-over 130 in all-that women learn in girlhood that ultimately sabotage them as adults. She teaches you how to eliminate these unconscious mistakes that could be holding you back and offers invaluable coaching tips that can easily be incorporated into your social and business skills. </p>
                        </div>
                    </div>
                    
                </div>
            </div>
                 
        <Footer/>
        </div>
    );
}
}
export default withRouter(Booklist);
