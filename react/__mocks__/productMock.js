import { map, range } from 'ramda'

export const productMock = itemNumber => {
  const itemMock = name => {
    return {
      benefitProduct: {
        linkText: 'linkText',
        productName: 'productName',
        brand: 'brand',
        items: [
          {
            productName: 'productName',
            itemId: 'itemId',
            name: name,
            image: [
              {
                imageId: 'imageId',
                imageUrl: '',
                imageText: 'imageText',
              },
            ],
            seller: [
              {
                sellerId: 'sellerId',
                commertialOffer: {
                  Installments: [
                    {
                      Value: 1,
                      InterestRate: 1,
                      NumberOfInstallments: 1,
                    },
                  ],
                  Price: 1,
                  ListPrice: 1,
                },
              },
            ],
          },
        ],
        skuId: 'skuId',
        slug: 'slug',
        productQuery: {
          product: {
            productId: 'productId',
            productName: 'productName',
            items: [
              {
                itemId: 'itemId',
                name: 'name',
                images: [
                  {
                    imageId: 'imageId',
                    imageUrl: '',
                    imageText: 'imageText',
                  },
                ],
                sellers: [
                  {
                    sellerId: 'sellerId',
                    commertialOffer: {
                      Installments: [
                        {
                          Value: 1,
                          InterestRate: 1,
                          NumberOfInstallments: 1,
                        },
                      ],
                      Price: 1,
                      ListPrice: 1,
                    },
                  },
                ],
              },
            ],
          },
          loading: false,
        },
        share: { social: {} },
      },
      benefitSKUIds: ['itemId'],
      discount: 1,
      minQuantity: 1,
    }
  }

  const mock = {
    productQuery: {
      loading: false,
      product: {
        benefits: [
          {
            items: map(
              index => itemMock(`name-${index}`),
              range(1, itemNumber + 1)
            ),
          },
        ],
        productId: '1',
      },
    },
  }

  return mock
}
