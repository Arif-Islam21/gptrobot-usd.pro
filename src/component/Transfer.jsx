import SingleHeader from "./extra/SingleHeader";
import { useTranslation } from "react-i18next";
import CustomLoader from "./extra/customLoader";

import { useEffect, useState } from "react";
import axios from "axios";

const Transfer = () => {
  const [hideShowPass, setHideShowPass] = useState(false);
  const handlePassHideShow = () => {
    setHideShowPass(!hideShowPass);
  };

  const [data, setData] = useState({});
  const [amount, setAmount] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("api/auth/user");

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setIsLoading(true);
    try {
      // Prepare the data to send
      const formData = {
        amount,
        password
      };

      // Send POST request
      const response = await axios.post("api/transfer", formData);

      if (response.data.message) {
        setAlertMessage(response.data.message);
        setAlertVisible(true);
      }

      setTimeout(() => {
        setAlertVisible(false);
        if (response.data.success) {
          fetchData();
        }
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle the error (show error message, etc.)
      setAlertMessage("An error occurred. Please try again.");
      setAlertVisible(true);

      // Hide the alert after 2 seconds
      setTimeout(() => {
        setAlertVisible(false);
      }, 2000);
    } finally {
      setIsLoading(false); // Hide loader when the request is completed
    }
  };

  const { t } = useTranslation();
  return (
    <div>
      <div data-v-app="" id="app" className="a-t-1 no-4">
        <div className="box-border min-h-full w-full pt-45px">
          <SingleHeader></SingleHeader>
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
          {isLoading ? <CustomLoader isLoading={isLoading} /> : null}
          <div data-v-ff2bea11="" className="transfer-wrap p-$mg">
            <div
              data-v-ff2bea11=""
              className="transfer-type d-flex align-items-center pt-20px pb-20px active"
            >
              <div
                data-v-ff2bea11=""
                className="transfer-type-item w-[calc((100%-30px)/2)] text-center"
              >
                <div data-v-ff2bea11="" className="text-xs">
                  {t("withdrawal_account")}
                </div>
                <div data-v-ff2bea11="" className="font-mono text-xl font-bold">
                  {data?.withdraw_balance} USDT
                </div>
              </div>
              <div
                data-v-ff2bea11=""
                className=":uno: transfer-icon ml-10px mr-10px h-40px w-40px flex shrink-0 items-center justify-center rd-50% bg-$primary"
              >
                <div
                  data-v-ff2bea11=""
                  className="i-bx-transfer-alt text-26px text-white"
                ></div>
              </div>
              <div
                data-v-ff2bea11=""
                className="transfer-type-item w-[calc((100%-30px)/2)] text-center"
              >
                <div data-v-ff2bea11="" className="text-xs">
                  {t("basic_account")}
                </div>
                <div data-v-ff2bea11="" className="font-mono text-lg font-bold">
                  {parseFloat(data?.balance || 0).toFixed(2)} USDT
                </div>
              </div>
            </div>
            {/* balance part ends */}
            <div
              data-v-ff2bea11=""
              className="transfer_input pt-2 w-full rd-$radius"
            >
              <form data-v-ff2bea11="" onSubmit={handleSubmit}>
                <div data-v-ff2bea11="" className="base-input is-number">
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      maxLength={140}
                      autoComplete="off"
                      type="text"
                      placeholder="Amount to be converted"
                      className="w-full"
                      name="amount"
                      onChange={(e) => setAmount(e.target.value)}
                    />
                    <div className="input-right-slot"></div>
                  </div>
                </div>
                <div data-v-ff2bea11="" className="base-input is-password">
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      placeholder="Password"
                      className="w-full"
                      type={hideShowPass ? "text" : "password"}
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div
                      className="input-pwd-eye-slot cursor-pointer"
                      onClick={handlePassHideShow}
                    >
                      <div className="input-pwd-eye">
                        <div
                          className={`c_new_passeye2 ${
                            hideShowPass
                              ? "i-mdi-eye-outline"
                              : "i-mdi-eye-off-outline"
                          }`}
                        ></div>
                      </div>
                    </div>
                    <div className="input-right-slot"></div>
                  </div>
                </div>
                <button
                  data-v-ff2bea11=""
                  className=":uno: base-main-btn flex mt-4 d-block items-center justify-center w-100"
                >
                  <div className="base-main-btn-content">{t("confirm")}</div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
