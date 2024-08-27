import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { Link } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

export default function Page() {
  return (
    <View className='gap-5'>
      <Link asChild href='/'>
        <Button>
          <Text>Return</Text>
        </Button>
      </Link>

      <Text>Hello</Text>
    </View>
  )
}
