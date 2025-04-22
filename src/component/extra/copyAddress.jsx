import React, { useState } from "react";

// css import
import "../../assets/css/style.css";

const copyAddress = ({ address, handleCopyClick }) => {
  const inviteLink = address;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(inviteLink)
      .then(() => {
        setAlertMessage("Copied Successfully");
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 2000); // Hide alert after 2 seconds
      })
      .catch((err) => {
        setAlertMessage("Failed to copy");
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 2000);
        console.error("Failed to copy: ", err);
      });
    handleCopyClick();
  };

  return (
    <div data-v-e0ca97fe="" className="copy-address base-input">
      <span
        id="tokenAddress"
        data-v-e0ca97fe=""
        className=":uno: text-13px c-$btn-text"
      >
        {inviteLink}
      </span>
      <div data-v-e0ca97fe="" className="cp btn" style={{ color: "#fff" }}>
        <span data-v-e0ca97fe="" onClick={copyToClipboard}>
          Copy
        </span>
      </div>
    </div>
  );
};

export default copyAddress;
