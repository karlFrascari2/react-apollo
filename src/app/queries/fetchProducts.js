import gql from 'graphql-tag';

export default gql`
query pocCategorySearch($id: ID!, $search: String!, $categoryId: Int!) {
  poc(id: $id) {
    products(categoryId: $categoryId, search: $search) {
      productVariants{
        title
        description
        imageUrl
        price
        productVariantId
        inventoryItemId
      }
    }
  }
}
`;