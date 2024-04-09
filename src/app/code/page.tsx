import LayoutComponent from '@/components/LayoutComponent';
import Link from 'next/link';
import { ExternalLinkIcon } from '@radix-ui/react-icons';

const data = [
  {
    name: 'Wordle',
    description:
      'A game where you get 6 tries to guess a five letter word. Inspired by the popular game from nytimes.com.',
    deployLink: 'https://wordle-react-ten.vercel.app/',
  },
];

export default function Code() {
  return (
    <LayoutComponent>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-lg">Projects</h1>
        {data.map(({ name, description, deployLink }) => {
          return (
            <div key={name}>
              <h1 className="underline text-md text-primary ">{name}</h1>
              <p className="text-sm">{description}</p>
              <Link className="text-sm text-gray-500" href={deployLink}>
                <div className="flex gap-1 items-center ">
                  <p>Live Demo</p>
                  <ExternalLinkIcon />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </LayoutComponent>
  );
}
