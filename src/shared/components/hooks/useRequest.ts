import { useState } from "react"
import { RequestLogin } from "../types/requestLogin";
import { connectionAPIPost } from "@/shared/function/connection/connectionAPI";
import { ReturnLogin } from "../types/returnLogin";
import { UserType } from "../types/userType";
import { useUserReducer } from "@/store/reducers/UserReducer/useUserReducer";
import { useGlobalReducer } from "@/store/reducers/GlobalReducer/useGlobalReducer";

import { useRouter } from 'expo-router';

export const useRequest = () => {

    const router = useRouter();
    const { setUser } = useUserReducer();
    const { setModal } = useGlobalReducer();

    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const authRequest = async (body: RequestLogin) => {
        setLoading(true);
        const reasultAxios = await
        await connectionAPIPost<ReturnLogin>('https://api-docs-petgo.onrender.com/api/auth/login', body)
            .then((result) => {
                setUser(result.user);
                //router.push('');;
            })
            .catch(() => {
                setModal({
                    visible: true,
                    title: 'Erro',
                    text: 'Usuário ou senha incorretos',
                });
            });

        setLoading(false);
    }

    return {
        loading,
        errorMessage,
        authRequest,
        setErrorMessage,
    }
}

