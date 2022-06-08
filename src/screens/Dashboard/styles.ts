import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  /* background-color: ${(props) => props.theme.colors.primary}; */
  background-color: ${({ theme }) => theme.colors.background};
`;