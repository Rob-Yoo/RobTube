import routes from "../routes";
import Video from "../models/Video";
export const videoHome = async (req, res) => {
  try {
    const videos = await Video.find({}); // DataBase에 있는 모든 Video들을 가져올때까지 기다림
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};
export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};
export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title: title,
    description: description
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = (req, res) =>
  res.render("video_detail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("edit_video", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("delete_video", { pageTitle: "Delete Video" });
