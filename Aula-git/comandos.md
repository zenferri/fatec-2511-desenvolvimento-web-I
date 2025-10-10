# Comandos para git e GitHub
Neste arquivo iremos fazer um resumo de comandos para utilização do git e Github nas aulas de Desenvolvimento Web da Fatec Jahu.

## Comandos do Terminal
Para ir até o C: ou qualquer raiz da unidade do Windows utilizamos a \
```bash
cd \
````

**IMPORTANTE**: o CD troca de pastas no Prompt.

Para criar pastas utilizamos o mkdir
``` bash
mkdir nome-da-pasta-sem-espaco
````
Para entrar na pasta criada utilizamos o CD
```bash
cd nome-da-pasta-sem-espaco
````

Para abrir o explorer na pasta chamamos ele com um ponto
```bash
explorer . 
````

Para voltaar a pasta anterior utilizamos 2 pontos
```bash
cd ..
````

Esses comandos são utlizados para navegação no windows e devem ser repetidos conforme a necessidade de cada ação. 

<br>

## Comando do Git

Para utilizar o git precisamos instalar no computador - https://git-scm.com <br>

**OBSERVAÇÃO:** Para utilizar o git é necessário estar dentro da pasta do projeto que deseja versionar. <br>

**IMPORTANTE:** Não é possível versionar uma pasta dentro de outra pasta que já está sendo versionada pelo git. 

**CONFIGURAR O USUÁRIO E E-MAIL**

```bash
git config --global user.name "José Augusto Zen Ferri"
git config --global user.email zenferri@gmail.com
```

Para começar a versionar uma pasta com git utilizamos o comando `init`. 

**OBS:** Só é executado uma vez.

```bash
get init
```
Podemos ver a situação co repositório a qualquer momento com `status` . 
```bash
git status
````

**VERMELHO:** Quando os arquivos estão em vermelho, foram criados ou editados e não estão prontos para serem salvos. É preciso rodar o `git add .` 

**VERDE:** Quando os arquivos estão verdes, já foram preparados para serem salvos. O próximo passo é rodar o `commit` com a variável `-m` é seguida pela descrição das mudanças. 
```bash
git commit -m "Descrição da mudança"
````

**OBSERVAÇÃO:** O comando `add .` deve ser utilizado sempre antes do commit para provisionar as mudanças geradas no arquivo. Em seguida, rodar novamente o `git status` para checar se o arquivo ficou verde, sem erro nenhum, e em estando verde, deve-se usar o `commit` seguido da explicação das razões do commit.

Agora devemos configurar quem está fazendo as operações. 

Para sincronizar o repositório local com um criado no GitHub, utilizamos o `remote`
````bash
git remote add origin <URL>
````

O melhor caminho é utilizar a segunda parte de comandos que são apresentados na página do GitHub após criar um repositório. 

Para enviar os comandos para o GitHub utilizamos o `push`
```bash
git push 
````

Na primeira execução deve ser utilizado o `push` como apresnetado na página do GitHub. 

Para receber as alterações feitas em outro computador que estão no GitHub para o computador atual, usamos o `pull`. 
```bash
git pull 
````



