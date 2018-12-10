import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

import '../../src/challenge.css';
import HeaderUser from './HeaderUser';
import Footer from './Footer';

class SuggestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      title: this.state.title,
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addPost(newPost);
    this.setState({ text: '' });
    this.setState({ title: '' });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    // const { errors } = this.state;

    return (
         <div>
         <div className="container">
      
          <HeaderUser/>
          <br/><br/>
           <h3>Suggestions</h3>  

      <div className="container">
      <div className="challenge-talk2">
               <a href="/show-suggestion" class="alert-link">Seeking New opportunities</a><br />
                <p>Started by <a href="index.html" class="alert-link">Sellie</a></p>
            </div>
            <div className="challenge-talk">
                 <a href="/show-suggestion" class="alert-link">Women in Tech Conference 2018</a><br />
                <p>Started by <a href="index.html" class="alert-link">Jane Doe </a></p>
            </div>
            <div className="challenge-talk2">
                 <a href="/show-suggestion" class="alert-link">Women In Tech Industry</a><br />
                <p>Started by <a href="index.html" class="alert-link">Myo Lwin </a></p>
            </div>
            <div className="challenge-talk">
                 <a href="/show-suggestion" class="alert-link">How to find New Opportunities</a><br />
                <p>Started by <a href="index.html" class="alert-link">Amy Amy </a></p>
            </div>
            <div className="challenge-talk1">
               <a href="/show-suggestion" class="alert-link">World Women Conference in Dec 2018</a><br />
                <p>Started by <a href="index.html" class="alert-link">Polin Polin</a></p>
            </div>
        
          <h5>Create New Topic in "Suggestion"</h5>
          
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  className="challenge-title"
                  placeholder="Topic Title (Maximum length: 80)"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  // error={errors.title}
                /><br />
                <textarea
                  placeholder="Create a Suggestion"
                  className="challenge-text"
                  name="text"
                  value={this.state.text}
                  onChange={this.onChange}
                  // error={errors.text}
                />
              </div>
              </form>
              </div>
          <button type="submit" className="btn btn-dark" id="challenge-btn">
                Submit
            </button>
            <Footer/>
            </div>
            </div>
    );
  }
}


export default SuggestionForm;
