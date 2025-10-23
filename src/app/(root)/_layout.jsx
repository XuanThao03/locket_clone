import { Redirect, Stack } from "expo-router";

export default function Layout() {
  // const { isSignedIn, isLoaded } = useUser();

  // if (!isLoaded) return null; // this is for a better ux
  const isSignedIn = false;
  if (!isSignedIn) {
    return <Redirect href={"/welcome"} />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
