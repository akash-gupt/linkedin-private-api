[linkedin-private-api-v2](../README.md) / [Exports](../modules.md) / Conversation

# Interface: Conversation

## Hierarchy

- [`LinkedinConversation`](LinkedinConversation.md)

  ↳ **`Conversation`**

## Table of contents

### Properties

- [$type](Conversation.md#$type)
- [*events](Conversation.md#*events)
- [*participants](Conversation.md#*participants)
- [*type](Conversation.md#*type)
- [archived](Conversation.md#archived)
- [backendUrn](Conversation.md#backendurn)
- [blocked](Conversation.md#blocked)
- [conversationId](Conversation.md#conversationid)
- [entityUrn](Conversation.md#entityurn)
- [featureTypes](Conversation.md#featuretypes)
- [firstMessageUrn](Conversation.md#firstmessageurn)
- [lastActivityAt](Conversation.md#lastactivityat)
- [muted](Conversation.md#muted)
- [notificationStatus](Conversation.md#notificationstatus)
- [participants](Conversation.md#participants)
- [read](Conversation.md#read)
- [receipts](Conversation.md#receipts)
- [totalEventCount](Conversation.md#totaleventcount)
- [unreadCount](Conversation.md#unreadcount)
- [viewerCurrentParticipant](Conversation.md#viewercurrentparticipant)
- [withNonConnection](Conversation.md#withnonconnection)

## Properties

### $type

• **$type**: ``"com.linkedin.voyager.messaging.Conversation"``

#### Inherited from

[LinkedinConversation](LinkedinConversation.md).[$type](LinkedinConversation.md#$type)

#### Defined in

[entities/linkedin-conversation.entity.ts:26](https://github.com/akash-gupt/linkedin-private-api/blob/d170d2d/src/entities/linkedin-conversation.entity.ts#L26)

___

### *events

• ***events**: `string`[]

#### Inherited from

[LinkedinConversation](LinkedinConversation.md).[*events](LinkedinConversation.md#*events)

#### Defined in

[entities/linkedin-conversation.entity.ts:27](https://github.com/akash-gupt/linkedin-private-api/blob/d170d2d/src/entities/linkedin-conversation.entity.ts#L27)

___

### *participants

• ***participants**: `string`[]

#### Inherited from

[LinkedinConversation](LinkedinConversation.md).[*participants](LinkedinConversation.md#*participants)

#### Defined in

[entities/linkedin-conversation.entity.ts:28](https://github.com/akash-gupt/linkedin-private-api/blob/d170d2d/src/entities/linkedin-conversation.entity.ts#L28)

___

### *type

• ***type**: `string`[]

#### Inherited from

[LinkedinConversation](LinkedinConversation.md).[*type](LinkedinConversation.md#*type)

#### Defined in

[entities/linkedin-conversation.entity.ts:29](https://github.com/akash-gupt/linkedin-private-api/blob/d170d2d/src/entities/linkedin-conversation.entity.ts#L29)

___

### archived

• **archived**: `boolean`

#### Inherited from

[LinkedinConversation](LinkedinConversation.md).[archived](LinkedinConversation.md#archived)

#### Defined in

[entities/linkedin-conversation.entity.ts:30](https://github.com/akash-gupt/linkedin-private-api/blob/d170d2d/src/entities/linkedin-conversation.entity.ts#L30)

___

### backendUrn

• **backendUrn**: `string`

#### Inherited from

[LinkedinConversation](LinkedinConversation.md).[backendUrn](LinkedinConversation.md#backendurn)

#### Defined in

[entities/linkedin-conversation.entity.ts:31](https://github.com/akash-gupt/linkedin-private-api/blob/d170d2d/src/entities/linkedin-conversation.entity.ts#L31)

___

### blocked

• **blocked**: `boolean`

#### Inherited from

[LinkedinConversation](LinkedinConversation.md).[blocked](LinkedinConversation.md#blocked)

#### Defined in

[entities/linkedin-conversation.entity.ts:32](https://github.com/akash-gupt/linkedin-private-api/blob/d170d2d/src/entities/linkedin-conversation.entity.ts#L32)

___

### conversationId

• **conversationId**: `string`

#### Defined in

[entities/conversation.entity.ts:7](https://github.com/akash-gupt/linkedin-private-api/blob/d170d2d/src/entities/conversation.entity.ts#L7)

___

### entityUrn

• **entityUrn**: `string`

#### Inherited from

[LinkedinConversation](LinkedinConversation.md).[entityUrn](LinkedinConversation.md#entityurn)

#### Defined in

[entities/linkedin-conversation.entity.ts:33](https://github.com/akash-gupt/linkedin-private-api/blob/d170d2d/src/entities/linkedin-conversation.entity.ts#L33)

___

### featureTypes

• **featureTypes**: [`FeaturedType`](../enums/FeaturedType.md)[]

#### Inherited from

[LinkedinConversation](LinkedinConversation.md).[featureTypes](LinkedinConversation.md#featuretypes)

#### Defined in

[entities/linkedin-conversation.entity.ts:34](https://github.com/akash-gupt/linkedin-private-api/blob/d170d2d/src/entities/linkedin-conversation.entity.ts#L34)

___

### firstMessageUrn

• **firstMessageUrn**: `string`

#### Inherited from

[LinkedinConversation](LinkedinConversation.md).[firstMessageUrn](LinkedinConversation.md#firstmessageurn)

#### Defined in

[entities/linkedin-conversation.entity.ts:35](https://github.com/akash-gupt/linkedin-private-api/blob/d170d2d/src/entities/linkedin-conversation.entity.ts#L35)

___

### lastActivityAt

• **lastActivityAt**: `number`

#### Inherited from

[LinkedinConversation](LinkedinConversation.md).[lastActivityAt](LinkedinConversation.md#lastactivityat)

#### Defined in

[entities/linkedin-conversation.entity.ts:36](https://github.com/akash-gupt/linkedin-private-api/blob/d170d2d/src/entities/linkedin-conversation.entity.ts#L36)

___

### muted

• **muted**: `boolean`

#### Inherited from

[LinkedinConversation](LinkedinConversation.md).[muted](LinkedinConversation.md#muted)

#### Defined in

[entities/linkedin-conversation.entity.ts:37](https://github.com/akash-gupt/linkedin-private-api/blob/d170d2d/src/entities/linkedin-conversation.entity.ts#L37)

___

### notificationStatus

• **notificationStatus**: `string`

#### Inherited from

[LinkedinConversation](LinkedinConversation.md).[notificationStatus](LinkedinConversation.md#notificationstatus)

#### Defined in

[entities/linkedin-conversation.entity.ts:38](https://github.com/akash-gupt/linkedin-private-api/blob/d170d2d/src/entities/linkedin-conversation.entity.ts#L38)

___

### participants

• **participants**: [`MiniProfile`](MiniProfile.md)[]

#### Defined in

[entities/conversation.entity.ts:8](https://github.com/akash-gupt/linkedin-private-api/blob/d170d2d/src/entities/conversation.entity.ts#L8)

___

### read

• **read**: `boolean`

#### Inherited from

[LinkedinConversation](LinkedinConversation.md).[read](LinkedinConversation.md#read)

#### Defined in

[entities/linkedin-conversation.entity.ts:39](https://github.com/akash-gupt/linkedin-private-api/blob/d170d2d/src/entities/linkedin-conversation.entity.ts#L39)

___

### receipts

• **receipts**: [`LinkedInParticipantReceipts`](LinkedInParticipantReceipts.md)[]

#### Inherited from

[LinkedinConversation](LinkedinConversation.md).[receipts](LinkedinConversation.md#receipts)

#### Defined in

[entities/linkedin-conversation.entity.ts:40](https://github.com/akash-gupt/linkedin-private-api/blob/d170d2d/src/entities/linkedin-conversation.entity.ts#L40)

___

### totalEventCount

• **totalEventCount**: `number`

#### Inherited from

[LinkedinConversation](LinkedinConversation.md).[totalEventCount](LinkedinConversation.md#totaleventcount)

#### Defined in

[entities/linkedin-conversation.entity.ts:41](https://github.com/akash-gupt/linkedin-private-api/blob/d170d2d/src/entities/linkedin-conversation.entity.ts#L41)

___

### unreadCount

• **unreadCount**: `number`

#### Inherited from

[LinkedinConversation](LinkedinConversation.md).[unreadCount](LinkedinConversation.md#unreadcount)

#### Defined in

[entities/linkedin-conversation.entity.ts:42](https://github.com/akash-gupt/linkedin-private-api/blob/d170d2d/src/entities/linkedin-conversation.entity.ts#L42)

___

### viewerCurrentParticipant

• **viewerCurrentParticipant**: `boolean`

#### Inherited from

[LinkedinConversation](LinkedinConversation.md).[viewerCurrentParticipant](LinkedinConversation.md#viewercurrentparticipant)

#### Defined in

[entities/linkedin-conversation.entity.ts:43](https://github.com/akash-gupt/linkedin-private-api/blob/d170d2d/src/entities/linkedin-conversation.entity.ts#L43)

___

### withNonConnection

• **withNonConnection**: `boolean`

#### Inherited from

[LinkedinConversation](LinkedinConversation.md).[withNonConnection](LinkedinConversation.md#withnonconnection)

#### Defined in

[entities/linkedin-conversation.entity.ts:44](https://github.com/akash-gupt/linkedin-private-api/blob/d170d2d/src/entities/linkedin-conversation.entity.ts#L44)
