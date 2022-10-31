import React, { useState } from "react";
import data from "./cn_to_jp_word.json";
import {
  Textarea,
  Button,
  Grid,
  Title,
  Container,
  Paper,
  Center,
  Text,
} from "@mantine/core";

export default function App() {
  const [cn, setCn] = useState("");
  const [jp, setJp] = useState("");

  const handleClick = (p) => {
    const t = p === "cn" ? "jp" : "cn";
    const text = p === "cn" ? cn : jp;
    if (text) {
      let r = [];
      text.split("").forEach((w) => {
        const res = data.filter((d) => d[p] === w)[0];
        if (res) {
          return r.push(res[t]);
        } else {
          return r.push(w);
        }
      });
      p === "cn" && setJp(r.join(""));
      p === "jp" && setCn(r.join(""));
    }
  };

  return (
    <Container>
      <Title py={30} align='center'>
        😉　中日汉字转换｜日中漢字変換　🥳
      </Title>
      <Grid>
        <Grid.Col md={6}>
          <Paper shadow='sm' radius='xs' p='lg' md={6}>
            <Title align='center' order={4}>
              中文汉字→日语汉字
            </Title>
            <Textarea
              placeholder='请输入中文汉字'
              radius='xs'
              autosize
              minRows={10}
              maxRows={10}
              value={cn}
              my={10}
              onChange={(e) => {
                setCn(e.target.value);
                setJp("");
              }}
            />
            <Button fullWidth onClick={() => handleClick("cn")}>
              中→日
            </Button>
          </Paper>
        </Grid.Col>
        <Grid.Col md={6}>
          <Paper shadow='sm' radius='xs' p='lg' md={6}>
            <Title align='center' order={4}>
              日本語漢字→中国語漢字
            </Title>
            <Textarea
              placeholder='日本語漢字を入力してください'
              radius='xs'
              autosize
              minRows={10}
              maxRows={10}
              my={10}
              value={jp}
              onChange={(e) => {
                setJp(e.target.value);
                setCn("");
              }}
            />
            <Button
              fullWidth
              color='red'
              radius='md'
              onClick={() => handleClick("jp")}>
              日→中
            </Button>
          </Paper>
        </Grid.Col>
      </Grid>

      <Center>
        <Text className='sign' mt={30}>
          Created By <a href='mailto:tyoukyou23@yahoo.co.jp'>@tyoukyou23</a>
        </Text>
      </Center>
    </Container>
  );
}
