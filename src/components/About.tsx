import { FC } from 'react';

const ABOUT_TEXT = `Hello, I am Asish. I am a Frontend Developer currently working at Rizzle. I'm a React enthusiast, crafting cool stuff for the web. With React, I build sleek and snazzy interfaces that grab attention. Let's team up and create awesome things together!`;

const About: FC = ({}) => {
  return (
    <div>
      <h1 className="text-lg underline">About</h1>
      <p className="text-sm">{ABOUT_TEXT}</p>
    </div>
  );
};

export default About;
