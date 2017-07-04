import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BackgroundImage = styled.img`
  position: absolute;
  object-fit: cover;
  width: auto;
  height: 100%;
  z-index: 0;
  transition: opacity 1s ease-in-out;
  opacity: ${props => props.ready ? '1' : '0'}
`;

class LoaderImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
    };
  }

  onLoad = () => this.setState({ready: true});

  render() {
    const { src, alt } = this.props;
    const { ready } = this.state;

    return (
      <BackgroundImage
        src={src}
        alt={alt}
        ready={ready}
        onLoad={this.onLoad} />
    );
  }
}

const HeadContainer = styled.div`
  position: relative;
  grid-area: header;
  width: 100%;
  height: 100vh;
  padding: 0rem;
  overflow: hidden;
  background-color: azure;

  @media (min-width: 600px) {
    padding: 1rem;
  }
`;

const HeadContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 1rem;
  display: grid;
  align-items: end;
  grid-template-rows: 1fr 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    '. . .'
    'title . caption';
  z-index: 1;

  @media (min-width: 600px) {
    padding: 1rem 1rem 1rem 2rem;
  }
`;

const PageTitle = styled.header`
  grid-area: title;
  text-transform: lowercase;

  h1, h2 {
    margin: 0;
    font-size: 1rem;
    font-weight: normal;
  }

  h1 span {
    background-color: pink;
  }

  h2 span {
    background-color: white;
  }
`;

const Caption = styled.div`
  grid-area: caption;
  text-align: right;

  p {
    margin: 0;
  }
`;

const PhotoLink = styled(Link)`
  background-color: white;
`;

export default ({photo}) => (
  <HeadContainer>
    <HeadContent>
      <PageTitle>
        <h1><span>Jack Reid</span></h1>
        <h2><span>Web Idiot</span></h2>
      </PageTitle>
      <Caption>
        <PhotoLink to={`/photo/${photo.slug}`}>
          <span role="img" aria-label="photo taken">📸</span> {photo.title}
        </PhotoLink>
      </Caption>
    </HeadContent>
    <LoaderImage src={photo.url} alt={photo.title} />
  </HeadContainer>
);
