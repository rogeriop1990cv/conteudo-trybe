-- Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?' . 

SET @texto = 'Você já ouviu falar do DuckDuckGo?';

SELECT replace(@texto, 'DuckDuckGo?', ' Google?') as `REPLACE()`;
