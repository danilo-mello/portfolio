import React from 'react'

import { StyledProjectsCard, StyledProjectsCardCover } from './ProjectCard.styled';
import calclog from '../../calclog.png'

const ProjectsCard = (props) => {
    return (
        <StyledProjectsCard>
            <div className="wrapper">
                <div className="product-img">
                    <img src={calclog} height="420" />
                </div>
                <div className="product-info">
                    <div className="product-text">
                        <h1>Harvest Vase</h1>
                        <h2>by studio and friends</h2>
                        <p>Harvest Vases are a reinterpretation of peeled fruits and vegetables as functional objects. The surfaces appear to be sliced and pulled aside, allowing room for growth. </p>
                    </div>
                    <div className="product-price-btn">
                        <p><span>78</span>$</p>
                        <button type="button">buy now</button>
                    </div>
                </div>
            </div>
        </StyledProjectsCard>

    )
}

export default ProjectsCard