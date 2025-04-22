import taskhall2 from "../../../assets/images/task/taskhall_2.webp";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const HomeTaskHall = ({ showPopup, userData }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const clickRecharge = () => {
    navigate("/recharge-method");
  };
  const clickRecharge2 = () => {};

  return (
    <div data-v-7cad3bed="" className="store">
      <div data-v-7cad3bed="" className="title">
        {t("task_hall")}
      </div>
      <div data-v-7cad3bed="" className="store-content">
        {userData?.vips?.map((item, index) => (
          <div
            data-v-7cad3bed=""
            key={index}
            className={
              item.unlock ? "store-item colorful" : "store-item colorful upgrd"
            }
            onClick={item.unlock ? clickRecharge2 : clickRecharge}
          >
            <div data-v-7cad3bed="" className="item-content">
              <div data-v-7cad3bed="" className="store-img">
                <img
                  data-v-7cad3bed=""
                  src={`${axios.defaults.baseURL}${item.image}`}
                  loading="lazy"
                />
              </div>
              {/* store img ends */}
              <div data-v-7cad3bed="" className="store-tools">
                <div data-v-7cad3bed="" className="store-info">
                  <div data-v-7cad3bed="" className="mb-5px">
                    <div
                      data-v-7cad3bed=""
                      className="mr-5px text-12px lh-12px c-$text-gray"
                    >
                      {t("order_commission")}
                    </div>
                    <div data-v-7cad3bed="" className="top">
                      <div
                        data-v-7cad3bed=""
                        className="font-anton rate c-green"
                      >
                        $ {item.income_from}
                      </div>
                    </div>
                  </div>
                  <div data-v-7cad3bed="" className="content">
                    <div data-v-7cad3bed="" className="label">
                      GPTROBOT-USD{item.id}
                    </div>
                  </div>
                </div>
                <div data-v-7cad3bed="" className="action-box">
                  <div
                    data-v-7cad3bed=""
                    className="i-material-symbols:keyboard-double-arrow-right"
                  ></div>
                </div>
              </div>
              {/* store tools ends */}
              {item.unlock ? (
                <div></div>
              ) : (
                <div data-v-7cad3bed="" className="mask">
                  <div data-v-7cad3bed="" className="lock-box">
                    <div
                      data-v-7cad3bed=""
                      className="i-solar-lock-keyhole-minimalistic-linear text-30px c-#fff"
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTaskHall;
