import { Text } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_DEFAULT } from "react-native-maps"
import { useLocationStore } from '@/store'
import { calculateRegion } from '@/lib/map'

const Maps = () => {
    const {
        userLongitude,
        userLatitude,
        destinationLatitude,
        destinationLongitude
    } = useLocationStore();

    // extracting the region, we need to calculate from the user lat, logi
    const region = calculateRegion({
        userLongitude,
        userLatitude,
        destinationLatitude,
        destinationLongitude
    });

    return (
        <MapView provider={PROVIDER_DEFAULT}
            className='w-full h-full rounded-2xl'
            tintColor='black'
            mapType='mutedStandard'
            showsPointsOfInterest={false}
            showsUserLocation={true}
            userInterfaceStyle='light'>
            <Text>Maps</Text>
        </MapView>
    )
}

export default Maps