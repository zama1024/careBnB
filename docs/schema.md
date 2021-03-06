# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
fname           | string    | not null
lname           | string    | not null
email           | string    |
profile_pic_url | string    |

## listings
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
host_id       | integer   | not null, foreign key (references users), indexed
max_guests       | integer   | not null
num_bedroom       | integer   | not null
listing_beds       | integer   | not null
num_bathroom       | integer   | not null
service_fee       | integer   | not null,
title         | string    | not null
description   | text      | not null
lat           | float     | not null
lng           | float     | not null
daily_rate    | integer   | not null
weekly_discount        | integer   | not null
monthly_discount        | integer   | not null
donation_%    | integer   | not null
address       | string    | not null
city          | string    | not null
state         | string    | not null
country       | string    | not null
listing_url   | string    |

## bookings
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
listing_id   | integer   | not null, foreign key, indexed
user_id      | integer   | not null, foreign key (references users), indexed
host_id      | integer   | not null, foreign key (references users), indexed
status       | string    | not null, default = "PENDING"
charity_org  | string    | not null

## reviews
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
author_id     | integer   | not null, foreign key (references users), indexed
listing_id    | integer   | not null, foreign key (references listings), indexed
rating        | integer   | not null
communication_rating        | integer   | not null
accuracy_rating        | integer   | not null
cleanliness_rating        | integer   | not null
checkin_rating        | integer   | not null
value_rating        | integer   | not null
review_helpfulness        | integer   | not null
location_rating        | integer   | not null
body          | text      | not null
