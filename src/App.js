import { createElement, Component, render, findDOMNode } from "rax";
import View from "rax-view";
import Touchable from "rax-touchable";
const native = require("@weex-module/test");
import Text from "rax-text";
import Image from "rax-image";
import arrowImg from "./assets/arrow3x.png";

import styles from "./App.css";
import BoxButton from "../box-ui/common/button";

class App extends Component {
  state = {
    isLogin: false
  };

  componentDidMount = () => {
    native.checkLogin(re => {
      if (re) {
        this.setState({
          isLogin: true
        });
      }
    });
  };

  onLogout = () => {
    this.setState({
      isLogin: false
    });
    native.logout("");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.setting_list_container}>
          <Touchable
            onPress={() => {
              native.push("ccnubox://about");
            }}
          >
            <View style={[styles.setting_list_item, styles.setting_list_item_frist]}>
              <Text style={styles.setting_list_item_text}>关于</Text>
              <Image  style={styles.arrow} src={arrowImg} />
            </View>
          </Touchable>
          <Touchable
            onPress={() => {
              native.push("ccnubox://feedback");
            }}
          >
            <View
              style={[styles.setting_list_item]}
            >
              <Text style={styles.setting_list_item_text}>意见反馈</Text>
              <Image style={styles.arrow} src={arrowImg} />
            </View>
          </Touchable>
        </View>
        {this.state.isLogin ? (
          <Touchable onPress={this.onLogout}>
            <View style={styles.logout_button}>
              <Text style={styles.logout_button_text}>退出登录</Text>
            </View>
          </Touchable>
        ) : null}
      </View>
    );
  }
}

export default App;
