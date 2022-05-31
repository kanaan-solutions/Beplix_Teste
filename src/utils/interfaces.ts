import React, { ButtonHTMLAttributes, FormEvent } from 'react';
import { TextInputProps, TouchableOpacityProps} from 'react-native';


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