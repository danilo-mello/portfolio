import React from 'react'

import ProjectCard from './ProjectCard'
import { StyledProjectsList } from './ProjectsList.styled';
import calclog from '../../static/img/calc-log.png'
import foreach from '../../static/img/foreach.png'
import lpbox from '../../static/img/lpbox.png'

import { 
    SiJavascript, 
    SiReact, 
    SiPython, 
    SiPostgresql, 
    SiFirebase,
    SiDjango,
    SiJava,
    SiSass,
    SiRedux

} from "react-icons/si";

const ProjectsList = () => {
    return (
        <StyledProjectsList>

            <ProjectCard 
                name="Calc Log" 
                title="Calc Log"   
                description="Calculator web app with saving log function"
                link="https://calc-log.vercel.app/"
                github="https://github.com/danilo-mello/calculator"
                image={calclog}
                tools={[
                    {name: "React", icon: <SiReact />}, 
                    {name: "Javascript", icon: <SiJavascript />},
                    {name: "Firebase", icon: <SiFirebase />},
                    {name: "Redux", icon: <SiRedux />},
                ]}
            />

            <ProjectCard 
                name="LP Box" 
                title="LP Box"   
                description="Web Application to manage LP collection build with Pyhton/Django Framework and PostgresSQL."
                link="https://dm-lpbox.herokuapp.com/"
                github="https://github.com/danilo-mello/lpbox"
                image={lpbox}
                tools={[
                    {name: "Python", icon: <SiPython />}, 
                    {name: "Django", icon: <SiDjango />},
                    {name: "PostgresSQL", icon: <SiPostgresql />},
                ]}

            />
            <ProjectCard 
                name="For Each" 
                title="For Each"   
                description="Java Aplication"
                link="https://cookie777.github.io/ForEach-Item/lp/"
                github="https://github.com/cookie777/ForEach-Item"
                image={foreach}
                tools={[
                    {name: "Java", icon: <SiJava />}, 
                    {name: "Sass", icon: <SiSass />},
                ]}
            />
        </StyledProjectsList>

    )
}

export default ProjectsList