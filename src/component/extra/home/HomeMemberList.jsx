import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../../assets/css/swipeMember.css";
import "../../../styles/topMember.css";
const fakeData = [
  { email: "ll*****@gmail.com", vip: "VIP6", amount: "+$1,145.00" },
  { email: "so*****@walker.org", vip: "VIP5", amount: "+$872.00" },
  { email: "ha*****@yahoo.com", vip: "VIP2", amount: "+$315.00" },
  { email: "dr*****@carlson.biz", vip: "VIP4", amount: "+$562.00" },
  { email: "co*****@riley.com", vip: "VIP6", amount: "+$1,190.00" },
  { email: "je*****@gmail.com", vip: "VIP4", amount: "+$729.00" },
  { email: "wi*****@lee.com", vip: "VIP1", amount: "+$368.00" },
  { email: "au*****@anderson.com", vip: "VIP2", amount: "+$458.00" },
  { email: "mc*****@ross.com", vip: "VIP5", amount: "+$715.00" },
  { email: "ch*****@parker.biz", vip: "VIP5", amount: "+$532.00" },
  { email: "zo*****@cole.com", vip: "VIP4", amount: "+$402.00" },
  { email: "bc*****@wallace.com", vip: "VIP4", amount: "+$618.00" },
  { email: "ct*****@smith.info", vip: "VIP3", amount: "+$498.00" },
  { email: "bi*****@gmail.com", vip: "VIP5", amount: "+$987.00" },
  { email: "lr*****@barker.com", vip: "VIP2", amount: "+$234.00" },
  { email: "dw*****@chapman.biz", vip: "VIP4", amount: "+$764.00" },
  { email: "kr*****@edwards.biz", vip: "VIP5", amount: "+$1,042.00" },
  { email: "hm*****@bush.com", vip: "VIP1", amount: "+$126.00" },
  { email: "jl*****@outlook.com", vip: "VIP4", amount: "+$859.00" },
  { email: "ni*****@yahoo.com", vip: "VIP2", amount: "+$354.00" },
  { email: "do*****@cook.com", vip: "VIP6", amount: "+$765.00" },
  { email: "ec*****@ellis.info", vip: "VIP5", amount: "+$538.00" },
  { email: "mb*****@gmail.info", vip: "VIP4", amount: "+$413.00" },
  { email: "za*****@coleman.org", vip: "VIP1", amount: "+$198.00" },
  { email: "ac*****@lee.biz", vip: "VIP5", amount: "+$935.00" },
  { email: "pt*****@martin.com", vip: "VIP6", amount: "+$1,176.00" },
  { email: "da*****@patel.biz", vip: "VIP5", amount: "+$726.00" },
  { email: "ph*****@cox.com", vip: "VIP4", amount: "+$897.00" },
  { email: "mi*****@yahoo.com", vip: "VIP1", amount: "+$119.00" },
  { email: "lb*****@gmail.com", vip: "VIP6", amount: "+$1,100.00" },
  { email: "ki*****@hotmail.com", vip: "VIP4", amount: "+$754.00" },
  { email: "sh*****@gmail.com", vip: "VIP2", amount: "+$239.00" },
  { email: "no*****@gmail.com", vip: "VIP3", amount: "+$312.00" },
  { email: "co*****@hotmail.biz", vip: "VIP6", amount: "+$987.00" },
  { email: "tm*****@gmail.com", vip: "VIP2", amount: "+$274.00" },
  { email: "tb*****@yahoo.com", vip: "VIP5", amount: "+$629.00" },
  { email: "sy*****@allen.biz", vip: "VIP6", amount: "+$995.00" },
  { email: "ay*****@gmail.com", vip: "VIP4", amount: "+$341.00" },
  { email: "wb*****@gmail.com", vip: "VIP6", amount: "+$645.00" },
  { email: "je*****@gmail.com", vip: "VIP1", amount: "+$285.00" },
  { email: "ru*****@hotmail.com", vip: "VIP2", amount: "+$495.00" },
  { email: "st*****@yahoo.com", vip: "VIP6", amount: "+$698.00" },
];

const HomeMemberList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();
  // Function to go to the next member automatically
  const nextMember = () => {
    setTimeout(() => {
      const nextIndex = (currentIndex + 1) % fakeData.length;
      setCurrentIndex(nextIndex);
    }, 500); // Match this timeout with the CSS transition duration
  };

  // Set up automatic member change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextMember(); // Call the function to switch to the next member
    }, 2500); // Update every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentIndex]);

  // Get the current visible members (always 3)
  const visibleMembers = [
    fakeData[currentIndex],
    fakeData[(currentIndex + 1) % fakeData.length],
    fakeData[(currentIndex + 2) % fakeData.length],
  ];

  return (
    <div data-v-7cad3bed="" className="membership-list">
      <div data-v-7cad3bed="" className="title fs-3">
        {t("Top Investors")}
      </div>
      <div
        data-v-7cad3bed=""
        className={`swiper swiper-initialized swiper-vertical membership-content`}
      >
        {/* <div data-v-7cad3bed="" className="swiper-wrapper">
          {visibleMembers.map((member, index) => (
            <div
              data-v-7cad3bed=""
              className="swiper-slide membership-item"
              key={index}
            >
              <div data-v-7cad3bed="" className="left">
                <div data-v-7cad3bed="" className="vip text-black">
                  {member.vip}
                </div>
                <div data-v-7cad3bed="" className="name">
                  {member.email}
                </div>
              </div>
              <div data-v-7cad3bed="" className="right font-anton">
                {member.amount}
              </div>
            </div>
          ))}
        </div> */}
        <div className="swiper-wrapper">
          {visibleMembers.map((member, index) => (
            <div
              className="swiper-slide membership-item px-3 py-1 mb-3 rounded shadow-sm hover-shadow"
              key={index}
            >
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex flex-column">
                  <div className="vip text-uppercase text-success fw-bold fs-5 mb-1">
                    {member.vip}
                  </div>
                  <div className="name text-muted">{member.email}</div>
                </div>

                <div className="font-anton fs-4 text-primary fw-bold">
                  {member.amount}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeMemberList;
