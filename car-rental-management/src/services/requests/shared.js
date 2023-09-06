
export const uploadImage = async (bucketName, imageName, imageBlob) => {
    const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(imageName, imageBlob)

    if(error){
        throw new Error("")
    }
    return data

}
