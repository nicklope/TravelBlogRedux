import Client from './'

export const GetLocations = async () => {
  try {
    const res = await Client.get('/locations')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetLocation = async (id) => {
  try {
    const res = await Client.get(`./locations/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
export const GetComments = async () => {
  try {
    const res = await Client.get(`/comments`)
    return res.data
  } catch (error) {
    throw error
  }
}
export const NewCommentService = async (id, formValue) => {
  try {
    console.log('hit!')
    const res = await Client.post(`/createcomment/${id}`, formValue)
    return res.data
  } catch (error) {
    throw error
  }
}
