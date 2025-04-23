import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/style.css";
import "../assets/css/style2.css";
import "../assets/css/style3.css";
import "../assets/css/style4.css";
import "../assets/css/style5.css";
import "../assets/css/style6.css";
import "../assets/css/style7.css";
import "../assets/css/style8.css";
import "../assets/css/style9.css";
import "../assets/css/style10.css";
import "../assets/css/style11.css";
import { Link, useNavigate } from "react-router-dom";
import depositeMe from "../assets/images/deposit_me.png";
import withdrawMe from "../assets/images/withdraw-me.png";

//component
import Navbar from "./partial/navbar";
import HeaderMain from "./extra/headerMain";
import { useTranslation } from "react-i18next";
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/1x/logoNew.png";
import axios from "axios";
import Header from "./extra/Header";
import SupportLink from "./extra/supportLink";
import LanguagePopUp from "./extra/LanguagePopUp";
import TelegramPopUp from "./extra/TelegramPopUp";

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
    withdraw_balance: "0.00",
    amount: "0.00",
    vip: "0",
  });

  const handleLogoutClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/me");

        setData(response.data);
      } catch (error) {
        // Handle any errors
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formatEmailOrPhone = (value) => {
    if (!value) return "";

    // Check if the value is an email and contains '@gmail.com'
    if (value.includes("@gmail.com")) {
      const [localPart] = value.split("@");
      if (localPart.length <= 5) return value; // Return the whole email if it's too short to mask middle part

      const firstTwo = localPart.slice(0, 2);
      const middleThree = localPart.slice(2, -2).replace(/./g, "*"); // Replace middle values with stars
      const lastTwo = localPart.slice(-2);
      return `${firstTwo}${middleThree}@gmail.com`;
    }

    // Otherwise, process as a phone number or other email
    const length = value.length;
    if (length <= 5) return value; // Return the whole value if it's too short to mask middle part

    const firstTwo = value.slice(0, 2);
    const middleThree = value.slice(2, -2).replace(/./g, "*"); // Replace middle values with stars
    const lastTwo = value.slice(-2);
    return `${firstTwo}${middleThree}${lastTwo}`;
  };
  // Language popup js
  const [isLanguageVisible, setIsLanguageVisible] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const toggleLangPopup = () => {
    setIsLanguageVisible(!isLanguageVisible);
  };
  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsLanguageVisible(false);
  };
  // telegram popup
  const [isTelegramVisible, setIsTelegramVisible] = useState(false);
  const toggleTelegramPopUp = () => {
    setIsTelegramVisible(!isTelegramVisible);
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

  return (
    <div id="app" className="a-t-1 no-4">
      <div
        home-nav=""
        className="layout-tab-bar box-border min-h-full w-full px-$mg pb-60px"
      >
        <Header
          selectedLanguage={selectedLanguage}
          toggleLangPopup={toggleLangPopup}
          toggleTelegramPopUp={toggleTelegramPopUp}
        ></Header>
        <div data-v-f004e884="" className="mine-wrap">
          <div data-v-f004e884="" className="mine-wrap-content">
            <div data-v-f004e884="" className="top-info">
              <div
                data-v-f004e884=""
                className=":uno: base-logo flex items-center avatar"
              >
                <img
                  className="site-img h-full w-full rd-50%"
                  src={logo}
                  draggable="false"
                  alt="logo"
                />
              </div>
              <div data-v-f004e884="" className="user-info">
                <div data-v-f004e884="">
                  {formatEmailOrPhone(
                    data?.user?.email == null
                      ? data?.user?.phone
                      : data?.user?.email
                  )}
                </div>
                <div data-v-f004e884="" className="level">
                  VIP{data?.user?.my_vip}
                </div>
              </div>
              <div data-v-f004e884="" className="user-number">
                <div data-v-f004e884="" className="user-number-item">
                  <div data-v-f004e884="" className="title">
                    {t("total_balance")} (USDT)
                  </div>
                  <div data-v-f004e884="" className="number">
                    {(
                      parseFloat(data?.withdraw_balance) +
                      parseFloat(data?.amount)
                    ).toFixed(2)}
                  </div>
                </div>
                <div data-v-f004e884="" className="user-number-item">
                  <div data-v-f004e884="" className="title">
                    {t("recharge_amount")} (USDT)
                  </div>
                  <div data-v-f004e884="" className="number">
                    {parseFloat(data?.amount).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
            {/* top-info ends */}
            <div data-v-f004e884="" className="main-tools-part">
              <Link data-v-f004e884="" to="/recharge-method" className="">
                <div data-v-f004e884="" className="item">
                  <div data-v-f004e884="" className="icon-box">
                    <div
                      data-v-f004e884=""
                      className="icon i-material-symbols-attach-money"
                    ></div>
                  </div>
                  <div data-v-f004e884="" className="label">
                    {t("recharge")}
                  </div>
                </div>
              </Link>
              <Link data-v-f004e884="" to="/withdraw-trx" className="">
                <div data-v-f004e884="" className="item">
                  <div data-v-f004e884="" className="icon-box">
                    <div
                      data-v-f004e884=""
                      className="icon i-uil-money-withdrawal"
                    ></div>
                  </div>
                  <div data-v-f004e884="" className="label">
                    {t("withdraw")}
                  </div>
                </div>
              </Link>
              <Link data-v-f004e884="" to="/account" className="">
                <div data-v-f004e884="" className="item">
                  <div data-v-f004e884="" className="icon-box">
                    <div
                      data-v-f004e884=""
                      className="icon i-material-symbols-account-balance-rounded"
                    ></div>
                  </div>
                  <div data-v-f004e884="" className="label">
                    {t("account")}
                  </div>
                </div>
              </Link>
              <Link data-v-f004e884="" to="/financial" className="">
                <div data-v-f004e884="" className="item">
                  <div data-v-f004e884="" className="icon-box">
                    <div
                      data-v-f004e884=""
                      className="icon i-iconamoon-trend-up-bold"
                    ></div>
                  </div>
                  <div data-v-f004e884="" className="label">
                    {t("financial_record")}
                  </div>
                </div>
              </Link>
            </div>
            {/* me important links */}
            <div data-v-f004e884="" className="secondary-tools-part">
              <Link data-v-f004e884="" onClick={downloadApp} className="">
                <div data-v-f004e884="" className="item">
                  <div data-v-f004e884="" className="flex items-center">
                    <div data-v-f004e884="" className="icon-box">
                      <div
                        data-v-f004e884=""
                        className="icon i-radix-icons:download"
                      ></div>
                    </div>
                    <div data-v-f004e884="" className="label">
                      {t("app")}
                    </div>
                  </div>
                  <div
                    data-v-f004e884=""
                    className="icon i-material-symbols-arrow-forward-ios"
                  ></div>
                </div>
              </Link>
              <Link data-v-f004e884="" to="/change-password" className="">
                <div data-v-f004e884="" className="item">
                  <div data-v-f004e884="" className="flex items-center">
                    <div data-v-f004e884="" className="icon-box">
                      <div
                        data-v-f004e884=""
                        className="icon i-solar-password-outline"
                      ></div>
                    </div>
                    <div data-v-f004e884="" className="label">
                      {t("change_pass")}
                    </div>
                  </div>
                  <div
                    data-v-f004e884=""
                    className="icon i-material-symbols-arrow-forward-ios"
                  ></div>
                </div>
              </Link>
              <Link data-v-f004e884="" to="/transfer" className="">
                <div data-v-f004e884="" className="item">
                  <div data-v-f004e884="" className="flex items-center">
                    <div data-v-f004e884="" className="icon-box">
                      <div
                        data-v-f004e884=""
                        className="icon i-material-symbols-attach-money"
                      ></div>
                    </div>
                    <div data-v-f004e884="" className="label">
                      {t("transfer_to")}
                    </div>
                  </div>
                  <div
                    data-v-f004e884=""
                    className="icon i-material-symbols-arrow-forward-ios"
                  ></div>
                </div>
              </Link>
              <Link
                data-v-f004e884=""
                className="item"
                onClick={handleConfirmLogout}
              >
                <div data-v-f004e884="" className="flex items-center">
                  <div data-v-f004e884="" className="icon-box">
                    <div
                      data-v-f004e884=""
                      className="icon i-material-symbols-logout-sharp"
                    ></div>
                  </div>
                  <div data-v-f004e884="" className="label">
                    {t("sign_out")}
                  </div>
                </div>
                <div
                  data-v-f004e884=""
                  className="icon i-material-symbols-arrow-forward-ios"
                ></div>
              </Link>
            </div>
          </div>
        </div>

        {/* <SupportLink /> */}
        <CustomLoader />
        <Navbar />
      </div>
      <LanguagePopUp
        isLanguageVisible={isLanguageVisible}
        toggleLangPopup={toggleLangPopup}
        changeLanguage={changeLanguage}
      />
      <TelegramPopUp
        isTelegramVisible={isTelegramVisible}
        toggleTelegramPopUp={toggleTelegramPopUp}
      />
    </div>
  );
};

export default HomePage;
