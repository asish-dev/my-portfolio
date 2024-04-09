import Link from 'next/link';
import { FC } from 'react';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="flex gap-4 w-full text-primary rounded-lg cursor-pointer justify-end ">
      <Link href={'/'}>
        <p className="hover:underline">about</p>
      </Link>
      <Link href={'/code'}>
        <p className="hover:underline">code</p>
      </Link>
    </div>
  );
};

export default Header;
