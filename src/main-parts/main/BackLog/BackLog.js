import React from "react";
import Button from "../../button/Button";
import Task from "../task/Task";
import "./backLog.css"

class BackLog extends React.Component{
    render() {
        return(
            <div className="backlog">
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Button/>
            </div>
        )
    }
}

export default BackLog;