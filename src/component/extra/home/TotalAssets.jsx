const TotalAssets = () => {
  return (
    <div className="p-3 rounded bg-primary my-4">
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="fs-4">Total Assets</h2>
        <p className="fs-5 fw-bold" style={{ color: "#041a64" }}>
          20000 TRX
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="">Basic investment:</h2>
        <p className=" fw-bold" style={{ color: "#041a64" }}>
          0 TRX
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="">Total Investment:</h2>
        <p className=" fw-bold" style={{ color: "#041a64" }}>
          5000 TRX
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="">Freezed Bonus:</h2>
        <p className=" fw-bold" style={{ color: "#041a64" }}>
          8000 TRX
        </p>
      </div>
    </div>
  );
};

export default TotalAssets;
