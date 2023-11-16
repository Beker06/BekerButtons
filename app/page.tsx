import Container from "@/app/components/Container";
import ContainerGrid from "@/app/components/ContainerGrid";
import Button01 from "@/app/components/buttons/Button01";
import Button02 from "./components/buttons/Button02";
import Button03 from "./components/buttons/Button03";
import Button04 from "./components/buttons/Button04";
import Button05 from "./components/buttons/Button05";

export default function Home() {
  return (
    <Container>
      <ContainerGrid>
        <Button01/>
        <Button02/>
        <Button03/>
        <Button04/>
        <Button05/>
      </ContainerGrid>
    </Container>
  )
}
