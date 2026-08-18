"use client";

import { TarjetaPage, type Contact } from "../tarjeta/page";

const moroContact: Contact = {
  firstName: "Leandro",
  lastName: "Moro",
  role: "Vocal Titular",
  organization: "Fundación Mundo Puerto",
  phone: "+54 9 11 4193 6195",
  email: "info@mundopuerto.ar",
  website: "https://mundopuerto.ar",
};

export default function TarjetaMoroPage() {
  return <TarjetaPage initialContact={moroContact} />;
}