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
import CRMLeads from "./pages/CRMSystem/Leads/Leads";
import KanbanBoard from "./Components/Kanban/KanbanBoard";
import SetSalary from "./pages/HrmSystem/PayrollSetup/SetSalary/SetSalary";
import PaySlip from "./pages/HrmSystem/PayrollSetup/PaySlip/PaySlip";
import ManageLeave from "./pages/HrmSystem/LeaveManagement/ManageLeave/ManageLeave";
import BulkAttendance from "./pages/HrmSystem/LeaveManagement/Attendance/BulkAttendance/BulkAttendance";
import MarkAttendance from "./pages/HrmSystem/LeaveManagement/Attendance/MarkAttendance/MarkAttendance";
import BiometricAttendance from "./pages/HrmSystem/LeaveManagement/BiometricAttendance/BiometricAttendance";
import Indicator from "./pages/HrmSystem/PerformanceSetup/Indicator/Indicator";
import Appraisal from "./pages/HrmSystem/PerformanceSetup/Appraisal/Appraisal";
import GoalTracking from "./pages/HrmSystem/PerformanceSetup/GoalTracking/GoalTracking";
import TrainingList from "./pages/HrmSystem/TrainingSetup/TrainingList/TrainingList";
import Trainer from "./pages/HrmSystem/TrainingSetup/Trainer/Trainer";
import Jobs from "./pages/HrmSystem/RecruitmentSetup/Jobs/Jobs";
import JobOnBoarding from "./pages/HrmSystem/RecruitmentSetup/JobOnBoarding/JobOnBoarding";
import JobCreate from "./pages/HrmSystem/RecruitmentSetup/JobCreate/JobCreate";
import JobCandidate from "./pages/HrmSystem/RecruitmentSetup/JobCandidate/JobCandidate";
import JobApplication from "./pages/HrmSystem/RecruitmentSetup/JobApplication/JobApplication";
import InterviewSchedule from "./pages/HrmSystem/RecruitmentSetup/InterviewSchedule/InterviewSchedule";
import Career from "./pages/HrmSystem/RecruitmentSetup/Career/Career";
import CustomQuestion from "./pages/HrmSystem/RecruitmentSetup/CustomQuestion/CustomQuestion";
import Announcement from "./pages/HrmSystem/HRAdminSetup/Announcement/Announcement";
import Award from "./pages/HrmSystem/HRAdminSetup/Award/Award";
import Complaints from "./pages/HrmSystem/HRAdminSetup/Complaints/Complaints";
import Holidays from "./pages/HrmSystem/HRAdminSetup/Holidays/Holidays";
import Promotion from "./pages/HrmSystem/HRAdminSetup/Promotion/Promotion";
import Resignation from "./pages/HrmSystem/HRAdminSetup/Resignation/Resignation";
import Termination from "./pages/HrmSystem/HRAdminSetup/Termination/Termination";
import Transfer from "./pages/HrmSystem/HRAdminSetup/Transfer/Transfer";
import Trip from "./pages/HrmSystem/HRAdminSetup/Trip/Trip";
import Warning from "./pages/HrmSystem/HRAdminSetup/Warning/Warning";
import EventSetup from "./pages/HrmSystem/EventSetup/EventSetup";
import Meeting from "./pages/HrmSystem/Meeting/Meeting";
import EmployeeAssetSetup from "./pages/HrmSystem/EmployeeAssetSetup/EmployeeAssetSetup";
import DocumentSetup from "./pages/HrmSystem/DocumentSetup/DocumentSetup";
import CompanyPolicy from "./pages/HrmSystem/CompanyPolicy/CompanyPolicy";
import HRMSystemSetUp from "./pages/HrmSystem/HRMSystemSetUp/HRMSystemSetUp";
import AccountingSetup from "./pages/AccountingSystem/AccountingSetup/AccountingSetup";
import FinancialGoal from "./pages/AccountingSystem/FinancialGoal/FinancialGoal";
import BudgetPlanner from "./pages/AccountingSystem/BudgetPlanner/BudgetPlanner";
import Account from "./pages/AccountingSystem/Banking/Account/Account";
import AccountTransfer from "./pages/AccountingSystem/Banking/Transfer/Transfer";
import PrintSettings from "./pages/AccountingSystem/PrintSettings/PrintSettings";
import Customer from "./pages/AccountingSystem/Sales/Customer/Customer";
import Estimate from "./pages/AccountingSystem/Sales/Estimate/Estimate";
import Invoice from "./pages/AccountingSystem/Sales/Invoice/Invoice";
import Revenue from "./pages/AccountingSystem/Sales/Revenue/Revenue";
import CreditNote from "./pages/AccountingSystem/Sales/CreditNote/CreditNote";
import Bill from "./pages/AccountingSystem/Purchases/Bill/Bill";
import Supplier from "./pages/AccountingSystem/Purchases/Supplier/Supplier";
import Expense from "./pages/AccountingSystem/Purchases/Expense/Expense";
import Payment from "./pages/AccountingSystem/Purchases/Payment/Payment";
import DebitNote from "./pages/AccountingSystem/Purchases/DebitNote/DebitNote";
import BalanceSheet from "./pages/AccountingSystem/DoubleEntry/BalanceSheet/BalanceSheet";
import ChartofAccounts from "./pages/AccountingSystem/DoubleEntry/ChartofAccounts/ChartofAccounts";
import JournalAccount from "./pages/AccountingSystem/DoubleEntry/JournalAccount/JournalAccount";
import LedgerSummary from "./pages/AccountingSystem/DoubleEntry/LedgerSummary/LedgerSummary";
import ProfitAndLoss from "./pages/AccountingSystem/DoubleEntry/ProfitAndLoss/ProfitAndLoss";
import TrialBalance from "./pages/AccountingSystem/DoubleEntry/TrialBalance/TrialBalance";
import CRMDeals from "./pages/CRMSystem/Deals/Deals";
import FormBuilder from "./pages/CRMSystem/FormBuilder/FormBuilder";
import Contract from "./pages/CRMSystem/Contract/Contract";
import CRMSystemSetUp from "./pages/CRMSystem/CRMSystemSetUp/CRMSystemSetUp";
import Projects from "./pages/ProjectSystem/Projects/Projects";
import Bug from "./pages/ProjectSystem/Bug/Bug";
import ProjectReport from "./pages/ProjectSystem/ProjectReport/ProjectReport";
import PSProjects from "./pages/ProjectSystem/Projects/Projects";
import BugStages from "./pages/ProjectSystem/ProjectSystemSetup/BugStages/BugStages";
import ProjectTaskStages from "./pages/ProjectSystem/ProjectSystemSetup/ProjectTaskStages/ProjectTaskStages";
import TaskCalender from "./pages/ProjectSystem/TaskCalender/TaskCalender";
import Tasks from "./pages/ProjectSystem/Tasks/Tasks";
import Timesheet from "./pages/ProjectSystem/Timesheet/Timesheet";
import Tracker from "./pages/ProjectSystem/Tracker/Tracker";
import Warehouse from "./pages/POSSystem/Warehouse/Warehouse";
import Purchase from "./pages/POSSystem/Purchase/Purchase";
import Quotation from "./pages/POSSystem/Quotation/Quotation";
import AddPOS from "./pages/POSSystem/addPOS/AddPOS";
import POSTransfer from "./pages/POSSystem/Transfer/Transfer";
import PrintBarCode from "./pages/POSSystem/PrintBarCode/PrintBarCode";
import PrintSettings2 from "./pages/POSSystem/PrintSettings/PrintSettings2";

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
          <Route path="payroll-setup">
            <Route path="set-salary" element={<SetSalary />} />
            <Route path="payslip" element={<PaySlip />} />
          </Route>
          <Route path="leave-management-setup">
            <Route path="manage-leave" element={<ManageLeave />} />
            <Route path="attendance">
              <Route path="mark-attendance" element={<MarkAttendance />} />
              <Route path="bulk-attendance" element={<BulkAttendance />} />
            </Route>
            <Route path="biometric-attendance" element={<BiometricAttendance />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="performance-setup">
            <Route path="indicator" element={<Indicator />} />
            <Route path="appraisal" element={<Appraisal />} />
            <Route path="goal-tracking" element={<GoalTracking />} />
          </Route>
          <Route path="training-setup">
            <Route path="training-list" element={<TrainingList />} />
            <Route path="trainer" element={<Trainer />} />
          </Route>
          <Route path="recruitment-setup">
            <Route path="jobs" element={<Jobs />} />
            <Route path="jobs-create" element={<JobCreate />} />
            <Route path="job-application" element={<JobApplication />} />
            <Route path="job-candidate" element={<JobCandidate />} />
            <Route path="job-on-boarding" element={<JobOnBoarding />} />
            <Route path="custom-question" element={<CustomQuestion />} />
            <Route path="interview-schedule" element={<InterviewSchedule />} />
            <Route path="career" element={<Career />} />
          </Route>
          <Route path="hr-admin-setup">
            <Route path="award" element={<Award />} />
            <Route path="transfer-" element={<Transfer />} />
            <Route path="resignation" element={<Resignation />} />
            <Route path="trip" element={<Trip />} />
            <Route path="promotion" element={<Promotion />} />
            <Route path="complaints" element={<Complaints />} />
            <Route path="warning" element={<Warning />} />
            <Route path="termination" element={<Termination />} />
            <Route path="announcement" element={<Announcement />} />
            <Route path="holidays" element={<Holidays />} />
          </Route>
          <Route path="event-setup" element={<EventSetup />} />
          <Route path="meeting" element={<Meeting />} />
          <Route path="employees-asset-setup" element={<EmployeeAssetSetup />} />
          <Route path="document-setup" element={<DocumentSetup />} />
          <Route path="company-policy" element={<CompanyPolicy />} />
          <Route path="hrm-system-setup" element={<HRMSystemSetUp />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="accounting-system" element={<Layout />}>
          <Route path="banking">
            <Route path="account" element={<Account />} />
            <Route path="transfer" element={<AccountTransfer />} />
          </Route>
          <Route path="sales">
            <Route path="customer" element={<Customer />} />
            <Route path="estimate" element={<Estimate />} />
            <Route path="invoice" element={<Invoice />} />
            <Route path="revenue" element={<Revenue />} />
            <Route path="credit-note" element={<CreditNote />} />
          </Route>
          <Route path="purchases">
            <Route path="supplier" element={<Supplier />} />
            <Route path="bill" element={<Bill />} />
            <Route path="expense" element={<Expense />} />
            <Route path="payment" element={<Payment />} />
            <Route path="debit-note" element={<DebitNote />} />
          </Route>
          <Route path="double-entry">
            <Route path="chart-of-account" element={<ChartofAccounts />} />
            <Route path="journal-account" element={<JournalAccount />} />
            <Route path="ledger-summary" element={<LedgerSummary />} />
            <Route path="balance-sheet" element={<BalanceSheet />} />
            <Route path="profit-loss" element={<ProfitAndLoss />} />
            <Route path="trial-balance" element={<TrialBalance />} />
          </Route>
          <Route path="budget-planner" element={<BudgetPlanner />} />
          <Route path="financial-goal" element={<FinancialGoal />} />
          <Route path="accounting-setup" element={<AccountingSetup />} />
          <Route path="print-settings" element={<PrintSettings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="crm-system" e  lement={<Layout />}>
          {/* <Route path="leads" element={<CRMLeads />} /> */}
          <Route path="leads" element={<KanbanBoard />} />
          <Route path="deals" element={<CRMDeals />} />
          <Route path="form-builder" element={<FormBuilder />} />
          <Route path="contract" element={<Contract />} />
          <Route path="crm-system-setup" element={<CRMSystemSetUp />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="project-system" element={<Layout />}>
          <Route path="projects" element={<PSProjects />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="timesheet" element={<Timesheet />} />
          <Route path="bug" element={<Bug />} />
          <Route path="task-calendar" element={<TaskCalender />} />
          <Route path="tracker" element={<Tracker />} />
          <Route path="project-report" element={<ProjectReport />} />
          <Route path="project-setup">
            <Route path="project-task-stages" element={<ProjectTaskStages />} />
            <Route path="bug-status" element={<BugStages />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="pos-system" element={<Layout />}>
          <Route path="warehouse" element={<Warehouse />} />
          <Route path="purchase" element={<Purchase />} />
          <Route path="quotation" element={<Quotation />} />
          <Route path="add-pos" element={<AddPOS />} />
          {/* <Route path="pos" element={<POS2 />} /> */}
          <Route path="transfer" element={<POSTransfer />} />
          <Route path="print-barcode" element={<PrintBarCode />} />
          <Route path="print-settings" element={<PrintSettings2 />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
