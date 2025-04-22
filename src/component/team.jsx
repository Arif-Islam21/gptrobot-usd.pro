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
            <div data-v-d7bc823e="" className="share-card">
              <div data-v-d7bc823e="" className="share-card-container">
                <div data-v-d7bc823e="" className="relative z-1">
                  <div data-v-d7bc823e="" className="text-13px">
                    {t("invitation_code")}：{" "}
                  </div>

                  <CopyCode
                    code={data?.user?.invitation_code || "000000"}
                    copyText={t("copy")}
                    handleCopyClick={handleCopyClick}
                  />

                  <div data-v-d7bc823e="" className="mt-5px text-13px lh-15px">
                    {t("share_refer_txt")}
                  </div>

                  <CopyLink
                    code={invitationLink}
                    copyText={t("copy")}
                    handleCopyClick={handleCopyClick}
                  />
                </div>
              </div>
            </div>
            {/* share-card ends */}
            <div
              data-v-d7bc823e=""
              className="my-10px mt-15px flex cursor-pointer items-center text-[var(--btn-text)]"
            >
              <div
                data-v-d7bc823e=""
                className="flex cursor-pointer items-center"
              >
                <div
                  data-v-d7bc823e=""
                  className="i-twemoji-spiral-calendar shrink-0 text-20px"
                ></div>
                <span data-v-d7bc823e="" className="ml-5px">
                  Selection period
                </span>
              </div>
            </div>
            {/* date filter endsss */}
            <div
              data-v-d7bc823e=""
              className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text team-info"
              style={{ background: "#ffffff30" }}
            >
              <div data-v-d7bc823e="" className="other-num">
                <div data-v-d7bc823e="" className="item">
                  <div data-v-d7bc823e="" className="text-df">
                    {t("team_size")}
                  </div>
                  <div data-v-d7bc823e="" className="txtBlue text-xl">
                    {data?.teamsize || "0"}
                  </div>
                </div>
                <div data-v-d7bc823e="" className="item">
                  <div data-v-d7bc823e="" className="text-df">
                    {t("team_recharge")}
                  </div>
                  <div data-v-d7bc823e="" className="txtBlue text-xl">
                    ${data?.totalDepositSum || "0"}
                  </div>
                </div>
                <div data-v-d7bc823e="" className="item">
                  <div data-v-d7bc823e="" className="text-df">
                    {t("team_withdrawal")}
                  </div>
                  <div data-v-d7bc823e="" className="txtBlue text-xl">
                    ${data?.totalWithdrawSum || "0"}
                  </div>
                </div>
              </div>
              <div data-v-d7bc823e="" className="other-num">
                <div data-v-d7bc823e="" className="item">
                  <div data-v-d7bc823e="" className="text-df">
                    {t("new_team")}
                  </div>
                  <div data-v-d7bc823e="" className="txtBlue text-xl">
                    {data?.teamsizeToday || "0"}
                  </div>
                </div>
                <div data-v-d7bc823e="" className="item">
                  <div data-v-d7bc823e="" className="text-df">
                    {t("first_time_recharge")}
                  </div>
                  <div data-v-d7bc823e="" className="txtBlue text-xl">
                    {data.firstTimeRecharge || "0"}
                  </div>
                </div>
                <div data-v-d7bc823e="" className="item">
                  <div data-v-d7bc823e="" className="text-df">
                    {t("first_wthdrawal")}
                  </div>
                  <div data-v-d7bc823e="" className="txtBlue text-xl">
                    {data.firstTimeWithdraw || "0"}
                  </div>
                </div>
              </div>
              {/* team info content ends  */}
            </div>
            {/* team table ends */}

            <div data-v-d7bc823e="" className="team-card">
              <div data-v-d7bc823e="" className="team-item">
                <div data-v-d7bc823e="" className="level-name">
                  <img data-v-d7bc823e="" src={level1Img} alt="" />
                  <div data-v-d7bc823e="" className="level-num">
                    LEV 1
                  </div>
                </div>
                {/* level ends */}
                <div
                  data-v-d7bc823e=""
                  className="grid grid-cols-2 flex-1 gap-5px"
                >
                  <div data-v-d7bc823e="" className="level-count">
                    <div data-v-d7bc823e="" className="text-xs">
                      {t("register_valid")}
                    </div>
                    <div data-v-d7bc823e="" className="text-df">
                      {data?.refer_lvel1 || 0}/{data?.refer_val1 || 0}
                    </div>
                  </div>
                  <div data-v-d7bc823e="" className="level-count">
                    <div data-v-d7bc823e="" className="text-xs">
                      {t("commission_percentage")}
                    </div>
                    <div data-v-d7bc823e="" className="text-df">
                      {data?.commission?.refer_com1 || "0"}%
                    </div>
                  </div>
                  <div data-v-d7bc823e="" className="level-count">
                    <div data-v-d7bc823e="" className="text-xs">
                      {t("total_income")}
                    </div>
                    <div data-v-d7bc823e="" className="text-df">
                      {parseFloat(data?.sumcom_lvel1).toFixed(2) || 0}
                    </div>
                  </div>
                </div>
                <Link
                  to={`/team-details?level=${1}`}
                  data-v-d7bc823e=""
                  className="btn"
                >
                  {t("details")}
                </Link>
              </div>
              {/* card item ends */}
              <div data-v-d7bc823e="" className="team-item">
                <div data-v-d7bc823e="" className="level-name">
                  <img data-v-d7bc823e="" src={level2Img} alt="" />
                  <div data-v-d7bc823e="" className="level-num">
                    LEV 2
                  </div>
                </div>
                {/* level ends */}
                <div
                  data-v-d7bc823e=""
                  className="grid grid-cols-2 flex-1 gap-5px"
                >
                  <div data-v-d7bc823e="" className="level-count">
                    <div data-v-d7bc823e="" className="text-xs">
                      {t("register_valid")}
                    </div>
                    <div data-v-d7bc823e="" className="text-df">
                      {data?.refer_lvel2 || 0}/{data?.refer_val2 || 0}
                    </div>
                  </div>
                  <div data-v-d7bc823e="" className="level-count">
                    <div data-v-d7bc823e="" className="text-xs">
                      {t("commission_percentage")}
                    </div>
                    <div data-v-d7bc823e="" className="text-df">
                      {data?.commission?.refer_com2 || "0"}%
                    </div>
                  </div>
                  <div data-v-d7bc823e="" className="level-count">
                    <div data-v-d7bc823e="" className="text-xs">
                      {t("total_income")}
                    </div>
                    <div data-v-d7bc823e="" className="text-df">
                      {parseFloat(data?.sumcom_lvel2).toFixed(2) || 0}
                    </div>
                  </div>
                </div>
                <Link
                  to={`/team-details?level=${2}`}
                  data-v-d7bc823e=""
                  className="btn"
                >
                  {t("details")}
                </Link>
              </div>
              {/* card item ends */}
              <div data-v-d7bc823e="" className="team-item">
                <div data-v-d7bc823e="" className="level-name">
                  <img data-v-d7bc823e="" src={level3Img} alt="" />
                  <div data-v-d7bc823e="" className="level-num">
                    LEV 3
                  </div>
                </div>
                {/* level ends */}
                <div
                  data-v-d7bc823e=""
                  className="grid grid-cols-2 flex-1 gap-5px"
                >
                  <div data-v-d7bc823e="" className="level-count">
                    <div data-v-d7bc823e="" className="text-xs">
                      {t("register_valid")}
                    </div>
                    <div data-v-d7bc823e="" className="text-df">
                      {data?.refer_lvel3 || 0}/{data?.refer_val3 || 0}
                    </div>
                  </div>
                  <div data-v-d7bc823e="" className="level-count">
                    <div data-v-d7bc823e="" className="text-xs">
                      {t("commission_percentage")}
                    </div>
                    <div data-v-d7bc823e="" className="text-df">
                      {data?.commission?.refer_com3 || "0"}%
                    </div>
                  </div>
                  <div data-v-d7bc823e="" className="level-count">
                    <div data-v-d7bc823e="" className="text-xs">
                      {t("total_income")}
                    </div>
                    <div data-v-d7bc823e="" className="text-df">
                      {parseFloat(data?.sumcom_lvel3).toFixed(2) || 0}
                    </div>
                  </div>
                </div>
                <Link
                  to={`/team-details?level=${3}`}
                  data-v-d7bc823e=""
                  className="btn"
                >
                  {t("details")}
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
