import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.div`
  margin-bottom: 32px;
  & a {
    color: inherit;
    display: block;
    transition: all .3s ease-in-out;
  }
`;

const SectionTitle = styled.h1`
  margin: 0;
  font-size: 16px;
  font-weight: normal;
`;

const activeLinkStyle = {
  color: 'white',
  backgroundColor: 'pink',
  textShadow: 'none',
};

export default () => (
  <div>
    <Section>
      <SectionTitle>Work</SectionTitle>
      <NavLink activeStyle={activeLinkStyle} to="/work/buzzfeed">Buzzfeed</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/work/tott">Tott</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/work/slashthread">/thread</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/work/buukks">Buukks</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/work/depop">Depop</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/work/pearshaped">PearShaped</NavLink>
    </Section>

    <Section>
      <SectionTitle>Trips</SectionTitle>
      <NavLink activeStyle={activeLinkStyle} to="/trip/budapest">Budapest</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/trip/edinburgh">Edinburgh</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/trip/washingtondc">Washington D.C</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/trip/boston">Boston</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/trip/nyc">New York City</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/trip/toronto">Toronto</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/trip/chicago">Chicago</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/trip/sanfrancisco">San Francisco</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/trip/yosemite">Yosemite</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/trip/losangeles">Los Angeles</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/trip/lasvegas">Las Vegas</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/trip/grandcanyon">Grand Canyon</NavLink>
    </Section>

    <Section>
      <SectionTitle>Other Photography</SectionTitle>
      <NavLink activeStyle={activeLinkStyle} to="/photography/womens-march">Women's March 2017</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/photography/essex">Essex</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/photography/commute-east">Commute East</NavLink>
    </Section>

    <Section>
      <SectionTitle>Writing</SectionTitle>
      <NavLink activeStyle={activeLinkStyle} to="/writing/depop-day4">Depop Does Day 4</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/writing/accessibility-thing">That Accessibility Thing</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/writing/the-jetset-ape">The Jetset Ape</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/writing/fat-internet-historian">@fat: Internet Historian</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/writing/twitters-desktop-troubles">Twitter's Desktop Troubles</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/writing/siri-make-me-a-sandwich">Siri, Make Me A Sandwich</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/writing/dish-hackathon">Dish & The Hackathon</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/writing/internet-rhizome">Is The Internet a Rhizome?</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/writing/confessions-news-addict">Confessions of a News Addict</NavLink>
      <NavLink activeStyle={activeLinkStyle} to="/writing/music-is-changing">Music Is Changing</NavLink>
    </Section>
  </div>
);
