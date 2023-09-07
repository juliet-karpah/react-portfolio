import { supabase } from "../supabase";

export const uploadImage = async (bucketName, imageName, imageBlob) => {
  const { data, error: imageUploadError } = await supabase.storage
    .from(bucketName)
    .upload(imageName, imageBlob);

  if (imageUploadError) {
    throw new Error("Car image failed to upload to supabase");
  }

  return data;
};
