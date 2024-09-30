"use client";
import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { PickerContainer, ClearButton } from "./styles";

export default function DateRange() {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection",
        },
    ]);

    return (
        <PickerContainer>
            <DateRangePicker
                onChange={(item) => setState([item.selection])}
                showSelectionPreview={false}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={state}
                direction="horizontal"
                rangeColors={["#000"]}
                showMonthAndYearPickers={false}
                weekdayDisplayFormat="EEE"
                monthDisplayFormat="MMMM yyyy"
            />
            <ClearButton
                onClick={() =>
                    setState([
                        {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 0),
                            key: "selection",
                        },
                    ])
                }
            >
                Clear dates
            </ClearButton>
        </PickerContainer>
    );
}
