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
import RNDateTimePicker from "@react-native-community/datetimepicker";


const AddEditEventScreen = props => {
    const eventId = props.navigation.getParam('eventId')
    /*
    returns an array with the single object, index 0
     */
    const eventObject = EVENTS.find(event => event.id === eventId);


    const [selectedRange, setRange] = useState({});
    const [showStart, setShowStart] = useState(false);
    const [showEnd, setShowEnd] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const onSelectDateHandler = (range) => {
        // const day = parseInt((range.firstDate.slice(0,2)));
        // const month = parseInt(range.firstDate.slice(3,5));
        // const year = parseInt(range.firstDate.slice(6));
        // console.log(day)
        // console.log(month)
        // console.log(year)
        // const newStartDate = new Date(year, month, day )
        // const mockDate = new Date(2021,8,6)
        // console.log(mockDate);
        const date = moment(range.firstDate, "DD-MM-YYYY").toDate()
        console.log(date)
        console.warn(date)

        setRange(range);
    }

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = (date) => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setStartDate(date);
        console.log(date);
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    /**
     * form state
     * if evenObject is true/defined then loads the date, else generates new initial value
     */
    const [title, setTitle] = useState(eventObject ? eventObject.title : '')
    const [imageUrl, setImageUrl] = useState(eventObject ? eventObject.image : '')
    const [type, setType] = useState(eventObject ? eventObject.type : '')
    const [description, setDescription] = useState(eventObject ? eventObject.description : '')
    const [location, setLocation] = useState(eventObject ? eventObject.location : '')
    const [organization, setOrganization] = useState(eventObject ? eventObject.organization : '')
    const [evetTimeDetails, setEventTimeDetails] = useState('')


    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        console.warn(currentDate)
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
        console.log('clicked')


    };

    const showTimepicker = () => {
        showMode('time');
        console.log('clicked')

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
                        value={title}
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
                        value={imageUrl}
                        id="imageUrl"
                        label="Image Url"
                        errorText="Please enter a valid image url!"
                        keyboardType="default"
                        returnKeyType="next"
                        onInputChange={() => {
                        }}
                        required
                    />
                    <Text>Location</Text>
                    <TextInput
                        value={location}
                        id="location"
                        label="location"
                        errorText="Please enter a valid image url!"
                        keyboardType="default"
                        returnKeyType="next"
                        onInputChange={() => {
                        }}
                        required
                    />
                    <View style={styles.container}>
                        <View style={styles.eventTimeContainer}>
                            <Text style={styles.timeText}>Start</Text>
                            <View style={styles.icons}>
                                <Ionicons name='calendar-outline' size={32} onPress={showDatepicker}/>
                                <Ionicons name='timer-outline' size={32} onPress={showTimepicker}/>
                            </View>
                        </View>
                        <View style={styles.eventTimeContainer}>
                            <Text style={styles.timeText}>End</Text>
                            <View style={styles.icons}>
                                <Ionicons name='calendar-outline' size={32} onPress={() => {
                                }}/>
                                <Ionicons name='timer-outline' size={32} onPress={() => {
                                }}/>
                            </View>
                        </View>
                    </View>

                    {show && (
                        <RNDateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}

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
    const eventId = navData.navigation.getParam('eventId');

    return {
        headerStyle: {
            backgroundColor: Colors.accentColor
        },
        /**
         * eventId is passed on as param on
         * if eventId != undefined then header title will change accordingly
         */
        headerTitle: eventId ? 'Edit Event' : 'Add Event',
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
            width: '50%',
        },
        icons: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignContent: 'space-between'
        },
        container: {
            flexDirection: 'row'
        },
        timeText: {
            textAlign: 'center',
        }
    }
)

export default AddEditEventScreen;
