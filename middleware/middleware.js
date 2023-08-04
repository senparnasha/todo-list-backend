module.exports = reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send("<h1>Please put your age</h1>");
    } else if (req.query.age < 18) {
        res.send("<h2>you cannot access this page </h2>");
    } else {
        next();
    }
};
