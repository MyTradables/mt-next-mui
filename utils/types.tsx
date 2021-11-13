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
    attributes: { [key: string]: string },
};

export type Category = {
    id: string,
    name: string,
    shortDescription: string,
    description: string,
    image: string,
    subcategory: string[];
    attributes: { [key: string]: string },
};

export type Subscription = {
    id: string,
    title: string,
    name: string,
    description: string,
    image: string,
    color: string,
    features: [
        {
          "title": "feature 1",
          "description": "Beschrijving van feature 1",
        },
        {
          "title": "feature 2",
          "description": "Beschrijving van feature 2",
        },
        {
          "title": "feature 3",
          "description": "Beschrijving van feature 3",
        }     
      ],
};

export type ItemData = {
    data: {
        Items: Item[]
    }
}

