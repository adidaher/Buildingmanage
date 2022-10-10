
import "./App.css";
import Bills from "./Bills/Bills";
import Home from "./Home/Home.jsx";
import Inbox from "./Inbox/Inbox";
import ReportIssue from "./ReportIssue/ReportIssue";
import Statistics from "./Statistics/Statistics";
import { Route, Routes } from "react-router-dom";
import Chat from "./Chat/Chat";
import UnPaidBills from "./UnPaidBills/UnPaidBills";
import Polls from "./Polls/Polls";

function App() {
  document.body.style = "background: #f5f5f5;";
  return (
    <Routes>
      <Route path="/" element={<UnPaidBills />} />
      <Route path="/UnPaidBills" element={<UnPaidBills />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/reportIssue" element={<ReportIssue />} />
      <Route path="/bills" element={<Bills />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/profile" element={<Home />} />
      <Route path="/Polls" element={<Polls />} />
    </Routes>
  );
}



export default App;

