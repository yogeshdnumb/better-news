import { Anchor, AppShell, NavLink, Stack, Text } from "@mantine/core";
import useFetch from "@src/hooks/useFetch";
// import classes from "./Navbar.module.scss";
import {
  FaAtom,
  FaBasketball,
  FaBusinessTime,
  FaComputer,
  FaHospital,
  FaNewspaper,
  FaStar,
} from "react-icons/fa6";
import { Link, NavLink as ReactNavLink } from "react-router-dom";

const CATEGORIES = [
  { name: "business", link: "/business", icon: FaBusinessTime },
  { name: "entertainment", link: "/entertainment", icon: FaStar },
  { name: "general", link: "/general", icon: FaNewspaper },
  { name: "health", link: "/health", icon: FaHospital },
  { name: "science", link: "/science", icon: FaAtom },
  { name: "sports", link: "/sports", icon: FaBasketball },
  { name: "technology", link: "/technology", icon: FaComputer },
];

export default function Navbar({ mobileClose }) {
  // const { data, isLoading, error } = useFetch("/business/in.jon");
  return (
    <AppShell.Navbar>
      <Stack gap={"xs"} p={"sm"}>
        {CATEGORIES.map((category, index) => {
          return (
            <NavLink
              key={index}
              variant="subtle"
              onClick={mobileClose}
              to={category.link}
              // c={"gray"}
              component={ReactNavLink}
              // fz={"xl"}
              leftSection={<category.icon size={"25"} />}
              label={<Text fz={"lg"}>{category.name}</Text>}
            ></NavLink>
          );
        })}
      </Stack>
    </AppShell.Navbar>
  );
}
