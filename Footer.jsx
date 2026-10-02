import {NavLink} from "react-router-dom";
function Footer(){
    return(<>
    <div className="footer">
        <div className="findus-footer">
            <h2>Find Us</h2>
            <p>28/2 bhx2,Maharastra</p>
        </div>
        <div className="callus-footer">  
            <h2>Call us</h2>
            <p>10006969143</p>
            </div>
        <div className="mailus-footer">
            <h2>Mail Us</h2>
            <p>AtlasGlobal247@gmail.com</p>
        </div>
    </div>
    <div className="go-home"><NavLink id="nav"  to={"/contact"}>contact Us</NavLink></div>

    </>)
}
export default Footer;