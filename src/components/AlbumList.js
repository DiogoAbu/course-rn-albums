import React from 'react'
import { FlatList, Text, View } from 'react-native'
import AlbumDetail from './AlbumDetail'

class AlbumList extends React.PureComponent {
  state = {
    albums: [],
  }

  componentDidMount = async () => {
    const albums = await fetch('https://rallycoding.herokuapp.com/api/music_albums').then(res => res.json())
    this.setState({ albums })
  }

  _renderAlbum = ({ item: album }) => (
    <AlbumDetail
      album={album}
    />
  )

  _keyExtractor = item => item.title;

  render = () => {
    const { albums } = this.state

    if(albums.length <= 0){
      return (
        <View style={styles.viewLoading}>
          <Text style={styles.textLoading}>Loading...</Text>
        </View>
      )
    }

    return (
      <FlatList
        data={albums}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderAlbum}
        style={styles.view}
      />
    )
  }
}

const styles = {
  view: {
    flex: 1,
  },

  viewLoading: {
    flex          : 1,
    flexDirection : 'column',
    justifyContent: 'center',
    alignItems    : 'center',
  },
  textLoading: {
    fontSize: 16,
    color   : 'rgba(0,0,0,0.66)',
  },
}

export default AlbumList