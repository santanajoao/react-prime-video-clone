# React Primevideo Clone

Clone do website do primevideo desenvolvido com ReactJS

<img src="./readme-assets/app-screenshot.png" alt="Captura de tela da aplicação funcionando">

---

## Futuros passos e melhorias

O projeto foi desenvolvido antes da última atualização do primevideo e por falta de referências não está finalizado.

- Atualizar para a nova versão do primevideo
- Design responsivo para smartphones e tablets
- Adicionar funcionalidades dos elementos do Header (Categorias, Linguagem, Perfil)

## Tecnologias utilizadas

- TheMovieDB API
- ReactJS
- CSS Modules
- React Icons
- Custom Hooks

## Como executar o projeto

Faça o clone do repositório

```
git clone git@github.com:santanajoao/react-prime-video-clone.git
```

Acesse o diretório do projeto e instale as dependências:

```
npm install
```

Insira sua KEY da API TheMovieDB na linha um do arquivo `src/services/movies.js`:

```
// Substitua o texto dentro dos parenteses por sua chave
const API_KEY = 'YOUR_API_KEY'
```
<details>
  <summary>Não tem uma chave da API?</summary>
  <pre>
1. Acesse o site da API
2. Crie uma conta cliando em "Junte-se ao TMDB"
3. Faça login na sua conta
4. No canto superior direito clique no seu perfil > "Configurações"
5. No menu lateral clique em "API"
6. Clique no link que aparecerá para gerar sua KEY
  </pre>
</details>

Inicie o servidor de desenvolvimento:

```
npm run dev
```

Agora é só acessar o servidor local que é exibido no terminal ou apertar a tecla `o`!
