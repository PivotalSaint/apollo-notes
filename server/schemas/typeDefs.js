const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    bookId: String
    authors: [String]
    description: String
    image: String
    title: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: String
    savedBooks: [Book]
  }
  
  type Query {
    me: [User]
    users: [User]
    user(username: String!): User
    books(book: String): [Book]
    bookId(_id: ID!): Book
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(books: String!): Book
    removeBook(bookId: ID!): Book
  }
`;

module.exports = typeDefs;
