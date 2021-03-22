# SQL - Chinook database

## Intro

The parentheses shows which columns to be retrieved. For example, in question 3, only the ArtistName column should be retrieved.

## 1)

Open the database server on your computer:

 	(localdb)\mssqllocaldb

You can do this from Visual Studio and select *SQL Server Object Explorer*.

Option: use the program *SQL Management Studio*. Choose File => Connect Object Explorer.

Run the Chinook script to create the music database

## 2)

List all info about all the artists

    select * from Artist


## 3)

List all artists' names. Sort by name. (Artist Name)

    select Name as ArtistName 
    from Artist 
    order by Name

## 4)

List the first 10 artists, sorted by name. (ArtistId, Name)

    select top 10 ArtistId, Name 
    from Artist 
    order by Name

## 5)

List all artists starting with "Academy" (Name)

    select Name 
    from Artist 
    where Name like 'Academy%'

## 6)

List all albums where the second letter of the title is "a" and the third letter is "r"
(Title)

    select Title 
    from Album 
    where Name like '_ar%'

## 7)

List all albums where the first letter of the title is a vocal

    select Title 
    from Album 
    where Name like '[aoueiy]%'

## 8)

List all albums together with artists for the albums (ArtistName, AlbumTitle)

    select Artist.Name ArtistName, Album.Title AlbumTitle 
    from Album left join Artist  
    on Album.ArtistId = Artist.ArtistId
    order by Artist.Name


## 9)

Explain the difference between
- inner join
- left join
- right join
- full join

    Inner join just gives the matched rows
    Left join always gives the rows on the left table (even if there are no match)
    Right join always gives the rows on the right table (even if there are no match)
    Full join is a combination of left and right join

