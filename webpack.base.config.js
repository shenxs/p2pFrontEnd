{
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader;
:
  'url-loader',
    exclude;
:
  [resolve('src/icons')],
    options;
:
  {
    limit: 10000,
      name;
  :
    utils.assetsPath('img/[name].[hash:7].[ext]');
  }
}
