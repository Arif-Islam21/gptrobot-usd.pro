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

import crown from "../assets/images/crown.png";
import { useEffect, useState } from "react";
import axios from "axios";

//component
import Navbar from "./partial/navbar";
import { useTranslation } from "react-i18next";
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import { useNavigate } from "react-router-dom";
import Header from "./extra/Header";
import SupportLink from "./extra/supportLink";
import LanguagePopUp from "./extra/LanguagePopUp";
import TelegramPopUp from "./extra/TelegramPopUp";

const vip = () => {
  const { t } = useTranslation();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date
      .toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      .replace(",", ""); // Remove the comma from the formatted string
  };
  const addDate = (dateString) => {
    const date = new Date(dateString);
    // Add one year to the date
    date.setFullYear(date.getFullYear() + 1);
    return date
      .toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      .replace(",", "");
  };
  const [reqAmount, setReqAmount] = useState(0);

  useEffect(() => {
    // Define an async function inside the useEffect hook
    const fetchData = async () => {
      try {
        // Make a GET request to your API endpoint using axios
        const response = await axios.get("api/home");
        // Log the response to the console
        setData(response.data);
      } catch (error) {
        // Handle any errors
        console.error("Error fetching data:", error);
      }
    };

    // Call the async function immediately
    fetchData();
  }, []);
  const [isUncloked, setIsUnlocked] = useState(false);
  const clickRecharge = (reqAmount) => {
    if (reqAmount != null && Number.isInteger(reqAmount)) {
      setReqAmount(reqAmount);
    }
    setIsUnlocked(!isUncloked);
  };
  const handleConfirm = () => {
    navigate("/recharge-method");
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
  return (
    <div id="app" className="a-t-1 no-4">
      <div
        home-nav=""
        className="layout-tab-bar box-border min-h-full w-full px-$mg pb-60px"
      >
        <Header
          selectedLanguage={selectedLanguage}
          toggleLangPopup={toggleLangPopup}
        ></Header>
        <div data-v-819be10a="" className="vip-info-wrap">
          <div data-v-819be10a="" className="vip-log">
            {t("upgrade_log")}
          </div>
          {/* vip log ends */}
          <div data-v-819be10a="" className="vip-wrap">
            {data?.vips?.map((item, index) => {
              return (
                <div
                  data-v-819be10a=""
                  className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text"
                  key={index}
                  style={{ background: "#ffffff30" }}
                >
                  <div data-v-819be10a="" className="level-name">
                    <div
                      data-v-819be10a=""
                      className="icon i-solar-crown-star-bold"
                    ></div>
                    VIP {item.id}
                  </div>
                  {item.unlock ? (
                    <div vip-page="" className="current-status-box">
                      <div vip-page="" className="status-label">
                        {t("unlock_effective")}
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  <div data-v-819be10a="">
                    <div data-v-819be10a="" className="level-info pt-20px">
                      <div data-v-819be10a="" className="left">
                        <img
                          data-v-819be10a=""
                          className="vip-img"
                          src={`${axios.defaults.baseURL}${item.image}`}
                          alt="vip-img"
                        />
                      </div>
                      <div data-v-819be10a="" className="right">
                        <div data-v-819be10a="" className="item">
                          <div data-v-819be10a="" className="title">
                            <em data-v-819be10a=""></em>
                            {t("daily_task")}
                          </div>
                          <div data-v-819be10a="" className="value">
                            1
                          </div>
                        </div>
                        <div data-v-819be10a="" className="item">
                          <div data-v-819be10a="" className="title">
                            <em data-v-819be10a=""></em>
                            {t("simple_interest")}
                          </div>
                          <div data-v-819be10a="" className="value c-green">
                            {item.income_from}
                          </div>
                        </div>
                        <div data-v-819be10a="" className="item">
                          <div data-v-819be10a="" className="title">
                            <em data-v-819be10a=""></em>
                            {t("daily_profit")}
                          </div>
                          <div data-v-819be10a="" className="value">
                            <span data-v-819be10a="" className="strong">
                              {item.income_from}
                            </span>
                            <span data-v-819be10a="" className="unit">
                              USDT
                            </span>
                          </div>
                        </div>
                        <div data-v-819be10a="" className="item">
                          <div data-v-819be10a="" className="title">
                            <em data-v-819be10a=""></em>
                            {t("the_total_profit")}
                          </div>
                          <div data-v-819be10a="" className="value">
                            <span data-v-819be10a="" className="strong">
                              {item.income_from * 365}
                            </span>
                            <span data-v-819be10a="" className="unit">
                              USDT
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {item.unlock ? (
                      <div data-v-819be10a="" className="effect-time">
                        {t("effective_time")}:
                        <span
                          data-v-819be10a=""
                          className="c-green"
                          style={{ fontSize: "12px" }}
                        >
                          {formatDate(item.unlock.created_at)} -{" "}
                          {addDate(item.unlock.created_at)}
                        </span>
                      </div>
                    ) : (
                      <div data-v-819be10a="" className="active-level">
                        <div
                          data-v-819be10a=""
                          className="active-btn"
                          onClick={() =>
                            clickRecharge(Math.floor(item?.requred_from))
                          }
                        >
                          <span
                            data-v-819be10a=""
                            style={{ marginRight: "16px" }}
                          >
                            {Math.floor(item.requred_from)} USDT
                          </span>
                          {t("unlock_now")}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* vip-info-wrap ends */}
        <div
          className={`van-overlay ${isUncloked ? "show" : "d-none"}`}
          style={{ zIndex: "2002" }}
          onClick={clickRecharge}
        ></div>
        <div
          className={`unlock-modal van-popup van-popup--round van-popup--center van-safe-area-bottom  anounce-none ${
            isUncloked ? "show" : ""
          }`}
          style={{ zIndex: "2003", width: "75%", maxWidth: "620px" }}
        >
          <div className="modal-content">
            <p>
              The recharge balance is automatically unlocked. Need to recharge $
              {reqAmount}
            </p>
            <button onClick={handleConfirm}>Confirm</button>
          </div>
        </div>
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

export default vip;
