
import { TextProps as TextPropsNative } from "react-native"

import { ContainerText } from '@/shared/components/text/textStyle'
import { textTypes } from '@/shared/components/text/textTypes';
import { useMemo } from "react";

interface TextProps extends TextPropsNative {
    color ?: string;
    type ?: string;
    margin ?: string;
    underline ?: boolean;
}

const Text = ({ color, type, margin, underline, ...props} : TextProps) => {
    
    const fontSize = useMemo( () => {
        switch (type) {
            //TITLE
            case textTypes.TITLE_BOLD:
            case textTypes.TITLE_SEMIBOLD:
            case textTypes.TITLE_REGULAR:
            case textTypes.TITLE_LIGHT:
                return '25px';
            
            //SUBTITLE
            case textTypes.SUBTITLE_BOLD:
            case textTypes.SUBTITLE_SEMIBOLD:
            case textTypes.SUBTITLE_REGULAR:
            case textTypes.SUBTITLE_LIGHT:
                return '20px';
            
            //PARAGRAPH_SMALL
            case textTypes.PARAGRAPH_SMALL_BOLD:
            case textTypes.PARAGRAPH_SMALL_SEMIBOLD:
            case textTypes.PARAGRAPH_SMALL_REGULAR:
            case textTypes.PARAGRAPH_SMALL_LIGHT:
                return '12px';

            //PARAGRAPH
            case textTypes.PARAGRAPH_BOLD:
            case textTypes.PARAGRAPH_SEMIBOLD:
            case textTypes.PARAGRAPH_REGULAR:
            case textTypes.PARAGRAPH_LIGHT:
            default:
                return '14.5px';
        }
    }, [type]); 
    
    const fontFamily = useMemo(() => {
        switch (type) {
            //BOLD
            case textTypes.TITLE_BOLD:
            case textTypes.SUBTITLE_BOLD:
            case textTypes.PARAGRAPH_BOLD:
            case textTypes.PARAGRAPH_SMALL_BOLD:
                return 'Poppins-Bold';

            //SEMIBOLD
            case textTypes.TITLE_SEMIBOLD:
            case textTypes.SUBTITLE_SEMIBOLD:
            case textTypes.PARAGRAPH_SEMIBOLD:
            case textTypes.PARAGRAPH_SMALL_SEMIBOLD:
                return 'Poppins-SemiBold';
                
            //LIGHT
            case textTypes.TITLE_LIGHT:
            case textTypes.SUBTITLE_LIGHT:
            case textTypes.PARAGRAPH_LIGHT:
            case textTypes.PARAGRAPH_SMALL_LIGHT:
                return 'Poppins-Light';

            case textTypes.TITLE_REGULAR:     
            case textTypes.SUBTITLE_REGULAR:
            case textTypes.PARAGRAPH_REGULAR:
            case textTypes.PARAGRAPH_SMALL_REGULAR:
            default:
                return 'Poppins-Regular';
        }
    }, [type]); 

    return (
        <ContainerText 
        color={color} 
        fontSize={fontSize} 
        fontFamily={fontFamily}
        margin={margin}
        underline={underline}
        {...props} />
    )
}

export default Text;