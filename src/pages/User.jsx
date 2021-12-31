import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Spinner from '../components/layout/Spinner';

import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import GithubContext from '../context/github/GithubContext';
function User() {
	const { getUser, user, loading } = useContext(GithubContext);

	const params = useParams();

	useEffect(() => {
		getUser(params.login);
	}, []);

	const {
		name,
		type,
		avatar_url,
		location,
		bio,
		blog,
		twitter_username,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = user;

	if (loading) {
		return <Spinner />;
	}
	return (
		<div>
			<div>{name}</div>
			{bio}
		</div>
	);
}

export default User;
