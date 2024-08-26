import React from 'react'
import { View } from 'react-native'
import { IncreaseableButtons } from './increaseable-buttons'
import { ProgressBar } from './progress-bar'
import { Shake } from './shake'
import { ToggleButton } from './toggle-button'

export default function Page() {
  return (
    <>
      <View className='gap-5'>
        <IncreaseableButtons />
        <ToggleButton />
        <ProgressBar />
        <Shake />
      </View>
    </>
  )
}
