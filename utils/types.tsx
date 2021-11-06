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

export type Category = {
    id: string,
    name: string,
    shortDescription: string,
    description: string,
    image: string,
    attributes: {[key: string]: string},
};

export type Subscription = {
    id: string,
    title: string,
    name: string,
    description: string,
    image: string,
    color: string,
    features: [],
};

export type ItemData = {
    data: {
        Items: Item[]
    }
} 

