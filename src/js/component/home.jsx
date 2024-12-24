import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [ selectedColor, setSelectedColor ] = useState("yellow"); //Tenemos la sintaxis [variable, funcion] = useState("variable")
	
	// Funcion para seleccionar de manera aleatoria el color
	const handleRandomColor = () => {
		const colors = ["red", "yellow", "green"];
		const randomColor = colors[Math.floor(Math.random() * colors.length)];
		setSelectedColor(randomColor);
	};

	return (
		<div className="traffic-light">
			<div onClick={() => setSelectedColor("red")} 
			className={
				"light red" + ((selectedColor === 'red') ? " brillo" : "")
			}></div>
			<div onClick={() => setSelectedColor("yellow")}
				className={
					"light yellow" + ((selectedColor === 'yellow') ? " brillo" : "")
				}></div>

			<div onClick={() => setSelectedColor("green")}
				className={
					"light green" + ((selectedColor === 'green') ? " brillo" : "")
			}></div>		
			<button class="boton" type="button" onClick={handleRandomColor}>
				Presione
			</button>
		</div>
	);
};

export default Home;
