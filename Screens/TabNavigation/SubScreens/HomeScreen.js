import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchQuery:''
    };
  }

  onChangeSearch(query) {
    setSearchQuery(query);
}

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
        style={styles.img1}
        source={require('../../../assests/user.png')}
        />
        <Searchbar
        style={styles.searchbar}
        placeholder="Search"
        onChangeText={this.onChangeSearch}
        value={this.state.searchQuery}
        />
        <AwesomeIcon style={styles.icon1}  name="comment-dots" color={'#666666'} size={30} />
        <ScrollView>
          <View style={styles.view1}>
          <Text style={styles.txt1}>Land your dream role</Text>
          <Image
          style={styles.img2}
          source={require('../../../assests/banner1.png')}
          />
          <Text style={styles.txt2}>Ge4t notified when new jobs match your preferd title and location</Text>
          <Button style={styles.btn1}   onPress={() => console.log('Pressed')}>
            <Text style={styles.txt3}>Create Job Alert</Text>
          </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E9E5DF',
        color:'#FEFEFE',
        // paddingTop: StatusBar.currentHeight,
      },
      view1:{
        marginTop:18,
        backgroundColor:'#FFFFFF',
        height:270
      },
      img1:{
          marginTop:10,
          marginLeft:10,
          width:40,
          height:40
      },
      searchbar:{
          width:250,
          marginLeft:60,
          marginTop:-40
      },
      icon1:{
         marginLeft:323,
         marginTop:-40
      },
      txt1:{
        marginLeft:10,
        marginTop:10,
        fontSize:17,
        color:'#202124',
        fontWeight:'bold'
      },
      img2:{
        marginTop:10,
        width:250,
        height:100,
        alignSelf:'center'
      },
      txt2:{
        marginLeft:19,
        marginRight:10,
        marginTop:20,
        fontSize:15,
        color:'#202124',
      },
      btn1:{
        marginTop:10,
        backgroundColor:'#0A66C2',
        width: 310,
        height: 40,
        alignSelf:'center',
        borderRadius:30
      },
      txt3:{
        fontSize:17,
        color:'white'
    },
})
