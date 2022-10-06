import React from "react";
import Draggable, { Position } from "../draggable";

interface Props {
	startPosition: Position;
}

const DraggableCard: React.FC<Props> = (props: Props) => {
	return (
		<Draggable
			className="bg-slate-800 text-white p-6 rounded-2xl inline-block"
			startPosition={props.startPosition}
		>
			<div>
				<div>Action Item</div>
			</div>
		</Draggable>
	);
};

export default DraggableCard;
