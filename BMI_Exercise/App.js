import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

class BMI extends Component {
  constructor(props) {
    super(props);
    this.state = { weight: '', height: '', bmi: 0 };
  }

  compute = () => {
    let weight = parseFloat(this.state.weight);
    let height = parseFloat(this.state.height);

    if (!weight || !height || height <= 0) {
      this.setState({ bmi: 0 });
      return;
    }

    let bmi = weight / Math.pow(height / 100, 2);
    this.setState({ bmi });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.group}>
          <Text style={styles.title}>Weight (KG)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={this.state.weight}
            onChangeText={(weight) => this.setState({ weight })}
            placeholder="Enter weight"
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.title}>Height (CM)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={this.state.height}
            onChangeText={(height) => this.setState({ height })}
            placeholder="Enter height"
          />
        </View>
        <View style={styles.center}>
          <View style={styles.group}>
            <Text style={styles.title}>BMI: {this.state.bmi.toFixed(2)}</Text>
          </View>
          <View style={styles.group}>
            <TouchableOpacity style={styles.button} onPress={this.compute}>
              <Text style={styles.buttonText}>Compute</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  group: {
    marginTop: 20,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    padding: 10,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  center: {
    alignItems: 'center',
  },
});

export default BMI;
