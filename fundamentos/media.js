                Aula4

1) entender o poblema 
2) pensar no usuário(ux)
https://www.youtube.com/@FilipeDeschamps
3) codigo limpo 
https://www.amazon.com.br/codificador-limpo-conduta-programadores-profissionais/dp/8576086476?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1ZZFT5FULY4LN

---------------------------------------------------------------

NPM- gerenciador de pacotes node
instalação do npm: 
npm init ( responde as perguntas ) 
- gerar o arquivo package.json
npm ls (lista os pacotes(móduls)instalados)
npm i nome_do_pacote (instala o pacote)

repositoroi npm https://www.npmjs.com/

---------------------------------------------------------------

instalação do pacote readline-sync para input (entrada de dados) via console;
npm i readline-sync

para usar o recurso (pacote readline-sync)
const read = require ('readline-sync')

passo 1) importer no inicio do codigo 
const read = require ('readline-sync')

passo 2) nome_variavel = read.question("text qualquer")
passo 3) nome_variavel = number (read.question("texto qualquer))

obs: number converte uma stringe em numero 
