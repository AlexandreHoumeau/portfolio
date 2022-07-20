export {};

declare global {
  interface Window {
    gtag: any;
  }

  interface document {
    querySelector: any
  }
}
