import {
  Accordion,
  ActionIcon,
  Alert,
  Badge,
  Center,
  Container,
  Group,
  Loader,
  Modal,
  Stack,
  ThemeIcon,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import useFetch from "@src/hooks/useFetch";
import { FaCircleInfo, FaFilter, FaXmark } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import ArticleCard from "./components/ArticleCard/ArticleCard";

export default function Articles() {
  const { category } = useParams();

  const { data, error, isLoading } = useFetch(`/${category}/all.json`);
  const [modalOpened, { open: modalOpen, close: modalClose }] =
    useDisclosure(false);

  if (error) {
    return (
      <Container>
        <Alert title="Error" radius={"sm"} icon={<FaCircleInfo />}>
          {error.message}
        </Alert>
      </Container>
    );
  } else if (data) {
    let pillsData = data.articles.map((article) => article.source.name);
    pillsData = Array.from(new Set(pillsData));
    return (
      <Container p={0} maw={800}>
        <Group align="center" mb={"md"} justify="center">
          <Title style={{ textAlign: "center" }}>
            {category?.charAt(0).toUpperCase() + category?.substring(1)}
          </Title>
          <Tooltip label="Filter" position="right" withArrow>
            <ActionIcon variant="light" onClick={modalOpen} size={"lg"}>
              <FaFilter size={"60%"}></FaFilter>
            </ActionIcon>
          </Tooltip>
        </Group>

        <Modal
          opened={modalOpened}
          onClose={modalClose}
          closeButtonProps={{
            icon: (
              <ActionIcon variant="default">
                <FaXmark size={25} />
              </ActionIcon>
            ),
          }}
          title={
            <Text fz={"h2"} style={{ textAlign: "center" }}>
              Filter
            </Text>
          }
        >
          <Group justify="center">
            {pillsData.map((pill, index) => {
              return (
                <Badge variant="light" key={index}>
                  {pill}
                </Badge>
              );
            })}
          </Group>
        </Modal>
        <Stack>
          {data &&
            data.articles.map((article, index) => {
              return (
                <ArticleCard
                  key={index}
                  imgUrl={article.urlToImage}
                  title={article.title}
                  url={article.url}
                ></ArticleCard>
              );
            })}
        </Stack>
      </Container>
    );
  } else if (isLoading) {
    return (
      <Center>
        <Loader size={50}></Loader>
      </Center>
    );
  }
}
