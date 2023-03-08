import path from "path";

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    alias: {
      "@": resolvePath("./src"),
      "~": resolvePath("./src/styles"),
    },
  },
}