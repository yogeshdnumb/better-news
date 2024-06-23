import { AspectRatio, Card, Center, Image, Paper, Text } from "@mantine/core";

import styles from "./Article.module.scss";
import { Link, useNavigate } from "react-router-dom";

export default function ArticleCard({ title, imgUrl, url }) {
  const navigate = useNavigate();
  return (
    <Paper
      component={Link}
      to={url}
      shadow="md"
      radius={"sm"}
      withBorder
      p={{ base: "xs" }}
      classNames={{ root: styles.ArticleCard }}
      mih={125}
      // mah={150}
    >
      <Text fz={{ base: "sm", xs: "md" }} style={{ overflowX: "auto" }}>
        {title}
      </Text>
      <AspectRatio ratio={1}>
        <Image
          radius={"xs"}
          src={imgUrl}
          w={{ base: 75, xs: 100, sm: 150 }}
        ></Image>
      </AspectRatio>
    </Paper>
  );
}
