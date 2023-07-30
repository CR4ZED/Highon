import { Stack } from "expo-router/stack";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
      <Stack
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaView>
  );
}
