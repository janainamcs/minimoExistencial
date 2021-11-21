function setValues(){
  const ctx = document.getElementById('myChart').getContext('2d');
  
  let rendaBruta = document.getElementById('rendaBruta');
  let moradia = document.getElementById('moradia');
  let agua = document.getElementById('agua');
  let luz = document.getElementById('luz');
  let alimentacao = document.getElementById('alimentacao');
  let vestuario = document.getElementById('vestuario');
  let saude = document.getElementById('saude');
  let saibaMais = document.getElementById('saiba-mais')

  let contas = {
    moradia: parseFloat(moradia.value),
    agua: parseFloat(agua.value),
    luz: parseFloat(luz.value),
    alimentacao: parseFloat(alimentacao.value),
    vestuario: parseFloat(vestuario.value),
    saude: parseFloat(saude.value)
  }
  
  function somaMinimoExistencial(contas) {
    return contas.moradia + contas.agua + contas.luz + contas.alimentacao + contas.vestuario + contas.saude;
  };
  
  let renda = parseFloat(rendaBruta.value);
  
  let totalMinimoExistencial = somaMinimoExistencial(contas);
  
  let porcentagem = {};
  
  let saldoParaComprometimento = renda * 0.15;
  
  function calculaPorcentagem (){
    porcentagem.moradia = (contas.moradia / renda)*100;
    porcentagem.agua = (contas.agua / renda)*100;
    porcentagem.luz = (contas.luz / renda)*100;
    porcentagem.alimentacao = (contas.alimentacao / renda)*100;
    porcentagem.vestuario = (contas.vestuario / renda)*100;
    porcentagem.saude = (contas.saude / renda)*100;
    porcentagem.soma = (totalMinimoExistencial / renda)*100;
    porcentagem.saldoParaComprometimento = (saldoParaComprometimento / renda) * 100;
  };
  
  calculaPorcentagem();
  console.log(porcentagem);
  console.log(renda);
  console.log(totalMinimoExistencial);

  saibaMais.innerHTML = "So seu saldo para comprometimento é de " + saldoParaComprometimento + " e a porcentagem dos seus gastos sobre sua renda é de " + porcentagem.soma + ". A soma do seus gastos é " + totalMinimoExistencial;
  
  const myChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: ['Moradia', 'Água', 'Luz', 'Alimentacão', 'Vestuário', 'Saúde', 'Saldo para Comprometimento'],
          datasets: [{
              data: [porcentagem.moradia, porcentagem.agua, porcentagem.luz, porcentagem.alimentacao, porcentagem.vestuario, porcentagem.saude, porcentagem.saldoParaComprometimento],
              //data: [10, 5, 25, 10, 10, 10, 10],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(54, 162, 235, 0.5)',
                  'rgba(255, 206, 86, 0.5)',
                  'rgba(75, 192, 192, 0.5)',
                  'rgba(153, 102, 255, 0.5)',
                  'rgba(255, 159, 64, 0.5)',
                  'rgba(64, 83, 255, 0.5)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(64, 83, 255, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Gráfico demonstrativo do mínimo existencial'
          }
        }
      }
  });
};