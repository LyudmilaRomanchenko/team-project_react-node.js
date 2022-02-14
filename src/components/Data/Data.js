// import * as React from "react";
// import Stack from "@mui/material/Stack";
// import TextField from "@mui/material/TextField";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import TimePicker from "@mui/lab/TimePicker";
// import DateTimePicker from "@mui/lab/DateTimePicker";
// import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
// import MobileDatePicker from "@mui/lab/MobileDatePicker";

// export default function Data() {
//   const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

//   const handleChange = (newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <Stack spacing={3}>
//         <DesktopDatePicker
//           label="Date desktop"
//           inputFormat="MM/dd/yyyy"
//           value={value}
//           onChange={handleChange}
//           renderInput={(params) => <TextField {...params} />}
//         />
//         <MobileDatePicker
//           label="Date mobile"
//           inputFormat="MM/dd/yyyy"
//           value={value}
//           onChange={handleChange}
//           renderInput={(params) => <TextField {...params} />}
//         />
//         <TimePicker
//           label="Time"
//           value={value}
//           onChange={handleChange}
//           renderInput={(params) => <TextField {...params} />}
//         />
//         <DateTimePicker
//           label="Date&Time picker"
//           value={value}
//           onChange={handleChange}
//           renderInput={(params) => <TextField {...params} />}
//         />
//       </Stack>
//     </LocalizationProvider>
//   );
// }

//////////////////////

import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function Data() {
  //   let now = new Date();
  return (
    // <Stack component="form" noValidate spacing={3}>
    <TextField
      name="data"
      id="date"
      label=""
      type="date"
      defaultValue="{new Date()}"
      defaultCalendarMonth
      sx={{
        width: 190,
        border: "none",
      }}
      InputLabelProps={{
        shrink: true,
        // variant: "outlined",
      }}
    />

    // </Stack>
  );
}
