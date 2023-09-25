import React from "react";
import "./featuresInfo.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
function FeaturesInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitile">Revanue</span>
        <div className="featuredMoneycontainer">
          <span className="featuredMoney">$2413</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownwardIcon className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to Last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitile">Sales</span>
        <div className="featuredMoneycontainer">
          <span className="featuredMoney">$2413</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownwardIcon className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to Last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitile">Cost</span>
        <div className="featuredMoneycontainer">
          <span className="featuredMoney">$2413</span>
          <span className="featuredMoneyRate">
            +11.4 <ArrowUpwardIcon className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to Last month</span>
      </div>
    </div>
  );
}

export default FeaturesInfo;
