import React from 'react'
import { View } from 'react-native'

import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

export default class App extends React.PureComponent {
  render = () => {
    return (
      <View style={styles.view}>
        <Header title='Albums' />
        <AlbumList />
      </View>
    )
  }
}

const styles = {
  view: {
    flex: 1,
  },
}