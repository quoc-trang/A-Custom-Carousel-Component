---
difficulty: 1
training: true
chapter: "Chapter 7: Challenge Roundup"
tags: vue
---

# A Custom Carousel Component

In this challenge, you'll use the custom `useCycleList` composable from the previous challenge to create an auto advancing `AppCarousel` component.

## Requirements

The `AppCarousel` component should take in the following props:

1. `urls` - an array of image urls
2. `duration` - a number in milliseconds describing how long each image should display

The component should display each image one at a time for the provided duration, just as a traditional carousel.

> 💡 HINT: Feel free to add a transition but this isn't required.

Finally, you should unit test your component.

> 💡 HINT: write your unit test in `tests/AppCarousel.test.ts` and run them with `yarn test:unit`

> 💪 BONUS: Take your component to the next level by using TypeScript to make it type safe.

![screenshot of solution](https://images.certificates.dev/csvd-training-code-challenge-24.gif)
