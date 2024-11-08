import {ObjectId} from "mongobd";
export type book={
id:string;    
titulo:string;
autores:Autores[];
CopiasD:number;
};
export type BooksModel ={
titulo:string;
autores:ObjectId[];
CopiasD:number;

};
export type Autores={
  nombre:string;
  Biografia:string;
}
export type UserModel={
    nombre:string;
    Biografia:string;
  }