import styled from 'styled-components/native'


interface ContainerTextProps {
    color ?: string;
    fontSize : string;
    fontFamily : 'Poppins-Bold' | 'Poppins-SemiBold' | 'Poppins-Regular' | 'Poppins-Light';
    margin ?: string;
    underline ?: boolean;
}



export const ContainerText = styled.Text<ContainerTextProps>`
    ${(props) => (props.color ? `color: ${props.color}` : '')};
    ${(props) => (props.margin ? `margin: ${props.margin}` : '')};
    
    font-size: ${(props) => props.fontSize};
    font-family: ${(props) => props.fontFamily};
    text-decoration-line: ${(props) => (props.underline ? 'underline' : 'none')};
`