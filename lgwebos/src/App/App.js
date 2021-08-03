import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Scroller from '@enact/sandstone/Scroller';
import Button from '@enact/ui/Button';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from "../routes/Home";
import Search from "../routes/Search";
import Navigation from "../components/Navigation";
import Detail from "../routes/Detail";
import UpNetflix from "../routes/UpNetflix";
import css from './App.module.less'
import Background from './logo.png';
import EndNetflix from "../routes/EndNetflix";

const AppBase = kind({
	name: 'App',

	styles: {
		css
	},

	render: function (props) { //eslint-disable-line no-unused-vars
		return (
			<Scroller>
				<div className={css.app} /*{props.className}*/>
					<div className={css.color}>
						<center>
							<div className={css.boxh} style={{ backgroundImage: "url(" + `${Background}` + ")" }}>
							</div>
							<div>
								<HashRouter>
									<Navigation />
									<Route exact path="/" component={Home} />
									<Switch>
										<Route exact path="/UpNetflix" component={UpNetflix} />
										<Route exact path="/EndNetflix" component={EndNetflix} />
										<Route path="/movie-detail" component={Detail} />
									</Switch>


								</HashRouter>




							</div>
						</center>
					</div>
				</div>
			</Scroller>
		);
	}
});

const App = ThemeDecorator(AppBase);

export default App;
export { App, AppBase };