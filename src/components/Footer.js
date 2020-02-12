import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer" >
                <div className="inner" style={{opacity: 1.0}}>
                    <ul className="icons">
                        <li><a href="https://github.com/gfmacaraeg" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://www.linkedin.com/in/gfmacaraeg/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="mailto: gfmacaraeg@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                        <li><a href="#" className="icon fa-file"><span className="label">Resume</span></a></li>
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
