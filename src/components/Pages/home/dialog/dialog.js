import { Link } from "react-router-dom";
import "./dialog.css";
import Logo from "./Logo.png";

function Dialog() {
    return(
        <div>
            <div id="dialogBox">
                <center>
                <img id="logoImg" src={Logo} alt="Logo"/>
                </center>
                <center>
                    <h3 id="dialogText">It's all about <i> Fasion </i></h3>
                </center>
            </div>
            <div id="startBtnDiv">
                <Link to="/all"><button id="startBtn">Get started</button></Link>
            </div>
        </div>
    )
}

export default Dialog;