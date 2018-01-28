/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    Component,
} from 'react';

import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ImageBackground,
    NativeEventEmitter,
    NativeModules,
    PermissionsAndroid,
    ListView,
    ScrollView,
    AppState,
    FlatList,
    Platform,
    TextInput,
    Dimensions,
    Alert,
    TouchableOpacity,
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';

import BleManager from 'react-native-ble-manager';
import BleModule from './BleModule';
//import testBlueTooth from './testBlueTooth'
//确保全局只有一个BleManager实例，BleModule类保存着蓝牙的连接信息
GLOBAL.BluetoothManager = new BleModule();
let TimerMixin = require('react-timer-mixin');
GLOBAL.index_ble = '';
GLOBAL.device = '';

export default class App extends Component<{}> {

    render() {
        return (
            <XingYunApp/>
        );
    }
}

//一级页面
class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Fukuda智能平台',
        gesturesEnabled: true,
        visible: 'false',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground style={styles.container}
                             source={require('./src/background.png')}
            >
                <View style={{flex: 5}}/>

                <View style={{flex: 10, flexDirection: 'row'}}>
                    <Button2_93T_1 name='DIY1' navigate={navigate}/>
                </View>

                <View style={{flex: 10, flexDirection: 'row'}}>

                    <ImageBackground style={styles.mybutton}
                                     source={require('./src/fle445.png')}>
                        <BasicButton name='fle445' navigate={navigate}/>
                    </ImageBackground>
                </View>

                {/*<View style={{flex: 10, flexDirection: 'row'}}>*/}

                {/*<ImageBackground style={styles.mybutton}*/}
                {/*source={require('./src/frd800.png')}>*/}
                {/*<BasicButton name='frd800' navigate={navigate}/>*/}
                {/*</ImageBackground>*/}
                {/*</View>*/}

                <View style={{flex: 10, flexDirection: 'row'}}>

                    <ImageBackground style={styles.mybutton}
                                     source={require('./src/fre203.png')}>
                        <BasicButton name='fre203' navigate={navigate}/>
                    </ImageBackground>
                </View>

                {/*<View style={{flex: 10, flexDirection: 'row'}}>

                    <ImageBackground style={styles.mybutton}
                                     source={require('./src/txbt.jpg')}>
                        <BasicButton name='test' navigate={navigate}/>
                    </ImageBackground>
                </View>*/}

                <View style={{flex: 30}}/>

            </ImageBackground>
        );
    }
}

//激光控制
class laserControlScreen_93T_1 extends React.Component {
    static navigationOptions = {
        title: '激光控制',
    };
    // componentDidMount() {
    //     //这里获取从FirstPageComponent传递过来的参数: id
    //     this.setState({
    //         index:this.state.index,
    //     });
    // }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground style={styles.container}
                             source={require('./src/background.png')}
            >

                <View style={{flex: 10}}/>

                <View style={{flex: 20, flexDirection: 'row'}}>
                    <View style={{flex: 1}}/>
                    <ImageBackground style={styles.mybutton}
                                     source={require('./src/remote.png')}>
                        <BasicButton name='Remote' navigate={navigate}/>
                    </ImageBackground>
                    <ImageBackground style={styles.mybutton}
                                     source={require('./src/unremote.png')}>
                        <BasicButton name='unRemote' navigate={navigate}/>
                    </ImageBackground>
                    <View style={{flex: 1}}/>

                </View>

                <View style={{flex: 20, flexDirection: 'row'}}>
                    <View style={{flex: 1}}/>
                    <ImageBackground style={styles.mybutton}
                                     source={require('./src/93TH.png')}>
                        <BasicButton name='H_93T_1' navigate={navigate}/>
                    </ImageBackground>
                    <ImageBackground style={styles.mybutton}
                                     source={require('./src/93TV1.png')}>
                        <BasicButton name='V1_93T_1' navigate={navigate}/>
                    </ImageBackground>
                    <View style={{flex: 1}}/>
                </View>

                <View style={{flex: 20, flexDirection: 'row'}}>
                    <View style={{flex: 1}}/>
                    <ImageBackground style={styles.mybutton}
                                     source={require('./src/93TV2.png')}>
                        <BasicButton name='H360_93T_1' navigate={navigate}/>
                    </ImageBackground>
                    <ImageBackground style={styles.mybutton}
                                     source={require('./src/93TV1H1.png')}>
                        <BasicButton name='V2_93T_1' navigate={navigate}/>
                    </ImageBackground>
                    <View style={{flex: 1}}/>
                </View>

                <View style={{flex: 20, flexDirection: 'row'}}>
                    <View style={{flex: 1}}/>
                    <ImageBackground style={styles.mybutton}
                                     source={require('./src/93TV.png')}>
                        <BasicButton name='HV_93T_1' navigate={navigate}/>
                    </ImageBackground>
                    <ImageBackground style={styles.mybutton}
                                     source={require('./src/93THV.png')}>
                        <BasicButton name='V_93T_1' navigate={navigate}/>
                    </ImageBackground>
                    <View style={{flex: 1}}/>
                </View>

                <View style={{flex: 2}}/>

            </ImageBackground>
        );
    }
}//93T-1 激光控制页面

class laserControllScreen_FLE445 extends React.Component {
    static navigationOptions = {
        title: '激光控制',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground style={styles.container}
                             source={require('./src/background.png')}
            >

                <View style={{flex: 10}}/>

                <View style={{flex: 20, flexDirection: 'row'}}>
                    <View style={{flex: 1}}/>
                    <ImageBackground style={styles.mybutton}
                                     source={require('./src/remote.png')}>
                        <BasicButton name='Remote' navigate={navigate}/>
                    </ImageBackground>
                    <ImageBackground style={styles.mybutton}
                                     source={require('./src/unremote.png')}>
                        <BasicButton name='unRemote' navigate={navigate}/>
                    </ImageBackground>
                    <View style={{flex: 1}}/>
                </View>

                <View style={{flex: 20, flexDirection: 'row'}}>
                    <View style={{flex: 1}}/>
                    <ImageBackground style={styles.mybutton}
                                     source={require('./src/h.png')}>
                        <BasicButton name='H_FLE445' navigate={navigate}/>
                    </ImageBackground>
                    <ImageBackground style={styles.mybutton}
                                     source={require('./src/v1.png')}>
                        <BasicButton name='V1_FLE445' navigate={navigate}/>
                    </ImageBackground>
                    <View style={{flex: 1}}/>
                </View>

                <View style={{flex: 20, flexDirection: 'row'}}>
                    <View style={{flex: 1}}/>
                    <ImageBackground style={styles.mybutton}
                                     source={require('./src/h360.png')}>
                        <BasicButton name='H360_FLE445' navigate={navigate}/>
                    </ImageBackground>
                    <ImageBackground style={styles.mybutton}
                                     source={require('./src/v2.png')}>
                        <BasicButton name='V2_FLE445' navigate={navigate}/>
                    </ImageBackground>
                    <View style={{flex: 1}}/>
                </View>

                <View style={{flex: 20, flexDirection: 'row'}}>
                    <View style={{flex: 1}}/>
                    <ImageBackground style={styles.mybutton}
                                     source={require('./src/hv.png')}>
                        <BasicButton name='HV_FLE445' navigate={navigate}/>
                    </ImageBackground>
                    <ImageBackground style={styles.mybutton}
                                     source={require('./src/v.png')}>
                        <BasicButton name='V_FLE445' navigate={navigate}/>
                    </ImageBackground>
                    <View style={{flex: 1}}/>
                </View>

                <View style={{flex: 1}}/>

            </ImageBackground>
        );
    }
}

