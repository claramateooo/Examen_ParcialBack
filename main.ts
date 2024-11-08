
import {Collection, ObjectId} from "mongobd";
import {MongoClient} from "mongodb";
import { BooksModel, UserModel } from "./types.ts";
//Url
const mongo_url=Deno.env.get("MONGO_URL");
if(!mongo_url){
  console.log("Erorr en la url");
}
//client
const client= new MongoClient('mongo_url');
await client.connect();
//db
const database=client.db('Biblioteca')
const bookscollection=Collection<BooksModel<ObjectId>>;
const Usercollection=Collection<UserModel>;


const handler= async(req:Request): Promise<Response>=>{
const method=req.method;
const url= new URL(req.url);
const path= url.pathname;
if(method==="GET"){
 
  
}else if(method==="POST"){
  if(path==="/libro"){
    const 
  }

}else if(method==="PUT"){

}else if (method==="DELETE"){

}else{

}
return new Response("Endpoint not found",{status : 404});
}
Deno.serve({port:3000},handler);
