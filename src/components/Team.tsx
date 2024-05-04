import Image from "next/image";
import { TeamMembers } from "../utils/constants/constants";

const roleToColor = {
	"Developer": "text-blue-500",
	"Community": "text-green-500",
	"Marketing": "text-purple-500",
	"Design"   : "text-red-500",
	"Creator"  : "text-orange-500"
};

const TeamAvatar = ({ avatar, name, role, link, isMultisig }) => {
	const multisigBorder = isMultisig ? "outline outline-4 outline-yellow-500" : "";
	return (
		<a href={link} target="_blank">
			<div className="flex flex-col items-center">
				<div className={`relative h-[50px] w-[50px] overflow-hidden rounded-full mb-3 ${multisigBorder}`}>
					<Image src={avatar} alt={`${name}'s Avatar`} layout="fill" />
				</div>
				<span>{name}</span>
				<span className={roleToColor[role]}>{role}</span>
			</div>
		</a>
	);
}

const Team = () => {
	return (
		<div id="team" className="mt-32">
			<div className="flex flex-col items-center">
				<div className="flex flex-col items-center">
					<h2>TEAM</h2>
					<div className="flex items-center gap-3">
						<div className="w-[20px] h-[20px] rounded-sm bg-yellow-500" />
						<span>Multisig Signer</span>
					</div>
				</div>
				<div className="mt-6 grid grid-cols-6 gap-10">
					{TeamMembers.map((member) => (
						<TeamAvatar key={member.name} {...member} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Team;