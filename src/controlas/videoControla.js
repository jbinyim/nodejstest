const videos = [
  {
    id: 1,
    title: "First Video",
    createdAt: "minutes ago",
    views: 59,
    comment: 2,
    rating: 5,
  },
  {
    id: 2,
    title: "Second Video",
    createdAt: "minutes ago",
    views: 1,
    comment: 2,
    rating: 5,
  },
  {
    id: 3,
    title: "Third Video",
    createdAt: "minutes ago",
    views: 59,
    comment: 2,
    rating: 5,
  },
];
export const trending = (req, res) => {
  return res.render("home", {
    pageTitle: "Home",
    videos,
  });
};

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `watching ${video.title}`, video });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/video/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  const { title } = req.body;
  const newVideo = {
    id: videos.length + 1,
    title,
    createdAt: "just now",
    views: 0,
    comment: 0,
    rating: 0,
  };
  videos.push(newVideo);
  return res.redirect("/");
};

export const search = (req, res) => {
  return res.send("search");
};

export const deleteVideo = (req, res) => {
  return res.send("upload Video");
};
