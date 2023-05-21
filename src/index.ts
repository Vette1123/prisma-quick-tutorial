import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     email: 'gado@gado.com',
  //     name: 'gado',
  //     age: 20,
  //     password: '123456',
  //   },
  // })
  // console.log('user', user)

  const allUsers = await prisma.user.findUnique({
    where: {
      email: 'gado@gado.com',
    },
  })
  console.log('allUsers', allUsers)

  // end of the function
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
