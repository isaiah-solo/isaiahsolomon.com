export default function isMobileSized(): boolean {
  return window.matchMedia("only screen and (max-width: 760px)").matches;
};
