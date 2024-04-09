import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { FC } from 'react';

interface ExternalLinkProps {
  label: string;
  link: string;
  renderIcon?: React.ReactNode;
}

const ExternalLink: FC<ExternalLinkProps> = ({ label, link, renderIcon }) => {
  return (
    <Link className="text-sm text-gray-500" href={link}>
      <div className="flex gap-1 items-center">
        <p>{label}</p>
        {renderIcon ? renderIcon : <ExternalLinkIcon />}
      </div>
    </Link>
  );
};

export default ExternalLink;
