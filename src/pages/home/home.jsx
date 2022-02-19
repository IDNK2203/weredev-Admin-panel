import FeaturedInfo from "../../components/featuredInfo/featuredInfo";
import Charts from "../../components/charts/charts";
import WidgetSm from "../../components/widgetSm/widgetSm";
import WidgetLg from "../../components/widgetLg/widgetLg";
import { userData } from "../../dummyData";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="homeWrapper">
        <FeaturedInfo></FeaturedInfo>
        <Charts
          data={userData}
          title={"User Analytics"}
          grid
          dataKey={"Active User"}
        ></Charts>
        <div className="home-widgets">
          <WidgetSm></WidgetSm>
          <WidgetLg></WidgetLg>
        </div>
      </div>
    </div>
  );
}

export default Home;
