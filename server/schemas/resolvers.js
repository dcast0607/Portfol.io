const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
//const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const res = await User.findOne({ _id: context.user._id }).select('-__v -password');
          return res
        }
  
        throw new AuthenticationError('Not logged in');
      },
      portfolio: async (parent, { _id }) => {
        const user = await User.findOne({ _id });
        
        const portfolio = user.portfolio[0]
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
        return portfolio
      }
      //added for stripe ordering (lines 17-97)
    //   products: async (parent, { category, name }) => {
    //     const params = {};
  
    //     if (category) {
    //       params.category = category;
    //     }
  
    //     if (name) {
    //       params.name = {
    //         $regex: name
    //       };
    //     }
  
    //     //return await Product.find(params).populate('?');
    // },
    //   product: async (parent, { _id }) => {
    //     return await Product.findById(_id).populate('category');
    // },
    // user: async (parent, args, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id).populate({
    //       path: 'orders.products',
    //       populate: 'category'
    //     });

    //     user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

    //     return user;
    //   }

    //   throw new AuthenticationError('Not logged in');
    // },
    // order: async (parent, { _id }, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id).populate({
    //       path: 'orders.products',
    //       populate: 'category'
    //     });

    //     return user.orders.id(_id);
    //   }

    //   throw new AuthenticationError('Not logged in');
    // },
    // checkout: async (parent, args, context) => {
    //   const url = new URL(context.headers.referer).origin;
    //   const order = new Order({ products: args.products });
    //   const line_items = [];

    //   const { products } = await order.populate('products');

    //   for (let i = 0; i < products.length; i++) {
    //     const product = await stripe.products.create({
    //       name: products[i].name,
    //       description: products[i].description,
    //       images: [`${url}/images/${products[i].image}`]
    //     });

    //     const price = await stripe.prices.create({
    //       product: product.id,
    //       unit_amount: products[i].price * 100,
    //       currency: 'usd',
    //     });

    //     line_items.push({
    //       price: price.id,
    //       quantity: 1
    //     });
    //   }

    //   const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ['card'],
    //     line_items,
    //     mode: 'payment',
    //     success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    //     cancel_url: `${url}/`
    //   });

    //   return { session: session.id };
    // }
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
      editPortfolio: async (parent, { input }, context) => {
        if (context.user) {
          console.log(input)
          try {
            const remove =  await User.findOneAndUpdate(
              { _id: context.user._id },
              {
                $pop: { portfolio: -1},
              },
              {
                  new: true,
                  runValidators: true,
              }
            );
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
    }
  };
  
  module.exports = resolvers;