// server_getAds
import {TaboolaAds} from "./classes.js";
import {urls} from "./globalVariables.js";

export const server_getAds = (numOfArticles) => {

    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();

        xhttp.onload = (ans) => {

            if (xhttp.status === 200) {
                const responseJson = JSON.parse(xhttp.responseText)
                console.log(responseJson.list)
                let taboolaAdsArr = responseJson.list.map(item => new TaboolaAds({
                    name: item.name,
                    origin: item.origin,
                    thumbnail: item.thumbnail,
                    url: item.url,
                    branding: item.branding,
                    created: item.created,
                    categories: item.categories,
                }))


                // sort
                taboolaAdsArr = taboolaAdsArr.sort((item1, item2) => {
                    return item1.createdDate.getTime() > item2.createdDate.getTime() ? -1 : 1
                })

                resolve(taboolaAdsArr)
            } else {
                reject(xhttp.responseText)
            }
        };

        urls.taboolaAds+=`&placement.rec-count=${numOfArticles}`

        xhttp.open("GET", urls.taboolaAds, true);
        xhttp.send();
    })

}