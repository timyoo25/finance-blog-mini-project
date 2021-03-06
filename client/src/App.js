import { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import {
	loginUser,
	registerUser,
	removeToken,
	verifyUser,
} from './services/auth';
import Layout from './layouts/Layout'

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
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        {/* <Switch>
          <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path='/register'>
						<Register handleRegister={handleRegister} />
					</Route>
          <Route path='/'>
            <MainContainer currentUser={currentUser} />
          </Route>
        </Switch> */}
      </Layout>
      <br />
      {/* <Footer /> */}

    </div>
  );
}

export default App;
