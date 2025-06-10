import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "@/store/index";
import GlobalModal from "@/shared/components/modal/globalModal/globalModal";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";


export default function Layout() {

    return (
        <Provider store={store}>
            <View style={{ flex: 1 }}>
                <StatusBar style="dark" />
                <GlobalModal />
                <Stack>
                    <Stack.Screen
                        name="index"
                        options={{ headerShown: false }}
                    />
                </Stack>
            </View>
        </Provider>
    );
}
