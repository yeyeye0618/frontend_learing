import { useState } from "react";
import "./Counter.module.css";

function Counter() {
	const [count, setCount] = useState(0);

	const increment = () => setCount((prev) => prev + 1);

	return (
		<div className="counter-container">
			<h2>Counter: {count}</h2>
			<button onClick={increment}>增加</button>
			<button onClick={() => setCount((prev) => prev - 1)}>减少</button>
			<button onClick={() => setCount(0)}>重置</button>
		</div>
	);
}

export default Counter;
