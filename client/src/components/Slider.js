import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import angel from '..//assets/img/angel_profile.jpg'//Angel's picture
import hannah from '..//assets/img/hannah_profile.jpg'//Hannah's picture
import shane from '..//assets/img/placeholder-man.jpg'//placeholder for Shane's picture
import allison from '..//assets/img/allison_profile.jpg'//Allison's picture
import '../slider-css/Slider.css'
import navIcon1 from '../assets/img/LinkedIn_icon_circle.svg'
import navIcon2 from '../assets/img/behance2.png'; //Behance Logo
import navIcon3 from '../assets/img/25231.png'; //Github Logo

function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={angel}/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://www.linkedin.com/in/angel-guevara8/"><img style={{width: '50px', height: '50px', opacity: '1'}} src={navIcon1} alt='Linkedin'/></a></li>
                        <li><a href="https://www.behance.net/angelthecreator"><img style={{width: '50px', height: '50px', opacity: '1'}} src={navIcon2} alt='Behance'/></a></li>
                        <li><a href="https://github.com/AngelTheCreator"><img style={{width: '50px', height: '50px', opacity: '1'}} src={navIcon3} alt='GitHub'/></a></li>
                        
                    </ul>
                    <div className="details">
                        <h2>Ángel Guevara <span className="job-title">Project Manager, Front End Specialist, UI/UX & Map Designer</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={shane} />
                    </div>
                    <ul className="social-icons">
                    <li><a href='https://www.linkedin.com/in/shane-geary-28316b146/'><img style={{width: '50px', height: '50px', opacity: '1'}} src={navIcon1} alt='LinkedIn'/></a></li>
                    <li><a href='https://github.com/Sgeary88'><img style={{width: '50px', height: '50px', opacity: '1'}} src={navIcon3} alt='GitHub'/></a></li>
                        
                    </ul>
                    <div className="details">
                        <h2>Shane Geary <span className="job-title">Front End, Authentication, Deployment Specialist & Nav Bar Designer</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={hannah} />
                    </div>
                    <ul className="social-icons">
                    <li><a href='hhttps://www.linkedin.com/in/hannah-lee-b3b370218/'><img style={{width: '50px', height: '50px', opacity: '1'}} src={navIcon1} alt='LinkedIn'/></a></li>
                    <li><a href='https://github.com/hannahyvonne16'><img style={{width: '50px', height: '50px', opacity: '1'}} src={navIcon3} alt='GitHub'/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Hannah Lee<span className="job-title">API, Map & Data Specialist</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={allison} />
                    </div>
                    <ul className="social-icons">
                    <li><a href="https://www.linkedin.com/in/allisonruiz/"><img style={{width: '50px', height: '50px', opacity: '1'}} src={navIcon1} alt='LinkedIn'/></a></li>
                    <li><a href="https://github.com/allisonruiz"><img style={{width: '50px', height: '50px', opacity: '1'}} src={navIcon3} alt='GitHub'/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Allison Ruiz <span className="job-title">Back End, Controllers & Database Specialist</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default ImageSlider;