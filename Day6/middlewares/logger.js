const logger = (req, res, next) => {
  const url = req.url;
  const method = req.method;
  const date = new Date().getFullYear();
  console.log(url, method, date);
  //   res.send() => this would send its own data as an response an would overwrite the app.get response
  //   next() => is used to transfer the flow to any other middle ware or back to app.get
  //   If you dont do any of the above mentioned actions the Page will keep on loading
  next();
};

module.exports = logger;
