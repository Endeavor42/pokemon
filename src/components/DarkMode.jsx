import React from "react";
import { Switch, FormControlLabel } from "@material-ui/core";

export default function DarkMode() {
  return (
    <div>
      <FormControlLabel
        value="end"
        control={<Switch color="primary" />}
        label="Light"
        labelPlacement="end"
      />
    </div>
  );
}
