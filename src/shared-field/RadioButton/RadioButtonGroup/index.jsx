import React from 'react';

import './radioButtonGroup.scss';

RadioButtonGroup.propTypes = {
  
};

function RadioButtonGroup({ children }) {
  return (
    <div className="radio-button-group">
      {children}
    </div>
  );
}

export default RadioButtonGroup;