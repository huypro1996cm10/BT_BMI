import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';




export const BMI = () => {

        const [weight, setWeight] = useState('0');
        const [height,setHeight] = useState('0');
        const [bmi, setBmi] = useState(0);
        const [bmiCategory, setBmiCategory] = useState('');

    const compute = (w, h) =>{
      console.log('On pressed!');
      let weight = parseFloat(w);
      let height = parseFloat(h);
      let calculatedBmi = weight / Math.pow(height/100, 2);
      setBmi(calculatedBmi);
      categorizeBmi(calculatedBmi)
    };

    const categorizeBmi = (calculatedBmi) => {
    if (calculatedBmi < 18.5) {
      setBmiCategory('Thiếu cân');
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
      setBmiCategory('Cân nặng bình thường');
    } else if(calculatedBmi >= 25 && calculatedBmi < 29.9){
      setBmiCategory('Tiền béo phì');
    } else if(calculatedBmi >= 30 && calculatedBmi < 34.9){
      setBmiCategory('Béo phì độ I');
    } else if(calculatedBmi >= 35 && calculatedBmi < 39.9){
      setBmiCategory('Béo phì độ II');
    } else {
      setBmiCategory('Béo phì độ III');
    }
    };

    const Clearinput = () =>{
      setWeight(0);
      setHeight(0);
      setBmi(0);
      setBmiCategory(0);
    }

  return (
      <View style={styles.container}>
        <View style={styles.group}>
            <Text style={styles.title}>Cân nặng (Kg)</Text>
            <TextInput style={styles.input} 
              keyboardType='numeric' 
              value={weight}
              onChangeText={(w) => setWeight(w)}
            />
        </View>
        <View style={styles.group}>
            <Text style={styles.title}>Chiều cao (Cm)</Text>
            <TextInput style={styles.input} 
              keyboardType='numeric'
              value={height}
              onChangeText={(h) => setHeight(h)}
            />
        </View>
      <View style={styles.center}>
        <View style={styles.group}>
            <Text style={styles.title}>Chỉ số BMI:{bmi.toFixed(2)}</Text>
            <Text style={styles.title}>Phân loại: {bmiCategory}</Text>
        </View>
        <View style={styles.group}>
            <TouchableOpacity style={styles.button}
                onPress={() => compute(weight, height)}>
                <Text style={styles.buttonText}>Tính toán</Text>
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={Clearinput}>
                <Text style={styles.buttonText}>Làm mới</Text>
            </TouchableOpacity>
        </View>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    flexDirection:'column',
    padding:20
  },
  group:{
    marginTop:20
  },
  title:{
    fontSize:20
  },
  input:{
    padding:10,
    height:40,
    borderWidth:1
  },
  center:{
    alignItems:'center'
  },
  button:{
    backgroundColor:'lightblue',
    textAlign:'center',
    borderWidth:1,
    padding:10,
    marginBottom:10
  },
  buttonText:{
    fontSize:30
  }
});
export default BMI;