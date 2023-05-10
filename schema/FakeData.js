const UserList = [

    {

        id:1,
        username:"om",
        surname:"patel",
        age:23,
        gender: "Male",
        friends:[
            {

                id:2,
                username:"dhruv",
                surname:"rana",
                age:67,
                gender: "Male"
                
            },

            {

                id:3,
                username:"yash",
                surname:"patel",
                age:20,
                gender: "Male"
                
            }


        ]
        
    },

    {

        id:2,
        username:"dhruv",
        surname:"rana",
        age:67,
        gender: "Male"
        
    },

    {

        id:3,
        username:"yash",
        surname:"patel",
        age:20,
        gender: "Male"
        
    },

    {

        id:4,
        username:"pathik",
        surname:"bhatt",
        age:22,
        gender: "Male"
        
    },
    {

        id:5,
        username:"raj",
        surname:"shah",
        age:35,
        gender: "Male",
        friends:[

            {

                id:4,
                username:"pathik",
                surname:"bhatt",
                age:22,
                gender: "Male"
                
            },
        ]
        
    },


];


const MovieList =[
    {
        id: 1,
        name: "Deview",
        yearOfPublication: 2018,
        isInTheaters: true,
    },

    {
        id: 2,
        name: "Lost jack",
        yearOfPublication: 2013,
        isInTheaters: false,
    },

    {
        id: 3,
        name: "tigun new",
        yearOfPublication: 2026,
        isInTheaters: true,
    },



]
module.exports= {UserList, MovieList};
