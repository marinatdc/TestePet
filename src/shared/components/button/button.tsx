import { TouchableOpacityProps } from "react-native";
import { ActivityIndicatorButton, ButtonContainer, ButtonContainerDisable, ButtonContainerGoogle, ButtonContainerSecundary, ImageGoogle } from "./buttonStyle";
import Text from "@/shared/components/text/text"
import { textTypes } from "../text/textTypes";
import { theme } from "@/shared/themes/theme";

interface ButtonProps extends TouchableOpacityProps {
    title ?: string;
    margin ?: string;
    type ?: string;
    disable ?: boolean;
    loading ?: boolean;
    onPress ?: () => void
}

export default function Button ({title, margin, type, disable, loading, onPress, ...props} : ButtonProps) {

    const handleOnPress = () => {
        if (!loading && !disable && onPress) {
            onPress();
        }
    }

    const renderText = (color : string) => (
        <>
        <Text
        type={textTypes.PARAGRAPH_SEMIBOLD}
        color={color}
        >
            {title}
        </Text>
        {loading && <ActivityIndicatorButton color={theme.colors.neutral.white}/>}
        </>
    )

    if (disable) {
        return (
            <ButtonContainerDisable margin={margin}>
                {renderText(theme.colors.neutral.grayDarker)}
            </ButtonContainerDisable>
        )
    }

    switch (type) {
        case theme.buttons.buttonsTheme.secundary:
            return (
                <ButtonContainerSecundary margin={margin}>
                    {renderText(theme.colors.neutral.gray)}
                </ButtonContainerSecundary>
            )
        case theme.buttons.buttonsTheme.google:
            return (
                <ButtonContainerGoogle margin={margin}>
                    <ImageGoogle resizeMode="contain" source={require('@/assets/images/GoogleIcon.png')} />
                    <Text
                    type={textTypes.PARAGRAPH_SMALL_SEMIBOLD}
                    >
                        {title}
                    </Text>
                </ButtonContainerGoogle>
            )
        case theme.buttons.buttonsTheme.primary:
        default:
            return (
                <ButtonContainer 
                margin={margin}
                onPress={handleOnPress}>
                    {renderText(theme.colors.neutral.white)}
                </ButtonContainer>
            )
    }
}