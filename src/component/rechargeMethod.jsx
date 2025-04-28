//all packages
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

//all css/images
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
import "../styles/rechargeMethod.css";

import logo from "../assets/images/logo.webp";
import trc20 from "../assets/images/trc20-usdt.jpg";
import trx from "../assets/images/trx.webp";
import Bep20 from "../assets/images/bep20_usdt_icon-rJ8-h2ZE.png";
import bnb from "../assets/images/bnb_icon-C7ti1KQ3.png";
import Barcode from "../assets/images/barcode.gif";
import { IoMdArrowDropright } from "react-icons/io";

//component
import CustomLoader from "./extra/customLoader";
// import SupportLink from "./extra/supportLink";
import SingleHeader from "./extra/SingleHeader";
import SupportLink from "./extra/supportLink";
import TelegramPopUp from "./extra/TelegramPopUp";
import { useState } from "react";

const rechargeMethod = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page in history
  };
  // telegram popup
  const [isTelegramVisible, setIsTelegramVisible] = useState(false);
  const toggleTelegramPopUp = () => {
    setIsTelegramVisible(!isTelegramVisible);
  };
  return (
    <div id="app" className="a-t-1 no-4">
      <div className="box-border min-h-full w-full pt-45px">
        <SingleHeader></SingleHeader>
        {/* <div className="p-$mg">
          <div rc-page="" className=":uno: bg-transparent shadow-none">
            <Link rc-page="" className="recharge-item" to="/recharge">
              <div rc-page="" className="flex items-center">
                <img
                  rc-page=""
                  src={trc20}
                  className="h-26.48px w-26.48px shrink-0"
                />
                <span rc-page="" className="name">
                  TRC20-USDT
                </span>
              </div>
              <div rc-page="" className="flex items-center">
                <div
                  rc-page=""
                  className="i-material-symbols:arrow-forward-ios h-20px w-20px text-$text-gray"
                ></div>
              </div>
            </Link>
            <Link rc-page="" className="recharge-item" to="/recharge-trx">
              <div rc-page="" className="flex items-center">
                <img
                  rc-page=""
                  src={trx}
                  className="h-26.48px w-26.48px shrink-0"
                />
                <span rc-page="" className="name">
                  TRX
                </span>
              </div>
              <div rc-page="" className="flex items-center">
                <div
                  rc-page=""
                  className="i-material-symbols:arrow-forward-ios h-20px w-20px text-$text-gray"
                ></div>
              </div>
            </Link>
            <Link rc-page="" className="recharge-item" to="/recharge-bep20">
              <div rc-page="" className="flex items-center">
                <img
                  rc-page=""
                  src={Bep20}
                  className="h-26.48px w-26.48px shrink-0"
                />
                <span rc-page="" className="name">
                  Bep20-USDT
                </span>
              </div>
              <div rc-page="" className="flex items-center">
                <div
                  rc-page=""
                  className="i-material-symbols:arrow-forward-ios h-20px w-20px text-$text-gray"
                ></div>
              </div>
            </Link>
            <Link rc-page="" className="recharge-item" to="/recharge-bnb">
              <div rc-page="" className="flex items-center">
                <img
                  rc-page=""
                  src={bnb}
                  className="h-26.48px w-26.48px shrink-0"
                />
                <span rc-page="" className="name">
                  BNB
                </span>
              </div>
              <div rc-page="" className="flex items-center">
                <div
                  rc-page=""
                  className="i-material-symbols:arrow-forward-ios h-20px w-20px text-$text-gray"
                ></div>
              </div>
            </Link>
          </div>
        </div> */}
        <div
          className="container py-4"
          style={{ backgroundColor: "transparent", minHeight: "100vh" }}
        >
          <h2 className="text-white fs-4 mb-4">
            Choose currency to continue with:
          </h2>

          <div className="d-flex flex-column gap-3">
            <Link
              to="/recharge"
              className="currency-btn d-flex justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center gap-2">
                <img src={trc20} alt="TRC20" className="currency-icon" />
                <span className="currency-text">TRC20-USDT</span>
              </div>
              <i className="bi bi-chevron-right text-white fs-4"></i>
            </Link>

            <Link
              to="/recharge-trx"
              className="currency-btn d-flex justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center gap-2">
                <img src={trx} alt="TRX" className="currency-icon" />
                <span className="currency-text">TRX</span>
              </div>
              <i className="bi bi-chevron-right text-white fs-4"></i>
            </Link>

            <Link
              to="/recharge-bep20"
              className="currency-btn d-flex justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center gap-2">
                <img src={Bep20} alt="BEP20" className="currency-icon" />
                <span className="currency-text">BEP20-USDT</span>
              </div>
              <i className="bi bi-chevron-right text-white fs-4"></i>
            </Link>

            <Link
              to="/recharge-bnb"
              className="currency-btn d-flex justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center gap-2">
                <img src={bnb} alt="BNB" className="currency-icon" />
                <span className="currency-text">BNB</span>
              </div>
              <i className="bi bi-chevron-right text-white fs-4"></i>
            </Link>
          </div>
        </div>
      </div>

      <CustomLoader />

      <TelegramPopUp
        isTelegramVisible={isTelegramVisible}
        toggleTelegramPopUp={toggleTelegramPopUp}
      />
    </div>
  );
};

export default rechargeMethod;
