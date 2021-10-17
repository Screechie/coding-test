import axios from "axios";

const data = {"sharksList":["https://founded.media/hiring/photos/sharks/11261840124_dc9ac72bbe_b.jpg","https://founded.media/hiring/photos/sharks/513197047_2f861d56cb_b.jpg","https://founded.media/hiring/photos/sharks/2989909952_b59500107e_o.jpg","https://founded.media/hiring/photos/sharks/4107884442_3baf8985f2_b.jpg","https://founded.media/hiring/photos/sharks/3822452418_ffa66da89d_o.jpg","https://founded.media/hiring/photos/sharks/3800013954_20fea3a9c9_b.jpg","https://founded.media/hiring/photos/sharks/7109693941_250fc6b246_k.jpg","https://founded.media/hiring/photos/sharks/8592704407_75c3c7ff53_h.jpg","https://founded.media/hiring/photos/sharks/14730744390_cebc28aa86_k.jpg","https://founded.media/hiring/photos/sharks/4936728723_91da549b05_b.jpg"],"catsList":["https://founded.media/hiring/photos/cats/14157413946_fea785b4d6_k.jpg","https://founded.media/hiring/photos/cats/16175483119_bd7374d8a8_h.jpg","https://founded.media/hiring/photos/cats/13901304865_a444cf4d34_k.jpg","https://founded.media/hiring/photos/cats/8311701653_49ed80202c_k.jpg","https://founded.media/hiring/photos/cats/13336301695_3c06dd41cc_k.jpg","https://founded.media/hiring/photos/cats/38679744435_66279af67c_k.jpg","https://founded.media/hiring/photos/cats/6393395037_9cda69da1a_b.jpg","https://founded.media/hiring/photos/cats/6977309082_44102ddf51_b.jpg","https://founded.media/hiring/photos/cats/11477923503_bbdf86387d_b.jpg","https://founded.media/hiring/photos/cats/4481336172_7f464f180d_b.jpg"]}

const allImagesUrl = "http://localhost:3001/images/all";
const catsUrl = "http://localhost:3001/images/cats";
const sharksUrl = "http://localhost:3001/images/sharks";

export const getAllImages = async() => {
  try{
    //const allImages = await axios.get(`${allImagesUrl}`);
    //return allImages;
    return data;
  }
  catch (error) {
    console.log("Error retrieving all files");
    return [];
  }
};

export const getCatImages = async() => {
  try {
    //const catImages = await axios.get(`${catsUrl}`);
    return data.catsList;
    //return catImages;
  }catch (error) {
    console.log("Error retrieving cat files");
    return [];
  }
};

export const getSharkImages = async() => {
  try {
    //const sharkImages = await axios.get(`${sharksUrl}`);
    //return sharkImages;
    return data.sharksList;
  }catch (error) {
    console.log("Error retrieving shark files");
    return [];
  }
};

// console.log(allData);
// console.log(catData);
// console.log(sharkData);