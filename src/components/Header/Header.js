
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return(
        <div id="headerMain">
            <center><div id="headerIcon"></div></center>
            <center>
            <div id="headerCategoryList">
                <ul id="unorderList">
                    <li className="headerList"><Link to="/">Home</Link></li>
                    <li className="headerList"><Link to="all">All Products</Link></li>
                    <li className="headerList"><Link to="jewellery">Jewellery</Link></li>
                </ul>
            </div>
            </center>
        </div>
    )
}