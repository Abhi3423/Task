import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css'
import back_design from '../../assets/back 1 (1).svg'
import vegan from '../../assets/vegan.svg'
import code from '../../assets/code.svg'
import logo from '../../assets/logo.svg'
import veg from '../../assets/veg.svg'
import milk from '../../assets/milk.svg'
import delivery from '../../assets/delivery.svg'
import { BsSearch } from 'react-icons/bs'



function openNav() {
  document.getElementById("mySidenav").style.width = "18vw";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function check() {
  var screen = document.getElementById("grad1");
  screen.classList.toggle("active");
  var side = document.getElementById("mySidenav");
  side.classList.toggle("active");
}


function Landing() {
  return (
    <>
      <div id="grad1">
        <div>
        <img class="img-fluid ms-5 mt-4 h-25" alt="" src={logo} />
        <p id="logo-head">BEE 2 BEE</p>
        </div>
        <div id="button" type="button" onClick={() => { openNav(); check(); }}> <p style={{ "font-size": "1.4vw", "font-weight": "700" }}>  Login/Signup </p></div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={vegan} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={code} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={vegan} class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
        <span id="content-head">Begin your bussiness </span>
        <span id="content">Welcome to Redsoft, Order from your favorite stores</span>
        <div id="search">
          <BsSearch size={'2em'} />
          <p id="search_con1">Search...</p>
        </div>
        <div>
          <img class="img-fluid w-100 botttom-0" alt="" style={{ "z-index": "-1", "margin-top": "2%", "height": "20%" }} src={back_design} />
          <img class="img-fluid position-absolute" alt="" style={{ "margin-top": "1%", "margin-left": "-91.75%", "height": "20vw" }} src={veg} />
          <img class="img-fluid position-absolute" alt="" style={{ "margin-top": "5%", "margin-left": "-60.81%", "height": "15vw" }} src={milk} />
          <img class="img-fluid position-absolute" alt="" style={{ "margin-top": "6%", "margin-left": "-35.75%", "height": "15vw" }} src={delivery} />
          <p id="p1_con">No Minimum Order
            Order in for yourself or for the group, with no restrictions on order value
          </p>
          <p id="p2_con">Live Order Tracking
            Know where your order is at all times, from the restaurant to your doorstep
          </p>
          <p id="p3_con">Lightning-Fast Delivery
            Experience Bee2Bee's superfast delivery for food delivered fresh & on time
          </p>
        </div>
        <div id="mySidenav" className="sidenav">
          <img class="img-fluid ms-2 mt-1" alt="" style={{ "height": "4vw" }} src={logo} />
          <div id="info">
            <span id="nam_info" style={{"margin-top":"-20%"}}>Welcome back!</span>
            <span id="mail_info" style={{"margin-top":"-10%"}}>Log in to continue</span>
            <span id="name">BEE 2 BEE</span>
            <p type="button" className="closebtn" id="close" onClick={() => { closeNav(); check(); }}>&times;</p>
            <a href="/" style={{"margin-top":"20%"}}>Email</a>
            <input id="list" type="text"  />
            <a href="/"> Log in with Google</a>
            <a href="/"> Log in with Facebook</a>
            <a href="/">Help</a>
          </div>
        </div>

      </div>
    </>
  )
}

export default Landing;