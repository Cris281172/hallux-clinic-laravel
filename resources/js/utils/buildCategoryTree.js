const buildCategoryTree = (categories, parentId = null) => {
    return categories
        .filter((cat) => cat.parent_id === parentId)
        .map((cat) => ({
            ...cat,
            children: buildCategoryTree(categories, cat.id),
        }));
};

export default buildCategoryTree;
