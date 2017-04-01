import React, { Component } from 'react';
import StandardPhoto from './StandardPhoto';
import LightboxPhoto from './LightboxPhoto';

export default class Photo extends Component {
  constructor() {
    super();
    this.state = {
      lightboxMode: false,
    };
  }

  toggleMode = () => this.setState(old => ({lightboxMode: !old.lightboxMode}));

  render() {
    const { url } = this.props;
    const { lightboxMode } = this.state;

    if (lightboxMode) {
      return <LightboxPhoto url={url} closeLightbox={this.toggleMode} />
    }

    return <StandardPhoto url={url} openLightbox={this.toggleMode} />
  }
}
