const dbConnect = require("./mongodb.js");

const insert = async () => {
    const db = await dbConnect();

    const result = await db.insertOne(
       
        { name: "xiomi", price: 8976, category: "mobile" },
    );
    if (result.acknowledged) {
        console.log("data inserted");
    }
};

insert();
