
import ContactoComponent from "@/components/general/contacto";
import EquipamientoComponent from "@/components/general/equipamiento";
import HeroComponent from "@/components/general/hero";
import HistoriaComponent from "@/components/general/historia";
import ProyectosComponent from "@/components/general/proyectos";
import ServiciosComponent from "@/components/general/servicios";
import { WhatsappLink } from "@/components/general/wsp";

export default function Home() {
  return (
   <div>
    <HeroComponent/>
    <ServiciosComponent/>
    <ProyectosComponent/>
    <HistoriaComponent/>
    <EquipamientoComponent/>
    <ContactoComponent/>
    <WhatsappLink/>
   </div>
  );
}
