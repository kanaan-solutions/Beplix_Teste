import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: #ccc;
`;

export const PasswordContainer = styled.View `
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
 
export const IconWrapper = styled.TouchableOpacity `
  margin-left: -50px;
  width: 50px;
  height: 40px;
  z-index: 5;
  margin-top: 30px;
`;
