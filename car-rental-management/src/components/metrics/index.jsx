import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { H2 } from "../ui/H2";
import { H3 } from "../ui/H3";
import { StyledCol, StyledDiv, StyledRow } from "../ui/StyledDiv";
import { SVG } from "../ui/Svg";
import styled from "styled-components";

const BarChartEL = styled(BarChart)`
  & svg {
    width: 100%;
    height: 100%;
  }
`;

export default function Metrics() {
  const data = [
    {
      name: "January",
      revenue: 4000,
      reservations: 20,
    },
    {
      name: "Feb",
      revenue: 3000,
      reservations: 30,
    },
    {
      name: "March",
      revenue: 2000,
      reservations: 10,
    },
    {
      name: "April",
      revenue: 2780,
      reservations: 13,
    },
    {
      name: "June",
      revenue: 1890,
      reservations: 10,
    },
    {
      name: "July",
      revenue: 2390,
      reservations: 15,
    },
    {
      name: "August",
      revenue: 3490,
      reservations: 20,
    },
  ];
  const infoList = [
    {
      title: "Total revenue",
      value: "$4000",
      icon: (
        <SVG
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </SVG>
      ),
    },
    {
      title: "Total reservations",
      value: "5",
      icon: (
        <SVG
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z"
            clipRule="evenodd"
          />
        </SVG>
      ),
    },
    {
      title: "Available cars",
      value: "8",
      icon: (
        <SVG
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
          <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
          <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
        </SVG>
      ),
    },
    {
      title: "Customer satisfaction",
      value: "90%",
      icon: (
        <SVG
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </SVG>
      ),
    },
  ];
  return (
    <StyledDiv>
      <H2> Dashboard </H2>
      <StyledRow dashboard>
        {infoList.map((info, i) => (
          <StyledCol key={i} variation="dashboard">
            <H3> {info.title}</H3>
            <StyledRow>
              {" "}
              {info.value} {info.icon}
            </StyledRow>
          </StyledCol>
        ))}
      </StyledRow>
      <StyledRow charts>
        <BarChartEL width={500} height={400} data={data}>
          <text
            x={500 / 2}
            y={20}
            fill="black"
            textAnchor="middle"
            dominantBaseline="central"
          >
            <tspan fontSize="14">Total Revenue</tspan>
          </text>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar barSize={30} dataKey="revenue" fill="#028f76" />
        </BarChartEL>
        <BarChartEL
          title="Total Reservations"
          width={500}
          height={400}
          data={data}
        >
                  <text x={500 / 2} y={20} fill="black" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="14">Total Reservations</tspan>
        </text>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#d14334" }} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar barSize={30} dataKey="reservations" fill="#d14334" />
        </BarChartEL>
      </StyledRow>
    </StyledDiv>
  );
}
