import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import TeamData from "@/data/data.json";
import Image from "next/image";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-semibold font-sans mb-8 text-white">Our Team</h1>
      <div className="flex flex-wrap justify-center">
        {TeamData.data.map((team, index) => (
          <CardContainer className="inter-var m-6" key={index}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-4 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {team.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {team.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={team.image}
                  height="500"
                  width="500"
                  className="h-48 w-48 object-cover rounded-xl group-hover/card:shadow-xl mx-auto"
                  alt={team.title}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={team.linkedIn}
                  target="__blank"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  LinkedIn →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={team.github}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Github →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
