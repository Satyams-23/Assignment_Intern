import axios from "axios";
import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import DonutChart from "./DonutChart";
import MainTable from "./MainTable";
import PieChart from "./PieChart";
import RadialChart from "./RadialChart";

const FilterPage = ({ filter }) => {
  const [state, setState] = useState("");
  const [news, setNews] = useState([]);
  const [datas, setDatas] = useState([]);

  var mainUrl = `//localhost:8000/api/news/find/${filter}`;
  useEffect(() => {
    axios.get(mainUrl).then((response) => {
      setDatas(response.data);
    });
  }, [filter]);

  var secondUrl = "";
  function handleSubmit(e) {
    e.preventDefault();
    if (state === "") return;

    secondUrl = `//localhost:8000/api/news/find/${filter}/${state}`;
    axios
      .get(secondUrl)
      .then((response) => {
        setNews(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div className="lg:ml-[18%] m-4 p-2 flex flex-col justify-around">
      {news && news.length > 0 ? <MainTable news={news} /> : null}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 w-full">
        {filter === "source" && news && news.length ? (
          <RadialChart
            selectedUrl={`//localhost:8000/api/news/find/${filter}/${state}/relevance`}
            label={"Relevance"}
            title={state}
          />
        ) : null}
        {filter === "topic" && news && news.length ? (
          <RadialChart
            selectedUrl={`//localhost:8000/api/news/find/${filter}/${state}/intensity`}
            label={"Intensity"}
            title={state}
          />
        ) : null}

        <BarChart url={mainUrl} slice={1} title={filter} />
        <DonutChart url={mainUrl} slice={1} title={filter} />
        <PieChart url={mainUrl} title={filter} />
      </div>
    </div>
  );
};

export default FilterPage;
