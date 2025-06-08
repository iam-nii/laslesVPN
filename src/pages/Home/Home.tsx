import { Button } from "@heroui/react";
import MainImg from "../../assets/images/main.svg";
import PlanImg from "../../assets/images/plans.svg";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div
      className="bg-gradient-to-br from-primary/10 via-middle/100
     to-secondary/20 h-screen w-screen py-52 flex relative "
    >
      <div className="ml-40">
        <h1 className="text-7xl font-bold text-slate-500">Landing Page</h1>
        <h2 className="text-5xl font-bold text-black">LaslesVPN</h2>
        <p className="text-slate-600 w-[40%] my-2 font-light">
          LaslesVPN is a virtual private network that allows you to secure your
          internet connection and access content from anywhere in the world.
        </p>
        <div>
          <Button color="primary">Get Started</Button>
        </div>
      </div>
      <div className="flex absolute top-0 right-0">
        <div className="relative right-[335px] top-20 h-96 w-[500px] bg-none shadow-3xl z-10">
          <img
            src={MainImg}
            alt="Main"
            className="rounded-lg cursor-pointer"
            onClick={() => navigate("/main")}
          />
        </div>
        <img
          src={PlanImg}
          alt="Plan"
          className=" absolute top-0 right-5 rounded-lg h-screen cursor-pointer"
          onClick={() => navigate("/plans")}
        />
      </div>
    </div>
  );
}

export default Home;
