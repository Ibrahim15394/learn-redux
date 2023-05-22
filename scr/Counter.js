import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterReducer";
import { login, logout } from "./redux/authReducer";
import { useCallback, useEffect } from "react";


const Counter = () => {
    const counter = useSelector((state) => state.counter.value);
    const auth = useSelector((state) => state.auth.isLoggedIn);

    const dispatch = useDispatch();

    const counterHandler = useCallback((type, value) => {
        if(type === "increment"){
            console.log("value+++>>>", value)
            dispatch(increment(value));
        }
        else{
            console.log("value>>>", value)
          dispatch(decrement(value));
        }
    },[dispatch])
 

    useEffect(() => {
         counterHandler("increment", 10)
  
    },[counterHandler])



    const loggedIn = () => {
        return auth;
    }
    
    const logHandler = (status) => {
        console.log({status});
        if (status) {
            dispatch(logout());
        }
        else{
            dispatch(login());
        }
    }


    return(
        <View  style={styles.view}>
        {loggedIn() &&(
            <View>
                      <Pressable onPress={() => counterHandler("decrement", 3)}>
                      <Text style={styles.text}>-</Text>
                  </Pressable>
                  <Text style={styles.text}>Counter : {counter}</Text>
                  <Pressable onPress={() => counterHandler("increment", 3)}>
                      <Text style={styles.text}>+</Text>
                  </Pressable>
                  </View>
        )}
       
        <View >
        <Pressable onPress={() => logHandler(loggedIn())}>
                <Text style={styles.text}>{loggedIn() ? "logout" : "login" }</Text>
            </Pressable>
        </View>
        </View>
    );
}


export default Counter;

const styles = StyleSheet.create({
    view:{
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        marginHorizontal: 20
    },
});