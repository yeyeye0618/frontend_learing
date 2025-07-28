import { useState } from "react";
import "./Counter.module.css";

function Counter() {
	const [count, setCount] = useState(0);

	const increment = () => setCount((count) => count + 1);
	const decrement = () => setCount((count) => (count - 1 > 0 ? count - 1 : 0));
	const reset = () => setCount(0);

	return (
		<div className="counter-container">
			<h2>Counter: {count}</h2>
			<button onClick={increment}>增加</button>
			<button onClick={decrement}>減少</button>
			<button onClick={reset}>重置</button>
		</div>
	);
}

export default Counter;
