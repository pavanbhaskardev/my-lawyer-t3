import { Image, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { colors } from "constants/colors";
import { Phone } from "lucide-react-native";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

const sujithDetails = {
  imageURL: "https://mrlawyerfirm.web.app/images/sujithAddanki.png",
  name: "Sujith Addanki",
  state: "Telangana",
  city: "Hyderabad",
  slug: "sujith-addanki",
  experience: 2,
  bio: "Hi, I’m Sujith Addaniki, a practicing lawyer based in Telangana. I specialize in criminal, civil, and family law. I believe in making the legal process as transparent and stress-free as possible for my clients!",
  specialization: ["Family Law", "Property Cases", "Banking Laws"],
  mobile: 9440777253,
};

export default function DetailsScreen() {
  const { _id } = useLocalSearchParams();

  //   const lawyerDetails = lawyers.find(({ slug }) => slug === id);

  return (
    <View className="flex-1 justify-start bg-background p-4">
      <Image
        src={sujithDetails.imageURL}
        alt={sujithDetails.name}
        className="size-36 rounded-full border object-cover"
      />

      <View className="mt-4 flex-row items-center gap-2">
        <Text className="text-3xl font-bold">{sujithDetails.name}</Text>
        <Text className="mb-0 text-2xl text-primary">
          ({sujithDetails.experience} Yrs)
        </Text>
      </View>

      <Text>{`${sujithDetails.state}, ${sujithDetails.city}`}</Text>

      <Text className="mt-3 max-w-[22rem] text-lg">{sujithDetails.bio}</Text>

      <View className="mt-4">
        <Text className="text-2xl font-bold">Specialization</Text>

        <View className="mt-2 flex-row gap-2">
          {sujithDetails.specialization.map((item, idx) => (
            <Badge key={idx} variant="secondary">
              <Text className="text-sm text-background">{item}</Text>
            </Badge>
          ))}
        </View>
      </View>

      <Button className="mt-8">
        <Phone color={colors.light.background} size={16} />
        <Text className="text-background">Contact</Text>
      </Button>
    </View>
  );
}
