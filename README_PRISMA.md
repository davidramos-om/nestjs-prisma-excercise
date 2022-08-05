### Next steps:
1. Set the ```DATABASE_URL``` in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: ```postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb```.
3. Run ```prisma db pull``` to turn your database schema into a Prisma schema.
4. Run ```prisma generate``` to generate the Prisma Client. You can then start querying your database.


More information in our documentation:
https://pris.ly/d/getting-started

### Create migration
```ts
npm run migrate --name GiveYourOwnNameHere
```

### Update prisma schema
The prisma generate command reads your Prisma schema and updates the generated Prisma Client library inside node_modules/@prisma/client
when importing
```ts
    npm run update-schema
```