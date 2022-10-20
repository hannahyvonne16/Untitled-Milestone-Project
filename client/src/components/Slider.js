import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import angel from '..//assets/img/angel_profile.jpg'//Angel's picture
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
                        <img src='' />
                    </div>
                    <ul className="social-icons">
                    <li><a href=''><img style={{width: '50px', height: '50px', opacity: '1'}} src={navIcon1} alt='LinkedIn'/></a></li>
                    <li><a href=''><img style={{width: '50px', height: '50px', opacity: '1'}} src={navIcon3} alt='GitHub'/></a></li>
                        
                    </ul>
                    <div className="details">
                        <h2>Shane Geary <span className="job-title">Front End, Authentication, Deployment Specialist & Nav Bar Designer</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src='https://media.discordapp.net/attachments/967595293304561724/1032496202454933565/Facetune_18-10-2022-20-55-10.jpg?width=301&height=535' />
                    </div>
                    <ul className="social-icons">
                    <li><a href='https://www.linkedin.com/in/shane-geary-28316b146/'><img style={{width: '50px', height: '50px', opacity: '1'}} src={navIcon1} alt='LinkedIn'/></a></li>
                    <li><a href='https://github.com/Sgeary88'><img style={{width: '50px', height: '50px', opacity: '1'}} src={navIcon3} alt='GitHub'/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Hannah Lee<span className="job-title">API Specialist</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src='https://media.discordapp.net/attachments/967201872555434044/1007049743513436191/IMG_8097.jpg?width=1083&height=1443' />
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