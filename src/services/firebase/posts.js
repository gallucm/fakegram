
import { nApp } from "./config";

export const uploadImagePost = async (image) => {
    const storageRef = nApp.storage().ref();
    const filePathRef = storageRef.child('images/posts/' + image.name);

    const snapshot = await filePathRef.put(image);

    const downloadURL = await snapshot.ref.getDownloadURL();

    return downloadURL;

    // const imageUpdated = await updateImageProfile(userId, downloadURL);
   
    // if (imageUpdated) {
    //     return downloadURL;
    // } else {
    //     return null;
    // }
}