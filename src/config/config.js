const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwritePoemCollectionId: String(import.meta.env.VITE_APPWRITE_POEM_COLLECTION_ID),
    appwriteCommentCollectionId: String(import.meta.env.VITE_APPWRITE_COMMENT_COLLECTION_ID),
    appwritePoemImageId: String(import.meta.env.VITE_APPWRITE_POEM_IMAGE_ID),
    appwriteProfileImageId: String(import.meta.env.VITE_APPWRITE_PROFILE_IMAGE_ID),
}

export default config;