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
    SiRedux,
    SiTailwindcss,
    SiBootstrap,

} from "react-icons/si";

const ProjectsList = () => {
    return (
        <StyledProjectsList>

            <ProjectCard 
                name="Calc Log" 
                title="Calc Log"   
                description="CalcLog is a calculator app that allows you to save your calculation logs with the result, title and a comment. They'll be stored in the cloud and can be checked anytime on any device! Sign in with a Google Account to start."
                link="https://calc-log.vercel.app/"
                github="https://github.com/danilo-mello/calculator"
                image={calclog}
                tools={[
                    {name: "React", icon: <SiReact />}, 
                    {name: "Javascript", icon: <SiJavascript />},
                    {name: "Firebase", icon: <SiFirebase />},
                    {name: "Redux", icon: <SiRedux />},
                    {name: "Tailwind", icon: <SiTailwindcss />}
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
                    {name: "Bootstrap", icon: <SiBootstrap />},
                ]}

            />
            <ProjectCard 
                name="For Each" 
                title="For Each"   
                description="ForEachItem is a Java application which allows you to know the price per unit of a produce, by informing the price per lb."
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