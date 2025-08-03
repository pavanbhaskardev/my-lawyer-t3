import { Text, View } from "react-native";
import { Redirect, Slot } from "expo-router";

import { authClient } from "~/utils/auth";

// This is the main layout of the app
// It wraps your pages with the providers they need
export default function RootLayout() {
  const { data, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!data?.user) {
    return <Redirect href={"/sign-in"} />;
  }

  return (
    <>
      <Slot />
    </>
  );
}
