const { MongoClient, ServerApiVersion } = require('mongodb');



// first we are making suring if mongodb is already running or not
let db;

export const ConnectDB= async()=>{


    if (db) return db;


    // !adding mongodb conntion string and uri 
    try{

        const uri=process.env.PUBLIC_NEXT_MONGODB_URI
        const client = new MongoClient(uri, {
            serverApi: {
              version: ServerApiVersion.v1,
              strict: true,
              deprecationErrors: true,

            }


          });

          // todo: addding database name here
          db=client.db('BD-autofix')
          return db
        
        


    }

    catch(error){
        console.log(error)
    }
}
