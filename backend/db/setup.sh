# psql -f install.sql -U postgres 
# PGPASSWORD=postgres psql -d mattest -f structure.sql -U admin
# PGPASSWORD=postgres psql -d mattest -f data.sql -U admin
# GRANT ALL PRIVILEGES ON DATABASE "mattest" TO admin;
# GRANT ALL PRIVILEGES ON SCHEMA public TO admin;
# GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO admin;
# ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES ON TABLES TO admin;


psql -f install.sql -U postgres
PGPASSWORD=postgres psql -d example -f structure.sql -U admin
PGPASSWORD=postgres psql -d example -f data.sql -U admin