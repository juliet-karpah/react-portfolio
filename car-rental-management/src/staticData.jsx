

export const formContent = [
  {
    label: "Name",
    type: "text",
  },
  {
    label: "Model",
    type: "text",
  },
  {
    label: "Price",
    type: "number",
  },
];

export const tableTitleCars = [
  {
    title: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
        <path
          fillRule="evenodd"
          d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  { title: "Name" },
  { title: "Capacity", key: "maxCapacity" },
  { title: "Type" },
  { title: "Model" },
  { title: "Rate", key: "price" },
  { title: "Availability" },
  { title: "" },
];

export const tableTitleRenter = [
  { title: "Name" },
  { title: "Phone" },
  { title: "Email" },
  { title: "Customer since" },
  { title: "" },
];



export const reservationTableTitle = [
  { title: "" },
  {
    title: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  { title: "Renter" },
  { title: "Car" },
  { title: "STATUS" },
  { title: "Duration(hr)" },
  { title: "amount" },

];