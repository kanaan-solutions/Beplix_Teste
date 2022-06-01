import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ApplicationState } from "../../store";
import * as UserNameAction from "../../store/ducks/userName/actions";
import { IUserName, UserNameState } from "../../store/ducks/userName/types";

import { useNavigation } from "@react-navigation/native";
import { View, Alert} from 'react-native';
import  api from '../../services/pokeApi';

import TextInput from "../../components/TextInput";
import TouchableButton from "../../components/TouchableButton";

import { Container } from './styles';
import { IPokemonMove, IPokemonName } from "../../utils/interfaces";

interface StateProps {
  userCredential: IUserName[];
}

const Login: React.FC<StateProps> = () => {
  const userCredential = useSelector((state: ApplicationState) => {
    return state.userName.data;
  });
  const dispatch = useDispatch();

  const [usuario, setUsuario] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [password, setPassword] = useState("");
  const [moveName, setMoveName] = useState("");

  const { navigate } = useNavigation();

  useEffect (() => {
    dispatch(UserNameAction.loadRequest())

    setPokemonName(userCredential);

    // async function fetchData() {   
    //   try {
    //     const request_1 = await api.get('pokemon?limit=100000&offset=0')

    //     const response = request_1.data.results
    //     response.map((item: IPokemonName) => {
    //       if (item.name === "arceus")
    //         setPokemonName(item.name)
    //     })
              
    //     const request_2 = await api.get("move/")

    //     const response_2 = request_2.data.results
    //     response_2.map((item: IPokemonMove) => {
    //       if (item.name === "swords-dance") 
    //         setMoveName(item.name)
    //     })
    //   } catch (err: any) {
    //     Alert.alert('Erro', `${err.response.data.message}`);
    //   }
    // }
    // fetchData();
  }, [])

  function handleLogin() {
    console.log(pokemonName)
    console.log(usuario)

   if (usuario === pokemonName && password === moveName) {
      navigate("HomePage")
    } else {
      Alert.alert("Usuário ou senha não conferem")
    }
  }

  return (
    <>
      <Container>

        <TextInput 
          placeholder="Usuário"
          value={usuario}
          onChangeText={(text) => setUsuario(text)}
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