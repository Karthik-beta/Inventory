import {
  IconBrowserCheck,
  IconHelp,
  IconLayoutDashboard,
  IconNotification,
  IconPackage,
  IconPackages,
  IconPalette,
  IconSettings,
  IconTool,
  IconUserCog,
  IconBuildingWarehouse,
  IconAdjustmentsHorizontal,
  IconShoppingCart,
  IconShoppingBag,
  IconReceipt,
} from '@tabler/icons-react'
import { AudioWaveform, Command, GalleryVerticalEnd } from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'Karthik',
    email: 'karthik@pivotr.in',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Inventory',
      logo: Command,
      plan: 'by Pivotr',
    },
    {
      name: 'CRM',
      logo: GalleryVerticalEnd,
      plan: 'by Pivotr',
    },
    {
      name: 'HR',
      logo: AudioWaveform,
      plan: 'by Pivotr',
    },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: IconLayoutDashboard,
        }
      ],
    },
    {
      title: 'Inventory',
      items: [
        {
          title: 'Inventory',
          icon: IconBuildingWarehouse,
          items: [
            {
              title: 'Items',
              url: '/inventory/items',
              icon: IconPackage,
            },
            {
              title: 'Items Groups',
              url: '/inventory/itemsGroups',
              icon: IconPackages,
            },
            {
              title: 'Price Lists',
              url: '/inventory/pricelists',
              icon: IconReceipt,
            },
            {
              title: 'Inventory Adjustments',
              url: '/inventory/adjustments',
              icon: IconAdjustmentsHorizontal,
            },
          ],
        }
      ]
    },
    {
      title: 'Sales',
      items: [
        {
          title: 'Sales',
          icon: IconShoppingCart,
          items: [
            {
              title: 'Customers',
              url: '/sales/customers',
            },
            {
              title: 'Sales Orders',
              url: '/sales/salesOrders',
            },
            {
              title: 'Packages',
              url: '/sales/packages',
            },
            {
              title: 'Shipments',
              url: '/sales/shipments',
            },
            {
              title: 'Delivery Challans',
              url: '/sales/deliveryChallans',
            },
            {
              title: 'Invoices',
              url: '/sales/invoices',
            },
            {
              title: 'Payments Received',
              url: '/sales/paymentsReceived',
            },
            {
              title: 'Sales Returns',
              url: '/sales/salesReturns',
            },
            {
              title: 'Credit Notes',
              url: '/sales/credit-notes',
            },
          ],
        }
      ]
    },
    {
      title: 'Purchases',
      items: [
        {
          title: 'Purchases',
          icon: IconShoppingBag,
          items: [
            {
              title: 'Vendors',
              url: '/500',
            },
            {
              title: 'Expenses',
              url: '/500',
            },
            {
              title: 'Purchase Orders',
              url: '/500',
            },
            {
              title: 'Purchase Receives',
              url: '/500',
            },
            {
              title: 'Bills',
              url: '/500',
            },
            {
              title: 'Payments Made',
              url: '/500',
            },
            {
              title: 'Vendor Credits',
              url: '/500',
            },
          ],
        }
      ]
    },
    // {
    //   title: 'Pages',
    //   items: [
    //     {
    //       title: 'Auth',
    //       icon: IconLockAccess,
    //       items: [
    //         {
    //           title: 'Sign In',
    //           url: '/sign-in',
    //         },
    //         {
    //           title: 'Sign In (2 Col)',
    //           url: '/sign-in-2',
    //         },
    //         {
    //           title: 'Sign Up',
    //           url: '/sign-up',
    //         },
    //         {
    //           title: 'Forgot Password',
    //           url: '/forgot-password',
    //         },
    //         {
    //           title: 'OTP',
    //           url: '/otp',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Errors',
    //       icon: IconBug,
    //       items: [
    //         {
    //           title: 'Unauthorized',
    //           url: '/401',
    //           icon: IconLock,
    //         },
    //         {
    //           title: 'Forbidden',
    //           url: '/403',
    //           icon: IconUserOff,
    //         },
    //         {
    //           title: 'Not Found',
    //           url: '/404',
    //           icon: IconError404,
    //         },
    //         {
    //           title: 'Internal Server Error',
    //           url: '/500',
    //           icon: IconServerOff,
    //         },
    //         {
    //           title: 'Maintenance Error',
    //           url: '/503',
    //           icon: IconBarrierBlock,
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      title: 'Other',
      items: [
        {
          title: 'Settings',
          icon: IconSettings,
          items: [
            {
              title: 'Profile',
              url: '/settings',
              icon: IconUserCog,
            },
            {
              title: 'Account',
              url: '/settings/account',
              icon: IconTool,
            },
            {
              title: 'Appearance',
              url: '/settings/appearance',
              icon: IconPalette,
            },
            {
              title: 'Notifications',
              url: '/settings/notifications',
              icon: IconNotification,
            },
            {
              title: 'Display',
              url: '/settings/display',
              icon: IconBrowserCheck,
            },
          ],
        },
        {
          title: 'Help Center',
          url: '/help-center',
          icon: IconHelp,
        },
      ],
    },
  ],
}
