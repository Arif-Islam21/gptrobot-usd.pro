import { useTranslation } from "react-i18next";
const HomeNotice = () => {
  const noticeContent = {
    transitionDuration: "755.666s",
    transform: "translateX(-45339.9px)",
  };
  const { t } = useTranslation();
  return (
    <div data-v-7cad3bed="" className="notice-info">
      <div data-v-7cad3bed="" className="volume-icon">
        <div
          data-v-7cad3bed=""
          className="icon i-icon-park-outline:volume-notice text-18px c-$btn-text"
        ></div>
      </div>
      <div data-v-7cad3bed="" role="alert" className="van-notice-bar">
        <div role="marquee" className="van-notice-bar__wrap">
          <div className="van-notice-bar__content" style={noticeContent}>
            {t("home_welcome_notice")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNotice;
