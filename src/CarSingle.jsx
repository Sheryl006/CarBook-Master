import { Link } from "react-router-dom";
import axios from "axios";
import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";

export default function CarSingle(){
  const [cars,setProduct] = useState([]);
  const {id} = useParams();
  const getSingleProduct = async()=>{
     const {data } = await axios.get(`http://127.0.0.1:8000/cars/${id}`);
     setProduct(data);
  };
 
  useEffect(() => {
     getSingleProduct();
 },[]);
 
 
    return(
        <>
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-dark" id="ftco-navbar">
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
 
  
  <h1 className="mb-2 bread" style={{textAlign:"center",fontWeight:"bolder",fontFamily:"serif"}}>{cars.name}</h1>
  <p style={{textAlign:"center",fontWeight:"bolder",fontFamily:"serif"}}>{cars.manufacturer}</p>
<section className="ftco-section ftco-car-details" >
    <div className="container" >
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="car-details">
            <div className="img rounded" >
            <img src= {cars.image}  alt={cars.name} width={900}/>
            </div>
            <section className="ftco-section ftco-no-pt bg-light">
    <div className="container">
      <div className="row no-gutters">
        <div className="col-md-12	featured-top">
          <div className="row no-gutters">
            <div className="col-md-4 d-flex align-items-center">
              <form action="#" className="request-form  bg-dark" style={{marginTop:150, marginLeft: 700}}>
               <h1>${cars.price}</h1>
              </form>
            </div>
           
          </div>
        </div>
      </div>
    </div></section>
             <div className="text text-center">
             <h2>{cars.name}</h2>
              <span className="subheading">{cars.manufacturer}</span>
             
              </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md d-flex align-self-stretch ">
          <div className="media block-6 services">
            <div className="media-body py-md-4">
              <div className="d-flex mb-3 align-items-center">
                <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-dashboard" /></div>
                <div className="text">
                  <h3 className="heading mb-0 pl-3">
                    Mileage
                    <span>40,000</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>      
        </div>
        <div className="col-md d-flex align-self-stretch ">
          <div className="media block-6 services">
            <div className="media-body py-md-4">
              <div className="d-flex mb-3 align-items-center">
                <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-pistons" /></div>
                <div className="text">
                  <h3 className="heading mb-0 pl-3">
                    Transmission
                    <span>Manual</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>      
        </div>
        <div className="col-md d-flex align-self-stretch ">
          <div className="media block-6 services">
            <div className="media-body py-md-4">
              <div className="d-flex mb-3 align-items-center">
                <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-car-seat" /></div>
                <div className="text">
                  <h3 className="heading mb-0 pl-3">
                    Seats
                    <span>5 Adults</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>      
        </div>
        <div className="col-md d-flex align-self-stretch ">
          <div className="media block-6 services">
            <div className="media-body py-md-4">
              <div className="d-flex mb-3 align-items-center">
                <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-backpack" /></div>
                <div className="text">
                  <h3 className="heading mb-0 pl-3">
                    Luggage
                    <span>4 Bags</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>      
        </div>
        <div className="col-md d-flex align-self-stretch ">
          <div className="media block-6 services">
            <div className="media-body py-md-4">
              <div className="d-flex mb-3 align-items-center">
                <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-diesel" /></div>
                <div className="text">
                  <h3 className="heading mb-0 pl-3">
                    Fuel
                    <span>Petrol</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>      
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 pills">
          <div className="bd-example bd-example-tabs">
            <div className="d-flex justify-content-center">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                  <a className="nav-link active" id="pills-manufacturer-tab" data-toggle="pill" href="#pills-manufacturer" role="tab" aria-controls="pills-manufacturer" aria-expanded="true">Description</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " id="pills-description-tab" data-toggle="pill" href="#pills-description" role="tab" aria-controls="pills-description" aria-expanded="true">Features</a>
                </li>
               
    
              </ul>
            </div>
            <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-manufacturer" role="tabpanel" aria-labelledby="pills-manufacturer-tab">
                <p>{cars.description}</p>
              
               </div> 
              

              <div className="tab-pane fade " id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
                <div className="row">
                  <div className="col-md-4">
                    <ul className="features">
                      <li className="check"><span className="ion-ios-checkmark" />Airconditions</li>
                      <li className="check"><span className="ion-ios-checkmark" />Child Seat</li>
                      <li className="check"><span className="ion-ios-checkmark" />GPS</li>
                      <li className="check"><span className="ion-ios-checkmark" />Luggage</li>
                      <li className="check"><span className="ion-ios-checkmark" />Music</li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="features">
                      <li className="check"><span className="ion-ios-checkmark" />Seat Belt</li>
                      <li className="remove"><span className="ion-ios-close" />Sleeping Bed</li>
                      <li className="check"><span className="ion-ios-checkmark" />Water</li>
                      <li className="check"><span className="ion-ios-checkmark" />Bluetooth</li>
                      <li className="remove"><span className="ion-ios-close" />Onboard computer</li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="features">
                      <li className="check"><span className="ion-ios-checkmark" />Audio input</li>
                      <li className="check"><span className="ion-ios-checkmark" />Long Term Trips</li>
                      <li className="check"><span className="ion-ios-checkmark" />Car Kit</li>
                      <li className="check"><span className="ion-ios-checkmark" />Remote central locking</li>
                      <li className="check"><span className="ion-ios-checkmark" />Climate control</li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </section>
  
</div>


        </>
    );
}