
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import "../../src/challenge.css";
//import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
//import { addPost } from '../../controllers/challengeController';

class suggestionOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
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

    

    const newPost = {
      
    };

    this.props.addPost(newPost);
   
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    

    return (
        <div>
          <h3>[Suggestion Title]</h3>
          <div className="container" id="challengeOne">
              <div className="row">
                  <div className="col-md-1">
                      <div className="forimg"></div>
                      <p>Jim Carter</p>
                  </div>
                  <div className="col-md-10">
                  <p>De teksten zijn een vorm van pseudo-Latijn: ze lijken op het eerste gezicht 
                      origineel Latijn te zijn, maar hebben in werkelijkheid volstrekt geen betekenis.
                      De tekst staat vol met spelfouten en verbasteringen. Dat is ook de reden waarom de teksten 
                      gebruikt worden door drukkers en zetters: bij een leesbare tekst zou de lezer afgeleid worden</p>
                    <p>  door de inhoud, terwijl het alleen om de vormgeving gaat. Bovendien heeft het Lorem Ipsum een redelijk 
                      normale afwisseling van de verschillende letters en korte en lange woorden, waardoor het beter bruikbaar 
                      is dan bijvoorbeeld Dit is een voorbeeldtekst. Dit is een voorbeeldtekst. Dit is een voorbeeldtekst, ....</p>

                      <p>De eerste woorden van het Lorem Ipsum vinden hun oorsprong in het boek De finibus bonorum et malorum 
                          (Over de grenzen van goed en kwaad) van Marcus Tullius Cicero uit 45 voor Christus. In alinea 1.10.32 
                          van dit boek komt namelijk de volgende zinsnede voor:</p>

                        
                  </div>
              </div>
            </div>
            <div className="row">
                    <h3>Reply To: [Suggestion Title]</h3>
                    <div className="forimg1"></div>
                    
            </div>
            <button type="submit" className="btn btn-dark" id="challenge-btn">
                Submit
            </button>
    </div>
           
    );
  }
}

suggestionOne.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });

export default suggestionOne;