//亮度控制
class brightnessControl extends React.Component {
    static navigationOptions = {
        title: '亮度控制',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground style={styles.container}
                             source={require('./src/background.png')}
            >
                <View style={{flex: 1}}>

                </View>
                <View style={{flex: 2, flexDirection: 'row'}}>
                    <View style={{flex: 1}}/>
                    <ImageBackground style={styles.brightnessBt}
                                     source={require('./src/brightness0.png')}>
                        <BasicButton name='brightness0' navigate={navigate}/>
                    </ImageBackground>
                    <View style={{flex: 1}}/>
                </View>
                <View style={{flex: 2, flexDirection: 'row'}}>
                    <View style={{flex: 1}}/>
                    <ImageBackground style={styles.brightnessBt}
                                     source={require('./src/brightness1.png')}>
                        <BasicButton name='brightness1' navigate={navigate}/>
                    </ImageBackground>
                    <View style={{flex: 1}}/>
                </View>
                <View style={{flex: 2, flexDirection: 'row'}}>
                    <View style={{flex: 1}}/>
                    <ImageBackground style={styles.brightnessBt}
                                     source={require('./src/brightness2.png')}>
                        <BasicButton name='brightness2' navigate={navigate}/>
                    </ImageBackground>
                    <View style={{flex: 1}}/>
                </View>


                <View style={{flex: 5}}/>

            </ImageBackground>
        );
    }
}

//坡度控制
class slopeControlScreen_FLE445 extends React.Component {
    static navigationOptions = {
        title: '坡度控制',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground style={styles.container}
                             source={require('./src/background.png')}
            >
                <View style={{flex: 20}}>

                </View>

                <View style={{flex: 20, flexDirection: 'row'}}>
                    <View style={{flex: 1}}/>
                    <ImageBackground style={[styles.mybutton1, {flex: 3}]}
                                     source={require('./src/xdirection.png')}>
                        <BasicButton name='XDirection_FLE445' navigate={navigate}/>
                    </ImageBackground>
                    <ImageBackground style={[styles.mybutton1, {flex: 3}]}
                                     source={require('./src/ydirection.png')}>
                        <BasicButton name='YDirection_FLE445' navigate={navigate}/>
                    </ImageBackground>
                    <View style={{flex: 1}}/>
                </View>

                <View style={{flex: 20, flexDirection: 'row'}}>
                    <View style={{flex: 1}}/>
                    <ImageBackground style={[styles.mybutton1, {flex: 3}]}
                                     source={require('./src/youqin.png')}>
                        <BasicButton name='youqin_FLE445' navigate={navigate}/>
                    </ImageBackground>
                    <ImageBackground style={[styles.mybutton1, {flex: 3}]}
                                     source={require('./src/zuoqin.png')}>
                        <BasicButton name='zuoqin_FLE445' navigate={navigate}/>
                    </ImageBackground>
                    <View style={{flex: 1}}/>
                </View>


                <View style={{flex: 10}}/>

            </ImageBackground>
        );
    }
}

