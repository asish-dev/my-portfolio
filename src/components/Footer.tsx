import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { FC } from "react";
import ExternalLink from "./ExternalLink";

const socials = [
  {
    link: "https://github.com/asish-dev",
    icon: <GitHubLogoIcon width={24} height={24} />,
  },
  {
    link: "https://www.linkedin.com/in/asish-samanta/",
    icon: <LinkedInLogoIcon width={24} height={24} />,
  },
  {
    link: "https://twitter.com/asish043",
    icon: <TwitterLogoIcon width={24} height={24} />,
  },
];

const Footer: FC = () => {
  return (
    <div className="w-full flex gap-2 justify-end">
      {socials.map(({ link, icon }) => (
        <ExternalLink key={link} link={link} renderIcon={icon} />
      ))}
    </div>
  );
};

export default Footer;
