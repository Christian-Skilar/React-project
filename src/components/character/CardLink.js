import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CardLink({ id, name, image }) {
	return (
		<Link to={`detail/${id}`} className="cardHover">
			<h5>{name}</h5>
			<img src={image} alt="character"></img>

		</Link>
	);
}

CardLink.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	image: PropTypes.string,
};

export default CardLink;
