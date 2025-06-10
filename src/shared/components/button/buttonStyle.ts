import { theme } from "@/shared/themes/theme";
import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';

interface ButtonContainerProps {
    margin ?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps> `
    width: 100%;
    height: 39px;
    
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-radius: 8px;

    background-color: ${theme.colors.primary.primary};

    ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
`
export const ButtonContainerSecundary = styled(ButtonContainer)<ButtonContainerProps> `
    ${(props) => (props.margin ? `margin: ${props.margin};` : '')};

    background-color: ${theme.colors.secundary.secundary};
`

export const ButtonContainerGoogle = styled(ButtonContainer)<ButtonContainerProps> `
    ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
    
    height: 45px;

    background-color: transparent;
`

export const ButtonContainerDisable = styled(ButtonContainer)<ButtonContainerProps>`
    ${(props) => (props.margin) ? `margin: ${props.margin};` : ''}

    background-color: ${theme.colors.neutral.gray}
`

export const ActivityIndicatorButton = styled.ActivityIndicator `
    margin-top: 0px;
    margin-left: 15px;
`

export const ImageGoogle = styled.Image`
    height: 20px;
    width: 20px;
    margin: 0px 10px 0px 0px;
`

