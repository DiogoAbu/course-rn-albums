import React from 'react'
import { View } from 'react-native'

const CardSection = props => (
  <View style={styles.view}>
    {props.children}
  </View>
)

const styles = {
  view: {
    borderBottomWidth: 1,
    padding          : 6,
    backgroundColor  : '#fff',
    justifyContent   : 'flex-start',
    flexDirection    : 'row',
    borderColor      : '#ddd',
    position         : 'relative',
  },
}

export default CardSection