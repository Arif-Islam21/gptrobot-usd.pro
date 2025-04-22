import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/style2.css";
import "../../assets/css/style3.css";
import "../../assets/css/style4.css";
import "../../assets/css/style5.css";
import "../../assets/css/style6.css";
import "../../assets/css/style7.css";
import "../../assets/css/style8.css";
import "../../assets/css/style9.css";
import { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import AuthTop from "../extra/authTopPart";
import LanguagePopUp from "../extra/LanguagePopUp";
import CountryCodePup from "./CountryCodePup";
import TelegramPopUp from "../extra/TelegramPopUp";

import CustomLoader from "../extra/customLoader";
import Loader from "../extra/loader";

function App() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ phone: "", password: "" });
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const type = "phone";
  const { t, i18n } = useTranslation();

  const [isLoader, setIsLoader] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      phone,
      country_code: selectedCountry, // Send country code separately
      password,
      type,
    };

    try {
      setIsLoader(true);
      const response = await axios.post("api/login", formData);

      setAlertMessage(response.data.message || "Something happened");
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
        setIsLoader(false);
      }, 2000);

      if (response.data.message === "Unauthorised") {
        enqueueSnackbar("This credential do not match", { variant: "error" });
      }

      if (response.data.data.token) {
        localStorage.setItem("token", response.data.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.data.token}`;
        navigate("/home");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoader(false); // Hide loader after data is fetched
    }
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
  // country Code popup
  const [isCountryVisible, setIsCountryVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("64");
  const toggleCountryPopUp = () => {
    setIsCountryVisible(!isCountryVisible);
  };
  const changeCountry = (country) => {
    setSelectedCountry(country);
    setIsCountryVisible(false);
  };
  // password eye button hide show
  const [eyeOutline, setEyeOutline] = useState(true);
  const toggleEye = () => {
    setEyeOutline(!eyeOutline);
  };
  return (
    <div id="app" className="a-t-1 no-4">
      <div className="login">
        <div className=":uno: container-login relative">
          <AuthTop
            selectedLanguage={selectedLanguage}
            toggleLangPopup={toggleLangPopup}
            toggleTelegramPopUp={toggleTelegramPopUp}
          ></AuthTop>

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
          {/* <CustomLoader /> */}
          {isLoader ? <Loader /> : null}

          <div className="login-content">
            <form
              className="login_Fm"
              onSubmit={handleSubmit}
              style={{
                animation:
                  "slide-in-right .3s cubic-bezier(.25,.46,.45,.94) both",
              }}
            >
              <div className=":uno: container-form w-full rd-$radius">
                <div className=":uno: base-user-tab flex items-center justify-center">
                  <Link
                    className="::uno: tab-item h-full flex cursor-pointer items-center justify-center"
                    to="/"
                  >
                    {t("email_login")}
                  </Link>
                  <Link
                    className=":uno: tab-item h-full flex cursor-pointer items-center justify-center active"
                    to="/phone-login"
                  >
                    {t("phone_login")}
                  </Link>
                </div>
                <div className="base-input is-text">
                  <div className="label">{t("phone")}</div>
                  <div className="input-box">
                    <div className="input-left-slot">
                      <div className="flex items-center">
                        <div login-content="" className="ml-0!">
                          <div login-content="" onClick={toggleCountryPopUp}>
                            <span className="input-phone-select">
                              +<span id="countryCode">{selectedCountry}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <input
                      type={eyeOutline ? "password" : "text"}
                      className="w-full"
                      id="phone"
                      placeholder={t("phone_number")}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="input-right-slot"></div>
                  {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </div>
                <div className="base-input is-password">
                  <div className="label">{t("password")}</div>
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      type={eyeOutline ? "password" : "text"}
                      className="w-full"
                      id="password"
                      placeholder={t("password")}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div
                      className="input-pwd-eye-slot cursor-pointer"
                      onClick={toggleEye}
                    >
                      <div
                        id="eye"
                        className={`icon ${
                          eyeOutline
                            ? "i-mdi-eye-outline"
                            : "i-mdi-eye-off-outline"
                        }`}
                      ></div>
                    </div>
                    <div className="input-right-slot"></div>
                  </div>

                  {errors.password && (
                    <small className="text-danger">{errors.password}</small>
                  )}
                </div>
              </div>
              <div className=":uno: mt-12px flex items-center justify-end"></div>
              <div className="tools mt-20px">
                <div className=":uno: base-main-btn flex items-center justify-center">
                  <button type="submit" className="base-main-btn-content mx-0">
                    <div>{t("sign_in")}</div>
                  </button>
                </div>

                <div
                  className="mt-20px text-center"
                  style={{ marginBottom: "67px" }}
                >
                  <Link
                    to="/register"
                    className="register cursor-pointer d-block"
                  >
                    {t("sign_up")}
                  </Link>
                </div>
              </div>
            </form>
          </div>
          {/* login contents ends */}
        </div>
      </div>
      <LanguagePopUp
        isLanguageVisible={isLanguageVisible}
        toggleLangPopup={toggleLangPopup}
        changeLanguage={changeLanguage}
      />
      <TelegramPopUp
        isTelegramVisible={isTelegramVisible}
        toggleTelegramPopUp={toggleTelegramPopUp}
      ></TelegramPopUp>
      <CountryCodePup
        isCountryVisible={isCountryVisible}
        toggleCountryPopUp={toggleCountryPopUp}
        changeCountry={changeCountry}
      ></CountryCodePup>
    </div>
  );
}

export default App;
