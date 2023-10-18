import { create } from 'zustand'
import secure from './secure'
import api from './api'



const useGlobal = create((set) => ({

    initialized: false,

    init: async () => {
        const credentials = await secure.get('credentials')
        console.log(credentials.username)

        if (credentials) {
            try {
                const response = await api({
                    method: "POST",
                    url: '/chat/signin/',
                    data: {
                        username: credentials.username,
                        password: credentials.password
                    }
                })

                if (response.status !== 200) {
                    throw 'Authentication error'
                }
                const user = response.data.user

                set((state) => ({
                    initialized: true,
                    authenticated: true,
                    user: user
                }))
                return;
            }
            catch (error) {
                console.log('use global.init', error)
            }
        }

        set((state) => ({
            initialized: true, 
        }))

    },

    // authentication
    authenticated: false,
    user: {},

    login: async(credentials, user) => {
       await secure.set('credentials', credentials);
        set((state) => ({
            authenticated: true,
            user: user
        }))
    },
    logout:async () => {
       await secure.wipe()
        set((state) => ({
            authenticated: false,
            user: {}
        }))
    }

}))

export default useGlobal;