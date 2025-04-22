import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import recharge_icon from "../../../assets/images/recharge_icon.png";
import withdraw_icon from "../../../assets/images/withdraw_icon.png";
import app_icon from "../../../assets/images/app_icon.png";
import company_profile_icon from "../../../assets/images/company_profile_icon.png";
import axios from "axios";
import Loader from "../../../component/extra/loader";
import { useState } from "react";

const HomeLinks = () => {
  const { t } = useTranslation();
  const [isLoader, setIsLoader] = useState(false);

  // Detect the user's operating system
  const getOperatingSystem = () => {
    const userAgent =
      window.navigator.userAgent || window.navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "ios";
    }

    if (/android/i.test(userAgent)) {
      return "apk";
    }

    if (navigator.platform.indexOf("Win") !== -1) {
      return "apk";
    }

    if (navigator.platform.indexOf("Mac") !== -1) {
      return "ios";
    }

    if (navigator.platform.indexOf("Linux") !== -1) {
      return "apk";
    }

    return "Unknown OS";
  };

  const downloadApp = () => {
    // Specify the file path
    const filePath = `https://usdt-uk.com/assets/usdt-uk.apk`; // Adjust the filename and extension as needed

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "usdt-uk.apk"; // Specify the default download name
    link.click();
  };

  const fetchData = async (device, domain) => {
    try {
      setIsLoader(true);

      const url = `https://GLIDEMALLmall.com/myapp/api/app/download?os=${device}&domain=${domain}`;

      // Open the new tab
      const newTab = window.open(url, "_blank");

      // Close the tab after 2 seconds
      setTimeout(() => {
        if (newTab) {
          newTab.close();
        }
      }, 2000);

      setIsLoader(false);
    } catch (error) {
      setIsLoader(false);
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div to="/recharge-method" data-v-7cad3bed="" className="tools-part">
      {isLoader ? <Loader /> : null}
      <Link
        to="/recharge-method"
        data-v-7cad3bed=""
        className="part cursor-pointer"
      >
        <div data-v-7cad3bed="" className="icon">
          <img data-v-7cad3bed="" src={recharge_icon} alt="" />
        </div>
        <div data-v-7cad3bed="" className="label">
          {t("recharge")}
        </div>
      </Link>
      {/* part cursor end */}
      <Link to="/withdraw-trx" data-v-7cad3bed="" className="part cursor-pointer">
        <div data-v-7cad3bed="" className="icon">
          <img data-v-7cad3bed="" src={withdraw_icon} alt="" />
        </div>
        <div data-v-7cad3bed="" className="label">
          {t("withdraw")}
        </div>
      </Link>
      {/* part cursor end */}
      <div
        data-v-7cad3bed=""
        className="part cursor-pointer"
        onClick={downloadApp}
      >
        <Link
          target="_blank"
          to="https://usdt-uk.com/assets/images/usdt_uk.apk"
        >
          <div data-v-7cad3bed="" className="icon">
            <img data-v-7cad3bed="" src={app_icon} alt="" />
          </div>
          <div data-v-7cad3bed="" className="label">
            {t("app")}
          </div>
        </Link>
      </div>

      {/* part cursor end */}
      <Link
        to="/company-profile"
        data-v-7cad3bed=""
        className="part cursor-pointer"
      >
        <div data-v-7cad3bed="" className="icon">
          <img data-v-7cad3bed="" src={company_profile_icon} alt="" />
        </div>
        <div data-v-7cad3bed="" className="label">
          {t("company_profile")}
        </div>
      </Link>
      {/* part cursor end */}
    </div>
  );
};

export default HomeLinks;
