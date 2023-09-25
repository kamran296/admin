import React from "react";
import "./HomeCss.css";
import Chart from "../../components/chart/Chart";
import FeaturesInfo from "./../../components/featuredInfo/FeaturesInfo";
import { userData } from "../../dummyData";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";

export default function Home() {
  return (
    <div className="home">
      <FeaturesInfo />
      <Chart
        data={userData}
        title="user Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
