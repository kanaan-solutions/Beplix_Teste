import React from 'react';

import { FieldTable, FieldText } from './styles';

interface Props {
  fieldName: string;
  text: string | number;
}

const TableField: React.FC<Props> = ({ fieldName, text }) => {
  return (
    <FieldTable style={{ borderBottomWidth: 1, borderBottomColor: "#ebdddd"}}>
      <FieldText>{ fieldName }</FieldText>
      <FieldText>{ text }</FieldText>
    </FieldTable>
  );
};

export default TableField;