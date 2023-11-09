import WebSocketChat from "@/components/WebSocketChat";
import Image from "next/image";
import DappsLogo from "../assets/DappsLogo.png";
import FrameworkSelector from "@/components/FrameworkSelector";
import AgentModelSelector from "@/components/AgentModelSelector";
import TextPrompt from "@/components/TextPrompt";
import Icon1 from "../assets/MessageIcon.png";
import Icon2 from "../assets/Message2Icon.png";

export default function Home() {
  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-1/6 bg-[1E1E1E] p-4">
          {/* Contenido del Sidebar */}
          <Image src={DappsLogo} alt="DappsLogo" />
          <ul className="flex flex-col ml-4 my-4">
            <li className="flex items-center mb-4">
              <Image
                src={Icon1}
                alt="Trabajos Anteriores"
                className="w-5 h-5 mr-2"
              />
              <label>Nuevo Chat</label>
            </li>
            <li className="flex items-center mb-2">
              <Image
                src={Icon2}
                alt="Trabajos Anteriores"
                className="w-5 h-5 mr-2"
              />
              <label>Trabajos Anteriores</label>
            </li>
          </ul>
        </div>

        {/* Contenido principal */}
        <div className="w-full p-4 bg-gradient-to-r from-color1 to-color2">
          {/* Nombre de usuario en la esquina superior derecha */}
          <div className="text-right mb-4">
            <p>Usuario: seba@seba.com</p>
          </div>
          {/* Contenido en el centro */}
          
          <FrameworkSelector />
          <AgentModelSelector />
          <TextPrompt />
        </div>
      </div>
    </>
  );
}
