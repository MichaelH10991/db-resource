const mongoose = require("mongoose");

const db = (config, schemas) => {
  try {
    const conn = mongoose.createConnection(config.uri);
    if (conn) {
      console.log("info: Connection successfully created with:", config.uri);
    }
    return schemas.reduce((acc, schema) => {
      const Model = conn.model(schema.name, schema.schema);
      return { ...acc, [schema.name]: Model };
    }, {});
  } catch (error) {
    console.log("error: here was an error setting up the mongo connection", e);
  }
};

module.exports = db;
