import { UserType } from "@/shared/components/types/userType"
import { useAppSelector } from "@/store/hooks"
import { useDispatch } from "react-redux"
import { setUserAction } from ".";

export const useUserReducer = () => {

    const disptach = useDispatch();

    const {user} =useAppSelector((state) => state.userReducer)

    const setUser = (currentUser: UserType) => {
        disptach(setUserAction(currentUser))
    }

    return {
        user,
        setUser,
    }
}