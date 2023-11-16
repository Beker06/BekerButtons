import Container from "@/app/components/Container";
import ContainerGrid from "@/app/components/ContainerGrid";
import Button01 from "@/app/components/buttons/Button01";
import Button02 from "./components/buttons/Button02";
import Button03 from "./components/buttons/Button03";
import Button04 from "./components/buttons/Button04";
import Button05 from "./components/buttons/Button05";
import Button06 from "./components/buttons/Button06";
import Button07 from "./components/buttons/Button07";
import Button08 from "./components/buttons/Button08";
import Button09 from "./components/buttons/Button09";
import Button10 from "./components/buttons/Buttons10";

export default function Home() {
  return (
    <Container>
      <ContainerGrid>
        <Button06/>
        <Button03/>
        <Button04/>
        <Button07/>
        <Button02/>
        <Button05/>
        <Button01/>
        <Button09/>
        <Button08/>
        <Button10/>
      </ContainerGrid>
    </Container>
  )
}
