// contains all the models properties and their relations
const graphql = require('graphql');
const _ = require ('lodash');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = graphql;

const users = [
  {
    id: '23', firstName: 'Bill', age: '29'
  },
  {
    id: '42', firstName: 'Sam', age: '19'
  }
]
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) { // resolve funciton gets the args you passed into the query
        return _.find(users, { id: args.id });
      }
    }
  }
});