import React from 'react';
import { render } from 'react-dom';

import { Box } from '../../src';

const Demo = () => (
  <div>
    <h1>bootsystem Demo</h1>
    <Box color="#fff" bg="tomato">
      Tomato
    </Box>
  </div>
);

render(<Demo />, document.querySelector('#demo'));
