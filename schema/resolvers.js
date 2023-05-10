const { UserList, MovieList } = require("./FakeData");
const _ = require("lodash")
const resolvers = {

    Query:{

        //User Resolvers
        users()
        {
            return UserList;
            
        },

        user: (parent, args) =>{

            const id = args.id;
            const user = _.find(UserList, { id: Number(id)})
            return user;
        },

        //Movie Resolvers
        movies: () =>
        {
            return MovieList
        },

        movie: () =>
        {
            const name = args.name;
            const movie = _.find(UserList, {name})
            return movie;
        }
    },

    //For populate Movie in User data
    User:
    {
        favoriteMovie: () =>
        {
            return _.filter(
                MovieList,
                (movie) => 
                    movie.yearOfPublication >=2000 && movie.yearOfPublication <=2015

            )

        }
    }
}
module.exports= {resolvers};