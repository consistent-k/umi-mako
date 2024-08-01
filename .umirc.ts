import { defineConfig } from "@umijs/max";

export default defineConfig({
  base: '/my-web',
  publicPath: '/my-web/',
  routes: [
    { path: "/", component: "index" },
  ],
  npmClient: "pnpm",
  hash: true,
  mako: {},
});
