import { useNavigate  } from "react-router-dom";
import '../../style/signup/signup.css'
function  Login(){
    
   const navigate = useNavigate();
    return (
        <>
      <div className="container">
         <div className="left-section">
    <h1>Expense Tracker</h1>

    <h3>Easily cancel unwanted subscriptions</h3>

    <p>
      Subscription cancellation and tracking are just part of why Rocket Money
      has over 186K 5-star ratings!
    </p>

    <ul>
      <li>Effortlessly track your spending</li>
      <li>Easily lower bills</li>
      <li>Track your net worth</li>
    </ul>
  </div>
        <div className="SignUp-container">
          <p>
            Create your Rocket Account. This account will work for Rocket Money
            and all other Rocket products!
          </p>
          
          <input type="Email"placeholder='Enter your email'   />
          <input type="Password"placeholder='Enter your password'/>
          <div className="cheak-box">
            <label>
              <input type="checkbox" />I agree to the Rocket Money Terms of
              Service, Rocket Account Terms of Use, AI Agent Terms of Service
              and Privacy Policy.
            </label>

            <button onClick={()=> navigate('/dashboard')} >Login</button>

            <button onClick={() => navigate("/signup")}>SignUp</button>
          </div>
        </div>
      </div>
    </>
    )
}

export default Login;