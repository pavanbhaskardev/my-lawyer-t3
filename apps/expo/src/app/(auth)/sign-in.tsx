import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Redirect } from "expo-router";
import { images } from "constants/images";

import { authClient } from "~/utils/auth";

const SignIn = () => {
  const { data: session } = authClient.useSession();

  if (session?.user) {
    return <Redirect href={"/"} />;
  }

  return (
    <View className="h-full w-full justify-center bg-background">
      <View className="mb-4 items-center">
        <Image source={images.logo} alt="my-lawyer-logo" className="size-36" />

        <Text className="text-3xl font-bold">Welcome to My.Lawyer</Text>
        <Text className="text-lg text-muted-foreground">
          Find best lawyer's near you
        </Text>
      </View>

      <TouchableOpacity
        onPress={() =>
          session
            ? authClient.signOut()
            : authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
              })
        }
        className="mx-auto flex w-[80%] flex-row items-center justify-center gap-3 whitespace-nowrap rounded-md border border-primary bg-primary/10 px-4 py-3"
      >
        <Image source={images.google} className="size-6" />

        <Text className="text-lg font-bold text-primary">
          {session ? "Sign Out" : "Continue with Google"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
