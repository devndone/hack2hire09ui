export default function(context, cb) {
    const {store, req, redirect, route, isClient, isServer} = context
    if (isServer) {
        if (req.session && req.session.user) {
            context.user = req.session.user
        }
        cb()
    } else {
        const userCookies = document.cookie.split('; ')
            .filter((cookie) => {
                return cookie.indexOf('user') > -1
            })

        if (userCookies.length > 0) {
            if (!store.state.user) { store.state.user = {} }
            let user = decodeURIComponent(userCookies[0].split('=')[1])
            store.state.user = user
            context.user = user
        }

        cb()
    }
}
