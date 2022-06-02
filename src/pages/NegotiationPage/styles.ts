import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: #ccc;
`;

export const IconWrapper = styled.TouchableOpacity `
	position: absolute;
	left: 30px;
	top: 65px;
`;

export const WrapperButon = styled.View `
	align-items: center;
	justify-content: center;
	margin: 15px;
`;

export const Crypto = styled.Text `
	color: black;
  font-size: 28px;
  align-self: center;
  font-weight: bold;
`;