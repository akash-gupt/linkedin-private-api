[linkedin-private-api-v2](../README.md) / [Exports](../modules.md) / CompanySearchHit

# Interface: CompanySearchHit

## Hierarchy

- [`LinkedInSearchHitV2`](LinkedInSearchHitV2.md)

  ↳ **`CompanySearchHit`**

## Table of contents

### Properties

- [$type](CompanySearchHit.md#$type)
- [*badges](CompanySearchHit.md#*badges)
- [company](CompanySearchHit.md#company)
- [headless](CompanySearchHit.md#headless)
- [headline](CompanySearchHit.md#headline)
- [image](CompanySearchHit.md#image)
- [memberDistance](CompanySearchHit.md#memberdistance)
- [nameMatch](CompanySearchHit.md#namematch)
- [navigationUrl](CompanySearchHit.md#navigationurl)
- [publicIdentifier](CompanySearchHit.md#publicidentifier)
- [secondaryTitle](CompanySearchHit.md#secondarytitle)
- [socialProofText](CompanySearchHit.md#socialprooftext)
- [subline](CompanySearchHit.md#subline)
- [targetUrn](CompanySearchHit.md#targeturn)
- [title](CompanySearchHit.md#title)
- [trackingId](CompanySearchHit.md#trackingid)
- [trackingUrn](CompanySearchHit.md#trackingurn)
- [type](CompanySearchHit.md#type)

## Properties

### $type

• **$type**: ``"com.linkedin.voyager.search.SearchHitV2"``

#### Inherited from

[LinkedInSearchHitV2](LinkedInSearchHitV2.md).[$type](LinkedInSearchHitV2.md#$type)

#### Defined in

[entities/linkedin-search-hit-v2.entity.ts:5](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-search-hit-v2.entity.ts#L5)

___

### *badges

• ***badges**: `string`

#### Inherited from

[LinkedInSearchHitV2](LinkedInSearchHitV2.md).[*badges](LinkedInSearchHitV2.md#*badges)

#### Defined in

[entities/linkedin-search-hit-v2.entity.ts:6](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-search-hit-v2.entity.ts#L6)

___

### company

• **company**: `MiniCompany`

#### Defined in

[entities/company-search-hit.entity.ts:5](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/company-search-hit.entity.ts#L5)

___

### headless

• **headless**: `string`

#### Inherited from

[LinkedInSearchHitV2](LinkedInSearchHitV2.md).[headless](LinkedInSearchHitV2.md#headless)

#### Defined in

[entities/linkedin-search-hit-v2.entity.ts:7](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-search-hit-v2.entity.ts#L7)

___

### headline

• **headline**: [`LinkedInTextViewModel`](LinkedInTextViewModel.md)

#### Inherited from

[LinkedInSearchHitV2](LinkedInSearchHitV2.md).[headline](LinkedInSearchHitV2.md#headline)

#### Defined in

[entities/linkedin-search-hit-v2.entity.ts:8](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-search-hit-v2.entity.ts#L8)

___

### image

• **image**: [`LinkedInImageViewModel`](LinkedInImageViewModel.md)

#### Inherited from

[LinkedInSearchHitV2](LinkedInSearchHitV2.md).[image](LinkedInSearchHitV2.md#image)

#### Defined in

[entities/linkedin-search-hit-v2.entity.ts:9](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-search-hit-v2.entity.ts#L9)

___

### memberDistance

• **memberDistance**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$type` | ``"com.linkedin.voyager.common.MemberDistance"`` |
| `value` | `string` |

#### Inherited from

[LinkedInSearchHitV2](LinkedInSearchHitV2.md).[memberDistance](LinkedInSearchHitV2.md#memberdistance)

#### Defined in

[entities/linkedin-search-hit-v2.entity.ts:10](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-search-hit-v2.entity.ts#L10)

___

### nameMatch

• **nameMatch**: `boolean`

#### Inherited from

[LinkedInSearchHitV2](LinkedInSearchHitV2.md).[nameMatch](LinkedInSearchHitV2.md#namematch)

#### Defined in

[entities/linkedin-search-hit-v2.entity.ts:14](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-search-hit-v2.entity.ts#L14)

___

### navigationUrl

• **navigationUrl**: `string`

#### Inherited from

[LinkedInSearchHitV2](LinkedInSearchHitV2.md).[navigationUrl](LinkedInSearchHitV2.md#navigationurl)

#### Defined in

[entities/linkedin-search-hit-v2.entity.ts:15](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-search-hit-v2.entity.ts#L15)

___

### publicIdentifier

• **publicIdentifier**: `string`

#### Inherited from

[LinkedInSearchHitV2](LinkedInSearchHitV2.md).[publicIdentifier](LinkedInSearchHitV2.md#publicidentifier)

#### Defined in

[entities/linkedin-search-hit-v2.entity.ts:16](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-search-hit-v2.entity.ts#L16)

___

### secondaryTitle

• **secondaryTitle**: [`LinkedInTextViewModel`](LinkedInTextViewModel.md)

#### Inherited from

[LinkedInSearchHitV2](LinkedInSearchHitV2.md).[secondaryTitle](LinkedInSearchHitV2.md#secondarytitle)

#### Defined in

[entities/linkedin-search-hit-v2.entity.ts:17](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-search-hit-v2.entity.ts#L17)

___

### socialProofText

• **socialProofText**: `string`

#### Inherited from

[LinkedInSearchHitV2](LinkedInSearchHitV2.md).[socialProofText](LinkedInSearchHitV2.md#socialprooftext)

#### Defined in

[entities/linkedin-search-hit-v2.entity.ts:18](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-search-hit-v2.entity.ts#L18)

___

### subline

• **subline**: [`LinkedInTextViewModel`](LinkedInTextViewModel.md)

#### Inherited from

[LinkedInSearchHitV2](LinkedInSearchHitV2.md).[subline](LinkedInSearchHitV2.md#subline)

#### Defined in

[entities/linkedin-search-hit-v2.entity.ts:19](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-search-hit-v2.entity.ts#L19)

___

### targetUrn

• **targetUrn**: `string`

#### Inherited from

[LinkedInSearchHitV2](LinkedInSearchHitV2.md).[targetUrn](LinkedInSearchHitV2.md#targeturn)

#### Defined in

[entities/linkedin-search-hit-v2.entity.ts:20](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-search-hit-v2.entity.ts#L20)

___

### title

• **title**: [`LinkedInTextViewModel`](LinkedInTextViewModel.md)

#### Inherited from

[LinkedInSearchHitV2](LinkedInSearchHitV2.md).[title](LinkedInSearchHitV2.md#title)

#### Defined in

[entities/linkedin-search-hit-v2.entity.ts:21](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-search-hit-v2.entity.ts#L21)

___

### trackingId

• **trackingId**: `string`

#### Inherited from

[LinkedInSearchHitV2](LinkedInSearchHitV2.md).[trackingId](LinkedInSearchHitV2.md#trackingid)

#### Defined in

[entities/linkedin-search-hit-v2.entity.ts:22](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-search-hit-v2.entity.ts#L22)

___

### trackingUrn

• **trackingUrn**: `string`

#### Inherited from

[LinkedInSearchHitV2](LinkedInSearchHitV2.md).[trackingUrn](LinkedInSearchHitV2.md#trackingurn)

#### Defined in

[entities/linkedin-search-hit-v2.entity.ts:23](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-search-hit-v2.entity.ts#L23)

___

### type

• **type**: `string`

#### Inherited from

[LinkedInSearchHitV2](LinkedInSearchHitV2.md).[type](LinkedInSearchHitV2.md#type)

#### Defined in

[entities/linkedin-search-hit-v2.entity.ts:24](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-search-hit-v2.entity.ts#L24)
