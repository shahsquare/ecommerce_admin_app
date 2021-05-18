import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function ProductsList({ navigation }) {
  return (

    <View style={{ margin: 15 }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: '20%' }}>
          <Image source={{ uri: 'https://i.imgur.com/CUG0Aof.jpg' }} style={styles.productImage} />
        </View>

        <View style={{ width: '60%' }}>
          <Text style={styles.productName}>BEEF BURGER</Text>
          <Text style={styles.productPrice}>PKR 350/-</Text>
        </View>

        <View style={{ marginVertical: 30, width: '20%' }}>
          <Button title="View" color="teal"
            onPress={() => {
              navigation.navigate('ProductPage', {
                item: 'burger'
              });
            }}
          />
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ width: '20%' }}>
          <Image source={{ uri: 'https://i.imgur.com/Q6dlmqz.jpg' }} style={styles.productImage} />
        </View>

        <View style={{ width: '60%' }}>
          <Text style={styles.productName}>PIZZA</Text>
          <Text style={styles.productPrice}>PKR 800/-</Text>
        </View>

        <View style={{ marginVertical: 30, width: '20%' }}>
          <Button title="View" color="teal"
            onPress={() => {
              navigation.navigate('ProductPage', {
                item: 'pizza'
              });
            }}
          />
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ width: '20%' }}>
          <Image source={{ uri: 'https://i.imgur.com/THYIaQt.jpg' }} style={styles.productImage} />
        </View>

        <View style={{ width: '60%' }}>
          <Text style={styles.productName}>FRENCH FRIES</Text>
          <Text style={styles.productPrice}>PKR 180/-</Text>
        </View>

        <View style={{ marginVertical: 30, width: '20%' }}>
          <Button title="View" color="teal"
            onPress={() => {
              navigation.navigate('ProductPage', {
                item: 'fries'
              });
            }}
          />
        </View>
      </View>

    </View>

  );
}

