import React from "react";


function ClickItem(props) {
    return (



        < div
            role="img"
            onClick={() => props.handleClick(props.id)
            }
            style={{ backgroundImage: `url("${props.image}")` }}
        />





    )
}

export default ClickItem;