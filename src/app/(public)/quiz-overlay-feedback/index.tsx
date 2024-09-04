import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { View } from 'react-native'
import { BlurSquares } from './blur-squares'
import { QuizOverlayFeedback } from './quiz-overlay-feedback'

export default function Page() {
  const [answer, setAnswer] = useState<'idle' | 'correct' | 'incorrect'>('idle')

  const handleSelectAnswer = () => {
    const randomAnswer = Math.floor(Math.random() * 2)

    if (randomAnswer === 0) {
      return setAnswer('correct')
    }

    if (randomAnswer === 1) {
      return setAnswer('incorrect')
    }
  }

  return (
    <View className='flex-1 gap-5'>
      <BlurSquares />
      <QuizOverlayFeedback answer={answer} />

      <View className='flex-1 gap-2.5'>
        <Button onPress={handleSelectAnswer} className='mt-auto'>
          <Text>Select answer</Text>
        </Button>

        <Link asChild href='/'>
          <Button>
            <Text>Return</Text>
          </Button>
        </Link>
      </View>
    </View>
  )
}
