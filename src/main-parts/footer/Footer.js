import React from "react";
import "./footer.css"

class Footer extends React.Component {
    render (){
        return(
            <div className="footer">
                <div className="footer-tasks">
                    <h2>Active tasks: N</h2>
                    <h2>Finished tasks: M</h2>
                </div>
                <div className="autor">
                    <h2>Kanban board by NAME, YEAR</h2>
                </div>
                {/* <h1>Awesome Kanban Board</h1>
                <div className="logos">
                    <img className="logo" src="../logos/user-avatar.svg" alt="avatar" />
                    <img onClick={this.arrowClick} className="arrow" src={this.state.isAnActive ? "./logos/arrow-up.svg" : "./logos/arrow-down.svg"} alt="arrow" />
                        <select className={this.state.showSelect ? "active" : "inactive"}>
                            
                            <option value="Profile">Profile</option>
                            <option value="Log Out">Log Out</option>
                        </select>
                        <div className={this.state.showProfileMenuList ? "inactive" : "active" }>
                            <img className="profile-rectangle" src="./logos/Rectangle-27.svg" alt="" />
                            <div className="profile-menu-list">
                                <div className="profile-menu-li">Profile</div>
                                <div className="profile-menu-li">Log out</div>
                            </div>
                        </div>
                </div> */}
            </div>
        )
    }
}

export default Footer;