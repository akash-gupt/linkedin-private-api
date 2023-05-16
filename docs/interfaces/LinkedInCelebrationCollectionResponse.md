[linkedin-private-api-v2](../README.md) / [Exports](../modules.md) / LinkedInCelebrationCollectionResponse

# Interface: LinkedInCelebrationCollectionResponse<T, I, M\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `I` | `I` |
| `M` | `undefined` |

## Table of contents

### Properties

- [data](LinkedInCelebrationCollectionResponse.md#data)
- [included](LinkedInCelebrationCollectionResponse.md#included)

## Properties

### data

• **data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | { `$recipeTypes`: `string`[] ; `$type`: ``"com.linkedin.restli.common.CollectionResponse"`` ; `propsDashPropsHomeCardsByHome`: { `$recipeTypes`: `string`[] ; `$type`: ``"com.linkedin.restli.common.CollectionResponse"`` ; `elements`: `T`[] ; `metadata?`: `M` ; `paging`: `Paging`  }  } |
| `data.$recipeTypes` | `string`[] |
| `data.$type` | ``"com.linkedin.restli.common.CollectionResponse"`` |
| `data.propsDashPropsHomeCardsByHome` | { `$recipeTypes`: `string`[] ; `$type`: ``"com.linkedin.restli.common.CollectionResponse"`` ; `elements`: `T`[] ; `metadata?`: `M` ; `paging`: `Paging`  } |
| `data.propsDashPropsHomeCardsByHome.$recipeTypes` | `string`[] |
| `data.propsDashPropsHomeCardsByHome.$type` | ``"com.linkedin.restli.common.CollectionResponse"`` |
| `data.propsDashPropsHomeCardsByHome.elements` | `T`[] |
| `data.propsDashPropsHomeCardsByHome.metadata?` | `M` |
| `data.propsDashPropsHomeCardsByHome.paging` | `Paging` |

#### Defined in

[entities/linkedin-celebration-collection-response.entity.ts:7](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-celebration-collection-response.entity.ts#L7)

___

### included

• **included**: `I`[]

#### Defined in

[entities/linkedin-celebration-collection-response.entity.ts:20](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-celebration-collection-response.entity.ts#L20)
