import React,{useState} from 'react';
import { View, Text ,TextInput, StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import {Card,Title,Paragraph} from 'react-native-paper';


function FeedScreen({navigation}) {
    const [feedLink,setfeedLink] = useState(null)
    const [feedData,setfeedData] = useState([])
    
    const fetchData = async() =>{
        //rss to json fetch ile istek atıldı. Gelen response ile json a çeviriyoruz.
        //feedData state içine json verilerini array olarak tutuyoruz.
        let link = "https://api.rss2json.com/v1/api.json?rss_url="+encodeURIComponent(feedLink)
        await fetch(link)
        .then(response => response.json())
        .then(response => {
            let data=[...feedData,response]
            setfeedData(data)
            console.log(response)
        }).catch(error => {
            alert("Bu link geçerli değil")
        })

    }
    //delete fonc
    const deleteRss = (rss) => {
        setfeedData( feedData.filter(item => item != rss));
    }
    //flat list verileri renderlama
    const renderFeeds = (feed) =>{
        console.log(feed)
        return(feed.item.feed &&
            <View>
                    <TouchableOpacity 
            style={{margin:15}}
            onPress={()=>(navigation.navigate("Haberler",{dataDetail:feed}))}
            >
                <Card>
              
                    <Card.Content>
                        <Title>{feed.item.feed.title}</Title>
                        <Paragraph>{feed.item.feed.description}</Paragraph>
                    </Card.Content>
                </Card>
            </TouchableOpacity> 
                  <TouchableOpacity  
                  style={{position:"absolute",
                  right:10,backgroundColor:"red",
                  borderRadius:30, width:30,height:30,
                  alignContent:"center", alignItems:"center"}} 
                  onPress={()=>deleteRss(feed.item)}>
                  <Text style={{fontSize:20,flex:1}}>x</Text></TouchableOpacity>
            </View>
        
        )
    }
    return (
      <View style={{ flex: 1 ,alignItems:"center"}}>
          <View style={{ flexDirection: "row" , alignContent:"center", alignItems:"center"}}>
                <TextInput 
                style={styles.linkBox}
                value={feedLink}
                onChangeText={(text)=> setfeedLink(text)}
                placeholder='Bir Rss linki girin'
                >
                </TextInput>
                <TouchableOpacity 
                style={styles.addButton}
                onPress={()=>{fetchData()}}>       
                    <Text style={{fontSize:22}} >+</Text>
                </TouchableOpacity>
            </View>
        <FlatList data={feedData} renderItem={renderFeeds} keyExtractor={item=>item.id}>

        </FlatList>
      </View>
    );
  }


const styles=StyleSheet.create({
    linkBox: {
        width:"80%",
        height: 40,
        borderWidth: 1,
        paddingLeft: 10,
        margin: 5,
        borderColor: "#F0ECE3",
        backgroundColor: "white",
        borderRadius: 10,
      },
    addButton:{
        width:40,
        height:40,
        alignContent:"center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#35858B",
        borderRadius: 30,
        left:5
    }  
})  
export default FeedScreen;