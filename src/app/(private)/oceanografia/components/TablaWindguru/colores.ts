export function colorOleaje(valor: number) {

  if (valor < 0.8)
    return "bg-blue-900 text-white";

  if (valor < 1.2)
    return "bg-blue-700 text-white";

  if (valor < 1.6)
    return "bg-cyan-500 text-white";

  if (valor < 2)
    return "bg-green-500 text-white";

  if (valor < 2.5)
    return "bg-yellow-300";

  if (valor < 3)
    return "bg-orange-500 text-white";

  return "bg-red-600 text-white";

}

export function colorViento(valor: number) {

  if (valor < 8)
    return "bg-green-600 text-white";

  if (valor < 12)
    return "bg-lime-500";

  if (valor < 18)
    return "bg-yellow-300";

  if (valor < 24)
    return "bg-orange-500 text-white";

  return "bg-red-600 text-white";

}

export function colorPeriodo(valor: number) {

  if (valor >= 18)
    return "bg-green-700 text-white";

  if (valor >= 16)
    return "bg-green-500 text-white";

  if (valor >= 14)
    return "bg-lime-500";

  if (valor >= 12)
    return "bg-yellow-300";

  return "bg-red-600 text-white";

}

export function colorTemperatura(valor: number) {

  if (valor <= 14)
    return "bg-cyan-300";

  if (valor <= 18)
    return "bg-green-300";

  if (valor <= 22)
    return "bg-yellow-300";

  if (valor <= 26)
    return "bg-orange-300";

  return "bg-red-500 text-white";

}

export function colorNubes(valor: number) {

  if (valor < 20)
    return "bg-sky-100";

  if (valor < 40)
    return "bg-slate-200";

  if (valor < 60)
    return "bg-slate-300";

  if (valor < 80)
    return "bg-slate-400 text-white";

  return "bg-slate-700 text-white";

}

export function colorLluvia(valor: number) {

  if (valor === 0)
    return "bg-white";

  if (valor < 1)
    return "bg-cyan-200";

  if (valor < 3)
    return "bg-blue-300";

  return "bg-blue-700 text-white";

}