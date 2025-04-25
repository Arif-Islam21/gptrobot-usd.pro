import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

// fontawesome

import AuthTop from "../extra/authTopPart";

import { useTranslation } from "react-i18next";
//all css
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
import "../../styles/login.css";
import LanguagePopUp from "../extra/LanguagePopUp";
import TelegramPopUp from "../extra/TelegramPopUp";

import CustomLoader from "../extra/customLoader";
import Loader from "../extra/loader";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invitation_code, setInvitationcode] = useState("");
  const [password_confirmation, setPasswordconfirmation] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    invitation_code: "",
    password_confirmation: "",
  });
  const type = "email";
  const { t, i18n } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const location = useLocation(); // useLocation hook to access the URL
  const handleLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };

  const [isLoader, setIsLoader] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    // Parse the URL parameters
    const params = new URLSearchParams(location.search);
    const ic = params.get("ic"); // Get the invitation code from the URL

    if (ic) {
      localStorage.setItem("invitation_code", ic); // Store the invitation code in local storage
      setInvitationcode(ic); // Set the invitation code in state
    } else {
      // Check if the invitation code exists in local storage
      const storedIc = localStorage.getItem("invitation_code");
      if (storedIc) {
        setInvitationcode(storedIc); // Set the invitation code from local storage
      }
    }
  }, [location.search]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      email,
      password,
      invitation_code,
      password_confirmation,
      type,
    };

    try {
      setIsLoader(true);
      const response = await axios.post("api/register", formData);

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
  const [eye2Outline, setEye2Outline] = useState(true);
  const toggleEye = () => {
    setEyeOutline(!eyeOutline);
  };
  const toggleEye2 = () => {
    setEye2Outline(!eye2Outline);
  };
  // password requirements
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const checkPasswordStrength = () => {
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const passwordLength = password.length;

    // No mark when password is empty
    if (passwordLength === 0) {
      return { step1: "d-none", step2: "d-none", step3: "d-none" };
    }

    // Step 1: Red if password has at least one character
    if (passwordLength > 0) {
      // Step 2: Yellow if password is > 6 and has a number
      if (passwordLength > 6 && hasNumber.test(password)) {
        // Step 3: Green if password has both number and special character
        if (hasSpecialChar.test(password)) {
          return {
            step1: "bg-#09c497!",
            step2: "bg-#09c497!",
            step3: "bg-#09c497!",
          }; // All steps green
        }
        return { step1: "bg-yellow", step2: "bg-yellow", step3: "d-none" }; // First two steps yellow
      }
      return { step1: "bg-#ce4040!", step2: "d-none", step3: "d-none" }; // First step red
    }
  };

  const passwordStrength = checkPasswordStrength();
  return (
    <div id="app" className="a-t-1 no-4">
      <div className="login">
        <div className=":uno: container-login relative d-flex align-items-center justify-content-center">
          {/* <AuthTop
            selectedLanguage={selectedLanguage}
            toggleLangPopup={toggleLangPopup}
            toggleTelegramPopUp={toggleTelegramPopUp}
          ></AuthTop> */}
          {/* <!-- top-info ends --> */}

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

          {isLoader ? <Loader /> : null}

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
              <div className=":uno: container-form w-full bg-light-blue rd-$radius">
                {/* TAB ICONS ARE HERE */}
                {/* <div className=":uno: base-user-tab flex items-center justify-center">
                  <Link
                    className=":uno: tab-item h-full flex cursor-pointer items-center justify-center active"
                    to="/register"
                  >
                    {t("RegisterByEmail")}
                  </Link>
                  <Link
                    className="::uno: tab-item h-full flex cursor-pointer items-center justify-center"
                    to="/phone-register"
                  >
                    {t("RegisterByPhone")}
                  </Link>
                </div> */}
                <h2 className="fs-4 fw-bold">Sign Up</h2>
                <div className="base-input is-text">
                  {/* <div className="label">{t("email")}</div> */}
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      type="text"
                      className="w-full custom-placeholder"
                      placeholder={t("User Name")}
                      id="userName"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="input-right-slot"></div>
                  </div>
                  {/* {errors.email && (
                    <small className="text-danger">{errors.userName}</small>
                  )} */}
                </div>
                <div className="base-input is-text">
                  {/* <div className="label">{t("email")}</div> */}
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      type="email"
                      className="w-full custom-placeholder"
                      placeholder={t("email")}
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="input-right-slot"></div>
                  </div>
                  {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </div>
                <div className="base-input is-password">
                  {/* <div className="label">{t("password")}</div> */}
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      type={eye2Outline ? "password" : "text"}
                      className="w-full"
                      id="password"
                      placeholder={t("password")}
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <div
                      className="input-pwd-eye-slot cursor-pointer"
                      onClick={toggleEye2}
                    >
                      <div
                        id="eye"
                        className={`icon ${
                          eye2Outline
                            ? "i-mdi-eye-outline"
                            : "i-mdi-eye-off-outline"
                        }`}
                      ></div>
                    </div>
                    <div className="input-right-slot"></div>
                  </div>
                  <div className={`base-input-pwd-check-wrap`}>
                    <div
                      className={`base-input-pwd-check-step ${passwordStrength.step1}`}
                    ></div>
                    <div
                      className={`base-input-pwd-check-step ${passwordStrength.step2}`}
                    ></div>
                    <div
                      className={`base-input-pwd-check-step ${passwordStrength.step3}`}
                    ></div>
                  </div>
                  {/* password requirement */}
                  {errors.password && (
                    <small className="text-danger">{errors.password}</small>
                  )}
                </div>
                <div className="base-input is-password">
                  {/* <div className="label">{t("re_enter_password")}</div> */}
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      type={eyeOutline ? "password" : "text"}
                      className="w-full"
                      id="password_confirmation"
                      placeholder={t("re_enter_password")}
                      value={password_confirmation}
                      onChange={(e) => setPasswordconfirmation(e.target.value)}
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

                  {errors.password_confirmation && (
                    <small className="text-danger">
                      {errors.password_confirmation}
                    </small>
                  )}
                </div>
                <div className="base-input">
                  {/* <div className="label">{t("invitation_code")}</div> */}
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      type="text"
                      className="w-full"
                      id="invitation_code"
                      placeholder={t("invitation_code")}
                      value={invitation_code}
                      onChange={(e) => setInvitationcode(e.target.value)}
                    />
                    <div className="input-right-slot"></div>
                  </div>
                  {errors.invitation_code && (
                    <small className="text-danger">
                      {errors.invitation_code}
                    </small>
                  )}
                </div>
                <div className="tools mt-5px">
                  <div className=":uno: my-3 flex items-center justify-center">
                    <Button
                      variant="success"
                      size="lg"
                      type="submit"
                      className="w-100"
                    >
                      <div>{t("sign_up")}</div>
                    </Button>
                  </div>

                  <div className="mt-10px text-center">
                    <Link
                      to="/"
                      className="register cursor-pointer nav-underline d-block"
                    >
                      {t("sign_in")}
                    </Link>
                  </div>
                </div>
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
