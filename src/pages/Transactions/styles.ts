import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: #ccc;
	padding: 18px;
	padding-top: 35px;
`;

export const IconWrapper = styled.TouchableOpacity `
	position: absolute;
	left: 30px;
	top: 65px;
`;

export const MainWrapper = styled.View `
	 flex: 1;
	 align-items: center;
	 justify-content:center;
`;

export const Wrapper = styled.View `
	background-color: #4F4F4F;

	flex: 1;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	
	width: 280px;
	margin: 20px;
	height: 40px;
	border-radius: 16px;
`;

export const Informations = styled.Text `
	color: #fff;
  font-size: 16px;
  align-self: center;
  font-weight: bold;
`;