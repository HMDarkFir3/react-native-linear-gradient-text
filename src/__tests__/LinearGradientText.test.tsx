import React from 'react';
import { render } from '@testing-library/react-native';

import { LinearGradientText } from '../components/LinearGradientText';

describe('LinearGradientText', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<LinearGradientText text="Hello" colors={['#fff', '#fff']} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
