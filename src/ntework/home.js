import {request} from "@/ntework/request";
export function getHomeMultiData() {
  return request({
    url:'https://api.apiopen.top/api/getImages?page=0&size=5'
  })

}
