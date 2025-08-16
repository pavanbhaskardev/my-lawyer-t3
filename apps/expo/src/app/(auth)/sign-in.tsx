import React from "react";
import { Image, Text, View } from "react-native";
import { Redirect } from "expo-router";
import { images } from "constants/images";

import { Button } from "~/components/ui/button";
import { authClient } from "~/utils/auth";

const SignIn = () => {
  const { data: session, isPending } = authClient.useSession();

  if (session?.user) {
    return <Redirect href={"/"} />;
  }

  return (
    <View className="h-full bg-background pt-[25vh]">
      <View className="mb-4 items-center">
        <Image source={images.logo} alt="my-lawyer-logo" className="size-36" />

        <Text className="text-3xl font-bold">Welcome to My.Lawyer</Text>
        <Text className="text-lg text-muted-foreground">
          Find best lawyer's near you
        </Text>
      </View>

      <Button
        variant="outline"
        disabled={isPending}
        onPress={() =>
          session
            ? authClient.signOut()
            : authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
              })
        }
        className="mx-auto w-80"
      >
        <Image source={images.google} className="size-6" />

        <Text className="text-lg font-bold text-primary">
          {isPending
            ? "Loading..."
            : session
              ? "Sign Out"
              : "Continue with Google"}
        </Text>
      </Button>
    </View>
  );
};

export default SignIn;
