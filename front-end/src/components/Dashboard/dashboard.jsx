import NavBar from "../Navbar";
import "../../style/dashboard/dashboard.css";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />

      <div className="dashboard">
        <button
          className="add-btn"
          onClick={() => navigate("/expense")}
        >
          + Add Expense
        </button>

        <div className="dashboard-container">
          <div className="expense-card">
            <h3>Yearly Income</h3>
            <p>₹0</p>
          </div>

          <div className="expense-card">
            <h3>Monthly Income</h3>
            <p>₹0</p>
          </div>
          <div className="expense-card">
            <h3>Yearly Expense</h3>
            <p>₹0</p>
          </div>


          <div className="expense-card">
            <h3>Monthly Expense</h3>
            <p>₹0</p>
          </div>
          <div className="expense-card">
            <h3>Daily Income</h3>
            <p>₹0</p>
          </div>
          <div className="expense-card">
            <h3>Daily Expense</h3>
            <p>₹0</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;