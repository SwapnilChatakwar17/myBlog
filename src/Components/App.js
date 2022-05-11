import React from "react";
import { ArrowForward, CodeOff, Dashboard } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import Header from "./Header";
import Logos from "./Logos";

function App() {
  return (
    <div className="w-screen">
      <Header />

      {/* Home Section */}
      <section id="home">
        <div className="homeData pl-16 sm:pl-4">
          <h1>
            Improve your <Dashboard className="dashboard" /> skills by
            <IconButton className="codeBtn">
              <CodeOff />
            </IconButton>
            study with coding
          </h1>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/codewithvetriapi-c56e3.appspot.com/o/BlogImages%2Fline.png?alt=media&token=7d54a4ba-6d56-46ac-929e-784f106989a4"
            alt=""
            className="w-[120px] mb-[2rem] mt-[3rem]"
          />

          <p className="text-paragraphText text-[18px] md:w-[80%] sm:w-[96%] lg:w-[60%]">
            create, launch, and iterate on new marketing campaigns without
            distracting your product team.
          </p>

          <Button className="getStarted">
            <a href="#">
              Get Started <ArrowForward className="icon" />
            </a>
          </Button>
        </div>
        <div className="homeImg pr-16 sm:pr-4">
          {/* prettier-ignore */}
          <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="1015.115" height="951.574" viewBox="0 0 1015.115 951.574">
    <path id="Path_1" data-name="Path 1" d="M529.785,88.3,279.609,144.219l400.282,176.6-376.736-17.66L1197.9,676.948,785.848,626.912l482.693,211.914L830,977.159" transform="translate(-266.491 -56.58)" fill="none" stroke="#def253" stroke-linejoin="bevel" stroke-width="65"/>
    </svg>

          <img
            src="https://firebasestorage.googleapis.com/v0/b/codewithvetriapi-c56e3.appspot.com/o/BlogImages%2Fman.png?alt=media&token=6aba7a96-7fa0-4190-b226-19c5475e8b39"
            alt=""
            className="profileImage"
          />

          <img
            src="https://firebasestorage.googleapis.com/v0/b/codewithvetriapi-c56e3.appspot.com/o/BlogImages%2FmainCode.png?alt=media&token=479618d0-8295-46c9-b103-de79a0ac03d1"
            alt=""
            className="mainCode"
          />

          <img
            src="https://firebasestorage.googleapis.com/v0/b/codewithvetriapi-c56e3.appspot.com/o/BlogImages%2Fwarning.png?alt=media&token=99c443de-17a4-490e-bc83-fcecc30647b9"
            alt=""
            className="warning"
          />

          <div className="nameContainer">
            <div className="circle"></div>
            <h3>Vetrivel Ravi (Full Stack Developer)</h3>
          </div>
        </div>
      </section>
      <div className="imageContainer">
        {Logos &&
          Logos.map((data) => <img key={data.id} src={data.imgSrc} alt="" />)}
      </div>
    </div>
  );
}

export default App;
