import React, { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { colors } from "constants/colors";
// import { authClient } from "@/lib/auth-client";

import { Plus } from "lucide-react-native";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { TextArea } from "~/components/ui/textarea";

const TagsTab = () => {
  const [tagName, setTagName] = useState("");
  const [tagDescription, setTagDescription] = useState("");

  //   const cookies = authClient.getCookie();
  //   const hcClient = honoClient({ cookies });

  //   const { mutate, isPending } = useMutation({
  //     mutationFn: hcClient.api["create-specialization"].$post,
  //     onSuccess: () => {
  //       setTagName("");
  //       setTagDescription("");
  //     },
  //   });

  return (
    <ScrollView className="flex-1">
      <View>
        <Text className="text-2xl font-bold">Tags</Text>

        <View className="mt-4 gap-4">
          <Input
            placeholder="Enter some text"
            keyboardType="default"
            returnKeyType="done"
            value={tagName}
            onChangeText={(text) => setTagName(text)}
          />

          <TextArea
            placeholder="Add tag description here..."
            value={tagDescription}
            onChangeText={(text) => setTagDescription(text)}
            numberOfLines={4}
          />

          <Button
          // onPress={() => {
          //   mutate({
          //     json: {
          //       name: tagName,
          //       description: tagDescription,
          //     },
          //   });
          // }}
          >
            <Plus size={16} color={colors.light.background} />
            <Text className="text-background">Create</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const LawyersTab = () => {
  return (
    <ScrollView className="flex-1">
      <View>
        <Text className="text-2xl font-bold">Lawyers</Text>

        <View className="mt-4 gap-4">
          <TextInput
            className="rounded-md border border-accent px-4"
            placeholder="name"
          />

          <TextInput
            className="min-h-32 rounded-md border border-accent px-4 align-top"
            placeholder="description"
            multiline={true}
            numberOfLines={4}
          />

          {/* <Button
            title="Create"
            variant="outline"
            prefixLogo={<Plus color={Colors.light.primary} />}
          /> */}
        </View>
      </View>
    </ScrollView>
  );
};

const Admin = () => {
  return (
    <Tabs defaultValue="tags" className="h-full w-full bg-background px-4 pt-4">
      <TabsList>
        <TabsTrigger value="tags">Tags</TabsTrigger>
        <TabsTrigger value="lawyers">Lawyers</TabsTrigger>
      </TabsList>

      <TabsContent value="tags">
        <TagsTab />
      </TabsContent>
      <TabsContent value="lawyers">
        <LawyersTab />
      </TabsContent>
    </Tabs>
  );
};

export default Admin;
