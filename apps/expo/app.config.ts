import type { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "My lawyer",
  slug: "my-lawyer",
  scheme: "my-lawyer",
  version: "0.1.0",
  orientation: "portrait",
  icon: "./assets/icon-light.jpg",
  userInterfaceStyle: "automatic",
  updates: {
    fallbackToCacheTimeout: 0,
  },
  jsEngine: "hermes",
  newArchEnabled: true,
  assetBundlePatterns: ["**/*"],
  ios: {
    bundleIdentifier: "com.sujith.mylawyer",
    supportsTablet: true,
    icon: {
      light: "./assets/icon-light.jpg",
      dark: "./assets/icon-dark.png",
    },
  },
  android: {
    package: "com.sujith.mylawyer",
    adaptiveIcon: {
      foregroundImage: "./assets/icon-light.jpg",
      backgroundColor: "#1F104A",
    },
    edgeToEdgeEnabled: true,
  },
  extra: {
    eas: {
      projectId: "483c225e-ec6f-46ec-99bf-bcdff3c6bfcc",
    },
  },
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  plugins: [
    "expo-router",
    "expo-secure-store",
    "expo-web-browser",
    [
      "expo-splash-screen",
      {
        backgroundColor: "#E4E4E7",
        image: "./assets/icon-light.jpg",
        dark: {
          backgroundColor: "#18181B",
          image: "./assets/icon-dark.png",
        },
      },
    ],
  ],
});
