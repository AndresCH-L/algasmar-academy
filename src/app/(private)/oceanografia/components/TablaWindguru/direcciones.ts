export function obtenerFlecha(grados: number) {

  if (grados >= 337 || grados < 22)
    return "↑";

  if (grados < 67)
    return "↗";

  if (grados < 112)
    return "→";

  if (grados < 157)
    return "↘";

  if (grados < 202)
    return "↓";

  if (grados < 247)
    return "↙";

  if (grados < 292)
    return "←";

  return "↖";

}