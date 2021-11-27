import axios from 'axios'

const TOKEN_KEY = 'KT'

export function setToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
}

export function getToken() {
    return localStorage.getItem(TOKEN_KEY)
}

export function deleteToken() {
    return localStorage.removeItem(TOKEN_KEY)
}

export function initAxiosInterceptors() {
    axios.interceptors.request.use(function (config) {
        const token = getToken()
        if (token != undefined) {
            if (!window.location.href.includes('login')) {
                config.headers.Authorization = `Bearer ${token}`
            }
        }
        return config
    })

    axios.interceptors.response.use(
        function (response) {
            return response
        },
        function (error) {
            if (error.response.status === 401) {
                if (!window.location.href.includes('login')) {
                    window.location.replace('/login')
                }
            }
        }
    )
}
