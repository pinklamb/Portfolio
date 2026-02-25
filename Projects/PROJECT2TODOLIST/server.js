import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';



const __filename = fileURLToPath(import.meta.url);
const PORT = 4000;
const app = express();
const __dirname = dirname(__filename);


app.use(express.static('public'))
app.use('/static', express.static(__dirname + 'public/'));



function startServer (){
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
}

console.log('Current filename:', __filename);
console.log('Current directory:', __dirname);

startServer();
