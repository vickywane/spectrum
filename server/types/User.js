const User = /* GraphQL */ `
	type UserCommunitiesConnection {
		pageInfo: PageInfo!
		edges: [UserCommunityEdge!]
	}

	type UserCommunityEdge {
		node: Community!
	}

	type UserChannelsConnection {
		pageInfo: PageInfo!
		edges: [UserChannelEdge!]
	}

	type UserChannelEdge {
		node: Channel!
	}

	type UserDirectMessageThreadsConnection {
		pageInfo: PageInfo!
		edges: [DirectMessageThreadEdge]
	}

	type DirectMessageThreadEdge {
		cursor: String!
		node: DirectMessageThread!
	}

	type UserThreadsConnection {
		pageInfo: PageInfo!
		edges: [UserThreadEdge!]
	}

	type UserThreadEdge {
		cursor: String!
		node: Thread!
	}

	type EverythingThreadsConnection {
		pageInfo: PageInfo!
		edges: [EverythingThreadEdge!]
	}

	type EverythingThreadEdge {
		cursor: String!
		node: Thread!
	}

	type UserNotificationsConnection {
		pageInfo: PageInfo!
		edges: [UserNotificationEdge!]
	}

	type UserNotificationEdge {
		cursor: String!
		node: Notification!
	}

	type UserMetaData {
		threads: Int
	}

	type Subscription {
		plan: String
		amount: String
		created: String
		status: String
	}

	input File {
    name: String!
    type: String!
    size: Int!
    path: String!
  }

	type User {
		id: ID!
		name: String
		description: String
		website: String
		username: String
		profilePhoto: String
		coverPhoto: String
		email: String
		providerId: String
		createdAt: Date!
		lastSeen: Date!

		# non-schema fields
		threadCount: Int
		isAdmin: Boolean!
		isPro: Boolean!
		communityConnection: UserCommunitiesConnection!
		channelConnection: UserChannelsConnection!
		directMessageThreadsConnection: UserDirectMessageThreadsConnection!
		threadConnection(first: Int = 10, after: String): UserThreadsConnection!
		everything(first: Int = 10, after: String): EverythingThreadsConnection!
		notificationConnection(first: Int = 10, after: String): UserNotificationsConnection!
		subscriptions: [Subscription]
	}

	extend type Query {
		user(id: ID, username: String): User
		currentUser: User
		searchUsers(string: String): [User]
	}

	input EditUserInput {
		file: File
		coverFile: File
		name: String!
		description: String!
		website: String
	}

	input UpgradeToProInput {
		plan: String!
		token: String!
	}

	extend type Mutation {
		editUser(input: EditUserInput!): User
		upgradeToPro(input: UpgradeToProInput!): User
		downgradeFromPro: User
	}
`;

module.exports = User;
