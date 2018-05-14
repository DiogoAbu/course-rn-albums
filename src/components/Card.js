import React from 'react'
import { View } from 'react-native'

const Card = props => (
  <View style={styles.view}>
    {props.children}
  </View>
)

const styles = {
  view: {
    borderWidth      : 1,
    borderRadius     : 2,
    borderColor      : '#ddd',
    borderBottomWidth: 0,
    shadowColor      : '#000',
    shadowOffset     : { width: 0, height: 2 },
    shadowOpacity    : 0.1,
    shadowRadius     : 2,
    elevation        : 1,
    marginHorizontal : 6,
    marginTop        : 12,
  },
}

export default Card