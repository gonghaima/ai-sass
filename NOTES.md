Following https://ui.shadcn.com/docs/installation/next

1. setup next, typescript, tailwind, eslint
   ```shell
       npx create-next-app@latest my-app --typescript --tailwind --eslint
   ```
2. init shadcn
   ```shell
       npx shadcn-ui@latest init
   ```
3. add pages

- default routing based on page.tsx at root
- normal folder will come with url routes
- name the folder with (), will omit current folder as path, but keep checking its child. e.g. (dashboard)/(routes)/dashboard/page.tsx, will be available via http://localhost:3000/dashboard
