export const data = {
  Branch: {
    title: "Manage Branch",
    columns: [{ label: "BRANCH", field: "name" }],
    data: [
      { name: "China" },
      { name: "India" },
      { name: "Canada" },
      { name: "Greece" },
      { name: "Italy" },
    ],
  },
  Department: {
    title: "Manage Department",
    columns: [
      { label: "BRANCH", field: "name" },
      { label: "Department", field: "department" },
    ],
    data: [
      { name: "China", department: "Financials" },
      { name: "India", department: "Telecommunications" },
      { name: "Canada", department: "Industrials" },
      { name: "Greece", department: "Health care" },
      { name: "Italy", department: "Technology" },
    ],
  },
  Designation: {
    title: "Manage Designation",
    columns: [
      { label: "BRANCH", field: "name" },
      { label: "Department", field: "department" },
      { label: "Designation", field: "designation" },
    ],
    data: [
      { name: "China", department: "Financials", designation: "Chartered" },
      { name: "India", department: "Telecommunications", designation: "Charetered" },
      { name: "Canada", department: "Industrials", designation: "Charetered" },
      { name: "Greece", department: "Health care", designation: "Charetered" },
      { name: "Italy", department: "Technology", designation: "Charetered" },
    ],
  },
  LeaveType: {
    title: "Leave Type",
    columns: [
      { label: "LEAVE TYPE", field: "leaveType" },
      { label: "DAYS / YEAR", field: "daysPerYear" },
    ],
    data: [
      { leaveType: "Annual Leave", daysPerYear: 20 },
      { leaveType: "Sick Leave", daysPerYear: 10 },
      { leaveType: "Maternity Leave", daysPerYear: 90 },
      { leaveType: "Paternity Leave", daysPerYear: 10 },
      { leaveType: "Public Holiday Leave", daysPerYear: 15 },
    ],
  },

  DocumentType: {
    title: "Document Type",
    columns: [
      { label: "DOCUMENT", field: "documentType" },
      { label: "REQUIRED FIELD", field: "requiredField" },
    ],
    data: [
      { documentType: "Passport", requiredField: "Required" },
      { documentType: "Driver's License", requiredField: "Required" },
      { documentType: "Birth Certificate", requiredField: "Not Required" },
      { documentType: "Utility Bill", requiredField: "Not Required" },
      { documentType: "Bank Statement", requiredField: "Required" },
    ],
  },

  PaySlipType: {
    title: "Payslip Type",
    columns: [{ label: "Payslip Type", field: "payslipType" }],
    data: [
      { payslipType: "Monthly" },
      { payslipType: "Bi-weekly" },
      { payslipType: "Weekly" },
      { payslipType: "Daily" },
      { payslipType: "Contractual" },
    ],
  },

  AllowanceOption: {
    title: "Allowance Option",
    columns: [{ label: "ALLOWANCE OPTION", field: "allowanceOption" }],
    data: [
      { allowanceOption: "Housing Allowance" },
      { allowanceOption: "Transportation Allowance" },
      { allowanceOption: "Meal Allowance" },
      { allowanceOption: "Health Allowance" },
      { allowanceOption: "Education Allowance" },
    ],
  },

  LoanOption: {
    title: "Loan Option",
    columns: [{ label: "LOAN OPTION", field: "loanOption" }],
    data: [
      { loanOption: "Home Loan" },
      { loanOption: "Car Loan" },
      { loanOption: "Personal Loan" },
      { loanOption: "Education Loan" },
      { loanOption: "Business Loan" },
    ],
  },

  DeductionOption: {
    title: "Deduction Option",
    columns: [{ label: "DEDUCTION OPTION", field: "deductionOption" }],
    data: [
      { deductionOption: "Tax Deduction" },
      { deductionOption: "Insurance Deduction" },
      { deductionOption: "Loan Repayment Deduction" },
      { deductionOption: "Retirement Fund Deduction" },
      { deductionOption: "Union Fees Deduction" },
    ],
  },

  GoalType: {
    title: "Goal Type",
    columns: [{ label: "GOAL TYPE", field: "goalType" }],
    data: [
      { goalType: "Sales Target" },
      { goalType: "Customer Satisfaction" },
      { goalType: "Productivity Improvement" },
      { goalType: "Quality Assurance" },
      { goalType: "Innovation" },
    ],
  },

  TrainingType: {
    title: "Training Type",
    columns: [{ label: "Training Type", field: "trainingType" }],
    data: [
      { trainingType: "Leadership Training" },
      { trainingType: "Technical Training" },
      { trainingType: "Soft Skills Training" },
      { trainingType: "Compliance Training" },
      { trainingType: "Sales Training" },
    ],
  },

  AwardType: {
    title: "Award Type",
    columns: [{ label: "Award Type", field: "awardType" }],
    data: [
      { awardType: "Employee of the Month" },
      { awardType: "Best Innovator" },
      { awardType: "Top Salesperson" },
      { awardType: "Excellence in Service" },
      { awardType: "Best Team Player" },
    ],
  },

  TerminationType: {
    title: "Termination Type",
    columns: [{ label: "Termination Type", field: "terminationType" }],
    data: [
      { terminationType: "Voluntary Resignation" },
      { terminationType: "Retirement" },
      { terminationType: "Layoff" },
      { terminationType: "Dismissal" },
      { terminationType: "End of Contract" },
    ],
  },

  JobCategory: {
    title: "Job Category",
    columns: [{ label: "Category", field: "category" }],
    data: [
      { category: "Management" },
      { category: "Engineering" },
      { category: "Human Resources" },
      { category: "Finance" },
      { category: "Marketing" },
    ],
  },

  JobStage: {
    title: "Job Stage",
    columns: [
      { label: "BRANCH", field: "branch" },
      { label: "Department", field: "department" },
      { label: "Designation", field: "designation" },
    ],
    data: [
      { branch: "Beijing", department: "Financials", designation: "Chartered" },
      { branch: "Mumbai", department: "Telecommunications", designation: "Chartered" },
      { branch: "Toronto", department: "Industrials", designation: "Chartered" },
      { branch: "Athens", department: "Health care", designation: "Chartered" },
      { branch: "Rome", department: "Technology", designation: "Chartered" },
    ],
  },

  PerformanceType: {
    title: "Performance Type",
    columns: [{ label: "Name", field: "performanceType" }],
    data: [
      { performanceType: "Sales Performance" },
      { performanceType: "Customer Service" },
      { performanceType: "Productivity" },
      { performanceType: "Quality of Work" },
      { performanceType: "Team Collaboration" },
    ],
  },

  Competencies: {
    title: "Competencies",
    columns: [
      { label: "NAME", field: "competencyName" },
      { label: "TYPE", field: "competencyType" },
    ],
    data: [
      { competencyName: "Analytical Thinking", competencyType: "Cognitive" },
      { competencyName: "Communication", competencyType: "Interpersonal" },
      { competencyName: "Project Management", competencyType: "Organizational" },
      { competencyName: "Leadership", competencyType: "Management" },
      { competencyName: "Technical Expertise", competencyType: "Technical" },
    ],
  },
};
