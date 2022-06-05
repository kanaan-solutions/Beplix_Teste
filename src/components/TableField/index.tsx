import React from 'react';

import { IFieldName }  from "../../utils/interfaces";

import { FieldTable, FieldText } from './styles';

const TableField: React.FC<IFieldName> = ({ fieldName, text }) => {
  return (
    <FieldTable style={{ borderBottomWidth: 1, borderBottomColor: "#ebdddd"}}>
      <FieldText>{ fieldName }</FieldText>
      <FieldText>{ text }</FieldText>
    </FieldTable>
  );
};

export default TableField;