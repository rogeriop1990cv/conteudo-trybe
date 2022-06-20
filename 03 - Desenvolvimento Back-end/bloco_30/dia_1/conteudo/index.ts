import { connect, Schema, model } from 'mongoose';
import { exit } from 'process';

const options = {
  autoIndex: false, // Não cria index para cada inserção de dado no banco.
  dbName: 'model_example', // Define qual banco de dados vou utilizar.
};


interface Book {
  title: string,
  author: string
}

const bookSchema = new Schema<Book>({});

const BookModel = model<Book>('books', bookSchema);


async function main() {
  await connect('mongodb://localhost:27017/model_exemple');
  const kittens =  await BookModel.find({}, {title: true, _id: false});
  console.log(kittens);
  exit()
}

main().catch(err => console.log(err));
