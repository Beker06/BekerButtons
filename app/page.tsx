import Container from "@/app/components/Container";
import ContainerGrid from "@/app/components/ContainerGrid";
import Button01 from "@/app/components/buttons/Button01";
import Button02 from "./components/buttons/Button02";

export default function Home() {
  return (
    <Container>
      <ContainerGrid>
        <Button01/>
        <Button02/>
      </ContainerGrid>
    </Container>
  )
}
