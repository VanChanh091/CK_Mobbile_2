import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Appbar, Avatar, PaperProvider } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const HomeScreen = () => {
  const [highlight, setHighlight] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  
  const getData = () => {
    axios
      .get(`https://6627001fb625bf088c071863.mockapi.io/highlight`)
      .then((response) => {
        setHighlight(response.data);
        console.log("Data highlight: ", highlight);
      })
      .catch((error) => {
        console.log("error get highlight(31): ", error);
      });
  };

  const deleteHighlight = (id) => {
    axios
      .delete(`https://6627001fb625bf088c071863.mockapi.io/highlight/${id}`)
      .then(() => {
        console.log("Delete success");
        getData();
      });
  };

  const listHighlight = ({ item }) => (
    <View
      style={{
        width: "100%",
        height: 160,
        borderBottomWidth: 1,
        borderColor: "gray",
        marginTop: 10,
      }}
    >
      <View style={{ flex: 3, flexDirection: "row" }}>
        <View style={{ flex: 2.8 }}>
          <Text style={{ color: "gray", fontSize: 13, marginTop: 10 }}>
            {item.web}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 5 }}>
            {item.title}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: -10,
          }}
        >
          <Image
            source={item.image}
            style={{ width: 80, height: 80, resizeMode: "contain" }}
          />
        </View>
      </View>
      <View style={{ flex: 1.2 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "gray", fontSize: 17 }}>{item.time}</Text>
          <TouchableOpacity
          onPress={() => deleteHighlight(item.id)}
          >
            <Ionicons name="trash-outline" size={28} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const listNew = ({ item }) => (
    <View
      style={{
        height: "80%",
        width: 270,
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
      }}
    >
      <View style={{ width: "90%", height: "100%" }}>
        <Text style={{ color: "gray", fontSize: 14, marginTop: 10 }}>
          {item.web}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 8 }}>
          {item.title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 12,
          }}
        >
          <Text style={{ color: "gray", fontSize: 17 }}>{item.time}</Text>
          <TouchableOpacity>
            <Ionicons
              name="ellipsis-horizontal-outline"
              size={25}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <PaperProvider>
      <Appbar.Header elevated="true" style={{ backgroundColor: "white" }}>
        {/* <Appbar.BackAction /> */}
        {/* <Appbar.Action icon="dots-vertical" onPress={() => console.log("Pressed")} /> */}
        <Appbar.Action
          icon="menu"
          size={30}
          onPress={() => console.log("Pressed")}
        />
        <Appbar.Content title="For you" />
        <Appbar.Action
          icon="magnify"
          size={30}
          onPress={() => console.log("search")}
          style={{ marginRight: 5 }}
        />
        <Avatar.Image
          size={40}
          source={require("../img/avt.png")}
          style={{ marginRight: 10 }}
        />
      </Appbar.Header>

      <ScrollView>
        <View
          style={{
            width: "100%",
            height: 450,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ width: "90%", height: "100%" }}>
            <View style={{ flex: 1 }}>
              <Text style={{ color: "gray", fontSize: 14, marginTop: 20 }}>
                Monday, September 12
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 25 }}>
                  Top Stories
                </Text>
                <TouchableOpacity>
                  <Text style={{ fontSize: 16, color: "blue" }}>See all</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex: 2.5 }}>
              <Image
                source={require("../img/bgGreen.png")}
                style={{ borderRadius: 5, marginTop: 5 }}
              />
            </View>
            <View style={{ flex: 2 }}>
              <Text style={{ color: "gray", fontSize: 13, marginTop: 10 }}>
                sometechjournal.co
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 5 }}>
                Tech giant announces major investment in renewable energy
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text style={{ color: "gray", fontSize: 17 }}>3h ago</Text>
                <TouchableOpacity>
                  <Ionicons
                    name="ellipsis-horizontal-outline"
                    size={25}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 35,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <Image source={require("../img/group.png")} />
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: 500,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ width: "90%", height: "100%" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 25 }}>
                Highlights
              </Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 16, color: "blue" }}>See all</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={highlight}
              keyExtractor={(item) => item.id}
              renderItem={listHighlight}
            />
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: 600,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ width: "90%", height: "100%" }}>
            <View style={{ flex: 1.5 }}>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  width: "100%",
                  height: 50,
                }}
              >
                <Image source={require("../img/fire.png")} />
                <Text
                  style={{ fontWeight: "bold", fontSize: 27, marginLeft: 10 }}
                >
                  Trending
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 180,
                  flexDirection: "row",
                  backgroundColor: "#f2f2fe",
                  borderRadius: 5,
                }}
              >
                <View style={{ flex: 6 }}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#535ce8",
                        borderRadius: 20,
                        width: 100,
                        height: 35,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 15,
                      }}
                    >
                      <Text style={{ color: "white" }}>#GlobalCup</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 2 }}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 17,
                        marginLeft: 18,
                        lineHeight: 30,
                      }}
                    >
                      Underdog team shocks the world with stunning victory
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 4,
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Image source={require("../img/soccer_1.png")} />
                </View>
              </View>
            </View>
            <View style={{ flex: 2 }}>
              <Image
                source={require("../img/soccer_2.png")}
                style={{ marginTop: 5 }}
              />
              <Text style={{ color: "gray", fontSize: 13, marginTop: 10 }}>
                sporty.co
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 5 }}>
                Celebrations erupt globally as underdog team's triumph resonates
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text style={{ color: "gray", fontSize: 17 }}>5h ago</Text>
                <TouchableOpacity>
                  <Ionicons
                    name="ellipsis-horizontal-outline"
                    size={25}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: 260,
          }}
        >
          <View
            style={{
              flex: 2.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FlatList
              keyExtractor={(item) => item.id}
              horizontal={true}
              renderItem={listNew}
              data={highlight}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderBottomWidth: 1,
              borderColor: "gray",
              marginTop: -10,
            }}
          >
            <View
              style={{
                width: "90%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: "100%",
                  height: 50,
                  backgroundColor: "#f3f4f6",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <Text style={{ fontSize: 18 }}>Read full coverage</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: 350,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ width: "90%", height: "100%" }}>
            <Image
              source={require("../img/man.png")}
              style={{ borderRadius: 5, marginTop: 15 }}
            />
            <Text style={{ color: "gray", fontSize: 13, marginTop: 10 }}>
              moremovie.co
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 5 }}>
              Award-winning actor to star in upcoming historical drama
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text style={{ color: "gray", fontSize: 17 }}>yesterday</Text>
              <TouchableOpacity>
                <Ionicons
                  name="ellipsis-horizontal-outline"
                  size={25}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: 720,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ width: "90%", height: "100%" }}>
            <View
              style={{
                flex: 1.2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: "88%",
                  borderWidth: 1,
                  borderColor: "gray",
                  flexDirection: "row",
                  borderRadius: 10,
                  marginTop: 10,
                }}
              >
                <View style={{ flex: 2 }}>
                  <View style={{ flex: 2 }}>
                    <Text
                      style={{
                        fontSize: 22,
                        marginLeft: 20,
                        lineHeight: 30,
                        marginTop: 20,
                      }}
                    >
                      Get curated news directly to your inbox
                    </Text>
                    <Text
                      style={{
                        color: "gray",
                        marginLeft: 20,
                        fontSize: 16,
                        marginTop: 5,
                        lineHeight: 25,
                      }}
                    >
                      Catch up with the world first thing in the morning
                    </Text>
                  </View>
                  <View style={{ flex: 1, justifyContent: "center" }}>
                    <TouchableOpacity
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#535be9",
                        borderRadius: 5,
                        width: 130,
                        height: 40,
                        marginLeft: 20,
                      }}
                    >
                      <Text style={{ fontSize: 15, color: "white" }}>
                        1-month free trial
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.8,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../img/phone.png")}
                    style={{ marginBottom: -40 }}
                  />
                </View>
              </View>
            </View>
            <View style={{ flex: 1.8 }}>
              <Image
                source={require("../img/manyPeople.png")}
                style={{ borderRadius: 5, marginTop: 20 }}
              />
              <Text style={{ color: "gray", fontSize: 13, marginTop: 10 }}>
                finreport.co
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 5 }}>
                Global trade agreement shift as new tariffs take effect
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text style={{ color: "gray", fontSize: 17 }}>yesterday</Text>
                <TouchableOpacity>
                  <Ionicons
                    name="ellipsis-horizontal-outline"
                    size={25}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  width: "100%",
                  height: 50,
                  backgroundColor: "#f3f4f6",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  marginTop: 25,
                }}
              >
                <Text style={{ fontSize: 18 }}>Read full coverage</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </PaperProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
