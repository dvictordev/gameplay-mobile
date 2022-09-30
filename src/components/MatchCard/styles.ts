import { Thermometer } from 'phosphor-react-native';
import { StyleSheet } from 'react-native';
import { THEME } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    width:'100%',
    marginTop:24,
    paddingVertical:8,
  },
  cardContainer:{
    // width:'100%',
    flexDirection:'row',
  },
  matchInfo:{
    width:'70%',
    height:90,
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    borderBottomWidth:2,
    borderBottomColor:THEME.COLORS.SHAPE
  },
  gameBanner:{
    width:84,
    height:88,
    resizeMode:'contain',
    marginRight:8,
    borderRadius:8
  },
  
  firstView:{
    height:88,
    justifyContent:'space-around',
    flexDirection:'column',
  },
  secondView:{
    height:88,
    justifyContent:'space-evenly',
    flexDirection:'column'
  },
  title:{
    color:THEME.COLORS.HEADING,
    fontSize:18,
    fontWeight:'700'
  },
  subtitle:{
    color:THEME.COLORS.SUBTITLE,
    fontSize:13,
    fontWeight:'400'
  },
  users:{
    marginTop:12,
    padding:2,
    color:THEME.COLORS.HEADING
    },
  usersImg:{
    paddingRight:20
  }

});