import React, { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const usePasswordToggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const Icon = (
    <div
      className="passwordIcon"
      onClick={() => setIsVisible((isVisible) => !isVisible)}
    >
      {isVisible ? (
        <VisibilityIcon fontSize="medium" />
      ) : (
        <VisibilityOffIcon fontSize="medium" />
      )}
    </div>
  );

  const InputType = isVisible ? "text" : "password";

  return [InputType, Icon];
};

export default usePasswordToggle;
