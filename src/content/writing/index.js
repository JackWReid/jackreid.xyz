import React from 'react';
import { Route } from 'react-router-dom';

import WritingJetset from './WritingJetset';
import WritingFat from './WritingFat';
import WritingTwitterDesktop from './WritingTwitterDesktop';
import WritingSiriSandwich from './WritingSiriSandwich';
import WritingDish from './WritingDish';
import WritingRhizome from './WritingRhizome';
import WritingConfessions from './WritingConfessions';
import WritingMusicChanging from './WritingMusicChanging';

export default () => (
  <div>
    <Route path="/writing/the-jetset-ape" component={WritingJetset} />
    <Route path="/writing/fat-internet-historian" component={WritingFat} />
    <Route path="/writing/twitters-desktop-troubles" component={WritingTwitterDesktop} />
    <Route path="/writing/siri-make-me-a-sandwich" component={WritingSiriSandwich} />
    <Route path="/writing/dish-hackathon" component={WritingDish} />
    <Route path="/writing/internet-rhizome" component={WritingRhizome} />
    <Route path="/writing/confessions-news-addict" component={WritingConfessions} />
    <Route path="/writing/music-is-changing" component={WritingMusicChanging} />
  </div>
);
