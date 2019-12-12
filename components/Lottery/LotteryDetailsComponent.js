import React, { Component } from "react";
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList
} from "react-native";

export default class LotteryDetailsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.data,
            win_list: true,
            first_list: false,
        }
    }

    _renderWinLotteryList({ item, index }) {
        let font;
        if (item.name === "ĐB") font = "700"
        else font = "normal"
        return (
            <View style={{ flex: 1, flexDirection: "row", borderColor: "gray", borderTopWidth: 0.5, paddingTop: 10, paddingBottom: 10, backgroundColor: "#282c34" }}>
                <Text style={{ flex: 1, textAlign: "center", fontWeight: "700", color: "#fff" }}>{item.name}</Text>
                <Text style={{ flex: 8, textAlign: "center", color: "#fff", fontWeight: font }}>{item.number}</Text>
                <Text style={{ flex: 1 }}></Text>
            </View>
        )

    }

    _renderFirstLotteryList({ item, index }) {

        return (
            <View style={{ flex: 1, flexDirection: "row", borderColor: "gray", borderTopWidth: 0.5, paddingTop: 10, paddingBottom: 10, backgroundColor: "#282c34" }}>
                <Text style={{ flex: 1, textAlign: "center", fontWeight: "700", color: "#fff" }}>{item.name}</Text>
                <Text style={{ flex: 8, textAlign: "center", color: "#fff" }}>{item.number}</Text>
                <Text style={{ flex: 1 }}></Text>
            </View>
        )

    }

    render() {

        let source_win_list;
        if (this.state.win_list) source_win_list = require("../../assets/images/icon_drop_down.png");
        else source_win_list = require("../../assets/images/icon_drop_right.png")
        let source_first_list;
        if (this.state.first_list) source_first_list = require("../../assets/images/icon_drop_down.png");
        else source_first_list = require("../../assets/images/icon_drop_right.png")

        return (
            <View style={{ flex: 1, margin: 10 }}>

                <View style={{ flex: 1, flexDirection: "row", marginTop: 20 }}>
                    <View style={{ flex: 1 }}>
                        <Image
                            source={require("../../assets/images/bell.png")}
                            style={{ width: 20, height: 20 }}
                            tintColor="white"></Image>
                    </View>
                    <Text style={{ flex: 8, textAlign: "center", color: "#fff" }}> {this.state.item.position}</Text>

                    <TouchableOpacity
                        onPress={() => this.setState({ win_list: !this.state.win_list })}
                        style={{ flex: 1, alignItems: "flex-end" }}
                    >
                        <Image
                            source={source_win_list}
                            style={{ width: 18, height: 18 }}
                            tintColor="white"></Image>
                    </TouchableOpacity>
                </View>
                {
                    this.state.win_list &&
                    <FlatList
                        style={{ marginTop: 10 }}
                        data={this.state.item.win}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this._renderWinLotteryList}
                    />
                }


                <View style={{ flex: 1, flexDirection: "row", marginTop: 20 }}>
                    <View style={{ flex: 1 }}>
                        <Image
                            source={require("../../assets/images/bell.png")}
                            style={{ width: 20, height: 20 }}
                            tintColor="white"></Image>
                    </View>
                    <Text style={{ flex: 8, textAlign: "center", color: "#fff" }}> LOTO {this.state.item.position}</Text>
                    <TouchableOpacity
                        style={{ flex: 1, alignItems: "flex-end" }}
                        onPress={() => this.setState({ first_list: !this.state.first_list })}
                    >
                        <Image
                            source={source_first_list}
                            style={{ width: 18, height: 18 }}
                            tintColor="white"></Image>
                    </TouchableOpacity>
                </View>
                {
                    this.state.first_list &&
                    <FlatList
                        style={{ marginTop: 10 }}
                        data={this.state.item.first}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this._renderFirstLotteryList}
                    />
                }
            </View>
        )

    }
}