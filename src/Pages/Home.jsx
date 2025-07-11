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
  // const cartdata = [
    
  // ]
//   const cardata = [
//     {
//       title: " card 1",
//       description: "this is an product made by Rohan enterprices",
//       img: "https://images.unsplash.com/photo-1751894406106-1a1d9a7d7a8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
//     },

//     {
//       title: " card 2",
//       description: "this is an product made by Pankaj enterprices ",
//       img: "https://images.unsplash.com/photo-1750994700092-19f94d4da5ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
//     },
//      {
//       title: " card 3",
//       description: "this is an product made by Pankaj enterprices ",
//       img: "https://images.unsplash.com/photo-1648052845307-61eb1450f1bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
//     },
//      {
//       title: " card 4",
//       description: "this is an product made by Pankaj enterprices ",
//       img: "https://images.unsplash.com/photo-1751904057421-9b6036f8a984?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
//     },
//      {
//       title: " card 5",
//       description: "this is an product made by Pankaj enterprices ",
//       img: "https://images.unsplash.com/photo-1751013781844-fa6a78089e49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
//     },
//   ];

  return (
    <div>
      <Banner />
      <div className="">
        <button
          onClick={() => {
            transfer();
          }}
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