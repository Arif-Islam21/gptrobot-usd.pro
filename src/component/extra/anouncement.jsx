// Announcement.js
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import banner from "../../assets/images/slider/homeSlider-3.png";

const Announcement = () => {
  const { t } = useTranslation();
  const messages = [
    ` <div class="container announcement_area">
    <h1>Announcement</h1>

    <div class="section">
      <p>Welcome to join <strong>GPTROBOT-USD Shopping and Financial Management Mall!</strong></p>
      <p><em>IN GOVERNMENT COMPANY</em></p>
      <p>Customer Service Telegram: <a href="https://t.me/TRONGBT56" target="_blank">https://t.me/TRONGBT56</a></p>
    </div>

    <div class="section vip-levels">
      <h2>VIP Levels and Daily Earnings</h2>
      <table>
        <tr>
          <th>VIP Level</th>
          <th>Deposit (USDT)</th>
          <th>Daily Earnings (USDT)</th>
        </tr>
        <tr>
          <td>VIP1</td>
          <td>50</td>
          <td>2.5</td>
        </tr>
        <tr>
          <td>VIP2</td>
          <td>100</td>
          <td>6</td>
        </tr>
        <tr>
          <td>VIP3</td>
          <td>200</td>
          <td>14</td>
        </tr>
        <tr>
          <td>VIP4</td>
          <td>500</td>
          <td>49</td>
        </tr>
        <tr>
          <td>VIP5</td>
          <td>1000</td>
          <td>90</td>
        </tr>
        <tr>
          <td>VIP6</td>
          <td>2000</td>
          <td>300</td>
        </tr>
        <tr>
          <td>VIP7</td>
          <td>3500</td>
          <td>385</td>
        </tr>
        <tr>
          <td>VIP8</td>
          <td>5000</td>
          <td>900</td>
        </tr>
        <tr>
          <td>VIP9</td>
          <td>8500</td>
          <td>1800</td>
        </tr>
        <tr>
          <td>VIP10</td>
          <td>15000</td>
          <td>3500</td>
        </tr>
      </table>
    </div>

    <div class="section important-info">
      <h2>Important Information</h2>
      <ul>
        <li><strong>Referral Commission:</strong></li>
        <ul>
          <li>Level 1: 10%</li>
          <li>Level 2: 3%</li>
          <li>Level 3: 2%</li>
        </ul>
        <br />
        <li>A Class A 10% rebate, deposit 1000 USDT and get 100 USDT</li>
        <li>Grade B 2% rebate, deposit 1000 USDT and get 20 USDT</li>
        <li>Class C 1% rebate, deposit 1000 USDT and get 10 USDT</li>
        <li>Share this website on TikTok, Facebook, Messenger, Twitter, ICQ, Gaga, IMVU, etc.</li>
        <li>Post profits/stake online to your social media, create a bigger team, and get more commissions!</li>
        <li>Stored value investment can only use USDT AND TRON currency (TRC20 network).</li>
        <li>Task update time is 24 hours. Complete merchant task orders daily, earn profits, and withdraw funds to your account.</li>
        <li>Withdrawals arrive in 1-3 minutes. No time limit, no upper limit on the amount, 24-hour withdrawal service.</li>
      </ul>
    </div>

    <div class="footer">
      &copy; 2025 GPTROBOT-USD Shopping Mall. All rights reserved.
    </div>
  </div>

        `,
  ];

  const [show, setShow] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    // Show the announcement after 2 seconds
    const showTimeout = setTimeout(() => {
      setShow(true);
    }, 2000);

    // Clear timeout if the component unmounts
    return () => {
      clearTimeout(showTimeout);
    };
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const handleNext = () => {
    setCurrentMessageIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentMessageIndex((prevIndex) => prevIndex - 1);
  };

  const handleAgree = () => {
    setShow(false);
  };

  return (
    <div
      id="homeModal"
      className={`van-popup van-popup--round van-popup--center van-safe-area-bottom van-popup-customer anounce-none ${
        show ? "show" : ""
      }`}
      style={{ zIndex: "2003", width: "95%", maxWidth: "620px" }}
    >
      <div data-v-909b9c13="" className="announce-wrap a-t-26">
        <div data-v-909b9c13="" className="container-card email-box p-0!">
          <div className="mb-12px pt-12px text-center text-20px font-bold text-$btn-text">
            <h4>{t("announcement")}</h4>
          </div>
          <div
            data-v-909b9c13=""
            className="mx-auto h-10px w-95% rounded-full bg-$primary"
          ></div>
          <div
            className="content absolute left-50% top-60px h-310px w-90% translate-x-[-50%] overflow-y-auto p-5px text-black shadow bg-white!"
            dangerouslySetInnerHTML={{ __html: messages[currentMessageIndex] }}
          />
          <div className="mt-320px w-full" style={{ marginTop: "327px" }}>
            <div data-v-909b9c13="" className="mt-10px flex justify-around">
              {currentMessageIndex === 0 && (
                <div className="mx-auto inline" onClick={handleClose}>
                  {t("close")}
                </div>
              )}
              {currentMessageIndex > 0 && (
                <div className="mx-auto inline" onClick={handlePrevious}>
                  {t("previous")}
                </div>
              )}
              {currentMessageIndex === 0 && (
                <div className="mx-auto inline" onClick={handleNext}>
                  {t("next")}
                </div>
              )}
              {currentMessageIndex === 1 && (
                <div className="mx-auto inline" onClick={handleAgree}>
                  {t("i_know")}
                </div>
              )}
            </div>
          </div>
          {/* buttons ends */}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
