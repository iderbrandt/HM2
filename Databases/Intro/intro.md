# Intro

Create a new database with a table:

	use master
	exec Happybits.Recreate 'Demo'
	go
	use Demo

    create table Person(
        Name varchar(50),
        FavoriteColor varchar(50),
    )

    insert into Person
    values
    ('Mia', 'Red'),
    ('Olivia', 'Red'),
    ('James', 'Green'),
    ('Liam', 'Blue'),
    ('Ava',	null),
    (null, 'Red')

What's the problem with this database design?

## Problem 1

It's not strict

    insert into Person
    values
    ('Kjell', 'Redd'),       -- spelled wrong, is this supposed to be red?
    ('Maria', 'Rött'),       -- in another language, is supposed to be red?
    ('Leif', 'Icecream'),   -- 'Icecream' should not be a valid color

## Problem 2

If we what to change 'Red' to 'rött' then we need to update three rows

## Problem 3

It take more space to save a string like 'Red' instead of number like 91

## Solution

Normalization: break up this table to two tables.