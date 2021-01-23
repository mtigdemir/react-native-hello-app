import React, { Component } from 'react';
import { View } from 'react-native';
import { SearchBar, Text } from 'react-native-elements';

class SearchScreen extends Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />

        <Text>{search}</Text>
      </View>
    );
  }
}

export default SearchScreen