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
import { Link, useNavigate } from "react-router-dom";
import Header from "./extra/Header";
import SupportLink from "./extra/supportLink";
import LanguagePopUp from "./extra/LanguagePopUp";
import TelegramPopUp from "./extra/TelegramPopUp";
import tik from "../assets/images/slider/tikmark.png";

const vip = () => {
  const { t } = useTranslation();
  const [data, setData] = useState({});
  // const data = true;
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

  const investmentProducts = [
    {
      title: "10 Days Regular Product",
      investmentPeriod: "10 Days",
      dailyIncome: "10.00%",
      minInvestment: 100,
      periodicReturn: "10%",
      totalInvestments: 3,
    },
    {
      title: "30 Days Regular Product",
      investmentPeriod: "30 Days",
      dailyIncome: "15.00%",
      minInvestment: 500,
      periodicReturn: "15%",
      totalInvestments: 3,
    },
    {
      title: "45 Days Regular Product",
      investmentPeriod: "45 Days",
      dailyIncome: "20.00%",
      minInvestment: 1000,
      periodicReturn: "20%",
      totalInvestments: 3,
    },
  ];

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
          {/* <div data-v-819be10a="" className="vip-wrap">
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
          </div> */}
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

        {/* SOME STATIC DISIGN GOES HERE */}
        <div>
          {investmentProducts.map((product, index) => (
            <div
              key={index}
              className="px-4 py-2 rounded-3 bg-white my-2 text-black"
            >
              <div className="d-flex justify-content-between align-items-center  p-2">
                <div>
                  <h2 className="fs-4 fw-semibold">{product.title}</h2>
                  <p className="fw-semibold text-secondary">
                    Investment period: {product.investmentPeriod}
                  </p>
                </div>
                <h2 className="fs-2 fw-bold text-primary">
                  {product.dailyIncome}
                </h2>
              </div>
              <hr className="my-2" />
              <div>
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={tik}
                    alt="tik mark"
                    className=""
                    style={{ height: "1.5rem", width: "1.5rem" }}
                  />
                  <h3 className="fs-4 fw-semibold text-secondary">
                    Minimum Investment amount: {product.minInvestment} USDT
                  </h3>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={tik}
                    alt="tik mark"
                    className=""
                    style={{ height: "1.5rem", width: "1.5rem" }}
                  />
                  <h3 className="fs-4 fw-semibold text-secondary">
                    Periodic principle and interest: {product.periodicReturn}
                  </h3>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={tik}
                    alt="tik mark"
                    className=""
                    style={{ height: "1.5rem", width: "1.5rem" }}
                  />
                  <h3 className="fs-4 fw-semibold text-secondary">
                    Total Invesments: {product.totalInvestments}
                  </h3>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Link to="/recharge" className="btn btn-primary mx-auto my-2">
                  Invest Now
                </Link>
              </div>
            </div>
          ))}
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
