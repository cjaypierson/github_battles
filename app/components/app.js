var React = require('react');
var Popular = require('./popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className='container'>
					<Nav />
					<Route exact path='/' component={Home} />
					<Route path='/popular' component={Popular} />
					<Route path='/battle' component={Battle} />
				</div>
			</Router>
		)
	}
};

module.exports = App;