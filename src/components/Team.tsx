import Image from "next/image";
import { TeamMembers } from "../utils/constants/constants";

const roleToColor = {
  Developer: "text-blue-500",
  Community: "text-green-500",
  Marketing: "text-purple-500",
  Design: "text-red-500",
  Creator: "text-orange-500",
};

const TeamAvatar = ({ avatar, name, role, link, isMultisig }) => {
  const multisigBorder = isMultisig ? "outline outline-4 outline-yellow-500" : "";
  return (
    <a href={link} target="_blank">
      <div className="flex flex-col items-center">
        <div className={`relative mb-3 h-[50px] w-[50px] overflow-hidden rounded-full ${multisigBorder}`}>
          <Image src={avatar} alt={`${name}'s Avatar`} layout="fill" />
        </div>
        <span>{name}</span>
        <span className={roleToColor[role]}>{role}</span>
      </div>
    </a>
  );
};

const Team = () => {
  return (
    <div id="team" className="mt-32">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="relative mx-auto h-[35px] w-[100px] xl:h-[70px] xl:w-[200px] ">
            <Image src="/wordmarks/team.png" alt="Solama Team" layout="fill" />
          </div>
          <div className="mt-7 flex items-center gap-3">
            <div className="h-[20px] w-[20px] rounded-sm bg-yellow-500" />
            <span>Community Wallet Signer</span>
          </div>
        </div>
        <div className="mt-10 grid w-full grid-cols-3 justify-between gap-y-6 text-center text-[18px] xl:grid-cols-6 xl:text-[20px]">
          {TeamMembers.map((member) => (
            <TeamAvatar key={member.name} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
