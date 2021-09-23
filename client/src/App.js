import { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import {
	loginUser,
	registerUser,
	removeToken,
	verifyUser,
} from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
	const history = useHistory();

	useEffect(() => {
		const handleVerify = async () => {
			const userData = await verifyUser();
			setCurrentUser(userData);
		};
		handleVerify();
	}, []);

	const handleLogin = async (formData) => {
		const userData = await loginUser(formData);
		setCurrentUser(userData);
		history.push('/');
	};

	const handleRegister = async (formData) => {
		const userData = await registerUser(formData);
		setCurrentUser(userData);
		history.push('/');
	};

	const handleLogout = () => {
		setCurrentUser(null);
		localStorage.removeItem('authToken');
		removeToken();
		history.push('/');
	};

  return (
    <div>
      {/* 
      Body Layout wrapping entire web app
      
      Routes for user auth & blogs laid out here:
        Route for login
        Route for sign up
        Route for blogs & categories
      
      */}

    </div>
  );
}

export default App;
