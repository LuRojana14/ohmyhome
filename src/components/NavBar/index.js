import React, { Component } from 'react';
import { Link } from 'react-router-dom';




export class NavBar extends Component {
  render () {
    return (
     <div className="btn-group" role="group" aria-label="Basic example">
        <Link to={'/superList'}><button type="button" className="btn btn-secondary">Super</button></Link>
        <button type="button" className="btn btn-secondary">+</button>
        <Link to={'/myProfile'}><button type="button" className="btn btn-secondary">Profile</button></Link>
      </div>
    )
  }
}
