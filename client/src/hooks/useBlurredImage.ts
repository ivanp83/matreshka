import { useEffect } from "react";

const useBlurredImage = (ref: any) => {
  useEffect(() => {
    if (ref) {
      const img = ref.querySelector("img");

      function loaded() {
        if (!!ref) ref.classList.add("loaded");
      }

      if (img.complete) {
        loaded();
      } else {
        img.addEventListener("load", loaded);
      }
    }
  }, []);
};
export default useBlurredImage;
