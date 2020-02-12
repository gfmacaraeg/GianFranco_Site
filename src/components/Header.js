import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="My picture" /></a>
                    {/* <h1 style={{color:"#98eab9"}}><strong>GianFranco Macaraeg</strong><br /> */}
                    
                    <h1><strong>GianFranco Macaraeg</strong></h1>
                    <h1 style={{color:"#49bf9d"}}>FULL STACK SOFTWARE DEVELOPER</h1>
                    
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
