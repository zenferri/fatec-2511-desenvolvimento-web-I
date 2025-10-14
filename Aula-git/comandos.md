# Comandos para git e GitHub

Neste arquivo iremos fazer um resumo de comandos para utilização do git e Github nas aulas de Desenvolvimento Web da Fatec Jahu.

## Comandos do Terminal

Para ir até o C: ou qualquer raiz da unidade do Windows utilizamos a \

```bash
cd \
```

**IMPORTANTE**: o CD troca de pastas no Prompt.

Para criar pastas utilizamos o mkdir

```bash
mkdir nome-da-pasta-sem-espaco
```

Para entrar na pasta criada utilizamos o CD

```bash
cd nome-da-pasta-sem-espaco
```

Para abrir o explorer na pasta chamamos ele com um ponto

```bash
explorer .
```

Para voltaar a pasta anterior utilizamos 2 pontos

```bash
cd ..
```

Esses comandos são utlizados para navegação no windows e devem ser repetidos conforme a necessidade de cada ação.

## Comandos específicos do MAC

## 1. Criar a Pasta de Projetos

Abra o **Terminal** e crie uma pasta para organizar seus repositórios Git:

```bash
cd ~
mkdir Projects
cd Projects
```

Agora todos os seus projetos podem ficar dentro de ~/Projects.

Exemplo para clonar um repositório do GitHub:

```bash
git clone https://github.com/usuario/repositorio.git
```

### Configurando o comando `code .` no macOS

Por padrão, o macOS não reconhece o comando code. É preciso habilitá-lo no Visual Studio Code.

    1.	Abra o VS Code.
    2.	Pressione ⌘ + Shift + P para abrir a Command Palette.
    3.	Digite:

```
Shell Command: Install 'code' command in PATH
```

4. Clique nessa opção e o VS Code instalará o atalho.

5. Usando o Comando code .

Depois de configurado, no Terminal basta entrar na pasta do projeto:

```bash
cd ~/Projects/repositorio
code .
```

Isso abrirá o projeto diretamente no Visual Studio Code.

Também é possível abrir arquivos específicos:

```bash
code arquivo.py
```

E, se quiser abrir o VS Code sem travar o terminal:

```bash
code . &
```

## Comando do Git

Para utilizar o git precisamos instalar no computador - https://git-scm.com

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
```

**VERMELHO:** Quando os arquivos estão em vermelho, foram criados ou editados e não estão prontos para serem salvos. É preciso rodar o `git add .`

**VERDE:** Quando os arquivos estão verdes, já foram preparados para serem salvos. O próximo passo é rodar o `commit` com a variável `-m` é seguida pela descrição das mudanças.

```bash
git commit -m "Descrição da mudança"
```

**OBSERVAÇÃO:** O comando `add .` deve ser utilizado sempre antes do commit para provisionar as mudanças geradas no arquivo. Em seguida, rodar novamente o `git status` para checar se o arquivo ficou verde, sem erro nenhum, e em estando verde, deve-se usar o `commit` seguido da explicação das razões do commit.

Agora devemos configurar quem está fazendo as operações.

Para sincronizar o repositório local com um criado no GitHub, utilizamos o `remote`

```bash
git remote add origin <URL>
```

O melhor caminho é utilizar a segunda parte de comandos que são apresentados na página do GitHub após criar um repositório.

Para enviar os comandos para o GitHub utilizamos o `push`

```bash
git push
```

Na primeira execução deve ser utilizado o `push` como apresnetado na página do GitHub.

Para receber as alterações feitas em outro computador que estão no GitHub para o computador atual, usamos o `pull`.

```bash
git pull
```

### Um exemplo de uma sequencia inical completa:

**OBSERVAÇÃO:** caso precise configurar usuário e senha, lembre-se de executar os seguintes comandos. Caso já tenham sido executados, passe para a etapa seguinte:

1. Etapa

```bash
git config --global user.name "José Augusto Zen Ferri"
git config --global user.email zenferri@gmail.com
```

2. Etapa (caso já tenha feito a etapa 1 anteriormente)

```bash
cd ~/Fatec/Desenvolvimento-Web
git init
git add .
git commit -m "Inicial commit - exercícios de Desenvolvimento Web"
git branch -M main
git remote add origin zenferri@github.com:zen-fatec/desenvolvimento-web.git
git push -u origin main
```

## Ignorar o `.DS_Store` globalmente

```bash
git config --global core.excludesfile ~/.gitignore_global
echo ".DS_Store" >> ~/.gitignore_global
```

Para conferir:

```bash
cat ~/.gitignore_global
```
