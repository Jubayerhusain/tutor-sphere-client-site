import React from "react";

const HowItWorks = () => {
  return (
    <div>
      <div className="flex flex-col justify-center space-y-2 my-14">
        <p className="text-center font-semibold text-xl">How it Work</p>
        <h1 className="text-center font-bold text-4xl uppercase">
          Simple Steps to Academic Success
        </h1>
      </div>
      <ul className="timeline pb-14 timeline-vertical">
        <li>
          <div className="timeline-start timeline-box">
            <div className="flex items-center space-x-3 m-5">
              <div className="ml-4">
                <h1 className="text-end text-xl font-semibold text-yellow-500">
                  Book a Free Consultation
                </h1>
                <p>
                  Start by booking a free consultation to discuss your
                  educational needs and goals.
                </p>
              </div>
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-consultation-psychology-flaticons-flat-flat-icons.png"
                alt="external-consultation-psychology-flaticons-flat-flat-icons"
              />
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-end timeline-box">
            <div className="flex items-center space-x-3 m-5">
              <img
                width="100"
                height="100"
                src="https://img.icons8.com/plasticine/100/classroom.png"
                alt="classroom"
              />
              <div className="ml-4">
                <h1 className="text-start text-xl font-semibold text-yellow-500">
                  Personalized Lesson Plan
                </h1>
                <p>
                  After the consultation, we'll create a tailored lesson plan
                  for you, outlining topics, timeline and resources.
                </p>
              </div>
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box">
            <div className="flex items-center space-x-3 m-5">
              <div className="ml-4">
                <h1 className="text-end text-xl font-semibold text-yellow-500">
                  Match with a specialist
                </h1>
                <p>
                  We'll connect you with a subject expert to guide your learning
                  journey.
                </p>
              </div>
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/pull-a-box-skin-type-5.png"
                alt="pull-a-box-skin-type-5"
              />
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-end timeline-box">
            <div className="flex items-center space-x-3 m-5">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/book-and-pencil.png"
                alt="book-and-pencil"
              />
              <div className="ml-4">
                <h1 className="text-start text-xl font-semibold text-yellow-500">
                  Start Learning
                </h1>
                <p>
                  Begin interactive and personalized tutoring sessions from the
                  comfort of your home
                </p>
              </div>
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box">
            <div className="flex items-center space-x-3 m-5">
              <div className="ml-4">
                <h1 className="text-end text-xl font-semibold text-yellow-500">
                  Ongoing Support
                </h1>
                <p>
                  Stay in touch with your tutor for prompt clarifications and
                  support.
                </p>
              </div>
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/helping.png"
                alt="helping"
              />
            </div>
          </div>
        </li>
        <li>
          <hr />
          <div className="timeline-end timeline-box">
            <div className="flex items-center space-x-3 m-5">
              <img
                width="100"
                height="100"
                src="https://img.icons8.com/plasticine/100/favorite-window.png"
                alt="favorite-window"
              />
              <div className="ml-4">
                <h1 className="text-start text-xl font-semibold text-yellow-500">
                  Review & Improve
                </h1>
                <p>
                  Share feedback to help us enhance our services and support
                  your educational journey.
                </p>
              </div>
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default HowItWorks;
