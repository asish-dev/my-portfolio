import { FC } from 'react';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="fixed top-6 left-1/2 p-2 bg-bgColor text-primary w-500 rounded-lg cursor-pointer hover:">
      Home
    </div>
  );
};

export default Header;
