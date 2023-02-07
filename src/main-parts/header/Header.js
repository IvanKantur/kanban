import React from "react";
import "./header.css";
// import "*.svg"


class Header extends React.Component {
    constructor(props){
super(props);
this.state = {isAnActive : "false"};
this.state = { showProfileMenuList : "false"};

this.arrowClick = this.arrowClick.bind(this);

    }

    arrowClick () {
        this.setState(prevState => ({
            isAnActive: !prevState.isAnActive,
            showProfileMenuList: !prevState.showProfileMenuList
          }));
    }

    render() {
        return (
            <div className="header">
                <h1>Awesome Kanban Board</h1>
                <div className="logos">
                    <img className="logo" src="../logos/user-avatar.svg" alt="avatar" />
                    <img onClick={this.arrowClick} className="arrow" src={this.state.isAnActive ? "./logos/arrow-up.svg" : "./logos/arrow-down.svg"} alt="arrow" />
                        {/* <select className={this.state.showSelect ? "active" : "inactive"}>
                            
                            <option value="Profile">Profile</option>
                            <option value="Log Out">Log Out</option>
                        </select> */}
                        <div className={this.state.showProfileMenuList ? "active" : "inactive"}>
                            <img className="profile-rectangle" src="./logos/Rectangle-27.svg" alt="" />
                            <div className="profile-menu-list">
                                <div className="profile-menu-li">Profile</div>
                                <div className="profile-menu-li">Log out</div>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default Header;