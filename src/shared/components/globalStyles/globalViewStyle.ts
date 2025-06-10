import { theme } from "@/shared/themes/theme";
import styled from "styled-components/native";

interface DisplayProps {
    margin ?: string;
}

export const DisplayFlexColumn = styled.View<DisplayProps> `
    display: flex;
    flex-direction: column;
    width: 100%;

    margin: ${(props) => (props.margin ? props.margin : '0px')}
`

export const DisplaySplash = styled.View<DisplayProps> `
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;

    background-color: ${theme.colors.primary.primary};
`
