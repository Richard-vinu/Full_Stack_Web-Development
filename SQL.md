What is SQL?

SQL is a short-form of the structured query language, and it is pronounced as S-Q-L or sometimes as See-Quell.

Structured Query Language contains the following four components in its process:


    Query Dispatcher
    Optimization Engines
    Classic Query Engine
    SQL Query Engine, etc.


![](https://static.javatpoint.com/sqlpages/images/sql-process.png)


Some SQL Commands

    CREATE command
    UPDATE command
    DELETE command
    SELECT command
    DROP command
    INSERT command
    
    
The following table describes the differences between the SQL and NoSQL, which are necessary to understand:
SQL 	No-SQL
1. SQL is a relational database management system. 	1. While No-SQL is a non-relational or distributed database management system.
2. The query language used in this database system is a structured query language. 	2. The query language used in the No-SQL database systems is a non-declarative query language.
3. The schema of SQL databases is predefined, fixed, and static. 	3. The schema of No-SQL databases is a dynamic schema for unstructured data.
4. These databases are vertically scalable. 	4. These databases are horizontally scalable.
5. The database type of SQL is in the form of tables, i.e., in the form of rows and columns. 	5. The database type of No-SQL is in the form of documents, key-value, and graphs.
6. It follows the ACID model. 	6. It follows the BASE model.
7. Complex queries are easily managed in the SQL database. 	7. NoSQL databases cannot handle complex queries.
8. This database is not the best choice for storing hierarchical data. 	8. While No-SQL database is a perfect option for storing hierarchical data.
9. All SQL databases require object-relational mapping. 	9. Many No-SQL databases do not require object-relational mapping.
10. Gauges, CircleCI, Hootsuite, etc., are the top enterprises that are using this query language. 	10. Airbnb, Uber, and Kickstarter are the top enterprises that are using this query language.
11. SQLite, Ms-SQL, Oracle, PostgreSQL, and MySQL are examples of SQL database systems. 	11. Redis, MongoDB, Hbase, BigTable, CouchDB, and Cassandra are examples of NoSQL database systems.
Advantages of SQL

SQL provides various advantages which make it more popular in the field of data science. It is a perfect query language which allows data professionals and users to communicate with the database. Following are the best advantages or benefits of Structured Query Language:



6. What are Tables and Fields?

A table is an organized collection of data stored in the form of rows and columns. Columns can be categorized as vertical and rows as horizontal. The columns in a table are called fields while the rows can be referred to as records.
7. What are Constraints in SQL?

Constraints are used to specify the rules concerning data in the table. It can be applied for single or multiple fields in an SQL table during the creation of the table or after creating using the ALTER TABLE command. The constraints are:

    NOT NULL - Restricts NULL value from being inserted into a column.
    CHECK - Verifies that all values in a field satisfy a condition.
    DEFAULT - Automatically assigns a default value if no value has been specified for the field.
    UNIQUE - Ensures unique values to be inserted into the field.
    INDEX - Indexes a field providing faster retrieval of records.
    PRIMARY KEY - Uniquely identifies each record in a table.
    FOREIGN KEY - Ensures referential integrity for a record in another table.

8. What is a Primary Key?
The PRIMARY KEY constraint uniquely identifies each row in a table. It must contain UNIQUE values and has an implicit NOT NULL constraint.
A table in SQL is strictly restricted to have one and only one primary key, which is comprised of single or multiple fields (columns).


10. What is a Foreign Key?

A FOREIGN KEY comprises of single or collection of fields in a table that essentially refers to the PRIMARY KEY in another table. Foreign key constraint ensures referential integrity in the relation between two tables.
The table with the foreign key constraint is labeled as the child table, and the table containing the candidate key is labeled as the referenced or parent table.
