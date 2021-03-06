import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  /* background-color: ${(props) => props.theme.colors.primary}; */
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.attention};
`;
