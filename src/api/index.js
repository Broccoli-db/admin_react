import service from "../utils/request";
export const getData = () => {
    return service({
        url: "/subscriptions/recommended_collections",
        method: "get"
    })
}