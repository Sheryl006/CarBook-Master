import axios from "axios";
import{ useState,useEffect } from "react";
import { Link } from "react-router-dom";
export default function Car(){

  const [cars,setProducts] = useState([]);
//specifying an api
const getProducts = async () => {
    const response = await axios.get("http://127.0.0.1:8000/cars");
    setProducts(response.data);
};

useEffect(() => {
    getProducts();
},[]);
    return (
      <>
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div className="container">
      <a className="navbar-brand" href="index.html">Car<span>Book</span></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="oi oi-menu" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          
         
          <li className="nav-item"><Link className="nav-link" to="/cars">Cars</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  </nav>
  <section className="hero-wrap hero-wrap-2 js-fullheight" style={{backgroundImage: 'url("src/images/pexels2.jpg")'}} data-stellar-background-ratio="0.5">
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
        <div className="col-md-9  pb-5">
          <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward" /></a></span> <span>Cars <i className="ion-ios-arrow-forward" /></span></p>
          <h1 className="mb-3 bread">Choose Your Car</h1>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section bg-light">
    <div className="container">
      <div className="row">
      {cars? cars.map((cars) => {
        return(
          <>
          
         <div className="col-md-4" key={cars.id}>
          <div className="car-wrap rounded ">
            <div className="img rounded d-flex align-items-end" >
            <img src= {cars.image}  alt={cars.name} width={300}/>
            </div>
            <div className="text">
              <h2 className="mb-0"><Link to='/cars'>{cars.name}</Link></h2>
              <div className="d-flex mb-3">
                <span className="cat">{cars.manufacturer}</span>
                <p className="price ml-auto">${cars.price}<span>/day</span></p>
              </div>
              <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-primary py-2 mr-1">Book now</a>
              <a href={"cars/" + cars.id} className="btn btn-secondary py-2 ml-1">Details</a>
              </p>
               {/* <Link to={"products/" + product.id} className="btn btn-secondary py-2 ml-1">Details</Link> */}
            </div>
          </div>
        </div>
        </>
        );
       }) : null}
      </div>
    </div>
  </section>
  
  {/* <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" /></svg></div> */}
</div>

      </>  
    );
}