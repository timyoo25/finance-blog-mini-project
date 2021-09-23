import api from './api-config'

export const getAllBlogs = async () => {
  const resp = await api.get(`/blogs`)
  return resp.data
}

export const getOneBlog = async (blogId) => {
  const resp = await api.get(`/blogs/${blogId}`)
  return resp.data
}

export const createBlog = async (blogData) => {
  const resp = await api.post(`/blogs`, { blog: blogData })
  return resp.data
}

export const updateBlog = async (blogId, blogData) => {
  const resp = await api.put(`/blogs/${blogId}`, { blog: blogData })
  return resp.data
}

export const deleteBlog = async (blogId) => {
  const resp = await api.delete(`/blogs/${blogId}`)
  return resp
}