import './profile.scss';
import SignUp from '../auth/signUp/index'
import SignIn from '../auth/signIn/index'

function Profile() {
	return (
		<div className='profile-container'>
			<SignUp/>
			<SignIn/>
		</div>
	)
}

export default Profile