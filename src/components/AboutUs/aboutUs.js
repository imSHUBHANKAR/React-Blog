import React from "react";
import "./aboutUs.css";

// import { Button } from "@mui/material/Button";
// import Button from "@mui/material/Button";
import { Button } from '@mui/material'

function AboutUs() {
  return (
    <div className="about_us">
      <p className="about_us_title">About Us</p>
      <p className="about_us_para1">
        -Pro Network is a plateform where people can create professional
        network,talk with various professionals by communicating,sharing
        knowledge,guiding poeple,get guided by people and so on.Pro Network is a plateform where people can create professional
        network,talk with various professionals by communicating,sharing
        knowledge,guiding poeple,get guided by people and so on
      </p>
      <p className="about_us_para1">
        -At Pro network,we have design a system that works well for both
        students and professionals,and streamlined the networking/mentoring
        process making it easy and efficient.At Pro network,we have design a system that works well for both
        students and professionals,and streamlined the networking/mentoring
        process making it easy and efficient.
      </p>
      <p className="about_us_para1">
        -Join the amazing community of immense peofessionals and satrt
        helping/benifiting from awesome posts! Join the amazing community of immense peofessionals and satrt
        helping/benifiting from awesome posts!
      </p>
      <Button  style={{ border: "none" }} className="btn1" variant="outlined">
        Go to home
      </Button>
    </div>
  );
}

export default AboutUs;
