import { FaArrowRight } from "react-icons/fa";

const InvestmentStats = () => {
  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-1 rounded">
        <h2 className="text-primary fw-bold fs-4 text-decoration-none hover-underline">
          Investment Products
        </h2>
        <p style={{ color: "gray" }} className="fw-semibold">
          Earn Income
        </p>
      </div>
      <div className="container ">
        <div className="row">
          <div className="bg-white col-6 p-4 rounded-lg shadow-md mb-1 rounded">
            <h2 className="text-primary fw-bold fs-4 text-decoration-none hover-underline">
              Investment Products
            </h2>
            <p style={{ color: "gray" }} className="fw-semibold">
              Earn Income
            </p>
          </div>
          <div className="bg-white col-6 p-4 rounded-lg shadow-md mb-1 rounded">
            <h2 className="text-primary fw-bold fs-4 text-decoration-none hover-underline">
              Investment Products
            </h2>
            <p style={{ color: "gray" }} className="fw-semibold">
              Earn Income
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 d-flex align-items-center justify-content-between rounded-lg shadow-md mb-1 rounded">
        <h2 className="text-primary fw-bold fs-4 text-decoration-none hover-underline">
          Investment Products
        </h2>
        <FaArrowRight className="fs-2 text-black" />
      </div>
    </div>
  );
};

export default InvestmentStats;
