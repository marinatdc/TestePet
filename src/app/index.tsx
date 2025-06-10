import { Divider } from "@/shared/components/divider/divider";
import { View, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useFonts } from 'expo-font';
import { Imagelog } from "./style";

import Button from "@/shared/components/button/button";
import Input from "@/shared/components/input/input";
import Text from '@/shared/components/text/text';
import { theme } from "@/shared/themes/theme";
import { useLogin } from "../shared/components/hooks/useLogin";
import { Link, router, SplashScreen } from "expo-router";
import { textTypes } from "@/shared/components/text/textTypes";
import Splash from "@/modules/splash";
import { useEffect, useState } from "react";


export default function Teste() {

    //DEV
    const {
        email,
        password,
        loading,
        errorMessage,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword,
    } = useLogin();

    //FONTS
    const [fontsLoaded] = useFonts({
        'Poppins-Bold': require('@/assets/fonts/Poppins-Bold.ttf'),
        'Poppins-SemiBold': require('@/assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Regular': require('@/assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Light': require('@/assets/fonts/Poppins-Light.ttf'),
    });


    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        if (fontsLoaded) {
            const timer = setTimeout(() => setShowSplash(false), 1500);
            return () => clearTimeout(timer);
        }
    }, [fontsLoaded]);

    if (!fontsLoaded || showSplash) {
        return <Splash />;
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>


                <Imagelog resizeMode="contain" source={require('@/assets/images/LoginImage.png')} />

                <Input
                    value={email}
                    margin="20px 0px 20px 0px"
                    title="Email:"
                    placeholder="Digit your email here"
                    errorMessageError={errorMessage}
                    onChange={handleOnChangeEmail}
                />

                <Input
                    value={password}
                    title="Password:"
                    placeholder="Digit your password here"
                    secureTextEntry
                    onChange={handleOnChangePassword}
                />

                <Text
                    margin="15px"
                    type={textTypes.PARAGRAPH_REGULAR}
                >
                    Forgot password? {''}
                    <Link href={"//"}>
                        <Text
                            type={textTypes.PARAGRAPH_SEMIBOLD}
                            underline
                        >
                            Click here
                        </Text>
                    </Link>
                </Text>

                <Button
                    title="Login"
                    loading={loading}
                    onPress={handleOnPress}
                />

                <Divider />

                <Button
                    type={theme.buttons.buttonsTheme.google}
                    title="Continue with Google"
                    margin="0px 0px 20px 0px"
                />

                <Button
                    title="Create account"
                />


            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.neutral.grayBackGround,
        paddingLeft: 23,
        paddingRight: 23,
    },
})