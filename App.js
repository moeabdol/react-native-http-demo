import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, ListItem } from 'react-native';

import axios from 'axios';

class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(res);
      this.setState({ ...this.state, posts: res.data });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.posts}
          renderItem={({ item }) => {
            return <View style={styles.postBox}>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
            </View>;
          }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 60,
  },
  postBox: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    margin: 5,
    padding: 5
  }
});

export default App;
