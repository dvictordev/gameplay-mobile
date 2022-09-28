import { StyleSheet } from 'react-native';
import { THEME } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    alignItems:"center",
    backgrounGradient:'vertical',
    backgroundGradientTop: '#0E1647',
    backgroundGradientBottom: "#0A1033"
  },
  illustration:{
    width:'100%',
    marginTop:83
  },
  titleContainer:{
    marginTop:-30,
    paddingHorizontal:20,
  },
  title:{
    color:THEME.COLORS.HEADING,
    fontSize:40,
    fontWeight:'bold',
    textAlign:'center'
  },
  subtitle:{
    color:THEME.COLORS.HEADING,
    fontSize:15,
    textAlign:'center',
    marginTop:16,
  },
  loginButton:{
    marginTop:64,
    backgroundColor:THEME.COLORS.PRIMARY,
    flexDirection:'row',
    alignItems:'center',
    width:274,
    height:56,
    borderRadius:8,
  },
  discord:{
    width:56,
    borderRightWidth:1,
    borderRightColor:'#991F36',
    paddingHorizontal:16,
    paddingVertical:19,
  },
  getIn:{
    width:218,
    justifyContent:'center',
    alignItems:'center'
  },
  getInTitle:{
    color:THEME.COLORS.HEADING,
    fontWeight:'500',
    fontSize:15
  }
});