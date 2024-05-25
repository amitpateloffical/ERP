import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import Layout from "./Components/Layout";
import Dashboard from "./pages/Dashboard/Accounting/DashBoard";
import Linechart from "./Components/Charts/Linechart";
import AccountStatement from "./pages/Dashboard/Accounting/Reports/AccountStatement/AccountStatement";
import InvoiceSummary from "./pages/Dashboard/Accounting/Reports/InvoiceSummary/InvoiceSummary";
import SalesReport from "./pages/Dashboard/Accounting/Reports/SalesReport/SalesReport";
import Receivables from "./pages/Dashboard/Accounting/Reports/Receivables/Receivables";
import Payables from "./pages/Dashboard/Accounting/Reports/Payables/Payables";
import BillSummary from "./pages/Dashboard/Accounting/Reports/BillSummary/BillSummary";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="reports">
            <Route path="account-statement-report" element={<AccountStatement />} />
            <Route path="invoice-summary-report" element={<InvoiceSummary />} />
            <Route path="sales-report" element={<SalesReport />} />
            <Route path="receivables-report" element={<Receivables />} />
            <Route path="payables-report" element={<Payables />} />
            <Route path="bill-summary-report" element={<BillSummary />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
      </Routes>
    </Router>
  );
}

export default App;
