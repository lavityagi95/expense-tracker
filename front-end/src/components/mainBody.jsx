import "../style/mainBody.css";
import track from "../assets/track.webp";
import SignUp from "./signup/signup.jsx";
import { useNavigate  } from "react-router-dom";


function MainBody() {

   const navigate = useNavigate();
  return (
    <>
     

      <div className="container">
  <div className="left-section">
    <h2>Expense Tracker</h2>

    <p>
      Join over 10 million members & experience financial freedom today!
    </p>

    <ul>
      <li>Identify subscriptions to stop paying</li>
      <li>Track your expenses</li>
      <li>Save more money</li>
    </ul>

    <div className="email">
      <input type="email" placeholder="Enter your email" />
      <button onClick= {()=> navigate("/login")}>Login</button>
      <button onClick={() => navigate("/signup")}>SignUp</button>
    </div>
  </div>

  <div className="right-section">
    <img src={track} alt="Expense Tracker" />
  </div>
</div>
    </>
  );
}
export default MainBody;
