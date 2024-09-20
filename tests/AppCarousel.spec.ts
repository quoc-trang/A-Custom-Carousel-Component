import { describe, it, expect, beforeEach, vi, test } from "vitest";
import { nextTick } from "vue";
import { mount, type VueWrapper } from "@vue/test-utils";
import AppCarousel from "../src/components/AppCarousel.vue";

// you should write tests in order to verify the user's solution
// these test will run to verify the user's solution

let wrapper: VueWrapper;
const urls = [
  "https://picsum.photos/id/32/500/300?test=1",
  "https://picsum.photos/id/35/500/300?test=2",
  "https://picsum.photos/id/56/500/300?test=3",
  "https://picsum.photos/id/84/500/300?test=4",
];

beforeEach(() => {
  vi.useFakeTimers({ shouldAdvanceTime: true });
  wrapper = mount(AppCarousel, {
    props: {
      urls: urls,
    },
  });
});

describe("the Carousel component", () => {
  test.todo(
    "rotates through the images provided via the urls prop",
    async () => {},
  );

  test.todo(
    "uses the duration prop to change the time between images",
    async () => {},
  );
});
