import "./Login_main.css"
import { Link } from "react-router-dom";

let Login_main = ()=>{
    return(
        <div class="loginsignup">
        <div class="signup">
            <Link to="/MainOwner" class="Signuplink">Signup</Link>
        </div>
        <div class="login">
            
            <Link to="/Mainrenter" class="loginlink">Login</Link>
        </div>
        </div>
    );
}
export default Login_main;