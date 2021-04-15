import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  TouchableNativeFeedbackBase,
} from 'react-native';

export default class Write extends React.Component {
  constructor() {
    super();
    this.state = {
      author: '',
      title: '',
      details: '',
      story: '',
      write:true
    };
  }
  render() {
    if(this.state.write){
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            source={require('../assets/background 1.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.image}>
          <View style={styles.head}>
            <Text style={styles.headText}>WRITE A STORY</Text>
          </View>
          <TextInput
            style={[
              styles.inputBox1,
              { height: '10%', fontWeight: 800, textAlign: 'center' },
            ]}
            onChangeText={(text) => {
              this.setState({ title: text });
            }}
            placeholder="TITLE"
            placeholderTextColor="black"
            value={this.state.title.toUpperCase()}></TextInput>
          <TextInput
            style={[styles.inputBox1, { height: '10%', fontWeight: 'bold' }]}
            onChangeText={(text) => {
              this.setState({ author: text });
            }}
            placeholder="Author"
            placeholderTextColor="black"
            value={this.state.author}></TextInput>
          <View style = {styles.genreView}>
            <TouchableOpacity 
            style = {[styles.genre,{backgroundColor:this.state.details==='Fantasy'? 'blue' : 'aqua'}]}
            onPress = {() => {
              this.setState({details:'Fantasy'})
            }}>
              <Text style = {styles.genreText}>Fantasy</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style = {[styles.genre,{backgroundColor:this.state.details==='Non-Fiction'? 'blue' : 'aqua'}]}
            onPress = {() => {
              this.setState({details:'Non-Fiction'})
            }}>
              <Text style = {styles.genreText}>Non-Fiction</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style = {[styles.genre,{backgroundColor:this.state.details==='Humor'? 'blue' : 'aqua'}]}
            onPress = {() => {
              this.setState({details:'Humor'})
            }}>
              <Text style = {styles.genreText}>Humor</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style = {[styles.genre,{backgroundColor:this.state.details==='Thriller'? 'blue' : 'aqua'}]}
            onPress = {() => {
              this.setState({details:'Thriller'})
            }}>
              <Text style = {styles.genreText}>Thriller</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={[styles.inputBox1, { height: '30%', fontWeight: 600 }]}
            multiline={true}
            placeholder="Story"
            placeholderTextColor="black"
            onChangeText={(text) => {
              this.setState({ story: text });
            }}
            value={this.state.story}></TextInput>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (
                this.state.title !== '' &&
                this.state.author !== '' &&
                this.state.details !== '' &&
                this.state.story !== ''
              ) {
                if (
                  this.state.title !== 'Title Not Filled' &&
                  this.state.author !== 'Author Not Filled' &&
                  this.state.details !== 'Details Not Filled' &&
                  this.state.story !== 'Story Not Filled'
                ) {
                  this.setState({
                    title: '',
                    author: '',
                    details: '',
                    story: '',
                    write:false,
                  });
                  Alert.alert("Story Submitted Successfully")
                }
              } else {
                if (this.state.title === '') {
                  this.setState({ title: 'Title Not Filled' });
                  Alert.alert("Title Not Filled")
                }
                if (this.state.author === '') {
                  this.setState({ author: 'Author Not Filled' });
                  Alert.alert("Author Not Filled")
                }
                if (this.state.details === '') {
                  this.setState({ details: 'Details Not Filled' });
                  Alert.alert("Details Not Filled")
                }
                if (this.state.story === '') {
                  this.setState({ story: 'Story Not Filled' });
                  Alert.alert("Story Not Filled")
                }
              }
            }}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
    }else{
      return(
        <View style = {styles.noticeView}>
          <Text style = {styles.notice}>Story Submitted Successfully</Text>
          <TouchableOpacity 
          style = {styles.noticeButton}
          onPress = {() => {
              this.setState({write:true})
          }}>
            <Text style = {styles.noticeButtontext}>Go Back</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 10,
  },
  inputBox1: {
    width: '80%',
    justifyContent: 'center',
    borderWidth: 6,
    margin: 10,
    fontSize: 20,
    color: 'black',
  },
  head: {
    width: '100%',
    height: '10%',
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headText: {
    fontSize: 30,
    fontWeight: 900,
    color: 'white',
  },
  button: {
    width: '30%',
    height: '10%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderRadius: 60,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 600,
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.8,
    alignItems: 'center',
    paddingBottom: 10,
  },
  noticeView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'lightblue'
  },
  notice:{
    fontSize:80,
    fontWeight:'bold',
    color:'red',
    textAlign:'center',
    fontStyle:'italic',
    marginBottom:'10%'
  },
  noticeButton:{
    width:'60%',
    height:'20%',
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    borderWidth:10
  },
  noticeButtontext:{
    fontSize:30,
    fontWeight:'bold',
    color:'white',
    textAlign:'center',
  },
  genreView:{
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
    width:'100%',
    height:'10%'
  },
  genre:{
    height:'100%',
    width:'10%',
    backgroundColor:'aqua',
    borderWidth:3,
    justifyContent:'center',
    alignItems:'center',
  },
  genreText:{
    fontSize:20,
    fontWeight:'bold'
  }
});
