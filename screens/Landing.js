import { Text,  View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'



const Landing = ({ navigation }) => {

    const pressHandler = () => {
        navigation.navigate('Todos')
    }

    return (
    <View style={styles.container}>
        <View  style={styles.iconWrapper}>
          <Ionicons style={styles.icon}  name='md-book-outline' size={265} color='#4B77BE'  />
        </View>

        <View style={styles.textSection}>
            <Text style={styles.slogan}>
                Stay organized with 
            </Text>
            <Text style={styles.heading}>
                To Do App
            </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={()=>pressHandler()}> 
          <Text style={styles.buttonText}>
            Start
          </Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    iconWrapper: {
        height: 330, 
        width: 330, 
        marginTop: 20,
        flexDirection: 'row', 
        justifyContent:'center',  
        alignItems: 'center',
        borderWidth: 4, 
        borderRadius: 10, 
        borderColor: '#444', 
    },
    icon: {
        borderRadius: 10, 
        paddingLeft: 18
    },
    textSection: {
        padding: 25
    },
    slogan: {
        fontSize:20, 
        textTransform:'uppercase', 
        color:'#444'
    },
    heading: {
        fontSize:38, 
        fontWeight:'bold', 
        textTransform:'uppercase', 
        color:'#444'
    },
    button: {
        width: 240,
        backgroundColor:'#4B77BE', 
        borderRadius: 30, 
        paddingVertical: 20,  
    },
    buttonText: {
        color:'#fff', 
        textTransform: 'uppercase', 
        textAlign:'center', 
        fontSize: 16, 
    },
})

export default Landing