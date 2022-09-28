import { StyleSheet } from 'react-native';
import { THEME } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    width:'100%',
    marginTop:24,
    backgroundColor:'#fff',
    // paddingHorizontal:24
  },
  cardContainer:{
    width:'100%',
    flexDirection:'row',
  },
  gameBanner:{
    width:84,
    height:88,
    resizeMode:'contain',
    marginRight:8,
  },
  matchInfo:{
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row'
  },
  firstView:{
    height:'100%',
    justifyContent:'space-between'
  }
  
});