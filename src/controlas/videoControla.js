export const trending = (req, res) => {
  return res.render("home");
};

export const see = (req, res) => {
  console.log(req.params);
  return res.render("watch");
};

export const edit = (req, res) => {
  return res.send("edit");
};

export const search = (req, res) => {
  return res.send("search");
};

export const deleteVideo = (req, res) => {
  return res.send("upload Video");
};

export const upload = (req, res) => {
  return res.send("upload");
};
