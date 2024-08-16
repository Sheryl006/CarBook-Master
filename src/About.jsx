import { Link } from "react-router-dom";
export default function About(){
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
  <section className="hero-wrap hero-wrap-2 js-fullheight" style={{backgroundImage: 'url("src/images/bg_1.jpg")'}} data-stellar-background-ratio="0.5">
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
        <div className="col-md-9  pb-5">
          <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward" /></a></span> <span>About us <i className="ion-ios-arrow-forward" /></span></p>
          <h1 className="mb-3 bread">About Us</h1>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-about">
    <div className="container">
      <div className="row no-gutters">
        <div className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(src/images/about.jpg)'}}>
        </div>
        <div className="col-md-6 wrap-about ">
          <div className="heading-section heading-section-white pl-md-5">
            <span className="subheading">About us</span>
            <h2 className="mb-4">Welcome to Carbook</h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p><a href="#" className="btn btn-primary py-3 px-4">Search Vehicle</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-intro" style={{backgroundImage: 'url(src/images/pexels.jpg)'}}>
    <div className="overlay" />
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-md-6 heading-section heading-section-white ">
          <h2 className="mb-3">Do You Want To Earn With Us? So Don't Be Late.</h2>
          <a href="#" className="btn btn-primary btn-lg">Become A Driver</a>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section testimony-section bg-light">
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-md-7 text-center heading-section ">
          <span className="subheading">Testimonial</span>
          <h2 className="mb-3">Happy Clients</h2>
        </div>
      </div>
      <div className="row ">
        <div className="col-md-12">
          <div className="carousel-testimony owl-carousel ftco-owl">
            <div className="item">
              <div className="testimony-wrap rounded text-center py-4 pb-5">
                <div className="user-img mb-2" style={{backgroundImage: 'url(src/images/person_1.jpg)'}}>
                </div>
                <div className="text pt-4">
                  <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <p className="name">Roger Scott</p>
                  <span className="position">Marketing Manager</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap rounded text-center py-4 pb-5">
                <div className="user-img mb-2" style={{backgroundImage: 'url(src/images/person_2.jpg)'}}>
                </div>
                <div className="text pt-4">
                  <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <p className="name">Roger Scott</p>
                  <span className="position">Interface Designer</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap rounded text-center py-4 pb-5">
                <div className="user-img mb-2" style={{backgroundImage: 'url(src/images/person_3.jpg)'}}>
                </div>
                <div className="text pt-4">
                  <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <p className="name">Roger Scott</p>
                  <span className="position">UI Designer</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap rounded text-center py-4 pb-5">
                <div className="user-img mb-2" style={{backgroundImage: 'url(src/images/person_1.jpg)'}}>
                </div>
                <div className="text pt-4">
                  <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <p className="name">Roger Scott</p>
                  <span className="position">Web Developer</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap rounded text-center py-4 pb-5">
                <div className="user-img mb-2" style={{backgroundImage: 'url(src/images/person_1.jpg)'}}>
                </div>
                <div className="text pt-4">
                  <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <p className="name">Roger Scott</p>
                  <span className="position">System Analyst</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-counter ftco-section img" id="section-counter">
    <div className="overlay" />
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ">
          <div className="block-18">
            <div className="text text-border d-flex align-items-center">
              <strong className="number" data-number={60}>0</strong>
              <span>Year <br />Experienced</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ">
          <div className="block-18">
            <div className="text text-border d-flex align-items-center">
              <strong className="number" data-number={1090}>0</strong>
              <span>Total <br />Cars</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ">
          <div className="block-18">
            <div className="text text-border d-flex align-items-center">
              <strong className="number" data-number={2590}>0</strong>
              <span>Happy <br />Customers</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ">
          <div className="block-18">
            <div className="text d-flex align-items-center">
              <strong className="number" data-number={67}>0</strong>
              <span>Total <br />Branches</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>	
 
  {/* <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" /></svg></div> */}
</div>

</>
    );
}