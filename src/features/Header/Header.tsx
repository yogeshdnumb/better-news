import {
  ActionIcon,
  AppShell,
  Autocomplete,
  Burger,
  Group,
  Text,
  ThemeIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RxMoon, RxSun } from "react-icons/rx";
// import classes from "./Header.module.scss";

type HeaderProps = {
  mobileOpened: boolean;
  mobileToggle: () => void;
  desktopOpened: boolean;
  desktopToggle: () => void;
};

export default function Header({
  mobileOpened,
  mobileToggle,
  desktopOpened,
  desktopToggle,
}: HeaderProps) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme();

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  return (
    <AppShell.Header px={"md"}>
      <Group justify="space-between" h={"100%"}>
        <Group>
          <Burger
            hiddenFrom="sm"
            // opened={mobileOpened}
            onClick={mobileToggle}
          ></Burger>
          <Burger
            // size={"md"}
            visibleFrom="sm"
            // opened={desktopOpened}
            onClick={desktopToggle}
          ></Burger>
          <Text fz={"h2"} fw={"bold"}>
            BetterNews
          </Text>
        </Group>
        <Group>
          <Autocomplete
            visibleFrom="sm"
            placeholder="Search"
            leftSection={<FaMagnifyingGlass />}
          ></Autocomplete>
          {computedColorScheme == "light" && (
            <ActionIcon onClick={toggleColorScheme} size={"lg"} variant="light">
              <RxMoon size={"70%"}></RxMoon>
            </ActionIcon>
          )}
          {computedColorScheme == "dark" && (
            <ActionIcon onClick={toggleColorScheme} size={"lg"} variant="light">
              <RxSun size={"70%"}></RxSun>
            </ActionIcon>
          )}
        </Group>
      </Group>
    </AppShell.Header>
  );
}
