# Podcast Manager

### Domínio 
Podcast 

### Descrição
App para centralização e gerenciamento de podcast semalhante ao netflix, onde os episódios fiquem separados em categorias

### Features
- Listar episódios dos podcasts por categorias
  - [ocultismo, previsões, curiosidades, terror, mentalidade, tecnologia, saúde]

- Filtrar eposidios por nome do podcast 

## How it works

#### Feature
- Listar episódios dos podcasts por categorias

#### Como vou resolver
  GET: Retornar uma lista de episódios

  ```json
  [

    {
      "podcastName": "flow",
      "Episode": "DANIEL LOPEZ - Flow #357",
      "videoId": "o0nj1kdApdg",
      "CoverImg": "https://i.ytimg.com/vi/o0nj1kdApdg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKbVz277I1dXnE-7rOUEx6xwi5ww",
      "link": "o0nj1kdApdg",
      "categories": ["curiosidades", "previsões", "ocultismo"],
    }.
    {
      "podcastName": "flow",
      "Episode": "DANIEL LOPEZ + GUILHERME FREIRE - Flow #378",
      "CoverImg": "https://i.ytimg.com/vi/6PYSwf0W-BM/maxresdefault.jpg",
      "link": "https://www.youtube.com/watch?v=6PYSwf0W-BM",
      "categories": ["curiosidades", "previsões", "geopolítica"],
    }
  ]

  ```
  
  GET: Retorna lista de episodios baseado em um parametro enviado pelo cliente com o nome do podcast