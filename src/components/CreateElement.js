import React, { Component } from 'react';

class CreateElementComponent extends Component {
  render() {
    return React.createElement('div', { className: 'component-item' }, 'I am a createElement component');
  }
}

export default CreateElementComponent;