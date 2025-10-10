# Configurando Pasta de Projetos e Ativando `code .` no macOS

## 1. Criar a Pasta de Projetos
Abra o **Terminal** e crie uma pasta para organizar seus repositórios Git:

```bash
cd ~
mkdir Projects
cd Projects
```

Agora todos os seus projetos podem ficar dentro de ~/Projects.

Exemplo para clonar um repositório do GitHub:

git clone https://github.com/usuario/repositorio.git

2. Ativar o Comando code no Terminal

Por padrão, o macOS não reconhece o comando code. É preciso habilitá-lo no Visual Studio Code.
	1.	Abra o VS Code.
	2.	Pressione ⌘ + Shift + P para abrir a Command Palette.
	3.	Digite:

Shell Command: Install 'code' command in PATH

4.	Clique nessa opção e o VS Code instalará o atalho.

3. Usando o Comando code .

Depois de configurado, no Terminal basta entrar na pasta do projeto:
```bash
cd ~/Projects/repositorio
code .
````
Isso abrirá o projeto diretamente no Visual Studio Code.

Também é possível abrir arquivos específicos:

```bash
code arquivo.py
````

E, se quiser abrir o VS Code sem travar o terminal:

```bash
code . &
```


