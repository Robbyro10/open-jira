# Next.js OpenJira App

To run app locally, a db is needed

```
docker-compose up -d
```

- -d means **detached**

MongoDB Local URL:

```
mongodb://localhost:27017
```

## Environment variables configuration

Rename the file **.env.template** to **.env**

## Fill database with test data

```
http://localhost:3000/api/seed
```
