export class TaboolaAds {
    name
    origin
    thumbnail
    url
    branding
    createdDate
    categories

    constructor({name, origin, thumbnail, url, branding, created, categories}) {
        this.name = name
        this.origin = origin
        this.thumbnail = thumbnail
        this.url = url
        this.branding = branding
        this.createdDate = new Date(created)
        this.categories = categories ? categories : []
    }
}