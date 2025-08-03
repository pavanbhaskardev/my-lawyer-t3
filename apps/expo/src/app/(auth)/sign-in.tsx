import React from "react";
import { Button, Text } from "react-native";
import { Redirect } from "expo-router";

import { authClient } from "~/utils/auth";

const SignIn = () => {
  const { data: session } = authClient.useSession();

  if (session?.user) {
    return <Redirect href={"/"} />;
  }

  return (
    <>
      <Text className="pb-2 text-center text-xl font-semibold text-zinc-900">
        {session?.user.name ? `Hello, ${session.user.name}` : "Not logged in"}
      </Text>

      <Button
        onPress={() =>
          session
            ? authClient.signOut()
            : authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
              })
        }
        title={session ? "Sign Out" : "Sign In With Google"}
        color={"#5B65E9"}
      />
    </>
  );
};

export default SignIn;
