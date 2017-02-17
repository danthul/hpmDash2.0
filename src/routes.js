import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import InspectionForm from './components/Inspection/InspectionForm'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={InspectionForm} />
    <Route path="inspection" component={InspectionForm} />
  </Route>
);
