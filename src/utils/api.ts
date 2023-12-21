
import axios from 'axios'

 export  const api  = axios.create({baseURL:process.env.BASE_URL})




//  const  getHero   = async () => {
//     const response = await api.get('/hero?populate=*') 
//     const data  =   response.data
//   console.log(data);
  
//     return data

//   }
//   const getMainData = async () => {
//     const response = await api.get('/main-data?populate=*') 
//     const data  = response.data

//     return data
//   }

//   const getProjects =  async () => {
//     const response = await api.get('/projects?populate=*') 
//     const data  = response.data

//     return data
//   }

//   const getChooses =  async () => {
//     const response = await api.get('/chooses?populate=*') 
//     const data  = response.data

//     return data
//   }

//   const getProducts =  async () => {
//     const response = await api.get('/products?populate=*') 
//     const data  = response.data

//     return data
//   }

//   const getPartners =  async () => {
//     const response = await api.get('/partners?populate=*') 
//     const data  = response.data

//     return data
//   }

//  const getReviews =   async () => {
//     const response = await api.get('/reviews?populate=*') 
//     const data  = response.data

//     return data
//   }

//   const getSocials = async () => {
//     const response = await api.get('/socials?populate=*') 
//     const data  = response.data

//     return data
//   }

//   const getSectionTitles =  async() => {
//     const response = await api.get('/section-title?populate=*') 
//     const data  = response.data

//     return data
//   }

//   const getGuarants =  async() => {
//     const response = await api.get('/guarant?populate=*') 
//     const data  = response.data

//     return data
//   }

//   const postFeedback =  async (data:any) => {
//     const response = await api.post('/feedbacks', data)
//     return response.data

//   }


//   export {
//      getChooses,
//      getGuarants,
//      getHero,
//      getMainData,
//      getPartners,
//      getProducts,
//      getProjects,
//      getReviews,
//      getSectionTitles,
//      getSocials,
//      postFeedback
//   }