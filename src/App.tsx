import React from "react";
import "./index.css";
import DraggableCard from "./components/draggable-card";

const App: React.FC = () => {
	return (
		<div className="App">
			<DraggableCard startPosition={{ x: 0, y: 0 }} />
			<DraggableCard startPosition={{ x: 10, y: 25 }} />
		</div>
	);
};

export default App;
