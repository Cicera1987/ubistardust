import { ContainerGlobal } from "./style";
import {Input} from "@stardust-ds/react"
import {useState} from "react"
import { Typography } from "@stardust-ds/react";

function Home() {
  const [professional, setProfessional] = useState<string>('')

  const  createProfessional= () => {
    
  }


  return (
    <>
      <div
        style={{
          width: "100%",
          height: "600px",
          padding: "10px 20px",
        }}
      >
        <Typography type="h2" color="#ccc">
          Profissionais
        </Typography>
        <div className="column">
          <Input
            value={professional}
            onChange={(e) => setProfessional(e.target.value)}
            placeholder="Digite seu nome"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
