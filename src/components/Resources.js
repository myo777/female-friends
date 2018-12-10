import React, { Component } from 'react';
import HeaderUser from './HeaderUser';
import Footer from './Footer';
import { withRouter } from 'react-router-dom';
import "../assets/css/resources/index.css";

import axios from 'axios';
axios.defaults.withCredentials = true;

class Resources extends Component {

    render() {
        return (
        <div>  
        <HeaderUser />
            
        <h2 className="resource-title">Resource directory</h2>
        <div id="resource-container">
            <div className="templates">
                <img className="resource-image" src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80" alt="templates" />
                <h4 className="resource-h4">Templates</h4>
                <p className="resource-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula id ex ac ornare. Morbi velit nulla, fringilla in pharetra at, feugiat posuere turpis. Etiam a pretium quam. </p>
                <button class="see-more">See more</button>
            </div>
            <div className="courses">
                <img className="resource-image" src="https://images.unsplash.com/photo-1519377483941-d4c7ea7ae521?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1444&q=80" alt="courses" />
                <h4 className="resource-h4">Courses</h4>
                <p className="resource-p">Vivamus mattis purus urna. Curabitur fringilla, arcu sit amet consequat consequat, ligula odio fermentum arcu, nec suscipit diam orci at di</p>
                <button class="see-more">See more</button>

            </div>
            <div className="tools">
                <img className="resource-image" src="https://images.unsplash.com/photo-1520328925293-b3f5fa2076ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="tools" />
                <h4 className="resource-h4">Tools</h4>
                <p className="resource-p">Sed vestibulum velit ac magna pellentesque, a tempus libero congue. Nullam eget eros auctor nisl vehicula maximus. Fusce tristique diam congue scelerisque posuere. </p>
                <button class="see-more">See more</button>

            </div>
        </div>

        <Footer/>
        </div>
    );
}
}

export default withRouter(Resources);
