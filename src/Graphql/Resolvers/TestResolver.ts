import { Resolvers } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import gql from "graphql-tag";

export const testResolver: Resolvers = {
    Mutation: {
        testAddToStore: (_root, args, context) => {
            const cache: InMemoryCache = context.cache;

            let todo: any[] = cache.readQuery<{ cart: string[] }>({
                query: gql`
                    query GetTodos {
                        cart @client
                    }
                `,
            })?.cart;

            cart.push(args.productUuid);
            cart = Array.from(new Set(cart));

            cache.writeData({ data: { cart } });

            return null;

        }
    }
}

