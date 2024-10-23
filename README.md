
# Leitor de QR Code e OMR

Este projeto consiste em um aplicativo web para ler códigos QR e corrigir gabaritos de respostas de múltipla escolha. O sistema permite que os usuários escaneiem um QR code para obter um código de respostas e, em seguida, preencham um formulário com suas seleções. A correção é feita automaticamente e o número de acertos é exibido ao usuário.

## Funcionalidades

- **Leitura de QR Code**: Utiliza a biblioteca Html5Qrcode para escanear códigos QR com a câmera do dispositivo.
- **Formulário de Gabarito**: Permite ao usuário selecionar respostas para cada questão em uma tabela.
- **Correção Automática**: A correção é realizada automaticamente quando o usuário seleciona as respostas.
- **Resultado Final**: Exibe o número de acertos ao usuário após a seleção das respostas.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- [Html5Qrcode](https://github.com/mebjas/html5-qrcode) (biblioteca para leitura de QR Codes)

## Estrutura do Projeto

- `index.html`: Página principal do aplicativo.
- `style.css`: Arquivo CSS para estilização.
- `script.js`: Lógica do aplicativo em JavaScript.

## Como Usar

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/guiyti/gabarito_prova.git
   cd gabarito_prova
   ```

2. **Abra o arquivo `index.html` em um navegador**.

3. **Clique no botão para ler o QR Code**. Depois de escanear, preencha as respostas para cada questão.

4. **As correções serão feitas automaticamente** e o número de acertos será exibido.

## Contribuições

Contribuições são bem-vindas! Se você deseja contribuir, siga estas etapas:

1. Fork este repositório.
2. Crie uma nova branch (`git checkout -b feature/nome-da-feature`).
3. Faça suas alterações e confirme (`git commit -m 'Adicionando nova feature'`).
4. Envie para o branch original (`git push origin feature/nome-da-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Para mais informações, entre em contato com [guiyti@gmail.com](mailto:guiyti@gmail.com).

### Personalização

- **Título e Descrição**: Atualize o título e a descrição do projeto, se necessário.
- **Tecnologias**: Se você estiver usando outras tecnologias, adicione-as.
- **Instruções de Uso**: Adapte as instruções de uso conforme o necessário para o seu projeto.
- **Licença e Contato**: Substitua os detalhes da licença e do contato por informações relevantes ao seu projeto.

Se precisar de mais ajuda ou quiser adicionar algo específico, é só avisar!