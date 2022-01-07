import React, {useCallback, useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    TextInput,
    Platform
} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";
import Colors from "../../constants/Colors";

import {Ionicons} from "@expo/vector-icons";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {useDispatch, useSelector} from "react-redux";
import * as eventActions from '../../store/actions/EventsActions'


const AddEditEventScreen = props => {

    // const selectedEventId = props.navigation.getParam('eventId');

    /*
    returns an array with the single object, index 0
     */

    const dispatch = useDispatch();
    // const editedEvent = useSelector(state => state.events.userEvents.find(event => event.id = selectedEventId))
    /**
     * form state
     * if evenObject is true/defined then loads the date, else generates new initial value
     */
    // useEffect(() => {
    //     console.log(selectedEventId);
    //     console.log(editedEvent);
    // })

    // const [title, setTitle] = useState(editedEvent ? editedEvent.title : '')
    // const [imageUrl, setImageUrl] = useState(editedEvent ? editedEvent.imageUrl : '')
    // const [type, setType] = useState(editedEvent ? editedEvent.type : 'event') //HC
    // const [description, setDescription] = useState(editedEvent ? editedEvent.description : '')
    // const [location, setLocation] = useState(editedEvent ? editedEvent.location : '')
    // const [organization, setOrganization] = useState(editedEvent ? editedEvent.organization : 'Kea Events') //HC
    // const [eventTimeDetails, setEventTimeDetails] = useState('')

    const [title, setTitle] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [type, setType] = useState('event') //HC
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [organization, setOrganization] = useState({ id: 19, name: 'Kea Events'}) //HC

    const submitHandler = useCallback(async () => {
        try {
            // if (editedEvent) {
            //     console.warn('updating')
            //     await dispatch(
            //     eventActions.updateEvent(
            //         selectedEventId,
            //         type,
            //         title,
            //         description,
            //         imageUrl,
            //         new Date().toString(), //HC
            //         new Date().toString(), //HC
            //         location,
            //         organization)
            //     )
            //
            // } else {
            console.warn('creating')
            await dispatch(
                eventActions.createEvent(
                    //userID gets injected on the actionGenerator
                    type,
                    title,
                    description,
                    imageUrl,
                    new Date().toString(), //HC
                    new Date().toString(), //HC
                    location,
                    organization
                ))
            // };
        } catch (error) {
            console.warn(error.message);
        }


        props.navigation.navigate('Clubs');
        //without the dependencies then the component will reload and have them blanked
    }, [dispatch, title, description, imageUrl, location, organization]);

    useEffect(() => {
        props.navigation.setParams({submit: submitHandler});
    }, [submitHandler]);

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

    };

    const showTimepicker = () => {
        showMode('time');

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
                        onChangeText={text => {
                            setTitle(text)
                        }}
                        // required
                    />
                    <Text>Image URL</Text>
                    <TextInput
                        value={imageUrl}
                        id="imageUrl"
                        label="Image Url"
                        errorText="Please enter a valid image url!"
                        keyboardType="default"
                        returnKeyType="next"
                        onChangeText={text => {
                            setImageUrl(text)
                        }}
                        // required
                    />
                    <Text>Location</Text>
                    <TextInput
                        value={location}
                        id="location"
                        label="location"
                        errorText="Please enter a valid image url!"
                        keyboardType="default"
                        returnKeyType="next"
                        onChangeText={text => {
                            setLocation(text)
                        }}
                        // required
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
                        value={description}
                        autoCapitalize="sentences"
                        autoCorrect
                        returnKeyType='next'
                        multiline
                        numberOfLines={3}
                        onChangeText={text => {
                            setDescription(text)
                        }}
                        // required
                        minLength={5}
                    />

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

AddEditEventScreen.navigationOptions = navData => {
    const eventId = navData.navigation.getParam('eventId');

    const submitForm = navData.navigation.getParam('submit');

    return {
        headerStyle: {
            backgroundColor: Colors.accentColor
        },
        /**
         * eventId is passed on as param on
         * if eventId != undefined then header title will change accordingly
         */
        // headerTitle: eventId ? 'Edit Event' : 'Add Event',
        headerTitle: 'Add Event',

        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title='Clubs'
                iconName={'send-sharp'}
                iconSize={23}
                onPress={submitForm}/>
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
