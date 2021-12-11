import { TextField } from "@material-ui/core";
import React, { ChangeEvent, FC } from "react";

interface Product {
  id: string;
  type: string;
  name: string;
  label: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const GeneralInput: FC<Product> = (props) => {
  return (
    <div>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id={props.id}
        label={props.label}
        name={props.name}
        type={props.type}
        autoFocus
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default GeneralInput;
