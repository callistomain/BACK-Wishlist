**GET: /movies**  
*Lista todos os filmes.*

**GET: /movies/genres**  
*Traz todos os gêneros e lista a quantidade de filmes em cada um.*

**POST: /movies  
Body: { "name": "ABC", "platform": "Netflix", "genre": "comedy" }**  
*Adiciona um filme.*

**PATCH: /movies/:id  
Body: { "note": "Muito bom!" }**  
*Adiciona uma anotação e muda o status do filme para true (assistido).*

**DELETE: /movies/:id**  
*Deleta um filme pelo id.*
