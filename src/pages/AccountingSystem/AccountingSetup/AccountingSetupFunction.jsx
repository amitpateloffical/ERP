export const data = {
  Taxes: {
    title: "Manage Tax Rate",
    columns: [
      { label: "TAX", field: "tax" },
      { label: "RATE %", field: "ratePer" },
      //   { label: "TAX NAME	RATE %	ACTION", field: "name" },
    ],
    data: [
      { tax: "CGST", ratePer: "25%" },
      { tax: "SGST", ratePer: "25%" },
    ],
  },
  Category: {
    title: "Manage Product-Service & Income-Expense Category",
    columns: [
      { label: "CATEGORY", field: "category" },
      { label: "TYPE", field: "type" },
      { label: "ACCOUNT", field: "account" },
    ],
    data: [
      { category: "Electronics", type: "Product", account: "Sales" },
      { category: "Software", type: "Service", account: "Revenue" },
      { category: "Consulting", type: "Service", account: "Income" },
      { category: "Manufacturing", type: "Product", account: "Expenses" },
      { category: "Marketing", type: "Service", account: "Expenditure" },
    ],
  },
  Unit: {
    title: "Manage Product & Service Unit",
    columns: [{ label: "UNIT", field: "Unit" }],
    data: [
      { Unit: "Inch" },
      { Unit: "Meter" },
      { Unit: "Piece" },
      { Unit: "Set" },
      { Unit: "Mass" },
      { Unit: "KG" },
    ],
  },
  CustomField: {
    title: "Manage Custom Field",
    columns: [
      { label: "CUSTOM FIELD		", field: "customField" },
      { label: "TYPE", field: "type" },
      { label: "MODULE", field: "module" },
    ],
    data: [
      { customField: "Alternate Mobile Number	", type: "text", module: "customer" },
      { customField: "Date Of Birth	", type: "date", module: "user" },
    ],
  }
};
