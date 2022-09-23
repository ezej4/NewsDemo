
# Rick and Morty challenge

## A basic web app to show a news web site.

 made with [Nextjs](https://nextjs.org/)

## Installation


* Install

```bash
 npm install
```

* Start the project in localhost

```bash
  npm run dev
```

* open a browser in http://localhost:3000


## Pages

- / 

Shows a list of news

- /article/${article_id}

Shows an article

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `article`      | `string` | **Required**. Id of the selected article |


- /*

Shows a 404 page if the required page does not exist.


## Author

- Ezequiel Fabbroni

#### If you deploy this project on a server please create a .env file in your root folder, with the following variable:
 
```bash
  NEXT_PUBLIC_HOST = ${host_url}
```
