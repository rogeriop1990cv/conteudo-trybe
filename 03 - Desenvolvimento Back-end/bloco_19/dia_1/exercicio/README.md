01 - No Docker Hub , utilizando a caixa de busca ( "Search for great content" ) , busque pela imagem da Distribuição Linux Debian ;  
  
02 - Uma vez que encontrar a imagem oficial , acesse-a (clicando em seu card) e verifique na página de detalhes, se existe algum comando para baixarmos a imagem localmente sem ter que criar um container para isso ;  

03 - Baixe a imagem utilizando a tag : stable-slim , que é uma versão reduzida da distribuição;
04 - Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência (não esqueça referenciar a tag ) ;  

05 - No terminal, você deve conseguir rodar o comando cat /etc/*-release , que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container ;  

06 - Encerre o terminal ;  

07 - Verifique na sua lista de containers , qual o container é referente ao exercício que acabou de praticar;
08 - Inicie o mesmo container novamente , sem criar outro. Valide se ele está ativo na lista de containers;
09 - Retome o container que foi criado anteriormente nesse exercício ;  

10 - Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container ;  

11 - Encerre o terminal ;  

12 - Remova somente o container criado para esse exercício ;  

13 - (Bônus) Crie e rode de modo interativo em modo 'Cleanup' , a imagem andrius/ascii-patrol ;  

14 - (Bônus) Encerre o container utilizando os botões [ ctrl ] + [ c ].
