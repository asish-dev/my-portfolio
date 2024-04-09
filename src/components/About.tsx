import { ABOUT_ME } from '@/constants';
import { FC } from 'react';

const About: FC = ({}) => {
  return (
    <div>
      <h1 className="text-lg">About</h1>
      <p className="mt-4 text-sm">{ABOUT_ME}</p>
    </div>
  );
};

export default About;
