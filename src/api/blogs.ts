import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
});

export const getBlogs = async () => {
  const { data } = await API.get("/blogs");
  return data;
};

export const getBlogById = async (id: number) => {
  const { data } = await API.get(`/blogs/${id}`);
  return data;
};

export const createBlog = async (blog: any) => {
  const { data } = await API.post("/blogs", blog);
  return data;
};
