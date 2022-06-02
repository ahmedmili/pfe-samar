import React from 'react';
import { Link } from 'react-router-dom';
import AsideMenu from '../components/AsideMenu';
import Footer from '../components/footer';
import HedaerBloc from '../components/Header';

export default class HomePage extends React.Component {


  constructor(props){
    super(props);
  }

  checkUserAuth(){
    if (localStorage.getItem('token') == null) {
      this.props.history.push('/auth');
    }
  }
  componentDidMount(){
    this.checkUserAuth();
  }

  render(){
    return(
      <div >

        <HedaerBloc />





        <div class="intro intro-carousel swiper position-relative">

<div class="swiper-wrapper">

  <div class="swiper-slide carousel-item-a intro-item bg-image" style={ { backgroundImage : 'url(/assets/img/slide-1.jpg)'} }>
    <div class="overlay overlay-a"></div>
    <div class="intro-content display-table">
      <div class="table-cell">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="intro-body">
                 
                <h1 class="intro-title mb-4 ">
                  <span class="color-b">Touney </span> platform
                  <br /> N°1 en Tunisie
                </h1>
                <p class="intro-subtitle intro-price">
                  <Link to={ '/search' }><span class="price-a">Commencer </span></Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</div>
 
</div>

        

 



        { /* ======= Footer ======= */}
        <Footer />

        { /* End Footer */}
 
      </div>
  
    );
  }
 

}

 
