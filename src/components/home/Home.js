import React from 'react'
import { Link } from 'react-scroll'
import Skills from '../skills/Skills'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import Projects from '../projects/Projects'
import './Home.css'


function Home() {

    return (
        <div>
            <Navbar />
            <div class="parallax">
                <div className="home-container">
                    <label class="name">Anthony Tarbinian</label>
                    <div class="description">
                        <h3 className="welcome">Welcome!</h3>
                        <p>I'm a first year undergraduate student studying Computer Science at UC San Diego and an aspiring software developer.</p>
                        <p>On this website you can view my personal projects
                            and access my repository of iOS jailbreak tweaks.</p>
                    </div>
                </div>
            </div>
            {/* <Skills images={["/assets/com.atar13.vaon/vaon.png","/assets/com.atar13.vaon/vaon.png","/assets/com.atar13.vaon/vaon.png","/assets/com.atar13.vaon/vaon.png","/assets/com.atar13.vaon/vaon.png"]}>
            </Skills> */}
            <Skills images={[
                {
                    location: "/assets/icons/skills/golang.png",
                    text: "Go Programming Language",
                    link: "golang.org"
                },
                {
                    location: "/assets/icons/skills/java.png",
                    text: "Java Programming Language",
                    link: "golang.org"
                },
                {
                    location: "/assets/icons/skills/python.png",
                    text: "Python Programming Language",
                    link: "golang.org"
                },
                {
                    location: "/assets/icons/skills/pytorch.png",
                    text: "Pytorch Machine Learning Library",
                    link: "golang.org"
                },
                {
                    location: "/assets/icons/skills/javascript.png",
                    text: "JavaScript Programming Language",
                    link: "golang.org"
                },
                {
                    location: "/assets/icons/skills/react.png",
                    text: "React Programming Language",
                    link: "golang.org"
                },
            ]} />
            <div style={{ paddingTop: '0%' }} />
            <Link to="projects" smooth={true}>
                <div className="projects-header">
                    <img alt="projects-chevron" style={{ height: '2rem', paddingTop: '1rem' }} src="/assets/icons/icons8-chevron-down-100(1).png"></img>
                    <h1 className="projects-title">Projects</h1>
                </div>
            </Link>
            <div id="projects">
                <Projects />
            </div>
            <Footer />
        </div>)
}

export default Home
