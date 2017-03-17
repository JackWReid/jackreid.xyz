import React, { Component } from 'react';
import { css } from 'glamor';

const wrapperStyle = {
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: 0, left: 0, right: 0, bottom: 0,
  width: '100vw',
  height: '100vh',
  padding: '50px 0',
  background: 'black',
};

const closeButtonStyle = {
  position: 'fixed',
  top: 16,
  left: 16,
  color: 'pink',
  textDecoration: 'underline',
  cursor: 'pointer',
};

const expandedStyle = {
  maxHeight: '100%',
  maxWidth: '80vw',
  margin: 0,
};

const standardStyle = {
  margin: '16px 0',
  cursor: 'pointer',
};

export default class Photo extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
    }
  }

  toggle = () => this.setState(old => ({expanded: !old.expanded}));

  render() {
    const { url, caption = '' } = this.props;
    const { expanded } = this.state;

    return (
      <div {...css(expanded && wrapperStyle)}>
        <div
          onClick={this.toggle}
          {...css(expanded ? closeButtonStyle : { display: 'none' })}>
          close x
        </div>
        <img
          {...css(expanded ? expandedStyle : standardStyle)}
          onClick={this.toggle}
          src={url}
          alt={caption} />
      </div>
    );
  }
}
