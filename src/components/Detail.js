import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API } from "../constants/Api";

function CharacterDetail(props) {
	console.log(props);
	const [character, setcharacter] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	let history = useHistory();

	const { id } = useParams();

	if (!id) {
		history.push("/");
	}

	const url = API + "/" + id;

	useEffect(
		function () {
			async function fetchData() {
				try {
					const response = await fetch(url);
					const json = await response.json();
					console.log(json);
					setcharacter(json);
	
				} catch (error) {
					setError(error.toString());
				} finally {
					setLoading(false);
				}
			}
			fetchData();
		},
		[url]
	);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>An error occured: {error}</div>;
	}


	const state = character.status;
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
		<div className="detail-container">
			<h1 className="character-name">{character.name}</h1>
			<div className="character-detail">
				<img src={character.image} alt={character.name}></img>
				<div className="detail-info">	
					<div className="status-container">
						<p><span>Status - </span> {character.status}</p>
						<div className="status" style={statusStyle}></div>
					</div>
					<p><span>Gender - </span> {character.gender}</p>
					<p><span>Species - </span> {character.species}</p>
					<p><span>Last known location - </span> {character.location.name}</p>
				</div>
			</div>
		</div>
	);
}


export default CharacterDetail;
