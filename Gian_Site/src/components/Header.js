import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1 style={{color:"#98eab9"}}><strong>GianFranco Macaraeg</strong><br />
                    FULL STACK SOFTWARE DEVELOPER<br />
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
