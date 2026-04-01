/// <reference types="vite/client" />

declare module "*.jpeg" {
  const content: string;
  export default content;
}
