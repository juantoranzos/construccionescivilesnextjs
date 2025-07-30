
import HeroComponent from "@/components/general/hero";
import HistoriaComponent from "@/components/general/historia";
import ProyectosComponent from "@/components/general/proyectos";
import ServiciosComponent from "@/components/general/servicios";

export default function Home() {
  return (
   <div>
    <HeroComponent/>
    <ServiciosComponent/>
    <HistoriaComponent/>
    <ProyectosComponent/>
   </div>
  );
}
