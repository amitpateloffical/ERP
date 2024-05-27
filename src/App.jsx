import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LogIn/LoginPage";
import Layout from "./Components/Layout";
import Dashboard from "./pages/Dashboard/Accounting/DashBoard";
import AccountStatement from "./pages/Dashboard/Accounting/Reports/AccountStatement/AccountStatement";
import InvoiceSummary from "./pages/Dashboard/Accounting/Reports/InvoiceSummary/InvoiceSummary";
import SalesReport from "./pages/Dashboard/Accounting/Reports/SalesReport/SalesReport";
import Receivables from "./pages/Dashboard/Accounting/Reports/Receivables/Receivables";
import Payables from "./pages/Dashboard/Accounting/Reports/Payables/Payables";
import BillSummary from "./pages/Dashboard/Accounting/Reports/BillSummary/BillSummary";
import NotFound from "./pages/NotFound/NotFound";
import ProductStock from "./pages/Dashboard/Accounting/Reports/ProductStock/ProductStock";
import CashFlow from "./pages/Dashboard/Accounting/Reports/CashFlow/CashFlow";
import Transaction from "./pages/Dashboard/Accounting/Reports/Transaction/Transaction";
import IncomeSummary from "./pages/Dashboard/Accounting/Reports/IncomeSummary/IncomeSummary";
import ExpenseSummary from "./pages/Dashboard/Accounting/Reports/ExpenseSummary/ExpenseSummary";
import IncomeVsExpense from "./pages/Dashboard/Accounting/Reports/IncomeVsExpense/IncomeVsExpense";
import TaxSummary from "./pages/Dashboard/Accounting/Reports/TaxSummary/TaxSummary";
import Overview from "./pages/Dashboard/HRM/Overview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Layout />}>    
          <Route index element={<Dashboard />} />
          <Route path="accounting/reports">
            <Route path="account-statement" element={<AccountStatement />} />
            <Route path="invoice-summary" element={<InvoiceSummary />} />
            <Route path="sales-report" element={<SalesReport />} />
            <Route path="receivables" element={<Receivables />} />
            <Route path="payables" element={<Payables />} />
            <Route path="bill-summary" element={<BillSummary />} />
            <Route path="product-stock" element={<ProductStock />} />
            <Route path="cash-flow" element={<CashFlow />} />
            <Route path="transaction" element={<Transaction />} />
            <Route path="income-summary" element={<IncomeSummary />} />
            <Route path="expense-summary" element={<ExpenseSummary />} />
            <Route path="income-vs-expense" element={<IncomeVsExpense />} />
            <Route path="tax-summary" element={<TaxSummary />} />
          </Route>
          <Route path="hrm">
            <Route path="overview" element={<Overview />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
      </Routes>
    </Router>
  );
}

export default App;
