import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { theme } from "./theme";
import Router from "./Router";
export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router></Router>
    </MantineProvider>
  );
}
