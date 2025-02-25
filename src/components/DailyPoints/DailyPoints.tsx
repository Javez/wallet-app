import React, { FC } from "react";
import "./DailyPoints.scss";

type Prop = {
  dailyPoints: string;
};

const DailyPoints: FC<Prop> = ({ dailyPoints }) => {
  return (
    <div className="daily-points-block">
      <span className="dpb__title">Daily Points</span>
      <span className="dpb__value">
        {dailyPoints ? dailyPoints : "0 Points"}
      </span>
    </div>
  );
};

export default DailyPoints;
