import { Link } from "react-router-dom";
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

import taskcrypto_mining from "../assets/images/taskcrypto_mining.webp";

// component
import Navbar from "./partial/navbar";
import HeaderMain from "./extra/headerMain";
import CountdownTimer from "./extra/CountdownTimer";
import { useTranslation } from "react-i18next";
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./extra/Header";
import SupportLink from "./extra/supportLink";
import LanguagePopUp from "./extra/LanguagePopUp";
import TelegramPopUp from "./extra/TelegramPopUp";

const Task = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [targetDate, setTargetDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/tradings");

        setData(response.data);
        // alert(response.data.date)
        setTargetDate(new Date(response.data.date));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
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
        <div task-page="" className="mission-wrap">
          <div task-page="" className="mission-wrap-content">
            <div data-v-7f399f52="" className="top-info">
              <div data-v-7f399f52="" className="mission-chain-info">
                <div data-v-7f399f52="" className="flex items-center">
                  <div data-v-7f399f52="">
                    <div data-v-7f399f52="" className="value">
                    {(Number(data.amount) + Number(data.trading_balance)).toFixed(2)}
                    </div>
                    <div data-v-7f399f52="" className="desc text-sm">
                      {t("total_balance")}
                    </div>
                  </div>
                  <div data-v-7f399f52="" className="recharge ml-auto">
                    <Link data-v-7f399f52="" to="/recharge-method">
                      {t("recharge")}
                    </Link>
                  </div>
                </div>
                <div data-v-7f399f52="" className="grid-3">
                  <div data-v-7f399f52="">
                    <div data-v-7f399f52="" className="value text-center">
                      0
                    </div>
                    <div
                      data-v-7f399f52=""
                      className="desc text-center text-sm"
                    >
                      {t("completed")}
                    </div>
                  </div>
                  <div data-v-7f399f52="">
                    <div data-v-7f399f52="" className="value text-center">
                      {data?.product && data.withdraw_status > 0 ? 1 : 0}
                    </div>
                    <div
                      data-v-7f399f52=""
                      className="desc text-center text-sm"
                    >
                      {t("all")}
                    </div>
                  </div>
                  <div data-v-7f399f52="">
                    <div data-v-7f399f52="" className="value text-center">
                      {data?.product && data.withdraw_status ? "1" : "0"}
                    </div>
                    <div
                      data-v-7f399f52=""
                      className="desc text-center text-sm"
                    >
                      {t("in_progress")}
                    </div>
                  </div>
                </div>
                <div data-v-7f399f52="" className="btn-area">
                  <div
                    data-v-7f399f52=""
                    className="btnOk"
                    style={{
                      marginTop: "10px",
                      height: "36px",
                      lineHeight: "36px",
                    }}
                  >
                    Crawl
                  </div>
                </div>
              </div>
            </div>
            {/* top info ends */}
            <div
              data-v-7f399f52=""
              className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text"
              style={{ background: "#ffffff30" }}
            >
              <div
                data-v-7f399f52=""
                className=":uno: base-user-tab flex items-center justify-center top-71px sticky!"
              >
                <Link
                  className=":uno: tab-item h-full flex cursor-pointer items-center justify-center"
                  to="/task"
                >
                  {t("in_progress")}
                </Link>
                <Link
                  className=":uno: tab-item h-full flex cursor-pointer items-center justify-center active"
                  to="/task-completed"
                >
                  {t("completed")}
                </Link>
              </div>
              {/* tabs endss */}

              <div className="tab-content2">
                <div data-v-7f399f52="" className="task-list">
                  <div id="comp_item">
                    {data?.tradings?.length > 0 ? (
                      data.tradings.map((trading) => (
                        <div
                          data-v-7f399f52=""
                          className="mission-card"
                          key={trading.id}
                        >
                          <div
                            data-v-7f399f52=""
                            className="card-inner"
                            style={{ width: "100%" }}
                          >
                            <div data-v-7f399f52="" className="product-show">
                              <img
                                data-v-7f399f52=""
                                className="product-img"
                                src={`${axios.defaults.baseURL}${trading.product.image}`}
                              />
                            </div>
                            <div
                              data-v-7f399f52=""
                              className="product-info-wrap"
                            >
                              <div data-v-7f399f52="" className="product-info">
                                <div
                                  data-v-7f399f52=""
                                  className="product-name"
                                >
                                  {trading.product.title}
                                </div>
                                <div
                                  data-v-7f399f52=""
                                  className="main-price-info"
                                >
                                  <div
                                    data-v-7f399f52=""
                                    className="product-price"
                                  >
                                    <div data-v-7f399f52="" className="label">
                                      {t("price")}
                                    </div>
                                    <div data-v-7f399f52="" className="price">
                                      {trading.product.price}
                                    </div>
                                  </div>
                                  <div
                                    data-v-7f399f52=""
                                    className="product-price"
                                  >
                                    <div data-v-7f399f52="" className="label">
                                      {t("income")}
                                    </div>
                                    <div
                                      data-v-7f399f52=""
                                      className="price red"
                                    >
                                      {trading.amount}
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-7f399f52=""
                                  className="product-price flex items-center justify-between"
                                >
                                  <span data-v-7f399f52="" className="label">
                                    {t("completed_time")}
                                  </span>
                                  <span
                                    data-v-7f399f52=""
                                    className="price gray"
                                  >
                                    {new Date(
                                      trading.created_at
                                    ).toLocaleString()}
                                  </span>
                                </div>
                              </div>
                              <div
                                data-v-7f399f52=""
                                className="action-area"
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div fin-record="" className="base-list a-t-26">
                        <div
                          id="comp_nodata"
                          fin-record=""
                          className="no-more text-center"
                        >
                          No data
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
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

export default Task;
