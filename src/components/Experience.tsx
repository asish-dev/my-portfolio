import { FC } from "react";
import Image from "next/image";

const data = [
  {
    company: "Rizzle",
    role: "Frontend Engineer",
    logo: "/rizzle.png",
    time: "June 2023 - Present",
    description:
      "Rizzle is a short video platform bringing unique formats and simplifying high-quality video creation using AI-based camera experiences. Rizzle is one of the top platforms for original content. With video responses, Rizzle enables a positive creator community. Rizzle supports sponsorships for creators, making it an integrated platform for creation,distribution, and monetization.",
  },
  {
    company: "EV Plugs",
    role: "Frontend Engineer",
    logo: "/evplugs.png",
    time: "Sept 2022 - May 2023",
    description:
      "EV Plugs is an EV charging station aggregator platform covering EV charging stations from brands like EESL, Tata Power, Statiq, Magenta, Ather and many more.",
  },
  {
    company: "Tejas Networks",
    role: "Product Engineer",
    logo: "/tejas.jpg",
    time: "Aug 2021 - Sept 2022",
    description:
      "Tejas Networks is a global broadband, optical and wireless networking company, with a focus on technology, innovation and R&D. We design and manufacture high-performance wireline and wireless networking products for telecommunications service providers, internet service providers, utilities, defence and government entities in over 75 countries.",
  },
];

const Experience: FC = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="justify-self-start text-lg text-primary">Experience</h1>
      <div className="flex flex-col gap-8">
        {data.map(({ company, role, logo, time, description }) => {
          return (
            <div key={company} className="flex text-xs gap-4 ">
              <div className="w-32 grow-0 shrink-0">
                <p>{time}</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-center">
                  <Image
                    src={logo}
                    width={40}
                    height={40}
                    alt={company}
                    style={{ objectFit: "contain" }}
                  />
                  <div className="flex flex-col justify-start grow">
                    <p className="text-sm">{company}</p>
                    <p className="text-gray-500">{role}</p>
                  </div>
                </div>
                <div>{description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
