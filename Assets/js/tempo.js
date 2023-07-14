export const ConstrutoraData = (d)=>{
    let mês = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ]
    let semana =[
          "Domingo",
          "Segunda",
          "Terça",
          "Quarta",
          "Quinta",
          "Sexta",
          "Sábado" 
    ]
    let dia = semana[d.getDay()];
    let data =d.getDate();
    let meses = mês[d.getMonth()];
    let ano = d.getFullYear();
    return `${dia} ${data} ${meses} ${ano}`;
}