class testBlueTooth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            scaning: false,
            isConnected: false,
            text: '',
            writeData: '',
            receiveData: '',
            readData: '',
            isMonitoring: false,
        }
        this.bluetoothReceiveData = [];  //蓝牙接收的数据缓存
        this.deviceMap = new Map();
        this.char6 = '0000FFF6-0000-1000-8000-00805F9B34FB';//发数据
        this.char1 = '0000FFF1-0000-1000-8000-00805F9B34FB';//收数据
        this.timer = null;
        this.testSendData = 1;

    }

    componentDidMount() {
        BluetoothManager.start();  //蓝牙初始化
        this.updateStateListener = BluetoothManager.addListener('BleManagerDidUpdateState', this.handleUpdateState);
        this.stopScanListener = BluetoothManager.addListener('BleManagerStopScan', this.handleStopScan);
        this.discoverPeripheralListener = BluetoothManager.addListener('BleManagerDiscoverPeripheral', this.handleDiscoverPeripheral);
        this.connectPeripheralListener = BluetoothManager.addListener('BleManagerConnectPeripheral', this.handleConnectPeripheral);
        this.disconnectPeripheralListener = BluetoothManager.addListener('BleManagerDisconnectPeripheral', this.handleDisconnectPeripheral);
        this.updateValueListener = BluetoothManager.addListener('BleManagerDidUpdateValueForCharacteristic', this.handleUpdateValue);
    }

    componentWillUnmount() {
        this.updateStateListener.remove();
        this.stopScanListener.remove();
        this.discoverPeripheralListener.remove();
        this.connectPeripheralListener.remove();
        this.disconnectPeripheralListener.remove();
        this.updateValueListener.remove();
        if (this.state.isConnected) {
            BluetoothManager.disconnect();  //退出时断开蓝牙连接
        }
        this.timer && clearTimeout(this.timer);
    }

    //蓝牙状态改变
    handleUpdateState = (args) => {
        console.log('BleManagerDidUpdateStatea:', args);
        BluetoothManager.bluetoothState = args.state;
        if (args.state == 'on') {  //蓝牙打开时自动搜索
            this.scan();
        }
    }

    //扫描结束监听
    handleStopScan = () => {
        console.log('BleManagerStopScan:', 'Scanning is stopped');
        this.setState({scaning: false});
    }

    //搜索到一个新设备监听
    handleDiscoverPeripheral = (data) => {
        // console.log('BleManagerDiscoverPeripheral:', data);
        console.log(data.id, data.name);
        let id;  //蓝牙连接id
        let macAddress;  //蓝牙Mac地址
        if (Platform.OS == 'android') {
            macAddress = data.id;
            id = macAddress;
        } else {
            //ios连接时不需要用到Mac地址，但跨平台识别同一设备时需要Mac地址
            //如果广播携带有Mac地址，ios可通过广播0x18获取蓝牙Mac地址，
            macAddress = BluetoothManager.getMacAddressFromIOS(data);
            id = data.id;
        }
        this.deviceMap.set(data.id, data);  //使用Map类型保存搜索到的蓝牙设备，确保列表不显示重复的设备
        this.setState({data: [...this.deviceMap.values()]});
    }

    //蓝牙设备已连接
    handleConnectPeripheral = (args) => {
        console.log('BleManagerConnectPeripheral:', args);
    }

    //蓝牙设备已断开连接
    handleDisconnectPeripheral = (args) => {
        console.log('BleManagerDisconnectPeripheral:', args);
        let newData = [...this.deviceMap.values()]
        BluetoothManager.initUUID();  //断开连接后清空UUID
        this.setState({
            data: newData,
            isConnected: false,
            writeData: '',
            readData: '',
            receiveData: '',
            text: '',
        });
    }

    //接收到新数据
    handleUpdateValue = (data) => {
        //ios接收到的是小写的16进制，android接收的是大写的16进制，统一转化为大写16进制
        let value = data.value.toUpperCase();
        this.bluetoothReceiveData.push(value);
        console.log('BluetoothUpdateValue', value);
        this.setState({receiveData: this.bluetoothReceiveData.join('')})
    }

    connect(item) {
        //当前蓝牙正在连接时不能打开另一个连接进程
        if (BluetoothManager.isConnecting) {
            console.log('当前蓝牙正在连接时不能打开另一个连接进程');
            return;
        }
        if (this.state.scaning) {  //当前正在扫描中，连接时关闭扫描
            BluetoothManager.stopScan();
            this.setState({scaning: false});
        }
        let newData = [...this.deviceMap.values()]
        newData[item.index].isConnecting = true;
        this.setState({data: newData});

        BluetoothManager.connect(item.item.id)
            .then(peripheralInfo => {
                let newData = [...this.state.data];
                newData[item.index].isConnecting = false;
                //连接成功，列表只显示已连接的设备
                this.setState({
                    data: [item.item],
                    isConnected: true
                });
            })
            .catch(err => {
                let newData = [...this.state.data];
                newData[item.index].isConnecting = false;
                this.setState({data: newData});
                this.alert('连接失败');
            })
    }

    disconnect() {
        this.setState({
            data: [...this.deviceMap.values()],
            isConnected: false
        });
        BluetoothManager.disconnect();
    }

    scan() {
        if (this.state.scaning) {  //当前正在扫描中
            BluetoothManager.stopScan();
            this.setState({scaning: false});
        }
        if (BluetoothManager.bluetoothState == 'on') {
            BluetoothManager.scan()
                .then(() => {
                    this.setState({scaning: true});
                }).catch(err => {

            })
        } else {
            BluetoothManager.checkState();
            if (Platform.OS == 'ios') {
                this.alert('请开启手机蓝牙');
            } else {
                Alert.alert('提示', '请开启手机蓝牙', [
                    {
                        text: '取消',
                        onPress: () => {
                        }
                    },
                    {
                        text: '打开',
                        onPress: () => {
                            BluetoothManager.enableBluetooth()
                        }
                    }
                ]);
            }

        }
    }


    alert(text) {
        Alert.alert('提示', text, [{
            text: '确定', onPress: () => {
            }
        }]);
    }

    write = (index) => {
        if (this.state.text.length == 0) {
            this.alert('请输入消息');
            return;
        }
        BluetoothManager.write(this.state.text, index)
            .then(() => {
                this.bluetoothReceiveData = [];
                this.setState({
                    writeData: this.state.text,
                    text: '',
                })
            })
            .catch(err => {
                this.alert('发送失败');

            })
    }

    writeWithoutResponse = (index) => {
        if (this.state.text.length == 0) {
            this.alert('请输入消息');
            return;
        }
        BluetoothManager.writeWithoutResponse(this.state.text, index)
            .then(() => {
                this.bluetoothReceiveData = [];
                this.setState({
                    writeData: this.state.text,
                    text: '',
                })
            })
            .catch(err => {
                this.alert('发送失败');
            })
    }

    read = (index) => {
        BluetoothManager.read(index)
            .then(data => {
                this.setState({readData: data});
            })
            .catch(err => {
                this.alert('读取失败');
            })
    }

    notify = (index) => {
        BluetoothManager.startNotification(index)
            .then(() => {
                this.setState({isMonitoring: true});
                this.alert('开启成功');
            })
            .catch(err => {
                this.setState({isMonitoring: false});
                this.alert('开启失败');
            })
    }

    renderItem = (item) => {//只加载fukuda设备
        let data = item.item;
        if (item.item.name == 'SimpleBLEPeripheral') {
            return (
                <View style={{flex: 1}}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        disabled={this.state.isConnected ? true : false}
                        onPress={() => {
                            //this.connect(item);
                            if (item.item.name == 'SimpleBLEPeripheral') {
                                this.connect(item);
                            } else {
                                this.alert("请连接FUKUDA设备");
                            }
                        }}
                        style={styles.exit}
                    >

                        <View style={{flexDirection: 'row', flex: 1}}>
                            <Text style={{color: 'red'}}>{data.name ? data.name : ''}</Text>
                            <Text style={{marginLeft: 50, color: 'red'}}>{data.isConnecting ? '连接中...' : ''}</Text>
                        </View>
                        <Text style={[styles.exittext, {color: 'red', flex: 1}]}>{data.id}</Text>

                    </TouchableOpacity>
                </View>
            );
        }
    }

    renderHeader = () => {
        return (

            <View style={{flex: 1}}>
                <View style={{flex: 10, flexDirection: 'row'}}>
                    <TouchableHighlight
                        activeOpacity={0.7}
                        style={[styles.mybutton, {
                            height: 40, alignItems: 'center', borderColor: '#515151',
                            borderWidth: 1,
                            borderStyle: 'solid',
                        }]}
                        onPress={this.state.isConnected ? this.disconnect.bind(this) : this.scan.bind(this)}>
                        <Text style={{flex: 1, fontSize: 18, textAlignVertical: 'center'}}>
                            {this.state.scaning ? '正在搜索中' : this.state.isConnected ? '断开蓝牙' : '搜索蓝牙'}
                        </Text>
                    </TouchableHighlight>
                </View>


                <Text style={{marginLeft: 0, marginTop: 1, color: 'red', fontSize: 10,}}>
                    {
                        this.state.isConnected ?
                            device == 1 ? '当前连接的设备为Fukuda 93T-1'
                                : device == 3 ? '当前连接的设备为Fukuda FRD800'
                                : device == 4 ? '当前连接的设备为Fukuda FRE203X-1'
                                    : device == 2 ? '当前连接的设备为Fukuda FLE445'
                                        : '当前连接的设备:'
                            : '可用设备:'
                    }
                </Text>
            </View>
        )
    }

    renderFooter = () => {
        return (
            <View style={{marginBottom: 30}}>
                {this.state.isConnected ?
                    <View style={{flex: 1}}>
                        {this.renderWriteView('写数据(write)：', '发送', BluetoothManager.writeWithResponseCharacteristicUUID, this.write, this.state.writeData)}
                        {/*{this.renderWriteView('写数据(writeWithoutResponse)：', '发送', BluetoothManager.writeWithoutResponseCharacteristicUUID, this.writeWithoutResponse, this.state.writeData)}*/}
                        {this.renderWriteView('写数据：', '发送', BluetoothManager.writeWithoutResponseCharacteristicUUID, this.writeWithoutResponse, this.state.writeData)}
                        {this.renderReceiveView('读取的数据：', '读取', BluetoothManager.readCharacteristicUUID, this.read, this.state.readData)}
                        {/*{this.renderReceiveView('通知监听接收的数据：' + `${this.state.isMonitoring ? '监听已开启' : '监听未开启'}`, '开启通知', BluetoothManager.nofityCharacteristicUUID, this.notify, this.state.receiveData)}*/}

                    </View>
                    : <View></View>
                }
            </View>
        )
    }

    renderReceiveView = (label, buttonText, characteristics, onPress, state) => {
        if (characteristics.length == 0) {
            return;
        }
        return (
            <View style={{marginHorizontal: 0, marginTop: 30, flex: 1}}>
                <Text style={{color: 'red', marginTop: 5}}>{label}</Text>
                <Text style={styles.content}>
                    {state}
                </Text>
                {characteristics.map((item, index) => {
                    if (item == this.char6 || item == this.char1) {//读取两个ID
                        return (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.buttonView}
                                onPress={() => {
                                    onPress(index)
                                }}
                                key={index}>
                                <Text style={styles.buttonText}>{buttonText} ({item})</Text>
                            </TouchableOpacity>
                        )
                    }
                })}
            </View>
        )
    }

    renderWriteView = (label, buttonText, characteristics, onPress, state) => {
        if (characteristics.length == 0) {
            return;
        }
        const {navigate} = this.props.navigation;
        return (//在这里做控制界面
            <View style={{marginHorizontal: 0, marginTop: 0, flex: 1}} behavior='padding'>

                {characteristics.map((item, index) => {
                    if (item == this.char6) {
                        GLOBAL.index_ble = index;
                        switch (device) {
                            case 1://93t-1
                                return (
                                    <View key={index} style={{flex: 10}}>
                                        <View style={{flex: 1}}/>

                                        <View style={{flex: 10, flexDirection: 'row'}}>
                                            <View style={{flex: 1}}/>
                                            <ImageBackground style={styles.mybutton1}
                                                             source={require('./src/lightingctrlbt.jpg')}>
                                                <BasicButton name='BrightCtrl' navigate={navigate}/>
                                            </ImageBackground>
                                            <ImageBackground style={styles.mybutton1}
                                                             source={require('./src/93TlaserCtrl.png')}>
                                                <BasicButton name='LaserCtrl_93T_1' navigate={navigate}/>
                                            </ImageBackground>
                                            <View style={{flex: 1}}/>
                                        </View>

                                        <View style={{flex: 10, flexDirection: 'row'}}>
                                            <View style={{flex: 1}}/>
                                            <ImageBackground style={styles.mybutton1}
                                                             source={require('./src/set.png')}>
                                                <BasicButton name='Set_93T_1' navigate={navigate}/>
                                            </ImageBackground>
                                            <ImageBackground style={styles.mybutton1}
                                                             source={require('./src/help.png')}>
                                                <BasicButton name='Help_93T_1' navigate={navigate}/>
                                            </ImageBackground>
                                            <View style={{flex: 1}}/>
                                        </View>

                                        <View style={{flex: 1}}/>
                                    </View>
                                );
                                break;
                            case 2://
                                return (
                                    <View key={index} style={{flex: 10}}>
                                        <View style={{flex: 1}}/>
                                        <View style={{flex: 10, flexDirection: 'row'}}>
                                            <View style={{flex: 5}}/>
                                            <ImageBackground style={styles.mybutton1}
                                                             source={require('./src/laserctrlfle445.png')}>
                                                <BasicButton name='fle445LaserCtrl' navigate={navigate}/>
                                            </ImageBackground>
                                            <View style={{flex: 5}}/>
                                        </View>

                                        <View style={{flex: 10, flexDirection: 'row'}}>
                                            <View style={{flex: 1}}/>
                                            <ImageBackground style={styles.mybutton1}
                                                             source={require('./src/lightingctrlbt.jpg')}>
                                                <BasicButton name='BrightCtrl' navigate={navigate}/>
                                            </ImageBackground>
                                            <ImageBackground style={styles.mybutton1}
                                                             source={require('./src/slopctrl.jpg')}>
                                                <BasicButton name='SlopeCtrl_FLE445' navigate={navigate}/>
                                            </ImageBackground>
                                            <View style={{flex: 1}}/>
                                        </View>

                                        <View style={{flex: 10, flexDirection: 'row'}}>
                                            <View style={{flex: 1}}/>
                                            <ImageBackground style={styles.mybutton1}
                                                             source={require('./src/set.png')}>
                                                <BasicButton name='fle445Set' navigate={navigate}/>
                                            </ImageBackground>
                                            <ImageBackground style={styles.mybutton1}
                                                             source={require('./src/help.png')}>
                                                <BasicButton name='fle445Help' navigate={navigate}/>
                                            </ImageBackground>
                                            <View style={{flex: 1}}/>
                                        </View>

                                        <View style={{flex: 1}}/>
                                    </View>
                                );
                                break;
                            case 4:
                                return (
                                    <View key={index} style={[styles.container, {}]}>
                                        <View style={{flex: 18,}}/>

                                        <View style={{flex: 17, flexDirection: 'row',}}>
                                            <View style={{
                                                flex: 10, alignItems: 'flex-end',
                                                justifyContent: 'center',
                                            }}>
                                                <View style={{flex: 15}}/>
                                                <ImageBackground style={[styles.newTypeBtn, {flex: 1}]}
                                                                 source={require('./src/left.png')}>
                                                    <NewTypeButton name='left' navigate={navigate}/>
                                                </ImageBackground>
                                                <View style={{flex: 15}}/>
                                            </View>

                                            <View style={{
                                                flex: 6, alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                                <View style={{flex: 0}}/>
                                                <ImageBackground style={[styles.newTypeBtn, {flex: 20, margin: 2.5}]}
                                                                 source={require('./src/up.png')}>
                                                    <NewTypeButton name='up' navigate={navigate}/>
                                                </ImageBackground>

                                                <ImageBackground style={[styles.newTypeBtn, {flex: 20, margin: 2.5}]}
                                                                 source={require('./src/down.png')}>
                                                    <NewTypeButton name='down' navigate={navigate}/>
                                                </ImageBackground>
                                                <View style={{flex: 0}}/>
                                            </View>

                                            <View style={{
                                                flex: 10,
                                                justifyContent: 'center',
                                            }}>
                                                <View style={{flex: 15}}/>
                                                <ImageBackground style={[styles.newTypeBtn, {flex: 1}]}
                                                                 source={require('./src/right.png')}>
                                                    <NewTypeButton name='right' navigate={navigate}/>
                                                </ImageBackground>
                                                <View style={{flex: 15}}/>
                                            </View>

                                        </View>

                                        <View style={{flex: 19, flexDirection: 'row',}}>
                                            <View style={{
                                                flex: 10, alignItems: 'flex-end',
                                                justifyContent: 'center',
                                            }}>
                                                <View style={{flex: 1}}/>
                                                <ImageBackground style={[styles.newTypeBtn, {flex: 18}]}
                                                                 source={require('./src/leftAng.png')}>
                                                    <NewTypeButton name='leftAng' navigate={navigate}/>
                                                </ImageBackground>
                                                <View style={{flex: 2}}/>
                                                <ImageBackground style={[styles.newTypeBtn, {flex: 18}]}
                                                                 source={require('./src/rightAng.png')}>
                                                    <NewTypeButton name='rightAng' navigate={navigate}/>
                                                </ImageBackground>
                                                <View style={{flex: 1}}/>
                                            </View>

                                            <View style={{
                                                flex: 6, alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                                <View style={{flex: 1}}/>
                                                <ImageBackground style={[styles.newTypeBtn, {flex: 18}]}
                                                                 source={require('./src/scan10.png')}>
                                                    <NewTypeButton name='scan10' navigate={navigate}/>
                                                </ImageBackground>
                                                <View style={{flex: 2}}/>
                                                <ImageBackground style={[styles.newTypeBtn, {flex: 18}]}
                                                                 source={require('./src/round600.png')}>
                                                    <NewTypeButton name='round600' navigate={navigate}/>
                                                </ImageBackground>
                                                <View style={{flex: 1}}/>
                                            </View>

                                            <View style={{
                                                flex: 10,
                                                justifyContent: 'center',
                                            }}>
                                                <View style={{flex: 1}}/>
                                                <ImageBackground style={[styles.newTypeBtn, {flex: 18}]}
                                                                 source={require('./src/qinxie.png')}>
                                                    <NewTypeButton name='qinxie' navigate={navigate}/>
                                                </ImageBackground>
                                                <View style={{flex: 2}}/>
                                                <ImageBackground style={[styles.newTypeBtn, {flex: 18}]}
                                                                 source={require('./src/manu.png')}>
                                                    <NewTypeButton name='manu' navigate={navigate}/>
                                                </ImageBackground>
                                                <View style={{flex: 1}}/>
                                            </View>
                                        </View>

                                        <View style={{flex: 10, flexDirection: 'row',}}>
                                            <View style={{flex: 6,}}/>
                                            <View style={{flex: 10, alignItems: 'flex-end', justifyContent: 'center',}}>
                                                <View style={{flex: 1}}/>
                                                <ImageBackground style={[styles.newTypeBtn, {flex: 40, margin: 8}]}
                                                                 source={require('./src/set.png')}>
                                                    <NewTypeButton name='set' navigate={navigate}/>
                                                </ImageBackground>
                                                <View style={{flex: 3}}/>
                                            </View>

                                            <View style={{flex: 10, justifyContent: 'center',}}>
                                                <View style={{flex: 1}}/>
                                                <ImageBackground style={[styles.newTypeBtn, {flex: 40, margin: 8}]}
                                                                 source={require('./src/help.png')}>
                                                    <NewTypeButton name='help' navigate={navigate}/>
                                                </ImageBackground>

                                                <View style={{flex: 3}}/>
                                            </View>
                                            <View style={{flex: 6,}}/>
                                        </View>
                                        <View style={{flex: 12,}}/>

                                    </View>
                                );
                                break;
                            case 3://frd800
                                return (
                                    <View key={index} style={[styles.container, {}]}>
                                        <View style={{flex: 18,}}/>

                                        <View style={{flex: 17, flexDirection: 'row',}}>
                                            <View style={{
                                                flex: 10, alignItems: 'flex-end',
                                                justifyContent: 'center',
                                            }}>
                                                <View style={{flex: 15}}/>
                                                <ImageBackground style={[styles.newTypeBtn, {flex: 1}]}
                                                                 source={require('./src/left.png')}>
                                                    <NewTypeButton name='left' navigate={navigate}/>
                                                </ImageBackground>
                                                <View style={{flex: 15}}/>
                                            </View>

                                            <View style={{
                                                flex: 6, alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                                <View style={{flex: 0}}/>
                                                <ImageBackground style={[styles.newTypeBtn, {flex: 20, margin: 2.5}]}
                                                                 source={require('./src/up.png')}>
                                                    <NewTypeButton name='up' navigate={navigate}/>
                                                </ImageBackground>

                                                <ImageBackground style={[styles.newTypeBtn, {flex: 20, margin: 2.5}]}
                                                                 source={require('./src/down.png')}>
                                                    <NewTypeButton name='down' navigate={navigate}/>
                                                </ImageBackground>
                                                <View style={{flex: 0}}/>
                                            </View>

                                            <View style={{
                                                flex: 10,
                                                justifyContent: 'center',
                                            }}>
                                                <View style={{flex: 15}}/>
                                                <ImageBackground style={[styles.newTypeBtn, {flex: 1}]}
                                                                 source={require('./src/right.png')}>
                                                    <NewTypeButton name='right' navigate={navigate}/>
                                                </ImageBackground>
                                                <View style={{flex: 15}}/>
                                            </View>

                                        </View>

                                        <View style={{flex: 19, flexDirection: 'row',}}>
                                            <View style={{
                                                flex: 10, alignItems: 'flex-end',
                                                justifyContent: 'center',
                                            }}>
                                                <View style={{flex: 1}}/>
                                                <ImageBackground style={[styles.newTypeBtn, {flex: 18}]}
                                                                 source={require('./src/leftAng.png')}>
                                                    <NewTypeButton name='leftAng' navigate={navigate}/>
                                                </ImageBackground>
                                                <View style={{flex: 2}}/>
                                                <ImageBackground style={[styles.newTypeBtn, {flex: 18}]}
                                                                 source={require('./src/rightAng.png')}>
                                                    <NewTypeButton name='rightAng' navigate={navigate}/>
                                                </ImageBackground>
                                                <View style={{flex: 1}}/>
                                            </View>

                                            <View style={{
                                                flex: 6, alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                                <View style={{flex: 1}}/>
                                                <ImageBackground style={[styles.newTypeBtn, {flex: 18}]}
                                                                 source={require('./src/scan10.png')}>
                                                    <NewTypeButton name='scan10' navigate={navigate}/>
                                                </ImageBackground>
                                                <View style={{flex: 2}}/>
                                                <ImageBackground style={[styles.newTypeBtn, {flex: 18}]}
                                                                 source={require('./src/round600.png')}>
                                                    <NewTypeButton name='round600' navigate={navigate}/>
                                                </ImageBackground>
                                                <View style={{flex: 1}}/>
                                            </View>

                                            <View style={{
                                                flex: 10,
                                                justifyContent: 'center',
                                            }}>
                                                <View style={{flex: 1}}/>
                                                <ImageBackground style={[styles.newTypeBtn, {flex: 18}]}
                                                                 source={require('./src/qinxie.png')}>
                                                    <NewTypeButton name='qinxie' navigate={navigate}/>
                                                </ImageBackground>
                                                <View style={{flex: 2}}/>
                                                <ImageBackground style={[styles.newTypeBtn, {flex: 18}]}
                                                                 source={require('./src/manu.png')}>
                                                    <NewTypeButton name='manu' navigate={navigate}/>
                                                </ImageBackground>
                                                <View style={{flex: 1}}/>
                                            </View>
                                        </View>

                                        <View style={{flex: 10, flexDirection: 'row',}}>
                                            <View style={{flex: 6,}}/>
                                            <View style={{flex: 10, alignItems: 'flex-end', justifyContent: 'center',}}>
                                                <View style={{flex: 1}}/>
                                                <ImageBackground style={[styles.newTypeBtn, {flex: 40, margin: 8}]}
                                                                 source={require('./src/set.png')}>
                                                    <NewTypeButton name='set' navigate={navigate}/>
                                                </ImageBackground>
                                                <View style={{flex: 3}}/>
                                            </View>

                                            <View style={{flex: 10, justifyContent: 'center',}}>
                                                <View style={{flex: 1}}/>
                                                <ImageBackground style={[styles.newTypeBtn, {flex: 40, margin: 8}]}
                                                                 source={require('./src/help.png')}>
                                                    <NewTypeButton name='help' navigate={navigate}/>
                                                </ImageBackground>

                                                <View style={{flex: 3}}/>
                                            </View>
                                            <View style={{flex: 6,}}/>
                                        </View>
                                        <View style={{flex: 12,}}/>

                                    </View>
                                );
                                break;
                            default:
                                break;

                        }

                    } else if (item == this.char1) {
                        /*return (
                            <View key={index}>
                                <TouchableOpacity
                                    key={index}
                                    activeOpacity={0.7}
                                    style={styles.buttonView}
                                    onPress={() => {
                                        //onPress(index);
                                        if (this.timer == null) {
                                            this.alert('开启连续发送，每隔0.5s往' + item + '发送0x10');
                                            setTimeout(
                                                () => {
                                                    BluetoothManager.write('10', index)
                                                        .catch(err => {
                                                            this.alert('发送失败');

                                                        });
                                                },
                                                500
                                            );
                                        }
                                    }}>
                                    {/!* <Text style={styles.buttonText}>{buttonText} ({item})</Text>*!/}
                                    <Text style={styles.buttonText}>开启连续发送</Text>
                                </TouchableOpacity>
                                {/!*<TextInput
                                    style={[styles.textInput]}
                                    value={this.state.text}
                                    placeholder='请输入消息'
                                    onChangeText={(text) => {
                                        this.setState({text: text});
                                    }}
                                />*!/}
                            </View>
                        )*/
                    }
                })}
                {/*<TextInput
                    style={[styles.textInput]}
                    value={this.state.text}
                    placeholder='请输入消息'
                    onChangeText={(text) => {
                        this.setState({text: text});
                    }}
                />*/}
            </View>
        )
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground style={styles.container}
                             source={require('./src/background.png')}
            >
                <View style={{flex: 1}}/>
                <View style={{flex: 10}}>
                    <FlatList style={{margin: 0, width: Dimensions.get('window').width}}
                              renderItem={this.renderItem}
                              ListHeaderComponent={this.renderHeader}
                              ListFooterComponent={this.renderFooter}
                              keyExtractor={item => item.id}
                              data={this.state.data}
                              extraData={[this.state.isConnected, this.state.text, this.state.receiveData, this.state.readData, this.state.writeData, this.state.isMonitoring, this.state.scaning]}
                              keyboardShouldPersistTaps='handled'
                    />

                </View>
            </ImageBackground>
        )
    }
}

class control extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground style={styles.container}
                             source={require('./src/background.png')}
            >
                <View style={{flex: 18,}}/>

                <View style={{flex: 17, flexDirection: 'row',}}>
                    <View style={{
                        flex: 10, alignItems: 'flex-end',
                        justifyContent: 'center',
                    }}>
                        <View style={{flex: 10}}/>
                        <ImageBackground style={[styles.newTypeBtn, {flex: 20}]}
                                         source={require('./src/left.png')}>
                            <NewTypeButton name='left' navigate={navigate}/>
                        </ImageBackground>
                        <View style={{flex: 10}}/>
                    </View>

                    <View style={{
                        flex: 6, alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <View style={{flex: 0}}/>
                        <ImageBackground style={[styles.newTypeBtn, {flex: 20, margin: 2.5}]}
                                         source={require('./src/up.png')}>
                            <NewTypeButton name='up' navigate={navigate}/>
                        </ImageBackground>

                        <ImageBackground style={[styles.newTypeBtn, {flex: 20, margin: 2.5}]}
                                         source={require('./src/down.png')}>
                            <NewTypeButton name='down' navigate={navigate}/>
                        </ImageBackground>
                        <View style={{flex: 0}}/>
                    </View>

                    <View style={{
                        flex: 10,
                        justifyContent: 'center',
                    }}>
                        <View style={{flex: 10}}/>
                        <ImageBackground style={[styles.newTypeBtn, {flex: 20}]}
                                         source={require('./src/right.png')}>
                            <NewTypeButton name='right' navigate={navigate}/>
                        </ImageBackground>
                        <View style={{flex: 10}}/>
                    </View>

                </View>

                <View style={{flex: 19, flexDirection: 'row',}}>
                    <View style={{
                        flex: 10, alignItems: 'flex-end',
                        justifyContent: 'center',
                    }}>
                        <View style={{flex: 1}}/>
                        <ImageBackground style={[styles.newTypeBtn, {flex: 18}]}
                                         source={require('./src/leftAng.png')}>
                            <NewTypeButton name='leftAng' navigate={navigate}/>
                        </ImageBackground>
                        <View style={{flex: 2}}/>
                        <ImageBackground style={[styles.newTypeBtn, {flex: 18}]}
                                         source={require('./src/rightAng.png')}>
                            <NewTypeButton name='rightAng' navigate={navigate}/>
                        </ImageBackground>
                        <View style={{flex: 1}}/>
                    </View>

                    <View style={{
                        flex: 6, alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <View style={{flex: 1}}/>
                        <ImageBackground style={[styles.newTypeBtn, {flex: 18}]}
                                         source={require('./src/scan10.png')}>
                            <NewTypeButton name='scan10' navigate={navigate}/>
                        </ImageBackground>
                        <View style={{flex: 2}}/>
                        <ImageBackground style={[styles.newTypeBtn, {flex: 18}]}
                                         source={require('./src/round600.png')}>
                            <NewTypeButton name='round600' navigate={navigate}/>
                        </ImageBackground>
                        <View style={{flex: 1}}/>
                    </View>

                    <View style={{
                        flex: 10,
                        justifyContent: 'center',
                    }}>
                        <View style={{flex: 1}}/>
                        <ImageBackground style={[styles.newTypeBtn, {flex: 18}]}
                                         source={require('./src/qinxie.png')}>
                            <NewTypeButton name='qinxie' navigate={navigate}/>
                        </ImageBackground>
                        <View style={{flex: 2}}/>
                        <ImageBackground style={[styles.newTypeBtn, {flex: 18}]}
                                         source={require('./src/manu.png')}>
                            <NewTypeButton name='manu' navigate={navigate}/>
                        </ImageBackground>
                        <View style={{flex: 1}}/>
                    </View>
                </View>

                <View style={{flex: 10, flexDirection: 'row',}}>
                    <View style={{flex: 6,}}/>
                    <View style={{flex: 10, alignItems: 'flex-end', justifyContent: 'center',}}>
                        <View style={{flex: 1}}/>
                        <ImageBackground style={[styles.newTypeBtn, {flex: 40, margin: 8}]}
                                         source={require('./src/set.png')}>
                            <NewTypeButton name='set' navigate={navigate}/>
                        </ImageBackground>
                        <View style={{flex: 3}}/>
                    </View>

                    <View style={{flex: 10, justifyContent: 'center',}}>
                        <View style={{flex: 1}}/>
                        <ImageBackground style={[styles.newTypeBtn, {flex: 40, margin: 8}]}
                                         source={require('./src/help.png')}>
                            <NewTypeButton name='help' navigate={navigate}/>
                        </ImageBackground>

                        <View style={{flex: 3}}/>
                    </View>
                    <View style={{flex: 6,}}/>
                </View>
                <View style={{flex: 12,}}/>

            </ImageBackground>
        );
    }
}

class preload extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

        this.timer = setTimeout(() => {
            //页面的切换
            this.props.navigation.navigate('HomeScreen');
        }, 1000);

    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <ImageBackground style={styles.container}
                             source={require('./src/preload.png')}
            >
                <View style={{flex: 9}}/>
                <Text style={{color: '#FCFCFC', flex: 1, fontSize: 15}}>
                    软件版本:1.0.0
                </Text>
            </ImageBackground>
        );
    }
}

const XingYunApp = StackNavigator(
    {
        Home: {screen: preload},
        laserControlScreen_93T_1: {screen: laserControlScreen_93T_1},
        brightnessControl: {screen: brightnessControl},
        laserControllScreen_FLE445: {screen: laserControllScreen_FLE445},
        slopeControlScreen_FLE445: {screen: slopeControlScreen_FLE445},
        testBlueTooth: {screen: testBlueTooth},
        control: {screen: control},
        HomeScreen: {screen: HomeScreen},

    },
    {
        headerMode: 'none',
        mode: 'modal',
        navigationOptions: {
            gesturesEnabled: false,
        },
    }
);

// 点击时改变背景色同时改变按钮的字体颜色
// 需要使用TouchableHighlight的onHideUnderlay和onShowUnderlay属性
const RED_COLOR = 'red';
const WHITE_COLOR = 'white';

//按钮
class Button2_93T_1 extends Component {//93T-1 Button
    constructor(props) {
        super(props);
        this.state = {
            pressStatus: false,
            blueToothConnected: false,
        };
    }

    _onHideUnderlay() {
        this.setState({pressStatus: false});
    }

    _onShowUnderlay() {
        this.setState({pressStatus: true});
    }

    render() {
        return (
            <ImageBackground style={styles.mybutton}
                             source={require('./src/93t-1.png')}>
                <TouchableHighlight
                    onHideUnderlay={this._onHideUnderlay.bind(this)}
                    onPress={() => {
                        device = 1;
                        this.props.navigate('testBlueTooth');
                    }}
                    onShowUnderlay={this._onShowUnderlay.bind(this)}
                    // style={[styles.exit, this.state.pressStatus ? {backgroundColor: RED_COLOR} : {backgroundColor: '#515151'}]}
                    style={styles.exit}
                    underlayColor='red'>
                    <Text
                        style={[styles.exittext, {opacity: 0}, this.state.pressStatus ? {color: '#515151'} : {color: RED_COLOR}]}>
                    </Text>
                </TouchableHighlight>
            </ImageBackground>

        );
    }
}

class BasicButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pressStatus: false,
        };
    }

    _onHideUnderlay() {
        this.setState({pressStatus: false});
    }

    _onShowUnderlay() {
        this.setState({pressStatus: true});
    }

    startScan() {
        if (!this.state.scanning) {
            BleManager.scan([], 5, true).then((results) => {
                console.log('Scanning...');
                this.setState({scanning: true});
            });
        }
    }

    render() {
        return (
            <TouchableHighlight
                onHideUnderlay={this._onHideUnderlay.bind(this)}
                onPress={() => {
                    //this.props.navigate('brightnessControl');
                    switch (this.props.name) {
                        case 'fle445':
                            device = 2;
                            this.props.navigate('testBlueTooth');
                            break;
                        case 'fle445LaserCtrl':
                            this.props.navigate('laserControllScreen_FLE445');
                            break;
                        case 'SlopeCtrl_FLE445':
                            this.props.navigate('slopeControlScreen_FLE445');
                            break;
                        case 'BrightCtrl':
                            this.props.navigate('brightnessControl');
                            break;
                        case 'fre203':
                            device = 4;
                            this.props.navigate('testBlueTooth');
                            break;
                        case 'frd800':
                            device = 3;
                            this.props.navigate('testBlueTooth');
                            break;
                        case 'Remote_FLE445':
                            BleManager.start({showAlert: false});//
                            this.startScan();
                            break;
                        case 'LaserCtrl_93T_1':
                            this.props.navigate('laserControlScreen_93T_1');
                            break;
                        case 'Remote':
                            if (device == 1) {
                                BluetoothManager.writeWithoutResponse('e7e70201ff', index_ble);
                            } else if (device == 2) {
                                BluetoothManager.writeWithoutResponse('e7e70101ff', index_ble);
                            }
                            break;
                        case 'unRemote':
                            if (device == 1) {
                                BluetoothManager.writeWithoutResponse('e7e70202ff', index_ble);
                            } else if (device == 2) {
                                BluetoothManager.writeWithoutResponse('e7e70102ff', index_ble);
                            }
                            break;

                        case 'H_93T_1'://93T-1 laserControl
                            BluetoothManager.writeWithoutResponse('e7e70203ff', index_ble);
                            break;
                        case 'V1_93T_1':
                            BluetoothManager.writeWithoutResponse('e7e70204ff', index_ble);
                            break;
                        case 'H360_93T_1':
                            BluetoothManager.writeWithoutResponse('e7e70205ff', index_ble);
                            break;
                        case 'V2_93T_1':
                            BluetoothManager.writeWithoutResponse('e7e70206ff', index_ble);
                            break;
                        case 'HV_93T_1':
                            BluetoothManager.writeWithoutResponse('e7e70207ff', index_ble);
                            break;
                        case 'V_93T_1':
                            BluetoothManager.writeWithoutResponse('e7e70208ff', index_ble);
                            break;

                        case 'H_FLE445'://fle445 laserControl
                            BluetoothManager.writeWithoutResponse('e7e70203ff', index_ble);
                            break;
                        case 'V1_FLE445':
                            BluetoothManager.writeWithoutResponse('e7e70204ff', index_ble);
                            break;
                        case 'H360_FLE445':
                            BluetoothManager.writeWithoutResponse('e7e70205ff', index_ble);
                            break;
                        case 'V2_FLE445':
                            BluetoothManager.writeWithoutResponse('e7e70206ff', index_ble);
                            break;
                        case 'HV_FLE445':
                            BluetoothManager.writeWithoutResponse('e7e70207ff', index_ble);
                            break;
                        case 'V_FLE445':
                            BluetoothManager.writeWithoutResponse('e7e70208ff', index_ble);
                            break;
                        case 'brightness0':
                            if (device == 1) {
                                BluetoothManager.writeWithoutResponse('e7e70209ff', index_ble);
                            } else if (device == 2) {
                                BluetoothManager.writeWithoutResponse('e7e70109ff', index_ble);
                            }
                            break;
                        case 'brightness1':
                            if (device == 1) {
                                BluetoothManager.writeWithoutResponse('e7e7020bff', index_ble);
                            } else if (device == 2) {
                                BluetoothManager.writeWithoutResponse('e7e7010bff', index_ble);
                            }
                            break;
                        case 'brightness2':
                            if (device == 1) {
                                BluetoothManager.writeWithoutResponse('e7e7020aff', index_ble);
                            } else if (device == 2) {
                                BluetoothManager.writeWithoutResponse('e7e7010aff', index_ble);
                            }
                            break;
                        case 'XDirection_FLE445':
                            BluetoothManager.writeWithoutResponse('e7e7010cff', index_ble);
                            break;
                        case 'YDirection_FLE445':
                            BluetoothManager.writeWithoutResponse('e7e7010dff', index_ble);
                            break;
                        case 'youqin_FLE445':
                            BluetoothManager.writeWithoutResponse('e7e7010eff', index_ble);
                            break;
                        case 'zuoqin_FLE445':
                            BluetoothManager.writeWithoutResponse('e7e7010fff', index_ble);
                            break;
                        default:
                            alert(this.props.name);
                            break;
                    }
                }}
                onLongPress ={()=>{
                    switch(this.props.name){
                        case 'test':
                        this.inter = setInterval(
                            () => {
                                alert("hhhhh");
                                //BluetoothManager.writeWithoutResponse('e7e70303ff', index_ble);
                            }, 2000);
                        break;
                        default:
                            break;
                    }
                }}
                onPressOut={() => {
                    if (this.inter) {
                        clearInterval(this.inter);

                    }
                }}
                onShowUnderlay={this._onShowUnderlay.bind(this)}
                style={styles.exit}
                underlayColor='red'>
                <Text
                    style={[{opacity: 0}, this.state.pressStatus ? {color: '#515151'} : {color: RED_COLOR}]}>
                </Text>
            </TouchableHighlight>
        );
    }
}

class NewTypeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pressStatus: false,
        };
    }

    _onHideUnderlay() {
        this.setState({pressStatus: false});
    }

    _onShowUnderlay() {
        this.setState({pressStatus: true});
    }

    startScan() {
        if (!this.state.scanning) {
            BleManager.scan([], 5, true).then((results) => {
                console.log('Scanning...');
                this.setState({scanning: true});
            });
        }
    }

    render() {
        return (
            <TouchableHighlight
                onHideUnderlay={this._onHideUnderlay.bind(this)}
                onPress={() => {
                    switch (this.props.name) {//123
                        case 'left':
                            if (device == 3) {
                                BluetoothManager.writeWithoutResponse('e7e70401ff', index_ble);
                            } else if (device == 4) {
                                BluetoothManager.writeWithoutResponse('e7e70301ff', index_ble);
                            }
                            break;
                        case 'right':
                            if (device == 3) {
                                BluetoothManager.writeWithoutResponse('e7e70402ff', index_ble);
                            } else if (device == 4) {
                                BluetoothManager.writeWithoutResponse('e7e70302ff', index_ble);
                            }
                            break;
                        case 'up':
                            if (device == 3) {
                                BluetoothManager.writeWithoutResponse('e7e70403ff', index_ble);
                            } else if (device == 4) {
                                BluetoothManager.writeWithoutResponse('e7e70303ff', index_ble);
                            }
                            break;
                        case 'down':
                            if (device == 3) {
                                BluetoothManager.writeWithoutResponse('e7e70404ff', index_ble);
                            } else if (device == 4) {
                                BluetoothManager.writeWithoutResponse('e7e70304ff', index_ble);
                            }
                            break;
                        case 'leftAng':
                            if (device == 3) {
                                BluetoothManager.writeWithoutResponse('e7e70405ff', index_ble);
                            } else if (device == 4) {
                                BluetoothManager.writeWithoutResponse('e7e70305ff', index_ble);
                            }
                            break;
                        case 'rightAng':
                            if (device == 3) {
                                BluetoothManager.writeWithoutResponse('e7e70406ff', index_ble);
                            } else if (device == 4) {
                                BluetoothManager.writeWithoutResponse('e7e70306ff', index_ble);
                            }
                            break;
                        case 'qinxie':
                            if (device == 3) {
                                BluetoothManager.writeWithoutResponse('e7e70407ff', index_ble);
                            } else if (device == 4) {
                                BluetoothManager.writeWithoutResponse('e7e70307ff', index_ble);
                            }
                            break;
                        case 'manu':
                            if (device == 3) {
                                BluetoothManager.writeWithoutResponse('e7e70408ff', index_ble);
                            } else if (device == 4) {
                                BluetoothManager.writeWithoutResponse('e7e70308ff', index_ble);
                            }
                            break;
                        case 'scan10':
                            if (device == 3) {
                                BluetoothManager.writeWithoutResponse('e7e70409ff', index_ble);
                            } else if (device == 4) {
                                BluetoothManager.writeWithoutResponse('e7e70309ff', index_ble);
                            }
                            break;
                        case 'round600':
                            if (device == 3) {
                                BluetoothManager.writeWithoutResponse('e7e7040aff', index_ble);
                            } else if (device == 4) {
                                BluetoothManager.writeWithoutResponse('e7e7030aff', index_ble);
                            }
                            break;
                        default:
                            alert(this.props.name);
                            break;
                    }
                }}
                onLongPress={() => {
                    switch (this.props.name) {
                        case 'left':
                            if (device == 3) {
                                BluetoothManager.writeWithoutResponse('e7e70401ff', index_ble);
                            } else if (device == 4) {
                                if (this.inter) {
                                    clearInterval(this.inter);

                                }
                                this.inter = setInterval(
                                    () => {
                                        BluetoothManager.writeWithoutResponse('e7e70301ff', index_ble);
                                    }, 100);
                            }
                            break;
                        case 'right':
                            if (device == 3) {
                                BluetoothManager.writeWithoutResponse('e7e70402ff', index_ble);
                            } else if (device == 4) {
                                if (this.inter) {
                                    clearInterval(this.inter);

                                }
                                this.inter = setInterval(
                                    () => {
                                        BluetoothManager.writeWithoutResponse('e7e70302ff', index_ble);
                                    }, 100);
                            }
                            break;
                        case 'up':
                            if (device == 3) {
                                BluetoothManager.writeWithoutResponse('e7e70403ff', index_ble);
                            } else if (device == 4) {
                                if (this.inter) {
                                    clearInterval(this.inter);

                                }
                                this.inter = setInterval(
                                    () => {
                                        BluetoothManager.writeWithoutResponse('e7e70303ff', index_ble);
                                    }, 100);
                            }
                            break;
                        case 'down':
                            if (device == 3) {
                                BluetoothManager.writeWithoutResponse('e7e70404ff', index_ble);
                            } else if (device == 4) {
                                if (this.inter) {
                                    clearInterval(this.inter);

                                }
                                this.inter = setInterval(
                                    () => {
                                        BluetoothManager.writeWithoutResponse('e7e70304ff', index_ble);
                                    }, 100);
                            }
                            break;
                        case 'leftAng':
                            if (device == 3) {
                                BluetoothManager.writeWithoutResponse('e7e70405ff', index_ble);
                            } else if (device == 4) {
                                if (this.inter) {
                                    clearInterval(this.inter);

                                }
                                this.inter = setInterval(
                                    () => {
                                        BluetoothManager.writeWithoutResponse('e7e70305ff', index_ble);
                                    }, 100);
                            }
                            break;
                        case 'rightAng':
                            if (device == 3) {
                                BluetoothManager.writeWithoutResponse('e7e70406ff', index_ble);
                            } else if (device == 4) {
                                if (this.inter) {
                                    clearInterval(this.inter);

                                }
                                this.inter = setInterval(
                                    () => {
                                        BluetoothManager.writeWithoutResponse('e7e70306ff', index_ble);
                                    }, 100);
                            }
                            break;
                        case 'qinxie':
                            if (device == 3) {
                                BluetoothManager.writeWithoutResponse('e7e70407ff', index_ble);
                            } else if (device == 4) {
                                BluetoothManager.writeWithoutResponse('e7e70307ff', index_ble);
                            }
                            break;
                        case 'manu':
                            if (device == 3) {
                                BluetoothManager.writeWithoutResponse('e7e70408ff', index_ble);
                            } else if (device == 4) {
                                BluetoothManager.writeWithoutResponse('e7e70308ff', index_ble);
                            }
                            break;
                        case 'scan10':
                            if (device == 3) {
                                BluetoothManager.writeWithoutResponse('e7e70409ff', index_ble);
                            } else if (device == 4) {
                                BluetoothManager.writeWithoutResponse('e7e70309ff', index_ble);
                            }
                            break;
                        case 'round600':
                            if (device == 3) {
                                BluetoothManager.writeWithoutResponse('e7e7040aff', index_ble);
                            } else if (device == 4) {
                                BluetoothManager.writeWithoutResponse('e7e7030aff', index_ble);

                            }
                            break;
                        default:
                            alert(this.props.name);
                            break;
                    }
                }}
                onPressOut={() => {
                    if (this.inter) {
                        clearInterval(this.inter);

                    }
                }}
                onShowUnderlay={this._onShowUnderlay.bind(this)}
                style={styles.newTypeBtnTouch}
                underlayColor='red'>
                <Text
                    style={[styles.exittext, {opacity: 0}, this.state.pressStatus ? {color: '#515151'} : {color: RED_COLOR}]}>
                </Text>
            </TouchableHighlight>
        );
    }
}


