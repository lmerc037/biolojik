import React, { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";
import { Link } from "react-router-dom"; 
 
const Footer = () => {
 
    const [scroll, setScroll] = useState(0);
    const [top, setTop] = useState(0);
  
    useEffect(() => {
      setTop(100);
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      animateScroll.scrollToTop();
    };
  
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    return(
    <footer className="footer-section">
        <div className="container">
            <div className="row"> 
                {/*  Start:About  */}
                <div className="col-lg-12 col-sm-12 text-center">
                    <div className="widget">
                        <div className="footer_logo">
                            <img className="img-responsive" src="assets/images/logo-white-2.png" alt="" />
                        </div>
                        <div className="footer_p text-center">
                            <p className="footer_para ">Loren ipsum dolor conse ctetur at adipis cing elit sed do eiu smod of tempor inci didunt know youlab a et dolore magna aliqua </p>
                        </div>
                        <div className="footer_socil" >
                            <ul className="list-icons link-list footer_soc"  >
                                <li>
                                    <a href="//facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="//twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="//facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-behance"></i></a>
                                </li>
                                <li>
                                    <a href="//instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="//pinterest.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-pinterest"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> 
                {/*  End:About  */}

               
 
              

              
                <button className={`scrollup ${scroll > top ? "show" : ""}`} onClick={() => scrollToTop()} >
                    <span className="icon-glyph-203"></span>
                </button>
            </div>
        </div> 
        {/*  Start:Subfooter  */}
        <div className="subfooter">
            <p>2022 ©  <Link to={process.env.PUBLIC_URL + "/"}>Biolojik</Link>  Tous droits réservés.</p>
        </div> 
        {/* End:Subfooter  */}
    </footer> 

        )
 
}

 
export default Footer;