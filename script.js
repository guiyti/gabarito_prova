// Chave para correção
const chave = [0, 1, 2, 2, 2, 1, 0, 2, 4, 4, 3, 1]; // Índices corretos
const numeroDeQuestoes = chave.length; // Total de questões
let qrCodeReader;
let isQrModalOpen = false;

// Criação do gabarito
function criaGabarito() {
    const gabarito = document.getElementById('gabarito');
  
    // Cabeçalhos da tabela
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    th.innerHTML = "Questão";
    tr.appendChild(th);
    for (let i = 0; i < 4; i++) {
      const th = document.createElement('th');
      th.innerHTML = String.fromCharCode(65 + i); // A, B, C, D
      tr.appendChild(th);
    }
    gabarito.appendChild(tr);
  
    // Linhas para as alternativas
    for (let i = 0; i < numeroDeQuestoes; i++) {
      const tr = document.createElement('tr');
      const th = document.createElement('th');
      th.innerHTML = `Q ${i + 1}`;
      tr.appendChild(th);
  
      for (let j = 0; j < 4; j++) {
        const td = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `questao${i}`; // O name é único para cada questão
        input.value = j + 1; // Valor da alternativa
        td.appendChild(input);
        tr.appendChild(td);
  
        // Adiciona o evento de mudança aqui
        input.addEventListener('change', verificarCorrecao);
        console.log('Adicionado evento de correção ao radio Q', i + 1, 'Alternativa', String.fromCharCode(65 + j)); // 65 é o valor ASCII de 'A'
      }
  
      gabarito.appendChild(tr);
    }
  }

// Função que verifica a correção automaticamente
function verificarCorrecao() {
  // Obtém o código de respostas inserido pelo usuário
  const codigoRespostas = document.getElementById('codigoRespostas').value;

  // Verifica se o código tem 12 dígitos
  if (codigoRespostas.length !== 12) {
    document.getElementById('result').innerHTML = 'Leia o QR Code';
    return;
  }

  // Converte o código de respostas para vetor de números
  const respostaCorreta = Array.from(codigoRespostas).map(Number); 

  const respostasSelecionadas = [];

  // Obtém as alternativas selecionadas
  for (let i = 0; i < numeroDeQuestoes; i++) {
    const alternativaSelecionada = document.querySelector(`input[name="questao${i}"]:checked`);
    if (alternativaSelecionada) {
      respostasSelecionadas.push(parseInt(alternativaSelecionada.value));
    } else {
      respostasSelecionadas.push(null); // Se não houver seleção, coloca null
    }
  }

  // Subtrai a chave do vetor respostaCorreta para obter o vetor comparativo
  const respostaComparativa = respostaCorreta.map((resposta, index) => resposta - chave[index]);

  // Verifica os acertos
  let acertos = 0;
  for (let i = 0; i < numeroDeQuestoes; i++) {
    if (respostasSelecionadas[i] === respostaComparativa[i]) {
      acertos++;
    }
  }


  // resulado é da quantidade de acertos dividido pelo total de questões vezes 2
  const resultado = (acertos / numeroDeQuestoes) * 5;
  // Exibe o resultado
  document.getElementById('result').innerHTML = `Você acertou ${acertos} de ${numeroDeQuestoes} questões.`;
  document.getElementById('nota').innerHTML = `Nota da prova (max:5.00): ${resultado.toFixed(2)}`;
}

// Adiciona eventos para corrigir automaticamente
const radios = document.querySelectorAll('input[type="radio"]');
radios.forEach(radio => {
  radio.addEventListener('change', verificarCorrecao);
  console.log('Adicionado evento de correção');
});

// Função para abrir o modal do QR Code
document.getElementById('qrCodeButton').addEventListener('click', () => {
  const qrModal = document.getElementById('qr-modal');
  qrModal.style.display = 'flex'; // Exibe o modal
  isQrModalOpen = true; // Marca o modal como aberto

  if (!qrCodeReader) {
    qrCodeReader = new Html5Qrcode("qr-reader");
  }

  qrCodeReader.start(
    { facingMode: "environment" }, // Preferencialmente usa a câmera traseira em dispositivos móveis
    {
      fps: 10, // Frames por segundo para escaneamento
      qrbox: 250 // Tamanho da caixa de escaneamento
    },
    (decodedText) => {
      // Quando o QR code é lido com sucesso, insere o valor no input
      document.getElementById('codigoRespostas').value = decodedText;

      // Esconde o modal e exibe o formulário com as alternativas
      qrModal.style.display = 'none'; // Fecha o modal
      isQrModalOpen = false; // Marca o modal como fechado
      document.getElementById('gabaritoForm').style.display = 'block'; // Mostra o formulário
      document.getElementById('qrCodeButton').style.display = 'none';
      verificarCorrecao(); // Chama a função para verificar a correção
      qrCodeReader.stop(); // Para o leitor de QR code
    },
    (errorMessage) => {
      console.log(`Erro de leitura: ${errorMessage}`);
    }
  ).catch((err) => {
    console.error(`Erro ao iniciar a leitura do QR Code: ${err}`);
  });
});

// Função para fechar o modal
document.getElementById('closeQrModal').addEventListener('click', () => {
  qrCodeReader.stop(); // Para o leitor de QR code
  document.getElementById('qr-modal').style.display = 'none'; // Fecha o modal
  isQrModalOpen = false; // Marca o modal como fechado
});

// Inicializa o gabarito
criaGabarito(); // Gera a tabela de perguntas e alternativas