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

export const GET_MANAGER_RECUITERS_MANAGER = gql`
  query getManagerRecuitersManager {
    getManagerRecuitersManager {
      id
      username
      name
      email
    }
  }
`;

export const GET_ACTOR_MEDIA_RECUITER = gql`
  query getActorMedia($id: String!) {
    getActorMedia(id: $id) {
      mediaGallery {
        id
        name
        media {
          url
          mediaCategory
          format
          cloudUrl
        }
      }
      user {
        username
      }
    }
  }
`;

export const GET_ACTOR_MEDIA_MANAGER = gql`
  query getActorMediaManager($id: String!) {
    getActorMediaManager(id: $id) {
      mediaGallery {
        id
        name
        media {
          url
          mediaCategory
          format
          cloudUrl
        }
      }
      user {
        username
      }
    }
  }
`;
export const GET_RECUITER_AFFILIATES = gql`
  query getRecuiterAffiliates {
    getRecuiterAffiliates {
      id
      profilePic
      username
      email
      usrType
      profileSetupStep
      profileComplete
      photos {
        id
        image
        unsafe
      }
      base_profile {
        id
        firstName
        lastName
        phone
      }
      user_basic {
        location
        skype
      }
    }
  }
`;
export const GET_RECUITER_AFFILIATES_MANAGER = gql`
  query getRecuiterAffiliatesManager($id: String!) {
    getRecuiterAffiliatesManager(id: $id) {
      affiliates {
        id
        profilePic
        username
        email
        usrType
        profileSetupStep
        profileComplete
        photos {
          id
          image
          unsafe
        }
        base_profile {
          id
          firstName
          lastName
          phone
        }
        user_basic {
          location
          skype
        }
      }
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

export const MANAGER_LOGIN = gql`
  mutation managerLogin($username: String!, $password: String!) {
    managerLogin(username: $username, password: $password) {
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

export const STRIP_CHAT_DATA = gql`
  query stripChatAPI($id: String!) {
    stripChatData(id: $id) {
      earnings {
        id
        startDate
        endDate
        totalEarnings
        isPaid
      }
      actor {
        username
      }
    }
  }
`;

export const STRIPCHAT_PAYOUTS = gql`
  query actorStripchatPayouts($id: String!) {
    actorStripchatPayouts(id: $id) {
      actor {
        username
      }
      payouts {
        id
        amount
        managerShare
        companyShare
        actorShare
        actor {
          username
        }
        recuiter {
          username
        }
        manager {
          username
        }
        recuiterShare
      }
    }
  }
`;