import React from 'react'
import { YMaps, Map , Panorama} from '@pbe/react-yandex-maps';

type Props = {}

const MapSectio = (props: Props) => {
  return (
    <YMaps query={{ lang: 'en_RU' }}>
    <div>
    My awesome application with maps!
    {/* <Map defaultState={{ center: [55.751574, 37.573856], zoom: 9 }} /> */}
    <Panorama defaultPoint={[55.733685, 37.588264]} />
    </div>
    </YMaps>
  )
}

export default MapSectio