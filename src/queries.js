import { gql } from "@apollo/client";

export const GET_ALL_MEDIA_BY_CATEGORY = gql`
  query {
    getAllMediaByCategory {
      id
      title
      thumbnail
      mediaCategory
    }
  }
`;

export const GET_MANAGER_RECUITERS = gql`
  query getManagerRecuiters($id: String!) {
    getManagerRecuiters(id: $id) {
      recuiter {
        id
        username
        name
        email
      }
      manager {
        name
        username
      }
    }
  }
`;
export const GET_RECUITER_AFFILIATES = gql`
  query getRecuiterAffiliates {
    getRecuiterAffiliates{
      id
      username
      email
    }
  }
`;




export const RECUITER_LOGIN = gql`
  mutation recuiterLogin($username: String!, $password: String!) {
    recuiterLogin(username: $username, password: $password) {
      user {
        id
        username
        email
      }
      token
      userType
    }
  }
`;
