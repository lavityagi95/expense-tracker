import '../../style/dashboard/expense.css'

function Expense() {
  return (
    <div className="expense-container">
      <h2>Add Daily Expense</h2>

      <label htmlFor="amount">Amount</label>
      <input
        id="amount"
        type="number"
        placeholder="Enter amount"
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        placeholder="Enter description"
        rows="4"
      ></textarea>

      <button>Add Expense</button>
    </div>
  );
}

export default Expense;