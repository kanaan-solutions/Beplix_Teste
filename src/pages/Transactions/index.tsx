import { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from "react-native-gesture-handler";

import {  IUserTransactions, StateProps } from '../../utils/interfaces';

import { Container, TableWrapper } from './styles';
import TableField from '../../components/TableField';

const NegotiationPage: React.FC<StateProps> = () => {
  const { goBack,navigate } = useNavigation()
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
    console.log(transactions);
  }, [])


  return (
    <Container>     
      <ScrollView>
        {transactions?.map((item: IUserTransactions) => (
          <TableWrapper>
            <TableField fieldName='Moeda' text={item.name}/>
            <TableField fieldName='Operação' text={item.operation}/>
            <TableField fieldName='Valor' text={item.value}/>
          </TableWrapper>
        ))}
      </ScrollView>
    </Container>
  );
};

export default NegotiationPage;
