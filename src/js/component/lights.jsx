import React, { useState } from "react";

const Lights = () => {
	const [shadow, setShadow] = useState(" ");

	return (
		<>
			<div className="trafficTop"></div>
			<div className="container">
				<div
					className={"red light" + (shadow === "red" ? " glow" : " ")}
					onClick={() => setShadow("red")}></div>

				<div
					className={
						"yellow light" + (shadow === "yellow" ? " glow" : " ")
					}
					onClick={() => setShadow("yellow")}></div>

				<div
					className={
						"green light" + (shadow === "green" ? " glow" : " ")
					}
					onClick={() => setShadow("green")}></div>
			</div>
		</>
	);
};

export default Lights;
