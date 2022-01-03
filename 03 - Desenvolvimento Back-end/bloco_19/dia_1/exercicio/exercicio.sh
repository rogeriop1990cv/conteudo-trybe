# 01 - No Docker Hub , utilizando a caixa de busca ( "Search for great content" ) , busque pela imagem da Distribuição Linux Debian ;  
echo 'https://hub.docker.com/_/debian'

# 02 - Uma vez que encontrar a imagem oficial , acesse-a (clicando em seu card) e verifique na página de detalhes, se existe algum comando para baixarmos a imagem localmente sem ter que criar um container para isso ;  
echo 'docker pull debian'

# 03 - Baixe a imagem utilizando a tag : stable-slim , que é uma versão reduzida da distribuição;
echo 'docker pull debian:stable-slim'

# 04 - Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência (não esqueça referenciar a tag ) ;  
echo 'docker container run -ti debian:stable-slim'

# 05 - No terminal, você deve conseguir rodar o comando cat /etc/*-release , que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container ;
echo 'PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
NAME="Debian GNU/Linux"
VERSION_ID="11"
VERSION="11 (bullseye)"
VERSION_CODENAME=bullseye
ID=debian
HOME_URL="https://www.debian.org/"
SUPPORT_URL="https://www.debian.org/support"
BUG_REPORT_URL="https://bugs.debian.org/"
'

# 06 - Encerre o terminal ;
echo 'ok'

# 07 - Verifique na sua lista de containers , qual o container é referente ao exercício que acabou de praticar;
echo '
CONTAINER ID   IMAGE                COMMAND   CREATED              STATUS                        PORTS     NAMES
6ab4343ffe46   debian:stable-slim   "bash"    About a minute ago   Exited (130) 15 seconds ago             funny_cori

'

# 08 - Inicie o mesmo container novamente , sem criar outro. Valide se ele está ativo na lista de containers;
echo 'docker start 6ab4343ffe46'
echo 'docker ps -a'

# 09 - Retome o container que foi criado anteriormente nesse exercício ;  
echo 'docker container attach 6ab  '
# 10 - Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container ;  
echo 'cat /etc/debian_version'
echo '11.1'
# 11 - Encerre o terminal.
ok

# 12 - Remova somente o container criado para esse exercício ;  

# 13 - (Bônus) Crie e rode de modo interativo em modo 'Cleanup' , a imagem andrius/ascii-patrol ;  

# 14 - (Bônus) Encerre o container utilizando os botões [ ctrl ] + [ c ].
