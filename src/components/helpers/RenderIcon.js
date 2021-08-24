import React, {Component} from 'react';

import { 
    SiJavascript, 
    SiReact, 
    SiPython, 
    SiNodeDotJs, 
    SiPostgresql, 
    SiFirebase,
    SiDjango,
    SiJava,
    SiMysql,
    SiSass,
    SiMongodb,
    SiRedux,
    SiTailwindcss,
    SiBootstrap,
    SiStyledComponents

} from "react-icons/si";

class RenderIcon extends Component {
    
    components = {
        SiJavascript, 
        SiReact, 
        SiPython, 
        SiNodeDotJs, 
        SiPostgresql, 
        SiFirebase,
        SiDjango,
        SiJava,
        SiMysql,
        SiSass,
        SiMongodb,
        SiRedux,
        SiBootstrap,
        SiTailwindcss,
        SiStyledComponents
    };
    
    render() {
       const TagName = this.components[this.props.tag];
       return <TagName />
    }
}
export default RenderIcon;