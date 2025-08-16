import type { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Redirect, Tabs, useRouter } from "expo-router";
import { colors } from "constants/colors";
import { images } from "constants/images";
import { Home, UserRoundCog, UsersRound } from "lucide-react-native";

import { authClient } from "~/utils/auth";

interface TabHeaderProps extends BottomTabHeaderProps {
  showHeader?: boolean;
}

const Header = ({ showHeader = true }: TabHeaderProps) => {
  const router = useRouter();

  if (showHeader) {
    return (
      <View className="h-16 flex-row items-center justify-start gap-2 bg-muted px-4">
        <TouchableOpacity
          onPress={() => {
            router.push("/(dashboard)");
          }}
          className="flex-row items-center gap-2"
        >
          <Image source={images.logo} className="size-10" />
          <Text className="text-xl font-bold text-foreground">My Lawyer</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return null;
  }
};

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

  const role = data.user.role ?? "";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#3498DA",
        tabBarStyle: {
          height: 60,
          backgroundColor: colors.light.background,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home color={color} size={24} />,
          header: (props) => <Header {...props} showHeader={false} />,
        }}
      />

      <Tabs.Screen
        name="lawyers/index"
        options={{
          title: "Lawyers",
          tabBarIcon: ({ color }) => <UsersRound color={color} size={24} />,
          header: Header,
        }}
      />

      <Tabs.Screen
        name="lawyers/apply/index"
        options={{
          href: null,
          header: Header,
        }}
      />

      <Tabs.Screen
        name="lawyers/[id]/index"
        options={{
          href: null,
          header: Header,
        }}
      />

      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          tabBarIcon: () => {
            return data.user.image ? (
              <Image
                src={data.user.image ?? ""}
                alt="user-profile"
                className="size-8 rounded-full"
              />
            ) : (
              <View className="size-6 rounded-full bg-slate-500" />
            );
          },
          header: Header,
        }}
      />

      <Tabs.Screen
        name="admin/index"
        options={{
          title: "Admin",
          tabBarIcon: ({ color }) => <UserRoundCog color={color} size={24} />,
          header: Header,
          href: role.split(",").some((r) => r === "admin")
            ? "/(dashboard)/admin"
            : null,
        }}
      />
    </Tabs>
  );
}
