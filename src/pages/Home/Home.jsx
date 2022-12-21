import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./home.scss";

const Home = () => {
	const [username, setUsername] = useState("");
	const navigate = useNavigate();
	useEffect(() => {
		const title = "GitHub Profile Search";
		document.title = title;
		const ogImage = document.createElement("meta");
		ogImage.setAttribute("property", "og:image");
		ogImage.setAttribute(
			"content",
			"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
		);
		document.head.replaceChild(
			ogImage,
			document.querySelector('meta[property="og:image"]')
		);
		const ogTitle = document.createElement("meta");
		ogTitle.setAttribute("property", "og:title");
		ogTitle.setAttribute("content", title);
		document.head.replaceChild(
			ogTitle,
			document.querySelector('meta[property="og:title"]')
		);
		const ogDescription = document.createElement("meta");
		ogDescription.setAttribute("property", "og:description");
		ogDescription.setAttribute(
			"content",
			"Enter a GitHub username to view their profile and repositories."
		);
		document.head.replaceChild(
			ogDescription,
			document.querySelector('meta[property="og:description"]')
		);
	}, []);

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
