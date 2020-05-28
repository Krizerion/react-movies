import React from 'react';

class PureComponent extends React.PureComponent {
  render() {
    return (
      <div className='component-item'>
        I am a pure component
      </div>
    )
  }
}

export default PureComponent;