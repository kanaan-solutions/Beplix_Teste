import { RouteProp, useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import { Alert } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";

import TextInput from '../../components/TextInput';
import TouchableButton from '../../components/TouchableButton';
import { ICryptocurrency, StateProps } from '../../utils/interfaces';
import * as UserNameAction from "../../store/ducks/userName/actions";
import { ApplicationState } from '../../store';

import { Container, IconWrapper, WrapperButon, Crypto } from './styles';
import { useEffect, useState } from 'react';

const NegotiationPage: React.FC<StateProps> = () => {
  const route = useRoute<RouteProp<Record<string, ICryptocurrency>, string>>();
  const { name } = route.params; 
  const { goBack,navigate } = useNavigation()

  const userCredential = useSelector((state: ApplicationState) => 
    state
  );

  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [cryptoQuantity, setCryptoQuantity] = useState("");

  useEffect (() => {
    dispatch(UserNameAction.userLoadRequest());

    setUserName(userCredential?.userName.data);
  }, [])

  const regex = /\d+/g;;

  const handleCall = () => {
    if (cryptoQuantity.match(regex)) {
      Alert.alert(`Caro ${userName} você acaba de comprar ${cryptoQuantity} de ${name}. `);
      navigate("Transactions");
    } else {
      Alert.alert(`O valor informado não é válido`)
    }
  }

  const handlePut = () => {
    if (cryptoQuantity.match(regex)) {
      Alert.alert(`Caro ${userName} você acaba de vender ${cryptoQuantity} de ${name}. `);
      navigate("Transactions");
    } else {
      Alert.alert(`O valor informado não é válido`)
    }
  }

  return (
    <Container>

      <IconWrapper 
        onPress={() => goBack()}
      >
        <Icon name="arrow-left" size={60} />
      </IconWrapper>

      <Crypto>{name}</Crypto>

      <TextInput
        placeholder='Digite o valor a ser negociado'
        value={cryptoQuantity}
        onChangeText={(text) => setCryptoQuantity(text)}
        keyboardType="numeric"
      />

      <WrapperButon>
        <TouchableButton 
          color='#148014'
          onPress={handleCall}
        >
            Comprar
        </TouchableButton>
      </WrapperButon>

      <TouchableButton 
        color='#FF0000'
        onPress={handlePut}
      >
          Vender
      </TouchableButton>

    </Container>
  );
};

export default NegotiationPage;
