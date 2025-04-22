import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios"; // Optional, if using Axios

const Navbar = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/checkdepo");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch data immediately when the component mounts
    fetchData();
  }, []);

  return (
    <div className=":uno: tab-bar-wrap tab-bar-wrap-26 fixed bottom-0 z-2">
      <nav className="tab-bar">
        <NavLink to="/home" className="tab-item">
          <div tab-btn="" id="tabItem" className="tab-item-inner">
            <div
              tab-btn=""
              className="tab-item-icon i-ph:house-line-duotone c-$text-gray6"
            ></div>
            <div tab-btn="" className="tab-item-label">
              {t("home")}
            </div>
          </div>
        </NavLink>
        <NavLink to="/task" className="tab-item">
          <div tab-btn="" id="tabItem" className="tab-item-inner">
            <div
              tab-btn=""
              className="tab-item-icon i-ic:twotone-task c-$text-gray6"
            ></div>
            <div tab-btn="" className="tab-item-label c-$text-gray6">
              {t("task")}
            </div>
          </div>
        </NavLink>
        <NavLink to="/team" className="tab-item">
          <div tab-btn="" id="tabItem" className="tab-item-inner">
            <div
              tab-btn=""
              className="tab-item-icon i-solar:users-group-two-rounded-bold-duotone c-$text-gray6"
            ></div>

            <div tab-btn="" className="tab-item-label c-$text-gray6">
              {t("team")}
            </div>
          </div>
        </NavLink>
        <NavLink to="/vip" className="tab-item">
          <div tab-btn="" id="tabItem" className="tab-item-inner">
            <div
              tab-btn=""
              className="tab-item-icon i-icon-park-twotone:vip-one c-$text-gray6"
            ></div>

            <div tab-btn="" className="tab-item-label c-$text-gray6">
              {t("vip")}
            </div>
          </div>
        </NavLink>
        <NavLink to="/me" className="tab-item">
          <div tab-btn="" id="tabItem" className="tab-item-inner">
            <div
              tab-btn=""
              className="tab-item-icon i-ph:user-duotone c-$text-gray6"
            ></div>
            <div tab-btn="" className="tab-item-label c-$text-gray6">
              {t("me")}
            </div>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
