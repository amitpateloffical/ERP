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
import Overview from "./pages/Dashboard/HRM/Overview/Overview";
import Payroll from "./pages/Dashboard/HRM/Reports/Payroll/Payroll";
import Leave from "./pages/Dashboard/HRM/Reports/Leave/Leave";
import MonthlyAttendance from "./pages/Dashboard/HRM/Reports/MonthlyAttendance/MonthlyAttendance";
import CrmOverview from "./pages/Dashboard/CRM/Overview/CrmOverview";
import Leads from "./pages/Dashboard/CRM/Reports/Leads/Leads";
import Deals from "./pages/Dashboard/CRM/Reports/Deals/Deals";
import Project from "./pages/Dashboard/Project/Project";
import POSOverview from "./pages/Dashboard/POS/Overview/POSOverview";
import WareHouseReport from "./pages/Dashboard/POS/Reports/WareHouseReport/WareHouseReport";
import PosVsPurchaseReport from "./pages/Dashboard/POS/Reports/PosVsPurchaseReport/PosVsPurchaseReport";
import PurchaseReport from "./pages/Dashboard/POS/Reports/PurchaseReport/PurchaseReport";
import PosReport from "./pages/Dashboard/POS/Reports/PosReport/PosReport";
import EmployeeSetUp from "./pages/HrmSystem/EmployeeSetUp/EmployeeSetUp";

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
            <Route path="reports">
              <Route path="payroll" element={<Payroll />} />
              <Route path="leave" element={<Leave />} />
              <Route path="monthly-attendance" element={<MonthlyAttendance />} />
            </Route>
          </Route>
          <Route path="crm">
            <Route path="overview" element={<CrmOverview />} />
            <Route path="reports">
              <Route path="lead" element={<Leads />} />
              <Route path="deal" element={<Deals />} />
            </Route>
          </Route>
          <Route path="project" element={<Project />} />
          <Route path="pos">
            <Route path="overview" element={<POSOverview />} />
            <Route path="reports">
              <Route path="warehouse-report" element={<WareHouseReport />} />
              <Route path="purchase-daily-monthly-report" element={<PurchaseReport />} />
              <Route path="pos-daily-monthly-report" element={<PosReport />} />
              <Route path="pos-vs-purchase-report" element={<PosVsPurchaseReport />} />
            </Route>
          </Route>
        </Route>
        <Route path="/hrm-system" element={<Layout />}>
          <Route path="employee-setup" element={<EmployeeSetUp />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
