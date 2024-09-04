import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { Link } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { SkiaPath } from './skia-path'

export default function Page() {
  return (
    <View className='flex-1 gap-5'>
      <SkiaPath />

      <View className='flex-1 gap-2'>
        <Link asChild href='/' className='mt-auto'>
          <Button>
            <Text>Return</Text>
          </Button>
        </Link>
      </View>
    </View>
  )
}
