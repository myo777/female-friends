
//http://localhost:3000/add-friend
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
const imageStyle = {
    width: '150px',
    height: '150px',
}

const divStyle = {
    marginTop: '-130px',
    marginLeft: '50px'
}

const bgStyle = {
    height:'300px'
}

const spaceStyle = {
  marginLeft:'50px',
  marginTop:'30px',
  color:'#8cb2b8'
}

const bigSpaceStyle = {
  marginLeft:'600px',
  marginTop:'30px'
}

class AddFriend extends Component {
    constructor(props) {
        super(props);
        this.state={
            User:null
//             listings:null,
//             isLoggedIn:true            
        }
        axios.get('http://localhost:5000/api/users/getAllUsers')
        .then((User)=>{this.setState({User:User.name})});
        // console.log(User);
    }    
  render () {
    return (
 
    <div className="dashboard" >
      <div className="container"  >
      <div className="row" >
      <h4 style={spaceStyle}>Lwin Myo</h4> 
      <Link to={'/friends'} className="btn btn-info" style={bigSpaceStyle}>
        Add Friend
      </Link>  
      <Link to={'/chat'} className="btn btn-info" style={spaceStyle}>
        Message
      </Link>
      </div>
      <br/>
      </div> {/* end of div style */}
      <div className="container">
      <br/>
        <div className="card card-body bg-light">
        <img src="https://femaleventures.nl/wp-content/uploads/2018/01/email-foto.jpg" style={bgStyle} className="rounded"  alt="bgpict" />

          
        </div>
        <div style={divStyle}>
        <div className="row">
            <div className="col-4">
            <br/> 
            <br/> 
            <img src="https://avatars1.githubusercontent.com/u/38748551?s=400&v=4" style={imageStyle} className="rounded-circle" alt="selliepict" />
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-4">
            <p>First name</p>
            <h5>Lwin</h5>
            <br/> 
            <p>Last name</p>
            <h5>Myo</h5>
            <br/> 
            <p>City</p>
            <h5>Rotterdam</h5>
          </div>
          </div>
        </div>
      </div>
    </div>  
        )
        }
    }

export default AddFriend;