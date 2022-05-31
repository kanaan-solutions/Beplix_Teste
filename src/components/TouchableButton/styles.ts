import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { TouchableProps } from '../../utils/interfaces';

export const Container = styled(TouchableOpacity)<TouchableProps>`
  background: ${(props): string => props.color || 'white'} 0% 0% no-repeat padding-box;
  color: white;
  width: 300px;
  height: 40px;
  border-radius: 8px;
  font-weight: bold;
  padding-top: 5px;
  font-size: 22px;
  text-align: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  align-self: center;
  font-weight: bold;
`;