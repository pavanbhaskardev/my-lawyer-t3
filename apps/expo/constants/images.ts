import type { ImageSourcePropType } from "react-native";

import googleImg from "../assets/images/google_logo.png";
import logoImg from "../assets/images/my_lawyer_logo.png";

export const images: Record<string, ImageSourcePropType> = {
  logo: logoImg as ImageSourcePropType,
  google: googleImg as ImageSourcePropType,
};
