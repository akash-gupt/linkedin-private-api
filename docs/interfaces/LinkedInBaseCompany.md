[linkedin-private-api-v2](../README.md) / [Exports](../modules.md) / LinkedInBaseCompany

# Interface: LinkedInBaseCompany

## Table of contents

### Properties

- [$anti\_abuse\_annotations](LinkedInBaseCompany.md#$anti_abuse_annotations)
- [$recipeTypes](LinkedInBaseCompany.md#$recipetypes)
- [$type](LinkedInBaseCompany.md#$type)
- [entityUrn](LinkedInBaseCompany.md#entityurn)
- [logo](LinkedInBaseCompany.md#logo)
- [name](LinkedInBaseCompany.md#name)

## Properties

### $anti\_abuse\_annotations

• **$anti\_abuse\_annotations**: { `attributeId`: `number` ; `entityId`: `number`  }[]

#### Defined in

[entities/linkedin-base-company.ts:7](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-base-company.ts#L7)

___

### $recipeTypes

• **$recipeTypes**: `string`[]

#### Defined in

[entities/linkedin-base-company.ts:11](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-base-company.ts#L11)

___

### $type

• **$type**: ``"com.linkedin.voyager.organization.Company"``

#### Defined in

[entities/linkedin-base-company.ts:6](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-base-company.ts#L6)

___

### entityUrn

• **entityUrn**: `string`

#### Defined in

[entities/linkedin-base-company.ts:12](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-base-company.ts#L12)

___

### logo

• **logo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$type` | ``"com.linkedin.voyager.organization.CompanyLogoImage"`` |
| `image` | [`LinkedInVectorImage`](LinkedInVectorImage.md) |
| `type` | ``"SQUARE_LOGO"`` |

#### Defined in

[entities/linkedin-base-company.ts:13](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-base-company.ts#L13)

___

### name

• **name**: `string`

#### Defined in

[entities/linkedin-base-company.ts:18](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-base-company.ts#L18)
