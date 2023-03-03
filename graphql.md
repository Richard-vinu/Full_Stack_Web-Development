Graphql: A query language
------------------------------------
So you know about REST APIs, they can have endpoints, you can
post data or get data from those endpoints

-- /users/:id/
-- /foo/baz/bar

But when things grow, more and more endpoints are required, and
a lot of unnecessary data is fetched, like when we want to get a an author's
books from a book id, you will send a request to /books/:id to get your book 
(2 roundtrips from client/server), with more
unnecessary data that you don't need such as the release date, sales ....
Then you get the author id, make ANOTHER request to /authors/getprofile/:id to
get the author with more data you don't wanna fetch (4 roundtrips total),
and then you wanna get all their books, ANOTHER request to 
/books/fromauthor/:id, it's now 6 roundtrips! But now with graphql
we have one, single, endpoint /graphql where we can send a query,

query {
  author {
    books
  }
}

2 roundtrips, one single endpoint, one request, boom!
--------------------------------------------------
GraphQL is developed by Facebook and the community, released in 2015,
has many implementations in many languages

-- github.com/graphql
-- graphql.org
-- npm i graphql
