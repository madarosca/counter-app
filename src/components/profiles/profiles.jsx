import { useEffect, useState } from 'react';
import { DATA } from '../../constants/constants';

const Profiles = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [profiles, setProfiles] = useState([]);
	const [currentProfile, setCurrentProfile] = useState({});

	useEffect(() => {
		setProfiles(DATA);
	}, []);

	useEffect(() => {
		profiles.length && setCurrentProfile(profiles[currentIndex]);
	}, [profiles, currentIndex]);

	const handleNextProfileClick = () => {
		setCurrentIndex((prev) => {
			if (prev === profiles.length - 1) {
				return 0;
			} else {
				return prev + 1;
			}
		});
	};

	return (
		<div className='profiles-container'>
			<div className='col-md-6 mx-auto text-center'>
				<h1 className='mb-3'>Profile Scroller</h1>
				<div id='imageDisplay'>
					<img
						src={currentProfile.image}
						alt='profile'
					/>
				</div>
				<br />
				<div id='profileDisplay'>
					<ul className='list-group'>
						<li className='list-group-item'>Name: {currentProfile.name}</li>
						<li className='list-group-item'>Age: {currentProfile.age}</li>
						<li className='list-group-item'>Location: {currentProfile.location}</li>
						<li className='list-group-item'>
							Preference: {currentProfile.gender} looking for {currentProfile.lookingfor}
						</li>
					</ul>
				</div>
				<br />
				<button
					id='next'
					className='btn btn-info btn-block'
					onClick={handleNextProfileClick}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Profiles;
