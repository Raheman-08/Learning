import {
  TextInput,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Login() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.headingContainer}>
        {/* <AntDesign name='back' /> */}
        <Text style={styles.header}>Create An Account</Text>
        <Text style={styles.para}>Start creating your account</Text>
      </View>

      <View style={styles.formContainer}>
        <View>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Your First Name"
          />
        </View>

        <View>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.textInput}
            label="Email"
            placeholder="Enter Your Email"
          />
        </View>

        <View>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.textInput}
            label="Password"
            placeholder="Enter Your Password"
          />
        </View>

        <View>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.textInput}
            label="Confirm Password"
            placeholder="Confirm Password"
          />
        </View>

        <View>
          <Text style={styles.label}>Date Of Birth</Text>
          <TextInput
            style={styles.textInput}
            label="DOB"
            placeholder="dd/mm/yy"
          />

          {/* <DatePicker/> */}
          
        </View>

        <View>
          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  headingContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 60,
  },
  formContainer: {
    marginTop: 0,
    flexDirection: 'column',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#cccccc',
    width: '100%',
    height: 56,
    marginTop: 2,
    padding: 8,
    fontFamily: 'Poppins-Regular',
  },
  submitBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: '#0066FF',
    marginTop: 20,
    height: 56,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  header: {
    fontSize: 32,
    color: '#000000',
    fontFamily: 'Poppins-Bold',
  },
  para: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#A2A2A7',
    marginTop: 20,
  },
});
