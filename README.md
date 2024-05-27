Hello, this is simple ORM for Postgres and Mysql.

### NODEJS

```sh
yarn add lionorm
or
npm install lionorm
```

```sh
const db = new LionORM({
    host: "localhost", // required
    port: port||3306||5432, // required
    user: "user name", // required
    password: "password", // required
    database: "database name", // required
})
```

```sh

db.createTable("user", {
    id : [TYPES.PRIMARY_KEY,TYPES.INT],
    name : [TYPES.VARCHAR(255)],
    age  : [TYPES.INT]
})

```

```sh

db.insert("user", {
    id : "1",
    name : "alisher",
    age  : 22
})

```

```sh

db.select("user")

```
