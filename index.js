const app = require("./app.js");

const port = process.env.PORT || 6000;

app.listen(5000, () => console.log(`server started on ${port}`));
