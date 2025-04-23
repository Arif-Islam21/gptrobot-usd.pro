import { useEffect, useState } from "react";
import logo from "../../assets/images/1x/logoNew.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header = ({ toggleLangPopup, toggleTelegramPopUp }) => {
  const [isScrolled, setScroll] = useState(false);
  const { t, i18n } = useTranslation();

  // Set default language on first visit
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (!savedLanguage) {
      i18n.changeLanguage("en"); // Set English as default language
      localStorage.setItem("language", "en"); // Store default language
    }
  }, [i18n]);

  // Get the current language from i18n
  const currentLanguage = i18n.language || "en"; // Default to 'en' if undefined
  const displayLanguage =
    currentLanguage === "en"
      ? "English"
      : currentLanguage === "id"
      ? "Indonesian"
      : currentLanguage === "vi"
      ? "Vietnamese"
      : currentLanguage === "ja"
      ? "Japanese"
      : currentLanguage === "pt"
      ? "Portuguese"
      : currentLanguage === "ar"
      ? "Arabic"
      : currentLanguage === "th"
      ? "Thai"
      : currentLanguage === "es"
      ? "Spanish"
      : currentLanguage === "de"
      ? "German"
      : currentLanguage === "fr"
      ? "French"
      : currentLanguage === "it"
      ? "Italian"
      : currentLanguage === "ko"
      ? "Korean"
      : currentLanguage === "tr"
      ? "Turkish"
      : currentLanguage === "ru"
      ? "Russian"
      : currentLanguage === "fa"
      ? "Persian"
      : currentLanguage === "ms"
      ? "Malay"
      : currentLanguage === "bn"
      ? "Bengali"
      : currentLanguage === "az"
      ? "Azerbaijani"
      : currentLanguage === "zh-CN"
      ? "Simplified Chinese"
      : currentLanguage === "zh-TW"
      ? "Traditional Chinese"
      : currentLanguage;

  // Handle scrolling for the navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      home-nav=""
      id="navbar"
      className={
        isScrolled
          ? "header nav-bar-wrap h-style is-scroll-state"
          : "header nav-bar-wrap h-style"
      }
    >
      <div className="nav-bar">
        <div id="navBarItem26" className=":uno: nav-bar-content h-full w-full">
          <div className="w-full flex items-center justify-center">
            <div className="left name text-18px!">
              <div className=":uno: base-logo flex items-center small-logo">
                <img className="site-img h-full w-full rd-50%" src={logo} />
              </div>
              <span className="text-truncate text-uppercase">
                make-tron.art
              </span>
            </div>
            <div className="right">
              <Link to="/notice" className="base-alarm-logo-btn cursor-pointer">
                <div className="i-mdi:email-mark-as-unread text-18px"></div>
              </Link>
              <div
                className="base-help-btn cursor-pointer"
                onClick={toggleTelegramPopUp}
              >
                <div className="i-ri:customer-service-2-line text-18px"></div>
              </div>
              <div>
                <div className="base-lang-wrap" onClick={toggleLangPopup}>
                  <div className="i-ph:globe mr-2px text-18px c-$btn-text"></div>
                  <span className="c-$btn-text" id="languageSelect">
                    {displayLanguage}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
