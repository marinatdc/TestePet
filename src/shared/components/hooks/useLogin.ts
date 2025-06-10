import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useState } from "react";
import { useUserReducer } from "@/store/reducers/UserReducer/useUserReducer";
import { useRequest } from "@/shared/components/hooks/useRequest";

export const useLogin = () => {
    const { user } = useUserReducer();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { authRequest, setErrorMessage, errorMessage, loading } = useRequest();



    const handleOnPress = async () => {
        console.log('BOTAO')
        authRequest({
            email,
            password,
        })
    }

    const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErrorMessage('');
        setEmail(event.nativeEvent.text);
    };

    const handleOnChangePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErrorMessage('');
        setPassword(event.nativeEvent.text);
    };

    return {
        email,
        password,
        loading,
        errorMessage,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword,
    }

}