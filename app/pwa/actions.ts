'use server'

import webpush, {PushSubscription} from 'web-push'

webpush.setVapidDetails(
  'mailto:350926623@qq.com',
  'BH9z78R_4MotEZGzIlW6gjBPTlRqwsSGTxAHnqzgP_fYB-9ejLOXpMF8V6PbpxKA1qJs-lHck_aVwRxCu4sfLEI',
  '3XbGAiORgko1nlpVNqsGTal7_8zU5WBQz3UuqK26BxI'
)

export async function subscribeUser() {
  // In a production environment, you would want to store the subscription in a database
  // For example: await db.subscriptions.create({ data: sub })
  return { success: true }
}

export async function unsubscribeUser() {
  // In a production environment, you would want to remove the subscription from the database
  // For example: await db.subscriptions.delete({ where: { ... } })
  return { success: true }
}

export async function sendNotification(message: string, subscription: PushSubscription) {
  if (!subscription) {
    throw new Error('No subscription available')
  }

  try {
    if (!subscription) return;
    await webpush.sendNotification(
      subscription,
      JSON.stringify({
        title: 'Test Notification',
        body: message,
        icon: '/apple-touch-icon.png',
      })
    )
    return { success: true }
  } catch (error) {
    console.error('Error sending push notification:', error)
    return { success: false, error: 'Failed to send notification' }
  }
}
