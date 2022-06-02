import React from 'react';
import AsideMenu from '../components/AsideMenu';
import Footer from '../components/footer';
import HedaerBloc from '../components/Header';

export default class SearchPage extends React.Component {


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



        <section class="intro-single">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="title-single-box">
              <h1 class="title-single">Rechercher une service</h1>
              <span class="color-text-a">recherche</span>
            </div>
          </div>
          <div class="col-md-12 col-lg-4">
            <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="">Acceuil</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Nos services
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>


    
    <div className='container'>

        <div class="title-box-d">
      <h3 class="title-d">Filter des recherche</h3>
    </div>
    
    
    <div class="box-collapse- form">
      <form class="form-a">
        <div class="row">
          <div class="col-md-6 mb-2">
            <div class="form-group">
              <label class="pb-2" for="Type">Mot clé</label>
              <input type="text" class="form-control form-control-lg form-control-a" placeholder="mot clé" />
            </div>
          </div>
          <div class="col-md-6 mb-2">
            <div class="form-group ">
              <label class="pb-2" for="Type">Résgion</label>
              <select class="form-control form-control-lg form-control-a" id="Type">
                <option>All Type</option>
                <option>For Rent</option>
                <option>For Sale</option>
                <option>Open House</option>
              </select>
            </div>
          </div>
           
          
           
           
          
          <div class="col-md-12 mt-5">
            <button type="submit" class="btn btn-b">Rechercher</button>
          </div>
        </div>
      </form>
    </div>
  
        </div>
  
  



   
        

 



        { /* ======= Footer ======= */}
        <Footer />

        { /* End Footer */}
 
      </div>
  
    );
  }
 

}

 
