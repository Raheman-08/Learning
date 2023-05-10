import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
  useAnimatedValue,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
// import Feather from 'react-native-vector-icons/Feather';

export default function HomeScreen() {
  const [data, setData] = useState([
    {
      text: 'Blood Pressure',
      sys: 'SYS',
      number: '120',
      unit: 'mmHG',
      dia: 'DIA',
    },
    {
      text: 'Blood Pressure',
      sys: 'SYS',
      number: '120',
      unit: 'mmHG',
      dia: 'DIA',
    },
  ]);

  const Card = ({item}) => {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.dataBox}>
          <View>
            <Text style={styles.dataText}>{item.text}</Text>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.sysInfo}>
              <Text style={styles.dataType}>{item.sys}</Text>
              <Text style={styles.dataNumber}>{item.number}</Text>
              <Text style={styles.dataUnit}>{item.unit}</Text>
            </View>
            <View style={styles.diaInfo}>
              <Text style={styles.dataType}>{item.dia}</Text>
              <Text style={styles.dataNumber}>{item.number}</Text>
              <Text style={styles.dataUnit}>{item.unit}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.headContainer}>
        <View style={styles.textHeader}>
          <Text style={styles.para}>Welcome Back</Text>
          <Text style={styles.header}>Raheman Ali</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <Entypo style={styles.icon} name="calendar" />
        </TouchableOpacity>
      </View>

      <View style={styles.search}>
        <TextInput style={styles.textInput} placeholder="Search" />
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.textHead}>
          <Text style={styles.bdText}>Today's Information</Text>
          <Text style={styles.bdPara}>May 7, 2021</Text>
        </View>
        <TouchableOpacity style={styles.iconHead}>
          <Entypo style={styles.headIcon} name="dots-two-vertical" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        horizontal={true}
        renderItem={Card}
      />
      
      {/* 
      <View style={styles.contentContainer}>
        <View style={styles.dataBox}>
          <View>
            <Text style={styles.dataText}>Blood Pressure</Text>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.sysInfo}>
              <Text style={styles.dataType}>SYS</Text>
              <Text style={styles.dataNumber}>120</Text>
              <Text style={styles.dataUnit}>mmHG</Text>
            </View>
            <View style={styles.diaInfo}>
              <Text style={styles.dataType}>DIA</Text>
              <Text style={styles.dataNumber}>120</Text>
              <Text style={styles.dataUnit}>mmHG</Text>
            </View>
          </View>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  headContainer: {
    color: 'White',
    flexDirection: 'row',
  },
  bodyContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 30,
  },
  para: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#7E848D',
  },
  header: {
    fontSize: 26,
    color: '#000000',
    fontFamily: 'Poppins-Bold',
  },
  textInput: {
    height: 52,
    width: '100%',
    borderWidth: 1,
    borderColor: '#8991A4',
    borderRadius: 16,
    padding: 8,
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#F5F5F5',
    paddingLeft: 20,
  },
  bdText: {
    fontSize: 26,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },
  bdPara: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  iconContainer: {
    padding: 10,
  },
  icon: {
    fontSize: 26,
    marginLeft: 135,
    padding: 16,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'black',
    color: 'red',
    fontWeight: 'bold',
    marginRight: 16,
  },
  sectionHead: {
    flex: 1,
    flexDirection: 'row',
  },
  headIcon: {
    fontSize: 26,
    padding: 20,
    marginLeft: 70,
    color: 'black',
  },
  dataBox: {
    borderWidth: 1,
    // height: '80%',
    width: '50%',
    borderRadius: 10,
    marginTop: 20,
    borderColor: '#BFBFBF',
  },
  dataText: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#F15223',
    margin: '5%',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 22,
  },
  diaInfo: {
    marginLeft: 30,
  },
  dataType: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
  },
  dataNumber: {
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
  dataUnit: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: 'black',
    marginBottom: hp('5%'),
  },
});
