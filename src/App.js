import React, { Component } from 'react';
import './App.css';
import { LoremIpsum } from 'react-lorem-ipsum';
import FacebookLogin from 'react-facebook-login';
//import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios, axios } from 'react-axios'
import GoogleLogin from 'react-google-login';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      pass: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("Your Account is Successfully Created!")
    axios({
      method: "POST", 
      url:"https://reqres.in/api/users", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  render() {

    const responseFacebook = (response) => {
      console.log(response);
    }

    const responseGoogle = (response) => {
      console.log(response);
    }

    const textSign={
      color: "#898989",
      fontFamily: "Arial",
      fontSize:"18px",
      fontStyle:"bold",
      margin:"10px"
    }

    const textCreate ={
      color: "#898989",
      fontSize:"34px",
      margin:"10px"
    }

    const formInput = {
      color: "black",
      width:"300px",
      border: "1px solid #ccc",
      padding: "12px",
      fontFamily: "Arial",
      outline:"none"
    };

    const formSubmit = {
      color: "white",
      width:"326px",
      backgroundColor: "#4682b4",
      padding: "12px",
      fontFamily: "Arial",
      outline:"none",
      border:"none"
    };

    return (
      <div className="App">
        <h3  style={textSign}>SIGN UP</h3>
        <p style={textCreate}>Create An Account</p>

        <p style={{color: "#898989"}}><LoremIpsum avgWordsPerSentence={1} /></p>

        <br/>

      <FacebookLogin
        appId="265654204540190" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br />
      <br />
      
      <GoogleLogin
        clientId="366857512592-uchhgs0t4truc3aik1nt83tro7edhdnb.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      <p style={{textAlign:"center",color: "#898989",margin:"10px"}}>or</p>

      <form onSubmit={this.handleSubmit.bind(this)} method="POST">
        <input style={formInput} value={this.state.fname} onChange={this.onFNameChange.bind(this)} type="text" name="fname" placeholder="First Name..." required></input>
        <br />
        <br/>
        <input style={formInput} value={this.state.lname} onChange={this.onLNameChange.bind(this)} type="text" name="lname" placeholder="Last Name..." required></input>
        <br />
        <br/>
        <input style={formInput}  value={this.state.email} onChange={this.onEmailChange.bind(this)} type="email" name="email" placeholder="Email Address..." required></input>
        <br />
        <br/>
        <input style={formInput}  value={this.state.pass} onChange={this.onPassChange.bind(this)} type="password" name="pass" placeholder="Password..." required></input>
        <br />
        <br/>
        <input style={formSubmit} type="submit" name="signup" placeholder="Submit"></input>
      </form>

    </div>
    
    );
  }
    onFNameChange(event) {
      this.setState({fname: event.target.value})
    }
  
    onLNameChange(event) {
      this.setState({lname: event.target.value})
    }

    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onPassChange(event) {
      this.setState({pass: event.target.value})
    }

}

export default App;