import React, { useEffect, useState } from "react";
import MainTable from "./MainTable";
import axios from "axios";
import BarChart from "./BarChart";
import DonutChart from "./DonutChart";
import PieChart from "./PieChart";
const MainContent = () => {
  const [news, setNews] = useState([]);
  const url = "//easy-ruby-drill-wear.cyclic.app/api/news";

  useEffect(() => {
    axios.get(url).then((response) => {
      setNews(response.data);
      // console.log(response.data);
    });
  }, [url]);

  const countryUrl = "//easy-ruby-drill-wear.cyclic.app/api/news/find/country";
  const regionUrl = "//easy-ruby-drill-wear.cyclic.app/api/news/find/region";
  const topicUrl = "//easy-ruby-drill-wear.cyclic.app/api/news/find/topic";
  const sourceUrl = "//easy-ruby-drill-wear.cyclic.app/api/news/find/source";
  // const intensityUrl = "//easy-ruby-drill-wear.cyclic.app/api/news/find/intensity";

  return (
    <div className="relative min-h-screen min-w-full w-full overflow-hidden">
      <div className="lg:ml-[18%] m-4 p-2">
        MainContent
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 w-full">
          <BarChart url={countryUrl} slice={1} title={"Country"} />
          <DonutChart url={regionUrl} slice={1} title={"Region"} />
          <PieChart url={topicUrl} title={"Topic-Intensity"} />
          <BarChart url={sourceUrl} title={"Source"} />
        </div>
        <MainTable news={news} />
      </div>
    </div>
  );
};

export default MainContent;
