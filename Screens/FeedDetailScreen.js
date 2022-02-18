import React from 'react';
import {View, Text, StyleSheet, FlatList,TouchableOpacity} from'react-native';
import {Card,Title,Paragraph} from 'react-native-paper';
import * as Linking from 'expo-linking';

//route dataDetail icerisinde bulunan feed e ulaşmamızı sağlar
const FeedDetailScreen = ({route}) =>{
    const {dataDetail}=route.params
    const renderFeedDetail=(feed)=>{
        console.log(dataDetail)
        return(
        <TouchableOpacity 
            style={{margin:15}}
            onPress={()=>Linking.openURL(feed.item.link)} //haber sitesine gitme
            >
                <Card>
                    <Card.Content>
                        <Title>{feed.item.title}</Title>
                        
                    </Card.Content>
                    
                    
                </Card>
            </TouchableOpacity>
        )
    }
    console.log(dataDetail.item.items)
    return(
        <View style={{flex:1}}>
            <FlatList data = {dataDetail.item.items} renderItem={renderFeedDetail} keyExtractor={item => item.id}>
                
            </FlatList>
        </View>
    )
}











export default FeedDetailScreen;