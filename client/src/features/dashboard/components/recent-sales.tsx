import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { faker } from '@faker-js/faker'

const transactions = Array.from({ length: 5 }, () => {
  const userName = faker.name.fullName({ firstName: faker.name.firstName('male'), lastName: faker.name.lastName() });
  return {
    itemName: faker.commerce.productName(),
    transactionType: faker.helpers.arrayElement(['Stock In', 'Stock Out']),
    quantity: faker.number.int({ min: 1, max: 100 }),
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=random&rounded=true`, // Indian-themed avatar
    userName,
    userEmail: faker.internet.email(),
  }
})

export function RecentSales() {
  return (
    <div className='space-y-2'>
      {transactions.map((transaction, index) => (
        <div key={index} className='flex items-center gap-4 p-4 rounded-lg border shadow-sm'>
          <Avatar className='h-10 w-10'>
            <AvatarImage src={transaction.avatar} alt={transaction.userName} />
            <AvatarFallback>
              {transaction.userName
                .split(' ')
                .map((name) => name[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div className='flex flex-1 flex-wrap items-center justify-between'>
            <div className='space-y-1'>
              <p className='text-sm font-medium leading-none'>{transaction.userName}</p>
              <p className='text-sm text-muted-foreground'>{transaction.userEmail}</p>
            </div>
            <div className='text-right'>
              <p className='text-sm font-medium'>{transaction.itemName}</p>
              <p className={`text-sm ${transaction.transactionType === 'Stock In' ? 'text-green-600' : 'text-red-600'}`}>
                {transaction.transactionType} - {transaction.quantity} units
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
