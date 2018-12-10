//http://localhost:3000/events
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderUser from './HeaderUser';
import Footer from './Footer';
import "../assets/css/events/index.css";


// import axios from 'axios'
const imageStyle = {
    width: '300px',
    height: '200px',
}


class Events extends Component {

    render () {
        return (
        <div className="dashboard">
        <HeaderUser />
            <div className="container">
                <div className="row"> {/* Begin of first row */}
                    <div className="col-md-12">
                    {/* <h1 className="display-4">Welcome Back, {user.name}</h1> */}
                    <h2 className="events-title-h2">Events </h2>
                    <br/>
                    <p>Female Ventures hosts and co-hosts a variety of events. At these events, we offer a platform to female leaders, entrepreneurs and role models. We stimulate people to meet and exchange ideas. Our events are also open to non-members.</p>
                    {/* <br/> */}
                    <h2 className="events-title-h2">Upcoming events </h2>
                    <br/>
                        <div className="row"> {/* Begin of second row */}
                            <div className="col-md-4">
                            <img src="https://images.unsplash.com/photo-1525078603777-7525bc242652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=579&q=80" style={imageStyle} className="img-rounded" alt="event1" />
                            <p >Women in Tech Conference</p>
                            <p className="events-title-p">13 January 2019</p>
                            
                            <Link to="/events" /*className="btn btn-lg btn-info"*/ className="events-link">Attend</Link>
                            </div> {/* end of div col-md-3 */} 
                            <div className="col-md-4">
                            <img src="https://images.unsplash.com/photo-1535448606533-07a2789ef57e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=848&q=80" style={imageStyle} className="img-rounded" alt="event1" />
                            <p >Erasmus Women Alumni Gathering</p>
                            <p className="events-title-p">1 February 2019</p>
                                <Link to="/events" /*className="btn btn-lg btn-info"*/ className="events-link">
                                Attend
                                </Link>
                            </div> {/* end of div col-md-3 */} 
                            <div className="col-md-4">
                            <img src="https://images.unsplash.com/photo-1507890512529-4b15a5a02988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" style={imageStyle} className="img-rounded" alt="event1" />
                            <p >Salary Negotiation Workshop</p>
                            <p className="events-title-p">26 February 2019</p>
                                <Link to="/events" /*className="btn btn-lg btn-info"*/ className="events-link">
                                Attend
                                </Link>
                            </div> {/* end of div col-md-3 */} 
                        </div> {/* end of div row */}
                        <br/>
                        
                        <h2 className="events-title-h2">Past events </h2>
                        {/* Begin of third row */}
                        <div className="row">
                            <div className="col-md-4">
                            <img src="https://images.unsplash.com/photo-1525078603777-7525bc242652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=579&q=80" style={imageStyle} className="img-rounded" alt="event1" />
                            <p>Women Who Code</p>
                        
                            </div> {/* end of div col-md-3 */} 
                            <div className="col-md-4">
                            <img src="https://images.unsplash.com/photo-1525078603777-7525bc242652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=579&q=80" style={imageStyle} className="img-rounded" alt="event1" />
                            <p>How To Be A Girlboss</p>
                        
                            </div> {/* end of div col-md-3 */}
                            <div className="col-md-4">
                            <img src="https://images.unsplash.com/photo-1525078603777-7525bc242652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=579&q=80" style={imageStyle} className="img-rounded" alt="event1" />
                            <p>Alumni Chapter Fall 2018</p>
                            <br/>
                            <br/>
                            <Link to="/events" /*className="btn btn-lg btn-info"*/ className="events-link">
                                See more...
                                </Link>
                            
                            </div> {/* end of div col-md-3 */}
                        </div> {/* end of div row */}
                    </div>{/* end of div col-md-12 */} 
                </div> {/* end of div row */}
            </div> {/* end of div container */}
            <Footer />
        </div> // end of div dashboard  
        );
    }
};

export default Events;

