import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Panels from '@enact/sandstone/Panels';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header/Header";
import SimpleBottomNavigation from "../components/MainNav";
import Movies from "../Pages/Movies/Movies";
import Series from "../Pages/Series/Series";
import Trending from "../Pages/Trending/Trending";
import Search from "../Pages/Search/Search";


import MainPanel from '../views/MainPanel';

import css from './App.module.less';

const App = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: (props) => (
		<BrowserRouter>
              <Header />
              <div className="app">

                  <Switch>
                    <Route path="/" component={Trending} exact />
                    <Route path="/movies" component={Movies} />
                    <Route path="/series" component={Series} />
                    <Route path="/search" component={Search} />
                  </Switch>

              </div>
              <SimpleBottomNavigation />
            </BrowserRouter>
	)
});

export default ThemeDecorator(App);
