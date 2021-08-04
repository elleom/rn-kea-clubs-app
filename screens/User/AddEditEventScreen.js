import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, KeyboardAvoidingView, TextInput, Platform} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";
import Colors from "../../constants/Colors";

import {EVENTS} from "../../data/dummy-data";
import DateRangePicker from "rnv-date-range-picker";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {Ionicons} from "@expo/vector-icons";

const AddEditEventScreen = props => {
    const eventId = props.navigation.getParam('eventId')
    const [selectedRange, setRange] = useState({});
    const [showStart, setShowStart] = useState(false);
    const [showEnd, setShowEnd] = useState(false);

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };


    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={"padding"} keyboardVerticalOffset={100}>
            <ScrollView>
                <View style={styles.form}>
                    <Text>Event title</Text>
                    <TextInput
                        id="title"
                        label="Event name"
                        errorText="Please enter a valid title!"
                        keyboardType="default"
                        autoCapitalize="sentences"
                        autoCorrect
                        returnKeyType="next"
                        onInputChange={() => {
                        }}
                        initialValue={() => {
                        }}
                        initiallyValid={() => {
                        }}
                        required
                    />
                    <Text>Image URL</Text>
                    <TextInput
                        id="imageUrl"
                        label="Image Url"
                        errorText="Please enter a valid image url!"
                        keyboardType="default"
                        returnKeyType="next"
                        onInputChange={() => {
                        }}
                        initialValue={() => {
                        }}
                        initiallyValid={() => {
                        }}
                        required
                    />

                    <DateRangePicker
                        onSelectDateRange={(range) => {
                            setRange(range);
                        }}
                        responseFormat="YYYY-MM-DD"
                        minDate={moment()}
                        maxDate={moment().add(30, "days")}
                    />


                    <View style={styles.container}>
                        <Text>first date: {selectedRange.firstDate}</Text>
                        <Text>second date: {selectedRange.secondDate}</Text>
                    </View>
                    <View style={styles.eventTimeContainer}>
                        <View style={styles.eventTime}>
                            <Text>Start</Text>
                            <Ionicons name='timer-outline' size={40} onPress={showDatePicker}/>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="time"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                        </View>
                        <View>
                            <Text>Start</Text>
                            <Ionicons name='timer-outline' size={40} onPress={showDatePicker}/>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="time"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                        </View>
                    </View>


                    <Text>Description</Text>
                    <TextInput
                        id="description"
                        label="Description"
                        errorText="Please enter a valid description!"
                        keyboardType="default"
                        autoCapitalize="sentences"
                        autoCorrect
                        multiline
                        numberOfLines={3}
                        // onInputChange={inputChangeHandler}
                        // initialValue={editedProduct ? editedProduct.description : ''}
                        // initiallyValid={!!editedProduct}
                        required
                        minLength={5}
                    />

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

AddEditEventScreen.navigationOptions = navData => {
    return {
        headerStyle: {
            backgroundColor: Colors.accentColor
        },
        headerTitle: 'Events',
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title='Clubs'
                iconName={'send-sharp'}
                iconSize={23}
                onPress={() => {

                }}/>
        </HeaderButtons>,
        headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title='Clubs'
                iconName={'ios-menu'}
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}/>
        </HeaderButtons>,

    }
}

const styles = StyleSheet.create({
        text: {
            marginTop: 50,
            alignItems: 'center'
        },
        eventTimeContainer: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignContent: 'space-between'
        },
        eventTime: {}
    }
)

export default AddEditEventScreen;
