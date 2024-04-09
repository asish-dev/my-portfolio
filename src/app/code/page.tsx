import LayoutComponent from '@/components/LayoutComponent';
import Link from 'next/link';
import { ExternalLinkIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { describe } from 'node:test';
import ExternalLink from '@/components/ExternalLink';

const data = [
  {
    name: 'wordle',
    description:
      'A game where you get 6 tries to guess a five letter word. Inspired by the popular game from nytimes.com.',
    githubLink: 'https://github.com/asish-dev/wordle-react',
    deployLink: 'https://wordle-react-ten.vercel.app/',
  },
  {
    name: 'custom-hooks',
    description: `Collection of custom hooks built from scratch in React`,
    githubLink: 'https://github.com/asish-dev/react-custom-hooks',
  },
];

export default function Code() {
  return (
    <LayoutComponent>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-lg">Projects</h1>
        <div className="flex flex-col gap-2 items-start">
          {data.map(({ name, description, deployLink, githubLink }) => {
            return (
              <div key={name} className="flex flex-col gap-1">
                <h1 className="underline text-md text-primary ">{name}</h1>
                <p className="text-sm">{description}</p>
                <div className="flex gap-3 ">
                  {!!deployLink && (
                    <ExternalLink label="Live Demo" link={deployLink} />
                  )}
                  {!!githubLink && (
                    <ExternalLink
                      label="GitHub"
                      link={githubLink}
                      renderIcon={<GitHubLogoIcon />}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </LayoutComponent>
  );
}
