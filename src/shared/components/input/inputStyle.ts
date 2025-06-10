import styled from "styled-components/native";

import { theme } from '@/shared/themes/theme';
import Ionicons from '@expo/vector-icons/Ionicons';

interface ContainerInputProps {
    isError ?: boolean;
    hasSecureTextEntry ?: boolean;
}

export const ContainerInput = styled.TextInput<ContainerInputProps> `
    
    width: 100%;
    height: 42zpx;

    padding: 8px 16px 8px 16px;
    padding-right: ${(props) => (props.hasSecureTextEntry ? '50px' : '16px')};

    border-radius: 8px;
    border-width: 2px;

    color: ${theme.colors.neutral.black};
    border-color: ${(props) => (props.isError ? theme.colors.alerts.red : theme.colors.primary.primaryLighter)};

`

export const Icon = styled(Ionicons) `
    position: absolute;
    right: 16px;
    top: 8px;
`