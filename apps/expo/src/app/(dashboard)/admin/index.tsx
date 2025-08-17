import React, { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { colors } from "constants/colors";
import { Plus, X } from "lucide-react-native";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { TextArea } from "~/components/ui/textarea";
import { trpc } from "~/utils/api";

const CaseTab = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const queryClient = useQueryClient();
  const { data: cases, isPending } = useQuery(trpc.cases.all.queryOptions());

  const { mutate: createCase, isPending: creatingCase } = useMutation(
    trpc.cases.create.mutationOptions({
      onSuccess: async () => {
        setName("");
        setDescription("");
        await queryClient.invalidateQueries(trpc.cases.all.queryFilter());
      },
    }),
  );

  return (
    <>
      <View>
        <Text className="text-2xl font-bold">Cases</Text>

        <View className="mt-4 gap-4">
          <Input
            placeholder="Enter case name"
            keyboardType="default"
            returnKeyType="done"
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <TextArea
            placeholder="Enter case description here..."
            value={description}
            onChangeText={(text) => setDescription(text)}
            numberOfLines={4}
          />

          <Button
            disabled={creatingCase}
            onPress={() => {
              createCase({
                name,
                description,
              });
            }}
          >
            <Plus size={16} color={colors.light.background} />
            <Text className="text-background">
              {creatingCase ? "Creating..." : "Create"}
            </Text>
          </Button>
        </View>
      </View>

      <ScrollView className="mt-4 flex-1">
        {isPending && <Text>Loading...</Text>}

        {cases
          ? cases.map((c, idx) => {
              return (
                <Card key={idx} className="mb-4">
                  <CardHeader>
                    <CardTitle>
                      <Text className="text-xl font-bold text-foreground">
                        {c.name}
                      </Text>
                    </CardTitle>

                    <CardDescription>
                      <Button
                        size="icon"
                        variant="destructive"
                        className="size-8"
                      >
                        <X color={colors.light.background} size={16} />
                      </Button>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Text className="text-foreground">{c.description}</Text>
                  </CardContent>
                </Card>
              );
            })
          : null}
      </ScrollView>
    </>
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
    <Tabs
      defaultValue="cases"
      className="h-full w-full bg-background px-4 pt-4"
    >
      <TabsList>
        <TabsTrigger value="cases">Cases</TabsTrigger>
        <TabsTrigger value="lawyers">Lawyers</TabsTrigger>
      </TabsList>

      <TabsContent value="cases">
        <CaseTab />
      </TabsContent>
      <TabsContent value="lawyers">
        <LawyersTab />
      </TabsContent>
    </Tabs>
  );
};

export default Admin;
