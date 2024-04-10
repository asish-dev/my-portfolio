import { ABOUT_ME } from "@/constants";
import { FC } from "react";

const About: FC = ({}) => {
  return (
    <div>
      <h1 className="text-lg text-primary">About</h1>
      <p className="mt-2 text-sm">{ABOUT_ME}</p>
    </div>
  );
};

export default About;
