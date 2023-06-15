import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main>
      <Title>後花園</Title>
      <h1>這裡是後庭園</h1>
      <Counter />
      <p>
        別找啦你是找不到的~
      </p>
    </main>
  );
}
