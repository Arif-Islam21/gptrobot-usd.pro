import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import recharge_icon from "../../../assets/images/recharge_icon.png";
import withdraw_icon from "../../../assets/images/withdraw_icon.png";
import app_icon from "../../../assets/images/app_icon.png";
import company_profile_icon from "../../../assets/images/company_profile_icon.png";
import axios from "axios";
import Loader from "../../../component/extra/loader";
import { useState } from "react";
import "../../../styles/homeLinks.css";
import { CiLogout } from "react-icons/ci";
import { IoCloudDownload } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { FcInvite } from "react-icons/fc";
import { GrAnnounce } from "react-icons/gr";
import { Container, Row, Col, Button, Card, Spinner } from "react-bootstrap";

const HomeLinks = () => {
  const { t } = useTranslation();
  const [isLoader, setIsLoader] = useState(false);

  // Detect the user's operating system
  const getOperatingSystem = () => {
    const userAgent =
      window.navigator.userAgent || window.navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "ios";
    }

    if (/android/i.test(userAgent)) {
      return "apk";
    }

    if (navigator.platform.indexOf("Win") !== -1) {
      return "apk";
    }

    if (navigator.platform.indexOf("Mac") !== -1) {
      return "ios";
    }

    if (navigator.platform.indexOf("Linux") !== -1) {
      return "apk";
    }

    return "Unknown OS";
  };

  const downloadApp = () => {
    // Specify the file path
    const filePath = `https://usdt-uk.com/assets/usdt-uk.apk`; // Adjust the filename and extension as needed

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "usdt-uk.apk"; // Specify the default download name
    link.click();
  };

  const fetchData = async (device, domain) => {
    try {
      setIsLoader(true);

      const url = `https://GLIDEMALLmall.com/myapp/api/app/download?os=${device}&domain=${domain}`;

      // Open the new tab
      const newTab = window.open(url, "_blank");

      // Close the tab after 2 seconds
      setTimeout(() => {
        if (newTab) {
          newTab.close();
        }
      }, 2000);

      setIsLoader(false);
    } catch (error) {
      setIsLoader(false);
      console.error("Error fetching data:", error);
    }
  };

  return (
    // <div
    //   to="/recharge-method"
    //   data-v-7cad3bed=""
    //   className=" py-2 bg-primary rounded mt-4"
    // >
    //   {isLoader ? <Loader /> : null}
    //   <div className="container">
    //     <div className=" row g-2 gx-3 mb-2">
    //       <Link
    //         to="/recharge-method"
    //         data-v-7cad3bed=""
    //         className="linkButton p-3 col-4 d-flex align-items-center justify-content-center flex-column rounded cursor-pointer"
    //       >
    //         <div data-v-7cad3bed="" className="">
    //           <i className="bi bi-cash-stack fs-3"></i>
    //         </div>
    //         <div data-v-7cad3bed="" className="label">
    //           {t("recharge")}
    //         </div>
    //       </Link>
    //       {/* part cursor end */}
    //       <Link
    //         to="/withdraw-trx"
    //         data-v-7cad3bed=""
    //         className="linkButton p-3 col-4 d-flex align-items-center gap-2 justify-content-around flex-column rounded cursor-pointer"
    //       >
    //         <div data-v-7cad3bed="" className="">
    //           <CiLogout className="fs-3" />
    //         </div>
    //         <div data-v-7cad3bed="" className="label">
    //           {t("withdraw")}
    //         </div>
    //       </Link>
    //       {/* part cursor end */}
    //       <div
    //         data-v-7cad3bed=""
    //         className="linkButton p-3 col-4 d-flex align-items-center justify-content-center flex-column rounded cursor-pointer"
    //         onClick={downloadApp}
    //       >
    //         <Link
    //           target="_blank"
    //           to="https://usdt-uk.com/assets/images/usdt_uk.apk"
    //         >
    //           <div data-v-7cad3bed="" className="">
    //             <IoCloudDownload className="fs-3" />
    //           </div>
    //           <div data-v-7cad3bed="" className="label">
    //             {t("app")}
    //           </div>
    //         </Link>
    //       </div>
    //     </div>
    //     <div className=" row g-2 gx-3 mb-2">
    //       {/* part cursor end */}
    //       <Link
    //         to="/company-profile"
    //         data-v-7cad3bed=""
    //         className="linkButton p-3 col-4 d-flex align-items-center justify-content-center flex-column rounded cursor-pointer"
    //       >
    //         <div data-v-7cad3bed="" className="icon">
    //           <FaClipboardList className="fs-3" />
    //         </div>
    //         <div data-v-7cad3bed="" className="label">
    //           {t("company_profile")}
    //         </div>
    //       </Link>
    //       <Link
    //         to="/company-profile"
    //         data-v-7cad3bed=""
    //         className="linkButton p-3 col-4 d-flex align-items-center justify-content-center flex-column rounded cursor-pointer"
    //       >
    //         <div data-v-7cad3bed="" className="icon">
    //           <FcInvite className="fs-3" />
    //         </div>
    //         <div data-v-7cad3bed="" className="label">
    //           {t("invite")}
    //         </div>
    //       </Link>
    //       <Link
    //         to="/company-profile"
    //         data-v-7cad3bed=""
    //         className="linkButton p-3 col-4 d-flex align-items-center justify-content-center flex-column rounded cursor-pointer"
    //       >
    //         <div data-v-7cad3bed="" className="icon">
    //           <GrAnnounce className="fs-3" />
    //         </div>
    //         <div data-v-7cad3bed="" className="label">
    //           {t("announcement")}
    //         </div>
    //       </Link>
    //     </div>
    //   </div>
    //   {/* part cursor end */}
    // </div>

    <div className="py-3 bg-dark rounded-4 mt-4">
      {isLoader && (
        <div className="d-flex justify-content-center mb-3">
          <Loader />
        </div>
      )}
      <Container>
        <Row className="g-4">
          <Col xs={4} className="text-center">
            <Link
              to="/recharge-method"
              className="text-decoration-none text-white"
            >
              <div className="icon-wrapper mb-2">
                <i className="bi bi-cash-stack fs-3"></i>
              </div>
              <div className="small">{t("recharge")}</div>
            </Link>
          </Col>

          <Col xs={4} className="text-center">
            <Link
              to="/withdraw-trx"
              className="text-decoration-none text-white"
            >
              <div className="icon-wrapper mb-2">
                <CiLogout className="fs-3" />
              </div>
              <div className="small">{t("withdraw")}</div>
            </Link>
          </Col>

          <Col xs={4} className="text-center">
            <div onClick={downloadApp}>
              <Link
                target="_blank"
                to="https://usdt-uk.com/assets/images/usdt_uk.apk"
                className="text-decoration-none text-white"
              >
                <div className="icon-wrapper mb-2">
                  <IoCloudDownload className="fs-3" />
                </div>
                <div className="small">{t("app")}</div>
              </Link>
            </div>
          </Col>

          <Col xs={4} className="text-center">
            <Link
              to="/company-profile"
              className="text-decoration-none text-white"
            >
              <div className="icon-wrapper mb-2">
                <FaClipboardList className="fs-3" />
              </div>
              <div className="small">{t("team")}</div>
            </Link>
          </Col>

          <Col xs={4} className="text-center">
            <Link
              to="/company-profile"
              className="text-decoration-none text-white"
            >
              <div className="icon-wrapper mb-2">
                <i className="bi bi-info-circle fs-3"></i>
              </div>
              <div className="small">{t("about_us")}</div>
            </Link>
          </Col>

          <Col xs={4} className="text-center">
            <Link
              to="/company-profile"
              className="text-decoration-none text-white"
            >
              <div className="icon-wrapper mb-2">
                <GrAnnounce className="fs-3" />
              </div>
              <div className="small">{t("announcement")}</div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeLinks;
