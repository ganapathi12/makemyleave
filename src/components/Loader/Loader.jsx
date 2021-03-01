import React, { Component } from 'react'
import "./Loader.css";
import { Link } from 'react-router-dom';
import Logo from '../../Images/logo.png';


export class Loader extends Component {
    state={
        timer:0
    }
    componentDidMount = () => {
      this.interval=setInterval(() => {
          if(this.state.timer>3){
clearInterval(this.interval)
this.handlechange();
          }
          else{
            this.setState({
                timer:this.state.timer+1
            })
          }
      }, 1000);
    };

    handlechange(){
        const loader=document.querySelector(".loader-19");
        loader.style.opacity=0;
        loader.style.display="none";
        setTimeout(() => {
            this.logochange();
        }, 1000);
       
        
    }
    logochange(){
        const logo=document.querySelector(".logo-img");
        logo.style.top="30%";
        setTimeout(() => {
            this.textchange();
        }, 1500);
       
    }

    textchange(){
        const text=document.querySelector(".loader-text");
        text.style.display="flex";
    }
render() {
return (
<div>
    <div className="loader-bg">
    <section className="loading">
    <span className="loader-19"></span>
    <img className="logo-img" src={Logo} alt="logo-loader" />
    <div className="loader-text">
        <h3 style={{fontWeight:100,paddingBottom:"10px"}}>Dedicated software for managing leave and attendence</h3>
        <Link to="/login"><button className="start-button">Let's Get Started</button></Link>
    </div>
  </section>
    </div>
</div>
)
}
}

export default Loader