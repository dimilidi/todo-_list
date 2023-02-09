import { StyleSheet, Text,  TouchableOpacity,  View } from 'react-native'
import  CheckBox from '../components/Checkbox'
import { useSelector } from 'react-redux'


const Settings = () => {
  
    const options = useSelector(state=> state.notificationSettings)

    const selectedSettings = useSelector((state) => 
        state.notificationSettings.filter((settings) => settings.selected === true)) 

    const handleSaveSettings = () => {
        if(selectedSettings.length === 0){
            alert('Choose a notification option!')
        } else {
            alert(`You will get your notifications via ${selectedSettings.map((selected) => selected.text)}`)
        }
    }
  

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Send me notifications via:</Text> 
            <View style={styles.checkboxWrapper}>
                {
                    options?.map((option, index) => {
                        return (
                            <CheckBox {...option} key = {index}  />
                        ) 
                    })
                }
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSaveSettings}>
                <Text style={styles.buttonText}>
                     Save Settings
                </Text>
            </TouchableOpacity>    
        </View>
    )  
}


const styles = StyleSheet.create({
    container: {
        height: 600, 
        justifyContent: 'center'
    },
    heading: {
        fontSize: 23,
        padding: 10,
        marginBottom: 10,
        textAlign: 'center',
        color: '#444',
        fontWeight: 'bold',
    },
    checkboxWrapper: {
        width: '80%',
        alignSelf:'center',
        paddingVertical: 15,
        paddingHorizontal: 8,
        backgroundColor: '#FFF',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    button: {
        paddingVertical: 15,
        marginTop: 50,
        width: 150,
        backgroundColor: 'gray',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
      
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})

export default Settings