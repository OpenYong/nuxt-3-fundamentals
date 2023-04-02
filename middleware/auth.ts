export default defineNuxtRouteMiddleware((to, from) => {
    const userIsLoggedIn = false; // 하드코딩
    if(!userIsLoggedIn) {
        // return abortNavigation("허용되지 않은 접근입니다.");
        return navigateTo({ path: "/login"})
    }
})
