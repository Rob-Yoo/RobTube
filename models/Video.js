import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileURL: {
    type: String,
    required: "File URL is required" //file의 URL이 없는 비디오를 받을때 이 에러메시지가 뜬다
  },
  title: {
    type: String,
    required: "Title is required"
  },
  description: String,
  views: {
    type: Number,
    default: 0 // 비디오를 처음 올리면 views가 0이 되게
  },
  createdAt: {
    type: Date,
    default: Date.now // 현재 날짜를 반환하는 함수
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const model = mongoose.model("Video", VideoSchema);
export default model;
