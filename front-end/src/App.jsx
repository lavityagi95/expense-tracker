import Navbar from './components/Navbar';
import Card from './components/card';
import Footer from './components/footer';
import MainBody from  './components/mainBody'
import track from './assets/track.webp'
import "./style/app.css"
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/signup/signup';
import Login from './components/login/login';
import DashBoard  from "./components/Dashboard/dashboard";
import Expense from './components/Dashboard/expense';


function Home() {
  return (
    <> 
      
      <Navbar /> 
      <MainBody/> 

      <div className="class-container">
      <Card 
      title = "View all your subscriptions on one screen"
      description = "It's hard to keep track of subscriptions these days. We bring them together in a single list so you never lose track of what you're paying for."
      image = {track}
      />
      <Card 
      title = "Stay on top of upcoming bills"
      description = "Our members rave about our recurring view that helps them stay on top of what's due, pay bills on time and avoid late fees and overdrafts."
      image = {track}
      />
      <Card 
      title = "Let us cancel unwanted subscriptions for you"
      description = "We've canceled nearly 2.5 million subscriptions on behalf of our members. Let us save you time and hassle by canceling services so you don't have to."
      image = {track}
      />
      </div>
      <Footer/>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<DashBoard/>} />
      <Route path="/expense" element={<Expense/>} />
    </Routes>
  );
}


export default App;