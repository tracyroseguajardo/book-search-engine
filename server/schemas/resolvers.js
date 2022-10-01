const { AuthenticationError } = require('apollo-server-express');
const { Book, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    // get a single user by either their id or their username
    Query: {
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
          },
    },
    // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)

    // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body

  // save a book to a user's `savedBooks` field by adding it to the set (to prevent duplicates)
  // user comes from `req.user` created in the auth middleware function

  // remove a book from `savedBooks`

}

Mutation: {
     // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)

    // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body

  // save a book to a user's `savedBooks` field by adding it to the set (to prevent duplicates)
  // user comes from `req.user` created in the auth middleware function

  // remove a book from `savedBooks`

}