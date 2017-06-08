import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { getWritingPosts } from '../content/service';

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

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    const posts = await getWritingPosts();
    this.setState({posts: posts.map(post => post.fields)});
  }

  render() {
    return (
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
          {this.state.posts.map((post, key) => (
            <NavLink key={key} activeStyle={activeLinkStyle} to={`/writing/${post.slug}`}>{post.title}</NavLink>
          ))}
        </Section>
      </div>
    );
  }
}
