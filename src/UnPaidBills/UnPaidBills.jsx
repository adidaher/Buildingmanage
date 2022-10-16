import React, { useState } from "react";
import "./UnPaidBills.css";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import UnPaidBillCard from "../components/UnpaidBillCard/UnPaidBillCard";
import PayNowCard from "../components/PayNowCard/PayNowCard";
const UnPaidBills = () => {
  const [price, setPrice] = useState(0);

  const setpp = (price) => {
    setPrice(price);
    document.getElementsByClassName("VisaCard").price = price;
  };

  return (
    <div className="home-container">
      <LeftSide />
      <Navbar title={"Bills"} desc={"Your Bills"} />
      <RightSide />
      <div className="UnPaidBillCard-content">
        <div className="AllBills">
          <UnPaidBillCard
            title={"Water"}
            status={true}
            price={"250"}
            date={"19 Sep 2022"}
            onclickHandler={setpp}
          />
          <UnPaidBillCard
            title={"Electricity"}
            status={false}
            price={"180"}
            date={"19 Sep 2022"}
            onclickHandler={setpp}
          />
          <UnPaidBillCard
            title={"Water"}
            status={true}
            price={"300"}
            date={"19 July 2022"}
            onclickHandler={setpp}
          />
          <UnPaidBillCard
            title={"Electricity"}
            status={true}
            price={"315"}
            date={"19 July 2022"}
            onclickHandler={setpp}
          />
          <UnPaidBillCard
            title={"Water"}
            status={false}
            price={"180"}
            date={"19 May 2022"}
            onclickHandler={setpp}
          />
          <UnPaidBillCard
            title={"Water"}
            status={true}
            price={"450"}
            date={"19 July 2022"}
            onclickHandler={setpp}
          />
          <UnPaidBillCard
            title={"Electricity"}
            status={true}
            price={"600"}
            date={"19 July 2022"}
            onclickHandler={setpp}
          />
          <UnPaidBillCard
            title={"Water"}
            status={false}
            price={"700"}
            date={"19 May 2022"}
            onclickHandler={setpp}
          />
          <UnPaidBillCard
            title={"Water"}
            status={true}
            price={"750"}
            date={"19 May 2022"}
            onclickHandler={setpp}
          />
        </div>

        <PayNowCard price={price} className="VisaCard" />
      </div>
    </div>
  );
};

export default UnPaidBills;
