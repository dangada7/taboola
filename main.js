// ==== 1) global variables ====

import {server_getAds} from "./js/server.js";
import {renderDom_adsArr, renderDom_showLoader} from "./js/domManipulation.js";
import {elementsIds} from "./js/globalVariables.js";

const numOfArticles = 10

// onload
onload = async () => {

    // 1) show loader
    renderDom_showLoader(elementsIds.taboolaAdsList)

    // 2) get ads from server
    const taboolaAdsArr = await server_getAds(numOfArticles)

    // 3) render dom with ads
    renderDom_adsArr(taboolaAdsArr)
}




