// Mock Prismadb

interface UserSubscription {
  userId: string;
  stripeCustomerId: string | null;
  stripePriceId: number;
  stripeCurrentPeriodEnd: Date;
}

interface MockPrismaClient {
  userSubscription: {
    findUnique: (params: {
      where: { userId: string };
      select: any;
    }) => Promise<UserSubscription | null>;
  };
}

const mockPrismaClient: MockPrismaClient = {
  userSubscription: {
    async findUnique({ where }) {
      // Implement your logic to retrieve user subscription
      // This is a mock, so you can customize it based on your needs
      const userId = where.userId;
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      // Mocked data for demonstration purposes
      return {
        userId,
        stripeCustomerId: 'acct_1NVm5xH86PaaZgk9',
        stripePriceId: 132,
        stripeCurrentPeriodEnd: tomorrow,
      };
    },
  },
};

const prismadb: MockPrismaClient = {
  // You can extend this mock with other required functions or models
  ...mockPrismaClient,
};

export default prismadb;
