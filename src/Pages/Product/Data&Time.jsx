import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import {DatePicker, PickersDay} from "@mui/x-date-pickers";



export default function MaterialUIPickers() {
    const [value, setValue] = useState(new Date('2022-02-24'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
        if (!value) {
            return <PickersDay {...pickersDayProps} />;
        }
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>

                <DatePicker

                    inputFormat="yyyy/MM/dd/"
                    renderDay={renderWeekPickerDay}
                    value={value}
                    onChange={handleChange}
                    className="hasDatepicker"
                    renderInput={(params) => (
                        <TextField {...params} helperText={params?.inputProps?.placeholder} />
                    )}
                    />
        </LocalizationProvider>
    );
}
/*
sx={{
    borderRadius: "8px",
        maxWidth: "160px",
        border: "solid 1px #ecf0f1",
        fontSize: "14px",
        padding: "15px 17px 15px 52px",
        color: "#2f3337",
        marginBottom: "0"
}}*/
