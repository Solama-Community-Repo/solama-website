import { useCountdown } from "../utils/hooks/useCountdown";

const Banner = () => {
	const [days, hours, minutes, seconds] = useCountdown('07 may 2024 06:00:00');
	const isLive = days + hours + minutes + seconds <= 0;

	return (
		<div className="h-[40px] w-full flex justify-center items-center bg-secondary">
			<div>
				<span className="text-[18px] xl:text-[22px]">{isLive ? 'BINGX TRADING IS LIVE!' : `BINGX LISTING COUNTDOWN: ${days}:${hours}:${minutes}:${seconds}`}</span>
			</div>
		</div>
	)
}

export default Banner;