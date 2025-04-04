import config from '../config/config';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPoem({content, featuredImage=null, status, title, userId}) {
        try {
            console.log(userId);
            
            return await this.databases.createDocument(
                config.appwriteDatabaseId, 
                config.appwritePoemCollectionId, 
                ID.unique(), 
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwritet service :: createPost :: error ", error);
        }
    }

    async updatePoem(poemId, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwritePoemCollectionId,
                poemId,
                {
                    title, 
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch(err) {
            console.log("Appwritet service :: updatePost :: error ", error);
        }
    }

    async deletePoem(poemId) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwritePoemCollectionId,
                poemId,
            );
            return true;
        } catch(err) {
            console.log("Appwritet service :: deletePost :: error ", error);
            return false;
        }
    }

    async getPoem(poemId) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwritePoemCollectionId,
                poemId
            )
        } catch (err) {
            console.log("Appwritet service :: getPost :: error ", error);
            return false;
        }
    }

    async getPoems(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwritePoemCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwritet service :: getPosts :: error ", error);
            return false;
        }
    }

    async likePoem({poemId, likes}) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwritePoemCollectionId,
                poemId,
                {
                    likes
                }
            )
        } catch(err) {
            console.log("Appwritet service :: likePoem :: error ", error);
        }
    }

    async createComment({poemId, text, userId}) {
        try {
            const id = ID.unique();
            const comment = await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCommentCollectionId,
                id,
                {
                    id,
                    text,   
                    userId
                }
            );

            if(comment) {
                // Fetch the existing poem document to get the current comments array
                const poem = await this.databases.getDocument(
                    config.appwriteDatabaseId,
                    config.appwritePoemCollectionId,
                    poemId
                );
        
                const updatedComments = poem.comments ? [...poem.comments, commentId] : [commentId];
        
                return await this.databases.updateDocument(
                    config.appwriteDatabaseId,
                    config.appwritePoemCollectionId,
                    poemId,
                    {
                        id: updatedComments // Correct field name
                    }
                );
            }
        } catch(err) {
            console.log("Appwritet service :: addComment :: error ", error);
        }
    }

    // file upload service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appwritePoemImageId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwritet service :: uploadFile :: error ", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                config.appwritePoemImageId,
                fileId
            );
            return true;
        } catch (error) {
            console.log("Appwritet service :: getPosts :: error ", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            config.appwritePoemImageId,
            fileId
        )
    }
}


const service = new Service();
export default service;