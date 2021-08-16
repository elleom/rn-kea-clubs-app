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

import {EVENTS} from "../../data/dummy-data";
import {Ionicons} from "@expo/vector-icons";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {useDispatch, useSelector} from "react-redux";
import * as eventActions from '../../store/actions/EventsActions'


const AddEditEventScreen = props => {

    const selectedEventId = props.navigation.getParam('eventId');
    /*
    returns an array with the single object, index 0
     */
    const editedEvent = useSelector(state => state.events.userEvents.find(event => event.id = selectedEventId))

    /**
     * form state
     * if evenObject is true/defined then loads the date, else generates new initial value
     */
    console.log(editedEvent)
    const [title, setTitle] = useState(editedEvent ? editedEvent.title : 'title')
    const [imageUrl, setImageUrl] = useState(editedEvent ? editedEvent.imageUrl : 'image test')
    const [type, setType] = useState(editedEvent ? editedEvent.type : 'Event')
    const [description, setDescription] = useState(editedEvent ? editedEvent.description : 'test')
    const [location, setLocation] = useState(editedEvent ? editedEvent.location : 'Somewhere')
    const [organization, setOrganization] = useState(editedEvent ? editedEvent.organization : 'KEA Events')
    const [eventTimeDetails, setEventTimeDetails] = useState('')

    const eventId = props.navigation.getParam('eventId')


    const dispatch = useDispatch();

    const submitHandler = useCallback(() => {
        dispatch(
            eventActions.createEvent(
                '1',
                'event',
                title,
                description,
                imageUrl,
                new Date().toString(),
                new Date().toString(),
                location,
                organization
            )
        );

        props.navigation.goBack();
    }, [dispatch]);

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
                        value={description}
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

    const submitForm = navData.navigation.getParam('submit');

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
