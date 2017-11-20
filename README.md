### Global environments
```
SCHEMA_NAME=schema_name
PG_USER_NAME=account_name
PG_USER_PASSWORD=account_password
DB_NAME=db_name
DB_HOSTNAME=hostname
HOST_ADDRESS=host_address
```
 
### Migrating 
    $ psql -U <username> -d <db_name> -f db/schema.sql    
 
### Seeding 
    $ psql -U <username> -d <db_name> -f db/seeds.sql
    
### Usage
    $ postgraphql -c postgres://<user_name>:<password>@localhost:5432/<db_name> --schema <schema_name> --cors --watch
    $ yarn install
    $ yarn dev
        
## Testing 
    $ yarn test