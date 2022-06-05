import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ApplicationState } from "../../store";
import * as UserNameAction from "../../store/ducks/userName/actions";
import * as UserPasswordAction from "../../store/ducks/userPassword/actions";

import { useNavigation } from "@react-navigation/native";
import { View, Alert} from 'react-native';
import { Entypo } from '@expo/vector-icons'

import TextInput from "../../components/TextInput";
import TouchableButton from "../../components/TouchableButton";
import { StateProps } from '../../utils/interfaces';
import bitcoinImage from '../../../assets/bitcoin.jpeg';

import { Container, IconWrapper, PasswordContainer } from './styles';

const Login: React.FC<StateProps> = () => {
  const userCredential = useSelector((state: ApplicationState) => 
    state
  );

  const dispatch = useDispatch();

  const [user, setUser] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [password, setPassword] = useState("");
  const [moveName, setMoveName] = useState("");
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);

  const { navigate } = useNavigation();

  useEffect (() => {
    dispatch(UserNameAction.userLoadRequest());
    dispatch(UserPasswordAction.passwordLoadRequest());

    setPokemonName(userCredential?.userName.data);
    setMoveName(userCredential?.userPassword.data);
  }, [])

  function handleLogin() {
   if (user !== pokemonName && password !== moveName) {
      Alert.alert("Usuário ou senha não conferem")
    } else {
      navigate("UserDashboard")
      setShow(false);
      setVisible(true);
    }
  }

  return (
    <>
      <Container
        source={bitcoinImage}
      >

        <TextInput 
          placeholder="Usuário"
          value={user}
          onChangeText={(text) => setUser(text)}
        />

        <PasswordContainer>
          <TextInput 
            placeholder="Senha"
            value={password}
            secureTextEntry={visible}
            onChangeText={(text) => setPassword(text)}
          />

            <IconWrapper 
              onPress={ () => {
                setVisible(!visible);
                setShow(!show);}
              }
            >
              <Entypo
                name={show === false ? "eye" : "eye-with-line"}
                size={26}
                color={"#888484"}
              />
            </IconWrapper>
        </PasswordContainer>

        <View style={{ marginTop: 20 }}>
          <TouchableButton 
            color="#c04e4e" 
            onPress={handleLogin}
          >
            Login
          </TouchableButton>
        </View>
  
      </Container>
    </>
  );
};

export default Login;