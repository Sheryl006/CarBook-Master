import { Link } from "react-router-dom";
export default function Blog(){
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
  <section className="hero-wrap hero-wrap-2 js-fullheight" style={{backgroundImage: 'url("src/images/bg_2.jpg")'}} data-stellar-background-ratio="0.5">
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
        <div className="col-md-9  pb-5">
          <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward" /></a></span> <span>Blog <i className="ion-ios-arrow-forward" /></span></p>
          <h1 className="mb-3 bread">Our Blog</h1>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-12 text-center d-flex ">
          <div className="blog-entry justify-content-end mb-md-5">
            <Link to="/blogsingle" className="block-20 img" style={{backgroundImage: 'url("src/images/image_1.jpg")'}}>
            </Link>
            <div className="text px-md-5 pt-4">
              <div className="meta mb-3">
                <div><a href="#">Oct. 29, 2019</a></div>
                <div><a href="#">Admin</a></div>
                <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
              </div>
              <h3 className="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <p><Link to="/blogsingle" className="btn btn-primary">Continue <span className="icon-long-arrow-right" /></Link></p>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center d-flex ">
          <div className="blog-entry justify-content-end mb-md-5">
            <Link to="/blogsingle" className="block-20 img" style={{backgroundImage: 'url("src/images/image_2.jpg")'}}>
            </Link>
            <div className="text px-md-5 pt-4">
              <div className="meta mb-3">
                <div><a href="#">Oct. 29, 2019</a></div>
                <div><a href="#">Admin</a></div>
                <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
              </div>
              <h3 className="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <p><Link to="/blogsingle" className="btn btn-primary">Continue <span className="icon-long-arrow-right" /></Link></p>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center d-flex ">
          <div className="blog-entry">
            <Link to="/blogsingle" className="block-20 img" style={{backgroundImage: 'url("src/images/image_3.jpg")'}}>
            </Link>
            <div className="text px-md-5 pt-4">
              <div className="meta mb-3">
                <div><a href="#">Oct. 29, 2019</a></div>
                <div><a href="#">Admin</a></div>
                <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
              </div>
              <h3 className="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <p><Link to="/blogsingle" className="btn btn-primary">Continue <span className="icon-long-arrow-right" /></Link></p>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center d-flex ">
          <div className="blog-entry justify-content-end mb-md-5"><Link
            Link to="/blogsingle" className="block-20 img" style={{backgroundImage: 'url("src/images/image_4.jpg")'}}>
            </Link>
            <div className="text px-md-5 pt-4">
              <div className="meta mb-3">
                <div><a href="#">Oct. 29, 2019</a></div>
                <div><a href="#">Admin</a></div>
                <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
              </div>
              <h3 className="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <p><Link to="/blogsingle" className="btn btn-primary">Continue <span className="icon-long-arrow-right" /></Link></p>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center d-flex ">
          <div className="blog-entry justify-content-end mb-md-5">
            <Link to="/blogsingle" className="block-20 img" style={{backgroundImage: 'url("src/images/image_5.jpg")'}}>
            </Link>
            <div className="text px-md-5 pt-4">
              <div className="meta mb-3">
                <div><a href="#">Oct. 29, 2019</a></div>
                <div><a href="#">Admin</a></div>
                <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
              </div>
              <h3 className="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <p><Link to="/blogsingle" className="btn btn-primary">Continue <span className="icon-long-arrow-right" /></Link></p>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center d-flex ">
          <div className="blog-entry">
            <Link to="/blogsingle" className="block-20 img" style={{backgroundImage: 'url("src/images/image_6.jpg")'}}>
            </Link>
            <div className="text px-md-5 pt-4">
              <div className="meta mb-3">
                <div><a href="#">Oct. 29, 2019</a></div>
                <div><a href="#">Admin</a></div>
                <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
              </div>
              <h3 className="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <p><Link to="/blogsingle" className="btn btn-primary">Continue <span className="icon-long-arrow-right" /></Link></p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        
      </div>
    </div>
  </section>
 
  {/* <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" /></svg></div> */}
</div>

        </>
    );
}