import React from "react";
import "./task.css"

class Task extends React.Component{
    constructor(props){
        super(props);
        this.state = { isActive : false};
        this.handleClick = this.handleClick.bind(this);
    }

     handleClick() {
        // this.setState(prevState => ({
        // isActive: !prevState.isActive
        // }));
        this.setState({isActive : true});

        this.state.isActive ? alert("ITS ACTIVE") : alert("")
        console.log(this.state.isActive)
        // this.setState({isActive : false});
        
    }




    render() {
        return(
            <div className="task" onClick={this.handleClick}>
                
                <h1>Name of task</h1>
                <p>Some task to  do</p>
            </div>
        )
    }
}

export default Task;