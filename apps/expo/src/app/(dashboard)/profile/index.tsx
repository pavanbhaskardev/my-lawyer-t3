import React from "react";
import { Image, Text, View } from "react-native";

import { Button } from "~/components/ui/button";
// import { Link } from "expo-router";
// import { Button } from "@/components/ui/button";
// import { Colors } from "@/constants/Colors";
// import { LogOut, Scale } from "lucide-react-native";

import { authClient } from "~/utils/auth";

const Profile = () => {
  const { data: session } = authClient.useSession();

  //   const handleLogout = async () => {
  //     return await authClient.signOut();
  //   };

  const userDetails = {
    name: session ? session.user.name : "",
    image: session ? session.user.image : "",
    joinedData: session ? session.user.createdAt : "",
  };

  return (
    <View className="flex-1 items-center justify-start gap-8 bg-background py-4">
      <View className="items-center">
        <Image
          src={userDetails.image ?? ""}
          alt="user-profile"
          className="mb-3 size-24 rounded-full"
        />

        <Text className="text-2xl font-bold text-foreground">
          {userDetails.name}
        </Text>
        <Text className="text-muted-foreground">{`Joined on ${userDetails.joinedData ? userDetails.joinedData.toString() : ""}`}</Text>
      </View>

      <Button>
        <Text className="text-background">🎲 Toggle theme</Text>
      </Button>

      {/* <View className="gap-4">
        <Link href="/apply-for-lawyer" asChild push>
          <Button
            title="Apply for Lawyer"
            size="lg"
            prefixLogo={<Scale color={Colors.light.background} size={20} />}
          />
        </Link>

        <Button
          variant="outline"
          title="Logout"
          size="lg"
          prefixLogo={<LogOut color={Colors.light.primary} size={20} />}
          onPress={() => {
            handleLogout();
          }}
        />
      </View> */}
    </View>
  );
};

export default Profile;
