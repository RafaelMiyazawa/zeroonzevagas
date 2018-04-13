import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import JobList from '../routes/job-list';
import JobAdd from 'async!../routes/job-add';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<JobList path="/" />
					<JobAdd path="/add"/>
				</Router>
			</div>
		);
	}
}
