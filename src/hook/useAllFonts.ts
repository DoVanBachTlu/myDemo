import { useFonts } from "expo-font";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

const useAllFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Roboto: require("../../assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Italic": require("../../assets/fonts/Roboto-Italic.ttf"),
        "Roboto-Light": require("../../assets/fonts/Roboto-Light.ttf"),
        "Roboto-Black": require("../../assets/fonts/Roboto-Black.ttf"),
        "Roboto-BlackItalic": require("../../assets/fonts/Roboto-BlackItalic.ttf"),
        "Roboto-BoldItalic": require("../../assets/fonts/Roboto-BoldItalic.ttf"),
        "Roboto-LightItalic": require("../../assets/fonts/Roboto-LightItalic.ttf"),
        "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
        "Roboto-MediumItalic": require("../../assets/fonts/Roboto-MediumItalic.ttf"),
        "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Thin": require("../../assets/fonts/Roboto-Thin.ttf"),
        "Roboto-ThinItalic": require("../../assets/fonts/Roboto-ThinItalic.ttf"),
      });

      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return {};
};

export default useAllFonts;