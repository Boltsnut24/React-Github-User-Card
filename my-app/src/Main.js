import React from "react";
import axios from "axios";

class Main extends React.Component{
  contructor(){
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/Boltsnut24")
      .then(res => {
        this.setState({ user: res.data })
        console.log("Current State:", this.state.user);
      })
      .catch(err => console.log("noooo"));


  }



  render(){
    return(
      <div>
        Div
      </div>
    )
  }
}

export default Main;