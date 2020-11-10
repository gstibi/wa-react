import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import ChartForecast from './components/ChartForecast';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path='/' exact component={CurrentWeather}/>
                    <Route path='/Forecast' component={Forecast}/>
                    <Route path='/ChartForecast' component={ChartForecast}/>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
