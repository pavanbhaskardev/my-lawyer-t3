import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { queryClient } from "~/utils/api";

import "../styles.css";

import { QueryClientProvider } from "@tanstack/react-query";

// This is the main layout of the app
// It wraps your pages with the providers they need
export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      {/*
          The Stack component displays the current page.
          It also allows you to configure your screens 
        */}

      <SafeAreaView className="h-full">
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
        <StatusBar style={"dark"} />
      </SafeAreaView>
    </QueryClientProvider>
  );
}
