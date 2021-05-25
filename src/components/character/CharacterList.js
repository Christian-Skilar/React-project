import { useState, useEffect } from "react";
import CardLink from "./CardLink";
import { API } from "../../constants/Api";

function CharacterList() {
	const [character, setcharacter] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(function () {
		async function fetchData() {
			try {
				const response = await fetch(API);
				const json = await response.json();
				console.log(json);
				setcharacter(json.results);

			} catch (error) {
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>An error occured: {error}</div>;
	}

	return (
		<div className="container">
			<div className="cards">
				{character.map(function (characters) {
					const { id, name, status, image } = characters;
					return <CardLink key={id} id={id} name={name} status={status} image={image} />;
				})}
			</div>
		</div>
	);
}

export default CharacterList;