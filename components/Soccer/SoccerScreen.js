/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Alert,
  ScrollView,
  FlatList,
  Modal,
  ActivityIndicator,
  SearchBar,
} from 'react-native';

export default class SoccerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [
        {
          name: 'list1',
        },
        {
          name: 'list2',
        },
        {
          name: 'list3',
        },
        {
          name: 'list3',
        },
        {
          name: 'list3',
        },
        {
          name: 'list3',
        },
        {
          name: 'list3',
        },
        {
          name: 'list3',
        },
      ],
      page: 1,
      error: null,
      refreshing: false,
      modalVisible: false,
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 10,
            backgroundColor: 'black',
            borderBottomColor: 'gray',
            borderBottomWidth: 0.2,
          }}>
          <Text
            style={{
              flex: 8,
              textAlign: 'center',
              fontSize: 30,
              color: 'white',
            }}>
            Football Match{' '}
          </Text>
        </View>
      ),
    };
  };

  componentDidMount() {
    this.makeRemoteRequest();
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  makeRemoteRequest = () => {
    const {page} = this.state;
    const url = '';
    this.setState({loading: true});

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data:
            page === 1 ? res.data.docs : [...this.state.data, ...res.data.docs],
          error: res.error || null,
          loading: false,
          refreshing: false,
        });
      })
      .catch(error => {
        this.setState({error, loading: false});
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true,
      },
      () => {
        this.makeRemoteRequest();
      },
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        this.makeRemoteRequest();
      },
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Tìm kiếm" lightTheme round />;
  };

  renderFooter = () => {
    if (!this.state.loading) {
      return null;
    }

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: '#CED0CE',
        }}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
      <View>
        <Text style={{fontWeight: '700', textAlign: 'center'}}>
          List view horizontal
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={data => (
            <View
              style={{
                height: 40,
                width: 100,
                borderColor: 'gray',
                borderWidth: 1,
                margin: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>{data.item.name}</Text>
            </View>
          )}
        />
        <View style={{marginTop: 22, alignItems: 'center'}}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 22, alignItems: 'center'}}>
              <View>
                <Text>Hello World!</Text>

                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <TouchableHighlight
            style={{
              width: 100,
              height: 40,
              backgroundColor: 'black',
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text style={{color: 'white'}}>Show Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
