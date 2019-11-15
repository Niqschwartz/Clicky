import React from "react";


function ClickItem(props) {
    return (
        // < div
        //     role="img"
        //     onClick={() => props.handleClick(props.id)
        //     }
        //     style={{ backgroundImage: `url("${props.image}")` }}
        // />
        //<div class="row">
            <img class="col-sm-2" src={props.image} onClick={() => props.handleClick(props.id)}></img>
        //</div>
    )
}

export default ClickItem;