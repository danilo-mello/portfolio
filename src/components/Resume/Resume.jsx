import React from 'react';

import { 
    ResumeStyled
} 
from './Resume.styled';

const Resume = () => {
    return(
        <ResumeStyled>
            Resume

            <div>
                <div>Your name</div>
                <div>Profession</div>
                <div>
                    Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>

            <div>

                <div>

                    <div>Work History</div>

                    <div>
                        <div>
                            From x - y
                        </div>
                        <div>
                            <div>Job title 1</div>
                            <div>Company 1</div>
                            <div>list of job desciption 1</div>
                        </div>
                    </div>

                    <div>
                        <div>
                            From x - y
                        </div>
                        <div>
                            <div>Job title 2</div>
                            <div>Company 2</div>
                            <div>list of job desciption 2</div>
                        </div>
                    </div>

                </div>

                <div>

                    <div>Education</div>

                    <div>
                        <div>
                            Education title 1
                        </div>
                        <div>
                            College name 1
                        </div>
                    </div>

                    <div>
                        <div>
                            Education title 2
                        </div>
                        <div>
                            College name 2
                        </div>
                    </div>

                </div>

                <div>

                </div>

            </div>

            <div>
                <div>
                    <div>Contact</div>
                    <div>
                        Adress
                        Contact Details
                    </div>
                </div>

                <div>
                    <div>Skills</div>
                    <div>
                        List of skills
                    </div>
                </div>

            </div>            

        </ResumeStyled>
    )
}

export default Resume