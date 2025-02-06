import service from "../utils/request";
export const getData = () => {
    return service({
        url: "/jian/subscriptions/recommended_collections",
        method: "get"
    })
}