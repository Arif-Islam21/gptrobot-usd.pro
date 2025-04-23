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
//component
import Navbar from "./partial/navbar";
import CountdownTimer from "./extra/CountdownTimer";
import { useTranslation } from "react-i18next";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./extra/Header";
import SupportLink from "./extra/supportLink";
import LanguagePopUp from "./extra/LanguagePopUp";
import TelegramPopUp from "./extra/TelegramPopUp";

import CustomLoader from "./extra/customLoader";
import Loader from "./extra/loader";
import image from "../assets/images/slider/miningSvg.webp";

const task = () => {
  const [targetDate, setTargetDate] = useState(null);
  const { t } = useTranslation();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const [isLoader, setIsLoader] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/task");

        setData(response.data);
        // alert(response.data.date)
        setTargetDate(new Date(response.data.date));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toComplete = () => {
    const taskComplete = async () => {
      setIsLoader(true);
      try {
        const response = await axios.get("api/task/complete");

        setAlertMessage(response.data.message || "Something happened");
        setAlertVisible(true);
        setTimeout(() => {
          setAlertVisible(false);
          navigate("/task-completed");
        }, 2000);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoader(false); // Hide loader when the request is completed
      }
    };

    taskComplete();
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

        {alertVisible && (
          <div
            id="copyModal"
            role="dialog"
            className="van-popup van-popup--center van-toast van-toast--middle van-toast--text"
            style={{ zIndex: "200017", transition: ".3s all" }}
          >
            <div className="van-toast__text">{alertMessage}</div>
          </div>
        )}
        <CustomLoader />
        {isLoader ? <Loader /> : null}

        <div data-v-7f399f52="" className="mission-wrap">
          <div data-v-7f399f52="" className="mission-wrap-content">
            <div data-v-7f399f52="" className="top-info">
              <div data-v-7f399f52="" className="mission-chain-info">
                <div data-v-7f399f52="" className="grid-2">
                  <div data-v-7f399f52="">
                    <div
                      data-v-7f399f52=""
                      className="desc text-center text-sm"
                      style={{ color: "#fff" }}
                    >
                      {t("all_task_for_today")}
                    </div>
                    <div
                      data-v-7f399f52=""
                      className="value text-center text-white"
                    >
                      {data?.product && data.withdraw_status > 0 ? 1 : 0}
                    </div>
                  </div>
                  <div data-v-7f399f52="">
                    <div
                      data-v-7f399f52=""
                      className="desc text-center text-sm"
                      style={{ color: "#fff" }}
                    >
                      {t("todays_remaining_tasks")}
                    </div>
                    <div
                      data-v-7f399f52=""
                      className="value text-center text-white"
                    >
                      {data?.product && data.withdraw_status ? "1" : "0"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* top info ends */}

            <div>
              <img src={image} alt="svg image" className="w-100 h-auto" />
            </div>
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
                  className=":uno: tab-item h-full flex cursor-pointer items-center justify-center active"
                  to="/task"
                >
                  {t("in_progress")}
                </Link>
                <Link
                  className=":uno: tab-item h-full flex cursor-pointer items-center justify-center"
                  to="/task-completed"
                >
                  {t("completed")}
                </Link>
              </div>
              {/* tabs endss */}
              <div data-v-7f399f52="" className="tab-content2" data-id="0">
                <div data-v-7f399f52="" className="task-list">
                  {data?.withdraw_status && Math.floor(data?.commission) > 0 ? (
                    <div id="inpro" className="inpro">
                      <div data-v-7f399f52="" className="mission-card">
                        <div
                          data-v-7f399f52=""
                          className="card-inner"
                          style={{ width: "100%" }}
                        >
                          <div data-v-7f399f52="" className="product-show">
                            <img
                              data-v-7f399f52=""
                              className="product-img"
                              src={
                                data?.product?.image
                                  ? `${axios.defaults.baseURL}${data.product.image}`
                                  : taskcrypto_mining
                              }
                            />
                          </div>
                          <div data-v-7f399f52="" className="product-info-wrap">
                            <div data-v-7f399f52="" className="product-info">
                              <div data-v-7f399f52="" className="product-name">
                                {data.product.title}
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
                                    {data?.product?.price || "0.50"}
                                  </div>
                                </div>
                                <div
                                  data-v-7f399f52=""
                                  className="product-price"
                                >
                                  <div data-v-7f399f52="" className="label">
                                    {t("income")}
                                  </div>
                                  <div data-v-7f399f52="" className="price red">
                                    {parseFloat(data?.commission).toFixed(2)}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-v-7f399f52="" className="action-area">
                              <div
                                data-v-7f399f52=""
                                className="toComplete"
                                onClick={toComplete}
                              >
                                {t("to_complete")}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      id="inpro_nodata"
                      data-v-7f399f52=""
                      className="nomore2 c-$text-gray6"
                    >
                      {t("no_data")}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

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

export default task;
