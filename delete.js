const dbConnect = require("./mongodb.js");


const deleteData = async () => {
    const db = await dbConnect();

    const result = await db.deleteMany(
       
        { name: "Max pro 5"},
    );
    console.log(result)
};

deleteData();
