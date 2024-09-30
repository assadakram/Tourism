import { useState } from "react";
import { MonthsGrid, MonthCell } from "./styles.js";

const MonthPicker = () => {
  const [selectedMonth, setSelectedMonth] = useState();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <MonthsGrid>
      {months.map((month, index) => (
        <MonthCell
          key={month}
          isSelected={selectedMonth === index}
          onClick={() => setSelectedMonth(index)}
        >
          {month}
        </MonthCell>
      ))}
    </MonthsGrid>
  );
};

export default MonthPicker;
