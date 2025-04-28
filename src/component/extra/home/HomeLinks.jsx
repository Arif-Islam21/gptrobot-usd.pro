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
import recharge from "../../../assets/images/coins/dollar.png";
import withdraw from "../../../assets/images/coins/withdraw.png";
import invite from "../../../assets/images/coins/invite.png";
import team from "../../../assets/images/coins/team.png";
import about from "../../../assets/images/coins/about.png";
import ann from "../../../assets/images/coins/ann.png";
import AnnouncementExtra from "../../partial/AnnouncementExtra";

const HomeLinks = () => {
  const { t } = useTranslation();
  const [isLoader, setIsLoader] = useState(false);
  const [show, setShow] = useState(false);

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
                <img src={recharge} alt="recharge" />
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
                <img src={withdraw} alt="recharge" />
              </div>
              <div className="small">{t("withdraw")}</div>
            </Link>
          </Col>

          <Col xs={4} className="text-center">
            <div>
              <Link to="/team" className="text-decoration-none text-white">
                <div className="icon-wrapper mb-2">
                  <img src={invite} alt="recharge" />
                </div>
                <div className="small">{t("Invite")}</div>
              </Link>
            </div>
          </Col>

          <Col xs={4} className="text-center">
            <Link to="/team" className="text-decoration-none text-white">
              <div className="icon-wrapper mb-2">
                <img src={team} alt="recharge" />
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
                <img src={about} alt="recharge" />
              </div>
              <div className="small">{t("About Us")}</div>
            </Link>
          </Col>

          <Col xs={4} className="text-center">
            <div
              onClick={() => setShow(true)}
              className="text-decoration-none text-white"
            >
              <div className="icon-wrapper mb-2">
                <img src={ann} alt="recharge" />
              </div>
              <div className="small">{t("announcement")}</div>
            </div>
          </Col>
        </Row>
      </Container>
      <AnnouncementExtra show={show} setShow={setShow} />
    </div>
  );
};

export default HomeLinks;
