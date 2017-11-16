import React, { Component } from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton'

class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div className="row ">
        <div className="callout row navbar columns">
          <Link to='/greeting'> Greeting</Link>
          <span> - </span>
          <Link to='/goodbye'> Goodbye </Link>
          <span>  -  </span>
          <Link to='/custom'> Custom Greeting </Link>
        </div>
      {this.props.children}
      </div>
    )

  }
}

export default NavBar;
