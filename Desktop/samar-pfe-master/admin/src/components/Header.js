import NavBar from "./Navbar";

export default function HedaerBloc(){
    return (
        <header id="header" className="header fixed-top d-flex align-items-center">

        <div className="d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src="/template/assets/img/logo.png" alt="" />
            <span className="d-none d-lg-block">Touney dashboard</span>
          </a>
         
        </div> 
    
     
    
        <NavBar />
    
      </header> 
    );
}