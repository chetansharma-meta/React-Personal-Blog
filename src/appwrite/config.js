/* eslint-disable no-useless-catch */
import conf from '../conf/conf.js';
import {
    Client,
    Storage,
    ID,
    Databases,
    Query,
} from "appwrite";


export class Service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.Client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({
        title,
        slug,
        content,
        status,
        userId,
        featuredImage
    }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteCollectionId,
                conf.appwriteCollectionId,
                slug, {
                    title,
                    content,
                    status,
                    userId,
                    featuredImage
                });
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, {
        title,
        content,
        status,
        featuredImage
    }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, {
                    title,
                    content,
                    status,
                    featuredImage
                });
        } catch (error) {
            console.log("Appwrite Error:: updatePost. ", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("Appwrite Error:: deletePost. ", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log("Appwrite Error:: getPost. ", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equals('status', 'active')]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            );
        } catch (error) {
            console.log("Appwrite Error:: getPosts. ", error);
            return false;
        }
    }

    // File upload Service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            );
        } catch (error) {
            console.log("Appwrite Error:: uploadFile. ", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            );
            return true;
        } catch (error) {
            console.log("Appwrite Error:: deleteFile. ", error);
            return false;
        }
    }

    async getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        );
    }
}