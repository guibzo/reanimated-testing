import React from 'react'
import { View } from 'react-native'
import { ColorButton } from './color-button'
import { FadeOnView } from './fade-on-view'
import { IncreaseableButtons } from './increaseable-buttons'
import { List } from './list'
import { ProgressBar } from './progress-bar'
import { Shake } from './shake'

export default function Page() {
  return (
    <>
      <View className='gap-5'>
        <IncreaseableButtons />
        <ColorButton />
        <ProgressBar />
        <Shake />
        <FadeOnView />
        <List />
      </View>
    </>
  )
}
