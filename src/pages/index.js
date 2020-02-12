import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import Email from '../components/Email'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/fulls/footage_gif.gif'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/footage_gif.gif'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

import resume from '../assets/files/GianFranco_Macaraeg_Resume.pdf'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, gh_link:'https://github.com/gfmacaraeg/Travel-Pal', thumbnail: thumb01, caption: 'Travel Pal', description: 'A CRUD web application that allows users to list their upcoming travel plans and other registered users can join trips based on all pre-existing trips.'},
    { id: '2', source: full02, gh_link:'https://github.com/gfmacaraeg/Security_cam', thumbnail: thumb02, caption: 'Security Cam', description: 'Security camera application that detects human faces and compares them to a list of known faces which triggers an email alert to the registered owners when an unknown face is detected. '},
    { id: '3', source: full03, gh_link:'https://github.com/gfmacaraeg/GianFranco_Site', thumbnail: thumb03, caption: 'Personal Portfolio Website', description: 'This is my personal porfolio website built with gatsby.js and react.js'},
    // { id: '4', source: full04, gh_link:'#', thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum'},
    // { id: '5', source: full05, gh_link:'#', thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    // { id: '6', source: full06, gh_link:'#', thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "GianFranco"
        const siteDescription = "My portfolio website"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                        <link rel="icon" href="../assets/images/site_icon.ico"/>

                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>About me</h2>
                        </header>
                        <p>I'm a software engineer based in Dallas, TX. I love tinkering with things. Whether it's software, car, photography, 
                            or computer hardware, my goal is to constantly make things better. 
                            I am incredibly passionate about problem-solving, learning and engineering.</p>
                        <ul className="actions">
                            <li title="Open my Resume"><a href={resume} target = "_blank" className="button">Resume</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Portfolio</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, gh_link, thumbnail, caption, description }) => ({
                            
                            source,
                            gh_link,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li title="Open my Github page"><a href="https://github.com/gfmacaraeg" target = "_blank"  className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Fill out the form below or reach out through my socials to contact me!</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <Email/>
                                
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Dallas, TX<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        (615)594-65-95
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto: gfmacaraeg@gmail.com">gfmacaraeg@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex