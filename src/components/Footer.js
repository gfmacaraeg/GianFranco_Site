import React from 'react'
import resume from '../assets/files/GianFranco_Macaraeg_Resume.pdf'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer" >
                <div className="inner" style={{opacity: 1.0}}>
                    <ul className="icons">
                        <li><a href="https://github.com/gfmacaraeg" target = "_blank" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://www.linkedin.com/in/gfmacaraeg/" target = "_blank" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="mailto: gfmacaraeg@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                        <li><a href={resume} target = "_blank" className="icon fa-file"><span className="label">Resume</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; GianFranco</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
