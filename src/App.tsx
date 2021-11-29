import { useEffect, useState } from 'react';

// COMPONENTS
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/home-page.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in/sign-in-sign-up-page.component';

import { auth } from './util/initializeFireBase';

import './App.scss';

function App(): JSX.Element {
  const [currentUser, setCurrentUser] = useState<any | null>(null);
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(user);
    });
  }, [auth]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
