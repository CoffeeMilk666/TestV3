import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>祕密花園</Title>
      <h1>歡迎來到祕密花園!</h1>
      <Counter />
      <p>
        來探索未知的秘密吧!
      </p>
    </main>
  );
}
