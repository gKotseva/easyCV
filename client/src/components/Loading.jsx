import "./Loading.modules.css";

import { PiReadCvLogoLight } from "react-icons/pi";

export const Loading = () => {
  return (
    <div className="loading-container">
      <PiReadCvLogoLight className="spinner" />
    </div>
  );
};
