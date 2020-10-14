# [Strapi](https://github.com/strapi/strapi) Appxi

![Strapi](https://cldup.com/7umchwdUBh.png)

API creation made simple, secure and fast.
The most advanced open-source Content Management Framework to build powerful API with no effort.

**1.- Git clone project**

```bash
git clone https://github.com/loginweb-dev/appxiapi.git
```
**2.- Install npm**

```bash
npm install
```
**3.- Environment variables**

set your environment variables : `/config/database.js`

- `DATABASE_CLIENT` a database provider supported by Strapi: (sqlite, postgres, mysql ,mongo).
- `DATABASE_HOST` database host.
- `DATABASE_PORT` database port.
- `DATABASE_NAME` database name.
- `DATABASE_USERNAME` database username.
- `DATABASE_PASSWORD` database password.
- `DATABASE_SSL` boolean for SSL.
- `EXTRA_ARGS` pass extra args to the [`strapi new`](https://strapi.io/documentation/v3.x/cli/CLI.html#strapi-new).

**4.- Run npm**

```bash
npm run develop
```