//单选按钮
class RedioButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAllSelected: false,
            isNotDealSelected: true,
            isDealedSelected: false,
        }
    }

    // 更新"全部/未处理/已处理"按钮的状态
    _updateBtnSelectedState(currentPressed, array) {
        if (currentPressed === null || currentPressed === 'undefined' || array === null || array === 'undefined') {
            return;
        }

        let newState = {...this.state};

        for (let type of array) {
            if (currentPressed == type) {
                newState[type] ? {} : newState[type] = !newState[type];
                this.setState(newState);
            } else {
                newState[type] ? newState[type] = !newState[type] : {};
                this.setState(newState);
            }
        }
    }

    // 返回设置的button
    _getButton(style, selectedSate, stateType, buttonTitle, count) {
        let BTN_SELECTED_STATE_ARRAY = ['isAllSelected', 'isNotDealSelected', 'isDealedSelected'];
        return (
            <View style={[style, selectedSate ? {backgroundColor: '#32a7f5'} : {}]}>
                <Text
                    style={[styles.button, selectedSate ? {color: 'white'} : {}]}
                    onPress={() => {
                        this._updateBtnSelectedState(stateType, BTN_SELECTED_STATE_ARRAY)
                    }}>
                    {buttonTitle}({count})
                </Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.buttonlayout}>
                {this._getButton(styles.buttonleft, this.state.isAllSelected, 'isAllSelected', 'Btn_1', 10)}
                <View style={styles.buttondivideline}></View>
                {this._getButton(null, this.state.isNotDealSelected, 'isNotDealSelected', 'Btn_1', 20)}
                <View style={styles.buttondivideline}></View>
                {this._getButton(styles.buttonright, this.state.isDealedSelected, 'isDealedSelected', 'Btn_1', 30)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    oneBtContainer: {
        height: 350,
        width: 250,
        backgroundColor: '#838B8B',
    },
    container: {
        flex: 8,
        //    backgroundColor: '#191970',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {flex: 1, backgroundColor: '#515151', alignItems: 'center', justifyContent: 'center',},
    titleText: {color: 'red', fontFamily: 'Cochin', fontSize: 50, fontWeight: 'bold',},
    textContainer: {flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row',},
    platformText: {color: 'red', fontFamily: 'Cochin', fontSize: 30, fontWeight: 'bold',},
    year: {
        textAlign: 'center',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    mybutton: {
        flex: 10,
        // resizeMode: 'stretch',
        margin: 0,
        //width: 127,
        //height: 50,
    },
    brightnessBt: {
        flex: 10,
        // resizeMode: 'stretch',
        margin: 3,
        //width: 127,
        //height: 50,
    },
    mybutton1: {
        flex: 10,
        // resizeMode: 'stretch',
        margin: 10,
        width: (Dimensions.get('window').width - 3 * 10) / 2,
        height: 0.8 * (Dimensions.get('window').width - 3 * 10) / 2,
    },
    newTypeBtn: {
        flex: 10,
        margin: 5,
        width: 0.7 * (Dimensions.get('window').width) / 3,
        height: 0.7 * 0.7 * (Dimensions.get('window').width) / 3,
    },
    exit: {
        flex: 1,
        alignItems: 'center',
        borderColor: '#FCFCFC',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 0,
        margin: 1,
    },
    newTypeBtnTouch: {
        flex: 1,
        alignItems: 'center',
        borderColor: '#353535',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 0,
        // margin: 50,

    },
    exittext: {flex: 1, fontSize: 18, textAlignVertical: 'center',},
    buttonlayout: {
        height: 30,
        marginTop: 30,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#32a7f5',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 8,
    },
    buttonleft: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    buttonright: {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    button: {
        height: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    buttondivideline: {
        width: 1,
        height: 30,
        backgroundColor: '#32a7f5',
        flexDirection: 'column',
    },
    item: {
        flexDirection: 'column',
        borderColor: 'rgb(235,235,235)',
        borderStyle: 'solid',
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingLeft: 10,
        paddingVertical: 8,
    },
    buttonView: {
        height: 30,
        backgroundColor: '#515151',
        paddingHorizontal: 10,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: 'center',
        alignItems: 'flex-start',
        marginTop: 5,

    },
    buttonText: {
        color: "white",
        fontSize: 12,
    },
    content: {
        marginTop: 5,
        marginBottom: 15,
    },
    textInput: {
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: 'white',
        height: 50,
        fontSize: 16,
        flex: 1,
    },

});
