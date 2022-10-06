import React, { useState } from "react";
import BaseDraggable from "react-draggable";

export interface Position {
	x: number;
	y: number;
}

export interface DraggableProps {
	startPosition: { x: number; y: number };
	lockDrag?: boolean;
	children?: JSX.Element;
	className?: string;
}

const Draggable: React.FC<DraggableProps> = (props) => {
	const [pos, setPos] = useState(props.startPosition);
	return (
		<BaseDraggable
			defaultPosition={props.startPosition}
			position={pos}
			disabled={props.lockDrag}
			onStop={(_, data) => {
				if (data.x > 0 && data.y > 0) {
					setPos({ x: data.x, y: data.y });
				}
			}}
		>
			<div className={"draggable hover:cursor-move " + props.className}>
				{props.children}
			</div>
		</BaseDraggable>
	);
};

export default Draggable;
