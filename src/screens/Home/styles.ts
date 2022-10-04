import { StyleSheet } from 'react-native';
import { THEME } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    paddingHorizontal:24,
  },
  header:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10,
    marginBottom:58,
  },
  user:{
    width:50,
    height:50,
    borderRadius:8,
    borderWidth:1,
    borderColor:THEME.COLORS.SECONDARY
  },
  heading:{
    alignItems:'center',
    textAlign:'left'
  },
  headerTitle:{
    color:THEME.COLORS.HEADING,
    fontSize:24
  },
  userName:{
    fontWeight:'bold',
  },
  headSubtitle:{
    color:THEME.COLORS.HEADING,
    fontSize:13,
    fontWeight:'400'
  },
  plusButton:{
    padding:17,
    backgroundColor:THEME.COLORS.PRIMARY,
    borderRadius:9,
  },

  bodyHeader:{
    width:"100%",
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
},
  matchs:{
    color:THEME.COLORS.HEADING,
    fontSize:18,
    fontWeight:'700'
},
totalMatchs:{
    color:THEME.COLORS.HEADING,
    fontSize:13,
    fontWeight:'400'
}


});