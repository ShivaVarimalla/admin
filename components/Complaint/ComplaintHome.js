import React, { useEffect, useState } from 'react';
import { Text, View,Switch,Dimensions,StyleSheet,TouchableOpacity } from 'react-native';
import ComplaintList from './ComplaintList'
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';


const Complaintspage=({navigation})=> {

  const [toggle,setToggle] = useState(false);
  const [Complaint, setComplient] = useState([]);

  useEffect(()=>{
    setComplient([
      {
        id:'1',
        complaint: "I dont have Power asdas aoshdios asuhiuodh uashdiuh sauidiuh iasiudhiusah iduaiusdhiuash",
        category: 'electricity',
        mobileno : "996332369",
        hno: '2-4-209',
        status: 'Under Inspection'
    },
    {
        id:'2',
        complaint: "I dont have Power",
        category: 'electricity',
        mobileno : "996332369",
        hno: '2-8-529',
        status: 'On Going'
    },
    {
      id:'3',
      complaint: "I dont have Power",
      category: 'electricity',
      mobileno : "996332369",
      hno: '10-5-789',
      status: 'Issue Resolved'
    },
    {
      id:'4',
      complaint: "I dont have Power",
      category: 'electricity',
      mobileno : "996332369",
      hno: '10-5-789',
      status: 'Issue Resolved'
    }
    ])
  },[])

  useEffect(()=>{
    if(toggle){
      setComplient([
        {
          id:'1',
          complaint: "I dont have Power asdas aoshdios asuhiuodh uashdiuh sauidiuh iasiudhiusah iduaiusdhiuash",
          category: 'electricity',
          mobileno : "996332369",
          hno: '2-4-209',
          status: 'Not Seen'
        },
      ])
    }else{
      setComplient([
        {
          id:'1',
          complaint: "I dont have Power asdas aoshdios asuhiuodh uashdiuh sauidiuh iasiudhiusah iduaiusdhiuash",
          category: 'electricity',
          mobileno : "996332369",
          hno: '2-4-209',
          status: 'Not Seen'
      },
      {
          id:'2',
          complaint: "I dont have Power",
          category: 'electricity',
          mobileno : "996332369",
          hno: '2-8-529',
          status: 'On Going'
      },
      {
        id:'3',
        complaint: "I dont have Power",
        category: 'electricity',
        mobileno : "996332369",
        hno: '10-5-789',
        status: 'Resolved'
      },
      {
        id:'4',
        complaint: "I dont have Power",
        category: 'electricity',
        mobileno : "996332369",
        hno: '10-5-789',
        status: 'Resolved'
      }
      ])
    }
  },[toggle])

  return (
    <View style={styles.main}>
    <View style= {styles.Container}>
        <View>
           <Text style={styles.Heading}>Complaints</Text>
        </View>
          <View style={styles.sort}>
            <MaterialIcons name="sort" size={40} color="black"  />
             <Picker style={styles.picker}>
                <Picker.Item label="Sort by" value="select" />
                <Picker.Item label="Ascending to Descending" value="Ascending to Descending" />
                <Picker.Item label="Descnding to Ascending" value="Descnding to Ascending" />
             </Picker>

            <Picker style={styles.select}>
               <Picker.Item label="Select Category" value="select" />
               <Picker.Item label="Not Seen" value="notseen" />
               <Picker.Item label="On Going" value="ongoing" />
               <Picker.Item label="Resolved" value="resolved" />
            </Picker>
       </View>
       <View style={styles.touch}>
          <TouchableOpacity style={styles.press}><Text>Filter</Text></TouchableOpacity>
       </View>
  </View>
              <View style={styles.com}>
                  <ComplaintList Com={Complaint}/>
             </View>
    </View>
  );

}

const styles= StyleSheet.create({

  Container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "white",
    paddingTop: 80,
    alignItems: 'center',
    paddingBottom:60,
  },
  
  main: {
   flex: 1   
  },

  Heading:{
    textAlign:"center",
    width:width,
    borderBottomColor:"#222526",
    borderBottomWidth:0.4,
    fontSize:20,
    color:"black",
    paddingVertical:20,
    marginBottom:10,
    fontWeight:'bold',
    fontSize: 25
  },

  sort:{
    width:width-70,
    flexDirection:'row',
    justifyContent:'space-between'
  },

  toggleText:{
    color:"#103775",
    fontSize:18,
    paddingBottom:10,
    fontWeight: 'bold'
  },
  picker:{
      width: 80,
      justifyContent:'center',
      alignItems:"center",
      backgroundColor:'white',
      borderRadius:5,
  },
  sort: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingLeft: 30,
  },
  select:{
    width:150,
    justifyContent:'space-between',
    alignSelf:'center',
    backgroundColor:'#165f87',
  },
  press:{
    backgroundColor: 'coral',
  }
})

export default Complaintspage;