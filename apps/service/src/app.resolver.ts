import { Context, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'mercurius';

@Resolver()
export class AppResolver {
  @Query(() => String)
  hi() {
    return 'Hi';
  }

  @Subscription(() => String)
  test(@Context('pubsub') pubSub: PubSub) {
    console.log('HERE --------');

    let i = 0;
    setInterval(() => {
      console.log('SEND');

      pubSub.publish({
        topic: 'test',
        payload: { test: 'Testing: ' + i },
      });

      i++;
    }, 1000);

    return pubSub.subscribe('test');
  }
}
