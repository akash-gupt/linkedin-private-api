[linkedin-private-api-v2](../README.md) / [Exports](../modules.md) / LinkedInCollectionResponse

# Interface: LinkedInCollectionResponse<T, I, M\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `I` | `I` |
| `M` | `undefined` |

## Table of contents

### Properties

- [data](LinkedInCollectionResponse.md#data)
- [included](LinkedInCollectionResponse.md#included)

## Properties

### data

• **data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$type` | ``"com.linkedin.restli.common.CollectionResponse"`` |
| `*elements` | `T`[] |
| `elements` | `T`[] |
| `entityUrn` | `string` |
| `metadata?` | `M` |
| `paging` | `Paging` |

#### Defined in

[entities/linkedin-collection-response.entity.ts:8](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-collection-response.entity.ts#L8)

___

### included

• **included**: `I`[]

#### Defined in

[entities/linkedin-collection-response.entity.ts:16](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-collection-response.entity.ts#L16)
