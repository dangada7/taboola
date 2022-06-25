// ==== 1) global variables ====

const numOfArticles = 8

const urls = {
    gif : "https://i.gifer.com/ZZ5H.gif",
    taboolaAds : `http://api.taboola.com/1.2/json/nbcots-wnbc/recommendations.get?app.type=web&app.apikey=987d8fbc8d75b4a4558bcda8bbf2a666c579bb4e&placement.rec-count=${numOfArticles}&placement.organic-type=mix&placement.visible=false&source.type=text&source.id=%2Fnews%2Flocal%2FCar-Slams-Into-Building-In-Queens-Boulevard-New-York-SUV-Evac-326416261.html&source.url=http%3A%2F%2Fwww.nbcnewyork.com%2Fnews%2Flocal%2FCar-Slams-Into-Building-In-Queens-Boulevard-New-York-SUV-Evac-326416261.html&placement.name=Below-Article&user.session=init`
}

const originTypes = {
    sponsored : "sponsored",
    organic : "organic"
}

const elementsIds = {
    taboolaAdsList : "taboolaAdsList"
}

export class TaboolaAds{
    name
    origin
    thumbnail
    url
    branding
    createdDate
    categories

    constructor({name, origin, thumbnail, url, branding, created, categories}) {
        this.name =name
        this.origin =origin
        this.thumbnail =thumbnail
        this.url =url
        this.branding = branding
        this.createdDate = new Date(created)
        this.categories = categories ? categories : []
    }
}




// === 2) server ===

// server_getAds
const server_getAds = () => {

    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();

        xhttp.onload = (ans) => {

            if (xhttp.status === 200) {
                const responseJson = JSON.parse(xhttp.responseText)
                console.log(responseJson.list)
                let taboolaAdsArr = responseJson.list.map(item => new TaboolaAds({
                    name : item.name,
                    origin : item.origin,
                    thumbnail : item.thumbnail,
                    url : item.url,
                    branding : item.branding,
                    created : item.created,
                    categories : item.categories,
                }))


                // sort
                taboolaAdsArr = taboolaAdsArr.sort((item1, item2) => {
                    return item1.createdDate.getTime() > item2.createdDate.getTime() ? -1 : 1
                })

                resolve(taboolaAdsArr)
            }else{
                reject(xhttp.responseText)
            }
        };

        xhttp.open("GET", urls.taboolaAds, true);
        xhttp.send();
    })

}



// === 3) render DOM ===

// renderDom_adsArr
const renderDom_adsArr = (taboolaAdsArr) => {
    let htmlAdsArr =` 
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

    document.getElementById("taboolaAdsList").innerHTML = htmlAdsArr
}

// renderDom_adsArr_loader
const renderDom_showLoader = (elementId) => {
    document.getElementById(elementId).innerHTML = `<img src=${urls.gif} class="g_loader"/>`
}





// === 4) helpers ===

// formatDate
export const formatDate = (date) => {
    return `${addZero(date.getDate())}/${addZero(date.getMonth()+1)}/${date.getFullYear()}`
}

// addZero
export const addZero  = (num) => {
    if (num < 10){
        return "0" + num
    }else{
        return num
    }
}




// === 5) Life Circle ===

// onload
try{
    onload = async () => {

        // 1) show loader
        renderDom_showLoader(elementsIds.taboolaAdsList)

        // 2) get ads from server
        const taboolaAdsArr = await server_getAds()

        // 3) render dom with ads
        renderDom_adsArr(taboolaAdsArr)
    }
}catch (err){}




