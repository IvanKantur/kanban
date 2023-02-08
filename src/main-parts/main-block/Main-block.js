import React from "react";
import BackLog from "../main/BackLog/BackLog";
import Ready from "../main/Ready/Ready";
import "./main-block.css"

class MainBlock extends React.Component{

    render() {
        return(
            <div className="main-block-content">
                <BackLog/>
                <Ready/>
                <BackLog/>
                <BackLog/>
            </div>
        )
    }

}

export default MainBlock;