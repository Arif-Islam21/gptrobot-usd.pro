import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import "../../assets/css/style2.css";
import "../../assets/css/style3.css";
import "../../assets/css/style4.css";
import "../../assets/css/style5.css";
import "../../assets/css/style6.css";
import "../../assets/css/style7.css";
import "../../assets/css/style8.css";
import "../../assets/css/style9.css";
import "../../styles/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import AuthTop from "../extra/authTopPart";
import LanguagePopUp from "../extra/LanguagePopUp";
import TelegramPopUp from "../extra/TelegramPopUp";

import CustomLoader from "../extra/customLoader";
import Loader from "../extra/loader";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const type = "email";
  const { t, i18n } = useTranslation();

  const [isLoader, setIsLoader] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { email, password, type };

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

  // password eye button hide show
  const [eyeOutline, setEyeOutline] = useState(true);
  const toggleEye = () => {
    setEyeOutline(!eyeOutline);
  };
  return (
    <div id="app" className="a-t-1 no-4">
      <div className="login">
        <div className=":uno: container-login relative d-flex align-items-center justify-content-center">
          {/* <AuthTop
            selectedLanguage={selectedLanguage}
            toggleLangPopup={toggleLangPopup}
            toggleTelegramPopUp={toggleTelegramPopUp}
          ></AuthTop> */}

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

          {/* <!-- top-info ends --> */}
          {/* Conditional rendering of the loader */}
          <div className="login-content">
            <form
              className="login_Fm"
              onSubmit={handleSubmit}
              style={{
                animation:
                  "slide-in-right .3s cubic-bezier(.25,.46,.45,.94) both",
              }}
            >
              <div className=":uno: container-form w-full bg-half-black rd-$radius">
                {/* <div className=":uno: base-user-tab flex items-center justify-center">
                  <Link
                    className=":uno: tab-item h-full flex cursor-pointer items-center justify-center active"
                    to="/"
                  >
                    {t("email_login")}
                  </Link>
                  <Link
                    className=":uno: tab-item h-full flex cursor-pointer items-center justify-center"
                    to="/phone-login"
                  >
                    {t("phone_login")}
                  </Link>
                </div> */}
                <h2 className="fs-4 fw-semibold">Login</h2>
                <div className="base-input is-text">
                  {/* <div className="label">{t("email")}</div> */}
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      type="email"
                      className="w-full"
                      id="email"
                      placeholder={t("email")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-right-slot"></div>
                  {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </div>
                <div className="base-input is-password">
                  {/* <div className="label">{t("password")}</div> */}
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

                {/* LOGIN SIGNUP BUTTONS */}
                <div className="tools mt-4">
                  <div className=":uno: flex items-center justify-center">
                    <Button
                      variant="primary"
                      size="lg"
                      type="submit"
                      className="base-main-btn-content mx-0"
                    >
                      <div>{t("sign_in")}</div>
                    </Button>
                  </div>

                  <div
                    className="mt-4 text-center"
                    style={{ marginBottom: "20px" }}
                  >
                    <Link
                      to="/register"
                      className="register cursor-pointer text-link d-block"
                    >
                      {t("sign_up")}
                    </Link>
                  </div>
                </div>

                {/* tab-content2 ends */}
              </div>
              <div className=":uno: mt-12px flex items-center justify-end"></div>
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
    </div>
  );
}

export default App;
