import { theme } from "@/shared/themes/theme";

import styled from "styled-components/native";
import Entypo from '@expo/vector-icons/Entypo';

export const ContainerModal = styled.View`
position: absolute;
    width: 100%;
    
    background-color: ${theme.colors.neutral.grayLighter};
    bottom: 0;


    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    padding: 16px;
    z-index: 9;

    shadow-color: #000;
    shadow-Offset: {
        width: 0;
        height: 0;
    }
    
    shadow-opacity: 1;
    shadow-radius: 1px;
    elevation: 10;
`

export const IconCloseModal = styled(Entypo) `
    position: absolute;
    right: 24px;
    top: 24px;
    z-index: 10;
`