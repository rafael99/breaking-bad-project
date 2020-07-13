
export const itemStatus = (status) => {

  switch (status) {
    case "Deceased":
      return "Morto";
      break;
    case "Presumed dead":
      return "Morte presumida";        
      break;
    case "Alive":
      return "Vivo";
      break;
    case "Unknown":
      return "Desconhecido"        
      break;
  
    default:
      return '?';
      break;
  }

}

export const dateEnToBr = (date) => {
  if (date === "Unknown") 
    return "Desconhecido";
  
  let dateBr = new Date(date);
  let options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return dateBr.toLocaleDateString('pt-BR', options);
}