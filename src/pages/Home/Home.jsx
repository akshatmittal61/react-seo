import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./home.scss";

const Home = () => {
	const [username, setUsername] = useState("");
	const navigate = useNavigate();
	useEffect(() => {
		document.title = "GitHub Profile Search";
	}, [])
	
	return (
		<main className="home">
			<div className="home-header">
				<h1>GitHub Profile</h1>
				<p>
					Enter a GitHub username to view their profile and
					repositories.
				</p>
			</div>
			<div className="home-search">
				<input
					type="text"
					placeholder="Enter a GitHub username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<Button
					text="Search"
					onClick={() => {
						if (username) navigate(`/profile/${username}`);
					}}
				/>
			</div>
		</main>
	);
};

export default Home;