function ProductPage({ route }) {
  const { item } = route.params;
  if (item == 'burger') {
    return (
      <View style={{ margin: 15 }}>

        <View style={{ width: '20%' }}>
          <Image source={{ uri: 'https://i.imgur.com/CUG0Aof.jpg' }} style={{ width: 300, height: 300 }} />
        </View>

        <View>
          <Text style={styles.productName}>BEEF BURGER</Text>
          <Text style={styles.productPrice}>PKR 350/-</Text>
          <Text style={{ marginHorizontal: 10, color: 'tomato' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam convallis urna, at porttitor nulla aliquet nec.</Text>
        </View>

      </View>
    );
  } else if (item == 'pizza') {
    return (
      <View style={{ margin: 15 }}>

        <View style={{ width: '20%' }}>
          <Image source={{ uri: 'https://i.imgur.com/Q6dlmqz.jpg' }} style={{ width: 300, height: 300 }} />
        </View>

        <View>
          <Text style={styles.productName}>PIZZA</Text>
          <Text style={styles.productPrice}>PKR 800/-</Text>
          <Text style={{ marginHorizontal: 10, color: 'tomato' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam convallis urna, at porttitor nulla aliquet nec.</Text>
        </View>

      </View>
    );
  } else if (item == 'fries') {
    return (
      <View style={{ margin: 15 }}>

        <View style={{ width: '20%' }}>
          <Image source={{ uri: 'https://i.imgur.com/THYIaQt.jpg' }} style={{ width: 300, height: 300 }} />
        </View>

        <View>
          <Text style={styles.productName}>FRENCH FRIES</Text>
          <Text style={styles.productPrice}>PKR 180/-</Text>
          <Text style={{ marginHorizontal: 10, color: 'tomato' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam convallis urna, at porttitor nulla aliquet nec.</Text>
        </View>

      </View>
    );
  }
}

function EmployeesList({ navigation }) {
  return (

    <View style={{ margin: 15 }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: '20%' }}>
          <Image source={{ uri: 'https://i.imgur.com/SnuAkUm.jpg' }} style={styles.productImage} />
        </View>

        <View style={{ width: '60%' }}>
          <Text style={styles.productName}>HOUSE</Text>
          <Text style={styles.productPrice}>Branch Manager</Text>
        </View>

        <View style={{ marginVertical: 30, width: '20%' }}>
          <Button title="View" color="teal"
            onPress={() => {
              navigation.navigate('EmployeePage', {
                item: 'house'
              });
            }}
          />
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ width: '20%' }}>
          <Image source={{ uri: 'https://i.imgur.com/U166AKX.jpg' }} style={styles.productImage} />
        </View>

        <View style={{ width: '60%' }}>
          <Text style={styles.productName}>DAVID COOPER</Text>
          <Text style={styles.productPrice}>Waiter</Text>
        </View>

        <View style={{ marginVertical: 30, width: '20%' }}>
          <Button title="View" color="teal"
            onPress={() => {
              navigation.navigate('EmployeePage', {
                item: 'david'
              });
            }}
          />
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ width: '20%' }}>
          <Image source={{ uri: 'https://i.imgur.com/CDcRoOA.jpg' }} style={styles.productImage} />
        </View>

        <View style={{ width: '60%' }}>
          <Text style={styles.productName}>ANNA LI</Text>
          <Text style={styles.productPrice}>Cook</Text>
        </View>

        <View style={{ marginVertical: 30, width: '20%' }}>
          <Button title="View" color="teal"
            onPress={() => {
              navigation.navigate('EmployeePage', {
                item: 'anna'
              });
            }}
          />
        </View>
      </View>

    </View>

  );
}

function EmployeePage({ route }) {
  const { item } = route.params;
  if (item == 'house') {
    return (
      <View style={{ margin: 15 }}>

        <View style={{ width: '20%' }}>
          <Image source={{ uri: 'https://i.imgur.com/SnuAkUm.jpg' }} style={{ width: 300, height: 300 }} />
        </View>

        <View>
          <Text style={styles.productName}>HOUSE</Text>
          <Text style={styles.productPrice}>Branch Manager</Text>
          <Text style={{ marginHorizontal: 10, color: 'tomato' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam convallis urna, at porttitor nulla aliquet nec.</Text>
        </View>

      </View>
    );
  } else if (item == 'david') {
    return (
      <View style={{ margin: 15 }}>

        <View style={{ width: '20%' }}>
          <Image source={{ uri: 'https://i.imgur.com/U166AKX.jpg' }} style={{ width: 300, height: 300 }} />
        </View>

        <View>
          <Text style={styles.productName}>DAVID COOPER</Text>
          <Text style={styles.productPrice}>Waiter</Text>
          <Text style={{ marginHorizontal: 10, color: 'tomato' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam convallis urna, at porttitor nulla aliquet nec.</Text>
        </View>

      </View>
    );
  } else if (item == 'anna') {
    return (
      <View style={{ margin: 15 }}>

        <View style={{ width: '20%' }}>
          <Image source={{ uri: 'https://i.imgur.com/CDcRoOA.jpg' }} style={{ width: 300, height: 300 }} />
        </View>

        <View>
          <Text style={styles.productName}>ANNA LI</Text>
          <Text style={styles.productPrice}>Cook</Text>
          <Text style={{ marginHorizontal: 10, color: 'tomato' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam convallis urna, at porttitor nulla aliquet nec.</Text>
        </View>

      </View>
    );
  }
}

function OrdersList({ navigation }) {
  return (

    <View style={{ margin: 15 }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: '20%' }}>
          <Text style={{ fontSize: 40, fontWeight: 'bold', margin: 20, color: 'orange' }}>1</Text>
        </View>

        <View style={{ width: '60%' }}>
          <Text style={styles.productName}>2 Beef Burgers</Text>
          <Text style={styles.productPrice}>Status: Delivered</Text>
        </View>

        <View style={{ marginVertical: 30, width: '20%' }}>
          <Button title="View" color="teal"
            onPress={() => {
              navigation.navigate('OrderPage', {
                item: '1'
              });
            }}
          />
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ width: '20%' }}>
          <Text style={{ fontSize: 40, fontWeight: 'bold', margin: 20, color: 'orange' }}>2</Text>
        </View>

        <View style={{ width: '60%' }}>
          <Text style={styles.productName}>1 Large Pizza</Text>
          <Text style={styles.productPrice}>Status: Pending</Text>
        </View>

        <View style={{ marginVertical: 30, width: '20%' }}>
          <Button title="View" color="teal"
            onPress={() => {
              navigation.navigate('OrderPage', {
                item: '2'
              });
            }}
          />
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ width: '20%' }}>
          <Text style={{ fontSize: 40, fontWeight: 'bold', margin: 20, color: 'orange' }}>3</Text>
        </View>

        <View style={{ width: '60%' }}>
          <Text style={styles.productName}>1 Beef Burger</Text>
          <Text style={styles.productPrice}>Status: Pending</Text>
        </View>

        <View style={{ marginVertical: 30, width: '20%' }}>
          <Button title="View" color="teal"
            onPress={() => {
              navigation.navigate('OrderPage', {
                item: '3'
              });
            }}
          />
        </View>
      </View>

    </View>

  );
}

function OrderPage({ route }) {
  const { item } = route.params;
  if (item == 1) {
    return (
      <View style={{ margin: 15 }}>

        <View>
          <Text style={styles.productName}>2 BEEF BURGERS</Text>
          <Text style={styles.productPrice}>3rd May 2021 | Monday</Text>
          <View
            style={{
              borderBottomColor: 'purple',
              borderBottomWidth: 3,
              marginHorizontal: 10,
              marginVertical: 10
            }}
          />
          <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
            <View style={{ width: '50%' }}>
              <Text style={{ color: 'peru', fontSize: 20 }}>Order Id:</Text>
              <Text style={{ color: 'peru', fontSize: 20 }}>Order Time:</Text>
              <Text style={{ color: 'peru', fontSize: 20 }}>Ordered By:</Text>
              <Text style={{ color: 'peru', fontSize: 20 }}>Contact:</Text>
            </View>
            <View style={{ width: '50%' }}>
              <Text style={{ color: 'grey', fontSize: 20 }}>0254521</Text>
              <Text style={{ color: 'grey', fontSize: 20 }}>12:44 PM</Text>
              <Text style={{ color: 'grey', fontSize: 20 }}>Shameer Shahzad</Text>
              <Text style={{ color: 'grey', fontSize: 20 }}>03341058732</Text>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: 'purple',
              borderBottomWidth: 3,
              marginHorizontal: 10,
              marginVertical: 10
            }}
          />

          <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
            <View style={{ width: '50%' }}>
              <Text style={{ color: 'purple', fontSize: 25, fontWeight: 'bold' }}>Amount:</Text>
              <Text style={{ color: 'darkgrey', fontSize: 20 }}>Status:</Text>
            </View>
            <View style={{ width: '50%' }}>
              <Text style={{ color: 'purple', fontSize: 25, fontWeight: 'bold' }}>PKR 520/-</Text>
              <Text style={{ color: 'green', fontSize: 20, fontWeight:'bold' }}>DELIVERED</Text>
            </View>
          </View>

        </View>

      </View>
    );
  } else if (item == 2) {
    return (
      <View style={{ margin: 15 }}>

        <View>
          <Text style={styles.productName}>1 LARGE PIZZA</Text>
          <Text style={styles.productPrice}>8th May 2021 | Friday</Text>
          <View
            style={{
              borderBottomColor: 'purple',
              borderBottomWidth: 3,
              marginHorizontal: 10,
              marginVertical: 10
            }}
          />
          <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
            <View style={{ width: '50%' }}>
              <Text style={{ color: 'peru', fontSize: 20 }}>Order Id:</Text>
              <Text style={{ color: 'peru', fontSize: 20 }}>Order Time:</Text>
              <Text style={{ color: 'peru', fontSize: 20 }}>Ordered By:</Text>
              <Text style={{ color: 'peru', fontSize: 20 }}>Contact:</Text>
            </View>
            <View style={{ width: '50%' }}>
              <Text style={{ color: 'grey', fontSize: 20 }}>254655</Text>
              <Text style={{ color: 'grey', fontSize: 20 }}>03:30 PM</Text>
              <Text style={{ color: 'grey', fontSize: 20 }}>Hassaan Ahmed</Text>
              <Text style={{ color: 'grey', fontSize: 20 }}>03325526452</Text>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: 'purple',
              borderBottomWidth: 3,
              marginHorizontal: 10,
              marginVertical: 10
            }}
          />

          <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
            <View style={{ width: '50%' }}>
              <Text style={{ color: 'purple', fontSize: 25, fontWeight: 'bold' }}>Amount:</Text>
              <Text style={{ color: 'darkgrey', fontSize: 20 }}>Status:</Text>
            </View>
            <View style={{ width: '50%' }}>
              <Text style={{ color: 'purple', fontSize: 25, fontWeight: 'bold' }}>PKR 900/-</Text>
              <Text style={{ color: 'red', fontSize: 20, fontWeight:'bold' }}>PENDING</Text>
            </View>
          </View>

        </View>

      </View>
    );
  } else if (item == 3) {
    return (
      <View style={{ margin: 15 }}>

      <View>
        <Text style={styles.productName}>1 BEEF BURGER</Text>
        <Text style={styles.productPrice}>18th May 2021 | Tuesday</Text>
        <View
          style={{
            borderBottomColor: 'purple',
            borderBottomWidth: 3,
            marginHorizontal: 10,
            marginVertical: 10
          }}
        />
        <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
          <View style={{ width: '50%' }}>
            <Text style={{ color: 'peru', fontSize: 20 }}>Order Id:</Text>
            <Text style={{ color: 'peru', fontSize: 20 }}>Order Time:</Text>
            <Text style={{ color: 'peru', fontSize: 20 }}>Ordered By:</Text>
            <Text style={{ color: 'peru', fontSize: 20 }}>Contact:</Text>
          </View>
          <View style={{ width: '50%' }}>
            <Text style={{ color: 'grey', fontSize: 20 }}>548569</Text>
            <Text style={{ color: 'grey', fontSize: 20 }}>05:01 PM</Text>
            <Text style={{ color: 'grey', fontSize: 20 }}>Ammaar Naveed</Text>
            <Text style={{ color: 'grey', fontSize: 20 }}>03254458965</Text>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: 'purple',
            borderBottomWidth: 3,
            marginHorizontal: 10,
            marginVertical: 10
          }}
        />

        <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
          <View style={{ width: '50%' }}>
            <Text style={{ color: 'purple', fontSize: 25, fontWeight: 'bold' }}>Amount:</Text>
            <Text style={{ color: 'darkgrey', fontSize: 20 }}>Status:</Text>
          </View>
          <View style={{ width: '50%' }}>
            <Text style={{ color: 'purple', fontSize: 25, fontWeight: 'bold' }}>PKR 320/-</Text>
            <Text style={{ color: 'red', fontSize: 20, fontWeight:'bold' }}>PENDING</Text>
          </View>
        </View>

      </View>

    </View>
    );
  }
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <TouchableOpacity
        onPress={() => navigation.navigate('ProductsList')}
        style={{ backgroundColor: 'purple', width: 250, paddingVertical: 15, margin: 10, borderRadius: 5 }}>
        <Text style={{ fontSize: 20, color: '#fff', textAlign: "center" }}>Manage Products</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('EmployeesList')}
        style={{ backgroundColor: 'peru', width: 250, paddingVertical: 15, margin: 10, borderRadius: 5 }}>
        <Text style={{ fontSize: 20, color: '#fff', textAlign: "center" }}>Manage Employees</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('OrdersList')}
        style={{ backgroundColor: 'slategray', width: 250, paddingVertical: 15, margin: 10, borderRadius: 5 }}>
        <Text style={{ fontSize: 20, color: '#fff', textAlign: "center" }}>Manage Orders</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductsList" component={ProductsList} />
        <Stack.Screen name="ProductPage" component={ProductPage} />
        <Stack.Screen name="EmployeesList" component={EmployeesList} />
        <Stack.Screen name="EmployeePage" component={EmployeePage} />
        <Stack.Screen name="OrdersList" component={OrdersList} />
        <Stack.Screen name="OrderPage" component={OrderPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    marginTop: 20,
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  productName: {
    marginTop: 20,
    fontWeight: 'bold',
    color: 'purple',
    fontSize: 30,
    marginHorizontal: 10,
    marginBottom: 2,
  },

  productPrice: {
    color: 'grey',
    fontSize: 20,
    marginHorizontal: 10,
    marginBottom: 10,
  }
});
