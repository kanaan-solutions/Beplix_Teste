import React from "react";

import { ITextInput } from '../../utils/interfaces';
import { Container } from './styles';

const TextInput: React.FC<ITextInput> = ({
  value,
  placeholder,
  secureTextEntry,
  onChangeText
}) => {
  return (
      <Container
        underlineColorAndroid="transparent"
        placeholderTextColor="#CDCDC1"
        secureTextEntry={secureTextEntry}
        {...{ placeholder }}
        onChangeText={onChangeText}
        value={value}
      />
  );
};

export default TextInput;