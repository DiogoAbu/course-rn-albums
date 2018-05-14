import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

class Button extends React.PureComponent {
  _onPress = (...args) => {
    requestAnimationFrame(() => {
      this.props.onPress(...args)
    })
  }

  render = () => (
    <TouchableOpacity
      onPress={this._onPress}
      style={styles.button}
    >
      <Text style={styles.text}>{this.props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  button: {
    flex            : 1,
    alignSelf       : 'stretch',
    backgroundColor : '#fff',
    borderRadius    : 6,
    borderWidth     : 1,
    borderColor     : '#007aff',
    marginHorizontal: 6,
  },

  text: {
    alignSelf      : 'center',
    color          : '#007aff',
    fontSize       : 16,
    fontWeight     : '600',
    paddingVertical: 12,
  },
}

export default Button