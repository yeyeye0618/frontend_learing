import Counter from "./components/Counter";
import GBC from "./components/GBC";
import Popup from "./components/Popup";
import { useState } from "react";
import "./App.css";

function App() {
	const [trigger, setTrigger] = useState(false);
	return (
		<>
			<Counter />
			<br />
			<button onClick={() => setTrigger(true)}>Show Popup</button>
			<Popup trigger={trigger} setTrigger={setTrigger}></Popup>
			<GBC />
		</>
	);
}

export default App;
