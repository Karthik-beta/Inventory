import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { columns } from './components/price-list-columns'
import { ItemsDialogs } from './components/price-lists-dialogs'
import { ItemsPrimaryButtons } from './components/price-lists-primary-buttons'
import { ItemsTable } from './components/price-lists-table'
import ItemsProvider from './context/price-lists-context'
import { itemListSchema } from './data/schema'
import { items } from './data/price-lists'

export default function Items() {
  // Parse user list
  const itemList = itemListSchema.parse(items)

  return (
    <ItemsProvider>
      <Header fixed>
        <Search />
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className='mb-2 flex flex-wrap items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Items List</h2>
            <p className='text-muted-foreground'>
              Manage your Items here.
            </p>
          </div>
          <ItemsPrimaryButtons />
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <ItemsTable data={itemList} columns={columns} />
        </div>
      </Main>

      <ItemsDialogs />
    </ItemsProvider>
  )
}
