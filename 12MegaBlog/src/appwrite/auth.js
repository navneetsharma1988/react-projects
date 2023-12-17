import { Client, Account, ID } from 'appwrite'
import conf from '../conf/conf.js'

export class AuthService { 
    client = new Client()
    account;
    
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        // eslint-disable-next-line no-useless-catch
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({ email, password })
            } else {
                throw new Error('Failed to create account')
            }
            
        } catch (error) {
            throw error
        }
    }

    async login({ email, password }) {
        // eslint-disable-next-line no-useless-catch
        try {
           return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error :: ", error);
        }

        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout :: error :: ", error);
        }
    }
  
}

const authService = new AuthService()

export default authService