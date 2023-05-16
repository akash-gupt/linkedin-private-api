[linkedin-private-api-v2](../README.md) / [Exports](../modules.md) / MessageEvent

# Interface: MessageEvent

## Hierarchy

- [`LinkedInMessageEvent`](LinkedInMessageEvent.md)

  ↳ **`MessageEvent`**

## Table of contents

### Properties

- [$type](MessageEvent.md#$type)
- [*from](MessageEvent.md#*from)
- [backendUrn](MessageEvent.md#backendurn)
- [createdAt](MessageEvent.md#createdat)
- [dashEntityUrn](MessageEvent.md#dashentityurn)
- [entityUrn](MessageEvent.md#entityurn)
- [eventContent](MessageEvent.md#eventcontent)
- [originToken](MessageEvent.md#origintoken)
- [previousEventInConversation](MessageEvent.md#previouseventinconversation)
- [quickReplyRecommendations](MessageEvent.md#quickreplyrecommendations)
- [sentFrom](MessageEvent.md#sentfrom)
- [subtype](MessageEvent.md#subtype)
- [text](MessageEvent.md#text)

## Properties

### $type

• **$type**: ``"com.linkedin.voyager.messaging.Event"``

#### Inherited from

[LinkedInMessageEvent](LinkedInMessageEvent.md).[$type](LinkedInMessageEvent.md#$type)

#### Defined in

[entities/linkedin-event.entity.ts:6](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-event.entity.ts#L6)

___

### *from

• ***from**: `string`

#### Inherited from

[LinkedInMessageEvent](LinkedInMessageEvent.md).[*from](LinkedInMessageEvent.md#*from)

#### Defined in

[entities/linkedin-event.entity.ts:7](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-event.entity.ts#L7)

___

### backendUrn

• **backendUrn**: `string`

#### Inherited from

[LinkedInMessageEvent](LinkedInMessageEvent.md).[backendUrn](LinkedInMessageEvent.md#backendurn)

#### Defined in

[entities/linkedin-event.entity.ts:8](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-event.entity.ts#L8)

___

### createdAt

• **createdAt**: `number`

#### Inherited from

[LinkedInMessageEvent](LinkedInMessageEvent.md).[createdAt](LinkedInMessageEvent.md#createdat)

#### Defined in

[entities/linkedin-event.entity.ts:9](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-event.entity.ts#L9)

___

### dashEntityUrn

• **dashEntityUrn**: `string`

#### Inherited from

[LinkedInMessageEvent](LinkedInMessageEvent.md).[dashEntityUrn](LinkedInMessageEvent.md#dashentityurn)

#### Defined in

[entities/linkedin-event.entity.ts:10](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-event.entity.ts#L10)

___

### entityUrn

• **entityUrn**: `string`

#### Inherited from

[LinkedInMessageEvent](LinkedInMessageEvent.md).[entityUrn](LinkedInMessageEvent.md#entityurn)

#### Defined in

[entities/linkedin-event.entity.ts:11](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-event.entity.ts#L11)

___

### eventContent

• **eventContent**: [`LinkedInMessage`](LinkedInMessage.md)

#### Inherited from

[LinkedInMessageEvent](LinkedInMessageEvent.md).[eventContent](LinkedInMessageEvent.md#eventcontent)

#### Defined in

[entities/linkedin-message-event.entity.ts:6](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-message-event.entity.ts#L6)

___

### originToken

• **originToken**: `string`

#### Inherited from

[LinkedInMessageEvent](LinkedInMessageEvent.md).[originToken](LinkedInMessageEvent.md#origintoken)

#### Defined in

[entities/linkedin-event.entity.ts:13](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-event.entity.ts#L13)

___

### previousEventInConversation

• `Optional` **previousEventInConversation**: `string`

#### Inherited from

[LinkedInMessageEvent](LinkedInMessageEvent.md).[previousEventInConversation](LinkedInMessageEvent.md#previouseventinconversation)

#### Defined in

[entities/linkedin-event.entity.ts:15](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-event.entity.ts#L15)

___

### quickReplyRecommendations

• **quickReplyRecommendations**: [`QuickReplayRecommendation`](QuickReplayRecommendation.md)[]

#### Inherited from

[LinkedInMessageEvent](LinkedInMessageEvent.md).[quickReplyRecommendations](LinkedInMessageEvent.md#quickreplyrecommendations)

#### Defined in

[entities/linkedin-message-event.entity.ts:7](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-message-event.entity.ts#L7)

___

### sentFrom

• **sentFrom**: [`MiniProfile`](MiniProfile.md)

#### Defined in

[entities/message-event.entity.ts:6](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/message-event.entity.ts#L6)

___

### subtype

• **subtype**: `string`

#### Inherited from

[LinkedInMessageEvent](LinkedInMessageEvent.md).[subtype](LinkedInMessageEvent.md#subtype)

#### Defined in

[entities/linkedin-event.entity.ts:14](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/linkedin-event.entity.ts#L14)

___

### text

• **text**: `string`

#### Defined in

[entities/message-event.entity.ts:5](https://github.com/akash-gupt/linkedin-private-api/blob/db337d2/src/entities/message-event.entity.ts#L5)
