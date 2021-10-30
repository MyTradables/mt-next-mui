export type Item = {
    id: string,
    title: string,
    shortDescription: string,
    description: string,
    owner: string,
    city: string,
    province: string,
    zipcode: string,
    category: string,
    subCategory: string,
    creationDateTime: string,
    images: string[],
    attributes: {[key: string]: string},
};

export type ItemData = {
    data: {
        Items: Item[]
    }
} 