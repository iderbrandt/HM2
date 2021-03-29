# Guid

*Purpose: show the different kind of id's: integers, guids and sequential-guid*

Global Unique IDentifier

Advantages

- Easy to combine two tables even from diffent databases. Because there are minimal risk that two GUID's are the same
- The client (e.g the C# code) can generate an ID without needing to communicate with the database (good for performance)
- A bit more secure than using integers since its hard/impossible to guess an GUID

Disadvantages
- Occupies more physical space on the harddrive (one guid takes 16 bytes)  
- Harder to read and remember when debugging av developing 

Is a GUID unique? 

- GUID is made of 32 hexadecimal numbers (128 bits)
- So the total number of GUID's is: 16^32 = 3.4 * 10^38 (34000000000000000000000000000000000000)
- On a paper there are (approx) 10^22 atoms.
- If every person on earth get one million pappers and they start to count each atom => 10^10 * 10^22 * 10^6 = 10^38

Advantages with "Sequential GUID" (instead of ordinary GUID's)
- Less disk usage
- Higher performance when inserting rows with sequential guid
- Create new sequential id is a bit faster than a new GUID (you don't need random function)

Disadvantages with "Sequential GUID"
- Easier to guess the number (bad for security reasons)
- Fewer numbers than ordinary GUID
- Disadvantage with microsoft solution: when you reboot a new value is set (that may be lower)

Detail, info about "clustered index":
- Can only be one per table
- In what order the rows are stored physically on disk


https://betterexplained.com/articles/the-quick-guide-to-guids/

Execute

	use master
	exec Happybits.Recreate 'Demo'
	use Demo

An ordinary table with whole numbers as id's
"identity(1,1)" => the id's is added automatically

	create table Person1(
		Id int identity(1,1),
		Name varchar(50),
	)

Same table but we now use GUID's 
If no GUID is given => null

	create table Person2(
		Id uniqueidentifier,
		Name varchar(50),
	)

Same table but if no GUID is given the database create one for us

	create table Person3(
		Id uniqueidentifier default newid(), 
		Name varchar(50),
	)


Same as above but using "sequential guids"

	create table Person4(
		Id uniqueidentifier default newsequentialid(),
		Name varchar(50),
	)

Execute

	insert into Person1(Name) values('Adam');
	insert into Person1(Name) values('Lisa');
	insert into Person1(Name) values('Eva');
	select * from Person1

Id's added automatically with integer. You'll get

	1	Adam
	2	Lisa
	3	Eva

Execute

	insert into Person2(Id, Name) values('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'Adam');
	insert into Person2(Id, Name) values(newid(), 'Berit'); -- the database generate an id
	insert into Person2(Name) values('Cecilia'); -- the Id will be null 
	insert into Person2(Name) values('David'); --  the Id will be null 
	select * from Person2

Here we use GUID as id

If no id is supplied => null

"newid()" => the database generate a GUID

You'll get: 

	BBBBBBBB-BBBB-BBBB-BBBB-BBBBBBBBBBBB	Adam
	FB0865A8-7354-4DE1-86BA-0EA0C729BFA8	Berit              -- your GUID will probably be something else
	NULL									Cecilia
	NULL									David

Execute

	insert into Person3(Id, Name) values('cccccccc-cccc-cccc-cccc-cccccccccccc', 'Adam');
	insert into Person3(Id, Name) values(newid(), 'Berit');
	insert into Person3(Name) values('Cecilia'); 
	insert into Person3(Name) values('David');
	select * from Person3

Same as above but if no id is supplied => the database generate one for us

	CCCCCCCC-CCCC-CCCC-CCCC-CCCCCCCCCCCC	Adam
	F2246FDE-5A03-4F53-AB38-40B67A705328	Berit          -- your GUID will be something else
	2E89DBEF-9644-4E76-A783-BD1516D83FA9	Cecilia        -- your GUID will be something else
	0273F039-F144-4265-BA06-486B6B1E12DE	David          -- your GUID will be something else


Execute

	insert into Person4(Name) values('Adam');
	insert into Person4(Name) values('Berit');
	insert into Person4(Name) values('Cecilia');
	select * from Person4

Here sequantial id's is generate. Note that the numbers increasing

	F86B2ABF-E79F-EA11-84E1-C85B76F44CFD	Adam            -- your GUID will be something else
	F96B2ABF-E79F-EA11-84E1-C85B76F44CFD	Berit           -- your GUID will be something else
	FA6B2ABF-E79F-EA11-84E1-C85B76F44CFD	Cecilia         -- your GUID will be something else


