import {formatDate} from "./helpers.js";
import {elementsIds, urls} from "./globalVariables.js";

// renderDom_adsArr
export const renderDom_adsArr = (taboolaAdsArr) => {
    let htmlAdsArr = ` 
        <div>
            ${taboolaAdsArr.map((adsItem) => {
        return `
                     <div class="g_adsItem">
                        <a href="${adsItem.url}" target="_blank">
                            <img src="${adsItem.thumbnail[0].url}" class="g_adsImage"/>
                            <div class="g_adsText">
                                <div >
                                    ${adsItem.name}
                                </div>
                                <div class="g_bottomAds">
                                    <div class="g_adsBranding">
                                        ${adsItem.categories.join(",")} | ${adsItem.branding} 
                                    </div>
                                     <div class="g_adsDate">
                                        ${formatDate(adsItem.createdDate)}
                                    </div>
                                </div>
                                
                            </div>
                          
                        </a>
                    </div>
                `
    }).join("")}
        </div>
    `

    document.getElementById(elementsIds.taboolaAdsList).innerHTML = htmlAdsArr
}

// renderDom_showLoader
export const renderDom_showLoader = (elementId) => {

    let ans = `
    <div>
        ${(() => {
            let ans =''
            for(let i=0; i< 10; i++)
                ans += `<img src=${urls.gif} class="g_loader"/>`
            return ans
        })()
    }

    </div>
    `


    document.getElementById(elementId).innerHTML = ans
}