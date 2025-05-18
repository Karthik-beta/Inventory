import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { columns } from './components/price-list-columns'
import { ItemsDialogs } from './components/price-list-dialogs'
import { ItemsPrimaryButtons } from './components/price-list-primary-buttons'
import { ItemsTable } from './components/price-list-table'
import ItemsProvider from './context/price-list-context'
import { priceListSchema } from './data/schema'
import { priceLists } from './data/priceList'

import { Link } from '@tanstack/react-router'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Items() {
  // Parse user list
  const priceList = priceListSchema.parse(priceLists)

  return (
    <ItemsProvider>
      <Header fixed>
        <Breadcrumb>
          <BreadcrumbList>
              <BreadcrumbItem>
              <BreadcrumbLink>
                  <Link to="/">Dashboard</Link>
              </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                Inventory
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
              <BreadcrumbPage>Price List</BreadcrumbPage>
              </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>        
        <div className='ml-auto flex items-center space-x-4'>
        <Search />
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className='mb-2 flex flex-wrap items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Price List</h2>
            <p className='text-muted-foreground'>
              Manage your Price List here.
            </p>
          </div>
          <ItemsPrimaryButtons />
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <ItemsTable data={priceList} columns={columns} />
        </div>
      </Main>

      <ItemsDialogs />
    </ItemsProvider>
  )
}
