const {gql} = require("apollo-server")

const typeDefs = gql`

    type User
    {
        id: ID!
        username: String!
        surname: String!
        age: Int!
        gender: Gender!
        friends: [User]
        favoriteMovie: [Movie]
    }
    type Query
    {

        users: [User!]!
        user(id: ID!): User!

    }

    enum Gender
    {
        Male
        Female
    }

    type Movie
    {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!


    }

    type Query
    {
   
        movies: [Movie!]!
        movie(name: String!): Movie!
    }
`;

module.exports= {typeDefs}