import { ReactNode } from "react";

export interface FilaWindguruProps {

  titulo: string;

  icono: ReactNode;

  valores: number[];

  formatter?: (valor: number) => string;

  getColor: (valor: number) => string;

}

export interface CabeceraDiasProps {

  fechas: string[];

}

export interface CabeceraHorasProps {

  horas: string[];

}

export interface LeyendaItem {

  color: string;

  texto: string;

}