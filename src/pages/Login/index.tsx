import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ApplicationState } from "../../store";
import * as UserNameAction from "../../store/ducks/userName/actions";
import * as UserPasswordAction from "../../store/ducks/userPassword/actions";

import { useNavigation } from "@react-navigation/native";
import { View, Alert} from 'react-native';

import TextInput from "../../components/TextInput";
import TouchableButton from "../../components/TouchableButton";
import { StateProps } from '../../utils/interfaces';

import { Container } from './styles';

const Login: React.FC<StateProps> = () => {
  const userCredential = useSelector((state: ApplicationState) => 
    state
  );

  const dispatch = useDispatch();

  const [user, setUser] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [password, setPassword] = useState("");
  const [moveName, setMoveName] = useState("");

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
    }
  }

  return (
    <>
      <Container>

        <TextInput 
          placeholder="Usuário"
          value={user}
          onChangeText={(text) => setUser(text)}
        />

        <TextInput 
          placeholder="Senha"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />

        <View style={{ marginTop: 20 }}>
          <TouchableButton color="#c04e4e" onPress={handleLogin}>
            Login
          </TouchableButton>
        </View>
  
      </Container>
    </>
  );
};

export default Login;