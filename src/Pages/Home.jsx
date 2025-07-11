import React from "react";
import { useNavigate } from "react-router-dom";
import GetData from "../HOC/Costume/GetData";
import Banner from "../Components/UI/Banner";
import Card from "../Components/UI/Card"

function Home() {
  const navigate = useNavigate();
  const transfer = () => { 
    navigate("/about");
  };
  const data=GetData('features')

  return (
    <div>
      <Banner />
      <div className="">
        <button
          onClick={() => {
            transfer();
          }}
          className="bg-blue-400 py-4 px-8 border rounded-4xl text-2xl font-semibold text-pink-100 relative ml-12 top-[-7rem] "
        >
          About us
        </button>
      <div>
      <div className="pt-20 px-10 grid grid-cols-3 gap-20">
        {data.map((val, index) => {
          return (
            <Card
              key={index}
              img={val?.coverImage?.url}
              title={val.title}
              description={val.summary}
            />
          );
        })}
      </div>
    </div>
      </div>
    </div>
  );
}

export default Home;