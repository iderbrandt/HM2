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


## 10)

List the 10 artists who released the most albums (ArtistName, NrOfAlbums)

    select top 10 Count(*) NrOfAlbums, Artist.Name
    from Artist join Album on Artist.ArtistId=Album.ArtistId
    group by Artist.name
    order by NrOfAlbums desc

Alternative:

    select top 10 with ties ...etc
    
    This will give you 12 rows (since more artists have produced 4 albums)


Alternative, if we are not certain the name of the artist is unique:

    select a.Name, NrOfAlbums
    from Artist a join (

        select top 10 Count(*) NrOfAlbums, Artist.ArtistId 
        from Artist join Album on Artist.ArtistId=Album.ArtistId
        group by Artist.ArtistId
        order by NrOfAlbums desc
        ) x
        on a.ArtistId = x.ArtistId


## 11)

List the names of all albums that which has at least one track of Jazz or Blues. An album should only be in the list once. (Album Title)

    select distinct Album.Title AlbumTitle
    from Album  
    join Track on Album.AlbumId = Track.AlbumId
    where GenreId in (2,6)

alternative if you don't know the ID beforehand:

    select distinct Album.Title AlbumTitle, Genre.Name Genre
    from Track
    inner join Album on Album.AlbumId = Track.AlbumId
    inner join Genre on Genre.GenreId = Track.GenreId
    where Genre.Name in ('Jazz', 'Blues')


Note: if you modify an album so that one of the tracks is of a different genre (id 3 instead of 2), then the above select will still have that album in the list. So it is enough that the album has a track that belongs to the desired genre.
	
	update Track set GenreId=3 where TrackId=1102
	
	select * from Track where albumid=87



## 12)

The album "Let There Be Rock" (by AC / DC) contains 8 songs. Modify the database so that songs can be arranged in numerical order.

Then update the database so that the songs in "Let There Be Rock" are numbered from 1 to 8. 

Hint: You can solve this by looking at the TrackId's for the specific album and make multiple *update* commands.

    alter table Track add OrderInAlbum tinyint;
    go
    update Track set OrderInAlbum=1 where TrackId=15;
    update Track set OrderInAlbum=2 where TrackId=16;
    update Track set OrderInAlbum=3 where TrackId=17;
    update Track set OrderInAlbum=4 where TrackId=18;
    update Track set OrderInAlbum=5 where TrackId=19;
    update Track set OrderInAlbum=6 where TrackId=20;
    update Track set OrderInAlbum=8 where TrackId=21;
    update Track set OrderInAlbum=7 where TrackId=22;

    select * 
    from Track 
    WHERE AlbumId=4

(you can also automate numbering, but it is quite difficult)

Alternative solution, which automates the update


    DECLARE @trackid INT
    DECLARE @cursor CURSOR
    DECLARE @tracknumber INT = 1

    SET @cursor = CURSOR FOR

	    SELECT TrackId
        FROM Track join Album
	    ON Track.AlbumId = Album.AlbumId 
	    WHERE Album.Title='Let There Be Rock'

    OPEN @cursor
    FETCH NEXT FROM @cursor INTO @trackid
    WHILE @@FETCH_STATUS = 0
    BEGIN

	    --PRINT CONCAT('update Track set OrderInAlbum=',@tracknumber,' where TrackId=',@trackid);
	    UPDATE Track SET OrderInAlbum=@tracknumber where TrackId=@trackid
	    SET @tracknumber = @tracknumber + 1
        FETCH NEXT FROM @cursor INTO @trackid
    END

    CLOSE @cursor
    DEALLOCATE @cursor

Alternative with *common table expression*

    WITH t1 AS
 	    (
		    SELECT TrackId, row_number() over(order by TrackId) as RowNumber
		    FROM Track join Album
		    ON Track.AlbumId = Album.AlbumId 
		    WHERE Album.Title='Let There Be Rock'
	    )
    UPDATE Track 
    SET OrderInAlbum=t1.RowNumber 
    FROM t1
    WHERE Track.TrackId=t1.TrackId 

