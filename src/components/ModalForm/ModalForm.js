import s from "./ModalForm.module.css";
// import InputUnstyled from "@mui/base/InputUnstyled";
// import Select from "./Select";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "../Button";
import Data from "../Data";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

export default function ModalForm({ children }) {
  var D = new Date();
  const [coment, setComent] = useState("");
  // const [data, setData] = useState(new Date());
  const [data, setData] = useState(
    `${D.getFullYear()}-0${D.getMonth() + 1}-${D.getDate()}`
  );
  // const [value, setValue] = React.useState(new Date());

  console.log(new Date());
  console.log(data);
  const handleChange = (e) => {
    if (e.currentTarget.name === "coment") {
      setComent(e.currentTarget.value);
    }

    if (e.currentTarget.name === "data") {
      setData(e.currentTarget.value);
    }
  };
  return (
    <div className={s.container}>
      {/* <SelectUnstyled components={{ Root, Thumb, Input }} /> */}
      <select className={s.select}>
        <option value="" disabled selected>
          Выберите категорию
        </option>
        <option value="hurr">Регулярный доход</option>
        <option value="hurr">Нерегулярный доход</option>
      </select>

      <div className={s.inputContainer}>
        <label>
          <input className={s.inputSum} placeholder="0.00"></input>
        </label>
        <TextField
          name="data"
          value={data}
          onChange={handleChange}
          id="date"
          label=""
          type="date"
          // defaultValue="2017-05-24"
          // defaultCalendarMonth
          variant="standard"
          sx={{
            width: 190,
            // height: 34,
            // paddingTop: 5,
            bgcolor: "#FFFFFF",
            // color: "red",
            // border: "3px solid red",
            // outline: "1px solid green",
          }}
          InputLabelProps={{
            shrink: true,
            // variant: "outlined",
          }}
        />
      </div>

      <label>
        <input
          className={s.inputComent}
          placeholder="Комментарий"
          type="tel"
          name="coment"
          value={coment}
          onChange={handleChange}
        ></input>
      </label>

      {/* <Button title={"Добавить"} className={s.buttonAdd} />
      <Button title={"Отмена"} className={s.buttonCancel} /> */}
      <div className={s.buttonContainer}>
        <Button title={"Добавить"} type={true} />
        <Button title={"Отмена"} type={false} />
      </div>

      {/* <InputUnstyled></InputUnstyled> */}
    </div>
  );
}
