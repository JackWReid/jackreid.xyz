import React from 'react';
import { Route } from 'react-router-dom';

import TripBudapest from './TripBudapest';
import TripEdinburgh from './TripEdinburgh';
import TripWashington from './TripWashington';
import TripBoston from './TripBoston';
import TripNewYorkCity from './TripNewYorkCity';
import TripToronto from './TripToronto';
import TripChicago from './TripChicago';
import TripSanFrancisco from './TripSanFrancisco';
import TripYosemite from './TripYosemite';
import TripLosAngeles from './TripLosAngeles';
import TripLasVegas from './TripLasVegas';
import TripGrandCanyon from './TripGrandCanyon';


export default () => (
  <div>
    <Route path="/trip/budapest" component={TripBudapest} />
    <Route path="/trip/edinburgh" component={TripEdinburgh} />
    <Route path="/trip/washingtondc" component={TripWashington} />
    <Route path="/trip/boston" component={TripBoston} />
    <Route path="/trip/nyc" component={TripNewYorkCity} />
    <Route path="/trip/toronto" component={TripToronto} />
    <Route path="/trip/chicago" component={TripChicago} />
    <Route path="/trip/sanfrancisco" component={TripSanFrancisco} />
    <Route path="/trip/yosemite" component={TripYosemite} />
    <Route path="/trip/losangeles" component={TripLosAngeles} />
    <Route path="/trip/lasvegas" component={TripLasVegas} />
    <Route path="/trip/grandcanyon" component={TripGrandCanyon} />
  </div>
);
