import { useEffect } from "react";

const TickerInfo = () => {
	useEffect(() => {
		const widgetContainer = document.getElementById("cmc-widget");
		const widget = document.getElementById("coinmarketcap-currency-widget");
		widget.classList.remove('hidden');
		widgetContainer.appendChild(widget);
	}, []);
	return (
		<div>
			<div id="cmc-widget"></div>
		</div>
	)
}

export default TickerInfo;