// Mock Prismadb

interface UserSubscription {
  userId: string;
  stripeCustomerId: string | null;
}

interface MockPrismaClient {
  userSubscription: {
    findUnique: (params: {
      where: { userId: string };
    }) => Promise<UserSubscription | null>;
  };
}

const mockPrismaClient: MockPrismaClient = {
  userSubscription: {
    async findUnique({ where }) {
      // Implement your logic to retrieve user subscription
      // This is a mock, so you can customize it based on your needs
      const userId = where.userId;
      // Mocked data for demonstration purposes
      return {
        userId,
        stripeCustomerId: 'acct_1NVm5xH86PaaZgk9',
      };
    },
  },
};

const prismadb: MockPrismaClient = {
  // You can extend this mock with other required functions or models
  ...mockPrismaClient,
};

export default prismadb;
