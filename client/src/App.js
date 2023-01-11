import "./App.css";
import Bills from "./Bills/Bills";
import Home from "./Home/Home.jsx";
import Inbox from "./Inbox/Inbox";
import Statistics from "./Statistics/Statistics";
import { Route, Routes } from "react-router-dom";
import Issues from "./Issues/Issues";
import Polls from "./Polls/Polls";
import DashBoard from "./DashBoard/DashBoard";
import AddBills from "./AddBills/AddBills";
import Newchat from "./Newchat/Newchat";

function App() {
  document.body.style = "background: #f5f5f5;";

  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/DashBoard" element={<DashBoard />} />
      <Route path="/Issues" element={<Issues />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/bills" element={<Bills />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/profile" element={<Home />} />
      <Route path="/Polls" element={<Polls />} />
      <Route path="/chat" element={<Newchat />} />
      <Route path="/addBill" element={<AddBills />} />
    </Routes>
  );
}

export default App;
