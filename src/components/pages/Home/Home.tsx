import { ContainerGlobal } from "./style";
import {Input} from "@stardust-ds/react"
import {useState} from "react"
import { Typography } from "@stardust-ds/react";

function Home() {
  const [professional, setProfessional] = useState<string>('')

  const  createProfessional= () => {
    
  }


  return (
      <ContainerGlobal>
        <Typography type="h2" color="#fff">
          Cadastro de Profissional
        </Typography>
        <div className="column">
          <Input
            value={professional}
            onChange={(e) => setProfessional(e.target.value)}
            placeholder="Digite seu nome"
          />
        </div>
      </ContainerGlobal>
  );
}

export default Home;
