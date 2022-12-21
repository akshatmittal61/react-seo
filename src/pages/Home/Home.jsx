import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./home.scss";

const Home = () => {
	const [username, setUsername] = useState("");
	const navigate = useNavigate();

	return (
		<>
			<Helmet>
				<title>GitHub Profile Search</title>
				<meta property="og:title" content="GitHub Profile Search" />
				<meta
					property="og:image"
					content="https://avatars.githubusercontent.com/u/0?v=4"
				/>
				<meta
					property="og:description"
					content="Enter a GitHub username to view their profile and repositories."
				/>
				<meta
					property="og:url"
					content="https://react-seo-61.netlify.app/"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:site_name" content="GitHub Profile Search" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@akshatmittal61" />
				<meta name="twitter:creator" content="@akshatmittal61" />
				<meta name="twitter:title" content="GitHub Profile Search" />
				<meta
					name="twitter:description"
					content="Enter a GitHub username to view their profile and repositories."
				/>
				<meta
					name="twitter:image"
					content="https://avatars.githubusercontent.com/u/0?v=4"
				/>
				<meta
					name="twitter:image:alt"
					content="GitHub Profile Search"
				/>
				<meta
					name="description"
					content="Enter a GitHub username to view their profile and repositories."
				/>
				<meta
					name="keywords"
					content="GitHub, Profile, Search, React, SEO"
				/>
				<meta name="author" content="Akshat Mittal" />
				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow" />
			</Helmet>
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
		</>
	);
};

export default Home;
