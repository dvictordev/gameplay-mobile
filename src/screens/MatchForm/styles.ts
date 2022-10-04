import { StyleSheet } from 'react-native';
import { THEME } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  header:{
    marginTop: 10,
    paddingHorizontal: 32,
    paddingBottom:32,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle:{
    fontSize:20,
    fontWeight:'700',
    color:THEME.COLORS.HEADING
  },
  right:{
    width:24,
    height:24
  },
  body:{
    paddingHorizontal:20,
    paddingVertical:54,
    backgroundColor:THEME.COLORS.BACKGROUND
  },
  categoriesLabel:{
    color:THEME.COLORS.HEADING,
    marginBottom:12
  },
  category:{
    paddingVertical:20,
    width:104,
    height:120,
    borderRadius:8,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between'
  }
});