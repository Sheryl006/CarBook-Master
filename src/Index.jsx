import { Link } from "react-router-dom";
import{ useState } from "react";
import axios from "axios";

export default function Index(){

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  
  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('http://localhost:8000/cars/', {
        params: { search: query }
      });
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

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
  <div className="hero-wrap ftco-degree-bg" style={{backgroundImage: 'url("src/images/pexels.jpg")'}} data-stellar-background-ratio="0.5">
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text justify-content-start align-items-center justify-content-center">
        <div className="col-lg-8">
          <div className="text w-100 text-center mb-md-5 pb-md-5">
            <h1 className="">Fast &amp; Easy Way To Rent A Car</h1>
            <p style={{fontSize: 18}}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
            <a href="https://vimeo.com/45830194" className="icon-wrap popup-vimeo d-flex align-items-center mt-4 justify-content-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="ion-ios-play" />
              </div>
              <div className="heading-title ml-5">
                <span>Easy steps for renting a car</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="ftco-section ftco-no-pt bg-light">
    <div className="container">
      <div className="row no-gutters">
        <div className="col-md-12	featured-top">
          <div className="row no-gutters">
            <div className="col-md-4 d-flex align-items-center">
             <form onSubmit={handleSearch} className="request-form bg-dark">
                      <h2>Find Vehicle</h2>
                      <div className="form-group">
                        <label className="label">Search Vehicle</label>
                        <input
                          type="text"
                          className="form-control"
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          placeholder="Search Vehicle name"
                        />
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-light py-3 px-4" object={results}>SEARCH</button>
                      </div>
                    </form>
            </div>
            <div className="col-md-8 d-flex align-items-center">
                    <div className="services-wrap rounded-right w-100">
                      <h3 className="heading-section mb-4">Search Results</h3>
                      <ul>
                        {results.length > 0 ? (
                          results.map(result => (
                            <li key={result.id}>
                              <Link to={`car/${result.id}`}>{result.name}</Link>
                            </li>
                          ))
                        ) : (
                          <li>No results found</li>
                        )}
                      </ul>
                    </div>
                 </div>
              <div className="col-md-8 d-flex align-items-center">
              <div className="services-wrap rounded-right w-100">
                <h3 className="heading-section mb-4">Better Way to Rent Your Perfect Cars</h3>
                <div className="row d-flex mb-4">
                  <div className="col-md-4 d-flex align-self-stretch ">
                    <div className="services w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-route" /></div>
                      <div className="text w-100">
                        <h3 className="heading mb-2">Choose Your Pickup Location</h3>
                      </div>
                    </div>      
                  </div>
                  <div className="col-md-4 d-flex align-self-stretch ">
                    <div className="services w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-handshake" /></div>
                      <div className="text w-100">
                        <h3 className="heading mb-2">Select the Best Deal</h3>
                      </div>
                    </div>      
                  </div>
                  <div className="col-md-4 d-flex align-self-stretch ">
                    <div className="services w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-rent" /></div>
                      <div className="text w-100">
                        <h3 className="heading mb-2">Reserve Your Perfect Car</h3>

                      </div>
                    </div>      
                  </div>
                </div>
                <p><a href="/cars" className="btn btn-primary py-3 px-4 animated-button">Reserve Your Perfect Car</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></section>
   
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
 
 <section className="ftco-counter ftco-section img bg-light" id="section-counter">
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
