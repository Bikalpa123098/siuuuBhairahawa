import React from "react";
// import { useLocation } from "react-router-dom";
console.log(location);

function Banner({ title, age, subtitle, description }) {
  // const location = useLocation();
  return (
    <div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1750969315593-36b04578208c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D"
          className="h-screen w-full object-cover"
          alt=""
        />
        <div className=" top-0 left-0">
          <div className=" ">welcome to {title} page</div>
          <div>{subtitle}</div>
          <div>{description}</div>
          <div>{age}</div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