## 13)

Write a sql question that lists the genres that are most popular.

List genre and number of tracks in that genre. Show the genre that has the most tracks first and then in descending order. Show only those genres that have more than 100 tracks.
(Genre Name, NrOfTracks)

    select Genre.Name GenreName, Count(*) as NrOfAlbums
    from Genre 
    join Track on Genre.GenreId = Track.GenreId
    group by Genre.Name
    having Count(*) >100 
    order by NrOfAlbums desc


## 14)

Create a variable that saves CustomerId based on the customer "Leonie Köhler"

Use this variable to list all dates when an invoice for Leonie Köhler left
(InvoiceDate)

    declare @MyCustomer int = 
    (
	    select CustomerId 
	    from Customer 
	    where FirstName='Leonie' and LastName='Köhler'
    )

    select cast(InvoiceDate as date) 
    from Invoice 
    where CustomerId=@MyCustomer


## 15)

Create a temporary #CustomerWithSupport table that contains the first and last names of a customer and their support staff
(CustomerFirstName, CustomerLastName, SupportFirstName, SupportLastName)

    drop table if exists #CustomerWithSupport 

    select c.FirstName CustomerFirstName, c.LastName CustomerLastName, e.FirstName SupportFirstName, e.LastName SupportLastName
    into #CustomerWithSupport
    from 
    Customer c join Employee e on c.SupportRepId=e.EmployeeId

    select * from #CustomerWithSupport

