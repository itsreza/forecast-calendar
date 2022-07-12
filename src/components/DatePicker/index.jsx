import React from 'react'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '../TextField'; 
// import TextField from '@mui/material/TextField';
import DateLocalization from '../DateLocalization';
export default function DatePicker({label = "Pick Event Date" , onChange , value}) {
  return (
    <DateLocalization>
     <DesktopDatePicker
          label={label}
          inputFormat="MM/DD/yyyy"
          value={value}
          onChange={onChange}
          renderInput={(params) => <TextField {...params} />}
        />
    </DateLocalization>
  )
}
