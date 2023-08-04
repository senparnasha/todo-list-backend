const dbConnect = require("./mongodb.js");

const updateData=async ()=>{
    let data=await dbConnect();
    let result = await data.updateOne(
        { name: "Tato78"},
        { $set: { name: "uuuyt", price: 333 } }
      );
    console.log("updated result: ",result)
}

 updateData();