Alternative with variable (advantage: you don't need a table):

    declare @CustomerWithSupport table
    (
      CustomerFirstName varchar(30), 
      CustomerLastName varchar(30),
      SupportFirstName varchar(30),
      SupportLastName varchar(30)
    )
    insert into @CustomerWithSupport

    select Customer.FirstName, Customer.LastName, Employee.FirstName, Employee.LastName 
	from Customer
    join Employee on Employee.EmployeeId=Customer.SupportRepId;

    select * from @CustomerWithSupport;

## 16)

List all employees who have a manager and their manager.

The result should be two columns (not 4) with the full name of the employee and the manager

(EmployeeName, BossName)

    select e1.FirstName + ' ' + e1.LastName as EmployeeName, e2.FirstName + ' ' + e2.LastName as BossName
    from 
    Employee e1 join Employee e2 on e1.ReportsTo=e2.EmployeeId

## 17)

Find out how many characters the longest email address has among all customers
(LongestMail)

    select Max(Len(Email)) LongestMail 
    from Customer

..if you also want the email address

	select top 1 Email, Len(Email) EmailLength 
    from Customer
	order by EmailLength desc

...if there might be more than one really long email address

	select top 1 with ties Email , Len(Email) EmailLength 
    from Customer
	order by EmailLength desc

## 18)

Find out the song or songs that are going on for the longest time
The result should be a line with the song title and the length of the song
(Name, Minutes)

    select Name, Milliseconds/60000 Minutes
    from Track t where t.Milliseconds = 
	    (select Max(Milliseconds) from Track) 

Alternative:

    select top 1 with ties Name, Milliseconds/60000 Minutes
    from Track t order by Milliseconds desc


## 19)

Make one of the columns in Customer unique. Motivate your choice

    alter table Customer 
    add unique(Email);  

Motivation

     There is little risk that two customers have the same email address

## 20)

List how much has been invoiced for each year (2009-2013). Sort and let the last years be shown first (2013)
(Year, Sum)

Expeceted result:

    2013	450.58
    2012	477.53
    2011	469.58
    2010	481.45
    2009	449.46


    select year(InvoiceDate) as [Year], sum(total) as [Sum] 
    from Invoice
    group by year(InvoiceDate) order by year(InvoiceDate) desc


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


    ---- backup

    use Chinook
    backup database Chinook to disk='c:\TMP\Chinook.bak'

    delete from PlaylistTrack
    delete from Playlist 

    select * from PlaylistTrack
    select * from Playlist

    ---- restore 

    use master
    alter database Chinook set single_user with rollback immediate
    -- eller ALTER DATABASE Chinook SET OFFLINE WITH ROLLBACK AFTER 10
    -- eller ALTER DATABASE Chinook SET RECOVERY SIMPLE
    restore database Chinook from disk='c:\TMP\Chinook.bak'

    ----
    use Chinook
    select * from PlaylistTrack
    select * from Playlist


## 4)

Use transactions to solve this task.

Add 5 artists to the Artist table.

Then undo the transaction so that the 5 artists are not added. (don't use "delete" in this task)

    begin transaction

    insert into Artist(Name) values ('Kalle1')
    insert into Artist(Name) values ('Kalle2')
    insert into Artist(Name) values ('Kalle3')
    insert into Artist(Name) values ('Kalle4')
    insert into Artist(Name) values ('Kalle5')

    select * from Artist

    rollback transaction

    select * from Artist

## 5)

(Difficult!)

The AlbumId column has the data type int, which can be unnecessarily generous.

Choose another data type that is more restrictive.

Write a script that changes the data type (and takes into account indexes and keys)

    ---- ta bort contraint

    ALTER TABLE [Track] DROP CONSTRAINT [FK_TrackAlbumId]
    ALTER TABLE [Album] DROP CONSTRAINT [PK_Album]

    DROP INDEX [IFK_TrackAlbumId] ON [Track]

    ---- modifiera kolumn

    ALTER TABLE Track
    ALTER COLUMN AlbumId smallint

    ALTER TABLE Album
    ALTER COLUMN AlbumId smallint

    ---- lägg till contraint

    ALTER TABLE [Album] 
    ADD CONSTRAINT [PK_Album] PRIMARY KEY  ([AlbumId]) 

    ALTER TABLE [Track]
    ADD CONSTRAINT [FK_TrackAlbumId] FOREIGN KEY([AlbumId])
    REFERENCES [Album] ([AlbumId])

    CREATE INDEX [IFK_TrackAlbumId] 
    ON [Track]([AlbumId])

## 6)

(Difficult!)

List all the artists and how many playlists they are in.

    select Artist.Name, count(distinct Playlist.PlaylistId) as PlaylistCount
    from Artist 
    join Album on Artist.ArtistId = Album.ArtistId
    join Track on Album.AlbumId=Track.AlbumId
    join PlaylistTrack on PlaylistTrack.TrackId = track.TrackId
    join Playlist on playlist.PlaylistId = PlaylistTrack.PlaylistId
    group by Artist.Name

## 7)

Calculate which type of media has contributed most to financial turnover

*By: Magnus Tidqvist*

    select MediaType.Name as MediaType, format(sum ( InvoiceLine.Quantity * InvoiceLine.UnitPrice), 'C', 'se-se') as Omsättning
    from InvoiceLine
    inner join Track on InvoiceLine.TrackId = Track.TrackId
    inner join MediaType on MediaType.MediaTypeId = track. MediaTypeId
    group by MediaType.Name
    order by sum ( InvoiceLine.Quantity * InvoiceLine.UnitPrice) desc


## 8)

Lists all songs a person bought

*By: Tobias Persson*

    SELECT Customer.FirstName+ ' ' +Customer.LastName, Track.Name
    FROM Customer
    JOIN Invoice on Customer.CustomerId = Invoice.CustomerId
    JOIN InvoiceLine on Invoice.InvoiceId = InvoiceLine.InvoiceId
    JOIN Track on Track.TrackId = InvoiceLine.TrackId WHERE Customer.FirstName = 'Dan' AND Customer.LastName = 'Miller'

## 9)

Show the ten artists with the lowest ID and sort them backwards by name. The result should thus be:

	Billy Cobham
	BackBeat
	Audioslave
	Apocalyptica
	Antônio Carlos Jobim
	Alice In Chains
	Alanis Morissette
	Aerosmith
	Accept
	AC/DC

Keep in mind that these artist IDs do not necessarily have to be between 1 and 10

*Av: Viktoria Strandberg och Victor Böhmer*

	select * from Artist 
	where ArtistId in (select top 10 ArtistId from Artist)
	order by Name desc

## 10)
 
Get the longest playlist. (Name, TotalLengthInHours)

    SELECT TOP 1 WITH TIES PlayList.Name as Name, SUM(track.Milliseconds)/(1000*60*60) AS TotalLengthInHours
    FROM PlayListTrack
    JOIN Playlist ON PlaylistTrack.PlaylistId=PlayList.PlaylistId
    JOIN Track ON Track.TrackId=PlaylistTrack.TrackId
    GROUP BY Playlist.Name
    ORDER BY TotalLengthInHours DESC

## 11)

List all employees who have a manager and their manager's boss. (EmployeeName, BossesBossName)

    SELECT emp.FirstName + ' ' + emp.LastName AS EmployeeName, bossesboss.FirstName + ' ' + bossesboss.LastName AS BossesBossName
    FROM Employee emp
    JOIN Employee boss ON emp.ReportsTo=boss.EmployeeId
    JOIN Employee bossesboss ON boss.ReportsTo=bossesboss.EmployeeId

## 12)

Create a new table so that each album can have a review

*By: Arvid Silvmark*

    CREATE TABLE Review 
    (
        ReviewId int IDENTITY(1,1) PRIMARY KEY,
        AlbumId int NOT NULL FOREIGN KEY REFERENCES Album(AlbumID),
        ReviewText nvarchar(1000),
    )

Add a review on the album  "Black Sabbath"


    INSERT INTO Review (AlbumId, ReviewText)
    VALUES ((SELECT AlbumId FROM ALBUM WHERE TITLE LIKE 'Black Sabbath'),'Kanske en av de bästa någonsin...')

# 13)

Make a copy of the Track table. Change the 'Milliseconds' field in the new table to 'Seconds'.

Change the table back to look like before. Make sure no values have changed

Tip: If values have changed, try different data types. If no values were changed, check what happens if you save the seconds as a float.

*Av: Victor Böhmer*

	--Lösning 1 

	DROP TABLE TrackCopy

	SELECT * INTO TrackCopy FROM Track 

	ALTER TABLE TrackCopy
	ALTER COLUMN Milliseconds DECIMAL(20,5)

	UPDATE TrackCopy
	SET Milliseconds = Milliseconds / 1000

	EXEC sp_RENAME 'TrackCopy.Milliseconds', 'Seconds', 'COLUMN'

	--Lösning 2

	UPDATE TrackCopy
	SET Seconds = Seconds * 1000
	ALTER TABLE TrackCopy
	ALTER COLUMN Seconds INT
	EXEC sp_RENAME 'TrackCopy.Seconds', 'Milliseconds', 'COLUMN'
	SELECT * FROM TrackCopy

	-- Kolla om info har förändrats eller inte

	SELECT Track.Name, Track.Milliseconds, TrackCopy.Milliseconds
	FROM Track JOIN TrackCopy
	ON Track.TrackId = TrackCopy.TrackId
	WHERE Track.Milliseconds != TrackCopy.Milliseconds


## 14)

Show how many customers and employees there are in each country (Country, NumberOfCustomers, NumberOfEmployees)

The result should look like this
	
	Country     NumberOfCustomers   NumberOfEmployees
	Argentina   1                   0
	Australia   1                   0
	Austria     1                   0
	Belgium     1                   0
	Brazil      5                   0
	Canada      8                   8
	....etc

*Av: Victor Böhmer*

Solution

	SELECT CONCAT(FirstName, ' ', LastName) AS Name, Country, SupportRepId INTO TempTable
	FROM Customer
	UNION
	SELECT CONCAT(FirstName, ' ', LastName), Country, Null FROM Employee
	ORDER BY Country

	SELECT * FROM TempTable

	SELECT Country, COUNT(SupportRepId) AS Customers, Count(*) - Count(SupportRepId) AS Employees 
	FROM TempTable
	GROUP BY Country

	DROP TABLE TempTable

## 15

Show which five composers generated the most profit, and how many songs they sold (Composer, number of songs sold, total sales)

*Av: Marcus Bengtsson*

Expected result:

	Steve Harris									58	57.42
	U2												33	32.67
	Billy Corgan									23	22.77
	Bill Berry-Peter Buck-Mike Mills-Michael Stipe	22	21.78
	Titãs											22	21.78

Solution

	select top 5 t.Composer, count(*) 'Antal sålda låtar', sum(il.unitprice * il.quantity) 'Total försäljning'
	from track t
	join InvoiceLine il on t.trackid = il.TrackId
	where composer is not null
	group by t.composer
	order by sum(il.unitprice * il.quantity) desc

## 16

Create a new playlist of all songs with genre metal or reggae

*Av: Marcus Bengtsson*

	declare @NewPlaylistTable table ( PlaylistID int);

	insert into playlist (name)

	output	Inserted.PlaylistID into @NewPlayListTable
	values ('Metal and Reggae');

	declare @NewPlaylistID tinyint;
	select @NewPlaylistID = PlaylistID
	from @NewPlaylistTable;

	with MetalOrReggae (TrackID) as
	(
	select t.trackid
	from track t
	where t.GenreId in (3,8)
	)
	insert into playlisttrack (playlistid, trackid)
	select @NewPlaylistID, trackid
	from MetalOrReggae

# 17

Show which genre each customer spends the most money on. (CustomerName)(TotalSumMoney)(Genre)

*Av: Viktoria Strandberg *

*Sponsrad av Treo*

Solution without TMP:

	Select t2.*
	From (	Select Concat(Customer.FirstName,' ',Customer.LastName) as CustName, Sum(Invoice.Total) as SumSpent, Genre.Name as G
	From Genre
	join Track on Track.GenreId = Genre.GenreId
	join InvoiceLine on InvoiceLine.TrackId = Track.TrackId
	join Invoice on Invoice.InvoiceId = InvoiceLine.InvoiceId
	join Customer on Customer.CustomerId = Invoice.CustomerId
	Group by Concat(Customer.FirstName,' ',Customer.LastName), Genre.Name) t1
	right join (	Select Concat(Customer.FirstName,' ',Customer.LastName) as CustName, Sum(Invoice.Total) as SumSpent, Genre.Name as G
	From Genre
	join Track on Track.GenreId = Genre.GenreId
	join InvoiceLine on InvoiceLine.TrackId = Track.TrackId
	join Invoice on Invoice.InvoiceId = InvoiceLine.InvoiceId
	join Customer on Customer.CustomerId = Invoice.CustomerId
	Group by Concat(Customer.FirstName,' ',Customer.LastName), Genre.Name) t2
	On t1.SumSpent >t2.SumSpent
	And t1.CustName = t2.CustName
	where t1.CustName is null
	Order by CustName

Alternative:

	Select Concat(Customer.FirstName,' ',Customer.LastName) as CustName, Sum(Invoice.Total) as SumSpent, Genre.Name
	into #Tmp
	From Genre
	join Track on Track.GenreId = Genre.GenreId
	join InvoiceLine on InvoiceLine.TrackId = Track.TrackId
	join Invoice on Invoice.InvoiceId = InvoiceLine.InvoiceId
	join Customer on Customer.CustomerId = Invoice.CustomerId
	Group by Concat(Customer.FirstName,' ',Customer.LastName), Genre.Name
	Order by CustName, SumSpent Desc

	Select t2.*
	From #Tmp as t1
	right join #Tmp as t2
	On t1.SumSpent >t2.SumSpent
	And t1.CustName = t2.CustName
	where t1.CustName is null
	Order by CustName