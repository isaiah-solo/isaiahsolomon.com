import {useEffect, useState} from 'react';

export default function useOnScrollDown(
  onScrollDown: (scrollTop: number) => void,
): void {
  const [initialYOffset, setInitialYOffset] = useState(0);

  useEffect(() => {
    const scrollFunc = (): void => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > initialYOffset) {
        onScrollDown(scrollTop);
      }

      setInitialYOffset(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', scrollFunc, false);

    return (): void => {
      window.removeEventListener('scroll', scrollFunc);
    };
  }, [onScrollDown]);
}
