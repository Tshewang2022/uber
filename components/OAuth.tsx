import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from '@/constants'
import CustomButton from './CustomButton'

const OAuth = () => {
    const handleGooglePress = async () => {
    }
    return (
        <View>
            <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
                <View className='flex-1 h-[1px] bg-general-100' />
                <Text className='text-lg'>Or</Text>
                <View className='flex-1 h-[1px] bg-general-100' />
            </View>
            <CustomButton
                title="Log in with Google"
                className="mt-5 w-full shadow-none"
                IconLeft={() => (
                    <Image source={icons.google}
                        resizeMode='contain'
                        className='w-5 h-5 mx-2' />
                )}
                bgVariant='outline'
                textVariant='primary'
                onPress={handleGooglePress}

            />
        </View>
    )
}


export default OAuth