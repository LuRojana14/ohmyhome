
import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';



export class CreateGroup extends Component {
  constructor() {
    super();
    this.state = { groupName: "" };
  }

  handleFormSubmit = (event) => {
    console.log('entra a submit');
    event.preventDefault();
    const groupName = this.state.group;
    console.log('GRUPO:', groupName);
    axios
      .post("http://localhost:4000/group/creategroup", { groupName })
      .then(() => {
//        this.setState({ groupName:  });
        //VER QUE PONER
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render () {
    return (
      <div>
        <form>
          {/* PREGUNTAR LOS VALUES */}
          <input type="text" name="group" placeholder="Group-Name" onChange={this.handleChange}></input>
          <Link to={'/tasks'}>
            <input type="submit" name="" value="next" onClick={this.handleFormSubmit}></input>
          </Link>
        </form>
      </div>
    );
  }
}








