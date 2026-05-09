import { v2 as cloudinary } from 'cloudinary';

const uploadOnCloudinary = async (buffer) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    try {
        if (!buffer) return null

        const result = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({}, (error, result) => {
                if (error) reject(error)
                else resolve(result)
            }).end(buffer)
        })

        return result.secure_url
    } catch (error) {
        console.log(error)
        return null
    }
}

export default uploadOnCloudinary