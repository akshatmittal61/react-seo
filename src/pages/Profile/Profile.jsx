import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGitHubProfile } from "../../API/Profile";
import MaterialIcons from "../../components/MaterialIcons";
import "./profile.scss";

const Profile = () => {
	const { username } = useParams();
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		const getProfile = async () => {
			const res = await fetchGitHubProfile(username);
			setProfile(() => res);
		};
		getProfile();
		document.title = `${
			profile?.name ? profile.name : username
		} | GitHub Profile Search`;
	}, [profile.name, username]);

	return (
		<main className="profile">
			<div className="profile-header">
				<div className="profile-header-avatar">
					<img src={profile?.avatar_url} alt={profile?.name} />
				</div>
				<div className="profile-header-info">
					<h1>{profile?.name}</h1>
					<h2>{profile?.bio}</h2>
					<div>
						<a
							href={profile?.html_url}
							target="_blank"
							rel="noreferrer"
						>
							<MaterialIcons icon="link" />
						</a>
						<a
							href={profile?.blog}
							target="_blank"
							rel="noreferrer"
						>
							<MaterialIcons icon="language" />
						</a>
						<a
							href={`mailto:${profile?.email}`}
							target="_blank"
							rel="noreferrer"
						>
							<MaterialIcons icon="email" />
						</a>
					</div>
				</div>
			</div>
			<div className="profile-stats">
				<div className="profile-stats-item">
					<h1>{profile?.public_repos}</h1>
					<h2>Repositories</h2>
				</div>
				<div className="profile-stats-item">
					<h1>{profile?.followers}</h1>
					<h2>Followers</h2>
				</div>
				<div className="profile-stats-item">
					<h1>{profile?.following}</h1>
					<h2>Following</h2>
				</div>
			</div>
			<div className="profile-repos">
				<h1>Repositories</h1>
				<div className="profile-repos-list">
					{profile?.repos?.map((repo) => (
						<div className="profile-repos-list-item" key={repo.id}>
							<h1>{repo.name}</h1>
							<h2>{repo.description}</h2>
							<div>
								<a
									href={repo?.html_url}
									target="_blank"
									rel="noreferrer"
								>
									<MaterialIcons icon="link" />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
};

export default Profile;
