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
    <div className='space-y-4'>
      <div className='flex justify-between items-center mb-4'>
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
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`${
                notification.isRead ? 'opacity-75' : ''
              } shadow-md hover:shadow-lg transition-shadow`}
            >
              <CardHeader className='flex justify-between items-center'>
                <CardTitle className='truncate'>{notification.title}</CardTitle>
                <div className='space-x-2'>
                  {!notification.isRead && (
                    <Button
                      size='sm'
                      variant='ghost'
                      onClick={() => markAsRead(notification.id)}
                    >
                      Mark as Read
                    </Button>
                  )}
                  <Button
                    size='sm'
                    variant='ghost'
                    onClick={() => dismissNotification(notification.id)}
                  >
                    Dismiss
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className='text-sm'>{notification.message}</p>
                <p className='text-xs text-muted-foreground mt-2'>
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