import React from "react";
import { Image, Text, View } from "react-native";
import { Link } from "expo-router";
import { colors } from "constants/colors";
import { LogOut, Scale } from "lucide-react-native";

import { Button } from "~/components/ui/button";
import { authClient } from "~/utils/auth";

const Profile = () => {
  const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    return await authClient.signOut();
  };

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

      <View className="gap-4">
        <Link href="/(dashboard)/lawyers/apply" asChild push>
          <Button size="lg">
            <Scale color={colors.light.background} size={16} />
            <Text className="text-background">Apply for Lawyer</Text>
          </Button>
        </Link>

        <Button
          variant="destructive"
          onPress={async () => {
            await handleLogout();
          }}
        >
          <LogOut color={colors.light.background} size={16} />
          <Text className="text-background">Logout</Text>
        </Button>
      </View>
    </View>
  );
};

export default Profile;
