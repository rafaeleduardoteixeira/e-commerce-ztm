import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/home-page.component';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
