"use strict";

/** @type {import('next').NextConfig} */
var nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  head: {
    link: [{
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=ABeeZee&display=swap"
    }]
  }
};
module.exports = nextConfig;