import React from 'react'
import { Image, Text, View, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({ album }) => (
  <Card>
    <CardSection>
      <View style={styles.containerImage}>
        <Image
          source={{ uri: album.thumbnail_image }}
          style={styles.thumbnailStyle}
        />
      </View>

      <View style={styles.containerInfo}>
        <Text style={styles.title}>{album.title}</Text>
        <Text style={styles.artist}>{album.artist}</Text>
      </View>
    </CardSection>

    <CardSection>
      <Image
        source={{ uri: album.image }}
        style={styles.image}
      />
    </CardSection>
    

    <CardSection>
      <Button
        onPress={() => Linking.openURL(album.url)}
        text='Buy'
      />
    </CardSection>
  </Card>
)

const styles = {
  containerImage: {
    justifyContent  : 'center',
    alignItems      : 'center',
    marginHorizontal: 6,
  },

  thumbnailStyle: {
    width : 50,
    height: 50,
  },

  containerInfo: {
    flexDirection : 'column',
    justifyContent: 'space-around',
  },

  title: {
    fontSize: 18,
  },

  artist: {
  },

  image: {
    height: 300,
    flex  : 1,
    width : null,
  },
}

export default AlbumDetail