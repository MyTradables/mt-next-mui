export async function fetchItem(id:string) {
    const res = await fetch("https://erikku.design/mytradables/db.json");
    const itemData = await res.json();
    const item = itemData.find(item => item.id === id)

    return item;
}
export async function fetchCategory(id:string) {
    const res = await fetch("https://erikku.design/mytradables/categories.json");
    const categoryData = await res.json();
    const category = categoryData.find(category => category.id === id)

    return category;
}

export async function fetchItems() {
    const res = await fetch("https://erikku.design/mytradables/db.json");
    const itemData = await res.json();

    return itemData;
}

export async function fetchCategories() {
    const res = await fetch("https://erikku.design/mytradables/categories.json");
    const categoryData = await res.json();

    return categoryData;
}

export async function fetchSearch() {
    const res = await fetch("https://erikku.design/mytradables/db.json");
    const searchData = await res.json();

    return searchData;
}
