[linkedin-private-api-v2](../README.md) / [Exports](../modules.md) / LinkedInMessageEvent

# Interface: LinkedInMessageEvent

## Hierarchy

- [`LinkedInEvent`](LinkedInEvent.md)

  ↳ **`LinkedInMessageEvent`**

  ↳↳ [`MessageEvent`](MessageEvent.md)

## Table of contents

### Properties

- [$type](LinkedInMessageEvent.md#$type)
- [*from](LinkedInMessageEvent.md#*from)
- [backendUrn](LinkedInMessageEvent.md#backendurn)
- [createdAt](LinkedInMessageEvent.md#createdat)
- [dashEntityUrn](LinkedInMessageEvent.md#dashentityurn)
- [entityUrn](LinkedInMessageEvent.md#entityurn)
- [eventContent](LinkedInMessageEvent.md#eventcontent)
- [originToken](LinkedInMessageEvent.md#origintoken)
- [previousEventInConversation](LinkedInMessageEvent.md#previouseventinconversation)
- [quickReplyRecommendations](LinkedInMessageEvent.md#quickreplyrecommendations)
- [subtype](LinkedInMessageEvent.md#subtype)

## Properties

### $type

• **$type**: ``"com.linkedin.voyager.messaging.Event"``

#### Inherited from

[LinkedInEvent](LinkedInEvent.md).[$type](LinkedInEvent.md#$type)

#### Defined in

[entities/linkedin-event.entity.ts:6](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-event.entity.ts#L6)

___

### *from

• ***from**: `string`

#### Inherited from

[LinkedInEvent](LinkedInEvent.md).[*from](LinkedInEvent.md#*from)

#### Defined in

[entities/linkedin-event.entity.ts:7](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-event.entity.ts#L7)

___

### backendUrn

• **backendUrn**: `string`

#### Inherited from

[LinkedInEvent](LinkedInEvent.md).[backendUrn](LinkedInEvent.md#backendurn)

#### Defined in

[entities/linkedin-event.entity.ts:8](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-event.entity.ts#L8)

___

### createdAt

• **createdAt**: `number`

#### Inherited from

[LinkedInEvent](LinkedInEvent.md).[createdAt](LinkedInEvent.md#createdat)

#### Defined in

[entities/linkedin-event.entity.ts:9](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-event.entity.ts#L9)

___

### dashEntityUrn

• **dashEntityUrn**: `string`

#### Inherited from

[LinkedInEvent](LinkedInEvent.md).[dashEntityUrn](LinkedInEvent.md#dashentityurn)

#### Defined in

[entities/linkedin-event.entity.ts:10](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-event.entity.ts#L10)

___

### entityUrn

• **entityUrn**: `string`

#### Inherited from

[LinkedInEvent](LinkedInEvent.md).[entityUrn](LinkedInEvent.md#entityurn)

#### Defined in

[entities/linkedin-event.entity.ts:11](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-event.entity.ts#L11)

___

### eventContent

• **eventContent**: [`LinkedInMessage`](LinkedInMessage.md)

#### Overrides

[LinkedInEvent](LinkedInEvent.md).[eventContent](LinkedInEvent.md#eventcontent)

#### Defined in

[entities/linkedin-message-event.entity.ts:6](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-message-event.entity.ts#L6)

___

### originToken

• **originToken**: `string`

#### Inherited from

[LinkedInEvent](LinkedInEvent.md).[originToken](LinkedInEvent.md#origintoken)

#### Defined in

[entities/linkedin-event.entity.ts:13](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-event.entity.ts#L13)

___

### previousEventInConversation

• `Optional` **previousEventInConversation**: `string`

#### Inherited from

[LinkedInEvent](LinkedInEvent.md).[previousEventInConversation](LinkedInEvent.md#previouseventinconversation)

#### Defined in

[entities/linkedin-event.entity.ts:15](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-event.entity.ts#L15)

___

### quickReplyRecommendations

• **quickReplyRecommendations**: [`QuickReplayRecommendation`](QuickReplayRecommendation.md)[]

#### Defined in

[entities/linkedin-message-event.entity.ts:7](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-message-event.entity.ts#L7)

___

### subtype

• **subtype**: `string`

#### Inherited from

[LinkedInEvent](LinkedInEvent.md).[subtype](LinkedInEvent.md#subtype)

#### Defined in

[entities/linkedin-event.entity.ts:14](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-event.entity.ts#L14)
