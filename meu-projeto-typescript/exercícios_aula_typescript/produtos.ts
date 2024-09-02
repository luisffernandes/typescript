interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
   }

   function exibirInformacoes(livro: Livro): string 
   {return `O livro "${livro.titulo}" foi publicado em ${livro.anoPublicacao} por ${livro.autor}.`;}
   const livro1: Livro = {
    titulo: "Metamorfose",
    autor: "Franz Kafka",
    anoPublicacao: 1915
   };
   console.log(exibirInformacoes(livro1));
   