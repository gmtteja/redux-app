import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import styled from "styled-components";
import { search } from "material-icons";
import { settings } from "material-icons";
import { person_outline } from "material-icons";
import { add_alert } from "material-icons";
const Container = styled.div`
  #h5 {
    position: relative;
    left: 30px;
   
  }
  #icon1 {
    position: relative;
    left: 950px;
  }
  #breadcrumb{
      position:relative;
      left:230px;
  }
  #main-nav{
position:relative;
left:230px;

  }
.navbar{
background-color:white;
  
}
  `;
function Navigator() {
  return (
    <Container>
      <div>
        <div>
          <nav id="main-nav" className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#" id="h5">
             Home
            </a>
           
            {/* <div class="collapse navbar-collapse" id="navbarNav"> */}
              <ul class="navbar-nav" id="icon1">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    <i className="material-icons">search</i>
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i className="material-icons">settings</i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i className="material-icons">person_outline</i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#">
                    <i className="material-icons">add_alert</i>
                  </a>
                </li>
              </ul>
            {/* </div> */}
          </nav>
          <div className="row">
            <div className="col-sm-12" id="breadcrumb">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">
                      <i className="material-icons">home</i>
                    </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Navigator;
