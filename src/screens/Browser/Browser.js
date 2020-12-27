import React, { useState, useRef } from 'react';
import {WebView} from 'react-native-webview';
import {
  // SafeAreaView,
  View,
  BackHandler,
  StyleSheet
} from 'react-native';
import {Header, Left, Right, Body, Button, Icon} from 'native-base';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';

const library = 'bukarest';
const linkTo = '.bibliothek.goethe.de/cgi-bin/koha/opac-search.pl';
const SearchingFor = 'idx=kw&op=and&idx=kw&op=and&idx=kw&limit=mc-ccode%3ADFLE&' + 'sort_by=acqdate_dsc&do=Search&language=en-GB';
const initialURL = `https://${library}${linkTo}?${SearchingFor}`;

const Browser = () => {
  const [canGoBack, setCanGoBack] = useState(false);
  const webViewRef = useRef();

  const backPressed = ()=>{
    console.log({webViewRef, canGoBack})
    if(canGoBack){
      webViewRef.current.goBack();
    }
    else{
      console.log("exit app")
      BackHandler.exitApp()
    }
  }

  const renderNavigationHeader =()=>{
    const renderBackButton = ()=>{
      return (
        <Button transparent onPress={() => backPressed()}>
          <Icon size = {25} name = 'arrow-back' style = {{color: '#fff'}} />
        </Button>
      )
    }

    const renderRefreshButton = ()=>{
      return (
        <Button transparent onPress={()=> webViewRef.current.reload()}>
          <Icon size={25} name='refresh' style = {{color: '#fff'}}/>
        </Button>
      )
    }

    return(
      <Header style={{backgroundColor: '#a0c814'}} iosBarStyle='light-content'>
        <Left>
          {renderBackButton()}
        </Left>
        <Body>
          {renderRefreshButton()}
        </Body>
        <Right/>
      </Header>
    )
  }

  return (
    <>
      {renderNavigationHeader()}
      {/* <CustomSafeAreaView> */}
        <View style={{flex:1}}>
        <WebView
          style={styles.webviewStyle}
          ref={webViewRef}
          source={{uri: initialURL}}
          originWhiteList = {['*']}
          startInLoadingState
          onNavigationStateChange={e=>{
            let eCopy = {...e};
            // eCopy.canGoBack
            // if(canGoBack)
            setCanGoBack(prev=>{
              if(prev!= eCopy.canGoBack) return eCopy.canGoBack;
              return prev;
            })
            console.log("navigationChange",{eCopy, canGoBack: eCopy.canGoBack})
          }}
        />
        </View>
        
      {/* </CustomSafeAreaView> */}
    </>
  )
}

const styles = StyleSheet.create({
  webviewStyle:{
    flex: 1,
  }
})

export default Browser
