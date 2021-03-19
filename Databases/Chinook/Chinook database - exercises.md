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

## 3)

List all artists' names. Sort by name. (Artist Name)

## 4)

List the first 10 artists, sorted by name. (ArtistId, Name)

## 5)

List all artists starting with "Academy" (Name)

## 6)

List all albums where the second letter of the title is "a" and the third letter is "r"
(Title)

## 7)

List all albums where the first letter of the title is a vocal

## 8)

List all albums together with artists for the albums (ArtistName, AlbumTitle)

## 9)

Explain the difference between
- inner join
- left join
- right join
- full join

## 10)

List the 10 artists who released the most albums (NrOfAlbums, ArtistName)

## 11)

List the names of all albums that are Jazz or Blues. An album should only be in the list once. (Album Title)

## 12)

The album "Let There Be Rock" (by AC / DC) contains 8 songs. Modify the database so that songs can be arranged in numerical order.

Then update the database so that the songs in "Let There Be Rock" are numbered from 1 to 8. 

Hint: You can solve this by looking at the TrackId's for the specific album and make multiple *update* commands.

## 13)

Write a sql question that lists the genres that are most popular.

List genre and number of tracks in that genre. Show the genre that has the most tracks first and then in descending order. Show only those genres that have more than 100 tracks.
(Genre Name, NrOfTracks)

## 14)

Create a variable that saves CustomerId based on the customer "Leonie Köhler"

Use this variable to list all dates when an invoice for Leonie Köhler left
(InvoiceDate)

## 15)

Create a temporary #CustomerWithSupport table that contains the first and last names of a customer and their support staff
(CustomerFirstName, CustomerLastName, SupportFirstName, SupportLastName)

## 16)

List all employees who have a manager and their manager.

The result should be two columns (not 4) with the full name of the employee and the manager

(EmployeeName, BossName)

## 17)

Find out how many characters the longest email address has among all customers
(LongestMail)

## 18)

Find out the song or songs that are going on for the longest time
The result should be a line with the song title and the length of the song
(Name, Minutes)

## 19)

Make one of the columns in Customer unique. Motivate your choice

## 20)

List how much has been invoiced for each year (2009-2013). Sort and let the last years be shown first (2013)
(Year, Sum)

## Extra

## 1)

Find your own task based on retrieving data (via SELECT)

Solve the task.

Show for your teacher.

## 2)

Find your own task based on data modification (via UPDATE, DELETE)

Alternative: find your own task that requires one or more tables to be created.

Solve the task.

Show for your teacher.

## 3)

Backup the Chinook database to a file. Delete all playlists.
Write a sql query to show that the playlists are gone

Then do a restore of the database so the playlists will come back.
Write a sql query to show that playlists are back

## 4)

Use transactions to solve this task.

Add 5 artists to the Artist table.

Then undo the transaction so that the 5 artists are not added. (don't use "delete" in this task)

## 5)

(Difficult!)

The AlbumId column has the data type int, which can be unnecessarily generous.

Choose another data type that is more restrictive.

Write a script that changes the data type (and takes into account indexes and keys)

## 6)

(Difficult!)

List all the artists and how many playlists they belong to.

## 7)

Calculate which type of media has contributed most to financial turnover

*By: Magnus Tidqvist*

## 8)

Lists all songs a person bought

*By: Tobias Persson*

## 9)

Show the ten artists with the lowest ID and sort them backwards by name. The result should thus be:

	Billy Cobham
	Backbeat
	Audioslave
	Apocalyptica
	Antonio Carlos Jobim
	Alice In Chains
	Alanis Morissette
	Aerosmith
	Acceptance
	AC / DC

Keep in mind that these artist IDs do not necessarily have to be between 1 and 10

*By: Viktoria Strandberg and Victor Böhmer*

## 10)
 
Get the longest playlist. (Name, TotalLengthInHours)

## 11)

List all employees who have a manager and their manager's boss. (EmployeeName, BossesBossName)

## 12)

Create a new table so that each album can have a review

*By: Arvid Silvmark*