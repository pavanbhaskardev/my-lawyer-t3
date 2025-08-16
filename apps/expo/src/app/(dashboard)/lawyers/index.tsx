import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";

const lawyers = [
  {
    imageURL: "https://mrlawyerfirm.web.app/images/sujithAddanki.png",
    name: "Sujith Addanki",
    state: "Telangana",
    city: "Hyderabad",
    slug: "sujith-addanki",
    experience: 2,
    bio: "Hi, I’m Sujith Addaniki, a practicing lawyer based in Telangana. I specialize in criminal, civil, and family law. I believe in making the legal process as transparent and stress-free as possible for my clients!",
    specialization: ["Family Law", "Property Cases", "Banking Laws"],
    mobile: 9440777253,
  },
  {
    imageURL: "https://mrlawyerfirm.web.app/images/rajeshAddanki.png",
    name: "Rajesh Addanki",
    state: "Andhra Pradesh",
    city: "Bhimavaram",
    slug: "rajesh-addanki",
    experience: 10,
    bio: "Hi, I’m Rajesh Addaniki, a practicing lawyer based in Telangana. I specialize in criminal, civil, and family law. I believe in making the legal process as transparent and stress-free as possible for my clients!",
    specialization: ["Family Law", "Property Cases", "Banking Laws"],
    mobile: 9440777253,
  },
] as const;

const Lawyers = () => {
  return (
    <View className="flex-1 bg-background">
      <ScrollView className="flex-1 px-4 py-4">
        {lawyers.map(({ name, city, imageURL, state, slug }) => (
          <View
            className="mb-6 rounded-md border border-accent px-2 py-2.5"
            key={name}
          >
            <Link href={`/(dashboard)/lawyers/${slug}`}>
              <View className="flex-1 flex-row gap-2">
                <Image
                  src={imageURL}
                  alt={name}
                  className="size-16 rounded-full object-cover"
                />

                <View className="mt-2 flex">
                  <Text className="text-xl font-bold">{name}</Text>
                  <Text className="">{`${state}, ${city}`}</Text>
                </View>
              </View>
            </Link>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Lawyers;
