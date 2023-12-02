// __mocks__/prismadb.js

const mockUserApiLimit = {
  findUnique: (param: any) => Promise.resolve({ count: 3 }),
  update: (param: any) => Promise.resolve({}),
  create: (param: any) => Promise.resolve({}),
};

const mockPrismadb = {
  userApiLimit: mockUserApiLimit,
};

export default mockPrismadb;
