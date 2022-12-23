import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_2_622}>
        <View style={styles.View_2_623} />
      </View>
      <View style={styles.View_2_624}>
        <View style={styles.View_2_625} />
      </View>
      <View style={styles.View_2_626} />
      <View style={styles.View_2_627}>
        <View style={styles.View_I2_627_170_1853}>
          <Text style={styles.Text_I2_627_170_1853}>Email</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a480a29f-138e-416a-be4f-a0b99f43d4c5"
        }}
        style={styles.ImageBackground_2_628}
      />
      <View style={styles.View_2_629}>
        <Text style={styles.Text_2_629}>Forgot Password?</Text>
      </View>
      <View style={styles.View_2_630}>
        <Text style={styles.Text_2_630}>Remember me</Text>
      </View>
      <View style={styles.View_2_631} />
      <View style={styles.View_2_632}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b8e69a1-493b-4059-8071-db17f49c0ce7"
          }}
          style={styles.ImageBackground_I2_632_523_4869}
        />
        <View style={styles.View_I2_632_523_4870}>
          <Text style={styles.Text_I2_632_523_4870}>Log In</Text>
        </View>
      </View>
      <View style={styles.View_2_633}>
        <Text style={styles.Text_2_633}>Don’t have an account? Sign up</Text>
      </View>
      <View style={styles.View_2_634}>
        <View style={styles.View_I2_634_124_252}>
          <View style={styles.View_I2_634_124_252_430_6123}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea53d6a2-1aec-401f-870b-b0d282003975"
              }}
              style={styles.ImageBackground_I2_634_124_252_430_6124}
            />
          </View>
        </View>
        <View style={styles.View_I2_634_124_243}>
          <Text style={styles.Text_I2_634_124_243}>Password</Text>
        </View>
        <View style={styles.View_I2_634_125_161}>
          <View style={styles.View_I2_634_125_161_430_6014}>
            <View style={styles.View_I2_634_125_161_430_6015}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6cc8480-dfdf-4731-8931-9d66814809a1"
                }}
                style={styles.ImageBackground_I2_634_125_161_430_6016}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71885264-8c3d-4913-bd8f-3ad29d591dc8"
                }}
                style={styles.ImageBackground_I2_634_125_161_430_6017}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_635}>
        <View style={styles.View_2_636}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0a33dba-346f-4b7b-ab40-aa566d21e733"
            }}
            style={styles.ImageBackground_2_637}
          />
          <View style={styles.View_2_638}>
            <Text style={styles.Text_2_638}>or continue with</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6e77a18-6442-4ba6-930f-82c3f6b10435"
            }}
            style={styles.ImageBackground_2_639}
          />
        </View>
        <View style={styles.View_2_640}>
          <View style={styles.View_2_641}>
            <View style={styles.View_I2_641_433_760}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7c7aba1-3969-431e-b5f5-71c293287038"
                }}
                style={styles.ImageBackground_I2_641_433_767}
              />
            </View>
          </View>
          <View style={styles.View_2_642}>
            <View style={styles.View_I2_642_136_204}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/438d86a9-b6cb-44b9-94bb-c71156f37841"
                }}
                style={styles.ImageBackground_I2_642_433_743}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_644}>
        <View style={styles.View_2_645}>
          <View style={styles.View_2_646} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/420c659c-c9e4-41dd-a6f8-f1d00b83828a"
            }}
            style={styles.ImageBackground_2_647}
          />
          <View style={styles.View_2_648} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72455081-3847-46e9-b996-a95e2259bbe6"
          }}
          style={styles.ImageBackground_2_649}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/944e98a1-5b6b-4d4d-9a05-a3da21bf2d0d"
          }}
          style={styles.ImageBackground_2_653}
        />
        <View style={styles.View_2_658}>
          <View style={styles.View_2_659}>
            <Text style={styles.Text_2_659}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_660}>
        <View style={styles.View_2_661} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("115%") },
  View_2_622: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("117%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_623: {
    width: wp("34%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(24, 23, 37, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_2_624: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("120%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_625: {
    width: wp("34%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(24, 23, 37, 1)",
    borderColor: "rgba(230, 230, 230, 1)",
    borderWidth: 1
  },
  View_2_626: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("57%")
  },
  View_2_627: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("46%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_I2_627_170_1853: {
    flexGrow: 1,
    width: wp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I2_627_170_1853: {
    color: "rgba(33, 33, 33, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_2_628: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("39%")
  },
  View_2_629: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_2_629: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.7000000000000001,
    textTransform: "none"
  },
  View_2_630: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_2_630: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_2_631: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.5
  },
  View_2_632: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("72%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_632_523_4869: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_632_523_4870: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I2_632_523_4870: {
    color: "rgba(255, 249, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_633: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("82%"),
    justifyContent: "flex-start"
  },
  Text_2_633: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.7000000000000001,
    textTransform: "none"
  },
  View_2_634: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("55%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_I2_634_124_252: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_634_124_252_430_6123: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I2_634_124_252_430_6124: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_634_124_243: {
    flexGrow: 1,
    width: wp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I2_634_124_243: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I2_634_125_161: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_634_125_161_430_6014: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_634_125_161_430_6015: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_634_125_161_430_6016: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_634_125_161_430_6017: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_635: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("89%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_636: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_637: {
    width: wp("25%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_2_638: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_2_638: {
    color: "rgba(97, 97, 97, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_2_639: {
    width: wp("25%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  View_2_640: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_641: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I2_641_433_760: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_641_433_767: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_642: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I2_642_136_204: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_642_433_743: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_644: {
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_645: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_2_646: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_2_647: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_2_648: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_2_649: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_2_653: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_2_658: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_659: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_659: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_2_660: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("113%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_661: {
    width: wp("34%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(24, 23, 37, 1)",
    borderColor: "rgba(230, 230, 230, 1)",
    borderWidth: 1
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
