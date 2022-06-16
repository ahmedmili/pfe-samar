import { Link } from "react-router-dom";

export default function AsideMenu(){
    return   <aside id="sidebar" className="sidebar">

    <ul className="sidebar-nav" id="sidebar-nav">

     

      <li className="nav-item">
        <Link className="nav-link collapsed" to={ '/clients' }>
          <i className="bi bi-grid"></i>
          <span>Clients</span>
        </Link>
      </li> 
      

      <li className="nav-item">
        <Link className="nav-link collapsed" to={ '/partners' }>
          <i className="bi bi-grid"></i>
          <span>All Partenaires</span>
        </Link>
      </li> 
      <li className="nav-item">
        <Link className="nav-link collapsed" to={ '/partners_demande' }>
          <i className="bi bi-grid"></i>
          <span>partenaire demandes</span>
        </Link>
      </li> 
      
      

 

    </ul>

  </aside>;
  
}