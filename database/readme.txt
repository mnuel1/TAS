Migrate to create the tables for the DB

to migrate, run this command 
php artisan migrate --path=/database/migrations/your_migration_file.php


The order of migrations
• php artisan migrate --path=/database/migrations/2014_10_12_000000_create_users_table.php
• php artisan migrate --path=/database/migrations/2023_10_24_132443_create_vehicles_table.php
• php artisan migrate --path=/database/migrations/2023_10_24_144827_create_appointment_table.php
• php artisan migrate --path=/database/migrations/2023_10_24_140704_create_user_preferred_vehicles_table.php

then run, to migrate the rest
• php artisan migrate