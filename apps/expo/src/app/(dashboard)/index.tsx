import { useState } from "react";
import { Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View className="relative h-full">
      <WebView
        source={{ uri: "https://mrlawyerfirm.web.app/" }}
        style={{ flex: 1 }}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
      />

      {isLoading && (
        <View className="absolute z-10 h-full w-full items-center justify-center bg-background">
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  );
}
