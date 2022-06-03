import { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from "react-native-gesture-handler";
import { Text } from 'react-native';


import Icon from "react-native-vector-icons/FontAwesome5";
import {  IUserTransactions, StateProps } from '../../utils/interfaces';

import { Container, IconWrapper, Wrapper, Informations, MainWrapper } from './styles';

const NegotiationPage: React.FC<StateProps> = () => {
  const { goBack,navigate } = useNavigation()

  const [cryptoQuantity, setCryptoQuantity] = useState<string | null>("");
  const [cryptoName, setCryptoName] = useState<string | null>("");
  const [cryptoOperation, setCryptoOperation] = useState<string | null>("");
  const [arr, setArr] = useState<string[]>([])
  const [transactions, setTransactions] = useState<IUserTransactions[] | undefined>([]);

  // useEffect (() => {
  //   async function fetchTransactions() {
  //     const responseCryptoName = await AsyncStorage.getItem('@CryptoCoin:cryptoName');
  //     const responseCryptoQuantity = await AsyncStorage.getItem('@CryptoCoin:cryptoValue');
  //     const responseCryptOperartion = await AsyncStorage.getItem('@CryptoCoin:cryptoOperation');  


  //     setCryptoName(responseCryptoName)     
  //     setCryptoQuantity(responseCryptoQuantity);
  //     setCryptoOperation(responseCryptOperartion);

  //     setArr([... [responseCryptoQuantity, responseCryptOperartion, responseCryptoName]])

  //     console.log(arr)
  //     // console.log(cryptoOperation)
  //     // console.log(cryptoQuantity)
  //   }

  //   fetchTransactions();
  // }, [])

  useEffect(() => {
    async function fetchAllTransactions () {
    //   AsyncStorage.getItem('transactions').then(response => {
    //     if (response) {
    //         const userTransactions = JSON.parse(response);
    //         setTransactions(userTransactions);
    //     }
    // }
    // );
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

      <IconWrapper 
        onPress={() => goBack()}
      >
        <Icon name="arrow-left" size={60} />
      </IconWrapper>
      
      <ScrollView>
        {transactions?.map((item: IUserTransactions) => (
          <MainWrapper key={item.id}>
            <Wrapper>
              <Informations>Moeda</Informations>
            </Wrapper>
            <Informations>
              {item.name}
            </Informations>
            <Informations>
              {item.operation}
            </Informations>
            <Informations>
              {item.value}
            </Informations>
          </MainWrapper>
        ))}
      </ScrollView>
    </Container>
  );
};

export default NegotiationPage;
