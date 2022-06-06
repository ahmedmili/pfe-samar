import React from 'react';
import { Link } from 'react-router-dom';
import AsideMenu from '../components/AsideMenu';
import Footer from '../components/footer';
import HedaerBloc from '../components/Header';

export default class PartnersPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            filter:'',
            partners : []
        }
       
    }


    initDAta(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token') );
        myHeaders.append("Content-Type", "application/json");
 
        var requestOptions = {
        method: 'GET',
        headers: myHeaders, 
        redirect: 'follow'
        };

        fetch("http://localhost:8080/api/partners/list", requestOptions)
        .then(response => response.json())
        .then(result =>{

            console.log(result);

             this.setState({
                partners: result
             })
        })
        .catch(error => {
           /*localStorage.clear();
           this.props.history.push('/auth');*/
        });
    }

    checkUserAuth() {
        if (localStorage.getItem('token') == null) {
            this.props.history.push('/auth');
        }
    }


    deleteClient(id){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token') );
        myHeaders.append("Content-Type", "application/json");
 
        var requestOptions = {
        method: 'DELETE',
        headers: myHeaders, 
        redirect: 'follow'
        };

        fetch("http://localhost:8080/api/partners/delete?id="+id, requestOptions)
        .then(response => response.json())
        .then(result =>{
            this.initDAta();
        }) 

    }


    componentDidMount() {
        this.checkUserAuth();
        this.initDAta();

    }

    render() {
        return (
            <div className="App">

                <HedaerBloc />


                <AsideMenu />

                { /* End Sidebar*/}

                <main id="main" className="main">
                    <div class="pagetitle">
                        <h1>Parnetaires</h1>

                    </div>


                    <div class="pagetitle">
                        <div className='form-group'>
                            <input type="search" className='form-control' onChange={ (e)=>{ this.setState({ filter: e.target.value}) } } />
                        </div>
                    </div>
                    



                    <section class="section">
                        <div class="row">
                            <div class="col-lg-12">

                                <div class="card">
                                    <div class="card-body">
                                        <div className="d-flex justify-content-between">
                                            <h5 class="card-title">Parnetaires</h5>

                                            <Link to={ '/partners/add' } className="btn btn-success add-btn" ><i className='bx bxs-plus-circle'></i> Ajouter un partenaire</Link>
                                        </div>
                                        <p>List des partenaire dans le platform.</p>


                                        <div className="datatable table-responsive">
                                        <table className='table'>
                                            <tr>
                                                <th>#</th>
                                                <th>Photo URL</th>
                                                <th>Nom</th>
                                                <th>Email</th> 
                                                <th>Site web</th> 
                                                
                                                <th>Actions</th>
                                                
                                                
                                            </tr>

                                            <tbody>
                                                {
                                                    this.state.partners.map( (c)=>{
                                                        return ( 
                                                        <tr>
                                                            <td>{ c.id }</td>
                                                            <td>

                                                                <img src= { c.logo_url }  width={ 120 }  />
                                                            </td>
                                                            <td>{ c.name }</td>
                                                            <td>{ c.email }</td>
                                                            <td>{ c.website }</td>
                                                            
                                                            
                                                            
                                                            <td>
                                                                 <button className='btn btn-danger btn-sm' onClick={
                                                                      ()=>{
                                                                        this.deleteClient(c.id);
                                                                    }
                                                                }
                                                                
                                                                
                                                                >Supprimer</button>
                                                            </td>
                                                            
                                                        </tr> );
                                                    } )
                                                }
                                            </tbody>
                                        </table>
                                        </div>

 

                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>


                </main>{ /* End #main */}

                { /* ======= Footer ======= */}
                <Footer />

                { /* End Footer */}

                <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
            </div>

        );
    }


}


