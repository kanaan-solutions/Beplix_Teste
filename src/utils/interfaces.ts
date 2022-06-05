import React, { ButtonHTMLAttributes, FormEvent } from 'react';
import { TextInputProps, TouchableOpacityProps} from 'react-native';
import { IUserName } from "../store/ducks/userName/types";
import { IUserPassword } from "../store/ducks/userPassword/types";

export interface ITextInput extends TextInputProps {
	value?: string;
	placeholder?: string;
	secureTextEntry?: boolean;
	onChangeText?: ((text: string) => void);
}


export interface TouchableProps extends ButtonHTMLAttributes<TouchableOpacityProps> {
	color?: string;
	onPress?: ((event: FormEvent<HTMLFormElement>) => void);
	tvParallaxProperties?: {};
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
	cryptoQuantity: string;
	operation: string;
}
  
export interface ITransactions {
	operations: IUserTransactions[];
}

export interface IFieldName {
  fieldName: string;
  text: string | number;
}