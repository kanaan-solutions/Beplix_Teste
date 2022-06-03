import React, { ButtonHTMLAttributes, FormEvent } from 'react';
import { TextInputProps, TouchableOpacityProps} from 'react-native';
import { IUserName } from "../store/ducks/userName/types";
import { IUserPassword } from "../store/ducks/userPassword/types";

export interface ITextInput extends TextInputProps {
	placeholder?: string;
	secureTextEntry?: boolean;
	onChangeText?: ((text: string) => void);
}

export interface IErrorMessage {
	text: string;
}

export interface TouchableProps extends ButtonHTMLAttributes<TouchableOpacityProps> {
	color?: string;
	onPress?: ((event: FormEvent<HTMLFormElement>) => void);
	tvParallaxProperties?: {};
}

export interface IPokemonName {
	name: string;
	url: string;
}

export interface IPokemonMove {
	name: string;
	url: string;
}

export interface ICryptocurrency {
	id: number;
	rank: number;
	name: string;
}

export interface StateProps {
	userCredential: IUserName[] | IUserPassword[];
}

export interface IUserTransactions {
	id: number;
	name: string;
	value: string;
	operation: string;
}
  
export interface ITransactions {
	operations: IUserTransactions[];
}