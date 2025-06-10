
import { DisplaySplash } from '@/shared/components/globalStyles/globalViewStyle';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import  Text  from '@/shared/components/text/text';
import { textTypes } from '@/shared/components/text/textTypes';
import { theme } from '@/shared/themes/theme';
import { SplashImage } from '@/modules/splash/splashStyle';

export default function Splash() {
  return (
    <DisplaySplash>
      <SplashImage
        source={require('@/assets/images/splash-icon.png')}
        resizeMode="contain"
      />

      <Text 
      type={textTypes.TITLE_SEMIBOLD}
      color={theme.colors.neutral.white}
      margin='20px 0px 0px 0px'
      >PetGo</Text>

      <Text 
      type={textTypes.SUBTITLE_REGULAR}
      color={theme.colors.neutral.white}
      margin='0px 0px 20px 0px'
      >“Conectando amor"</Text>
    </DisplaySplash>
  );
}
