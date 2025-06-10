
import {Alert, ModalProps as ModalPropsReact, Modal as ModalReact, Pressable, View} from 'react-native';
import { ContainerModal, IconCloseModal } from '@/shared/components/modal/modalStyle';
import { theme } from '@/shared/themes/theme';
import { textTypes } from '../text/textTypes';
import Button from '../button/button';
import { buttonsTheme } from '@/shared/themes/buttons';
import  Text  from '@/shared/components/text/text';

interface ModalProps extends ModalPropsReact {
    title: string;
     text: string;
     onCloseModal: () => void;
}

const Modal = ({title, onCloseModal, text, ...props} : ModalProps) => {
    return (
        <ModalReact
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                onCloseModal();
            } }
            {...props}
        >
            <ContainerModal>
                <IconCloseModal 
                name="cross" 
                size={20} 
                onPress={onCloseModal}
                color={theme.colors.neutral.black}/>
                <View>
                    <Text 
                    type={textTypes.SUBTITLE_BOLD} 
                    margin='7px 0px 10px 0px'
                    color={theme.colors.neutral.black} 
                    >{title}</Text>
                    <Text 
                    margin='0px 0px 10px 0px'
                    >{text}</Text>
                    <Button type={buttonsTheme.primary} title='voltar' onPress={onCloseModal}/>
                </View>
            </ContainerModal>
        </ModalReact>
    );
}

export default Modal;