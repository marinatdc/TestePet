import { useAppSelector } from "@/store/hooks"
import { useDispatch } from "react-redux";
import { setModalAction } from ".";
import { GlobalModalType } from "@/shared/components/modal/globalModal/globalModal";

export const useGlobalReducer = () => {
    const dispatch = useDispatch();

    const { modal } = useAppSelector((state) => state.globalReducer);

    const closeModal = () => {
        dispatch(setModalAction ({
            ...modal,
            visible: false,
        }))
    }

    const setModal = (currentModal: GlobalModalType) => {
        dispatch(setModalAction(currentModal));
    }

    return {
        modal,
        setModal,
        closeModal,
    }
}