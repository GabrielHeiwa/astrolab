# Como adicionar novos dados as páginas dos planetas

Para fazer remoções/atualizações/inserções de contéudo nas páginas
basta ir no arquivo index.js na pasta de constaints onde, nesta pasta
se encontra todos os dados sobre os planetas e luas que são mostrados
em tela. Usando da ferramenta de busca Ctrl + F basta procurar pelo 
nome do planeta/lua em inglês mais a palavra data que você achara uma 
proprieda JSON propria para o respectivo astro contento todo o conteúdo
sobre ele que é mostrado em tela.

Obs: Para adicionar mais luas devem ser adicionados os novos dados tanto 
na propriedade "moons" do JSON do planeta, quando criar mais uma proprieda
para os dados da lua, de preferência embaixo sobre os dados do planeta (para
manter assim uma melhor navegação durante o código).