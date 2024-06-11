import Video from "../models/video";

// export const home = (req, res) => {
//   Video.find()
//     .then((videos) => {
//       console.log("vidoes", videos);
//       return res.render("home", { pageTitle: "home", videos: [] });
//     })
//     .catch((err) => console.log("error", err));
// };

// export const home = async (req, res) => {
//   console.log("start");
//   const videos = await Video.find({});
//   console.log("finished");
//   console.log(videos);
//   return res.render("home", { pageTitle: "Home", videos });
// };
export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    console.log(videos);
    return res.render("home", { pageTitle: "Home", videos });
  } catch (err) {
    return res.render("Server-error", { err });
  }
};

export const watch = (req, res) => {
  const { id } = req.params;

  return res.render("watch", { pageTitle: `watching` });
};

export const getEdit = (req, res) => {
  const { id } = req.params;

  return res.render("edit", { pageTitle: `Editing` });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  return res.redirect(`/video/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: hashtags.split(",").map((word) => `#${word}`),
    });

    return res.redirect("/");
  } catch (err) {
    console.log(err);
    return res.render("upload", {
      pageTitle: "Upload video",
      errorMessage: err._message,
    });
  }
};

export const search = (req, res) => {
  return res.send("search");
};

export const deleteVideo = (req, res) => {
  return res.send("upload Video");
};
