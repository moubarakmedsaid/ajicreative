import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import "./../styles/style.css";
import {HomePageComponenet} from "../page/home.component"
import {NoMatchComponent} from '../page/noMatch.component';
import {AccesCodeComponent} from '../page/acces-code.component';
import NewsPage from "../page/news.component";




class SharedRoutes extends Component {

  render() {
    return (
        <Switch>
            <Route path={`/`} component={HomePageComponenet} exact />
            <Route path={`/news`} component={NewsPage} exact />
            <Route path={`/acces-code`} component={AccesCodeComponent} exact />

            <Route component={NoMatchComponent}/>
            <Route
              render={function() {
                  return <h1>Not Found</h1>;
              }}
          />
        </Switch>

    );
  }
}

export default SharedRoutes;
