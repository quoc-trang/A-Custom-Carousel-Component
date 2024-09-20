import { onUnmounted } from "vue";

// This composable isn't required to complete the challenge
// but it's a useful composable because it auto cleans up
// the interval when the component is unmounted

export const useInterval = (callback: () => void, milliseconds: number) => {
  const intervalId = setInterval(callback, milliseconds);

  onUnmounted(() => {
    clearInterval(intervalId);
  });

  return {
    stop: () => clearInterval(intervalId),
  };
};
