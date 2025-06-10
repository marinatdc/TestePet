import { theme } from "@/shared/themes/theme";
import styled from "styled-components/native";

export const Divider = styled.View`
  width: 100%;
  height: 1.5px;
  background-color: ${theme.colors.primary.primaryLighter};
  margin: 24px;
`;