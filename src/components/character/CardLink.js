import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CardLink({ id, name, image, status }) {

	const state = status;
	const statusStyle = {
		backgroundColor: "#02b268"
	};

	if (state === "Alive") {
		statusStyle.backgroundColor = "#02b268"
	}
	if (state === "Dead") {
		statusStyle.backgroundColor = "#E80F00"
	}
	if (state === "unknown") {
		statusStyle.backgroundColor = "#fff"
	}

	return (
		<Link to={`detail/${id}`} className="cardHover">
			<h5>{name}</h5>
			<img src={image} alt="character"></img>
			<div className="status-container">
				<p><span>Status - </span> {status}</p>
				<div className="status" style={statusStyle}></div>
			</div>
		</Link>
	);
}

CardLink.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	image: PropTypes.string,
};

export default CardLink;
