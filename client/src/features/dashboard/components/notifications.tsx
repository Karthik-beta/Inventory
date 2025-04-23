import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Notification {
  id: number
  title: string
  message: string
  timestamp: string
  isRead: boolean
}

export function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>(() =>
    Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      title: `Notification ${i + 1}`,
      message: `This is a demo message for notification ${i + 1}.`,
      timestamp: new Date().toLocaleString(),
      isRead: false,
    }))
  )

  const addNotification = () => {
    const newNotification: Notification = {
      id: notifications.length + 1,
      title: `Notification ${notifications.length + 1}`,
      message: `This is a demo message for notification ${
        notifications.length + 1
      }.`,
      timestamp: new Date().toLocaleString(),
      isRead: false,
    }
    setNotifications((prev) => [newNotification, ...prev])
  }

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    )
  }

  const dismissNotification = (id: number) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center mb-6'>
        <Button onClick={addNotification}>Add Notification</Button>
        <Button
          variant='outline'
          onClick={() => setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })))}
        >
          Mark All as Read
        </Button>
      </div>
      {notifications.length === 0 ? (
        <p className='text-center text-muted-foreground'>No notifications available.</p>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`${
                notification.isRead
                  ? 'bg-gray-50 border-gray-200 text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'
                  : 'bg-blue-50 border-blue-400 text-blue-800 dark:bg-blue-900 dark:border-blue-700 dark:text-blue-300'
              } shadow-md hover:shadow-lg transition-shadow border`}
            >
              <CardHeader className='flex items-center justify-between'>
                <div className='flex-1'>
                  <CardTitle
                    className={`truncate text-base font-semibold ${
                      notification.isRead
                        ? 'text-gray-500 dark:text-gray-400'
                        : 'text-blue-800 dark:text-blue-300'
                    }`}
                  >
                    {notification.title}
                  </CardTitle>
                </div>
                <div className='flex space-x-2'>
                  {!notification.isRead && (
                    <Button
                      size='sm'
                      variant='ghost'
                      className='text-green-600 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-900'
                      onClick={() => markAsRead(notification.id)}
                    >
                      Mark as Read
                    </Button>
                  )}
                  <Button
                    size='sm'
                    variant='ghost'
                    className='text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900'
                    onClick={() => dismissNotification(notification.id)}
                  >
                    Dismiss
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p
                  className={`text-sm ${
                    notification.isRead
                      ? 'text-gray-500 dark:text-gray-400'
                      : 'text-blue-700 dark:text-blue-100'
                  }`}
                >
                  {notification.message}
                </p>
                <p className='text-xs text-muted-foreground mt-2 italic dark:text-gray-500'>
                  {notification.timestamp}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}