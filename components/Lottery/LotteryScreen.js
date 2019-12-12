import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';

import LotteryNav from '../../navigation/LotteryNav';
// import { Lottery } from '../../mockData/LotteryData';
import LotteryDetailsComponent from './LotteryDetailsComponent';

export default class LotteryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LotteryItem: {
                "position": "Miền Bắc",
                "date": "19-11-2019",
                "win": [
                    {
                        "name": "ĐB",
                        "number": "19942"
                    },
                    {
                        "name": "1",
                        "number": "50640"
                    },
                    {
                        "name": "2",
                        "number": "30233-16299"
                    },
                    {
                        "name": "3",
                        "number": "75147-88083-16886-87684-73604-16466"
                    },
                    {
                        "name": "4",
                        "number": "3898-0381-1744-4280"
                    },
                    {
                        "name": "5",
                        "number": "5527-1669-5640-6218-1409-1739"
                    },
                    {
                        "name": "6",
                        "number": "158-558-731"
                    },
                    {
                        "name": "7",
                        "number": "51-98-64-63"
                    }
                ],
                "first": [
                    {
                        "name": 0,
                        "number": "04,09"
                    },
                    {
                        "name": 1,
                        "number": "18"
                    },
                    {
                        "name": 2,
                        "number": "27"
                    },
                    {
                        "name": 3,
                        "number": "33,39,31"
                    },
                    {
                        "name": 4,
                        "number": "42,40,47,44,40"
                    },
                    {
                        "name": 5,
                        "number": "58,58,51"
                    },
                    {
                        "name": 6,
                        "number": "66,69,64,63"
                    },
                    {
                        "name": 7,
                        "number": ""
                    },
                    {
                        "name": 8,
                        "number": "83,86,84,81,80"
                    },
                    {
                        "name": 9,
                        "number": "99,98,98"
                    }
                ]
            }
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <LotteryNav />
            )
        }
    }
    render() {
        return (
            <View style={{ backgroundColor: "#000", flex: 1, }}>
                <ScrollView >

                    <View style={{ marginTop: 20 }}>
                        <Text style={{ textAlign: "center", color: 'red' }}>{this.state.LotteryItem.date}</Text>
                    </View>
                    <LotteryDetailsComponent data={this.state.LotteryItem} />
                </ScrollView>
            </View>
        );
    }
}
