import React from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { colors } from "constants/colors";
import { Scale } from "lucide-react-native";

import { Button } from "~/components/ui/button";
import { authClient } from "~/utils/auth";

// const list = [
//   { label: "Item 1", value: "1" },
//   { label: "Item 2", value: "2" },
//   { label: "Item 3", value: "3" },
//   { label: "Item 4", value: "4" },
//   { label: "Item 5", value: "5" },
//   { label: "Item 6", value: "6" },
//   { label: "Item 7", value: "7" },
//   { label: "Item 8", value: "8" },
// ];

const ApplyForLawyer = () => {
  const { data, isPending } = authClient.useSession();

  if (isPending || !data) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const { name = "" } = data.user;

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="flex-1 gap-4 p-4">
        <View className="mb-2 flex-row items-center gap-2">
          <Scale color={colors.light.foreground} size={32} />
          <Text className="text-3xl font-bold">Apply for Lawyer</Text>
        </View>

        <View>
          <Text className="mb-2">Name</Text>
          <TextInput
            className="rounded-md border border-accent px-4"
            placeholder="ex: John Doe"
            defaultValue={name}
          />
        </View>

        <View>
          <Text className="mb-2">Bio</Text>
          <TextInput
            className="min-h-32 rounded-md border border-accent px-4 align-top"
            placeholder="description"
            multiline={true}
            numberOfLines={4}
            defaultValue={""}
          />
        </View>

        <View>
          <Text className="mb-2">Phone Number</Text>
          <TextInput
            className="rounded-md border border-accent px-4"
            keyboardType="number-pad"
            defaultValue={""}
          />
        </View>

        <View>
          <Text className="mb-2">Experience (Years)</Text>
          <TextInput
            className="rounded-md border border-accent px-4"
            keyboardType="number-pad"
          />
        </View>

        <View>
          <Text className="mb-2">Specialization</Text>

          {/* <Dropdown
            data={list}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select your Specialization"
            searchPlaceholder="Search..."
            onChange={() => {
              //
            }}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderWidth: 1,
              //   borderColor: Colors.light.accent,
              borderRadius: 4,
            }}
          /> */}
        </View>

        <View>
          <Text className="mb-2">State</Text>

          {/* <Dropdown
            data={list}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select a State"
            searchPlaceholder="Search..."
            onChange={() => {
              //
            }}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderWidth: 1,
              //   borderColor: Colors.light.accent,
              borderRadius: 4,
            }}
          /> */}
        </View>

        <View>
          <Text className="mb-2">City</Text>

          {/* <Dropdown
            data={list}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select a City"
            searchPlaceholder="Search..."
            onChange={() => {
              //
            }}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderWidth: 1,
              //   borderColor: Colors.light.accent,
              borderRadius: 4,
            }}
          /> */}
        </View>

        <Button className="mt-4">
          <Text className="text-background">Apply</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default ApplyForLawyer;
