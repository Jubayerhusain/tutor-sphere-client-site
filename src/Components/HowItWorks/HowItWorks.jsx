import React from "react";

const HowItWorks = () => {
  return (
    <div>
        <div className="flex flex-col justify-center space-y-2 my-14">
            <p className="text-center font-semibold text-xl">How it Work</p>
            <h1 className="text-center font-bold text-4xl uppercase">Simple Steps to Academic Success</h1>
        </div>
      <ul className="timeline pb-14 timeline-vertical">
        <li>
          <div className="timeline-start timeline-box">
            First Macintosh computer
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-end timeline-box">iMac</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box">iPod</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-end timeline-box">iPhone</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box">Apple Watch</div>
        </li>
      </ul>
    </div>
  );
};

export default HowItWorks;
