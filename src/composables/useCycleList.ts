import { ref, computed } from "vue";
import { type MaybeRefOrGetter, toRef, watch, toValue } from "vue";

// First define the composable and export it.
// You can use generics to define the type of the list.
// (https://www.typescriptlang.org/docs/handbook/2/generics.html)
// It's not necessary to understand how generics work to pass the exam
// but they are super useful when building your own type-safe composables

// We also use the MaybeRefOrGetter type to allow for:
//a plain value
// a ref
// or a getter function
// see https://vuejs.org/api/utility-types.html#maybereforgetter for more info
export const useCycleList = <T>(list: MaybeRefOrGetter<T[]>) => {
  const reactiveList = toRef(list);

  // Define a ref to keep track of the active index
  const activeIndex = ref(0);

  // Compute the currently active item in the list (the "state") based off of the index
  // make it writeable so that we can set the state to a new value for ultimate flexibility for our composable
  const state = computed({
    get() {
      return reactiveList.value[activeIndex.value];
    },
    set(value) {
      reactiveList.value[activeIndex.value] = value;
    },
  });

  // Define the prev function to expose from our composable
  // it just decrements the active index, wrapping around to the end of the list if necessary
  function prev() {
    if (activeIndex.value === 0) {
      activeIndex.value = reactiveList.value.length - 1;
    } else {
      activeIndex.value -= 1;
    }
  }

  // Define the next function to expose from our composable
  // it just increments the active index, wrapping around to the beginning of the list if necessary
  function next() {
    if (activeIndex.value === reactiveList.value.length - 1) {
      activeIndex.value = 0;
    } else {
      activeIndex.value += 1;
    }
  }

  watch(reactiveList, () => {
    if (activeIndex.value >= reactiveList.value.length) {
      activeIndex.value = 0;
    }
  });

  // return the prev, next, and state from the composable
  return {
    prev,
    next,
    state,
  };
};
