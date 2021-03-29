# Transactions

https://docs.microsoft.com/en-us/sql/t-sql/language-elements/transactions-transact-sql?view=sql-server-ver15

A transaction is a single unit of work. If a transaction is successful, all of the data modifications made during the transaction are committed and become a permanent part of the database. If a transaction encounters errors and must be canceled or rolled back, then all of the data modifications are erased.

SQL Server operates in the following transaction modes:

Autocommit transactions
Each individual statement is a transaction.

Explicit transactions
Each transaction is explicitly started with the BEGIN TRANSACTION statement and explicitly ended with a COMMIT or ROLLBACK statement.

## New database

    use master
    exec Happybits.Recreate 'Demo'
    go
    use Demo

## New table

    create table Person(
        FirstName varchar(50)
    )


## Rollback

    begin transaction

    insert into Person
    values
    ('Mia'),
    ('Olivia')

    select * from Person

    rollback transaction

    select * from Person

## Normal transaction

    begin transaction

    insert into Person
    values
    ('Mia'),
    ('Olivia')

    commit

    select * from Person

## Remove all

    delete from Person

## Rollback without begin

    begin transaction

    insert into Person
    values
    ('Mia'),
    ('Olivia')

	commit

    select * from Person       

	rollback                --- Error message:  The ROLLBACK TRANSACTION request has no corresponding BEGIN TRANSACTION.

	select * from Person

## Save transaction

	delete from Person

	begin transaction 

    insert into Person values ('Mia')

    save transaction Mia

    insert into Person values ('Olivia')

    -- This will undo until "Mia" (so Person 'Mia' will be)
    rollback transaction Mia

    -- This will undo the whole transaction (so both insert's will be undone)
    rollback transaction 

	select * from Person




