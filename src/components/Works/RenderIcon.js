import React, {Component} from 'react';

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

class RenderIcon extends Component {
    components = {
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
    };
    
    render() {
       const TagName = this.components[this.props.tag];
       return <TagName />
    }
}
export default RenderIcon;