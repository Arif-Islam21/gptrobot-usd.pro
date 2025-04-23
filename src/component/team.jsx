import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/team.css";
import "../assets/css/style.css";
import "../assets/css/style2.css";
import "../assets/css/style3.css";
import "../assets/css/style4.css";
import "../assets/css/style5.css";
import "../assets/css/style6.css";
import "../assets/css/style7.css";
import "../assets/css/style8.css";
import "../assets/css/style9.css";

import logo from "../assets/images/logo.webp";
import level1Img from "../assets/images/level1-21a26d15.png";
import level2Img from "../assets/images/level1-21a26d15.png";
import level3Img from "../assets/images/level1-21a26d15.png";
import team_level1 from "../assets/images/team_level1.png";
import team_level2 from "../assets/images/team_level2.png";
import team_level3 from "../assets/images/team_level3.png";
//component
import Navbar from "./partial/navbar";
import HeaderMain from "./extra/headerMain";
import CopyCode from "./extra/copyCode";
import CopyLink from "./extra/copyLink";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./extra/Header";
import SupportLink from "./extra/supportLink";
import LanguagePopUp from "./extra/LanguagePopUp";
import TelegramPopUp from "./extra/TelegramPopUp";

const Team = () => {
  const { t } = useTranslation();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false); // State to control loader visibility

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Show loader during initial data fetch
      try {
        const response = await axios.get("api/team");

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Hide loader after data is fetched
      }
    };

    fetchData();
  }, []);

  const invitationLink = `${window.location.origin}/#/register?ic=${
    data?.user?.invitation_code || "000000"
  }`;
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
  // copy popup
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    // Logic to copy content goes here

    // Show the modal
    setIsCopied(true);

    // Hide the modal after 2 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
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
        <div data-v-d7bc823e="" className="team-wrap">
          <div data-v-d7bc823e="" className="team-wrap-content">
            <div className="card shadow-sm p-3 mb-4 rounded-3 border-0">
              <div className="card-body">
                <h6 className="card-title text-muted mb-2">
                  {t("invitation_code")}
                </h6>

                <div className="d-flex align-items-center justify-content-between bg-light p-2 rounded mb-3">
                  <span className="text-monospace fw-semibold text-dark">
                    {data?.user?.invitation_code || "000000"}
                  </span>
                  <CopyCode
                    code={data?.user?.invitation_code || "000000"}
                    copyText={t("copy")}
                    handleCopyClick={handleCopyClick}
                  />
                </div>

                <p className="text-muted small mb-2">{t("share_refer_txt")}</p>

                <div className="d-flex align-items-center justify-content-between bg-light p-2 rounded">
                  <span className="text-truncate small">{invitationLink}</span>
                  <CopyLink
                    code={invitationLink}
                    copyText={t("copy")}
                    handleCopyClick={handleCopyClick}
                  />
                </div>
              </div>
            </div>

            {/* share-card ends */}
            <div className="d-flex align-items-center my-2 mt-3 cursor-pointer text-dark">
              <div className="d-flex align-items-center">
                <i className="i-twemoji-spiral-calendar text-primary fs-4"></i>
                <span className="ms-2 fw-semibold text-white">
                  Selection period
                </span>
              </div>
            </div>

            {/* date filter endsss */}
            <div
              className="container-card rounded-3 p-3 bg-light team-info position-relative"
              style={{ background: "#ffffff30" }}
            >
              {/* First set of team info */}
              <div className="row mb-3">
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <div className="team-item">
                    <div className="text-muted">{t("team_size")}</div>
                    <div className="text-primary fs-5">
                      {data?.teamsize || "0"}
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <div className="team-item">
                    <div className="text-muted">{t("team_recharge")}</div>
                    <div className="text-primary fs-5">
                      ${data?.totalDepositSum || "0"}
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <div className="team-item">
                    <div className="text-muted">{t("team_withdrawal")}</div>
                    <div className="text-primary fs-5">
                      ${data?.totalWithdrawSum || "0"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Second set of team info */}
              <div className="row">
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <div className="team-item">
                    <div className="text-muted">{t("new_team")}</div>
                    <div className="text-primary fs-5">
                      {data?.teamsizeToday || "0"}
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <div className="team-item">
                    <div className="text-muted">{t("first_time_recharge")}</div>
                    <div className="text-primary fs-5">
                      {data.firstTimeRecharge || "0"}
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <div className="team-item">
                    <div className="text-muted">{t("first_wthdrawal")}</div>
                    <div className="text-primary fs-5">
                      {data.firstTimeWithdraw || "0"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* team table ends */}

            <div data-v-d7bc823e="" className="team-card">
              <div data-v-d7bc823e="" className="team-item border-b p-4">
                <div
                  data-v-d7bc823e=""
                  className="level-name flex items-center"
                >
                  <img
                    data-v-d7bc823e=""
                    src={level1Img}
                    alt="Level 1"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div
                    data-v-d7bc823e=""
                    className="level-num text-xl font-semibold text-gray-800"
                  >
                    LEV 1
                  </div>
                </div>

                <div
                  data-v-d7bc823e=""
                  className="grid grid-cols-2 gap-5px mt-4"
                >
                  <div data-v-d7bc823e="" className="level-count">
                    <div data-v-d7bc823e="" className="text-xs text-gray-500">
                      {t("register_valid")}
                    </div>
                    <div
                      data-v-d7bc823e=""
                      className="text-df font-medium text-gray-700"
                    >
                      {data?.refer_lvel1 || 0}/{data?.refer_val1 || 0}
                    </div>
                  </div>
                  <div data-v-d7bc823e="" className="level-count">
                    <div data-v-d7bc823e="" className="text-xs text-gray-500">
                      {t("commission_percentage")}
                    </div>
                    <div
                      data-v-d7bc823e=""
                      className="text-df font-medium text-gray-700"
                    >
                      {data?.commission?.refer_com1 || "0"}%
                    </div>
                  </div>
                  <div data-v-d7bc823e="" className="level-count">
                    <div data-v-d7bc823e="" className="text-xs text-gray-500">
                      {t("total_income")}
                    </div>
                    <div
                      data-v-d7bc823e=""
                      className="text-df font-medium text-gray-700"
                    >
                      {parseFloat(data?.sumcom_lvel1).toFixed(2) || 0}
                    </div>
                  </div>
                </div>

                <Link
                  to={`/team-details?level=${1}`}
                  data-v-d7bc823e=""
                  className="btn text-blue-500 d-flex align-items-center font-medium hover:text-blue-700 mt-3 flex items-center"
                >
                  <span>{t("details")}</span>
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>

              <div data-v-d7bc823e="" className="team-item border-b p-4">
                <div
                  data-v-d7bc823e=""
                  className="level-name flex items-center"
                >
                  <img
                    data-v-d7bc823e=""
                    src={level2Img}
                    alt="Level 2"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div
                    data-v-d7bc823e=""
                    className="level-num text-xl font-semibold text-gray-800"
                  >
                    LEV 2
                  </div>
                </div>

                <div
                  data-v-d7bc823e=""
                  className="grid grid-cols-2 gap-5px mt-4"
                >
                  <div data-v-d7bc823e="" className="level-count">
                    <div data-v-d7bc823e="" className="text-xs text-gray-500">
                      {t("register_valid")}
                    </div>
                    <div
                      data-v-d7bc823e=""
                      className="text-df font-medium text-gray-700"
                    >
                      {data?.refer_lvel2 || 0}/{data?.refer_val2 || 0}
                    </div>
                  </div>
                  <div data-v-d7bc823e="" className="level-count">
                    <div data-v-d7bc823e="" className="text-xs text-gray-500">
                      {t("commission_percentage")}
                    </div>
                    <div
                      data-v-d7bc823e=""
                      className="text-df font-medium text-gray-700"
                    >
                      {data?.commission?.refer_com2 || "0"}%
                    </div>
                  </div>
                  <div data-v-d7bc823e="" className="level-count">
                    <div data-v-d7bc823e="" className="text-xs text-gray-500">
                      {t("total_income")}
                    </div>
                    <div
                      data-v-d7bc823e=""
                      className="text-df font-medium text-gray-700"
                    >
                      {parseFloat(data?.sumcom_lvel2).toFixed(2) || 0}
                    </div>
                  </div>
                </div>

                <Link
                  to={`/team-details?level=${2}`}
                  data-v-d7bc823e=""
                  className="btn text-blue-500 font-medium d-flex align-items-center hover:text-blue-700 mt-3 flex items-center"
                >
                  <span>{t("details")}</span>
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>

              {/* Level 3 Item */}
              <div data-v-d7bc823e="" className="team-item border-b p-4">
                <div
                  data-v-d7bc823e=""
                  className="level-name flex items-center"
                >
                  <img
                    data-v-d7bc823e=""
                    src={level3Img}
                    alt="Level 3"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div
                    data-v-d7bc823e=""
                    className="level-num text-xl font-semibold text-gray-800"
                  >
                    LEV 3
                  </div>
                </div>

                <div
                  data-v-d7bc823e=""
                  className="grid grid-cols-2 gap-5px mt-4"
                >
                  <div data-v-d7bc823e="" className="level-count">
                    <div data-v-d7bc823e="" className="text-xs text-gray-500">
                      {t("register_valid")}
                    </div>
                    <div
                      data-v-d7bc823e=""
                      className="text-df font-medium text-gray-700"
                    >
                      {data?.refer_lvel3 || 0}/{data?.refer_val3 || 0}
                    </div>
                  </div>
                  <div data-v-d7bc823e="" className="level-count">
                    <div data-v-d7bc823e="" className="text-xs text-gray-500">
                      {t("commission_percentage")}
                    </div>
                    <div
                      data-v-d7bc823e=""
                      className="text-df font-medium text-gray-700"
                    >
                      {data?.commission?.refer_com3 || "0"}%
                    </div>
                  </div>
                  <div data-v-d7bc823e="" className="level-count">
                    <div data-v-d7bc823e="" className="text-xs text-gray-500">
                      {t("total_income")}
                    </div>
                    <div
                      data-v-d7bc823e=""
                      className="text-df font-medium text-gray-700"
                    >
                      {parseFloat(data?.sumcom_lvel3).toFixed(2) || 0}
                    </div>
                  </div>
                </div>

                <Link
                  to={`/team-details?level=${3}`}
                  data-v-d7bc823e=""
                  className="btn text-blue-500 font-medium d-flex align-items-center hover:text-blue-700 mt-3 flex items-center"
                >
                  <span>{t("details")}</span>
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>

              {/* card item ends */}
            </div>
            {/* team-card ends */}
          </div>
        </div>
        {isCopied && (
          <div
            id="copyModal"
            role="dialog"
            className="van-popup van-popup--center van-toast van-toast--middle van-toast--text"
            style={{ zIndex: "200017", transition: ".3s all" }}
          >
            <div className="van-toast__text">Copied successfully</div>
          </div>
        )}
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

export default Team;
