import { Link } from "react-router-dom";
export default function Contact(){
    return(
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
  {/* END nav */}
  <section className="hero-wrap hero-wrap-2 js-fullheight" style={{backgroundImage: 'url("src/images/bg_3.jpg")'}} data-stellar-background-ratio="0.5">
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
        <div className="col-md-9  pb-5">
          <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward" /></a></span> <span>Contact <i className="ion-ios-arrow-forward" /></span></p>
          <h1 className="mb-3 bread">Contact Us</h1>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section contact-section">
    <div className="container">
      <div className="row d-flex mb-5 contact-info">
        <div className="col-md-4">
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="border w-100 p-4 rounded mb-2 d-flex">
                <div className="icon mr-3">
                  <span className="icon-map-o" />
                </div>
                <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="border w-100 p-4 rounded mb-2 d-flex">
                <div className="icon mr-3">
                  <span className="icon-mobile-phone" />
                </div>
                <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="border w-100 p-4 rounded mb-2 d-flex">
                <div className="icon mr-3">
                  <span className="icon-envelope-o" />
                </div>
                <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 block-9 mb-md-5">
          <form action="#" className="bg-light p-5 contact-form">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea name id cols={30} rows={7} className="form-control" placeholder="Message" defaultValue={""} />
            </div>
            <div className="form-group">
              <input type="submit" defaultValue="Send Message" className="btn btn-primary py-3 px-5" />
            </div>
          </form>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div id="map" className="bg-white" />
        </div>
      </div>
    </div>
  </section>
 
</div>

        </>);
}