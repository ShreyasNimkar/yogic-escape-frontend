import path from "path";

export const webpack = (config) => {
  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
        options: {
          importLoaders: 1,
          modules: true,
        },
      },
    ],
    include: path.resolve(__dirname, "../"),
  });

  return config;
};
