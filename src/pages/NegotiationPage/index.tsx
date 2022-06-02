import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

import TextInput from '../../components/TextInput';
import TouchableButton from '../../components/TouchableButton';
import { ICryptocurrency } from '../../utils/interfaces';

import { Container, IconWrapper, WrapperButon, Crypto } from './styles';

const NegotiationPage = () => {
  const route = useRoute<RouteProp<Record<string, ICryptocurrency>, string>>();
  const { name } = route.params; 
  const { goBack,navigate } = useNavigation()

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
      />

      <WrapperButon>
        <TouchableButton 
          color='#148014'
          onPress={() => navigate("Transactions")}
        >
            Comprar
        </TouchableButton>
      </WrapperButon>

      <TouchableButton 
        color='#FF0000'
        onPress={() => navigate("Transactions")}
      >
          Vender
      </TouchableButton>

    </Container>
  );
};

export default NegotiationPage;
