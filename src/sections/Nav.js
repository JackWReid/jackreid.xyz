import React from 'react';
import { NavLink } from 'react-router-dom';
import { css } from 'glamor';

const sectionStyle = {
  marginBottom: 32,
};

const sectionTitleStyle = {
  margin: 0,
  fontSize: 16,
  fontWeight: 'normal',
};

const linkStyle = {
  color: 'inherit',
  display: 'block',
  transition: 'all .3s ease-in-out',
};

const activeLinkStyle = {
  color: 'white',
  backgroundColor: 'pink',
  textShadow: 'none',
};

export default () => (
  <div>
    <div {...css(sectionStyle)}>
      <h1 {...css(sectionTitleStyle)}>Work</h1>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/work/tott">Tott</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/work/slashthread">/thread</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/work/buukks">Buukks</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/work/depop">Depop</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/work/pearshaped">PearShaped</NavLink>
    </div>

    <div {...css(sectionStyle)}>
      <h1 {...css(sectionTitleStyle)}>Trips</h1>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/trip/budapest">Budapest</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/trip/edinburgh">Edinburgh</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/trip/washingtondc">Washington D.C</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/trip/boston">Boston</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/trip/nyc">New York City</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/trip/toronto">Toronto</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/trip/chicago">Chicago</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/trip/sanfrancisco">San Francisco</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/trip/yosemite">Yosemite</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/trip/losangeles">Los Angeles</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/trip/lasvegas">Las Vegas</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/trip/grandcanyon">Grand Canyon</NavLink>
    </div>

    <div {...css(sectionStyle)}>
      <h1 {...css(sectionTitleStyle)}>Other Photography</h1>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/photography/womens-march">Women's March 2017</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/photography/essex">Essex</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/photography/commute-east">Commute East</NavLink>
    </div>

    <div {...css(sectionStyle)}>
      <h1 {...css(sectionTitleStyle)}>Writing</h1>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/writing/depop-day4">Depop Does Day 4</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/writing/accessibility-thing">That Accessibility Thing</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/writing/the-jetset-ape">The Jetset Ape</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/writing/fat-internet-historian">@fat: Internet Historian</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/writing/twitters-desktop-troubles">Twitter's Desktop Troubles</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/writing/siri-make-me-a-sandwich">Siri, Make Me A Sandwich</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/writing/dish-hackathon">Dish & The Hackathon</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/writing/internet-rhizome">Is The Internet a Rhizome?</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/writing/confessions-news-addict">Confessions of a News Addict</NavLink>
      <NavLink {...css(linkStyle)} activeStyle={activeLinkStyle} to="/writing/music-is-changing">Music Is Changing</NavLink>
    </div>
  </div>
);
