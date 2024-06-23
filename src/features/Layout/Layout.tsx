// import classes from "./Layout.module.scss";

import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Navbar from "../Navbar/Navbar";
import Header from "@features/Header/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [mobileOpened, { toggle: mobileToggle, close: mobileClose }] =
    useDisclosure();
  const [desktopOpened, { toggle: desktopToggle }] = useDisclosure(true);

  return (
    <AppShell
      padding={"md"}
      header={{ height: 60 }}
      navbar={{
        width: 200,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
    >
      <Header
        mobileOpened={mobileOpened}
        mobileToggle={mobileToggle}
        desktopOpened={desktopOpened}
        desktopToggle={desktopToggle}
      ></Header>
      <Navbar mobileClose={mobileClose}></Navbar>
      <AppShell.Main>{<Outlet />}</AppShell.Main>
    </AppShell>
  );
}
