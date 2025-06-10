import { TextInputProps, View } from "react-native";

import { ContainerInput, Icon } from "./inputStyle";
import { DisplayFlexColumn } from "../globalStyles/globalViewStyle";

import Text from '@/shared/components/text/text';
import { theme } from "@/shared/themes/theme";
import { textTypes } from "../text/textTypes";
import { useState } from "react";

import { Keyboard } from "react-native";


interface InputProps extends TextInputProps {
    title ?: string;
    errorMessageError ?: string;
    secureTextEntry ?: boolean;
    margin ?: string;
}

export default function Input ({title, errorMessageError, secureTextEntry, margin, ...props} : InputProps) {

    const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry);

    const handleOnPressEye = () => {
        setCurrentSecure((current) => !current)
    }

    return (
        <DisplayFlexColumn margin={margin}>
            

            {title && (
                <Text
                color={theme.colors.neutral.gray}
                type={textTypes.PARAGRAPH_REGULAR}
                margin="0px 0px 6px 4px"
                >{title}</Text>
            )}
            <View>
                <ContainerInput 
                    placeholderTextColor={theme.colors.neutral.grayLighter}
                    hasSecureTextEntry={secureTextEntry}
                    secureTextEntry={currentSecure}
                    isError={!!errorMessageError}
                    {... props}
                />

                {secureTextEntry && (
                    <Icon 
                    onPress={handleOnPressEye} 
                    name={currentSecure ? "eye-outline" : "eye-off-outline" } 
                    size={24.5}
                    color={theme.colors.primary.primaryLighter}
                    />
                )}
            </View>

            {errorMessageError && (
                <Text
                type={textTypes.PARAGRAPH_SMALL_SEMIBOLD}
                color={theme.colors.alerts.red}
                margin="5px 0px 5px 10px"
                >{errorMessageError}</Text>
            )}
        </DisplayFlexColumn>
    )
}