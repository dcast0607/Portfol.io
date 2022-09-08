const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const res = await User.findOne({ _id: context.user._id }).select('-__v -password');
          return res
        }
        throw new AuthenticationError('You need to be logged in!');
      }
    },
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
  
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      },
      savePortfolio: async (parent, { input }, context) => {
        if (context.user) {
          try {
            const res =  await User.findOneAndUpdate(
              { _id: context.user._id },
              {
                  $addToSet: { portfolio: input },
              },
              {
                  new: true,
                  runValidators: true,
              }
            );
            return res;
          } catch (err) {
            console.log(err)
          }
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      saveProject: async (parent, { input }, context) => {
        if (context.user) {
          return User.findOneAndUpdate(
              { _id: context.user._id },
              {
                  $addToSet: { portfolio: { projects: input } },
              },
              {
                  new: true,
                  runValidators: true,
              }
          );
        }
        throw new AuthenticationError('You need to be logged in!');
      }
    }
  };
  
  module.exports = resolvers;