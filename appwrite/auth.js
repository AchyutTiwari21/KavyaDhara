import config from '../config/config.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount) {
                // call another method
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            console.error("AuthService :: createAccount :: error", error);
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch(error) {
            console.error("AuthService :: loginAccount :: error", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("AuthService :: getAccount :: error", error);
            throw error;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.error("AuthService :: logoutAccount :: error", error);
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;