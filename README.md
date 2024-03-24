# db-resource

Specially made resource for [api-creator](https://github.com/MichaelH10991/api-creator).

```javascript
const db = dbResource(
  {
    uri: "mongodb://admin:admin@localhost:27017",
  },
  [
    {
      name: "users",
      schema: {
        username: String,
      },
    },
  ]
);
```
