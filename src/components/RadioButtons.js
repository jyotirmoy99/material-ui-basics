import React, { useState } from "react";
import { Radio } from "@material-ui/core/";

function RadioButtons() {
  const [gender, setGender] = useState("");

  const handleGender = (e) => {
    setGender(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <h3>Radio Buttons</h3>
      <div>
        <Radio
          color="primary"
          value="male"
          checked={gender === "male"}
          onChange={handleGender}
        />
        <span>Male</span>
      </div>
      <div>
        <Radio
          color="primary"
          value="female"
          checked={gender === "female"}
          onChange={handleGender}
        />
        <span>Female</span>
      </div>
      <div>
        <Radio
          color="secondary"
          value="other"
          checked={gender === "other"}
          onChange={handleGender}
        />
        <span>Other</span>
      </div>
    </div>
  );
}

export default RadioButtons;
