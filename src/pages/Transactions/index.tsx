import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from "react-native-gesture-handler";

import {  IUserTransactions, StateProps } from '../../utils/interfaces';

import { Container, MainText, TableWrapper } from './styles';
import TableField from '../../components/TableField';

const NegotiationPage: React.FC<StateProps> = () => {
  const [transactions, setTransactions] = useState<IUserTransactions[] | undefined>([]);

  useEffect(() => {
    async function fetchAllTransactions () {
      const response = await AsyncStorage.getItem('transactions').then(response => {
      if (typeof response !== undefined ) {
        const userTransactions = JSON.parse(response);
        setTransactions(userTransactions);
      }
    })}

    fetchAllTransactions();
  }, [])


  return (
    <Container> 
      <MainText>Histórico de Transações</MainText>    
      <ScrollView>
        {transactions?.map((item: IUserTransactions) => (
          <TableWrapper key={item.id}>
            <TableField fieldName='Moeda' text={item.name}/>
            <TableField fieldName='Operação' text={item.operation}/>
            <TableField fieldName='Valor' text={`R$${item.cryptoQuantity}`}/>
          </TableWrapper>
        ))}
      </ScrollView>
    </Container>
  );
};

export default NegotiationPage;
