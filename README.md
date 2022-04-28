# Mercurius Federation Subscription Bug

## Steps

- `npm i`
- `nest start service --watch`
- `nest start gateway --watch`
- Try this Subscription
  ```gql
  subscription {
    test
  }
  ```

subscription url: `ws://localhost/graphql`
