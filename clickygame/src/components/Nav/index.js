import React from "react";


function Nav(props){
    return(
        <nav className="navbar">
            <ul>
                <li href="/">ClickyGame</li>
            </ul>   
            <ul>
                <li>
                    Score: {props.score} | TopScore: {props.topScore}
                </li>
            </ul>

        </nav>
    )
}

export default Nav;