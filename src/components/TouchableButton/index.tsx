import React, { ReactNode } from 'react';

import { TouchableProps } from '../../utils/interfaces';

import { Container, ButtonText } from './styles';

const TouchableButton: React.FC<TouchableProps> = ({ 
  children,
  color, 
  onPress, 
  tvParallaxProperties }): ReactNode => {
  return (
    <Container
      tvParallaxProperties={{
        pressDuration: 0.6,
        pressDelay:0.5
      }}
      color={color}
      onPress={onPress}
    >
      <ButtonText>
        {children}
      </ButtonText>
    </Container>
  );
};

export default TouchableButton;