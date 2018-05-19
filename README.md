# blog.vuefloripa

A simple blog

## Folder structure

1. `client`: Vue client files
2. `common`: Common client and server model files
3. `server`: Loopback server files
4. `test`: Unit test

## Installation

```
  $ npm install
```

## Linting

```
  $ npm run lint
```

## Testing

```
  $ npm test
```

## Running the development server (API and Client)

```
  $ npm run dev
```

## Build to ./build

```
  $ npm run build
```

## Executing built files

```bash
  $ cd build
  $ npm run start
```

You can run only the server with:

```bash
  $ cd build/server
  $ node .
```

## Criando o Blog
1. Instalar e rodar vue-loopback
2. Criar componente BlogAddPost com vue-wysiwyg e colocar na Dashboard
3. Criar modelo Post belongsTo Account com o loobpack-cli `lb model` e `lb relation` e verificar no explorer
4. Criar módulo no store com o método addPost
5. Testar a adição de post
5. Criar View Blog com state posts e componente BlogPost com prop content e title
6. Adicionar action loadPosts e o state no modulo
7. Adicionar rota blog pública, o item de menu no HeaderContainer
8. Testar carregamento de posts
