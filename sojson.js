/**
 *
 * 项目类型：APP
 * 项目名称：西瓜视频
 * 项目更新：2023-07-23
 * 项目抓包：抓api5-normal-quic-lq.ixigua.com下的url#cookie#x-argus#x-ladon#user-agent#alipay_name#alipay_uid，填入变量
 * 项目变量：lekebo_xgsp_Cookie
 * 项目定时：每1小时运行一次
 * 定时规则: 10 7-22 * * *   （多账号建议为2个小时运行一次，单账号为1小时一次更皆）
 *
 * 版本功能: 签到、吃饭、宝箱、广告、阅读、农场，此版本为最终版
 * 项目收入：如果单账号奖励低于10金，请自行活跃一下账号，如果单次运行高于100金证明账号正常，上限20W金。一天正常为3-4元
 * 提现功能: alipay_name#alipay_uid 记得CK参数里面填入此参数才可正常提现，此参数到提现页抓取
 *
 * github仓库：https://github.com/qq274023/lekebo
 *
 * 交流Q群：104062430 作者:乐客播 欢迎前来提交bug
 */
const $ = new Env("西瓜视频");
//-------------------- 一般不动变量区域 -------------------------------------
const notify = $.isNode() ? require("./sendNotify") : "";
const CryptoJS = require("crypto-js");
const Notify = 0; //通知设置      0关闭  1开启
let debug = 0; //Debug调试     0关闭  1开启
let envSplitor = ["@", "\n"]; //多账号分隔符
let ck = msg = ''; //let ck,msg
let versionupdate = "0"; //版本对比升级   0关闭  1开启
let withdrawtrue = "0"; //是否开启提现   0关闭  1开启
let numvodie = '30'; //循环看广告次数
let numamount = '50'; //金币低于不反复任务
//===============脚本版本=================//
var version_ = 'jsjiami.com.v7';
const _0xa91301 = _0x3899;
(function(_0x1ff923, _0x16b17a, _0x3e8792, _0x364b62, _0x5b2a42, _0x35a390, _0x4ee36c) {
    return _0x1ff923 = _0x1ff923 >> 0x8, _0x35a390 = 'hs', _0x4ee36c = 'hs',
        function(_0x524462, _0x430865, _0x34cdd3, _0x37f2df, _0x579703) {
            const _0x458ea1 = _0x3899;
            _0x37f2df = 'tfi', _0x35a390 = _0x37f2df + _0x35a390, _0x579703 = 'up', _0x4ee36c += _0x579703, _0x35a390 = _0x34cdd3(_0x35a390), _0x4ee36c = _0x34cdd3(_0x4ee36c), _0x34cdd3 = 0x0;
            const _0x2c22ce = _0x524462();
            while (!![] && --_0x364b62 + _0x430865) {
                try {
                    _0x37f2df = parseInt(_0x458ea1(0xa01, '^ut3')) / 0x1 + -parseInt(_0x458ea1(0x40f, '^ut3')) / 0x2 * (parseInt(_0x458ea1(0x2c5, 'UC%d')) / 0x3) + -parseInt(_0x458ea1(0x491, 'Yo*r')) / 0x4 + -parseInt(_0x458ea1(0x91f, 'vvN[')) / 0x5 * (-parseInt(_0x458ea1(0x1eb, '7htc')) / 0x6) + parseInt(_0x458ea1(0x709, 'Tx3e')) / 0x7 + -parseInt(_0x458ea1(0x5bc, 'UC%d')) / 0x8 + parseInt(_0x458ea1(0x37e, ')eXz')) / 0x9 * (parseInt(_0x458ea1(0xa14, '^8@B')) / 0xa);
                } catch (_0x100656) {
                    _0x37f2df = _0x34cdd3;
                } finally {
                    _0x579703 = _0x2c22ce[_0x35a390]();
                    if (_0x1ff923 <= _0x364b62) _0x34cdd3 ? _0x5b2a42 ? _0x37f2df = _0x579703 : _0x5b2a42 = _0x579703 : _0x34cdd3 = _0x579703;
                    else {
                        if (_0x34cdd3 == _0x5b2a42['replace'](/[YrRPSDJBAGQWNbwplq=]/g, '')) {
                            if (_0x37f2df === _0x430865) {
                                _0x2c22ce['un' + _0x35a390](_0x579703);
                                break;
                            }
                            _0x2c22ce[_0x4ee36c](_0x579703);
                        }
                    }
                }
            }
        }(_0x3e8792, _0x16b17a, function(_0x50eda5, _0x422dc2, _0x5a1705, _0x3bd970, _0x24e845, _0x30505a, _0xefae89) {
            return _0x422dc2 = 'split', _0x50eda5 = arguments[0x0], _0x50eda5 = _0x50eda5[_0x422dc2](''), _0x5a1705 = 'reverse', _0x50eda5 = _0x50eda5[_0x5a1705]('v'), _0x3bd970 = 'join', (0x135d7a, _0x50eda5[_0x3bd970](''));
        });
}(0xc800, 0xdf100, _0x1d3d, 0xca), _0x1d3d) && (version_ = _0x1d3d);
let scriptVersion = _0xa91301(0x30f, '6GlL'),
    update_tines = '2023-07-22',
    update_data = _0xa91301(0x8d6, 'Mt$M'),
    name_data = '1',
    scriptVersionLatest = 'v1.7',
    userCookie = ($[_0xa91301(0x7ea, '9iq9')]() ? process[_0xa91301(0x864, '9wX]')][_0xa91301(0x57f, 'ev8C')] : $[_0xa91301(0x531, 'm#vA')](_0xa91301(0x9f7, '3!Dt'))) || '',
    userList = [],
    userIdx = 0x0,
    date = require(_0xa91301(0x18a, 'ksby')),
    signTime = date['format'](new Date(), _0xa91301(0x44c, '^ut3')),
    times = Math[_0xa91301(0x506, '##))')](new Date()[_0xa91301(0x67e, '2(N#')]() / 0x3e8)['toString'](),
    timestamp = Math[_0xa91301(0x441, 'W#uE')](new Date()[_0xa91301(0x3f1, '^$ND')]())['toString'](),
    host = _0xa91301(0x31c, 'Zw8m'),
    hostname = 'http://' + host;
async
function start() {
    const _0x410ad7 = _0xa91301,
        _0xa6c233 = {
            'UsVyi': function(_0x5ebe79, _0x42bd87) {
                return _0x5ebe79(_0x42bd87);
            },
            'AOlgu': function(_0x5e9ba4, _0x5b7922) {
                return _0x5e9ba4(_0x5b7922);
            },
            'QBGfg': function(_0x3f8946, _0x4e0c5b) {
                return _0x3f8946(_0x4e0c5b);
            },
            'ELttO': function(_0x126898, _0x2ebb5b) {
                return _0x126898 * _0x2ebb5b;
            },
            'KiJbt': function(_0x319556, _0x43a9f4) {
                return _0x319556 * _0x43a9f4;
            },
            'xkisp': function(_0x2d240e, _0x3ba7d0) {
                return _0x2d240e(_0x3ba7d0);
            },
            'bvjJl': function(_0x43701d, _0xf5a94a) {
                return _0x43701d === _0xf5a94a;
            },
            'texwr': _0x410ad7(0x7eb, '^ut3'),
            'UsbGU': function(_0x19d963, _0x4ef85f) {
                return _0x19d963 * _0x4ef85f;
            },
            'KiJoc': function(_0xbf1699, _0xb98303) {
                return _0xbf1699(_0xb98303);
            },
            'gljAU': _0x410ad7(0x306, '9iq9'),
            'fManm': _0x410ad7(0x657, '^$ND'),
            'cIhol': function(_0x4b2d90, _0x5dfe8c) {
                return _0x4b2d90 * _0x5dfe8c;
            },
            'XEHnE': function(_0x5260ee, _0x2717a6) {
                return _0x5260ee * _0x2717a6;
            },
            'whzkS': function(_0x596738, _0x28e259) {
                return _0x596738 * _0x28e259;
            },
            'ZQZDY': function(_0x4338cd, _0x594e5f) {
                return _0x4338cd * _0x594e5f;
            },
            'QbEBA': function(_0x1871cb, _0x1a39b9) {
                return _0x1871cb * _0x1a39b9;
            },
            'ocHkt': function(_0x4853d0, _0x4482cc) {
                return _0x4853d0 * _0x4482cc;
            },
            'OBUAO': function(_0x1e84a3, _0x3f8173) {
                return _0x1e84a3 * _0x3f8173;
            },
            'pxmIO': function(_0x2fb051, _0x495d71) {
                return _0x2fb051 * _0x495d71;
            },
            'UKtsP': function(_0x262f6f, _0xca1419) {
                return _0x262f6f == _0xca1419;
            },
            'pHQbn': function(_0x33f839, _0x3f5033) {
                return _0x33f839(_0x3f5033);
            }
        };
    taskall = [];
    for (let _0x271b13 of userList) {
        taskall['push'](await _0x271b13[_0x410ad7(0x802, 'W#uE')](_0xa6c233[_0x410ad7(0x60a, 'Tx3e')](0x2, 0x3e8))), await $[_0x410ad7(0x3af, 'L%wM')](0x3e8);
    }
    await Promise[_0x410ad7(0x516, '3!Dt')](taskall), DoubleLog(_0x410ad7(0x238, '7htc')), taskall = [];
    for (let _0xa1420d of userList) {
        taskall[_0x410ad7(0x1f7, 'W6*u')](await _0xa1420d['getMemberScore'](_0xa6c233[_0x410ad7(0x1c4, '!y(t')](0x2, 0x3e8))), await $[_0x410ad7(0x763, 'r2Oj')](0x3e8);
    }
    await Promise['all'](taskall), _0xa6c233[_0x410ad7(0x595, 'Yo*r')](DoubleLog, _0x410ad7(0x327, '6GlL')), taskall = [];
    for (let _0x6f4b52 of userList) {
        _0xa6c233[_0x410ad7(0x719, 'UC%d')](_0xa6c233[_0x410ad7(0x82a, ')eXz')], _0xa6c233[_0x410ad7(0x7e6, 'K7Hk')]) ? (taskall[_0x410ad7(0x449, 'Mt$M')](await _0x6f4b52[_0x410ad7(0xa07, 'WaIa')](_0xa6c233[_0x410ad7(0x9cd, 'JZxU')](0x2, 0x3e8))), await $[_0x410ad7(0x573, '@m24')](0x3e8), taskall[_0x410ad7(0x865, '^ut3')](await _0x6f4b52[_0x410ad7(0x62d, '^8@B')](_0xa6c233['UsbGU'](0x2, 0x3e8)))) : (_0x4c5208(_0x410ad7(0x582, 'ev8C') + _0x275b4e + _0x410ad7(0x710, '^$ND') + _0x597923), _0xa6c233[_0x410ad7(0x7f7, 'WaIa')](_0x2cdc4f, _0x410ad7(0x7cf, '!y(t') + _0x2738a3), _0xa6c233[_0x410ad7(0x747, 'qmDl')](_0x42b2bf, _0x410ad7(0x837, 'Y^n*') + _0x23e298));
    }
    await Promise[_0x410ad7(0xa69, '^$ND')](taskall), DoubleLog(_0x410ad7(0x985, 'Tx3e')), taskall = [];
    for (let _0x1450fc of userList) {
        taskall['push'](await _0x1450fc[_0x410ad7(0x4f5, '9wX]')](_0xa6c233['ELttO'](0x2, 0x3e8))), await $[_0x410ad7(0x3d0, 'WaIa')](0x2710), taskall['push'](await _0x1450fc[_0x410ad7(0xa59, '##))')](0x2 * 0x3e8));
    }
    await Promise[_0x410ad7(0x474, 'Yo*r')](taskall), _0xa6c233[_0x410ad7(0x89d, 'vvN[')](DoubleLog, '
================ 执行开宝箱赚金币 ================'), taskall = [];
    for (let _0x121ae6 of userList) {
        taskall[_0x410ad7(0xa48, 'Zw8m')](await _0x121ae6[_0x410ad7(0x979, '#2Hi')](_0xa6c233[_0x410ad7(0x811, 'L%wM')](0x2, 0x3e8))), await $['wait'](0x3e8), taskall[_0x410ad7(0x3c0, 'vvN[')](await _0x121ae6[_0x410ad7(0x4f9, 'JZxU')](0x2 * 0x3e8));
    }
    await Promise['all'](taskall), DoubleLog('
================ 执行看广告赚金币 ================'), taskall = [];
    for (let _0x314ce2 of userList) {
        _0xa6c233['bvjJl'](_0xa6c233['gljAU'], _0x410ad7(0x8e3, 'vvN[')) ? (taskall[_0x410ad7(0x911, '^H2k')](await _0x314ce2[_0x410ad7(0x56c, 'ksby')](_0xa6c233[_0x410ad7(0x7c3, 'UC%d')](0x2, 0x3e8))), await $[_0x410ad7(0x74b, 'Bu2E')](0x3e8), taskall['push'](await _0x314ce2[_0x410ad7(0x276, '##))')](0x2 * 0x3e8))) : _0xa6c233['QBGfg'](_0x198592, _0x410ad7(0x730, '9iq9') + this[_0x410ad7(0x228, 'r2Oj')] + _0x410ad7(0xa00, '6GlL') + _0x5ca71d['message']);
    }
    await Promise[_0x410ad7(0x740, '^H2k')](taskall), DoubleLog(_0x410ad7(0x5b8, '2(N#')), taskall = [];
    for (let _0x26171a of userList) {
        const _0x376b66 = _0xa6c233['fManm'][_0x410ad7(0x5cf, 'WaIa')]('|');
        let _0x489501 = 0x0;
        while (!![]) {
            switch (_0x376b66[_0x489501++]) {
                case '0':
                    await $[_0x410ad7(0x596, '^ut3')](0x3e8);
                    continue;
                case '1':
                    taskall['push'](await _0x26171a[_0x410ad7(0xa43, 'Y^n*')](_0xa6c233['cIhol'](0x2, 0x3e8)));
                    continue;
                case '2':
                    await $[_0x410ad7(0xa74, '9wX]')](0x3e8);
                    continue;
                case '3':
                    taskall[_0x410ad7(0x1ec, ']A!w')](await _0x26171a[_0x410ad7(0x9b1, ']A!w')](_0xa6c233[_0x410ad7(0x88a, '^8@B')](0x2, 0x3e8)));
                    continue;
                case '4':
                    taskall[_0x410ad7(0x3a2, '6GlL')](await _0x26171a[_0x410ad7(0x304, '9iq9')](_0xa6c233[_0x410ad7(0x341, '7htc')](0x2, 0x3e8)));
                    continue;
                case '5':
                    await $[_0x410ad7(0x2d7, 'uvdB')](0x3e8);
                    continue;
                case '6':
                    taskall['push'](await _0x26171a[_0x410ad7(0x5b0, 'K7Hk')](_0xa6c233[_0x410ad7(0x22b, '9Ir0')](0x2, 0x3e8)));
                    continue;
            }
            break;
        }
    }
    await Promise[_0x410ad7(0x560, 'm#vA')](taskall), _0xa6c233[_0x410ad7(0x1d8, '^H2k')](DoubleLog, _0x410ad7(0x800, ']A!w')), taskall = [];
    for (let _0x2399a8 of userList) {
        const _0x16a761 = '10|14|6|12|3|2|1|4|5|15|9|13|0|16|7|8|11' [_0x410ad7(0x433, '@m24')]('|');
        let _0x165d6a = 0x0;
        while (!![]) {
            switch (_0x16a761[_0x165d6a++]) {
                case '0':
                    taskall[_0x410ad7(0xa53, 'A]*R')](await _0x2399a8['queryFarmLandStatus'](0x2 * 0x3e8));
                    continue;
                case '1':
                    taskall[_0x410ad7(0x78f, 'ev8C')](await _0x2399a8[_0x410ad7(0x6b2, '^$ND')](_0xa6c233[_0x410ad7(0x8e2, 'fhKC')](0x2, 0x3e8)));
                    continue;
                case '2':
                    await $[_0x410ad7(0x166, 'm#vA')](0x3e8);
                    continue;
                case '3':
                    taskall[_0x410ad7(0xa48, 'Zw8m')](await _0x2399a8['queryFarmThreeGift'](0x2 * 0x3e8));
                    continue;
                case '4':
                    await $[_0x410ad7(0x773, 'MyTQ')](0x3e8);
                    continue;
                case '5':
                    taskall[_0x410ad7(0x1f7, 'W6*u')](await _0x2399a8[_0x410ad7(0x213, 'WaIa')](_0xa6c233['ocHkt'](0x2, 0x3e8)));
                    continue;
                case '6':
                    taskall[_0x410ad7(0x23c, 'QGOg')](await _0x2399a8[_0x410ad7(0x46f, '&[MC')](_0xa6c233['OBUAO'](0x2, 0x3e8)));
                    continue;
                case '7':
                    taskall[_0x410ad7(0x3a2, '6GlL')](await _0x2399a8[_0x410ad7(0xa1c, 'W#uE')](_0xa6c233[_0x410ad7(0x832, 'z9*t')](0x2, 0x3e8)));
                    continue;
                case '8':
                    await $[_0x410ad7(0x438, '&[MC')](0x3e8);
                    continue;
                case '9':
                    taskall[_0x410ad7(0x163, ')eXz')](await _0x2399a8[_0x410ad7(0x347, 'Ato%')](_0xa6c233['OBUAO'](0x2, 0x3e8)));
                    continue;
                case '10':
                    taskall['push'](await _0x2399a8[_0x410ad7(0x8b0, 'MyTQ')](0x2 * 0x3e8));
                    continue;
                case '11':
                    taskall[_0x410ad7(0x831, 'W#uE')](await _0x2399a8[_0x410ad7(0x2f4, '^8@B')](_0xa6c233[_0x410ad7(0x98d, 'vvN[')](0x2, 0x3e8)));
                    continue;
                case '12':
                    await $[_0x410ad7(0x361, 'qmDl')](0x3e8);
                    continue;
                case '13':
                    await $[_0x410ad7(0x3d0, 'WaIa')](0x3e8);
                    continue;
                case '14':
                    await $[_0x410ad7(0x90a, 'Yo*r')](0x3e8);
                    continue;
                case '15':
                    await $['wait'](0x3e8);
                    continue;
                case '16':
                    await $['wait'](0x3e8);
                    continue;
            }
            break;
        }
    }
    await Promise[_0x410ad7(0x9ef, '2(N#')](taskall);
    if (_0xa6c233[_0x410ad7(0x174, 'Mt$M')](withdrawtrue, 0x1)) {
        _0xa6c233[_0x410ad7(0x28d, 'vvN[')](DoubleLog, _0x410ad7(0x325, 'ev8C')), taskall = [];
        for (let _0xff73ca of userList) {
            taskall['push'](await _0xff73ca[_0x410ad7(0x963, 'WXl3')](_0xa6c233[_0x410ad7(0x8f5, 'QGOg')](0x2, 0x3e8))), await $[_0x410ad7(0x8d0, '^8@B')](0x3e8);
        }
        await Promise['all'](taskall);
    }
}
class UserInfo {
    constructor(_0x41a7c7) {
        const _0x40c5a6 = _0xa91301;
        this[_0x40c5a6(0x93b, '#yB#')] = ++userIdx, this['ck'] = _0x41a7c7['split']('#');
    }
    async[_0xa91301(0x8a5, '9iq9')](_0x1355e4 = 0x7d0) {
        const _0x4366c4 = _0xa91301,
            _0x5cc53b = {
                'XpPye': function(_0x294b16) {
                    return _0x294b16();
                },
                'OaDYq': function(_0x4f35db, _0x25699a) {
                    return _0x4f35db(_0x25699a);
                },
                'oeIwP': _0x4366c4(0x48c, 'L%wM'),
                'uNbpu': _0x4366c4(0x1bb, 'Tx3e'),
                'JURIr': _0x4366c4(0x6cc, '9iq9'),
                'TpumB': function(_0x244b6e, _0x32d3ca) {
                    return _0x244b6e !== _0x32d3ca;
                },
                'hpykg': _0x4366c4(0x1e4, 'Ato%')
            };
        return new Promise(_0x4c4e1a => {
            const _0x5e3946 = _0x4366c4,
                _0x231c65 = {
                    'jevkD': function(_0x39f2f9, _0x4f11d3) {
                        const _0xe4aab4 = _0x3899;
                        return _0x5cc53b[_0xe4aab4(0x4da, '3!Dt')](_0x39f2f9, _0x4f11d3);
                    },
                    'QXvfo': _0x5cc53b[_0x5e3946(0x7e0, 'm#vA')],
                    'RkZLl': _0x5cc53b[_0x5e3946(0x986, 'Ato%')],
                    'LzhRD': function(_0x28e566, _0xd7c98f) {
                        const _0x3ddc55 = _0x5e3946;
                        return _0x5cc53b[_0x3ddc55(0x830, '^H2k')](_0x28e566, _0xd7c98f);
                    },
                    'iokgW': _0x5cc53b[_0x5e3946(0x45c, 'WaIa')],
                    'eemTg': function(_0x36bedb) {
                        return _0x5cc53b['XpPye'](_0x36bedb);
                    }
                };
            if (_0x5cc53b['TpumB'](_0x5cc53b[_0x5e3946(0x4b1, 'L%wM')], _0x5cc53b['hpykg'])) _0x5cc53b[_0x5e3946(0x7a1, '9iq9')](_0x5e23d8);
            else {
                let _0x25bc1c = {
                    'url': hostname + '/2/user/info/?abc=true&' + this['ck'][0x0],
                    'headers': {
                        'Host': host,
                        'Connection': 'Keep-Alive',
                        'Content-Type': _0x5e3946(0x780, '2(N#'),
                        'User-Agent': this['ck'][0x4],
                        'Cookie': this['ck'][0x1],
                        'x-argus': this['ck'][0x2],
                        'x-ladon': this['ck'][0x3]
                    }
                };
                $['get'](_0x25bc1c, async(_0x4f6c3a, _0x2ee243, _0x1a0b9e) => {
                    const _0x19e7f7 = _0x5e3946,
                        _0x4318c9 = {
                            'ScHal': function(_0x4fe349, _0x7558b2) {
                                const _0x11b6cd = _0x3899;
                                return _0x231c65[_0x11b6cd(0x3a1, '&[MC')](_0x4fe349, _0x7558b2);
                            }
                        };
                    if (_0x231c65['QXvfo'] !== 'ntafw') try {
                        if (_0x4f6c3a) $['logErr'](_0x4f6c3a);
                        else {
                            let _0x5a6378 = JSON[_0x19e7f7(0xa68, 'Mt$M')](_0x1a0b9e);
                            if (_0x5a6378[_0x19e7f7(0x530, 'K7Hk')] == _0x231c65['RkZLl']) {
                                let _0x16637c = _0x5a6378[_0x19e7f7(0x36d, 'W#uE')][_0x19e7f7(0x9f9, '&[MC')],
                                    _0x332c6d = _0x5a6378[_0x19e7f7(0x2ab, ')eXz')][_0x19e7f7(0x83f, 'MyTQ')],
                                    _0xec59fb = _0x5a6378[_0x19e7f7(0x545, '7htc')][_0x19e7f7(0x669, 'MyTQ')];
                                DoubleLog('
 ✅ 【' + this[_0x19e7f7(0x17e, 'uvdB')] + _0x19e7f7(0x92e, 'K7Hk') + _0x5a6378[_0x19e7f7(0x900, 'Zw8m')][_0x19e7f7(0x7ef, 'Ato%')] + '，' + _0x5a6378[_0x19e7f7(0x4b2, 'ev8C')][_0x19e7f7(0x385, 'r2Oj')]);
                            } else _0x231c65[_0x19e7f7(0x6b4, 'ygf[')](DoubleLog, _0x19e7f7(0x524, 'z9*t') + this[_0x19e7f7(0xaad, 'WaIa')] + _0x19e7f7(0x458, 'Mt$M') + _0x5a6378['err_tips']);
                        }
                    } catch (_0x3c750c) {
                        $[_0x19e7f7(0x617, 'z9*t')](_0x3c750c, _0x2ee243);
                    } finally {
                        _0x231c65[_0x19e7f7(0x8c6, '3!Dt')] !== _0x231c65['iokgW'] ? _0x4318c9['ScHal'](_0x125c93, _0x19e7f7(0x39b, ']A!w') + this[_0x19e7f7(0x40d, 'z9*t')] + '】吃饭视频: 该账号没有可执行任务，可能是新号') : _0x231c65[_0x19e7f7(0x687, 'vvN[')](_0x4c4e1a);
                    } else _0x231c65[_0x19e7f7(0x371, 'L%wM')](_0x4d963b, _0x19e7f7(0x5bb, 'Y^n*') + this[_0x19e7f7(0x230, '7htc')] + _0x19e7f7(0x5c8, 'W#uE') + _0x4f100a['err_tips']);
                }, _0x1355e4);
            }
        });
    }
    async[_0xa91301(0x4e2, ')eXz')](_0x2bcbf2 = 0x7d0) {
        const _0x496fd9 = _0xa91301,
            _0x27e5d2 = {
                'awGXL': _0x496fd9(0x90e, '@m24'),
                'AjtPY': function(_0x466dfe, _0x2c076c) {
                    return _0x466dfe == _0x2c076c;
                },
                'yIACN': function(_0x2b1ef3, _0x179e3b) {
                    return _0x2b1ef3 / _0x179e3b;
                },
                'TMyZh': function(_0x50cd3a, _0x209d8b) {
                    return _0x50cd3a !== _0x209d8b;
                },
                'eFkWk': 'nmZNc',
                'hJYoP': _0x496fd9(0x9d0, '2(N#'),
                'NwGUJ': function(_0x48b7c4) {
                    return _0x48b7c4();
                },
                'ABAEY': _0x496fd9(0x82c, '@m24')
            };
        return new Promise(_0x4e3ecb => {
            const _0x581b39 = _0x496fd9;
            let _0x427314 = {
                'url': hostname + '/luckycat/xigua/v1/task/page?' + this['ck'][0x0],
                'headers': {
                    'Host': host,
                    'Connection': _0x27e5d2['ABAEY'],
                    'Content-Type': _0x581b39(0x1a0, 'ygf['),
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                }
            };
            $[_0x581b39(0x29a, 'r2Oj')](_0x427314, async(_0x503b65, _0x142a6f, _0x52ee29) => {
                const _0x322fea = _0x581b39,
                    _0x3e90a9 = {
                        'xykPF': function(_0x26e3a2, _0x43ef5e) {
                            return _0x26e3a2(_0x43ef5e);
                        }
                    };
                try {
                    if (_0x503b65) _0x322fea(0x191, 'ygf[') !== _0x27e5d2['awGXL'] ? $['logErr'](_0x503b65) : _0x3e90a9['xykPF'](_0x3e14b8, _0x322fea(0x91a, 'JZxU') + this[_0x322fea(0x3da, 'L%wM')] + '】宝箱视频: ' + _0x219d40['message']);
                    else {
                        let _0x301821 = JSON['parse'](_0x52ee29);
                        _0x27e5d2[_0x322fea(0x294, 'Tx3e')](_0x301821[_0x322fea(0x3c4, 'JZxU')], 0x0) ? DoubleLog(_0x322fea(0x712, '6GlL') + this[_0x322fea(0x2b4, ')eXz')] + _0x322fea(0x7b2, '@m24') + _0x301821[_0x322fea(0x9d8, 'UC%d')]['income_info'][_0x322fea(0x3ff, 'WXl3')] + _0x322fea(0x24d, 'r2Oj') + _0x27e5d2['yIACN'](_0x301821[_0x322fea(0x44f, 'ksby')]['income_info'][_0x322fea(0x454, 'vvN[')], 0x64) + '元') : DoubleLog(_0x322fea(0x2fe, '!y(t') + this['index'] + _0x322fea(0x3b3, 'uvdB') + _0x301821[_0x322fea(0x813, 'WqE!')]);
                    }
                } catch (_0x1115b4) {
                    $[_0x322fea(0x162, '#2Hi')](_0x1115b4, _0x142a6f);
                } finally {
                    _0x27e5d2['TMyZh'](_0x27e5d2[_0x322fea(0x8ae, 'Mt$M')], _0x27e5d2[_0x322fea(0x8d4, 'R$sB')]) ? _0x27e5d2[_0x322fea(0xaa7, 'ev8C')](_0x4e3ecb) : _0x557538[_0x322fea(0x408, '9Ir0')](_0x2ab958);
                }
            }, _0x2bcbf2);
        });
    }
    async['signin'](_0x33b668 = 0x7d0) {
        const _0x2e72aa = _0xa91301,
            _0x147680 = {
                'Dgfoi': function(_0x4bc28c) {
                    return _0x4bc28c();
                },
                'jQUrt': function(_0x131155, _0x5ad753) {
                    return _0x131155(_0x5ad753);
                },
                'tJmvZ': function(_0x344e9b, _0x4880f9) {
                    return _0x344e9b !== _0x4880f9;
                },
                'XmOrZ': _0x2e72aa(0x3d3, '9iq9'),
                'FyGtR': 'OZFCX',
                'kMPBt': function(_0x499d03, _0x4b4a43) {
                    return _0x499d03 == _0x4b4a43;
                },
                'cCwSh': _0x2e72aa(0x904, 'W#uE'),
                'zVNey': function(_0xb712a0, _0x15c35d) {
                    return _0xb712a0 === _0x15c35d;
                },
                'zyKXn': function(_0x6ec3af, _0x47088a) {
                    return _0x6ec3af == _0x47088a;
                },
                'yDzOf': function(_0x2d4d2c, _0x5ddd69) {
                    return _0x2d4d2c !== _0x5ddd69;
                },
                'ptwuu': 'txvVE',
                'kaSSL': _0x2e72aa(0x889, 'qmDl'),
                'lOKJO': _0x2e72aa(0x9df, 'ygf['),
                'dHcWG': function(_0x209877, _0x27b5c7) {
                    return _0x209877 !== _0x27b5c7;
                },
                'aSivY': _0x2e72aa(0x189, 'r2Oj')
            };
        return new Promise(_0x497363 => {
            const _0x2a03d6 = _0x2e72aa;
            let _0x2cc108 = {
                'url': hostname + _0x2a03d6(0x212, '2(N#') + this['ck'][0x0],
                'headers': {
                    'Host': host,
                    'Connection': _0x2a03d6(0x9f1, '&[MC'),
                    'Content-Type': _0x2a03d6(0x686, 'MyTQ'),
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                }
            };
            $[_0x2a03d6(0x78a, 'W6*u')](_0x2cc108, async(_0x3b09b9, _0x1bb97f, _0x570625) => {
                const _0xf3dd67 = _0x2a03d6,
                    _0x2ca117 = {
                        'KVPkT': function(_0x4e83c5) {
                            const _0x3d5ef2 = _0x3899;
                            return _0x147680[_0x3d5ef2(0x459, '@m24')](_0x4e83c5);
                        },
                        'qpBOz': function(_0x59abd1, _0x4c2a00) {
                            const _0x3ec8eb = _0x3899;
                            return _0x147680[_0x3ec8eb(0xa63, 'ksby')](_0x59abd1, _0x4c2a00);
                        }
                    };
                try {
                    if (_0x3b09b9) _0x147680[_0xf3dd67(0x73f, 'Mt$M')](_0x147680[_0xf3dd67(0x5e4, 'QGOg')], _0x147680[_0xf3dd67(0x37d, 'Bu2E')]) ? $['logErr'](_0x3b09b9) : _0x3b5fd2[_0xf3dd67(0x649, 'L%wM')](_0x589b72);
                    else {
                        let _0x5bcb8f = JSON[_0xf3dd67(0x982, '#2Hi')](_0x570625);
                        if (_0x147680[_0xf3dd67(0x7ee, '##))')](_0x5bcb8f['err_no'], 0x0)) {
                            if (_0x147680[_0xf3dd67(0xa3f, 'W#uE')](_0x147680[_0xf3dd67(0x80b, '9iq9')], _0x147680['cCwSh'])) _0x32fc28(_0xf3dd67(0x78e, 'uvdB') + this[_0xf3dd67(0x246, 'QGOg')] + '】观看视频: 执行任务过快，继续执行任务');
                            else {
                                if (_0x5bcb8f['data'][_0xf3dd67(0x8ba, 'Mt$M')] && Array[_0xf3dd67(0x1f1, 'QGOg')](_0x5bcb8f[_0xf3dd67(0x900, 'Zw8m')][_0xf3dd67(0x5de, 'm#vA')]))
                                    for (let _0x1d6ad6 = 0x0; _0x1d6ad6 < _0x5bcb8f[_0xf3dd67(0x885, 'Y^n*')][_0xf3dd67(0x9dd, 'r2Oj')][_0xf3dd67(0x1b3, 'ksby')]; _0x1d6ad6++) {
                                        if (_0x147680[_0xf3dd67(0x42f, ')eXz')](_0xf3dd67(0x324, '7htc'), 'kIHsi')) _0x2ca117[_0xf3dd67(0x4e1, 'uvdB')](_0x57520c);
                                        else {
                                            let _0x39a36c = _0x5bcb8f[_0xf3dd67(0x9b0, 'R$sB')][_0xf3dd67(0x164, 'uvdB')][_0x1d6ad6];
                                            if (_0x147680[_0xf3dd67(0x4d9, ')3Og')](_0x39a36c[_0xf3dd67(0x65f, 'A]*R')], 0x61b4c)) {
                                                let _0x4e721b = JSON[_0xf3dd67(0x42d, '@m24')](_0x39a36c[_0xf3dd67(0x9b5, 'R$sB')]);
                                                _0x147680[_0xf3dd67(0x933, 'vvN[')](_0x4e721b['today_signed_in'], !![]) ? _0x147680[_0xf3dd67(0x725, 'Yo*r')](DoubleLog, _0xf3dd67(0x5c9, '2(N#') + this[_0xf3dd67(0x6e0, 'ygf[')] + _0xf3dd67(0xa25, 'A]*R') + _0x4e721b['total_days'] + ' 天') : _0x147680[_0xf3dd67(0x292, 'JZxU')](_0x147680[_0xf3dd67(0x232, 'Ato%')], _0x147680[_0xf3dd67(0x98a, 'Yo*r')]) ? _0x2ca117['qpBOz'](_0x216411, _0xf3dd67(0x399, 'ygf[') + this['index'] + _0xf3dd67(0x936, 'R$sB')) : await this[_0xf3dd67(0x9ca, 'm#vA')](0x2 * 0x3e8);
                                            }
                                        }
                                    }
                            }
                        } else _0x147680['kaSSL'] === _0x147680['lOKJO'] ? _0x35b66e['logErr'](_0x1eeb1f, _0x4ac795) : DoubleLog(_0xf3dd67(0x5c9, '2(N#') + this[_0xf3dd67(0x6d2, 'WqE!')] + '】签到信息: ' + _0x5bcb8f['err_tips']);
                    }
                } catch (_0x22dbae) {
                    _0x147680['dHcWG'](_0x147680[_0xf3dd67(0x92a, 'uvdB')], 'GZOja') ? _0x5560ed[_0xf3dd67(0x976, '^$ND')](_0x2fe3d4, _0x28f89b) : $[_0xf3dd67(0x2d2, '2(N#')](_0x22dbae, _0x1bb97f);
                } finally {
                    _0x497363();
                }
            }, _0x33b668);
        });
    }
    async['open_signin'](_0x5d9752 = 0x7d0) {
        const _0x5ba32a = _0xa91301,
            _0x3a796e = {
                'AIZmY': function(_0x28e1ca, _0x24e5c8) {
                    return _0x28e1ca !== _0x24e5c8;
                },
                'cICNv': _0x5ba32a(0x625, '!y(t'),
                'NmAfF': function(_0x4ce599, _0x4c591e) {
                    return _0x4ce599 == _0x4c591e;
                },
                'nkdPx': function(_0x519fa0, _0x171e53) {
                    return _0x519fa0(_0x171e53);
                },
                'xdmfH': function(_0x5e50c8) {
                    return _0x5e50c8();
                },
                'Irtse': _0x5ba32a(0x52f, 'WqE!'),
                'qBjWV': _0x5ba32a(0x281, 'Yo*r')
            };
        return new Promise(_0x440a9e => {
            const _0x1ca8a9 = _0x5ba32a,
                _0x1e6245 = {
                    'ccwfV': function(_0x146fe6, _0x402d6d) {
                        return _0x3a796e['nkdPx'](_0x146fe6, _0x402d6d);
                    }
                };
            let _0x3ae4f2 = {
                'url': hostname + '/luckycat/xigua/v1/task/done/daily_sign_in?' + this['ck'][0x0],
                'headers': {
                    'Host': host,
                    'Connection': _0x3a796e[_0x1ca8a9(0x4d0, 'JZxU')],
                    'Content-Type': _0x3a796e[_0x1ca8a9(0xa38, '#2Hi')],
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                },
                'body': ''
            };
            $[_0x1ca8a9(0x5f8, 'K7Hk')](_0x3ae4f2, async(_0x79265e, _0x335576, _0xfc0813) => {
                const _0x24b6f3 = _0x1ca8a9;
                try {
                    if (_0x3a796e['AIZmY'](_0x3a796e[_0x24b6f3(0x5ff, 'Bu2E')], _0x3a796e[_0x24b6f3(0x759, '9wX]')])) _0x1e6245[_0x24b6f3(0x1be, '9Ir0')](_0x1c225a, _0x24b6f3(0x5bb, 'Y^n*') + this[_0x24b6f3(0x275, ']A!w')] + _0x24b6f3(0x81b, 'WXl3') + _0x355d61[_0x24b6f3(0x3f9, 'Tx3e')]);
                    else {
                        if (_0x79265e) $[_0x24b6f3(0x67b, 'WqE!')](_0x79265e);
                        else {
                            let _0x2dafa8 = JSON['parse'](_0xfc0813);
                            _0x3a796e[_0x24b6f3(0x99f, 'A]*R')](_0x2dafa8[_0x24b6f3(0x682, 'A]*R')], 0x0) ? DoubleLog(_0x24b6f3(0x52a, '9Ir0') + this['index'] + _0x24b6f3(0x4a3, '##))') + _0x2dafa8[_0x24b6f3(0x387, '#yB#')] + _0x24b6f3(0x852, '3!Dt')) : _0x3a796e[_0x24b6f3(0x382, 'ev8C')](DoubleLog, '
 ❌ 【' + this[_0x24b6f3(0x14c, '9wX]')] + _0x24b6f3(0x8cc, 'W6*u') + _0x2dafa8['err_tips']);
                        }
                    }
                } catch (_0x402bad) {
                    $[_0x24b6f3(0x204, 'uvdB')](_0x402bad, _0x335576);
                } finally {
                    _0x3a796e[_0x24b6f3(0x518, 'ksby')](_0x440a9e);
                }
            }, _0x5d9752);
        });
    }
    async['signin_video'](_0x87cb97 = 0x7d0) {
        const _0x1e67c2 = _0xa91301,
            _0xb44774 = {
                'uCBdc': function(_0x3ad5c, _0x501dcd) {
                    return _0x3ad5c(_0x501dcd);
                },
                'NiKni': function(_0x525293, _0x10f03d) {
                    return _0x525293 == _0x10f03d;
                },
                'KnFhE': function(_0x29a43b, _0x1ab1cc) {
                    return _0x29a43b !== _0x1ab1cc;
                },
                'QuMmJ': function(_0x2df5c5, _0xf7670) {
                    return _0x2df5c5 === _0xf7670;
                },
                'rUANt': _0x1e67c2(0x271, '9Ir0'),
                'AWQQQ': 'hnsyA',
                'EfVCi': function(_0x5513fd, _0xa9ec81) {
                    return _0x5513fd == _0xa9ec81;
                },
                'Feoia': function(_0x2110cf, _0x5b207b) {
                    return _0x2110cf(_0x5b207b);
                },
                'OjFom': function(_0x2e4344, _0x1f3107) {
                    return _0x2e4344 + _0x1f3107;
                },
                'oXiSu': function(_0x312f94, _0x3791a7) {
                    return _0x312f94 < _0x3791a7;
                },
                'GJyxb': _0x1e67c2(0x777, '@m24'),
                'WsPlW': function(_0x480613, _0x2ff5c8) {
                    return _0x480613 === _0x2ff5c8;
                },
                'KBxYI': 'jdFIA',
                'tsHLl': function(_0x2cfccc, _0x39e769) {
                    return _0x2cfccc !== _0x39e769;
                },
                'Tlwfz': 'gjLZg',
                'CFkmB': _0x1e67c2(0x37f, '9Ir0'),
                'uCTuY': function(_0x515452, _0x41a295) {
                    return _0x515452 === _0x41a295;
                },
                'RQdJU': 'DJhdP',
                'EyzDz': function(_0x5118d3) {
                    return _0x5118d3();
                },
                'MybKb': function(_0x128c35, _0x1325ee) {
                    return _0x128c35(_0x1325ee);
                },
                'KPSws': function(_0x28cd34, _0x3178c3) {
                    return _0x28cd34 === _0x3178c3;
                },
                'DtFkB': _0x1e67c2(0x3f8, 'fhKC'),
                'kBRoq': _0x1e67c2(0x9b8, 'JZxU'),
                'VvpNU': 'application/x-www-form-urlencoded; charset=UTF-8'
            };
        return new Promise(_0x3e86c8 => {
            const _0x494c6c = _0x1e67c2,
                _0x612f07 = {
                    'Wxqmy': function(_0x335495, _0xd51741) {
                        return _0x335495(_0xd51741);
                    },
                    'mpKdc': function(_0x5b6953, _0x5160b9) {
                        const _0x4a6ccf = _0x3899;
                        return _0xb44774[_0x4a6ccf(0x274, 'fhKC')](_0x5b6953, _0x5160b9);
                    }
                };
            if (_0xb44774[_0x494c6c(0x947, '3!Dt')](_0xb44774[_0x494c6c(0x242, '^$ND')], _0xb44774[_0x494c6c(0x5f1, '!y(t')])) {
                let _0x270528 = {
                    'url': hostname + _0x494c6c(0x779, ']A!w') + this['ck'][0x0],
                    'headers': {
                        'Host': host,
                        'Connection': _0xb44774[_0x494c6c(0x568, 'A]*R')],
                        'Content-Type': _0xb44774[_0x494c6c(0x9d9, 'QGOg')],
                        'User-Agent': this['ck'][0x4],
                        'Cookie': this['ck'][0x1],
                        'x-argus': this['ck'][0x2],
                        'x-ladon': this['ck'][0x3]
                    },
                    'body': _0x494c6c(0xa72, '!y(t')
                };
                $[_0x494c6c(0x305, 'Bu2E')](_0x270528, async(_0x2ad370, _0x42b51f, _0x41a85f) => {
                    const _0xe3db07 = _0x494c6c,
                        _0x41403a = {
                            'ryUgv': function(_0xfc26d9, _0x4c0f6b) {
                                const _0x52e186 = _0x3899;
                                return _0xb44774[_0x52e186(0x65c, 'vvN[')](_0xfc26d9, _0x4c0f6b);
                            },
                            'vcmBH': function(_0x3a57d5, _0x378d5f) {
                                const _0x570c05 = _0x3899;
                                return _0xb44774[_0x570c05(0xa1d, 'K7Hk')](_0x3a57d5, _0x378d5f);
                            },
                            'quUtk': function(_0x485718, _0x218dad) {
                                return _0x485718(_0x218dad);
                            }
                        };
                    try {
                        if (_0xb44774[_0xe3db07(0x85b, 'UC%d')](_0xe3db07(0x650, '##))'), _0xe3db07(0x3d4, '9iq9'))) {
                            if (_0x2ad370) _0xb44774[_0xe3db07(0xa6a, 'W#uE')](_0xb44774[_0xe3db07(0x4a5, 'ksby')], _0xb44774[_0xe3db07(0x287, 'ev8C')]) ? _0x19972b['logErr'](_0x505379, _0x28cc8f) : $[_0xe3db07(0x379, '!y(t')](_0x2ad370);
                            else {
                                let _0x19d4d5 = JSON[_0xe3db07(0x194, '9iq9')](_0x41a85f);
                                if (_0xb44774['EfVCi'](_0x19d4d5[_0xe3db07(0x89f, 'Yo*r')], 0x2716)) _0xb44774[_0xe3db07(0x8ad, '!y(t')](DoubleLog, _0xe3db07(0x79a, '#2Hi') + this['index'] + '】签到视频: 每天签到广告赚金币已达上限');
                                else {
                                    if (_0x19d4d5[_0xe3db07(0x913, 'L%wM')] == 0x2717) _0xb44774[_0xe3db07(0x344, 'W6*u')](DoubleLog, _0xe3db07(0x730, '9iq9') + this['index'] + _0xe3db07(0xa96, 'vvN['));
                                    else {
                                        if (_0x19d4d5[_0xe3db07(0x1b8, '#yB#')] == 0x2719) _0xb44774[_0xe3db07(0x27f, '3!Dt')](DoubleLog, '
 ❌ 【' + this['index'] + _0xe3db07(0x7be, '#yB#'));
                                        else {
                                            if (_0x19d4d5[_0xe3db07(0xa46, 'ksby')] == 0x0)
                                                for (let _0x22624f = 0x0; _0x22624f < numvodie; _0x22624f = _0xb44774['OjFom'](_0x22624f, 0x1)) {
                                                    if (_0x19d4d5[_0xe3db07(0x1b8, '#yB#')] == 0x2716) {
                                                        DoubleLog(_0xe3db07(0x5c9, '2(N#') + this[_0xe3db07(0x40d, 'z9*t')] + _0xe3db07(0x539, 'fhKC'));
                                                        break;
                                                    } else {
                                                        if (_0x19d4d5[_0xe3db07(0x840, 'Ato%')] == 0x2717) {
                                                            _0xb44774[_0xe3db07(0x5fc, 'z9*t')](DoubleLog, _0xe3db07(0x533, 'Yo*r') + this['index'] + _0xe3db07(0x318, '3!Dt'));
                                                            break;
                                                        } else {
                                                            if (_0x19d4d5[_0xe3db07(0x478, '9Ir0')] == 0x2719) _0xb44774['Feoia'](DoubleLog, '
 ❌ 【' + this[_0xe3db07(0x65b, 'Ato%')] + '】签到视频: 执行任务过快，继续执行任务');
                                                            else {
                                                                if (_0xb44774[_0xe3db07(0x63d, '&[MC')](_0x19d4d5[_0xe3db07(0x322, 'Yo*r')]['amount'], numamount)) {
                                                                    if (_0xb44774[_0xe3db07(0x727, 'K7Hk')] === _0xb44774[_0xe3db07(0x939, 'z9*t')]) {
                                                                        DoubleLog('
 ✅ 【' + this[_0xe3db07(0x5e6, '^ut3')] + _0xe3db07(0x1dd, '##))') + _0x19d4d5[_0xe3db07(0x67d, '9Ir0')][_0xe3db07(0x6d7, ']A!w')] + _0xe3db07(0x417, '9iq9'));
                                                                        break;
                                                                    } else _0x41403a[_0xe3db07(0x785, 'fhKC')](_0x83d005, '
 ❌ 【' + this[_0xe3db07(0x23a, 'W#uE')] + '】吃饭视频: 每天吃饭广告赚金币已达上限');
                                                                } else await this['signin_video_stop'](0x2 * 0x3e8), await $[_0xe3db07(0x47d, '!y(t')](0x7530);
                                                            }
                                                        }
                                                    } if (_0x22624f == numvodie) {
                                                        if (_0xb44774[_0xe3db07(0x7e2, 'UC%d')](_0xb44774[_0xe3db07(0x8b9, '^$ND')], 'tOdEm')) _0x612f07[_0xe3db07(0x6ef, '3!Dt')](_0x159911, _0xe3db07(0x56f, 'r2Oj') + this[_0xe3db07(0x5f5, 'Yo*r')] + _0xe3db07(0xa20, 'ev8C') + _0x1a5266[_0xe3db07(0x343, '^8@B')] + ' 天');
                                                        else break;
                                                    }
                                                } else _0xb44774[_0xe3db07(0xa49, 'W#uE')](_0xb44774[_0xe3db07(0x3aa, 'Zw8m')], _0xb44774[_0xe3db07(0x2a4, 'm#vA')]) ? DoubleLog(_0xe3db07(0x794, '@m24') + this[_0xe3db07(0x884, '#2Hi')] + _0xe3db07(0x26d, 'MyTQ') + _0x19d4d5[_0xe3db07(0x6b1, '&[MC')]) : _0x3188b8[_0xe3db07(0x517, '@m24')](_0x39da2f, _0x3f5f84);
                                        }
                                    }
                                }
                            }
                        } else {
                            let _0x3c92d9 = _0x450716[_0xe3db07(0x27c, 'qmDl')](_0x7b9937);
                            _0x41403a[_0xe3db07(0x8da, 'Yo*r')](_0x3c92d9['code'], 0x0) ? _0x41403a[_0xe3db07(0x79e, 'z9*t')](_0x188397, _0xe3db07(0x1b6, 'L%wM') + this[_0xe3db07(0x395, 'vvN[')] + '】免费领水: 获得 10 水滴') : _0x41403a[_0xe3db07(0x4e8, 'Tx3e')](_0x4b8e55, _0xe3db07(0x612, 'R$sB') + this[_0xe3db07(0x40b, 'Bu2E')] + _0xe3db07(0x54d, ']A!w') + _0x3c92d9['message']);
                        }
                    } catch (_0x98e5c3) {
                        $[_0xe3db07(0x67b, 'WqE!')](_0x98e5c3, _0x42b51f);
                    } finally {
                        _0xb44774[_0xe3db07(0x5c7, '!y(t')](_0xb44774['RQdJU'], _0xb44774[_0xe3db07(0x356, '3!Dt')]) ? _0xb44774[_0xe3db07(0x70a, '^8@B')](_0x3e86c8) : _0x41403a[_0xe3db07(0x279, 'ygf[')](_0x2e24f8, '
 ❌ 【' + this[_0xe3db07(0x941, '3!Dt')] + _0xe3db07(0x6f6, 'Mt$M') + _0x38efaa[_0xe3db07(0x8c7, 'Zw8m')]);
                    }
                }, _0x87cb97);
            } else {
                let _0x5ab408 = _0x360253['parse'](_0x1a45a1);
                _0x5ab408[_0x494c6c(0x1aa, 'K7Hk')] == 0x0 ? _0x612f07['mpKdc'](_0x1f2747, _0x494c6c(0x352, 'W#uE') + this['index'] + _0x494c6c(0x695, 'vvN[') + _0x5ab408[_0x494c6c(0x575, '9iq9')][_0x494c6c(0x173, 'WaIa')] + _0x494c6c(0x3df, 'MyTQ')) : _0x612f07[_0x494c6c(0x49f, 'qmDl')](_0x3571a1, _0x494c6c(0x667, 'fhKC') + this[_0x494c6c(0x1fa, '@m24')] + _0x494c6c(0x548, '^$ND') + _0x5ab408['message']);
            }
        });
    }
    async[_0xa91301(0x99c, 'fhKC')](_0x22db70 = 0x7d0) {
        const _0x129b68 = _0xa91301,
            _0x331e88 = {
                'cBxrx': function(_0x872e20, _0x12f3df) {
                    return _0x872e20(_0x12f3df);
                },
                'HfyRG': function(_0x310ae8, _0x262d87) {
                    return _0x310ae8 !== _0x262d87;
                },
                'wdxwH': _0x129b68(0x2ef, 'm#vA'),
                'GfYZX': function(_0x4fdfd6, _0x2e9e36) {
                    return _0x4fdfd6(_0x2e9e36);
                },
                'kcnpD': _0x129b68(0x4ad, 'UC%d'),
                'hLpim': function(_0x506b2e, _0x5ee59d) {
                    return _0x506b2e(_0x5ee59d);
                },
                'kPWQo': function(_0xd37f7a, _0x10207) {
                    return _0xd37f7a == _0x10207;
                },
                'EGOYv': 'bzwDu',
                'GarLJ': function(_0x4e06a4) {
                    return _0x4e06a4();
                },
                'XsEZo': _0x129b68(0x52f, 'WqE!'),
                'xVLzs': 'application/x-www-form-urlencoded; charset=UTF-8'
            };
        return new Promise(_0x5613de => {
            const _0x5b4fe7 = _0x129b68;
            let _0x256e90 = {
                'url': hostname + _0x5b4fe7(0x2f6, 'r2Oj') + this['ck'][0x0],
                'headers': {
                    'Host': host,
                    'Connection': _0x331e88[_0x5b4fe7(0x678, '^8@B')],
                    'Content-Type': _0x331e88['xVLzs'],
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                },
                'body': 'ad_fallback=false&reward_stage=2&income_id=1009601_109521973635_1689925372308'
            };
            $[_0x5b4fe7(0x8cd, 'WXl3')](_0x256e90, async(_0x41fc33, _0x4772b4, _0xff9965) => {
                const _0x30bdcc = _0x5b4fe7,
                    _0x5b3768 = {
                        'TiWFi': function(_0x3c4491, _0x3776c6) {
                            return _0x331e88['cBxrx'](_0x3c4491, _0x3776c6);
                        }
                    };
                try {
                    if (_0x41fc33) _0x331e88[_0x30bdcc(0x99b, '2(N#')]('RCyOf', _0x331e88[_0x30bdcc(0x20e, '^H2k')]) ? $[_0x30bdcc(0x196, '7htc')](_0x41fc33) : _0x4e790e['logErr'](_0x6b6fe5);
                    else {
                        let _0xc6d902 = JSON['parse'](_0xff9965);
                        if (_0xc6d902[_0x30bdcc(0x257, 'Zw8m')] == 0x0) _0x331e88['GfYZX'](DoubleLog, _0x30bdcc(0x563, 'r2Oj') + this[_0x30bdcc(0x40d, 'z9*t')] + _0x30bdcc(0x6a6, 'vvN[') + _0xc6d902['data'][_0x30bdcc(0xa10, '^H2k')] + _0x30bdcc(0x716, 'QGOg'));
                        else {
                            if (_0xc6d902[_0x30bdcc(0x569, ')3Og')] == 0x2716) _0x331e88[_0x30bdcc(0x1c8, 'K7Hk')] === _0x331e88['kcnpD'] ? _0x331e88[_0x30bdcc(0x546, 'fhKC')](DoubleLog, _0x30bdcc(0x3b1, 'W6*u') + this[_0x30bdcc(0x853, 'fhKC')] + _0x30bdcc(0x496, '9Ir0')) : _0x5b3768[_0x30bdcc(0xa65, 'Y^n*')](_0x2b7d26, _0x30bdcc(0x39b, ']A!w') + this[_0x30bdcc(0xaad, 'WaIa')] + '】广告赚金: 下次看广告：' + _0x33eade);
                            else {
                                if (_0xc6d902[_0x30bdcc(0x676, ')eXz')] == 0x2717) _0x331e88[_0x30bdcc(0x76b, 'Mt$M')](DoubleLog, _0x30bdcc(0x639, '^H2k') + this['index'] + _0x30bdcc(0xa4d, 'QGOg'));
                                else _0x331e88['kPWQo'](_0xc6d902[_0x30bdcc(0x2d5, '6GlL')], 0x2719) ? _0x331e88[_0x30bdcc(0x48e, '3!Dt')](DoubleLog, _0x30bdcc(0x3f5, 'QGOg') + this['index'] + '】签到视频: 执行任务过快，继续执行任务') : _0x331e88[_0x30bdcc(0x7d1, 'L%wM')](DoubleLog, _0x30bdcc(0x730, '9iq9') + this['index'] + _0x30bdcc(0x298, '#yB#') + _0xc6d902['err_tips']);
                            }
                        }
                    }
                } catch (_0x4899c7) {
                    $[_0x30bdcc(0x408, '9Ir0')](_0x4899c7, _0x4772b4);
                } finally {
                    _0x331e88[_0x30bdcc(0x9c0, '#2Hi')](_0x30bdcc(0x187, 'K7Hk'), _0x331e88[_0x30bdcc(0x9f4, 'L%wM')]) ? _0xa9ae45[_0x30bdcc(0x94e, 'W6*u')](_0x2b9ae5) : _0x331e88[_0x30bdcc(0x388, 'JZxU')](_0x5613de);
                }
            }, _0x22db70);
        });
    }
    async['doneeat'](_0x241350 = 0x7d0) {
        const _0x1e0dbb = _0xa91301,
            _0x8b4fe6 = {
                'LeLWk': function(_0x55ab13, _0x53bf0f) {
                    return _0x55ab13 !== _0x53bf0f;
                },
                'mBOem': _0x1e0dbb(0x4a4, 'WqE!'),
                'pWFTs': 'fqEZd',
                'apqPI': function(_0x5a572e, _0x17f35d) {
                    return _0x5a572e(_0x17f35d);
                },
                'BYRcs': function(_0x273f33, _0x494b78) {
                    return _0x273f33 < _0x494b78;
                },
                'sdbsZ': function(_0x382240, _0x212a04) {
                    return _0x382240 !== _0x212a04;
                },
                'sinXi': _0x1e0dbb(0x6be, '#yB#'),
                'rvYov': function(_0x2243f3, _0x259f73) {
                    return _0x2243f3 > _0x259f73;
                },
                'CxPxa': function(_0xaf44f7, _0x128abb) {
                    return _0xaf44f7 < _0x128abb;
                },
                'wHlul': _0x1e0dbb(0x21e, '#yB#'),
                'mkNNJ': function(_0xb0eec3, _0x59a811) {
                    return _0xb0eec3(_0x59a811);
                },
                'fpqoL': function(_0x2bfbf4, _0x1406eb) {
                    return _0x2bfbf4 * _0x1406eb;
                },
                'RWgDA': function(_0x3e5b4e, _0x35c4af) {
                    return _0x3e5b4e > _0x35c4af;
                },
                'NayjI': function(_0x1aeca3, _0x3b6555) {
                    return _0x1aeca3 * _0x3b6555;
                },
                'VryMy': function(_0x201671, _0x1ec0b6) {
                    return _0x201671 < _0x1ec0b6;
                },
                'dqklv': _0x1e0dbb(0x3f3, '2(N#'),
                'lfCrJ': function(_0x4a73a2) {
                    return _0x4a73a2();
                },
                'hUuHO': 'Keep-Alive',
                'AxvTE': 'application/x-www-form-urlencoded; charset=UTF-8'
            };
        return new Promise(_0x2f1eb0 => {
            const _0x3dab7f = _0x1e0dbb,
                _0x548efa = {
                    'IIHJD': function(_0x3dab2d, _0x2f504c) {
                        const _0xe02579 = _0x3899;
                        return _0x8b4fe6[_0xe02579(0x95d, 'ksby')](_0x3dab2d, _0x2f504c);
                    },
                    'cuwfx': function(_0x2c5055, _0xa58cdf) {
                        return _0x2c5055 == _0xa58cdf;
                    },
                    'jzVQe': function(_0x31425d, _0x1665ae) {
                        return _0x8b4fe6['NayjI'](_0x31425d, _0x1665ae);
                    }
                };
            let _0x4833e2 = {
                'url': hostname + _0x3dab7f(0x29f, '9Ir0') + this['ck'][0x0],
                'headers': {
                    'Host': host,
                    'Connection': _0x8b4fe6['hUuHO'],
                    'Content-Type': _0x8b4fe6[_0x3dab7f(0x950, 'fhKC')],
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                }
            };
            $[_0x3dab7f(0xa33, '2(N#')](_0x4833e2, async(_0x2461f8, _0x863c86, _0x5cbb92) => {
                const _0x109a13 = _0x3dab7f;
                try {
                    if (_0x2461f8) $[_0x109a13(0x5ce, '&[MC')](_0x2461f8);
                    else {
                        if (_0x8b4fe6['LeLWk'](_0x8b4fe6[_0x109a13(0x54f, '9iq9')], _0x8b4fe6[_0x109a13(0x7c4, 'ygf[')])) {
                            let _0x5c2b7a = JSON['parse'](_0x5cbb92);
                            if (_0x5c2b7a['err_no'] == 0x0) {
                                let _0x208d13 = _0x8b4fe6['apqPI'](parseInt, $[_0x109a13(0xa7f, '#yB#')]('HH'));
                                if (_0x208d13 > 0x5 && _0x8b4fe6[_0x109a13(0x63f, 'MyTQ')](_0x208d13, 0x9)) {
                                    if (_0x8b4fe6['sdbsZ']('sRjOx', _0x8b4fe6[_0x109a13(0x364, '9iq9')])) _0x8b4fe6[_0x109a13(0x590, '&[MC')](DoubleLog, _0x109a13(0xa6b, ']A!w') + this[_0x109a13(0x6e0, 'ygf[')] + '】吃饭打卡: 该时间为早餐段，执行早餐任务'), await $[_0x109a13(0x361, 'qmDl')](0x3e8), await this[_0x109a13(0x69a, 'R$sB')](0x0, 0x2 * 0x3e8);
                                    else
                                        for (let _0x51c558 = 0x0; _0x548efa[_0x109a13(0x248, 'A]*R')](_0x51c558, _0x11616e[_0x109a13(0x2c4, 'Tx3e')][_0x109a13(0x72f, 'JZxU')][_0x109a13(0x4fb, 'Yo*r')]); _0x51c558++) {
                                            let _0x762bd1 = _0x9b4464[_0x109a13(0x9b0, 'R$sB')][_0x109a13(0x892, 'QGOg')][_0x51c558];
                                            if (_0x548efa[_0x109a13(0x7b0, 'qmDl')](_0x762bd1['task_id'], 0x410)) {
                                                let _0x28032e = _0x31b327[_0x109a13(0x7dc, '^ut3')](_0x762bd1[_0x109a13(0x741, '9wX]')]);
                                                _0x42a0cd(_0x109a13(0x52a, '9Ir0') + this[_0x109a13(0x23a, 'W#uE')] + '】视频统计: 已赚 ' + _0x28032e[_0x109a13(0x592, 'WXl3')] + _0x109a13(0x80a, 'Mt$M') + _0x196df1[_0x109a13(0x63b, '#2Hi')]('mm:ss', _0x548efa[_0x109a13(0x9fd, 'Yo*r')](_0x28032e[_0x109a13(0x9c1, 'vvN[')], 0x3e8)) + _0x109a13(0x73c, '^H2k'));
                                            }
                                        }
                                } else {
                                    if (_0x8b4fe6[_0x109a13(0x3e0, 'Zw8m')](_0x208d13, 0xb) && _0x8b4fe6['CxPxa'](_0x208d13, 0xe)) _0x109a13(0x53d, '##))') === _0x8b4fe6[_0x109a13(0x2f2, '&[MC')] ? (_0x8b4fe6[_0x109a13(0x6d1, '9iq9')](DoubleLog, _0x109a13(0x185, 'L%wM') + this[_0x109a13(0x92f, '^H2k')] + '】吃饭打卡: 该时间为午餐段，执行午餐任务'), await $[_0x109a13(0xa74, '9wX]')](0x3e8), await this[_0x109a13(0x8fc, 'L%wM')](0x1, _0x8b4fe6[_0x109a13(0x70c, 'r2Oj')](0x2, 0x3e8))) : _0x11b3e8[_0x109a13(0x2d2, '2(N#')](_0x254093);
                                    else {
                                        if (_0x8b4fe6[_0x109a13(0x55e, 'Tx3e')](_0x208d13, 0x11) && _0x8b4fe6[_0x109a13(0x245, 'z9*t')](_0x208d13, 0x13)) _0x8b4fe6[_0x109a13(0x473, '7htc')](DoubleLog, _0x109a13(0x485, '9iq9') + this[_0x109a13(0x5f5, 'Yo*r')] + '】吃饭打卡: 该时间为晚餐段，执行晚餐任务'), await $[_0x109a13(0x6cf, 'W6*u')](0x3e8), await this[_0x109a13(0x946, '&[MC')](0x2, _0x8b4fe6[_0x109a13(0x5db, 'z9*t')](0x2, 0x3e8));
                                        else _0x208d13 > 0x15 && _0x8b4fe6[_0x109a13(0x179, '@m24')](_0x208d13, 0x17) ? (DoubleLog('
 ✅ 【' + this[_0x109a13(0x723, 'ev8C')] + '】吃饭打卡: 该时间为夜宵段，执行夜宵任务'), await $[_0x109a13(0x3af, 'L%wM')](0x3e8), await this['open_doneeat'](0x3, 0x2 * 0x3e8)) : _0x8b4fe6[_0x109a13(0xa2a, 'Tx3e')](DoubleLog, '
 ❌ 【' + this['index'] + _0x109a13(0x58e, 'WaIa'));
                                    }
                                }
                            } else _0x8b4fe6['mkNNJ'](DoubleLog, _0x109a13(0x988, '^8@B') + this[_0x109a13(0xa5e, 'MyTQ')] + _0x109a13(0x1d4, 'QGOg') + _0x5c2b7a['err_tips']);
                        } else _0x4c1f33[_0x109a13(0x2f9, 'K7Hk')](_0x50aa42);
                    }
                } catch (_0x4602c4) {
                    _0x8b4fe6[_0x109a13(0x386, '^$ND')](_0x8b4fe6[_0x109a13(0x425, '!y(t')], _0x109a13(0x622, 'Tx3e')) ? $[_0x109a13(0x204, 'uvdB')](_0x4602c4, _0x863c86) : _0x4da646['logErr'](_0x2443a4, _0x53e333);
                } finally {
                    _0x8b4fe6[_0x109a13(0x424, '^H2k')](_0x2f1eb0);
                }
            }, _0x241350);
        });
    }
    async[_0xa91301(0x7c9, 'WaIa')](_0x34c543, _0x2a63d5 = 0x7d0) {
        const _0x5ab666 = _0xa91301,
            _0x2d4a61 = {
                'JsJRQ': function(_0x2be2a7) {
                    return _0x2be2a7();
                },
                'TmsuD': function(_0x3afe34, _0x4f4aa1) {
                    return _0x3afe34 == _0x4f4aa1;
                },
                'gElnD': function(_0x597907, _0x4a581c) {
                    return _0x597907 !== _0x4a581c;
                },
                'tajJL': _0x5ab666(0x5bd, 'z9*t'),
                'NUUkL': function(_0x4f1e79, _0x1344ff) {
                    return _0x4f1e79 !== _0x1344ff;
                },
                'cJhjo': _0x5ab666(0x4cc, 'A]*R'),
                'dDBIa': 'application/x-www-form-urlencoded; charset=UTF-8'
            };
        return new Promise(_0x3400bf => {
            const _0x34a40e = _0x5ab666,
                _0x21b7c5 = {
                    'NbzoV': function(_0x187711) {
                        const _0x1fecbb = _0x3899;
                        return _0x2d4a61[_0x1fecbb(0x214, '^H2k')](_0x187711);
                    },
                    'Vkvjx': function(_0x2d92dc, _0x28ab56) {
                        return _0x2d92dc(_0x28ab56);
                    },
                    'eLfjH': function(_0x406699, _0x1f772a) {
                        return _0x2d4a61['TmsuD'](_0x406699, _0x1f772a);
                    },
                    'ymtXf': function(_0x37fee6, _0x4fd998) {
                        const _0xb412f = _0x3899;
                        return _0x2d4a61[_0xb412f(0x3ea, '6GlL')](_0x37fee6, _0x4fd998);
                    },
                    'ATdsz': _0x34a40e(0x291, ']A!w'),
                    'CfOQF': function(_0x2aaaf8, _0x2882c8) {
                        return _0x2aaaf8 === _0x2882c8;
                    },
                    'BurOt': _0x34a40e(0x5a1, '9Ir0'),
                    'JFNgF': _0x2d4a61['tajJL'],
                    'sWIgZ': function(_0x29cf16, _0x2df774) {
                        const _0x3ec2a7 = _0x34a40e;
                        return _0x2d4a61[_0x3ec2a7(0x7c7, '^ut3')](_0x29cf16, _0x2df774);
                    },
                    'SbnwV': _0x2d4a61[_0x34a40e(0x502, 'A]*R')],
                    'WpdbW': function(_0x338406, _0x297ea0) {
                        return _0x338406(_0x297ea0);
                    },
                    'AtBvk': function(_0x591cbb, _0x42c7fa) {
                        return _0x591cbb == _0x42c7fa;
                    },
                    'xdKdG': _0x34a40e(0x66d, '9Ir0'),
                    'esdVX': function(_0x43d591, _0x576560) {
                        const _0x53eb02 = _0x34a40e;
                        return _0x2d4a61[_0x53eb02(0x5f7, 'Mt$M')](_0x43d591, _0x576560);
                    },
                    'wPlxi': _0x34a40e(0x2ac, '2(N#')
                };
            let _0x2ad17c = {
                'url': hostname + _0x34a40e(0x513, '&[MC') + this['ck'][0x0],
                'headers': {
                    'Host': host,
                    'Connection': _0x34a40e(0x5cc, '7htc'),
                    'Content-Type': _0x2d4a61[_0x34a40e(0x8eb, 'ksby')],
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                },
                'body': 'time_conf_id=' + _0x34c543
            };
            $[_0x34a40e(0x8b7, '##))')](_0x2ad17c, async(_0x250559, _0x2d9272, _0x17d85f) => {
                const _0x35ad0d = _0x34a40e,
                    _0x832262 = {
                        'gRnnA': function(_0x33abdd, _0x2ab2f0) {
                            return _0x33abdd(_0x2ab2f0);
                        },
                        'ZjwwF': function(_0x41f508, _0xe33773) {
                            const _0x3f67fe = _0x3899;
                            return _0x21b7c5[_0x3f67fe(0x525, 'm#vA')](_0x41f508, _0xe33773);
                        },
                        'XdntK': function(_0x334783, _0x1c5d40) {
                            const _0x4c7a4e = _0x3899;
                            return _0x21b7c5[_0x4c7a4e(0x175, ')3Og')](_0x334783, _0x1c5d40);
                        },
                        'PKVNi': 'success',
                        'OyOJh': function(_0x39c067, _0x2d2f19) {
                            const _0x2ec832 = _0x3899;
                            return _0x21b7c5[_0x2ec832(0x288, 'R$sB')](_0x39c067, _0x2d2f19);
                        }
                    };
                if (_0x21b7c5[_0x35ad0d(0x1f0, 'fhKC')](_0x21b7c5[_0x35ad0d(0xa50, '^H2k')], _0x21b7c5[_0x35ad0d(0x415, '9iq9')])) _0x500f18(_0x35ad0d(0x594, 'A]*R') + this[_0x35ad0d(0x68d, '##))')] + '】广告赚金: 执行任务过快，继续执行任务');
                else try {
                    if (_0x21b7c5[_0x35ad0d(0x31f, '7htc')](_0x35ad0d(0x804, 'R$sB'), 'XyYIU')) {
                        if (_0x250559) _0x21b7c5['BurOt'] !== _0x21b7c5[_0x35ad0d(0x825, 'A]*R')] ? $[_0x35ad0d(0x45b, ')eXz')](_0x250559) : _0x1887b3[_0x35ad0d(0x499, ']A!w')](_0x1b4fd2, _0xd9e5b7);
                        else {
                            if (_0x21b7c5[_0x35ad0d(0x4ce, 'ksby')](_0x35ad0d(0x81c, '#yB#'), 'RrKxW')) {
                                let _0x3b3beb = JSON[_0x35ad0d(0x323, 'QGOg')](_0x17d85f);
                                if (_0x3b3beb[_0x35ad0d(0x7f4, 'WqE!')] == 0x0) DoubleLog(_0x35ad0d(0x485, '9iq9') + this[_0x35ad0d(0x93b, '#yB#')] + _0x35ad0d(0x9e0, 'WaIa') + _0x3b3beb[_0x35ad0d(0x4b7, '@m24')][_0x35ad0d(0x255, '##))')] + ' 金币');
                                else {
                                    if (_0x3b3beb['err_no'] == 0x2716) _0x21b7c5['SbnwV'] === _0x21b7c5['SbnwV'] ? _0x21b7c5[_0x35ad0d(0x3cf, 'uvdB')](DoubleLog, _0x35ad0d(0x765, '7htc') + this['index'] + _0x35ad0d(0x337, 'Tx3e')) : _0x54857[_0x35ad0d(0x3d9, '#yB#')](_0x10f190);
                                    else _0x21b7c5[_0x35ad0d(0x61b, 'ev8C')](_0x3b3beb[_0x35ad0d(0xa4c, 'Mt$M')], 0x2719) ? _0x21b7c5['CfOQF'](_0x21b7c5[_0x35ad0d(0x726, '#2Hi')], 'TnLbI') ? DoubleLog('
 ❌ 【' + this[_0x35ad0d(0x927, '2(N#')] + _0x35ad0d(0x442, 'L%wM')) : _0x832262[_0x35ad0d(0x4cd, 'fhKC')](_0x2ed51e, _0x35ad0d(0x332, '9Ir0') + this[_0x35ad0d(0x40b, 'Bu2E')] + _0x35ad0d(0x923, 'Zw8m')) : DoubleLog(_0x35ad0d(0x988, '^8@B') + this[_0x35ad0d(0x92f, '^H2k')] + '】吃饭打卡: ' + _0x3b3beb[_0x35ad0d(0x88f, 'qmDl')]);
                                }
                            } else _0x832262[_0x35ad0d(0xa7c, '!y(t')](_0x803e26, _0x35ad0d(0x5bb, 'Y^n*') + this[_0x35ad0d(0x6b7, 'ksby')] + _0x35ad0d(0x75e, 'MyTQ'));
                        }
                    } else {
                        let _0x15548b = _0x28a8b5[_0x35ad0d(0x2d0, 'WXl3')](_0x547db3);
                        if (_0x832262[_0x35ad0d(0x440, '^H2k')](_0x15548b['message'], _0x832262[_0x35ad0d(0x2af, 'Yo*r')])) {
                            let _0x112dd2 = _0x15548b['data'][_0x35ad0d(0x427, 'WXl3')],
                                _0x176fcc = _0x15548b['data'][_0x35ad0d(0x4a0, '&[MC')],
                                _0x2d7ee2 = _0x15548b[_0x35ad0d(0x4b7, '@m24')][_0x35ad0d(0x7fb, 'z9*t')];
                            _0x832262[_0x35ad0d(0x69c, '9iq9')](_0x1cc035, _0x35ad0d(0x360, '&[MC') + this[_0x35ad0d(0x5e6, '^ut3')] + '】用户信息: ' + _0x15548b[_0x35ad0d(0x8fe, 'z9*t')]['mobile'] + '，' + _0x15548b[_0x35ad0d(0x928, ')3Og')][_0x35ad0d(0x409, '9Ir0')]);
                        } else _0x832262[_0x35ad0d(0x88d, 'z9*t')](_0x540e7c, _0x35ad0d(0x820, 'Mt$M') + this[_0x35ad0d(0x629, 'Tx3e')] + '】用户信息: ' + _0x15548b[_0x35ad0d(0x29b, 'uvdB')]);
                    }
                } catch (_0x3d8100) {
                    $[_0x35ad0d(0x196, '7htc')](_0x3d8100, _0x2d9272);
                } finally {
                    _0x21b7c5['esdVX'](_0x35ad0d(0x7f9, 'Bu2E'), _0x21b7c5[_0x35ad0d(0x918, 'r2Oj')]) ? _0x21b7c5['NbzoV'](_0x31b9c6) : _0x3400bf();
                }
            }, _0x2a63d5);
        });
    }
    async['doneeat_video'](_0x4122fa = 0x7d0) {
        const _0x431e8a = _0xa91301,
            _0x67823a = {
                'kOOQr': function(_0x313b8b, _0x33526b) {
                    return _0x313b8b(_0x33526b);
                },
                'TQvAT': _0x431e8a(0x564, 'ev8C'),
                'AKhly': _0x431e8a(0x22c, 'uvdB'),
                'Hszen': function(_0x51b8a4, _0x5533ce) {
                    return _0x51b8a4 === _0x5533ce;
                },
                'jebNE': _0x431e8a(0x8af, '^H2k'),
                'EBNjB': function(_0xda51e4, _0x326de6) {
                    return _0xda51e4 == _0x326de6;
                },
                'HaemC': 'sYlZd',
                'oVddq': function(_0x1fe8ca, _0x180950) {
                    return _0x1fe8ca == _0x180950;
                },
                'IVSsV': function(_0x6d5158, _0x190538) {
                    return _0x6d5158(_0x190538);
                },
                'qsFNo': _0x431e8a(0x44b, 'fhKC'),
                'gWAwb': _0x431e8a(0x6f7, '&[MC'),
                'srBEY': function(_0x4eaf6d, _0x22890d) {
                    return _0x4eaf6d + _0x22890d;
                },
                'zBtwI': _0x431e8a(0x3cd, 'W6*u'),
                'yzZhP': function(_0x2f10e2, _0x339ec6) {
                    return _0x2f10e2 == _0x339ec6;
                },
                'wogCN': function(_0x3f0d9b, _0x38a3b8) {
                    return _0x3f0d9b(_0x38a3b8);
                },
                'KsLTV': function(_0x3bbd43, _0x1b1730) {
                    return _0x3bbd43 < _0x1b1730;
                },
                'UgaPh': _0x431e8a(0x868, '!y(t'),
                'RpQuA': 'sszkP',
                'pciup': _0x431e8a(0x799, 'm#vA'),
                'WYNFJ': function(_0x7017f2, _0x3d970b) {
                    return _0x7017f2 * _0x3d970b;
                },
                'kpwDC': function(_0x114305, _0x5dbffb) {
                    return _0x114305 === _0x5dbffb;
                },
                'wdeJy': 'kbOJj',
                'QcGDO': function(_0x204463) {
                    return _0x204463();
                },
                'tTRzc': function(_0x3caffc, _0x467097) {
                    return _0x3caffc(_0x467097);
                },
                'tTcsr': function(_0x1b964b) {
                    return _0x1b964b();
                },
                'RSMZd': 'Keep-Alive',
                'MqfQq': _0x431e8a(0x9aa, 'Y^n*')
            };
        return new Promise(_0x370f3a => {
            const _0x135693 = _0x431e8a,
                _0x3e4016 = {
                    'MzBIr': function(_0x5610eb, _0x4a5617) {
                        const _0x5a5058 = _0x3899;
                        return _0x67823a[_0x5a5058(0x86a, 'fhKC')](_0x5610eb, _0x4a5617);
                    },
                    'ZEZUC': function(_0x376bdf, _0x26fca3) {
                        const _0x40b6ec = _0x3899;
                        return _0x67823a[_0x40b6ec(0x645, 'K7Hk')](_0x376bdf, _0x26fca3);
                    },
                    'vRRUU': function(_0x10e0ed) {
                        return _0x67823a['tTcsr'](_0x10e0ed);
                    }
                };
            let _0x186eb0 = {
                'url': hostname + _0x135693(0x451, 'K7Hk') + this['ck'][0x0],
                'headers': {
                    'Host': host,
                    'Connection': _0x67823a[_0x135693(0x32e, 'WXl3')],
                    'Content-Type': _0x67823a[_0x135693(0x365, 'r2Oj')],
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                },
                'body': _0x135693(0x41f, '^8@B')
            };
            $['post'](_0x186eb0, async(_0x322c4b, _0x2bd8dd, _0x34f27b) => {
                const _0x43c826 = _0x135693,
                    _0x35fc75 = {
                        'kSAoj': function(_0x5b7416, _0x3eb1be) {
                            const _0x914538 = _0x3899;
                            return _0x67823a[_0x914538(0x1de, 'UC%d')](_0x5b7416, _0x3eb1be);
                        }
                    };
                if (_0x67823a[_0x43c826(0x208, '9Ir0')] !== _0x67823a['AKhly']) try {
                    if (_0x67823a[_0x43c826(0x64a, 'WaIa')](_0x67823a[_0x43c826(0x876, 'K7Hk')], 'toHxs')) {
                        let _0x23aa96 = _0x5c7d85['data']['user_id'],
                            _0x2abd39 = _0x3bfc7b['data'][_0x43c826(0x66f, 'W#uE')],
                            _0x24af83 = _0x5bc2c0['data'][_0x43c826(0x87d, 'L%wM')];
                        _0x3e4016['MzBIr'](_0x139b5e, _0x43c826(0x378, '!y(t') + this[_0x43c826(0x165, 'm#vA')] + '】用户信息: ' + _0x5455b0[_0x43c826(0x322, 'Yo*r')][_0x43c826(0x955, 'Zw8m')] + '，' + _0x166c78[_0x43c826(0x5eb, '3!Dt')][_0x43c826(0x181, 'QGOg')]);
                    } else {
                        if (_0x322c4b) $[_0x43c826(0x8df, 'Bu2E')](_0x322c4b);
                        else {
                            let _0x5dd8d3 = JSON[_0x43c826(0x587, 'Yo*r')](_0x34f27b);
                            if (_0x67823a[_0x43c826(0x363, 'WXl3')](_0x5dd8d3['err_no'], 0x2716)) _0x67823a['HaemC'] === _0x67823a['HaemC'] ? _0x67823a[_0x43c826(0x601, '#2Hi')](DoubleLog, _0x43c826(0x2c6, 'K7Hk') + this[_0x43c826(0x941, '3!Dt')] + _0x43c826(0x8e1, 'fhKC')) : _0x30b178['logErr'](_0x4a86cf, _0x591989);
                            else {
                                if (_0x67823a[_0x43c826(0x572, 'R$sB')](_0x5dd8d3[_0x43c826(0x1b8, '#yB#')], 0x2717)) _0x67823a[_0x43c826(0x4a8, '7htc')](DoubleLog, _0x43c826(0x78e, 'uvdB') + this['index'] + '】吃饭视频: 该账号没有可执行任务，可能是新号');
                                else {
                                    if (_0x5dd8d3[_0x43c826(0x840, 'Ato%')] == 0x2719) _0x67823a[_0x43c826(0x783, '2(N#')](_0x67823a[_0x43c826(0x1c3, '6GlL')], _0x67823a[_0x43c826(0x1e6, 'z9*t')]) ? _0x3dc823[_0x43c826(0x2d2, '2(N#')](_0x33f41f, _0x342e6b) : DoubleLog('
 ❌ 【' + this[_0x43c826(0x47f, 'WXl3')] + '】吃饭视频: 执行任务过快，继续执行任务');
                                    else {
                                        if (_0x5dd8d3[_0x43c826(0x439, '#2Hi')] == 0x0)
                                            for (let _0x51bf3a = 0x0; _0x51bf3a < numvodie; _0x51bf3a = _0x67823a[_0x43c826(0x9c4, 'Ato%')](_0x51bf3a, 0x1)) {
                                                if (_0x67823a[_0x43c826(0x84d, '6GlL')](_0x67823a[_0x43c826(0x209, '^H2k')], _0x43c826(0x7a4, 'Tx3e'))) {
                                                    if (_0x5dd8d3[_0x43c826(0x676, ')eXz')] == 0x2716) {
                                                        DoubleLog(_0x43c826(0x2c6, 'K7Hk') + this[_0x43c826(0x6c8, 'Mt$M')] + _0x43c826(0x6b5, 'ev8C'));
                                                        break;
                                                    } else {
                                                        if (_0x67823a[_0x43c826(0x87b, 'uvdB')](_0x5dd8d3[_0x43c826(0x79c, '7htc')], 0x2717)) {
                                                            _0x67823a['wogCN'](DoubleLog, _0x43c826(0x3dd, 'WXl3') + this['index'] + '】吃饭视频: 该账号没有可执行任务，可能是新号');
                                                            break;
                                                        } else {
                                                            if (_0x67823a['yzZhP'](_0x5dd8d3[_0x43c826(0x569, ')3Og')], 0x2719)) _0x67823a[_0x43c826(0x8c8, 'Yo*r')](DoubleLog, _0x43c826(0x847, 'WaIa') + this[_0x43c826(0x659, 'Zw8m')] + _0x43c826(0x2c7, 'uvdB'));
                                                            else {
                                                                if (_0x67823a['KsLTV'](_0x5dd8d3[_0x43c826(0x616, 'A]*R')][_0x43c826(0xa13, '3!Dt')], numamount)) {
                                                                    if (_0x67823a['UgaPh'] !== _0x43c826(0x914, '##))')) {
                                                                        DoubleLog(_0x43c826(0x823, ')3Og') + this[_0x43c826(0x941, '3!Dt')] + '】吃饭视频: 获得奖励 ' + _0x5dd8d3[_0x43c826(0x9e9, 'WaIa')][_0x43c826(0x6ee, 'R$sB')] + ' 金币，收入低停止执行');
                                                                        break;
                                                                    } else _0x3e4016[_0x43c826(0x51f, '^ut3')](_0x1574a7, _0x43c826(0x794, '@m24') + this['index'] + _0x43c826(0x24c, 'Tx3e'));
                                                                } else _0x67823a['Hszen'](_0x67823a[_0x43c826(0x999, 'Yo*r')], _0x67823a[_0x43c826(0x98c, 'K7Hk')]) ? _0x333e00[_0x43c826(0x28b, 'W#uE')](_0x4bd946) : (await this[_0x43c826(0x64e, 'Mt$M')](_0x67823a['WYNFJ'](0x2, 0x3e8)), await $[_0x43c826(0x90a, 'Yo*r')](0x7530));
                                                            }
                                                        }
                                                    } if (_0x51bf3a == numvodie) {
                                                        if (_0x67823a[_0x43c826(0x1ea, '2(N#')](_0x67823a[_0x43c826(0x685, '#yB#')], _0x43c826(0x854, 'L%wM'))) _0x5f4887();
                                                        else break;
                                                    }
                                                } else _0x134804[_0x43c826(0x379, '!y(t')](_0x7d1a56);
                                            } else DoubleLog(_0x43c826(0x544, 'ksby') + this[_0x43c826(0x520, '9Ir0')] + _0x43c826(0x5c8, 'W#uE') + _0x5dd8d3[_0x43c826(0xa19, 'm#vA')]);
                                    }
                                }
                            }
                        }
                    }
                } catch (_0x21c7e7) {
                    _0x67823a[_0x43c826(0x5e1, '^8@B')](_0x43c826(0x91e, '^ut3'), _0x43c826(0xaa9, 'ev8C')) ? _0x35fc75[_0x43c826(0x3ec, 'Ato%')](_0x41bf54, _0x43c826(0x796, '9wX]') + this[_0x43c826(0x4dc, 'Y^n*')] + _0x43c826(0x713, 'ev8C') + _0x301734[_0x43c826(0x26a, '^ut3')]) : $[_0x43c826(0x18d, 'Zw8m')](_0x21c7e7, _0x2bd8dd);
                } finally {
                    _0x67823a[_0x43c826(0x58b, 'Mt$M')](_0x370f3a);
                } else _0x3e4016[_0x43c826(0x319, 'R$sB')](_0x2e4daa);
            }, _0x4122fa);
        });
    }
    async['doneeat_video_stop'](_0x3e947d = 0x7d0) {
        const _0xa265ad = _0xa91301,
            _0xea6d15 = {
                'lXwMq': function(_0x9b878d, _0x54bd6a) {
                    return _0x9b878d(_0x54bd6a);
                },
                'MgbzH': _0xa265ad(0x77d, 'qmDl'),
                'CeAgR': function(_0x36cc16, _0x1e0d04) {
                    return _0x36cc16 == _0x1e0d04;
                },
                'nJtaQ': function(_0x57de00, _0x42d7db) {
                    return _0x57de00 !== _0x42d7db;
                },
                'ysLRo': _0xa265ad(0x4f3, '&[MC'),
                'BXFMP': 'gPozC',
                'prVLI': function(_0x5dcd23, _0xf96ec0) {
                    return _0x5dcd23 === _0xf96ec0;
                },
                'mcvBo': _0xa265ad(0xa0d, '9Ir0'),
                'cNNaG': _0xa265ad(0x72d, 'W6*u'),
                'AdoRE': function(_0x57fe3b, _0x1c1e6f) {
                    return _0x57fe3b !== _0x1c1e6f;
                },
                'ssEgN': _0xa265ad(0x9f3, '#yB#'),
                'LKDms': _0xa265ad(0x60c, 'Tx3e'),
                'RLDHX': 'Keep-Alive'
            };
        return new Promise(_0x5eaad0 => {
            const _0x55b015 = _0xa265ad,
                _0x282192 = {
                    'OTTeV': function(_0x12728a, _0x15c127) {
                        const _0x27294b = _0x3899;
                        return _0xea6d15[_0x27294b(0x7bf, 'WXl3')](_0x12728a, _0x15c127);
                    },
                    'gKjpf': function(_0x42b834) {
                        return _0x42b834();
                    },
                    'LKGhW': function(_0x41e257, _0x5a66b3) {
                        return _0x41e257(_0x5a66b3);
                    },
                    'Bvccs': _0xea6d15[_0x55b015(0x714, 'L%wM')],
                    'xphvG': function(_0x2f65c0, _0x2637e4) {
                        const _0x4884dc = _0x55b015;
                        return _0xea6d15[_0x4884dc(0x77c, '2(N#')](_0x2f65c0, _0x2637e4);
                    },
                    'ULVcb': function(_0x1d9419, _0x1d1233) {
                        const _0x2c0305 = _0x55b015;
                        return _0xea6d15[_0x2c0305(0x856, ')3Og')](_0x1d9419, _0x1d1233);
                    },
                    'saymQ': _0xea6d15[_0x55b015(0x15b, ')3Og')],
                    'HySXF': function(_0x100cab, _0x2a34b2) {
                        const _0x3fb0fc = _0x55b015;
                        return _0xea6d15[_0x3fb0fc(0x220, 'R$sB')](_0x100cab, _0x2a34b2);
                    },
                    'HmyIE': _0xea6d15[_0x55b015(0x1c7, 'WXl3')],
                    'OkDiC': function(_0x36474d, _0x406535) {
                        const _0x3a7769 = _0x55b015;
                        return _0xea6d15[_0x3a7769(0x4bf, 'A]*R')](_0x36474d, _0x406535);
                    },
                    'jOqjs': function(_0x4aa0d8, _0x5560fe) {
                        return _0xea6d15['prVLI'](_0x4aa0d8, _0x5560fe);
                    },
                    'uywco': _0xea6d15[_0x55b015(0x644, '7htc')],
                    'tumzX': function(_0xcb4b8, _0x2b1bdb) {
                        return _0xcb4b8 == _0x2b1bdb;
                    },
                    'qXxMd': _0xea6d15[_0x55b015(0x5a2, '^8@B')],
                    'WyYHT': function(_0x43f890, _0x46f522) {
                        return _0xea6d15['AdoRE'](_0x43f890, _0x46f522);
                    },
                    'zlPLN': _0x55b015(0xa81, 'uvdB'),
                    'nLuFQ': _0xea6d15[_0x55b015(0x1a2, 'z9*t')],
                    'jryDI': _0xea6d15[_0x55b015(0x4cf, 'Zw8m')],
                    'wyzYq': function(_0xabef9a) {
                        return _0xabef9a();
                    }
                };
            let _0x3f5a39 = {
                'url': hostname + _0x55b015(0x3f6, '9Ir0') + this['ck'][0x0],
                'headers': {
                    'Host': host,
                    'Connection': _0xea6d15[_0x55b015(0x715, ')3Og')],
                    'Content-Type': _0x55b015(0x168, '9wX]'),
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                },
                'body': _0x55b015(0x1c6, 'L%wM')
            };
            $[_0x55b015(0x7a8, 'JZxU')](_0x3f5a39, async(_0x57d3ff, _0x214138, _0x160cbe) => {
                const _0xddedb2 = _0x55b015,
                    _0x22ff56 = {
                        'sCNAA': function(_0x44b41a) {
                            return _0x282192['gKjpf'](_0x44b41a);
                        },
                        'ofBxM': function(_0x36b2c5, _0x4780b5) {
                            return _0x36b2c5 == _0x4780b5;
                        },
                        'kFjMR': function(_0x415601, _0x2b1c8b) {
                            return _0x282192['LKGhW'](_0x415601, _0x2b1c8b);
                        }
                    };
                try {
                    if (_0x282192[_0xddedb2(0x6e1, '9iq9')] !== _0xddedb2(0x416, '#2Hi')) {
                        if (_0x57d3ff) $[_0xddedb2(0xa5a, '^ut3')](_0x57d3ff);
                        else {
                            let _0x366d81 = JSON[_0xddedb2(0x2a6, 'Y^n*')](_0x160cbe);
                            if (_0x282192[_0xddedb2(0x7c6, 'MyTQ')](_0x366d81['err_no'], 0x0)) _0x282192[_0xddedb2(0x329, 'Zw8m')](_0x282192[_0xddedb2(0x9ea, 'Yo*r')], _0x282192[_0xddedb2(0x970, 'W6*u')]) ? _0x22ff56['sCNAA'](_0x4bd375) : _0x282192['HySXF'](DoubleLog, _0xddedb2(0x547, 'R$sB') + this['index'] + _0xddedb2(0x86f, '^ut3') + _0x366d81[_0xddedb2(0x784, '2(N#')]['amount'] + _0xddedb2(0x1e1, 'K7Hk'));
                            else {
                                if (_0x282192['xphvG'](_0x366d81['err_no'], 0x2716)) {
                                    if (_0xddedb2(0x3bc, '2(N#') !== _0x282192['HmyIE']) _0x282192[_0xddedb2(0x8f7, ')3Og')](DoubleLog, '
 ❌ 【' + this[_0xddedb2(0x400, '9iq9')] + _0xddedb2(0xa47, 'vvN['));
                                    else {
                                        let _0x586932 = _0x24c8f2['parse'](_0x40ca0f);
                                        if (_0x22ff56[_0xddedb2(0x368, 'ksby')](_0x586932[_0xddedb2(0x9e1, ']A!w')], 0x0)) {
                                            let _0x3b6e11 = _0x586932[_0xddedb2(0x721, 'JZxU')][_0xddedb2(0x74c, 'UC%d')] == 0x1 ? '水滴' : '化肥';
                                            _0x31c378(_0xddedb2(0x500, ')eXz') + this['index'] + _0xddedb2(0x5f0, 'L%wM') + _0x586932[_0xddedb2(0xa32, 'qmDl')][_0xddedb2(0x9f6, '##))')] + ']获得' + _0x586932[_0xddedb2(0x2f3, 'WXl3')][_0xddedb2(0x577, 'Mt$M')] + _0x3b6e11 + _0xddedb2(0x370, '2(N#') + _0x3b6e11 + '数量' + _0x586932[_0xddedb2(0x554, 'uvdB')][_0xddedb2(0x505, 'QGOg')]);
                                        } else _0x2cd034('
 ❌ 【' + this['index'] + _0xddedb2(0x24b, 'uvdB') + _0x586932['message']);
                                    }
                                } else {
                                    if (_0x282192[_0xddedb2(0x84f, 'z9*t')](_0x366d81[_0xddedb2(0x1b8, '#yB#')], 0x2717)) _0x282192['jOqjs'](_0x282192['uywco'], _0xddedb2(0xa8a, '^$ND')) ? _0x4c3c22[_0xddedb2(0x45b, ')eXz')](_0x5f131c) : _0x282192[_0xddedb2(0x1b0, '##))')](DoubleLog, _0xddedb2(0x988, '^8@B') + this[_0xddedb2(0x853, 'fhKC')] + '】吃饭视频: 该账号没有可执行任务，可能是新号');
                                    else _0x282192['tumzX'](_0x366d81['err_no'], 0x2719) ? _0x282192[_0xddedb2(0x38f, 'qmDl')] !== _0x282192[_0xddedb2(0x320, '^8@B')] ? _0x22ff56[_0xddedb2(0x6c3, 'MyTQ')](_0x3856db, _0xddedb2(0x5bb, 'Y^n*') + this['index'] + _0xddedb2(0x4b3, 'm#vA')) : _0x282192['HySXF'](DoubleLog, _0xddedb2(0x3dd, 'WXl3') + this[_0xddedb2(0x514, ')3Og')] + _0xddedb2(0x850, 'ksby')) : _0x282192[_0xddedb2(0x67c, '6GlL')](_0x282192[_0xddedb2(0x6dc, 'ev8C')], _0x282192[_0xddedb2(0x28c, '7htc')]) ? _0x33056c(_0xddedb2(0x847, 'WaIa') + this[_0xddedb2(0x92f, '^H2k')] + _0xddedb2(0x1fe, '^H2k') + _0x245402['message']) : _0x282192[_0xddedb2(0x25f, 'WXl3')](DoubleLog, _0xddedb2(0x612, 'R$sB') + this['index'] + '】吃饭视频: ' + _0x366d81[_0xddedb2(0x611, 'Yo*r')]);
                                }
                            }
                        }
                    } else _0x38642a['logErr'](_0x4c5030, _0x4e00ee);
                } catch (_0x3829a2) {
                    _0x282192['nLuFQ'] !== _0x282192[_0xddedb2(0xaa8, '2(N#')] ? $[_0xddedb2(0x84a, 'ev8C')](_0x3829a2, _0x214138) : _0x282192['OTTeV'](_0x10b73c, _0xddedb2(0x6b9, 'Ato%') + this[_0xddedb2(0x3f7, 'qmDl')] + _0xddedb2(0x65a, '6GlL') + _0x9d9440['err_tips']);
                } finally {
                    _0x282192[_0xddedb2(0xa62, 'W#uE')](_0x5eaad0);
                }
            }, _0x3e947d);
        });
    }
    async['treasure'](_0x355b04 = 0x7d0) {
        const _0x8e3746 = _0xa91301,
            _0x3da93b = {
                'jsyEY': function(_0x1c286b) {
                    return _0x1c286b();
                },
                'QlZCA': function(_0x1809ee, _0x2d57b2) {
                    return _0x1809ee(_0x2d57b2);
                },
                'TOaIJ': function(_0x21705f, _0x4ad098) {
                    return _0x21705f !== _0x4ad098;
                },
                'igdzZ': _0x8e3746(0x59d, 'Tx3e'),
                'YYHSE': 'huDLP',
                'IVUld': function(_0x44dd7b, _0x523c73) {
                    return _0x44dd7b === _0x523c73;
                },
                'BEMSu': 'waGKg',
                'TIlAy': function(_0x5c8e26, _0x19d764) {
                    return _0x5c8e26 == _0x19d764;
                },
                'WyCEl': 'YYYY-MM-DD HH:mm:ss',
                'SixgH': _0x8e3746(0x3d1, '^$ND'),
                'oDmIc': function(_0x201371, _0x5c8c45) {
                    return _0x201371 + _0x5c8c45;
                },
                'gGwnI': function(_0x420056, _0x3c61bf) {
                    return _0x420056(_0x3c61bf);
                },
                'DbjVI': function(_0x56a9c1, _0x179997) {
                    return _0x56a9c1 * _0x179997;
                },
                'uDZEp': function(_0x17a7eb, _0x561f68) {
                    return _0x17a7eb <= _0x561f68;
                },
                'yWqkh': function(_0x386aa4, _0x1ea7fc) {
                    return _0x386aa4(_0x1ea7fc);
                },
                'zZtQC': _0x8e3746(0x660, '2(N#'),
                'yvnox': function(_0x1c7530) {
                    return _0x1c7530();
                },
                'RpyIr': 'Keep-Alive'
            };
        return new Promise(_0x37a0df => {
            const _0x8ad75c = _0x8e3746,
                _0x2c4346 = {
                    'eUZgG': function(_0x2818db) {
                        const _0x5f1d56 = _0x3899;
                        return _0x3da93b[_0x5f1d56(0x1b1, 'L%wM')](_0x2818db);
                    }
                };
            let _0x2fd5ca = {
                'url': hostname + _0x8ad75c(0x46d, 'WXl3') + this['ck'][0x0],
                'headers': {
                    'Host': host,
                    'Connection': _0x3da93b['RpyIr'],
                    'Content-Type': _0x8ad75c(0x4d1, '6GlL'),
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                }
            };
            $[_0x8ad75c(0x52e, '&[MC')](_0x2fd5ca, async(_0x4932ab, _0x4cbf01, _0x432a72) => {
                const _0x4a563a = _0x8ad75c,
                    _0x2d14ea = {
                        'zOSiN': function(_0x4ea0a6) {
                            const _0x260e0d = _0x3899;
                            return _0x3da93b[_0x260e0d(0x7e4, '9wX]')](_0x4ea0a6);
                        },
                        'eRtRf': function(_0x21c477, _0x386530) {
                            const _0x423dd7 = _0x3899;
                            return _0x3da93b[_0x423dd7(0x642, 'A]*R')](_0x21c477, _0x386530);
                        }
                    };
                if (_0x3da93b[_0x4a563a(0x367, '#2Hi')](_0x3da93b[_0x4a563a(0x261, 'K7Hk')], _0x3da93b[_0x4a563a(0x826, 'Zw8m')])) try {
                    if (_0x4932ab) $[_0x4a563a(0x162, '#2Hi')](_0x4932ab);
                    else {
                        if (_0x3da93b[_0x4a563a(0x2b0, 'W#uE')]('waGKg', _0x3da93b['BEMSu'])) {
                            let _0x1688ed = JSON[_0x4a563a(0x8d1, '^8@B')](_0x432a72);
                            if (_0x3da93b['TIlAy'](_0x1688ed['err_no'], 0x0)) {
                                let _0x41c66c = date[_0x4a563a(0x8ce, 'L%wM')](new Date(), _0x3da93b['WyCEl']);
                                if (_0x1688ed[_0x4a563a(0x9b0, 'R$sB')][_0x4a563a(0x7a7, 'UC%d')] && Array[_0x4a563a(0x25b, 'vvN[')](_0x1688ed[_0x4a563a(0x9d2, 'WqE!')][_0x4a563a(0x8e9, 'Ato%')]))
                                    for (let _0x1329b1 = 0x0; _0x1329b1 < _0x1688ed[_0x4a563a(0x7d6, 'fhKC')][_0x4a563a(0x333, '9iq9')]['length']; _0x1329b1++) {
                                        if (_0x3da93b['IVUld'](_0x3da93b[_0x4a563a(0x1d1, 'Bu2E')], _0x3da93b[_0x4a563a(0x4c1, 'uvdB')])) {
                                            let _0x5c10a0 = _0x1688ed['data'][_0x4a563a(0x83b, 'ksby')][_0x1329b1];
                                            if (_0x3da93b['TIlAy'](_0x5c10a0[_0x4a563a(0x96d, 'Y^n*')], 0x15)) {
                                                let _0x298775 = JSON['parse'](_0x5c10a0[_0x4a563a(0x19d, '#2Hi')]),
                                                    _0x33aa3a = _0x3da93b[_0x4a563a(0x664, 'JZxU')](_0x298775['last_finish_time'], _0x298775['finish_interval']),
                                                    _0x3bdab8 = _0x3da93b[_0x4a563a(0x5e7, 'ygf[')](getTime, _0x3da93b['DbjVI'](_0x33aa3a, 0x3e8))['toString']();
                                                _0x3da93b[_0x4a563a(0xa9b, 'qmDl')](_0x3bdab8, _0x41c66c) ? (DoubleLog(_0x4a563a(0x3bb, 'fhKC') + this[_0x4a563a(0x65b, 'Ato%')] + _0x4a563a(0x1e5, '#yB#') + _0x298775['daily_max_count'] + _0x4a563a(0x1db, '#2Hi') + _0x298775[_0x4a563a(0x956, 'QGOg')] + '/' + _0x298775[_0x4a563a(0x17a, '@m24')] + ' 次'), await $[_0x4a563a(0x511, 'Mt$M')](0x3e8), await this['open_treasure'](_0x3da93b[_0x4a563a(0x31a, 'A]*R')](0x2, 0x3e8))) : DoubleLog(_0x4a563a(0xa71, 'UC%d') + this[_0x4a563a(0x47f, 'WXl3')] + _0x4a563a(0x61c, '&[MC') + _0x3bdab8);
                                            }
                                        } else _0x2c4346[_0x4a563a(0x9fc, '^8@B')](_0x20ab18);
                                    }
                            } else _0x3da93b[_0x4a563a(0x462, 'Zw8m')](DoubleLog, _0x4a563a(0x2fe, '!y(t') + this['index'] + _0x4a563a(0x722, ']A!w') + _0x1688ed['message']);
                        } else _0x2d14ea[_0x4a563a(0x951, '#yB#')](_0x2f8541);
                    }
                } catch (_0x120a9c) {
                    $[_0x4a563a(0x930, 'JZxU')](_0x120a9c, _0x4cbf01);
                } finally {
                    _0x3da93b[_0x4a563a(0x1af, '#yB#')](_0x3da93b[_0x4a563a(0x15f, '^8@B')], _0x3da93b['zZtQC']) ? _0x3da93b['jsyEY'](_0x37a0df) : _0x2d14ea[_0x4a563a(0x65e, 'Zw8m')](_0x2f4ba7, _0x4a563a(0x563, 'r2Oj') + this[_0x4a563a(0x420, 'JZxU')] + _0x4a563a(0x24a, 'ev8C'));
                } else _0x2c4346[_0x4a563a(0x93e, 'Tx3e')](_0x5b7d6b);
            }, _0x355b04);
        });
    }
    async[_0xa91301(0x59b, 'ev8C')](_0x3f4fc9 = 0x7d0) {
        const _0x25de4a = _0xa91301,
            _0x576318 = {
                'agOfg': function(_0x54974e) {
                    return _0x54974e();
                },
                'sigFu': _0x25de4a(0xa85, 'ygf['),
                'KcuFk': 'FgHvJ',
                'ealMD': function(_0x453a21, _0x1beeeb) {
                    return _0x453a21 == _0x1beeeb;
                },
                'Sjrma': function(_0x8ac543, _0x40778f) {
                    return _0x8ac543(_0x40778f);
                },
                'CSaHp': function(_0x623b9d, _0x16bbd9) {
                    return _0x623b9d !== _0x16bbd9;
                },
                'TZCkC': 'bgYzr',
                'VrmlV': function(_0x32c0cc, _0x43a668) {
                    return _0x32c0cc(_0x43a668);
                },
                'ENELD': _0x25de4a(0x623, 'Mt$M'),
                'MvVsT': 'application/x-www-form-urlencoded; charset=UTF-8'
            };
        return new Promise(_0x34bfb1 => {
            const _0x4b8904 = _0x25de4a,
                _0x8d493b = {
                    'rgjIx': function(_0xe0ee89) {
                        const _0x1ede54 = _0x3899;
                        return _0x576318[_0x1ede54(0x2f7, '9Ir0')](_0xe0ee89);
                    },
                    'csdfw': _0x576318[_0x4b8904(0x58f, 'fhKC')],
                    'WKdHh': _0x576318['KcuFk'],
                    'qxihC': function(_0x411da3, _0xdcb9ed) {
                        const _0x12083b = _0x4b8904;
                        return _0x576318[_0x12083b(0x40a, ')eXz')](_0x411da3, _0xdcb9ed);
                    },
                    'BNsDj': function(_0x42a59f, _0x2e382f) {
                        const _0x47aafe = _0x4b8904;
                        return _0x576318[_0x47aafe(0x33a, 'ksby')](_0x42a59f, _0x2e382f);
                    },
                    'ebiki': function(_0x5cf6f7, _0x5bc5fe) {
                        return _0x576318['CSaHp'](_0x5cf6f7, _0x5bc5fe);
                    },
                    'laYRO': _0x576318[_0x4b8904(0x43d, 'Tx3e')],
                    'CwSHM': function(_0x4f9300, _0x17bf91) {
                        const _0x421ec1 = _0x4b8904;
                        return _0x576318[_0x421ec1(0x303, '^H2k')](_0x4f9300, _0x17bf91);
                    },
                    'wWGbA': 'qIiBc'
                };
            let _0x4b17f5 = {
                'url': hostname + _0x4b8904(0x413, 'W6*u') + this['ck'][0x0],
                'headers': {
                    'Host': host,
                    'Connection': _0x576318['ENELD'],
                    'Content-Type': _0x576318[_0x4b8904(0x1c1, 'Tx3e')],
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                }
            };
            $['post'](_0x4b17f5, async(_0x147f31, _0x5e3447, _0x371fd1) => {
                const _0x36070c = _0x4b8904,
                    _0x54edbd = {
                        'QdUWn': function(_0x46dcd9, _0x57a7ad) {
                            return _0x46dcd9(_0x57a7ad);
                        }
                    };
                try {
                    if (_0x147f31) $[_0x36070c(0x637, 'WXl3')](_0x147f31);
                    else {
                        if (_0x8d493b[_0x36070c(0x1d7, 'Tx3e')] !== _0x8d493b['WKdHh']) {
                            let _0x5c6f9e = JSON[_0x36070c(0x469, '##))')](_0x371fd1);
                            if (_0x8d493b['qxihC'](_0x5c6f9e[_0x36070c(0x1b8, '#yB#')], 0x0)) _0x8d493b['BNsDj'](DoubleLog, _0x36070c(0x823, ')3Og') + this[_0x36070c(0x901, 'UC%d')] + _0x36070c(0x5a4, 'W#uE') + _0x5c6f9e[_0x36070c(0x5b3, '&[MC')][_0x36070c(0x72a, '&[MC')] + ' 金币');
                            else _0x8d493b[_0x36070c(0x720, ')eXz')](_0x5c6f9e[_0x36070c(0x68b, 'uvdB')], 0x2716) ? _0x8d493b[_0x36070c(0x46a, 'vvN[')](DoubleLog, _0x36070c(0x639, '^H2k') + this[_0x36070c(0x1fa, '@m24')] + _0x36070c(0x3a9, 'Mt$M')) : _0x8d493b[_0x36070c(0x270, 'ksby')](_0x36070c(0x26b, 'MyTQ'), _0x8d493b[_0x36070c(0xa15, 'WXl3')]) ? _0x8d493b[_0x36070c(0x558, '6GlL')](DoubleLog, _0x36070c(0x820, 'Mt$M') + this[_0x36070c(0x629, 'Tx3e')] + _0x36070c(0x3c6, 'Yo*r') + _0x5c6f9e[_0x36070c(0x6af, '9wX]')]) : _0x26f0d0['logErr'](_0x197fa2);
                        } else _0x8d493b[_0x36070c(0x3ee, 'uvdB')](_0x4e0ce4);
                    }
                } catch (_0xeb114b) {
                    _0x36070c(0xa95, 'r2Oj') === _0x8d493b[_0x36070c(0xa98, 'QGOg')] ? $[_0x36070c(0x930, 'JZxU')](_0xeb114b, _0x5e3447) : _0x54edbd[_0x36070c(0x1c0, '9Ir0')](_0x3ae8c2, '
 ❌ 【' + this[_0x36070c(0x853, 'fhKC')] + _0x36070c(0x15c, '@m24'));
                } finally {
                    _0x34bfb1();
                }
            }, _0x3f4fc9);
        });
    }
    async[_0xa91301(0x3a0, 'z9*t')](_0xd29ec4 = 0x7d0) {
        const _0x284fe5 = _0xa91301,
            _0x433c2a = {
                'pfZHc': function(_0x3c7404, _0x3cf5ac) {
                    return _0x3c7404(_0x3cf5ac);
                },
                'HRYpe': function(_0x24eb53, _0x167e16) {
                    return _0x24eb53 * _0x167e16;
                },
                'LhuTX': function(_0x5e2d65, _0x57d603) {
                    return _0x5e2d65 == _0x57d603;
                },
                'nSQek': _0x284fe5(0x42c, 'ksby'),
                'icvbu': _0x284fe5(0x1b9, '@m24'),
                'jgpzP': function(_0x4143a4, _0x13b56e) {
                    return _0x4143a4 !== _0x13b56e;
                },
                'bCYQG': 'vDTOU',
                'BVFcE': _0x284fe5(0x94d, '9iq9'),
                'PMsCB': function(_0x1e93ed, _0x442008) {
                    return _0x1e93ed === _0x442008;
                },
                'rrjDr': _0x284fe5(0x2d8, 'ygf['),
                'PwRPh': _0x284fe5(0x694, 'WXl3'),
                'Brieh': _0x284fe5(0x4b9, '@m24'),
                'eATsQ': function(_0x4bd78c) {
                    return _0x4bd78c();
                },
                'UrjMQ': function(_0x1d17a6, _0x373eae) {
                    return _0x1d17a6 === _0x373eae;
                },
                'LVkgl': _0x284fe5(0x782, 'Zw8m'),
                'PJJCF': _0x284fe5(0x65d, '^ut3'),
                'acHGF': _0x284fe5(0xa36, '!y(t')
            };
        return new Promise(_0x42c7c7 => {
            const _0x52ba5c = _0x284fe5,
                _0x41d9e6 = {
                    'sfxZb': function(_0x88bbbf, _0x279dca) {
                        return _0x88bbbf(_0x279dca);
                    },
                    'Ifnmm': function(_0x5ef338, _0x3507bf) {
                        const _0x49ed63 = _0x3899;
                        return _0x433c2a[_0x49ed63(0x4ec, 'r2Oj')](_0x5ef338, _0x3507bf);
                    },
                    'ixOAS': function(_0x510932, _0x394bac) {
                        const _0x4af7bd = _0x3899;
                        return _0x433c2a[_0x4af7bd(0x8a2, 'Bu2E')](_0x510932, _0x394bac);
                    },
                    'UDwci': function(_0x493deb, _0x100961) {
                        return _0x493deb === _0x100961;
                    },
                    'hvGGT': _0x433c2a[_0x52ba5c(0x6eb, 'ev8C')],
                    'pctIS': _0x433c2a[_0x52ba5c(0x974, 'z9*t')],
                    'tkyIS': function(_0xcb5b2b, _0x3f1b53) {
                        const _0x23ed39 = _0x52ba5c;
                        return _0x433c2a[_0x23ed39(0x28e, 'Mt$M')](_0xcb5b2b, _0x3f1b53);
                    },
                    'ycNLR': function(_0x3af781, _0xcd55e4) {
                        const _0x3f1a79 = _0x52ba5c;
                        return _0x433c2a[_0x3f1a79(0x9c3, '!y(t')](_0x3af781, _0xcd55e4);
                    },
                    'DKdYt': _0x433c2a[_0x52ba5c(0x8b2, ')3Og')],
                    'JNpIC': _0x433c2a[_0x52ba5c(0x394, '9iq9')],
                    'izJKF': function(_0x2bef9c, _0x4af6a1) {
                        return _0x2bef9c == _0x4af6a1;
                    },
                    'jreHd': function(_0x533326, _0x3a80b2) {
                        return _0x433c2a['PMsCB'](_0x533326, _0x3a80b2);
                    },
                    'paWve': _0x433c2a[_0x52ba5c(0x4eb, 'Zw8m')],
                    'VPlbD': function(_0x1d29b1, _0x2cde91) {
                        return _0x1d29b1(_0x2cde91);
                    },
                    'LtxOE': _0x433c2a[_0x52ba5c(0x71d, 'ksby')],
                    'srlUL': _0x433c2a[_0x52ba5c(0x267, ']A!w')],
                    'VEEFk': function(_0x3a31d5) {
                        return _0x433c2a['eATsQ'](_0x3a31d5);
                    }
                };
            if (_0x433c2a[_0x52ba5c(0x70d, 'W#uE')]('gQjHI', _0x433c2a[_0x52ba5c(0x4b8, '9iq9')])) {
                let _0x204f3d = {
                    'url': hostname + _0x52ba5c(0x4af, 'z9*t') + this['ck'][0x0],
                    'headers': {
                        'Host': host,
                        'Connection': _0x433c2a[_0x52ba5c(0x4aa, '##))')],
                        'Content-Type': _0x433c2a['acHGF'],
                        'User-Agent': this['ck'][0x4],
                        'Cookie': this['ck'][0x1],
                        'x-argus': this['ck'][0x2],
                        'x-ladon': this['ck'][0x3]
                    },
                    'body': _0x52ba5c(0x589, 'Ato%')
                };
                $['post'](_0x204f3d, async(_0x42afea, _0x309ddc, _0x424da7) => {
                    const _0x2729d1 = _0x52ba5c;
                    try {
                        if (_0x42afea) $['logErr'](_0x42afea);
                        else {
                            let _0x44d2a1 = JSON['parse'](_0x424da7);
                            if (_0x44d2a1[_0x2729d1(0x280, 'MyTQ')] == 0x0) await this[_0x2729d1(0x1a7, 'fhKC')](_0x41d9e6['Ifnmm'](0x2, 0x3e8)), await $['wait'](0x7530);
                            else {
                                if (_0x41d9e6[_0x2729d1(0x487, 'Mt$M')](_0x44d2a1[_0x2729d1(0x913, 'L%wM')], 0x2716)) _0x41d9e6[_0x2729d1(0x3be, 'K7Hk')](_0x41d9e6[_0x2729d1(0x677, 'QGOg')], _0x41d9e6[_0x2729d1(0x1ab, '@m24')]) ? _0x25b9e5['logErr'](_0x8dec5b, _0x68a14d) : _0x41d9e6[_0x2729d1(0x566, 'K7Hk')](DoubleLog, '
 ❌ 【' + this[_0x2729d1(0x65b, 'Ato%')] + _0x2729d1(0x8a4, '9iq9'));
                                else {
                                    if (_0x41d9e6[_0x2729d1(0x452, 'ygf[')](_0x44d2a1[_0x2729d1(0x5ae, 'z9*t')], 0x2717)) _0x41d9e6[_0x2729d1(0x16b, 'r2Oj')](_0x41d9e6['DKdYt'], _0x41d9e6[_0x2729d1(0x6f4, '^$ND')]) ? DoubleLog(_0x2729d1(0x5bb, 'Y^n*') + this[_0x2729d1(0xa97, 'A]*R')] + _0x2729d1(0x8be, '3!Dt')) : _0x153e0d();
                                    else _0x41d9e6[_0x2729d1(0x233, 'ev8C')](_0x44d2a1['err_no'], 0x2719) ? _0x41d9e6['jreHd'](_0x2729d1(0x205, 'WqE!'), _0x41d9e6[_0x2729d1(0x297, 'Tx3e')]) ? _0x41d9e6[_0x2729d1(0x41d, '2(N#')](DoubleLog, _0x2729d1(0x3f5, 'QGOg') + this[_0x2729d1(0x40b, 'Bu2E')] + _0x2729d1(0x846, 'uvdB')) : _0x41d9e6[_0x2729d1(0x646, 'UC%d')](_0x54f640, '
 ❌ 【' + this[_0x2729d1(0x93b, '#yB#')] + _0x2729d1(0x2b3, '7htc')) : _0x41d9e6['VPlbD'](DoubleLog, _0x2729d1(0x988, '^8@B') + this[_0x2729d1(0x629, 'Tx3e')] + '】签到视频: ' + _0x44d2a1[_0x2729d1(0x6f8, '7htc')]);
                                }
                            }
                        }
                    } catch (_0x225170) {
                        _0x41d9e6[_0x2729d1(0x651, '^$ND')] !== _0x41d9e6[_0x2729d1(0x7e3, '9Ir0')] ? $[_0x2729d1(0x4df, 'ygf[')](_0x225170, _0x309ddc) : _0x2cff47[_0x2729d1(0x379, '!y(t')](_0x166b66, _0x5dd144);
                    } finally {
                        'xWqxT' === 'YKwrz' ? _0x5ae302[_0x2729d1(0x196, '7htc')](_0x64408f, _0x5d71aa): _0x41d9e6[_0x2729d1(0x2c9, '^8@B')](_0x42c7c7);
                    }
                }, _0xd29ec4);
            } else _0x433c2a[_0x52ba5c(0x7b7, '9Ir0')](_0x17a8cb, '
 ❌ 【' + this[_0x52ba5c(0x5f5, 'Yo*r')] + '】观看视频: 该账号没有可执行任务，可能是新号');
        });
    }
    async[_0xa91301(0x219, 'ygf[')](_0x5e183d = 0x7d0) {
        const _0x1bac0c = _0xa91301,
            _0x47232e = {
                'GGGZl': function(_0x17258b, _0x149bef) {
                    return _0x17258b(_0x149bef);
                },
                'oXuWN': function(_0x2f18b5, _0x40a016) {
                    return _0x2f18b5 == _0x40a016;
                },
                'mOQvC': _0x1bac0c(0x7da, '9wX]'),
                'EbuuQ': _0x1bac0c(0x2eb, '6GlL'),
                'DgWzj': function(_0x437cf8, _0x13c372) {
                    return _0x437cf8 < _0x13c372;
                },
                'mhoGd': function(_0x121a76, _0x5a1a14) {
                    return _0x121a76 == _0x5a1a14;
                },
                'CiGLO': 'JHYyW',
                'giedx': 'yJZyE',
                'PwPZO': _0x1bac0c(0x3b4, '^ut3'),
                'CxMrB': function(_0x27e366, _0x2ba110) {
                    return _0x27e366 !== _0x2ba110;
                },
                'LUGjU': _0x1bac0c(0x1ce, '7htc'),
                'OnzYh': 'Keep-Alive',
                'mkadl': 'application/x-www-form-urlencoded; charset=UTF-8'
            };
        return new Promise(_0xa6a6b0 => {
            const _0x492c22 = _0x1bac0c,
                _0x4f678f = {
                    'wyGZv': function(_0x14ce06, _0x29a0b6) {
                        const _0x193892 = _0x3899;
                        return _0x47232e[_0x193892(0x266, '9iq9')](_0x14ce06, _0x29a0b6);
                    },
                    'xfqEe': function(_0x254681, _0x40f998) {
                        return _0x47232e['oXuWN'](_0x254681, _0x40f998);
                    },
                    'tLIWs': _0x47232e['mOQvC'],
                    'GdFaU': _0x47232e['EbuuQ'],
                    'LlegT': function(_0x169e15, _0x30d185) {
                        const _0x266d46 = _0x3899;
                        return _0x47232e[_0x266d46(0x260, '9iq9')](_0x169e15, _0x30d185);
                    },
                    'NYcDc': function(_0x1b8148, _0x43268f) {
                        const _0x37758b = _0x3899;
                        return _0x47232e[_0x37758b(0xa0e, 'A]*R')](_0x1b8148, _0x43268f);
                    },
                    'Xaryq': function(_0x448346, _0x4e7bcb) {
                        const _0x10d0e7 = _0x3899;
                        return _0x47232e[_0x10d0e7(0x1b2, 'QGOg')](_0x448346, _0x4e7bcb);
                    },
                    'bSfSw': function(_0x3d2694, _0x212692) {
                        const _0x29d947 = _0x3899;
                        return _0x47232e[_0x29d947(0x9f5, '9Ir0')](_0x3d2694, _0x212692);
                    },
                    'vQFWu': function(_0x3e5646, _0x495909) {
                        return _0x3e5646(_0x495909);
                    },
                    'dmnRE': _0x47232e[_0x492c22(0x755, '!y(t')],
                    'upjas': _0x492c22(0x34b, 'uvdB'),
                    'spKhm': _0x47232e[_0x492c22(0x576, 'JZxU')],
                    'knumP': _0x47232e['PwPZO']
                };
            if (_0x47232e['CxMrB'](_0x47232e[_0x492c22(0x4e0, '9wX]')], _0x47232e[_0x492c22(0x9d5, 'Zw8m')])) _0x4f678f[_0x492c22(0x9ae, 'vvN[')](_0xa45583, _0x492c22(0x39b, ']A!w') + this[_0x492c22(0x841, 'W6*u')] + _0x492c22(0x249, '6GlL') + _0x57f671[_0x492c22(0x421, '##))')]);
            else {
                let _0x467858 = {
                    'url': hostname + '/luckycat/xigua/v1/task/done/ad_watch_daily_again?' + this['ck'][0x0],
                    'headers': {
                        'Host': host,
                        'Connection': _0x47232e[_0x492c22(0x8c9, 'Bu2E')],
                        'Content-Type': _0x47232e['mkadl'],
                        'User-Agent': this['ck'][0x4],
                        'Cookie': this['ck'][0x1],
                        'x-argus': this['ck'][0x2],
                        'x-ladon': this['ck'][0x3]
                    },
                    'body': _0x492c22(0x872, '#2Hi')
                };
                $[_0x492c22(0x910, '#yB#')](_0x467858, async(_0x5dc6d3, _0x3e2f9a, _0xe78c9d) => {
                    const _0xe03424 = _0x492c22;
                    if (_0xe03424(0x348, 'R$sB') === 'eAJPw') try {
                        if (_0x5dc6d3) $['logErr'](_0x5dc6d3);
                        else {
                            let _0x8739df = JSON[_0xe03424(0x51a, 'fhKC')](_0xe78c9d);
                            if (_0x4f678f[_0xe03424(0x1c2, '^H2k')](_0x8739df[_0xe03424(0x6fb, 'vvN[')], 0x0)) {
                                if (_0x4f678f[_0xe03424(0x69f, 'ksby')] === _0x4f678f['GdFaU']) _0x4f678f['wyGZv'](_0x192e6d, '
 ❌ 【' + this[_0xe03424(0x400, '9iq9')] + _0xe03424(0x2bc, 'WaIa') + _0x55352d[_0xe03424(0x760, ')eXz')]);
                                else {
                                    _0x4f678f[_0xe03424(0x624, '##))')](DoubleLog, _0xe03424(0x70b, 'UC%d') + this['index'] + _0xe03424(0x6e3, 'uvdB') + _0x8739df['data']['amount'] + _0xe03424(0x75c, '9wX]'));
                                    for (let _0x3c270b = 0x0; _0x4f678f[_0xe03424(0x6ec, 'W#uE')](_0x3c270b, numvodie); _0x3c270b = _0x3c270b + 0x1) {
                                        if (_0x4f678f['LlegT'](_0x8739df['data']['amount'], numamount)) {
                                            _0x4f678f[_0xe03424(0x2c3, 'z9*t')](DoubleLog, _0xe03424(0x3e2, '^8@B') + this[_0xe03424(0x61e, '^$ND')] + _0xe03424(0x2a5, 'ev8C') + _0x8739df[_0xe03424(0x2f3, 'WXl3')]['amount'] + _0xe03424(0x4c6, 'MyTQ'));
                                            break;
                                        } else await this['treasure_video_stop'](0x2 * 0x3e8), await $['wait'](0x7530); if (_0x4f678f[_0xe03424(0x798, '#yB#')](_0x3c270b, numvodie)) break;
                                    }
                                }
                            } else {
                                if (_0x4f678f[_0xe03424(0x5c5, ')eXz')](_0x8739df[_0xe03424(0xa79, 'W6*u')], 0x2716)) _0x4f678f['Xaryq'](DoubleLog, '
 ❌ 【' + this[_0xe03424(0x520, '9Ir0')] + _0xe03424(0x18c, ')3Og'));
                                else {
                                    if (_0x4f678f[_0xe03424(0x2d6, 'K7Hk')](_0x8739df['err_no'], 0x2717)) _0x4f678f[_0xe03424(0x97e, '@m24')](DoubleLog, _0xe03424(0x399, 'ygf[') + this['index'] + '】宝箱视频: 该账号没有可执行任务，可能是新号');
                                    else _0x4f678f['NYcDc'](_0x8739df[_0xe03424(0x7f4, 'WqE!')], 0x2719) ? DoubleLog('
 ❌ 【' + this['index'] + _0xe03424(0x44d, 'ev8C')) : _0x4f678f['dmnRE'] === _0x4f678f[_0xe03424(0x184, 'Bu2E')] ? _0x4abc50(_0xe03424(0x66a, 'qmDl') + this[_0xe03424(0x228, 'r2Oj')] + _0xe03424(0x652, 'L%wM') + _0x132e9b[_0xe03424(0x6f3, '##))')][_0xe03424(0x86e, '6GlL')]['amount'] + _0xe03424(0x217, ')3Og')) : _0x4f678f['wyGZv'](DoubleLog, _0xe03424(0x2b2, '6GlL') + this[_0xe03424(0x927, '2(N#')] + _0xe03424(0x2b8, 'A]*R') + _0x8739df[_0xe03424(0x611, 'Yo*r')]);
                                }
                            }
                        }
                    } catch (_0x146747) {
                        _0x4f678f[_0xe03424(0x897, ')eXz')] === _0x4f678f['knumP'] ? _0x4b2a98['logErr'](_0x36c707) : $[_0xe03424(0x28b, 'W#uE')](_0x146747, _0x3e2f9a);
                    } finally {
                        _0xa6a6b0();
                    } else _0x3d4ae6(_0xe03424(0x765, '7htc') + this[_0xe03424(0x68d, '##))')] + '】观看视频: ' + _0x235c8b[_0xe03424(0xa2b, '!y(t')]);
                }, _0x5e183d);
            }
        });
    }
    async[_0xa91301(0x758, '!y(t')](_0x46b9e2 = 0x7d0) {
        const _0x46aa6c = _0xa91301,
            _0x1a88e3 = {
                'FsBwp': function(_0x31f680, _0x1b7ae3) {
                    return _0x31f680 === _0x1b7ae3;
                },
                'oePTl': 'FlUbU',
                'sExGx': _0x46aa6c(0xa1a, '^8@B'),
                'AiqYS': _0x46aa6c(0x251, 'MyTQ'),
                'HbIJK': function(_0x21c4e1, _0x2c5a12) {
                    return _0x21c4e1 === _0x2c5a12;
                },
                'DRetw': 'shUDp',
                'qBbjD': function(_0x51ef19, _0x5402ab) {
                    return _0x51ef19 == _0x5402ab;
                },
                'cPATI': function(_0x1969cd, _0x165e84) {
                    return _0x1969cd(_0x165e84);
                },
                'uPhKC': function(_0xf878c1, _0x238975) {
                    return _0xf878c1 == _0x238975;
                },
                'Xximn': function(_0x42d724, _0x13f312) {
                    return _0x42d724 !== _0x13f312;
                },
                'gfQRg': _0x46aa6c(0x4c9, ']A!w'),
                'hWDUt': function(_0x427d04, _0x40f22b) {
                    return _0x427d04 !== _0x40f22b;
                },
                'eYHFu': 'AzexO',
                'IBYNM': function(_0x460312, _0x107dd2) {
                    return _0x460312 !== _0x107dd2;
                },
                'vsTou': _0x46aa6c(0x56b, '9Ir0'),
                'dPKNm': function(_0x235aaf, _0x1d1a8a) {
                    return _0x235aaf(_0x1d1a8a);
                },
                'oQvtM': function(_0x5668d5, _0x4f9134) {
                    return _0x5668d5 !== _0x4f9134;
                },
                'wlMiT': _0x46aa6c(0x377, 'K7Hk'),
                'JQwQv': _0x46aa6c(0x790, '#yB#'),
                'IrXqe': _0x46aa6c(0x6d5, '^8@B')
            };
        return new Promise(_0x103151 => {
            const _0x5a04d4 = _0x46aa6c,
                _0x42f96d = {
                    'cswEp': function(_0x330a05) {
                        return _0x330a05();
                    },
                    'qPkVk': function(_0x2435b8, _0x10d67c) {
                        const _0x35cad9 = _0x3899;
                        return _0x1a88e3[_0x35cad9(0x27a, 'W#uE')](_0x2435b8, _0x10d67c);
                    }
                };
            if (_0x1a88e3['oQvtM'](_0x5a04d4(0x6fd, 'z9*t'), _0x1a88e3['wlMiT'])) {
                let _0x3d340a = {
                    'url': hostname + _0x5a04d4(0x4b0, 'Tx3e') + this['ck'][0x0],
                    'headers': {
                        'Host': host,
                        'Connection': _0x1a88e3['JQwQv'],
                        'Content-Type': _0x1a88e3[_0x5a04d4(0x190, '6GlL')],
                        'User-Agent': this['ck'][0x4],
                        'Cookie': this['ck'][0x1],
                        'x-argus': this['ck'][0x2],
                        'x-ladon': this['ck'][0x3]
                    },
                    'body': 'ad_fallback=false&reward_stage=2&income_id=1009606_109521973635_1689925700655'
                };
                $[_0x5a04d4(0x5c4, 'Mt$M')](_0x3d340a, async(_0x361098, _0x43be56, _0x39c96a) => {
                    const _0x1a5015 = _0x5a04d4,
                        _0x4ea8fe = {
                            'bguAj': function(_0x2f2514, _0x1a15e0) {
                                return _0x2f2514(_0x1a15e0);
                            }
                        };
                    try {
                        if (_0x1a88e3['FsBwp'](_0x1a88e3[_0x1a5015(0x7f0, 'Ato%')], _0x1a88e3[_0x1a5015(0x41e, 'L%wM')])) _0x38551f[_0x1a5015(0x930, 'JZxU')](_0x180337, _0xf53f4b);
                        else {
                            if (_0x361098) _0x1a88e3[_0x1a5015(0x1e7, 'fhKC')] === _0x1a88e3[_0x1a5015(0x9cb, '^ut3')] ? $['logErr'](_0x361098) : _0xb12361[_0x1a5015(0x308, 'r2Oj')](_0x12403e);
                            else {
                                if (_0x1a88e3[_0x1a5015(0x3ce, '&[MC')](_0x1a88e3[_0x1a5015(0x591, '@m24')], _0x1a5015(0x316, 'Bu2E'))) _0x2612d1[_0x1a5015(0x486, 'qmDl')](_0x6295dc);
                                else {
                                    let _0xa1f8bc = JSON[_0x1a5015(0xa68, 'Mt$M')](_0x39c96a);
                                    if (_0x1a88e3[_0x1a5015(0x20d, 'A]*R')](_0xa1f8bc[_0x1a5015(0x161, 'K7Hk')], 0x0)) _0x1a88e3['cPATI'](DoubleLog, '
 ✅ 【' + this[_0x1a5015(0x520, '9Ir0')] + _0x1a5015(0x880, '^ut3') + _0xa1f8bc['data']['amount'] + ' 金币');
                                    else {
                                        if (_0x1a88e3['uPhKC'](_0xa1f8bc['err_no'], 0x2716)) _0x1a88e3[_0x1a5015(0x1e8, '7htc')]('bNWWn', _0x1a88e3[_0x1a5015(0x53c, '2(N#')]) ? _0x4ea8fe[_0x1a5015(0x3f0, 'vvN[')](_0x408815, '
 ❌ 【' + this[_0x1a5015(0x23a, 'W#uE')] + _0x1a5015(0x2fd, ')3Og')) : DoubleLog('
 ❌ 【' + this['index'] + '】宝箱视频: 每天宝箱广告赚金币已达上限');
                                        else {
                                            if (_0x1a88e3[_0x1a5015(0x835, 'ygf[')](_0xa1f8bc[_0x1a5015(0xa79, 'W6*u')], 0x2717)) _0x1a88e3[_0x1a5015(0x95e, '#2Hi')](_0x1a88e3[_0x1a5015(0x8a7, 'Bu2E')], _0x1a88e3['eYHFu']) ? _0x42f96d['cswEp'](_0x22e5e6) : _0x1a88e3['cPATI'](DoubleLog, _0x1a5015(0x524, 'z9*t') + this[_0x1a5015(0x792, '&[MC')] + _0x1a5015(0x4fa, ')eXz'));
                                            else _0x1a88e3['qBbjD'](_0xa1f8bc[_0x1a5015(0x5e0, '9wX]')], 0x2719) ? DoubleLog('
 ❌ 【' + this[_0x1a5015(0x1fa, '@m24')] + _0x1a5015(0x8c1, 'qmDl')) : _0x1a88e3[_0x1a5015(0x38e, 'Yo*r')](DoubleLog, '
 ❌ 【' + this['index'] + '】宝箱视频: ' + _0xa1f8bc[_0x1a5015(0x7f1, 'QGOg')]);
                                        }
                                    }
                                }
                            }
                        }
                    } catch (_0x3ba7b6) {
                        _0x1a88e3['IBYNM'](_0x1a88e3['vsTou'], _0x1a88e3[_0x1a5015(0x859, 'Y^n*')]) ? _0x42f96d[_0x1a5015(0x9bc, 'fhKC')](_0xa05c7f, '
 ❌ 【' + this[_0x1a5015(0x6e0, 'ygf[')] + _0x1a5015(0x76d, 'r2Oj')) : $[_0x1a5015(0x3d9, '#yB#')](_0x3ba7b6, _0x43be56);
                    } finally {
                        _0x103151();
                    }
                }, _0x46b9e2);
            } else _0x1a88e3['dPKNm'](_0x1f6c47, _0x5a04d4(0x332, '9Ir0') + this[_0x5a04d4(0xa57, 'R$sB')] + '】宝箱视频: ' + _0x1f8ccb[_0x5a04d4(0x775, 'JZxU')]);
        });
    }
    async[_0xa91301(0x9a0, '7htc')](_0x2ff024 = 0x7d0) {
        const _0x337714 = _0xa91301,
            _0x3480e7 = {
                'Ehied': function(_0xb62fc1, _0x2c80d5) {
                    return _0xb62fc1(_0x2c80d5);
                },
                'ZZFqu': _0x337714(0x6bc, 'z9*t'),
                'ABeEG': function(_0x2a3268, _0x4494c5) {
                    return _0x2a3268 == _0x4494c5;
                },
                'NhFqm': 'dsxIh',
                'UYAef': 'YYYY-MM-DD HH:mm:ss',
                'BAkuU': function(_0x4e3825, _0x3b42b1) {
                    return _0x4e3825 === _0x3b42b1;
                },
                'ALpxL': 'mzJQM',
                'JVpZw': function(_0x2fb489, _0x1383ae) {
                    return _0x2fb489 < _0x1383ae;
                },
                'jvXFm': function(_0x2459e2, _0x11cc7f) {
                    return _0x2459e2 == _0x11cc7f;
                },
                'cvLiD': function(_0x583dbd, _0x1507e7) {
                    return _0x583dbd + _0x1507e7;
                },
                'AeGUf': function(_0x41aa9e, _0x31c13d) {
                    return _0x41aa9e(_0x31c13d);
                },
                'bIXjA': function(_0x3dd9e5, _0x1c9cbf) {
                    return _0x3dd9e5 * _0x1c9cbf;
                },
                'MiAHo': function(_0x13298e, _0x93e9c8) {
                    return _0x13298e == _0x93e9c8;
                },
                'oIFmP': 'rVQEm',
                'FygAl': 'GVWmR',
                'juoKT': function(_0x4e70c6, _0x4d3a7c) {
                    return _0x4e70c6 !== _0x4d3a7c;
                },
                'AWOwC': _0x337714(0x7ec, 'Yo*r'),
                'qKUIE': _0x337714(0x31b, 'Y^n*'),
                'tIpez': function(_0x25c2d6) {
                    return _0x25c2d6();
                },
                'AZVCH': 'Keep-Alive'
            };
        return new Promise(_0x585561 => {
            const _0xbfbbc0 = _0x337714,
                _0x3cf084 = {
                    'piina': function(_0x4c0586, _0x229683) {
                        const _0x4668a5 = _0x3899;
                        return _0x3480e7[_0x4668a5(0x636, '7htc')](_0x4c0586, _0x229683);
                    },
                    'kIcDX': _0x3480e7[_0xbfbbc0(0x5d1, 'Ato%')],
                    'DxZLF': function(_0x43578d, _0x875d04) {
                        return _0x3480e7['ABeEG'](_0x43578d, _0x875d04);
                    },
                    'suDmm': _0x3480e7[_0xbfbbc0(0x6b6, '^$ND')],
                    'wAkLL': _0x3480e7[_0xbfbbc0(0x37c, ')eXz')],
                    'tjbJK': function(_0x3bf403, _0x543cc1) {
                        const _0x46ca5b = _0xbfbbc0;
                        return _0x3480e7[_0x46ca5b(0x2b5, '9Ir0')](_0x3bf403, _0x543cc1);
                    },
                    'iYMCn': _0x3480e7[_0xbfbbc0(0x528, '3!Dt')],
                    'Sylap': function(_0x516dad, _0x5502e5) {
                        const _0x13f689 = _0xbfbbc0;
                        return _0x3480e7[_0x13f689(0x353, 'WXl3')](_0x516dad, _0x5502e5);
                    },
                    'wyiPv': function(_0x5b8884, _0x3589c) {
                        return _0x3480e7['jvXFm'](_0x5b8884, _0x3589c);
                    },
                    'sJclS': function(_0x555f8f, _0x477a67) {
                        return _0x3480e7['cvLiD'](_0x555f8f, _0x477a67);
                    },
                    'ACYmE': function(_0x30975a, _0x737ae6) {
                        const _0xb5557f = _0xbfbbc0;
                        return _0x3480e7[_0xb5557f(0x834, 'r2Oj')](_0x30975a, _0x737ae6);
                    },
                    'eRGDK': function(_0x5566f0, _0x3a154a) {
                        const _0x1477c3 = _0xbfbbc0;
                        return _0x3480e7[_0x1477c3(0x604, '#yB#')](_0x5566f0, _0x3a154a);
                    },
                    'gSklR': function(_0xc8de2c, _0x435e76) {
                        const _0x35d14d = _0xbfbbc0;
                        return _0x3480e7[_0x35d14d(0xa2d, '&[MC')](_0xc8de2c, _0x435e76);
                    },
                    'LxoSr': _0x3480e7['oIFmP'],
                    'GuiUI': function(_0x23aac8, _0x23169d) {
                        return _0x23aac8 > _0x23169d;
                    },
                    'EqTLo': function(_0x4a181f, _0x437f48) {
                        const _0x4254dc = _0xbfbbc0;
                        return _0x3480e7[_0x4254dc(0x97f, 'fhKC')](_0x4a181f, _0x437f48);
                    },
                    'NhJkw': _0x3480e7[_0xbfbbc0(0x7af, 'Mt$M')],
                    'ERIUR': function(_0x33cf2f, _0x184716) {
                        return _0x33cf2f(_0x184716);
                    },
                    'WNfjx': function(_0x1548d5, _0x1182b9) {
                        const _0x28f64e = _0xbfbbc0;
                        return _0x3480e7[_0x28f64e(0x818, 'WXl3')](_0x1548d5, _0x1182b9);
                    },
                    'WlneO': _0x3480e7['AWOwC'],
                    'xBLTS': _0x3480e7[_0xbfbbc0(0x1e0, 'Bu2E')],
                    'irESP': function(_0x4961f8) {
                        const _0x3c2441 = _0xbfbbc0;
                        return _0x3480e7[_0x3c2441(0x5dd, 'vvN[')](_0x4961f8);
                    }
                };
            let _0x4a896f = {
                'url': hostname + _0xbfbbc0(0xa27, '6GlL') + this['ck'][0x0],
                'headers': {
                    'Host': host,
                    'Connection': _0x3480e7['AZVCH'],
                    'Content-Type': _0xbfbbc0(0x780, '2(N#'),
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                }
            };
            $[_0xbfbbc0(0x75a, '#yB#')](_0x4a896f, async(_0x1ac685, _0x50bfa1, _0x1747cc) => {
                const _0x1c2cec = _0xbfbbc0,
                    _0xf788f2 = {
                        'aYjfU': function(_0x2b9df6, _0x437e8a) {
                            return _0x2b9df6(_0x437e8a);
                        }
                    };
                try {
                    if (_0x1ac685) $[_0x1c2cec(0x2e5, 'Yo*r')](_0x1ac685);
                    else {
                        if (_0x1c2cec(0x842, '#2Hi') === _0x3cf084['kIcDX']) {
                            let _0xce49b0 = JSON[_0x1c2cec(0x982, '#2Hi')](_0x1747cc);
                            if (_0x3cf084[_0x1c2cec(0x8bd, 'z9*t')](_0xce49b0[_0x1c2cec(0x9c2, 'Tx3e')], 0x0)) {
                                if (_0x1c2cec(0x9ee, 'W6*u') === _0x3cf084[_0x1c2cec(0xaa3, 'uvdB')]) {
                                    let _0x34517f = date[_0x1c2cec(0x467, '^H2k')](new Date(), _0x3cf084['wAkLL']);
                                    if (_0xce49b0['data'][_0x1c2cec(0x7ae, 'WqE!')] && Array[_0x1c2cec(0x158, 'W6*u')](_0xce49b0[_0x1c2cec(0x885, 'Y^n*')]['task_list'])) {
                                        if (_0x3cf084[_0x1c2cec(0x728, '^8@B')](_0x3cf084[_0x1c2cec(0x215, 'Zw8m')], _0x1c2cec(0x5fb, 'Bu2E')))
                                            for (let _0x402ae8 = 0x0; _0x3cf084['Sylap'](_0x402ae8, _0xce49b0[_0x1c2cec(0x2c4, 'Tx3e')]['task_list'][_0x1c2cec(0x8e6, 'ygf[')]); _0x402ae8++) {
                                                let _0x163c3d = _0xce49b0['data'][_0x1c2cec(0x8f0, 'MyTQ')][_0x402ae8];
                                                if (_0x3cf084['wyiPv'](_0x163c3d[_0x1c2cec(0x945, '!y(t')], 0x61b4a)) {
                                                    let _0x45cf0e = JSON[_0x1c2cec(0x47b, 'W6*u')](_0x163c3d['status_extra']),
                                                        _0x52c097 = _0x3cf084[_0x1c2cec(0x39c, '@m24')](_0x45cf0e['last_finish_time'], _0x45cf0e['finish_interval']),
                                                        _0x53224 = _0x3cf084['ACYmE'](getTime, _0x3cf084[_0x1c2cec(0x188, '@m24')](_0x52c097, 0x3e8))[_0x1c2cec(0x9a5, 'MyTQ')]();
                                                    _0x3cf084[_0x1c2cec(0x19b, '2(N#')](_0x45cf0e['is_completed'], !![]) ? DoubleLog(_0x1c2cec(0x1da, '^ut3') + this['index'] + _0x1c2cec(0x9ec, 'R$sB') + _0x45cf0e[_0x1c2cec(0x178, 'L%wM')] + '次, 已完成 ' + _0x45cf0e[_0x1c2cec(0x4c3, '#2Hi')] + '/' + _0x45cf0e['daily_max_count'] + ' 次') : _0x1c2cec(0x5c1, 'Mt$M') !== _0x3cf084[_0x1c2cec(0x4bd, '3!Dt')] ? _0x2be2b1['logErr'](_0x270d88) : _0x3cf084[_0x1c2cec(0x6fe, 'z9*t')](_0x53224, _0x34517f) ? _0x3cf084[_0x1c2cec(0x862, 'z9*t')](DoubleLog, _0x1c2cec(0x482, 'WqE!') + this[_0x1c2cec(0x47f, 'WXl3')] + _0x1c2cec(0x4e4, 'JZxU') + _0x53224) : _0x45cf0e['daily_max_count'] == _0x45cf0e[_0x1c2cec(0xa99, 'Zw8m')] ? _0x3cf084[_0x1c2cec(0x7fe, 'Yo*r')](_0x1c2cec(0x44a, '9wX]'), _0x3cf084['NhJkw']) ? _0x3cf084[_0x1c2cec(0x3ac, 'qmDl')](DoubleLog, _0x1c2cec(0x730, '9iq9') + this[_0x1c2cec(0x659, 'Zw8m')] + _0x1c2cec(0x6db, 'Zw8m') + _0x45cf0e[_0x1c2cec(0x7e7, 'ygf[')] + _0x1c2cec(0x74f, 'Zw8m') + _0x45cf0e['daily_finish_count'] + '/' + _0x45cf0e[_0x1c2cec(0x5fa, '^H2k')] + ' 次') : _0xf788f2[_0x1c2cec(0x14f, 'WXl3')](_0x506dc4, _0x1c2cec(0x988, '^8@B') + this[_0x1c2cec(0x92f, '^H2k')] + _0x1c2cec(0x3ba, 'Y^n*') + _0x51c161[_0x1c2cec(0x870, 'Mt$M')]) : (DoubleLog(_0x1c2cec(0x547, 'R$sB') + this[_0x1c2cec(0x514, ')3Og')] + '】广告赚金: 每天可完成' + _0x45cf0e['daily_max_count'] + '次, 已完成 ' + _0x45cf0e[_0x1c2cec(0x96f, 'JZxU')] + '/' + _0x45cf0e[_0x1c2cec(0x328, 'uvdB')] + ' 次'), await this[_0x1c2cec(0x5f3, '2(N#')](0x2 * 0x3e8));
                                                }
                                            } else _0x3cf084[_0x1c2cec(0x781, 'W6*u')](_0x1ce69a, '
 ❌ 【' + this[_0x1c2cec(0xa57, 'R$sB')] + '】提取现金: ' + _0x285bcf[_0x1c2cec(0x235, '2(N#')]);
                                    }
                                } else _0x546105(_0x1c2cec(0x78e, 'uvdB') + this['index'] + _0x1c2cec(0x403, ']A!w') + _0x5d4b42['message']);
                            } else DoubleLog('
 ❌ 【' + this[_0x1c2cec(0x1fa, '@m24')] + _0x1c2cec(0x887, ')3Og') + _0xce49b0['message']);
                        } else _0xe966d0(_0x1c2cec(0x847, 'WaIa') + this[_0x1c2cec(0x68d, '##))')] + _0x1c2cec(0x574, 'W#uE') + _0x38675d[_0x1c2cec(0x9b3, 'ksby')]);
                    }
                } catch (_0x45d289) {
                    $['logErr'](_0x45d289, _0x50bfa1);
                } finally {
                    _0x3cf084[_0x1c2cec(0x428, 'uvdB')](_0x3cf084['WlneO'], _0x3cf084[_0x1c2cec(0x980, ')3Og')]) ? _0x3cf084[_0x1c2cec(0x996, '^$ND')](_0x585561) : _0x49a8c7[_0x1c2cec(0x7f2, '9wX]')](_0x36e4c9, _0x2fb163);
                }
            }, _0x2ff024);
        });
    }
    async[_0xa91301(0x972, 'Y^n*')](_0x598c09 = 0x7d0) {
        const _0x2448c0 = _0xa91301,
            _0x59c8c5 = {
                'hJjxQ': function(_0xc4c7ad, _0x45b633) {
                    return _0xc4c7ad(_0x45b633);
                },
                'aQtCo': _0x2448c0(0x3e9, 'K7Hk'),
                'HWgOz': function(_0xa76c9b, _0x3617e1) {
                    return _0xa76c9b !== _0x3617e1;
                },
                'zYzmy': _0x2448c0(0x59e, '3!Dt'),
                'ckKTX': function(_0x21ab90, _0x2fb5ed) {
                    return _0x21ab90 == _0x2fb5ed;
                },
                'ljuXB': function(_0x3b0349, _0x4a85e8) {
                    return _0x3b0349(_0x4a85e8);
                },
                'hoKwZ': function(_0x754e4d, _0x3a1627) {
                    return _0x754e4d(_0x3a1627);
                },
                'ogcxg': function(_0x239755, _0x4773e1) {
                    return _0x239755 !== _0x4773e1;
                },
                'cfrVR': _0x2448c0(0x2e8, '9iq9'),
                'VSxUw': _0x2448c0(0x680, 'UC%d'),
                'WfUEv': _0x2448c0(0x5ec, '9Ir0'),
                'aBmOq': function(_0x10a558) {
                    return _0x10a558();
                },
                'qtoNE': function(_0x29d3c5) {
                    return _0x29d3c5();
                },
                'RgkpK': function(_0x442f53, _0x3311af) {
                    return _0x442f53 !== _0x3311af;
                },
                'hVXIZ': _0x2448c0(0x975, '^ut3'),
                'vAmKs': _0x2448c0(0x4ae, 'WqE!'),
                'CZVsA': 'Keep-Alive',
                'WXAHP': _0x2448c0(0x90d, '^$ND')
            };
        return new Promise(_0x2c89cd => {
            const _0x2ed525 = _0x2448c0,
                _0x32ad53 = {
                    'fXoTo': function(_0x126c6a) {
                        return _0x59c8c5['qtoNE'](_0x126c6a);
                    },
                    'SmBgA': function(_0x56023d, _0x3f0d80) {
                        const _0x43481d = _0x3899;
                        return _0x59c8c5[_0x43481d(0x7f8, '!y(t')](_0x56023d, _0x3f0d80);
                    }
                };
            if (_0x59c8c5['RgkpK'](_0x59c8c5[_0x2ed525(0xa76, 'Tx3e')], _0x59c8c5[_0x2ed525(0x56a, '^ut3')])) {
                let _0xe775ec = {
                    'url': hostname + '/luckycat/xigua/v1/task/done/ad_watch_daily?' + this['ck'][0x0],
                    'headers': {
                        'Host': host,
                        'Connection': _0x59c8c5[_0x2ed525(0x389, '^H2k')],
                        'Content-Type': _0x59c8c5[_0x2ed525(0x62b, 'MyTQ')],
                        'User-Agent': this['ck'][0x4],
                        'Cookie': this['ck'][0x1],
                        'x-argus': this['ck'][0x2],
                        'x-ladon': this['ck'][0x3]
                    },
                    'body': _0x2ed525(0x9ab, 'Tx3e')
                };
                $[_0x2ed525(0x7a8, 'JZxU')](_0xe775ec, async(_0x65206e, _0xb1502e, _0x429b89) => {
                    const _0x584cf9 = _0x2ed525,
                        _0x2c3d29 = {
                            'ufzUk': function(_0x44bc14, _0x11bb55) {
                                const _0x3d3b82 = _0x3899;
                                return _0x59c8c5[_0x3d3b82(0xa88, '#yB#')](_0x44bc14, _0x11bb55);
                            }
                        };
                    try {
                        if (_0x65206e) _0x59c8c5[_0x584cf9(0x6ba, '&[MC')] === _0x584cf9(0x1ad, 'QGOg') ? $[_0x584cf9(0x67b, 'WqE!')](_0x65206e) : _0x13d869[_0x584cf9(0xa1e, ')3Og')](_0x52523e, _0x91d629);
                        else {
                            if (_0x59c8c5[_0x584cf9(0x314, '^H2k')]('UxrFR', _0x59c8c5['zYzmy'])) {
                                let _0x48ca92 = JSON['parse'](_0x429b89);
                                if (_0x59c8c5[_0x584cf9(0x5ef, 'Tx3e')](_0x48ca92[_0x584cf9(0x391, '@m24')], 0x0)) _0x59c8c5['hJjxQ'](DoubleLog, _0x584cf9(0x339, 'Tx3e') + this[_0x584cf9(0x927, '2(N#')] + _0x584cf9(0x76a, 'ygf[') + _0x48ca92[_0x584cf9(0x4b2, 'ev8C')][_0x584cf9(0x6ee, 'R$sB')] + _0x584cf9(0x177, '@m24'));
                                else {
                                    if (_0x59c8c5[_0x584cf9(0x66c, '##))')](_0x48ca92[_0x584cf9(0x549, 'QGOg')], 0x2716)) _0x59c8c5[_0x584cf9(0x6d6, 'Bu2E')](DoubleLog, _0x584cf9(0x79a, '#2Hi') + this[_0x584cf9(0x884, '#2Hi')] + _0x584cf9(0x532, 'Bu2E'));
                                    else {
                                        if (_0x59c8c5[_0x584cf9(0xa29, 'Mt$M')](_0x48ca92[_0x584cf9(0x6d4, 'Y^n*')], 0x2717)) _0x59c8c5['HWgOz'](_0x584cf9(0x36e, 'WqE!'), _0x584cf9(0x4ba, 'WXl3')) ? _0x2c3d29['ufzUk'](_0x4ce983, '
 ✅ 【' + this[_0x584cf9(0x853, 'fhKC')] + '】宝箱视频: 获得：' + _0x82e32e[_0x584cf9(0x699, '^$ND')][_0x584cf9(0x1d5, 'Yo*r')] + _0x584cf9(0x504, '6GlL')) : _0x59c8c5['hoKwZ'](DoubleLog, '
 ❌ 【' + this[_0x584cf9(0x17e, 'uvdB')] + '】广告赚金: 该账号没有可执行任务，可能是新号');
                                        else _0x48ca92['err_no'] == 0x2719 ? _0x59c8c5[_0x584cf9(0x3b2, 'WaIa')](_0x59c8c5['cfrVR'], _0x59c8c5[_0x584cf9(0x961, 'r2Oj')]) ? _0x59c8c5['hJjxQ'](DoubleLog, _0x584cf9(0x4b6, '3!Dt') + this[_0x584cf9(0xa97, 'A]*R')] + _0x584cf9(0x1fd, 'L%wM')) : _0x4f6fff[_0x584cf9(0x649, 'L%wM')](_0x88a013) : DoubleLog(_0x584cf9(0x765, '7htc') + this[_0x584cf9(0x3f7, 'qmDl')] + _0x584cf9(0xa7e, '!y(t') + _0x48ca92[_0x584cf9(0x7b6, 'Y^n*')]);
                                    }
                                }
                            } else _0x32ad53[_0x584cf9(0x73d, 'Yo*r')](_0x183f2f);
                        }
                    } catch (_0x5a5989) {
                        _0x59c8c5['ogcxg'](_0x59c8c5[_0x584cf9(0x450, '7htc')], _0x59c8c5[_0x584cf9(0x749, 'JZxU')]) ? _0x158851[_0x584cf9(0x9d4, '^H2k')](_0x50bd97) : $[_0x584cf9(0x637, 'WXl3')](_0x5a5989, _0xb1502e);
                    } finally {
                        _0x59c8c5[_0x584cf9(0x16d, '7htc')](_0x2c89cd);
                    }
                }, _0x598c09);
            } else _0x32ad53[_0x2ed525(0x9fa, 'qmDl')](_0x3c984b, '
 ❌ 【' + this[_0x2ed525(0x792, '&[MC')] + _0x2ed525(0x746, '9iq9'));
        });
    }
    async['ad_video'](_0x2d16aa = 0x7d0) {
        const _0x2bc9e8 = _0xa91301,
            _0x29cd2d = {
                'MdzdB': function(_0xdf8b2a, _0x1fcc01) {
                    return _0xdf8b2a(_0x1fcc01);
                },
                'PoyVY': function(_0x466293) {
                    return _0x466293();
                },
                'qEJSY': function(_0x33a86b, _0x708393) {
                    return _0x33a86b === _0x708393;
                },
                'APveQ': _0x2bc9e8(0xa94, 'ygf['),
                'PIiSM': function(_0x3e6df2, _0x2e9795) {
                    return _0x3e6df2 == _0x2e9795;
                },
                'GRgfF': function(_0x3cadec, _0x53934a) {
                    return _0x3cadec(_0x53934a);
                },
                'ouCzb': function(_0x2a0d81, _0x3baef0) {
                    return _0x2a0d81 == _0x3baef0;
                },
                'wYxAn': function(_0x3935a5, _0x3decee) {
                    return _0x3935a5(_0x3decee);
                },
                'ZCqDC': function(_0x5b1dee, _0x430d36) {
                    return _0x5b1dee(_0x430d36);
                },
                'hdQIY': _0x2bc9e8(0x7db, 'JZxU'),
                'xpRZh': function(_0x2169d2, _0x56fde2) {
                    return _0x2169d2 < _0x56fde2;
                },
                'gQjcp': function(_0x1756f1, _0xb03d55) {
                    return _0x1756f1 + _0xb03d55;
                },
                'hFOOF': function(_0x493143, _0x26e5e3) {
                    return _0x493143 == _0x26e5e3;
                },
                'bMhiX': function(_0x38c212, _0x2c8009) {
                    return _0x38c212 == _0x2c8009;
                },
                'CTDvK': 'mcAKi',
                'fxPeM': function(_0x5ea40c, _0x349047) {
                    return _0x5ea40c(_0x349047);
                },
                'AKrwY': function(_0x2790e7, _0x16ee4d) {
                    return _0x2790e7 * _0x16ee4d;
                },
                'kujyo': function(_0x431f23, _0x24c567) {
                    return _0x431f23 !== _0x24c567;
                },
                'QNoCX': _0x2bc9e8(0x7a6, 'z9*t'),
                'OAyoa': function(_0x1d2200, _0x10fe00) {
                    return _0x1d2200 === _0x10fe00;
                },
                'UvwKy': _0x2bc9e8(0x83e, 'WqE!'),
                'hrlqM': 'DZHQQ',
                'pdboj': function(_0xed10b, _0x665b48) {
                    return _0xed10b === _0x665b48;
                },
                'EXuNW': _0x2bc9e8(0x197, 'K7Hk'),
                'BPaDf': function(_0x478342, _0x3debac) {
                    return _0x478342 === _0x3debac;
                },
                'JVnbx': _0x2bc9e8(0x503, 'm#vA'),
                'YKWjP': _0x2bc9e8(0x95c, 'Tx3e'),
                'veSdi': function(_0x22b557) {
                    return _0x22b557();
                },
                'Ennim': _0x2bc9e8(0x490, 'QGOg')
            };
        return new Promise(_0x142c0c => {
            const _0x8f531f = _0x2bc9e8,
                _0x96e1d4 = {
                    'sfrvk': function(_0x48905b, _0xe48b2e) {
                        const _0x35a569 = _0x3899;
                        return _0x29cd2d[_0x35a569(0x85d, '9wX]')](_0x48905b, _0xe48b2e);
                    },
                    'iinFY': function(_0x36b8d2) {
                        const _0x34951d = _0x3899;
                        return _0x29cd2d[_0x34951d(0x3c8, 'A]*R')](_0x36b8d2);
                    }
                };
            let _0x4ef51e = {
                'url': hostname + '/luckycat/xigua/v1/task/done/ad_watch_daily_again?' + this['ck'][0x0],
                'headers': {
                    'Host': host,
                    'Connection': _0x29cd2d[_0x8f531f(0x8d7, 'fhKC')],
                    'Content-Type': _0x8f531f(0x2e6, '3!Dt'),
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                },
                'body': 'ad_fallback=false&reward_stage=2&income_id=1009604_104711869254_1689831458308&enter_from=my_view_cash&creator_id=1009604000'
            };
            $['post'](_0x4ef51e, async(_0xf21941, _0x21db88, _0x2a2858) => {
                const _0x27067a = _0x8f531f,
                    _0x442000 = {
                        'dZXAo': function(_0x4ddb23, _0xaea704) {
                            const _0x5b343 = _0x3899;
                            return _0x29cd2d[_0x5b343(0x9ac, 'W6*u')](_0x4ddb23, _0xaea704);
                        },
                        'BNDNU': function(_0x1069a7) {
                            const _0x7e13c9 = _0x3899;
                            return _0x29cd2d[_0x7e13c9(0x937, 'Y^n*')](_0x1069a7);
                        }
                    };
                if (_0x29cd2d[_0x27067a(0x3b8, '3!Dt')](_0x27067a(0x350, 'm#vA'), _0x29cd2d[_0x27067a(0x313, 'qmDl')])) _0x96e1d4[_0x27067a(0x754, 'ksby')](_0x2827f7, _0x27067a(0x5bb, 'Y^n*') + this['index'] + _0x27067a(0x3eb, 'uvdB') + _0x5e5424[_0x27067a(0x22e, 'ev8C')]);
                else try {
                    if (_0x27067a(0x91c, 'WXl3') !== _0x27067a(0x512, 'fhKC')) {
                        if (_0xf21941) $[_0x27067a(0x3d9, '#yB#')](_0xf21941);
                        else {
                            let _0x4a6e76 = JSON['parse'](_0x2a2858);
                            if (_0x29cd2d[_0x27067a(0x52d, '!y(t')](_0x4a6e76[_0x27067a(0xa61, '##))')], 0x2716)) _0x29cd2d['GRgfF'](DoubleLog, _0x27067a(0x8f1, '#yB#') + this[_0x27067a(0x853, 'fhKC')] + _0x27067a(0x5d3, 'W#uE'));
                            else {
                                if (_0x29cd2d[_0x27067a(0x422, '#yB#')](_0x4a6e76[_0x27067a(0x161, 'K7Hk')], 0x2717)) _0x29cd2d[_0x27067a(0x6e6, '!y(t')](DoubleLog, '
 ❌ 【' + this[_0x27067a(0x884, '#2Hi')] + _0x27067a(0x5b7, 'Bu2E'));
                                else {
                                    if (_0x29cd2d['PIiSM'](_0x4a6e76[_0x27067a(0x439, '#2Hi')], 0x2719)) _0x29cd2d[_0x27067a(0x410, '^8@B')](DoubleLog, '
 ❌ 【' + this[_0x27067a(0x3da, 'L%wM')] + '】激励广告: 执行任务过快，继续执行任务');
                                    else {
                                        if (_0x29cd2d[_0x27067a(0x29d, '##))')](_0x4a6e76['err_no'], 0x0)) {
                                            if (_0x29cd2d[_0x27067a(0x278, '&[MC')](_0x29cd2d[_0x27067a(0x182, 'R$sB')], _0x29cd2d[_0x27067a(0x681, 'Bu2E')]))
                                                for (let _0x27171b = 0x0; _0x29cd2d[_0x27067a(0x8fd, 'JZxU')](_0x27171b, numvodie); _0x27171b = _0x29cd2d[_0x27067a(0xa3c, '3!Dt')](_0x27171b, 0x1)) {
                                                    if (_0x4a6e76[_0x27067a(0x2ca, 'W#uE')] == 0x2716) {
                                                        DoubleLog('
 ❌ 【' + this[_0x27067a(0x3f7, 'qmDl')] + _0x27067a(0x8bb, 'R$sB'));
                                                        break;
                                                    } else {
                                                        if (_0x29cd2d[_0x27067a(0x7cb, 'K7Hk')](_0x4a6e76[_0x27067a(0x2d5, '6GlL')], 0x2717)) {
                                                            DoubleLog('
 ❌ 【' + this[_0x27067a(0xaad, 'WaIa')] + '】激励广告: 该账号没有可执行任务，可能是新号');
                                                            break;
                                                        } else {
                                                            if (_0x29cd2d[_0x27067a(0x50c, ')3Og')](_0x4a6e76['err_no'], 0x2719)) _0x27067a(0x4e9, 'Tx3e') !== _0x29cd2d[_0x27067a(0x289, 'Yo*r')] ? _0x561f94() : _0x29cd2d[_0x27067a(0x32c, 'Mt$M')](DoubleLog, '
 ❌ 【' + this[_0x27067a(0x6ab, '^8@B')] + _0x27067a(0x28f, '@m24'));
                                                            else {
                                                                if (_0x4a6e76[_0x27067a(0x616, 'A]*R')][_0x27067a(0x200, ')3Og')] < numamount) {
                                                                    _0x29cd2d[_0x27067a(0x2bb, 'R$sB')](DoubleLog, _0x27067a(0x1a1, '3!Dt') + this['index'] + _0x27067a(0x2a8, 'WXl3') + _0x4a6e76['data'][_0x27067a(0x78c, 'WqE!')] + ' 金币，收入低停止执行');
                                                                    break;
                                                                } else await this[_0x27067a(0x81d, 'Yo*r')](_0x29cd2d[_0x27067a(0x2dc, '3!Dt')](0x2, 0x3e8)), await $[_0x27067a(0x150, 'A]*R')](0x7530);
                                                            }
                                                        }
                                                    } if (_0x27171b == numvodie) {
                                                        if (_0x29cd2d['kujyo']('iJahE', _0x29cd2d[_0x27067a(0x202, 'ksby')])) _0x442000[_0x27067a(0x198, 'Zw8m')](_0x4252b7, _0x27067a(0x3dd, 'WXl3') + this[_0x27067a(0x275, ']A!w')] + _0x27067a(0x701, '!y(t') + _0x40de61['err_tips']);
                                                        else break;
                                                    }
                                                } else _0x24663d['logErr'](_0xdedba2);
                                        } else _0x29cd2d[_0x27067a(0xa18, '@m24')](_0x29cd2d['UvwKy'], _0x29cd2d[_0x27067a(0x81a, '^$ND')]) ? _0x96e1d4['iinFY'](_0x495573) : DoubleLog('
 ❌ 【' + this['index'] + _0x27067a(0x614, 'Ato%') + _0x4a6e76[_0x27067a(0x235, '2(N#')]);
                                    }
                                }
                            }
                        }
                    } else _0xaaef5b('
 ❌ 【' + this[_0x27067a(0x2bd, 'K7Hk')] + _0x27067a(0x6d3, ')3Og'));
                } catch (_0x145aa4) {
                    _0x29cd2d[_0x27067a(0x6bd, '^$ND')](_0x29cd2d[_0x27067a(0x49b, '@m24')], _0x29cd2d[_0x27067a(0x401, 'QGOg')]) ? $[_0x27067a(0x28b, 'W#uE')](_0x145aa4, _0x21db88) : _0x442000['BNDNU'](_0xa8b16b);
                } finally {
                    _0x29cd2d['BPaDf'](_0x29cd2d[_0x27067a(0x584, 'Bu2E')], _0x29cd2d[_0x27067a(0x82e, 'QGOg')]) ? _0x5e0ca5[_0x27067a(0x94e, 'W6*u')](_0x2ad6c6) : _0x142c0c();
                }
            }, _0x2d16aa);
        });
    }
    async[_0xa91301(0x183, 'Zw8m')](_0x52e5e3 = 0x7d0) {
        const _0x3eb160 = _0xa91301,
            _0x40c713 = {
                'VVLbO': function(_0x4f1c41, _0x37c447) {
                    return _0x4f1c41(_0x37c447);
                },
                'hWHPE': function(_0x1ea24c, _0x3c58b9) {
                    return _0x1ea24c === _0x3c58b9;
                },
                'GrGOI': _0x3eb160(0x703, 'K7Hk'),
                'sgPBw': function(_0xe5f37b, _0x2cc08f) {
                    return _0xe5f37b == _0x2cc08f;
                },
                'srjVN': function(_0x291d5a, _0x170512) {
                    return _0x291d5a !== _0x170512;
                },
                'KZmYe': _0x3eb160(0x52b, 'uvdB'),
                'EWuQS': function(_0x4f247e, _0x2eb537) {
                    return _0x4f247e(_0x2eb537);
                },
                'hFaEz': function(_0x522979, _0x555948) {
                    return _0x522979 == _0x555948;
                },
                'rvIVb': _0x3eb160(0x8c5, 'Bu2E'),
                'LxoCV': function(_0x3ba020, _0x2c38a0) {
                    return _0x3ba020(_0x2c38a0);
                },
                'kUFYm': function(_0x22c63b, _0x817e1b) {
                    return _0x22c63b == _0x817e1b;
                },
                'hAYyA': _0x3eb160(0x9a6, '3!Dt'),
                'scHHF': function(_0x2a0138, _0x3acaf8) {
                    return _0x2a0138(_0x3acaf8);
                },
                'mUddZ': _0x3eb160(0x661, '&[MC'),
                'YWUUH': function(_0xdd264d) {
                    return _0xdd264d();
                },
                'lCCJe': _0x3eb160(0x683, '^$ND')
            };
        return new Promise(_0x11ad5e => {
            const _0x235784 = _0x3eb160,
                _0x576f43 = {
                    'pjygB': function(_0x31bbfa, _0x574b3c) {
                        return _0x40c713['VVLbO'](_0x31bbfa, _0x574b3c);
                    },
                    'nZyTN': function(_0x10c015, _0x1ec2e2) {
                        const _0x406578 = _0x3899;
                        return _0x40c713[_0x406578(0x633, 'm#vA')](_0x10c015, _0x1ec2e2);
                    }
                };
            let _0x1b82ef = {
                'url': hostname + _0x235784(0x9f0, '@m24') + this['ck'][0x0],
                'headers': {
                    'Host': host,
                    'Connection': _0x40c713[_0x235784(0x6a1, 'ygf[')],
                    'Content-Type': _0x235784(0x99e, '#yB#'),
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                },
                'body': _0x235784(0x96b, 'uvdB')
            };
            $[_0x235784(0x968, 'Zw8m')](_0x1b82ef, async(_0x21bf5c, _0x10e88f, _0x5951c2) => {
                const _0x54f822 = _0x235784,
                    _0x205394 = {
                        'YLbIN': function(_0x100348, _0x2dd552) {
                            const _0x28caf1 = _0x3899;
                            return _0x40c713[_0x28caf1(0xa7a, 'Ato%')](_0x100348, _0x2dd552);
                        }
                    };
                try {
                    if (_0x21bf5c) $[_0x54f822(0x456, 'Tx3e')](_0x21bf5c);
                    else {
                        if (_0x40c713[_0x54f822(0x4bb, '@m24')]('EuBRc', _0x40c713['GrGOI'])) {
                            let _0x127a33 = JSON[_0x54f822(0x4f1, '2(N#')](_0x5951c2);
                            if (_0x40c713[_0x54f822(0x3ae, 'ygf[')](_0x127a33[_0x54f822(0x944, '!y(t')], 0x0)) _0x40c713['srjVN'](_0x40c713[_0x54f822(0x879, '6GlL')], _0x54f822(0x84c, 'K7Hk')) ? _0x576f43[_0x54f822(0x7aa, 'ev8C')](_0x56a189, _0x54f822(0x2fe, '!y(t') + this[_0x54f822(0x6b7, 'ksby')] + _0x54f822(0x8a0, '9iq9') + _0x3970d0[_0x54f822(0x6f8, '7htc')]) : _0x40c713['EWuQS'](DoubleLog, _0x54f822(0x2aa, 'WqE!') + this[_0x54f822(0x93b, '#yB#')] + '】激励广告: 获得奖励 ' + _0x127a33['data'][_0x54f822(0x797, '^$ND')] + _0x54f822(0x504, '6GlL'));
                            else {
                                if (_0x40c713[_0x54f822(0x90c, '9iq9')](_0x127a33[_0x54f822(0x89f, 'Yo*r')], 0x2716)) _0x40c713[_0x54f822(0x6e7, '^8@B')] !== _0x40c713[_0x54f822(0x90f, 'WXl3')] ? _0x576f43[_0x54f822(0x346, 'Yo*r')](_0x47c814, _0x54f822(0x2fe, '!y(t') + this['index'] + '】激励广告: ' + _0x124b73['err_tips']) : _0x40c713[_0x54f822(0xa1b, 'Ato%')](DoubleLog, _0x54f822(0x26c, 'MyTQ') + this[_0x54f822(0x265, '6GlL')] + _0x54f822(0x30d, 'z9*t'));
                                else {
                                    if (_0x40c713[_0x54f822(0x1bd, '9iq9')](_0x127a33[_0x54f822(0x257, 'Zw8m')], 0x2717)) _0x40c713[_0x54f822(0x262, '&[MC')](_0x54f822(0x819, ']A!w'), _0x40c713[_0x54f822(0x1a5, 'Y^n*')]) ? _0x40c713[_0x54f822(0x67a, 'UC%d')](DoubleLog, _0x54f822(0x544, 'ksby') + this[_0x54f822(0x420, 'JZxU')] + '】激励广告: 该账号没有可执行任务，可能是新号') : _0x205394[_0x54f822(0x27d, 'W#uE')](_0x27ab40, _0x54f822(0x524, 'z9*t') + this[_0x54f822(0x93b, '#yB#')] + _0x54f822(0x317, 'r2Oj'));
                                    else _0x40c713[_0x54f822(0x5c2, 'z9*t')](_0x127a33[_0x54f822(0x676, ')eXz')], 0x2719) ? _0x40c713[_0x54f822(0x6f1, ']A!w')](_0x40c713[_0x54f822(0x501, '3!Dt')], _0x40c713[_0x54f822(0x497, '!y(t')]) ? _0x40c713['LxoCV'](DoubleLog, '
 ❌ 【' + this[_0x54f822(0x514, ')3Og')] + '】激励广告: 执行任务过快，继续执行任务') : _0x3f904a['logErr'](_0x39d77e, _0x46bb4e) : _0x40c713['scHHF'](DoubleLog, _0x54f822(0x236, '^$ND') + this[_0x54f822(0x230, '7htc')] + _0x54f822(0x2a7, 'Mt$M') + _0x127a33[_0x54f822(0x4f7, '6GlL')]);
                                }
                            }
                        } else _0x205394[_0x54f822(0x1ff, '##))')](_0x261e1c, '
 ✅ 【' + this['index'] + _0x54f822(0xa40, 'Mt$M') + _0x53f9a2[_0x54f822(0x994, 'vvN[')][_0x54f822(0x893, '&[MC')] + _0x54f822(0x916, '9Ir0'));
                    }
                } catch (_0x4c4479) {
                    $[_0x54f822(0x492, 'WaIa')](_0x4c4479, _0x10e88f);
                } finally {
                    _0x40c713['hWHPE'](_0x54f822(0x488, '&[MC'), _0x54f822(0x16c, 'Tx3e')) ? _0x40c713[_0x54f822(0x8ec, 'r2Oj')](_0x11ad5e) : _0x576f43['pjygB'](_0x5956b0, _0x54f822(0x5ea, 'qmDl') + this['index'] + _0x54f822(0x57a, 'Ato%') + _0x14cff9[_0x54f822(0x605, '@m24')]);
                }
            }, _0x52e5e3);
        });
    }
    async[_0xa91301(0x35a, 'W#uE')](_0x5c9559 = 0x7d0) {
        const _0x3e5389 = _0xa91301,
            _0x44cd47 = {
                'EyzVC': function(_0x1cf727, _0x38b879) {
                    return _0x1cf727(_0x38b879);
                },
                'kRIUl': function(_0x3efd1c, _0x4e6024) {
                    return _0x3efd1c !== _0x4e6024;
                },
                'OKuuq': 'QfHDm',
                'hAAGm': function(_0x19df2f, _0x562217) {
                    return _0x19df2f == _0x562217;
                },
                'ReduL': function(_0x598583, _0x54cd34) {
                    return _0x598583 * _0x54cd34;
                },
                'vHxsu': function(_0x46d000, _0x4a83ac) {
                    return _0x46d000 === _0x4a83ac;
                },
                'zsiGu': 'dvbzr',
                'NSkIJ': _0x3e5389(0x838, '2(N#'),
                'aZHff': function(_0x2b0f29) {
                    return _0x2b0f29();
                },
                'XsODv': 'application/x-www-form-urlencoded; charset=UTF-8'
            };
        return new Promise(_0x337757 => {
            const _0x253470 = _0x3e5389,
                _0x5b3541 = {
                    'VXScD': function(_0x29d12a, _0x301dc5) {
                        return _0x29d12a == _0x301dc5;
                    },
                    'qnMqR': function(_0x333bdd, _0x53d742) {
                        return _0x333bdd(_0x53d742);
                    }
                };
            let _0x30d090 = {
                'url': hostname + _0x253470(0x461, 'MyTQ') + this['ck'][0x0],
                'headers': {
                    'Host': host,
                    'Connection': 'Keep-Alive',
                    'Content-Type': _0x44cd47[_0x253470(0x38d, '9iq9')],
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                },
                'body': 'ad_fallback=false&enter_from=my_view_cash&income_id=1009622_104711869254_1689830202503&creator_id=1009622&ad_seconds=25'
            };
            $[_0x253470(0x9db, '#2Hi')](_0x30d090, async(_0x36f882, _0x5983be, _0x41b3be) => {
                const _0x11bf30 = _0x253470,
                    _0x5d66bd = {
                        'rEnEL': function(_0x5608cf, _0x1e073d) {
                            return _0x5608cf == _0x1e073d;
                        },
                        'Imcab': function(_0x314c06, _0x144f1b) {
                            const _0x38fe62 = _0x3899;
                            return _0x44cd47[_0x38fe62(0x444, 'WaIa')](_0x314c06, _0x144f1b);
                        }
                    };
                if (_0x44cd47['kRIUl']('jeOpY', _0x44cd47[_0x11bf30(0x3fc, '#2Hi')])) try {
                    if (_0x36f882) {
                        if (_0x44cd47['kRIUl']('KGyDb', _0x11bf30(0x41b, '&[MC'))) {
                            let _0x388e6e = _0x2c071b['parse'](_0x1ebabc);
                            _0x5b3541[_0x11bf30(0x855, '9iq9')](_0x388e6e[_0x11bf30(0x808, '^ut3')], 0x0) ? _0x5b3541['qnMqR'](_0x532081, '
 ✅ 【' + this[_0x11bf30(0x2b4, ')eXz')] + _0x11bf30(0x1ac, 'W6*u')) : _0x57f9e9(_0x11bf30(0x1da, '^ut3') + this[_0x11bf30(0x246, 'QGOg')] + _0x11bf30(0x2cb, '^H2k') + _0x388e6e['message']);
                        } else $['logErr'](_0x36f882);
                    } else {
                        let _0x474fce = JSON[_0x11bf30(0x469, '##))')](_0x41b3be);
                        _0x44cd47[_0x11bf30(0x33d, 'A]*R')](_0x474fce[_0x11bf30(0x89f, 'Yo*r')], 0x0) ? (DoubleLog('
 ✅ 【' + this['index'] + '】翻倍成功: 视频翻倍中，今日有效。'), await $['wait'](0x3e8), await this[_0x11bf30(0x8d2, 'ksby')](_0x44cd47['ReduL'](0x2, 0x3e8))) : _0x44cd47[_0x11bf30(0xa41, 'MyTQ')](DoubleLog, _0x11bf30(0x5bb, 'Y^n*') + this[_0x11bf30(0x514, ')3Og')] + _0x11bf30(0x888, 'A]*R') + _0x474fce['err_tips']);
                    }
                } catch (_0x28a07d) {
                    $[_0x11bf30(0xa5a, '^ut3')](_0x28a07d, _0x5983be);
                } finally {
                    _0x44cd47[_0x11bf30(0x3b9, '^8@B')](_0x44cd47[_0x11bf30(0x17b, ')eXz')], _0x44cd47['NSkIJ']) ? _0x14b8b5(_0x11bf30(0x9a7, 'Zw8m') + this['index'] + _0x11bf30(0x736, '@m24') + _0x46a8ae[_0x11bf30(0x743, ')3Og')]) : _0x44cd47['aZHff'](_0x337757);
                } else {
                    let _0x30ab47 = _0x5d66bd[_0x11bf30(0xa9a, 'L%wM')](_0x4895b6[_0x11bf30(0x4b7, '@m24')]['reward_type'], 0x1) ? '水滴' : '化肥';
                    _0x5d66bd[_0x11bf30(0x88e, 'vvN[')](_0x4bf577, _0x11bf30(0x53f, '##))') + this[_0x11bf30(0x884, '#2Hi')] + _0x11bf30(0x45a, '^$ND') + _0x228507[_0x11bf30(0x49c, 'W6*u')][_0x11bf30(0x82b, 'Mt$M')] + _0x11bf30(0x7e1, '6GlL') + _0x1ed8ce[_0x11bf30(0x23f, '#yB#')][_0x11bf30(0xa44, 'L%wM')] + _0x30ab47 + _0x11bf30(0x77a, '@m24') + _0x30ab47 + '数量' + _0x450317[_0x11bf30(0xaa0, 'r2Oj')]['current_num']);
                }
            }, _0x5c9559);
        });
    }
    async[_0xa91301(0x218, ']A!w')](_0x4ba9cc = 0x7d0) {
        const _0x1e9a1a = _0xa91301,
            _0x3e7021 = {
                'bcMWQ': function(_0x4c4a15, _0x49d569) {
                    return _0x4c4a15(_0x49d569);
                },
                'oeeQx': _0x1e9a1a(0x73b, '3!Dt'),
                'eUzAg': function(_0x4efac8, _0x5ca5d0) {
                    return _0x4efac8 !== _0x5ca5d0;
                },
                'MOyLb': _0x1e9a1a(0x8b5, '3!Dt'),
                'FSUrM': function(_0x11c2b7, _0x2f6277) {
                    return _0x11c2b7 == _0x2f6277;
                },
                'BxFJZ': function(_0x4aa79c, _0x3517a5) {
                    return _0x4aa79c < _0x3517a5;
                },
                'uXuOI': function(_0x465769, _0x1b4c6b) {
                    return _0x465769 !== _0x1b4c6b;
                },
                'AkJHS': function(_0x469eaa, _0x42a4cd) {
                    return _0x469eaa == _0x42a4cd;
                },
                'YrIYZ': _0x1e9a1a(0x805, 'r2Oj'),
                'QWVuI': function(_0x5386b4, _0x2a222d) {
                    return _0x5386b4 * _0x2a222d;
                },
                'hPIsG': function(_0x4997b1, _0x39dd88) {
                    return _0x4997b1 === _0x39dd88;
                },
                'yRCMG': _0x1e9a1a(0x628, ')eXz'),
                'UGhhb': function(_0x46e124, _0x593533) {
                    return _0x46e124(_0x593533);
                },
                'HLzZQ': function(_0x765c03) {
                    return _0x765c03();
                },
                'WHERe': function(_0x5394f4, _0x15c4f8) {
                    return _0x5394f4 == _0x15c4f8;
                },
                'qEBzX': _0x1e9a1a(0x606, 'W6*u'),
                'AGJcG': 'Keep-Alive'
            };
        return new Promise(_0x1c02d4 => {
            const _0x26b545 = _0x1e9a1a,
                _0x24c023 = {
                    'kOoRe': function(_0x2ca291, _0x2f89d6) {
                        return _0x3e7021['WHERe'](_0x2ca291, _0x2f89d6);
                    },
                    'lkFrP': function(_0x567d9a, _0x2074b2) {
                        return _0x567d9a(_0x2074b2);
                    }
                };
            if (_0x3e7021[_0x26b545(0x1b7, 'ksby')](_0x3e7021[_0x26b545(0xa0c, 'uvdB')], 'Gujwt')) {
                let _0x1f7cc2 = {
                    'url': hostname + _0x26b545(0x6c6, 'z9*t') + this['ck'][0x0],
                    'headers': {
                        'Host': host,
                        'Connection': _0x3e7021[_0x26b545(0x334, '2(N#')],
                        'Content-Type': _0x26b545(0x998, '@m24'),
                        'User-Agent': this['ck'][0x4],
                        'Cookie': this['ck'][0x1],
                        'x-argus': this['ck'][0x2],
                        'x-ladon': this['ck'][0x3]
                    }
                };
                $[_0x26b545(0xa9d, 'WaIa')](_0x1f7cc2, async(_0x4aede6, _0x45d3fa, _0x3a3261) => {
                    const _0x1eedcb = _0x26b545,
                        _0x5cc268 = {
                            'VWevF': function(_0xd1b9da, _0x5526dc) {
                                return _0x3e7021['bcMWQ'](_0xd1b9da, _0x5526dc);
                            }
                        };
                    if (_0x1eedcb(0x908, 'Bu2E') !== _0x3e7021[_0x1eedcb(0x6a4, 'WaIa')]) _0x36c027[_0x1eedcb(0x2e5, 'Yo*r')](_0x1c359f);
                    else try {
                        if (_0x3e7021[_0x1eedcb(0x3e5, '2(N#')](_0x3e7021[_0x1eedcb(0x2a3, ']A!w')], _0x3e7021['MOyLb'])) _0x5cc268[_0x1eedcb(0x570, '7htc')](_0x52b458, _0x1eedcb(0x4b6, '3!Dt') + this['index'] + _0x1eedcb(0x7fd, '9wX]'));
                        else {
                            if (_0x4aede6) $[_0x1eedcb(0x517, '@m24')](_0x4aede6);
                            else {
                                let _0x3f13a4 = JSON[_0x1eedcb(0x2e0, '9wX]')](_0x3a3261);
                                if (_0x3e7021[_0x1eedcb(0x912, 'L%wM')](_0x3f13a4[_0x1eedcb(0xa61, '##))')], 0x0)) {
                                    if (_0x3f13a4[_0x1eedcb(0x6e8, 'ygf[')][_0x1eedcb(0x55c, '9Ir0')] && Array['isArray'](_0x3f13a4[_0x1eedcb(0xaa0, 'r2Oj')][_0x1eedcb(0x8ba, 'Mt$M')]))
                                        for (let _0x148cc1 = 0x0; _0x3e7021[_0x1eedcb(0x50a, '#yB#')](_0x148cc1, _0x3f13a4[_0x1eedcb(0x5eb, '3!Dt')][_0x1eedcb(0x3de, 'qmDl')]['length']); _0x148cc1++) {
                                            if (_0x3e7021[_0x1eedcb(0x8d8, 'L%wM')]('jUKGD', _0x1eedcb(0x9c8, 'W6*u'))) {
                                                let _0x297f97 = _0x4884ed[_0x1eedcb(0x194, '9iq9')](_0x181a71);
                                                if (_0x297f97[_0x1eedcb(0x9f2, 'qmDl')] == 0x0) _0x21a7f9(_0x1eedcb(0x50e, 'ksby') + this[_0x1eedcb(0x92f, '^H2k')] + _0x1eedcb(0x618, ')eXz'));
                                                else _0x24c023['kOoRe'](_0x297f97[_0x1eedcb(0x225, '^H2k')], 0x2713) ? _0x5825c7(_0x1eedcb(0x533, 'Yo*r') + this[_0x1eedcb(0x941, '3!Dt')] + _0x1eedcb(0x7fd, '9wX]')) : _0x24c023[_0x1eedcb(0x4fd, 'r2Oj')](_0x3462d8, '
 ❌ 【' + this['index'] + _0x1eedcb(0x954, ')3Og') + _0x297f97[_0x1eedcb(0x540, 'R$sB')]);
                                            } else {
                                                let _0x1e774b = _0x3f13a4[_0x1eedcb(0x994, 'vvN[')]['task_list'][_0x148cc1];
                                                if (_0x3e7021[_0x1eedcb(0x6ad, '6GlL')](_0x1e774b[_0x1eedcb(0x335, 'WqE!')], 0x410)) {
                                                    let _0x3722e6 = JSON[_0x1eedcb(0x696, 'z9*t')](_0x1e774b[_0x1eedcb(0x4d6, 'WaIa')]);
                                                    _0x3e7021[_0x1eedcb(0x571, 'UC%d')](DoubleLog, _0x1eedcb(0x9ad, '@m24') + this[_0x1eedcb(0x6b7, 'ksby')] + '】视频统计: 已赚 ' + _0x3722e6[_0x1eedcb(0x19a, 'Y^n*')] + ' 金，阅读时长 ' + $['time'](_0x3e7021['YrIYZ'], _0x3e7021[_0x1eedcb(0x7c5, 'ygf[')](_0x3722e6[_0x1eedcb(0x9e3, 'JZxU')], 0x3e8)) + _0x1eedcb(0x4e3, 'm#vA'));
                                                }
                                            }
                                        }
                                } else _0x3e7021[_0x1eedcb(0x965, 'vvN[')](_0x1eedcb(0xa04, '#yB#'), _0x3e7021[_0x1eedcb(0xa66, 'Y^n*')]) ? _0x3548f4('
 ✅ 【' + this['index'] + _0x1eedcb(0xa84, 'W#uE') + _0x4bf8b8[_0x1eedcb(0x5b3, '&[MC')][_0x1eedcb(0x6ee, 'R$sB')] + _0x1eedcb(0x551, 'qmDl')) : _0x3e7021['UGhhb'](DoubleLog, _0x1eedcb(0xa71, 'UC%d') + this['index'] + '】观看视频: ' + _0x3f13a4['err_tips']);
                            }
                        }
                    } catch (_0x27a93f) {
                        $['logErr'](_0x27a93f, _0x45d3fa);
                    } finally {
                        _0x3e7021['HLzZQ'](_0x1c02d4);
                    }
                }, _0x4ba9cc);
            } else _0x4e9e90['logErr'](_0x74f19e);
        });
    }
    async['newuserrecord'](_0x417780 = 0x7d0) {
        const _0x510279 = _0xa91301,
            _0x274560 = {
                'qHsav': function(_0x52949f, _0x213b88) {
                    return _0x52949f === _0x213b88;
                },
                'kSRQu': _0x510279(0xa4a, 'vvN['),
                'OdQKf': _0x510279(0x72e, '@m24'),
                'jHFrL': _0x510279(0x40e, '7htc'),
                'CmuGW': _0x510279(0x7fc, 'W6*u'),
                'lQgRP': function(_0x5cafbb, _0x140269) {
                    return _0x5cafbb == _0x140269;
                },
                'uipqu': _0x510279(0x4b5, 'ksby'),
                'DDqzb': function(_0x45c24d, _0x59fbee) {
                    return _0x45c24d(_0x59fbee);
                },
                'fafta': function(_0x3934c6) {
                    return _0x3934c6();
                },
                'HVGyz': 'Keep-Alive'
            };
        return new Promise(_0x5f2e2f => {
            const _0x56f707 = _0x510279,
                _0xa84f32 = {
                    'TTHdq': function(_0x1f6e5a, _0x2d7024) {
                        return _0x1f6e5a(_0x2d7024);
                    },
                    'WVNeb': function(_0x8fadbc, _0x2121bb) {
                        const _0x178b78 = _0x3899;
                        return _0x274560[_0x178b78(0x8fa, 'WXl3')](_0x8fadbc, _0x2121bb);
                    },
                    'uzEEZ': _0x274560[_0x56f707(0x1cb, 'Tx3e')],
                    'fWxTC': _0x274560[_0x56f707(0x9be, '^ut3')],
                    'qdFhA': function(_0x1e79d1, _0x1cd8e0) {
                        return _0x1e79d1 === _0x1cd8e0;
                    },
                    'kHzzd': _0x274560[_0x56f707(0x925, 'ygf[')],
                    'nUvYr': _0x274560[_0x56f707(0x7a9, '^8@B')],
                    'YLQDl': function(_0x1e81a0, _0x25a727) {
                        return _0x274560['lQgRP'](_0x1e81a0, _0x25a727);
                    },
                    'ukAIx': _0x274560[_0x56f707(0x7d3, ')eXz')],
                    'mpcGW': function(_0xb5eb75, _0x5d14bb) {
                        const _0x32a51a = _0x56f707;
                        return _0x274560[_0x32a51a(0x56d, 'WqE!')](_0xb5eb75, _0x5d14bb);
                    },
                    'yAowM': 'FrWLz',
                    'cxzLS': function(_0x463d61, _0x5b499d) {
                        const _0x1f24cd = _0x56f707;
                        return _0x274560[_0x1f24cd(0x4fe, 'Mt$M')](_0x463d61, _0x5b499d);
                    },
                    'HEAdA': _0x56f707(0x5df, 'z9*t'),
                    'ycpBQ': function(_0x3a295c, _0x369cd3) {
                        return _0x3a295c * _0x369cd3;
                    },
                    'FEkbP': function(_0x3124a3) {
                        const _0x3321f1 = _0x56f707;
                        return _0x274560[_0x3321f1(0x6f2, 'ev8C')](_0x3124a3);
                    }
                };
            let _0x4ef2c2 = {
                'url': hostname + '/luckycat/xigua/v1/task/page?' + this['ck'][0x0],
                'headers': {
                    'Host': host,
                    'Connection': _0x274560[_0x56f707(0x964, 'ksby')],
                    'Content-Type': _0x56f707(0x836, 'K7Hk'),
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                }
            };
            $[_0x56f707(0x1a6, 'ev8C')](_0x4ef2c2, async(_0x392e8f, _0x392a24, _0x297964) => {
                const _0x12de4a = _0x56f707;
                try {
                    if (_0xa84f32[_0x12de4a(0x244, 'Tx3e')](_0xa84f32[_0x12de4a(0x24f, ')3Og')], _0xa84f32[_0x12de4a(0x49d, 'Y^n*')])) _0xcc20bb(_0x12de4a(0x378, '!y(t') + this[_0x12de4a(0x40d, 'z9*t')] + _0x12de4a(0x480, 'qmDl'));
                    else {
                        if (_0x392e8f) _0xa84f32[_0x12de4a(0x8c4, '&[MC')](_0xa84f32[_0x12de4a(0x78d, 'ygf[')], _0xa84f32[_0x12de4a(0x94f, 'WaIa')]) ? _0xa84f32[_0x12de4a(0x476, 'K7Hk')](_0x4c98bd, _0x12de4a(0x639, '^H2k') + this[_0x12de4a(0x6ab, '^8@B')] + _0x12de4a(0x362, 'r2Oj') + _0x398849['message']) : $[_0x12de4a(0x8c3, 'R$sB')](_0x392e8f);
                        else {
                            let _0x32c9d2 = JSON[_0x12de4a(0x997, ')3Og')](_0x297964);
                            if (_0xa84f32[_0x12de4a(0x2c1, 'Yo*r')](_0x32c9d2[_0x12de4a(0x682, 'A]*R')], 0x0)) {
                                if (_0x32c9d2[_0x12de4a(0x5e9, 'm#vA')]['task_list'] && Array['isArray'](_0x32c9d2[_0x12de4a(0x6e8, 'ygf[')]['task_list']))
                                    for (let _0x381244 = 0x0; _0x381244 < _0x32c9d2[_0x12de4a(0x5e9, 'm#vA')]['task_list'][_0x12de4a(0xa11, '@m24')]; _0x381244++) {
                                        if (_0xa84f32[_0x12de4a(0x2d1, '6GlL')](_0x12de4a(0x321, 'WXl3'), _0xa84f32[_0x12de4a(0x3c2, 'MyTQ')])) _0xbf601a['logErr'](_0x16a9d5);
                                        else {
                                            let _0x5539bf = _0x32c9d2['data']['task_list'][_0x381244];
                                            if (_0xa84f32['mpcGW'](_0x5539bf[_0x12de4a(0x436, 'UC%d')], 0x411)) {
                                                let _0x3d7849 = JSON['parse'](_0x5539bf['status_extra']);
                                                _0xa84f32[_0x12de4a(0x284, 'MyTQ')](_0x5539bf[_0x12de4a(0x54e, 'R$sB')], !![]) ? _0xa84f32[_0x12de4a(0x14d, 'UC%d')](_0x12de4a(0x5b2, '9wX]'), _0xa84f32[_0x12de4a(0x94a, 'Bu2E')]) ? _0xa84f32[_0x12de4a(0x19e, 'Tx3e')](DoubleLog, _0x12de4a(0x524, 'z9*t') + this[_0x12de4a(0x228, 'r2Oj')] + '】新手奖励: ' + _0x32c9d2[_0x12de4a(0x6af, '9wX]')]) : _0xa84f32[_0x12de4a(0x286, ']A!w')](_0x3401db, _0x12de4a(0x8f1, '#yB#') + this[_0x12de4a(0xaad, 'WaIa')] + _0x12de4a(0x39e, 'W#uE')) : _0x3d7849['duration'] > 0x0 ? (_0xa84f32[_0x12de4a(0x74a, 'uvdB')](DoubleLog, _0x12de4a(0x54b, '^$ND') + this[_0x12de4a(0x17c, '!y(t')] + '】新手奖励: 已领取 ' + _0x3d7849[_0x12de4a(0x446, 'Tx3e')] + _0x12de4a(0x4ee, 'WaIa') + $[_0x12de4a(0x717, '3!Dt')](_0xa84f32[_0x12de4a(0x750, 'z9*t')], _0xa84f32['ycpBQ'](_0x3d7849[_0x12de4a(0x7ba, 'ksby')], 0x3e8)) + _0x12de4a(0x4d2, 'Zw8m')), await $[_0x12de4a(0x773, 'MyTQ')](0x3e8), await this['open_newuserrecord'](_0xa84f32[_0x12de4a(0xa82, '^8@B')](0x2, 0x3e8))) : (_0xa84f32[_0x12de4a(0x5d2, 'ygf[')](DoubleLog, _0x12de4a(0x71c, 'Ato%') + this[_0x12de4a(0xa5e, 'MyTQ')] + _0x12de4a(0x91b, 'Mt$M') + _0x3d7849['activity_day'] + _0x12de4a(0xa0b, 'W#uE')), await $[_0x12de4a(0x833, 'Zw8m')](0x3e8), await this[_0x12de4a(0x354, 'Bu2E')](_0xa84f32[_0x12de4a(0x1ba, ')3Og')](0x2, 0x3e8)));
                                            }
                                        }
                                    }
                            } else _0xa84f32[_0x12de4a(0x2cc, 'W#uE')](DoubleLog, '
 ❌ 【' + this['index'] + _0x12de4a(0x9e5, 'A]*R') + _0x32c9d2['err_tips']);
                        }
                    }
                } catch (_0x21f4c5) {
                    $['logErr'](_0x21f4c5, _0x392a24);
                } finally {
                    _0xa84f32[_0x12de4a(0x5d5, 'A]*R')](_0x5f2e2f);
                }
            }, _0x417780);
        });
    }
    async['open_newuserrecord'](_0x4ee052 = 0x7d0) {
        const _0x2c22ba = _0xa91301,
            _0x4480a3 = {
                'Ywinl': function(_0x13f1a8) {
                    return _0x13f1a8();
                },
                'KfYEt': 'Keep-Alive',
                'aIGOV': _0x2c22ba(0x477, 'm#vA')
            };
        return new Promise(_0x34f3ec => {
            const _0x521de0 = _0x2c22ba,
                _0x487666 = {
                    'uZfZq': function(_0x3937f3, _0x4343b9) {
                        return _0x3937f3 == _0x4343b9;
                    },
                    'hnLCG': function(_0x58041a) {
                        return _0x4480a3['Ywinl'](_0x58041a);
                    }
                };
            let _0x52280b = {
                'url': hostname + _0x521de0(0x445, 'qmDl') + this['ck'][0x0],
                'headers': {
                    'Host': host,
                    'Connection': _0x4480a3['KfYEt'],
                    'Content-Type': _0x4480a3[_0x521de0(0x565, '7htc')],
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                },
                'body': ''
            };
            $['post'](_0x52280b, async(_0x2f68b5, _0x2eaf54, _0x57d4dd) => {
                const _0x5a1145 = _0x521de0;
                try {
                    if (_0x2f68b5) $[_0x5a1145(0x7d7, 'UC%d')](_0x2f68b5);
                    else {
                        let _0x3330b6 = JSON['parse'](_0x57d4dd);
                        if (_0x487666['uZfZq'](_0x3330b6[_0x5a1145(0xa6d, 'm#vA')], 0x0)) {} else DoubleLog('
 ❌ 【' + this[_0x5a1145(0x275, ']A!w')] + _0x5a1145(0x5e5, 'Bu2E') + _0x3330b6[_0x5a1145(0x3ad, ']A!w')]);
                    }
                } catch (_0x5b0698) {
                    $['logErr'](_0x5b0698, _0x2eaf54);
                } finally {
                    _0x487666[_0x5a1145(0x697, '9Ir0')](_0x34f3ec);
                }
            }, _0x4ee052);
        });
    }
    async['newuserrecord_video'](_0x463229 = 0x7d0) {
        const _0x47173e = _0xa91301,
            _0x59d3dd = {
                'knLzj': function(_0x2cbd46, _0x123850) {
                    return _0x2cbd46 !== _0x123850;
                },
                'qqTas': _0x47173e(0x2fb, '##))'),
                'CKICu': _0x47173e(0x252, 'W6*u'),
                'hakLn': function(_0x49fa4a, _0x951eb0) {
                    return _0x49fa4a !== _0x951eb0;
                },
                'gBvwc': _0x47173e(0x708, 'uvdB'),
                'xdlut': function(_0x26d896, _0x2ad878) {
                    return _0x26d896 * _0x2ad878;
                },
                'yWBrR': _0x47173e(0x84e, 'r2Oj'),
                'Jbalm': 'HcfQO',
                'OVYtp': function(_0x30ccac) {
                    return _0x30ccac();
                },
                'kSkmh': 'Keep-Alive'
            };
        return new Promise(_0xf08b5f => {
            const _0x432bf4 = _0x47173e;
            let _0x4e449d = {
                'url': hostname + '/luckycat/xigua/v1/task/query/ad?' + this['ck'][0x0],
                'headers': {
                    'Host': host,
                    'Connection': _0x59d3dd[_0x432bf4(0x51b, ')eXz')],
                    'Content-Type': _0x432bf4(0x8b3, 'r2Oj'),
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                }
            };
            $['get'](_0x4e449d, async(_0x50f413, _0x80b71a, _0x1e2a9a) => {
                const _0x39fb93 = _0x432bf4;
                try {
                    if (_0x50f413) _0x59d3dd[_0x39fb93(0x42b, '##))')](_0x59d3dd['qqTas'], _0x59d3dd[_0x39fb93(0x97c, '9Ir0')]) ? $[_0x39fb93(0x9d4, '^H2k')](_0x50f413) : _0x496a8c['logErr'](_0x2e6c9f, _0x4034b7);
                    else {
                        let _0x365501 = JSON['parse'](_0x1e2a9a);
                        _0x365501['err_no'] == 0x0 && (_0x59d3dd[_0x39fb93(0x336, 'ksby')](_0x59d3dd[_0x39fb93(0x3c9, 'Zw8m')], _0x59d3dd[_0x39fb93(0x330, ']A!w')]) ? _0x22d793() : await this[_0x39fb93(0x748, '#yB#')](_0x59d3dd[_0x39fb93(0x656, 'WaIa')](0x2, 0x3e8)));
                    }
                } catch (_0x3e743e) {
                    _0x59d3dd[_0x39fb93(0xa1f, '7htc')](_0x59d3dd[_0x39fb93(0x990, '2(N#')], _0x59d3dd[_0x39fb93(0x35b, '#2Hi')]) ? $['logErr'](_0x3e743e, _0x80b71a) : _0x25726e[_0x39fb93(0x162, '#2Hi')](_0x103dbd, _0x151f37);
                } finally {
                    _0x59d3dd['OVYtp'](_0xf08b5f);
                }
            }, _0x463229);
        });
    }
    async['newuserrecord_video_stop'](_0xe7ed26 = 0x7d0) {
        const _0x4ce03e = _0xa91301,
            _0xb95228 = {
                'tTZpA': 'WdLIa',
                'EIaah': function(_0x189aee, _0x122fc9) {
                    return _0x189aee === _0x122fc9;
                },
                'tQqfA': function(_0x33edf6, _0xfcdf52) {
                    return _0x33edf6 == _0xfcdf52;
                },
                'IZvTg': _0x4ce03e(0x27e, '2(N#'),
                'ltqRX': function(_0x258811, _0x1f8853) {
                    return _0x258811(_0x1f8853);
                },
                'plXZV': function(_0x2d19f2) {
                    return _0x2d19f2();
                },
                'vsKix': _0x4ce03e(0x9b8, 'JZxU'),
                'qESuz': _0x4ce03e(0x2f0, 'Mt$M')
            };
        return new Promise(_0x5f3ed8 => {
            const _0x4ca288 = _0x4ce03e,
                _0x22e0c1 = {
                    'ZQbfI': function(_0x290f9f, _0x51fd3a) {
                        return _0x290f9f(_0x51fd3a);
                    },
                    'cEauc': _0xb95228[_0x4ca288(0x588, 'Zw8m')],
                    'vbGlg': function(_0x4ffae5, _0x3ce8a9) {
                        const _0x56dc8e = _0x4ca288;
                        return _0xb95228[_0x56dc8e(0x7ca, 'K7Hk')](_0x4ffae5, _0x3ce8a9);
                    },
                    'Pxndz': _0x4ca288(0x541, '^H2k'),
                    'PBxeX': function(_0x505146, _0x4575d0) {
                        const _0x195b79 = _0x4ca288;
                        return _0xb95228[_0x195b79(0xa03, '9iq9')](_0x505146, _0x4575d0);
                    },
                    'lZCaM': _0xb95228[_0x4ca288(0x3ef, 'vvN[')],
                    'HkEIS': function(_0x4d841d, _0x555da8) {
                        return _0xb95228['ltqRX'](_0x4d841d, _0x555da8);
                    },
                    'CbJRl': function(_0x2946c7) {
                        const _0x46e754 = _0x4ca288;
                        return _0xb95228[_0x46e754(0x7f6, ']A!w')](_0x2946c7);
                    }
                };
            let _0x2d01a8 = {
                'url': hostname + '/luckycat/xigua/v1/task/done/ad_new_user_watch?' + this['ck'][0x0],
                'headers': {
                    'Host': host,
                    'Connection': _0xb95228[_0x4ca288(0x6b3, 'W6*u')],
                    'Content-Type': _0xb95228[_0x4ca288(0x21b, '##))')],
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                },
                'body': 'ad_fallback=false&enter_from=goldcoin_pendant&income_id=1009602_104711869254_1690022980858&creator_id=1009602&reward_stage=2&ad_seconds=25000'
            };
            $['post'](_0x2d01a8, async(_0x55a523, _0x3df913, _0x3d28f1) => {
                const _0x17bd16 = _0x4ca288;
                try {
                    if (_0x55a523) _0x22e0c1[_0x17bd16(0x45f, 'W#uE')] === _0x22e0c1[_0x17bd16(0x4be, '&[MC')] ? $[_0x17bd16(0x204, 'uvdB')](_0x55a523) : _0xdf383d(_0x17bd16(0x730, '9iq9') + this[_0x17bd16(0x723, 'ev8C')] + _0x17bd16(0x957, 'A]*R'));
                    else {
                        if (_0x22e0c1['vbGlg'](_0x22e0c1[_0x17bd16(0x1b5, 'UC%d')], _0x22e0c1['Pxndz'])) {
                            let _0x6d4f19 = JSON['parse'](_0x3d28f1);
                            if (_0x6d4f19[_0x17bd16(0x326, '^8@B')] == 0x0) _0x22e0c1[_0x17bd16(0x48a, 'R$sB')](DoubleLog, _0x17bd16(0x634, '9wX]') + this[_0x17bd16(0x629, 'Tx3e')] + '】观看视频: 获得奖励 ' + _0x6d4f19[_0x17bd16(0x6f3, '##))')][_0x17bd16(0x5c3, 'Bu2E')] + _0x17bd16(0x7d8, 'Ato%'));
                            else {
                                if (_0x6d4f19[_0x17bd16(0x326, '^8@B')] == 0x2716) _0x22e0c1[_0x17bd16(0xa56, 'vvN[')](DoubleLog, _0x17bd16(0x5ea, 'qmDl') + this[_0x17bd16(0x6b7, 'ksby')] + _0x17bd16(0x8bf, 'A]*R'));
                                else {
                                    if (_0x22e0c1['PBxeX'](_0x6d4f19[_0x17bd16(0xa6d, 'm#vA')], 0x2717)) DoubleLog(_0x17bd16(0x5c9, '2(N#') + this['index'] + _0x17bd16(0x42e, 'Zw8m'));
                                    else _0x22e0c1['PBxeX'](_0x6d4f19[_0x17bd16(0x326, '^8@B')], 0x2719) ? _0x22e0c1[_0x17bd16(0x87c, 'W#uE')](DoubleLog, _0x17bd16(0x91a, 'JZxU') + this[_0x17bd16(0x165, 'm#vA')] + _0x17bd16(0xa42, 'Ato%')) : _0x22e0c1['vbGlg'](_0x22e0c1[_0x17bd16(0x62a, '9Ir0')], _0x22e0c1['lZCaM']) ? _0x22e0c1['HkEIS'](DoubleLog, _0x17bd16(0x399, 'ygf[') + this[_0x17bd16(0x514, ')3Og')] + _0x17bd16(0x562, 'JZxU') + _0x6d4f19[_0x17bd16(0x4f7, '6GlL')]) : _0x22e0c1[_0x17bd16(0x48a, 'R$sB')](_0x448f5a, '
 ❌ 【' + this[_0x17bd16(0x6c8, 'Mt$M')] + _0x17bd16(0x1ca, 'Mt$M') + _0x18eda9[_0x17bd16(0x8cb, '#2Hi')]);
                                }
                            }
                        } else _0x24177a(_0x17bd16(0xa4b, '9Ir0'));
                    }
                } catch (_0x34a442) {
                    $[_0x17bd16(0x617, 'z9*t')](_0x34a442, _0x3df913);
                } finally {
                    _0x22e0c1['CbJRl'](_0x5f3ed8);
                }
            }, _0xe7ed26);
        });
    }
    async[_0xa91301(0x70e, '@m24')](_0x4b4061 = 0x7d0) {
        const _0xbeb335 = _0xa91301,
            _0x74ec9f = {
                'OIQnj': function(_0x49f573, _0x542668) {
                    return _0x49f573 !== _0x542668;
                },
                'EpFEM': _0xbeb335(0x603, '^ut3'),
                'qFHpU': function(_0x1fa69f, _0x394f54) {
                    return _0x1fa69f === _0x394f54;
                },
                'MIJtn': _0xbeb335(0x655, ']A!w'),
                'XSxXZ': _0xbeb335(0x8f9, 'L%wM'),
                'OSVgy': _0xbeb335(0x877, '##))'),
                'WcTWK': 'jrppE',
                'usCjW': function(_0xaad065, _0x1906c5) {
                    return _0xaad065 == _0x1906c5;
                },
                'RpAdY': function(_0x3c09c2, _0x12f862) {
                    return _0x3c09c2(_0x12f862);
                },
                'ignCJ': function(_0x4ea2e0, _0x5e9e3b) {
                    return _0x4ea2e0 * _0x5e9e3b;
                },
                'nUMeN': 'CXFAi',
                'ZdwQi': function(_0x5d842f, _0x253d5a) {
                    return _0x5d842f == _0x253d5a;
                },
                'qqXyR': _0xbeb335(0x1a3, 'r2Oj'),
                'VRHGF': function(_0x580f35, _0x25e40d) {
                    return _0x580f35 !== _0x25e40d;
                },
                'RXJkD': function(_0x52f363, _0x811b6d) {
                    return _0x52f363(_0x811b6d);
                },
                'oouuY': _0xbeb335(0x534, 'z9*t'),
                'mWaky': 'sGfdN',
                'cFGOJ': _0xbeb335(0x561, 'ygf[')
            };
        return new Promise(_0x4e7fbb => {
            const _0x4451ac = _0xbeb335,
                _0x4c237c = {
                    'CQcFP': function(_0x146269, _0xa4e39c) {
                        return _0x74ec9f['RXJkD'](_0x146269, _0xa4e39c);
                    },
                    'sbges': function(_0x3c0b3d, _0x4f0062) {
                        const _0x4bbaf9 = _0x3899;
                        return _0x74ec9f[_0x4bbaf9(0x693, 'UC%d')](_0x3c0b3d, _0x4f0062);
                    }
                };
            if (_0x74ec9f['oouuY'] !== _0x74ec9f['mWaky']) {
                let _0x4c93c1 = {
                    'url': hostname + '/luckycat/xigua/v1/timer/tick?' + this['ck'][0x0],
                    'headers': {
                        'Host': host,
                        'Connection': _0x74ec9f[_0x4451ac(0xa5f, 'Yo*r')],
                        'Content-Type': _0x4451ac(0xa78, 'QGOg'),
                        'User-Agent': this['ck'][0x4],
                        'Cookie': this['ck'][0x1],
                        'x-argus': this['ck'][0x2],
                        'x-ladon': this['ck'][0x3]
                    },
                    'body': ''
                };
                $[_0x4451ac(0x34e, 'R$sB')](_0x4c93c1, async(_0x1d2bf5, _0x34a9c3, _0x1947a4) => {
                    const _0xb303af = _0x4451ac;
                    if (_0x74ec9f[_0xb303af(0x5b4, '^$ND')](_0xb303af(0x3ed, 'z9*t'), _0x74ec9f[_0xb303af(0x259, 'W6*u')])) _0x4c237c[_0xb303af(0x16f, 'vvN[')](_0x2bfabd, '
 ✅ 【' + this[_0xb303af(0x23a, 'W#uE')] + _0xb303af(0x41c, '#yB#') + _0x2df029['data']['amount'] + _0xb303af(0x239, 'ev8C'));
                    else try {
                        if (_0x74ec9f[_0xb303af(0x731, 'WqE!')](_0x74ec9f[_0xb303af(0x96c, 'QGOg')], _0x74ec9f[_0xb303af(0x83d, 'QGOg')])) _0x3c3f5c[_0xb303af(0x162, '#2Hi')](_0x44ec9b, _0x2e41e6);
                        else {
                            if (_0x1d2bf5) _0x74ec9f[_0xb303af(0x762, 'A]*R')] !== _0x74ec9f['OSVgy'] ? _0x38c392(_0xb303af(0x26c, 'MyTQ') + this[_0xb303af(0x17e, 'uvdB')] + _0xb303af(0x746, '9iq9')) : $[_0xb303af(0x9d4, '^H2k')](_0x1d2bf5);
                            else {
                                if (_0x74ec9f['WcTWK'] !== _0x74ec9f[_0xb303af(0x434, '9iq9')]) {
                                    let _0x1bbe98 = _0x2e6c4b[_0xb303af(0xa39, ']A!w')](_0x2cc974);
                                    _0x1bbe98[_0xb303af(0x6d4, 'Y^n*')] == 0x0 ? _0x4c237c['sbges'](_0x3b596b, _0xb303af(0x160, 'vvN[') + this[_0xb303af(0x165, 'm#vA')] + _0xb303af(0x2bf, 'Yo*r') + _0x1bbe98[_0xb303af(0xa32, 'qmDl')][_0xb303af(0x4ed, 'qmDl')][_0xb303af(0x6a8, 'K7Hk')] + _0xb303af(0x24d, 'r2Oj') + _0x1bbe98['data'][_0xb303af(0x729, 'uvdB')][_0xb303af(0xa45, 'Mt$M')] / 0x64 + '元') : _0x4c237c[_0xb303af(0x16a, 'WqE!')](_0x3563b2, '
 ❌ 【' + this['index'] + '】收益信息: ' + _0x1bbe98[_0xb303af(0x7b6, 'Y^n*')]);
                                } else {
                                    let _0x2a8631 = JSON[_0xb303af(0xa5d, 'm#vA')](_0x1947a4);
                                    if (_0x74ec9f[_0xb303af(0x206, 'W#uE')](_0x2a8631['err_no'], 0x0)) _0x74ec9f['usCjW'](_0x2a8631[_0xb303af(0x928, ')3Og')][_0xb303af(0x47a, 'qmDl')][_0xb303af(0x949, 'qmDl')], 0x0) ? _0x74ec9f['RpAdY'](DoubleLog, _0xb303af(0x53f, '##))') + this['index'] + _0xb303af(0x9a2, 'ygf[') + _0x2a8631[_0xb303af(0x7d6, 'fhKC')][_0xb303af(0x607, 'JZxU')][_0xb303af(0x1e2, 'ev8C')] + _0xb303af(0x8e5, '6GlL')) : (_0x74ec9f['RpAdY'](DoubleLog, '
 ✅ 【' + this[_0xb303af(0x514, ')3Og')] + _0xb303af(0x345, ')eXz') + _0x2a8631[_0xb303af(0x994, 'vvN[')][_0xb303af(0x801, '@m24')]['amount'] + ' 金币'), await $[_0xb303af(0x429, 'vvN[')](0x7530), await this[_0xb303af(0x8a8, 'W#uE')](_0x74ec9f['ignCJ'](0x2, 0x3e8)));
                                    else {
                                        if (_0x74ec9f['usCjW'](_0x2a8631[_0xb303af(0x439, '#2Hi')], 0x2716)) _0x74ec9f[_0xb303af(0x15a, '^H2k')](_0x74ec9f[_0xb303af(0x406, '#yB#')], _0x74ec9f[_0xb303af(0xa89, '#2Hi')]) ? DoubleLog('
 ❌ 【' + this[_0xb303af(0x275, ']A!w')] + '】观看视频: 每天看广告赚金币已达上限') : _0x50c91d();
                                        else {
                                            if (_0x2a8631['err_no'] == 0x2717) DoubleLog(_0xb303af(0xa2e, 'ev8C') + this[_0xb303af(0x5f5, 'Yo*r')] + _0xb303af(0x2f1, 'WaIa'));
                                            else _0x74ec9f['ZdwQi'](_0x2a8631[_0xb303af(0x68b, 'uvdB')], 0x2719) ? _0x74ec9f[_0xb303af(0x4f6, 'WXl3')](_0x74ec9f[_0xb303af(0x18b, 'QGOg')], _0xb303af(0x824, 'Ato%')) ? _0x232d37() : DoubleLog(_0xb303af(0x533, 'Yo*r') + this[_0xb303af(0x265, '6GlL')] + '】观看视频: 执行任务过快，继续执行任务') : _0x74ec9f[_0xb303af(0x8a9, 'Tx3e')](_0xb303af(0x237, '@m24'), _0xb303af(0xa91, '!y(t')) ? _0x53256c() : _0x74ec9f[_0xb303af(0x75f, 'Y^n*')](DoubleLog, _0xb303af(0x91a, 'JZxU') + this[_0xb303af(0x230, '7htc')] + _0xb303af(0x296, '9iq9') + _0x2a8631[_0xb303af(0x3a3, 'ev8C')]);
                                        }
                                    }
                                }
                            }
                        }
                    } catch (_0x37b8df) {
                        $['logErr'](_0x37b8df, _0x34a9c3);
                    } finally {
                        _0x4e7fbb();
                    }
                }, _0x4b4061);
            } else _0x308fa4[_0x4451ac(0x45b, ')eXz')](_0xfdf3e2);
        });
    }
    async[_0xa91301(0x479, ')3Og')](_0x281a97 = 0x7d0) {
        const _0x49872f = _0xa91301,
            _0x5d016c = {
                'zkxKD': function(_0x387417, _0x2e9602) {
                    return _0x387417 == _0x2e9602;
                },
                'jLenA': function(_0x53ac6a, _0x1a0052) {
                    return _0x53ac6a(_0x1a0052);
                },
                'BqPcQ': function(_0x20fb0a, _0x212254) {
                    return _0x20fb0a(_0x212254);
                },
                'LsslX': function(_0xf9ea47, _0x9587cd) {
                    return _0xf9ea47 == _0x9587cd;
                },
                'QvWzg': function(_0x4e23ae, _0x15fe54) {
                    return _0x4e23ae !== _0x15fe54;
                },
                'itoSW': _0x49872f(0x23d, 'MyTQ'),
                'NAxof': function(_0x53e0da, _0x301366) {
                    return _0x53e0da(_0x301366);
                },
                'xqfRR': function(_0x2ff0c9, _0x2e6b60) {
                    return _0x2ff0c9(_0x2e6b60);
                },
                'EBbQd': function(_0x1c6553, _0x4c3e77) {
                    return _0x1c6553 < _0x4c3e77;
                },
                'qEUVd': function(_0x526c6c, _0x3047d4) {
                    return _0x526c6c + _0x3047d4;
                },
                'CTDng': function(_0x1b7842, _0x2622aa) {
                    return _0x1b7842(_0x2622aa);
                },
                'wLHXY': function(_0x2ec3f9, _0x251e17) {
                    return _0x2ec3f9 > _0x251e17;
                },
                'yuxcn': function(_0x29c988, _0x3f4671) {
                    return _0x29c988 !== _0x3f4671;
                },
                'qRhSk': 'JPXYs',
                'bhzqf': function(_0x4a14fd, _0x25ca62) {
                    return _0x4a14fd * _0x25ca62;
                },
                'XyMZp': function(_0x110ce0, _0x73d5a) {
                    return _0x110ce0 == _0x73d5a;
                },
                'SDref': function(_0x5de4a0, _0x3331ff) {
                    return _0x5de4a0 * _0x3331ff;
                },
                'oZoXt': function(_0x5a4026, _0x2089e7) {
                    return _0x5a4026(_0x2089e7);
                },
                'VLATu': function(_0x5e97d9) {
                    return _0x5e97d9();
                },
                'VxXiF': _0x49872f(0x490, 'QGOg'),
                'lxUuJ': 'application/x-www-form-urlencoded; charset=UTF-8'
            };
        return new Promise(_0x3afb67 => {
            const _0x6708b3 = _0x49872f;
            let _0x1c276f = {
                'url': hostname + '/luckycat/xigua/v1/timer/tick?' + this['ck'][0x0],
                'headers': {
                    'Host': host,
                    'Connection': _0x5d016c[_0x6708b3(0x453, 'Mt$M')],
                    'Content-Type': _0x5d016c['lxUuJ'],
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                },
                'body': 'content_type=0'
            };
            $[_0x6708b3(0x943, '9wX]')](_0x1c276f, async(_0x3ff690, _0x4664b0, _0xec42c) => {
                const _0x26216e = _0x6708b3,
                    _0x393ff2 = {
                        'Ducas': function(_0x376c1e, _0x4d8674) {
                            return _0x376c1e(_0x4d8674);
                        }
                    };
                try {
                    if (_0x3ff690) $[_0x26216e(0x8c3, 'R$sB')](_0x3ff690);
                    else {
                        let _0x1279d0 = JSON[_0x26216e(0xa68, 'Mt$M')](_0xec42c);
                        if (_0x5d016c[_0x26216e(0x7b3, 'A]*R')](_0x1279d0[_0x26216e(0x5e0, '9wX]')], 0x2716)) _0x5d016c[_0x26216e(0x6ae, 'm#vA')](DoubleLog, '
 ❌ 【' + this[_0x26216e(0x17e, 'uvdB')] + _0x26216e(0x68c, 'm#vA'));
                        else {
                            if (_0x5d016c[_0x26216e(0x55d, 'Mt$M')](_0x1279d0['err_no'], 0x2717)) _0x5d016c[_0x26216e(0x3e1, '^H2k')](DoubleLog, '
 ❌ 【' + this['index'] + _0x26216e(0x1d2, 'K7Hk'));
                            else {
                                if (_0x5d016c[_0x26216e(0x509, 'Mt$M')](_0x1279d0[_0x26216e(0xa79, 'W6*u')], 0x2719)) _0x5d016c[_0x26216e(0x5aa, 'Ato%')](_0x5d016c[_0x26216e(0x5a8, 'ksby')], 'uFVPP') ? _0x5d016c['NAxof'](DoubleLog, _0x26216e(0x5c9, '2(N#') + this[_0x26216e(0x514, ')3Og')] + _0x26216e(0x7e5, 'L%wM')) : _0x1df4cf[_0x26216e(0x308, 'r2Oj')](_0x2829df, _0x73ed88);
                                else {
                                    if (_0x5d016c['LsslX'](_0x1279d0[_0x26216e(0x1b8, '#yB#')], 0x0)) {
                                        _0x5d016c[_0x26216e(0x631, 'qmDl')](DoubleLog, _0x26216e(0x302, '7htc') + this['index'] + _0x26216e(0x654, 'WqE!') + _0x1279d0[_0x26216e(0x5eb, '3!Dt')][_0x26216e(0x79b, '^8@B')][_0x26216e(0x2e2, '2(N#')] + ' 金币');
                                        for (let _0x57b211 = 0x1; _0x5d016c[_0x26216e(0x295, 'Bu2E')](_0x57b211, numvodie); _0x57b211 = _0x5d016c[_0x26216e(0x894, 'W6*u')](_0x57b211, 0x1)) {
                                            _0x5d016c[_0x26216e(0x3e7, '##))')](DoubleLog, _0x26216e(0x96e, 'Zw8m') + this[_0x26216e(0x230, '7htc')] + '】观看视频: 正在第 ' + _0x57b211 + _0x26216e(0x789, 'MyTQ')), await $['wait'](0x3e8);
                                            if (_0x5d016c['wLHXY'](_0x1279d0[_0x26216e(0x9b0, 'R$sB')][_0x26216e(0x675, ')eXz')], 0x1)) {
                                                if (_0x5d016c[_0x26216e(0x7d2, 'z9*t')](_0x26216e(0x3d7, 'QGOg'), _0x5d016c[_0x26216e(0x34f, '^ut3')])) {
                                                    _0x5d016c[_0x26216e(0x89b, '9iq9')](DoubleLog, '
 ✅ 【' + this[_0x26216e(0x40b, 'Bu2E')] + '】观看视频: 获得奖励 ' + _0x1279d0[_0x26216e(0x44f, 'ksby')][_0x26216e(0x25c, 'Bu2E')] + _0x26216e(0x4c6, 'MyTQ'));
                                                    break;
                                                } else _0x4b806d[_0x26216e(0x976, '^$ND')](_0x21964f);
                                            } else await this[_0x26216e(0x79d, 'A]*R')](_0x5d016c[_0x26216e(0x922, 'L%wM')](0x2, 0x3e8)), await $[_0x26216e(0x402, ')eXz')](0x7530); if (_0x5d016c[_0x26216e(0x1d3, 'WXl3')](_0x57b211, numvodie)) {
                                                await this['open_resultvideo_stop'](_0x5d016c[_0x26216e(0x3a6, '^8@B')](0x2, 0x3e8));
                                                break;
                                            }
                                        }
                                    } else _0x26216e(0x882, 'ev8C') === _0x26216e(0x455, 'WqE!') ? _0x393ff2[_0x26216e(0x1e3, 'Tx3e')](_0x45a844, _0x26216e(0x500, ')eXz') + this[_0x26216e(0x400, '9iq9')] + _0x26216e(0x61f, ')eXz')) : _0x5d016c['oZoXt'](DoubleLog, _0x26216e(0x667, 'fhKC') + this['index'] + _0x26216e(0x45e, 'Tx3e') + _0x1279d0[_0x26216e(0x154, '#2Hi')]);
                                }
                            }
                        }
                    }
                } catch (_0x569fb4) {
                    $[_0x26216e(0x621, 'fhKC')](_0x569fb4, _0x4664b0);
                } finally {
                    _0x5d016c[_0x26216e(0x170, ')eXz')](_0x3afb67);
                }
            }, _0x281a97);
        });
    }
    async[_0xa91301(0x535, 'Zw8m')](_0x292dc0 = 0x7d0) {
        const _0x514064 = _0xa91301,
            _0x5bbc44 = {
                'loFdN': 'cBjaC',
                'mYMYF': function(_0x2f5bdc, _0x2a4f9f) {
                    return _0x2f5bdc === _0x2a4f9f;
                },
                'qUVfd': _0x514064(0x98b, 'qmDl'),
                'WwHNO': function(_0x466506, _0x43d9ee) {
                    return _0x466506(_0x43d9ee);
                },
                'vheLi': function(_0x36569e, _0x352f90) {
                    return _0x36569e == _0x352f90;
                },
                'RafRR': _0x514064(0x917, '3!Dt'),
                'nOueA': _0x514064(0x1fb, 'z9*t'),
                'SrtAx': function(_0x19c3b5, _0x3baca8) {
                    return _0x19c3b5(_0x3baca8);
                },
                'pWXHv': function(_0x5ac56b, _0x5c05b0) {
                    return _0x5ac56b(_0x5c05b0);
                },
                'RiPJd': function(_0x6e4f64, _0x5d23b1) {
                    return _0x6e4f64 !== _0x5d23b1;
                },
                'jLONI': 'lJLWN',
                'veDwg': function(_0x55b907, _0x15bcb4) {
                    return _0x55b907(_0x15bcb4);
                },
                'gHMnX': function(_0x4a49c0, _0x5008c2) {
                    return _0x4a49c0(_0x5008c2);
                },
                'MOdoN': function(_0x564fd8, _0x334584) {
                    return _0x564fd8(_0x334584);
                },
                'NCuGK': 'Keep-Alive',
                'cNzpH': _0x514064(0x229, '6GlL')
            };
        return new Promise(_0x58a36f => {
            const _0xe934c6 = _0x514064,
                _0x1ef41c = {
                    'IJmSi': function(_0x281e05, _0x19d9f7) {
                        return _0x5bbc44['gHMnX'](_0x281e05, _0x19d9f7);
                    },
                    'XpqOc': function(_0x32af6a, _0x5278fb) {
                        return _0x5bbc44['MOdoN'](_0x32af6a, _0x5278fb);
                    }
                };
            let _0x4e41fa = {
                'url': hostname + _0xe934c6(0x92c, 'ksby') + this['ck'][0x0],
                'headers': {
                    'Host': host,
                    'Connection': _0x5bbc44[_0xe934c6(0x2de, '^ut3')],
                    'Content-Type': _0x5bbc44[_0xe934c6(0x2d9, 'W6*u')],
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                },
                'body': _0xe934c6(0x662, '^8@B')
            };
            $[_0xe934c6(0x6d0, '^ut3')](_0x4e41fa, async(_0x22d441, _0xe22da, _0xbfc4cc) => {
                const _0x452f5b = _0xe934c6;
                try {
                    if (_0x22d441) _0x5bbc44[_0x452f5b(0x704, '9iq9')] === 'SIuPF' ? (_0x3371bd(_0x452f5b(0x3bf, '^8@B')), _0x1ef41c[_0x452f5b(0x6f5, '^ut3')](_0x46bb7b, _0x452f5b(0xa6e, 'Ato%') + _0x39768d + _0x452f5b(0x9ce, 'Mt$M') + _0x4f3d22 + '，已设不更新版本')) : $['logErr'](_0x22d441);
                    else {
                        if (_0x5bbc44[_0x452f5b(0x38a, 'ygf[')](_0x5bbc44[_0x452f5b(0x37b, '!y(t')], 'DksiJ')) {
                            let _0x3e7ec1 = JSON['parse'](_0xbfc4cc);
                            if (_0x3e7ec1['err_no'] == 0x0) _0x5bbc44['WwHNO'](DoubleLog, _0x452f5b(0x66a, 'qmDl') + this[_0x452f5b(0x68d, '##))')] + _0x452f5b(0x620, 'MyTQ') + _0x3e7ec1['data'][_0x452f5b(0x2fa, 'W#uE')][_0x452f5b(0xa6f, 'z9*t')] + _0x452f5b(0x504, '6GlL'));
                            else {
                                if (_0x5bbc44[_0x452f5b(0x7f5, 'uvdB')](_0x3e7ec1[_0x452f5b(0x1bc, '^$ND')], 0x2716)) _0x5bbc44[_0x452f5b(0x4ef, 'WaIa')](_0x5bbc44[_0x452f5b(0x53a, ')eXz')], _0x5bbc44[_0x452f5b(0x567, '6GlL')]) ? _0x1ef41c['XpqOc'](_0x49eed0, _0x452f5b(0x1f9, 'm#vA') + this['index'] + _0x452f5b(0x5ab, 'Tx3e')) : _0x5bbc44['SrtAx'](DoubleLog, _0x452f5b(0x78e, 'uvdB') + this[_0x452f5b(0x165, 'm#vA')] + _0x452f5b(0xa7b, '#2Hi'));
                                else {
                                    if (_0x5bbc44[_0x452f5b(0x4ab, '##))')](_0x3e7ec1[_0x452f5b(0x9f2, 'qmDl')], 0x2717)) _0x5bbc44[_0x452f5b(0x602, 'ksby')](DoubleLog, _0x452f5b(0x26c, 'MyTQ') + this[_0x452f5b(0x246, 'QGOg')] + '】观看视频: 该账号没有可执行任务，可能是新号');
                                    else _0x5bbc44['vheLi'](_0x3e7ec1['err_no'], 0x2719) ? DoubleLog('
 ❌ 【' + this[_0x452f5b(0x47f, 'WXl3')] + '】观看视频: 执行任务过快，继续执行任务') : _0x5bbc44[_0x452f5b(0x80d, 'ev8C')](_0x452f5b(0x431, 'ygf['), _0x5bbc44[_0x452f5b(0x4c0, '#yB#')]) ? _0x5bbc44['veDwg'](DoubleLog, '
 ❌ 【' + this[_0x452f5b(0x395, 'vvN[')] + _0x452f5b(0x65a, '6GlL') + _0x3e7ec1['err_tips']) : _0x1ef41c['IJmSi'](_0x50b4f8, '
 ❌ 【' + this[_0x452f5b(0x853, 'fhKC')] + _0x452f5b(0x673, 'WaIa'));
                                }
                            }
                        } else _0x5eb7e8[_0x452f5b(0x7f2, '9wX]')](_0x543daf);
                    }
                } catch (_0x1de883) {
                    $['logErr'](_0x1de883, _0xe22da);
                } finally {
                    _0x58a36f();
                }
            }, _0x292dc0);
        });
    }
    async[_0xa91301(0x2a9, 'vvN[')](_0xea8117 = 0x7d0) {
        const _0x806193 = _0xa91301,
            _0x27c8fb = {
                'kRTGP': function(_0x547e69, _0x3285a1) {
                    return _0x547e69 !== _0x3285a1;
                },
                'VzxRK': function(_0x5a75df, _0x3ce99c) {
                    return _0x5a75df == _0x3ce99c;
                },
                'JaNBt': function(_0x31e1d7, _0x47b42e) {
                    return _0x31e1d7 > _0x47b42e;
                },
                'DBjzV': function(_0x15b1fa, _0x5825cd) {
                    return _0x15b1fa(_0x5825cd);
                },
                'lArjB': _0x806193(0x967, 'Yo*r'),
                'XGDrx': function(_0x711e30, _0xfef6c1) {
                    return _0x711e30 === _0xfef6c1;
                },
                'fyiLa': _0x806193(0x1f2, 'WaIa'),
                'bLXwo': 'MuJsZ',
                'lqmNm': function(_0x230ecc) {
                    return _0x230ecc();
                },
                'VIqpG': _0x806193(0x973, 'A]*R'),
                'bGlGI': _0x806193(0x8db, 'ev8C')
            };
        return new Promise(_0x2e0fcb => {
            const _0x56b6f4 = _0x806193,
                _0x511ea7 = {
                    'BdeAH': function(_0x37c3f4, _0x49d21d) {
                        return _0x27c8fb['kRTGP'](_0x37c3f4, _0x49d21d);
                    },
                    'blqpS': _0x56b6f4(0x300, 'ksby'),
                    'jUNVK': function(_0x2e83ee, _0x188f17) {
                        const _0x2f3d99 = _0x56b6f4;
                        return _0x27c8fb[_0x2f3d99(0x921, 'z9*t')](_0x2e83ee, _0x188f17);
                    },
                    'wesyh': function(_0x24e57b, _0xacf754) {
                        return _0x27c8fb['JaNBt'](_0x24e57b, _0xacf754);
                    },
                    'EYPkc': function(_0x5e618e, _0x5e719b) {
                        return _0x5e618e * _0x5e719b;
                    },
                    'kWNRP': function(_0x467f5f, _0x38e044) {
                        return _0x27c8fb['DBjzV'](_0x467f5f, _0x38e044);
                    },
                    'Lmgmd': _0x56b6f4(0x372, 'Y^n*'),
                    'GkKcw': _0x27c8fb['lArjB'],
                    'YkQIs': function(_0x34024e, _0x2fdd90) {
                        const _0x5a70de = _0x56b6f4;
                        return _0x27c8fb[_0x5a70de(0x6d9, 'Yo*r')](_0x34024e, _0x2fdd90);
                    },
                    'ZRaDq': _0x27c8fb['fyiLa'],
                    'BIHQp': _0x27c8fb[_0x56b6f4(0x6bf, 'WqE!')],
                    'DaVOU': function(_0x853edc) {
                        const _0x19f36f = _0x56b6f4;
                        return _0x27c8fb[_0x19f36f(0x3c7, '^ut3')](_0x853edc);
                    }
                };
            let _0x266c8e = {
                'url': hostname + _0x56b6f4(0x340, 'fhKC') + this['ck'][0x0],
                'headers': {
                    'Host': host,
                    'Connection': _0x27c8fb[_0x56b6f4(0x4e5, 'fhKC')],
                    'Content-Type': _0x27c8fb['bGlGI'],
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                }
            };
            $[_0x56b6f4(0xa22, 'A]*R')](_0x266c8e, async(_0x3342ed, _0x358768, _0x1e0783) => {
                const _0xf09dbe = _0x56b6f4,
                    _0xa203c4 = {
                        'TTcvI': function(_0x3bbd4e) {
                            return _0x3bbd4e();
                        }
                    };
                try {
                    if (_0x511ea7[_0xf09dbe(0x203, ')eXz')](_0x511ea7['blqpS'], _0x511ea7['blqpS'])) _0x4a23df(_0xf09dbe(0x533, 'Yo*r') + this['index'] + _0xf09dbe(0x419, 'z9*t'));
                    else {
                        if (_0x3342ed) $[_0xf09dbe(0x8c3, 'R$sB')](_0x3342ed);
                        else {
                            let _0x5260bc = JSON[_0xf09dbe(0x323, 'QGOg')](_0x1e0783);
                            _0x511ea7[_0xf09dbe(0x5a7, '7htc')](_0x5260bc[_0xf09dbe(0x875, 'R$sB')], 0x0) ? _0x511ea7[_0xf09dbe(0xa86, 'vvN[')](_0x5260bc[_0xf09dbe(0x784, '2(N#')][_0xf09dbe(0x8cf, 'R$sB')][_0xf09dbe(0xa87, 'm#vA')], 0x64) ? await this[_0xf09dbe(0x83c, 'WaIa')](_0x511ea7['EYPkc'](0x2, 0x3e8)) : _0x511ea7['kWNRP'](DoubleLog, _0xf09dbe(0x3f5, 'QGOg') + this[_0xf09dbe(0x1fa, '@m24')] + _0xf09dbe(0x72b, '&[MC')) : DoubleLog(_0xf09dbe(0x848, 'vvN[') + this[_0xf09dbe(0x420, 'JZxU')] + _0xf09dbe(0x981, '6GlL') + _0x5260bc[_0xf09dbe(0x813, 'WqE!')]);
                        }
                    }
                } catch (_0x3468e9) {
                    _0x511ea7['BdeAH'](_0x511ea7[_0xf09dbe(0x742, '9Ir0')], _0x511ea7[_0xf09dbe(0xa55, '9Ir0')]) ? $['logErr'](_0x3468e9, _0x358768) : _0xa203c4['TTcvI'](_0x344e11);
                } finally {
                    _0x511ea7[_0xf09dbe(0x7dd, 'ygf[')](_0x511ea7[_0xf09dbe(0x521, '9Ir0')], _0x511ea7['BIHQp']) ? _0x19d710['logErr'](_0x4c7d74, _0x4a039e) : _0x511ea7[_0xf09dbe(0x35f, 'ksby')](_0x2e0fcb);
                }
            }, _0xea8117);
        });
    }
    async[_0xa91301(0x8f4, ']A!w')](_0x44e0d5 = 0x7d0) {
        const _0x379603 = _0xa91301,
            _0x124c3c = {
                'LKJnl': function(_0x4255bc, _0x160c37) {
                    return _0x4255bc(_0x160c37);
                },
                'ahPHv': _0x379603(0x993, 'uvdB'),
                'nuxkV': function(_0x3668b8, _0x2f57aa) {
                    return _0x3668b8(_0x2f57aa);
                },
                'NKUDM': function(_0x204a23, _0x17ac52) {
                    return _0x204a23 !== _0x17ac52;
                },
                'URfom': _0x379603(0x555, '3!Dt')
            };
        return new Promise(_0x53cfcd => {
            const _0x1e5e89 = _0x379603,
                _0x34f2d3 = {
                    'GTYYH': function(_0x470f06, _0x202471) {
                        return _0x124c3c['LKJnl'](_0x470f06, _0x202471);
                    },
                    'WtkCt': function(_0x305928, _0x1e617a) {
                        return _0x305928 !== _0x1e617a;
                    },
                    'tGELc': _0x124c3c[_0x1e5e89(0x8c2, 'z9*t')],
                    'ZpfcZ': function(_0x9ffa5e, _0x5ccf17) {
                        return _0x124c3c['nuxkV'](_0x9ffa5e, _0x5ccf17);
                    }
                };
            if (_0x124c3c[_0x1e5e89(0x793, 'ksby')](_0x1e5e89(0x702, 'R$sB'), 'bHylt')) {
                let _0x5582a9 = {
                    'url': hostname + _0x1e5e89(0x3fa, 'WXl3') + this['ck'][0x0],
                    'headers': {
                        'Host': host,
                        'Connection': _0x1e5e89(0x7de, '9wX]'),
                        'Content-Type': _0x124c3c['URfom'],
                        'User-Agent': this['ck'][0x4],
                        'Cookie': this['ck'][0x1],
                        'x-argus': this['ck'][0x2],
                        'x-ladon': this['ck'][0x3]
                    },
                    'body': _0x1e5e89(0x4a2, 'WqE!')
                };
                $[_0x1e5e89(0x7d4, 'z9*t')](_0x5582a9, async(_0xabede5, _0x5f10f9, _0x149935) => {
                    const _0x5bbd3e = _0x1e5e89;
                    try {
                        if (_0xabede5) _0x34f2d3['WtkCt'](_0x34f2d3['tGELc'], _0x34f2d3['tGELc']) ? _0x34f2d3[_0x5bbd3e(0x5ca, 'QGOg')](_0x41e68a, _0x5bbd3e(0x794, '@m24') + this[_0x5bbd3e(0x47f, 'WXl3')] + _0x5bbd3e(0x88b, '6GlL')) : $[_0x5bbd3e(0x408, '9Ir0')](_0xabede5);
                        else {
                            let _0x2f9afb = JSON[_0x5bbd3e(0x495, '^$ND')](_0x149935);
                            _0x2f9afb['err_no'] == 0x0 ? await this['open_withdraw'](0x2 * 0x3e8) : _0x34f2d3['GTYYH'](DoubleLog, '
 ❌ 【' + this['index'] + _0x5bbd3e(0x3d2, 'Y^n*') + _0x2f9afb[_0x5bbd3e(0x6af, '9wX]')]);
                        }
                    } catch (_0x4a57dd) {
                        $[_0x5bbd3e(0x9d4, '^H2k')](_0x4a57dd, _0x5f10f9);
                    } finally {
                        _0x53cfcd();
                    }
                }, _0x44e0d5);
            } else _0x34f2d3['ZpfcZ'](_0x484e43, _0x1e5e89(0x724, 'Tx3e') + this[_0x1e5e89(0xa57, 'R$sB')] + _0x1e5e89(0x9d1, 'QGOg') + _0x1a6cef[_0x1e5e89(0x2a2, ')eXz')]);
        });
    }
    async[_0xa91301(0x176, '^ut3')](_0x45a31f = 0x7d0) {
        const _0x15ebe8 = _0xa91301,
            _0x53f7c4 = {
                'ZpzDd': function(_0xf53536, _0x30b269) {
                    return _0xf53536(_0x30b269);
                },
                'YsFvm': function(_0x53c77e, _0x3419ec) {
                    return _0x53c77e(_0x3419ec);
                },
                'mNmlX': _0x15ebe8(0xa8c, ']A!w'),
                'Vdyou': function(_0x1725c3, _0x1d3a2d) {
                    return _0x1725c3 !== _0x1d3a2d;
                },
                'egTLL': _0x15ebe8(0x5e8, 'JZxU'),
                'xnmrJ': _0x15ebe8(0x9e7, 'JZxU'),
                'kwFUN': _0x15ebe8(0x6a7, '^H2k'),
                'NQAuI': _0x15ebe8(0x49a, 'R$sB')
            };
        return new Promise(_0x4da467 => {
            const _0x12df47 = _0x15ebe8,
                _0x254800 = {
                    'MkUrj': function(_0x453192, _0x4ec135) {
                        return _0x53f7c4['ZpzDd'](_0x453192, _0x4ec135);
                    },
                    'NVCyg': function(_0x2875c9, _0x347f1b) {
                        const _0x490848 = _0x3899;
                        return _0x53f7c4[_0x490848(0x3fb, 'R$sB')](_0x2875c9, _0x347f1b);
                    },
                    'qgeDw': _0x53f7c4[_0x12df47(0x4c4, 'r2Oj')],
                    'WdlMH': function(_0x1d403a, _0x55c75a) {
                        const _0x1c9cb8 = _0x12df47;
                        return _0x53f7c4[_0x1c9cb8(0x8ef, 'ev8C')](_0x1d403a, _0x55c75a);
                    },
                    'dCgqP': _0x53f7c4[_0x12df47(0x231, '@m24')],
                    'XuVkx': _0x53f7c4['xnmrJ'],
                    'cnpea': function(_0x57fd14, _0xfdf4fc) {
                        return _0x57fd14 == _0xfdf4fc;
                    },
                    'QCoDQ': function(_0x28591f, _0x8ef173) {
                        return _0x28591f(_0x8ef173);
                    },
                    'zKvIU': _0x53f7c4['kwFUN']
                };
            let _0x4ba2f5 = {
                'url': hostname + _0x12df47(0x71b, '#yB#') + this['ck'][0x0],
                'headers': {
                    'Host': host,
                    'Connection': _0x53f7c4[_0x12df47(0x301, 'W6*u')],
                    'Content-Type': _0x12df47(0x581, '&[MC'),
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                },
                'body': _0x12df47(0x390, '2(N#') + this['ck'][0x5] + _0x12df47(0x2c2, 'WaIa') + this['ck'][0x6]
            };
            $['post'](_0x4ba2f5, async(_0x1953eb, _0x1f6b16, _0x4aa94b) => {
                const _0x562aeb = _0x12df47,
                    _0x5e17b8 = {
                        'WLEtG': function(_0x405896, _0x37ea84) {
                            const _0xd8eae0 = _0x3899;
                            return _0x254800[_0xd8eae0(0x4a1, 'Mt$M')](_0x405896, _0x37ea84);
                        }
                    };
                if (_0x254800[_0x562aeb(0xa73, 'fhKC')] !== _0x254800[_0x562aeb(0x6c1, '3!Dt')]) {
                    let _0x264798 = _0x30341b[_0x562aeb(0x2d0, 'WXl3')](_0x3db897);
                    _0x264798[_0x562aeb(0x519, 'R$sB')] == 0x0 ? _0x254800[_0x562aeb(0x7ff, 'Ato%')](_0x27e5dc, '
 ✅ 【' + this[_0x562aeb(0x6b7, 'ksby')] + _0x562aeb(0x8e4, 'R$sB')) : _0x85c1e9(_0x562aeb(0x730, '9iq9') + this['index'] + _0x562aeb(0x285, '@m24') + _0x264798[_0x562aeb(0x393, 'L%wM')]);
                } else try {
                    if (_0x254800[_0x562aeb(0x227, ')3Og')](_0x254800['dCgqP'], _0x254800[_0x562aeb(0x6dd, ')3Og')])) {
                        if (_0x1953eb) _0x254800[_0x562aeb(0x82f, 'MyTQ')](_0x562aeb(0x201, '7htc'), 'UDTWv') ? $['logErr'](_0x1953eb) : _0x254800[_0x562aeb(0x42a, '^ut3')](_0x34fb48, _0x562aeb(0x594, 'A]*R') + this[_0x562aeb(0x723, 'ev8C')] + _0x562aeb(0x8e7, 'r2Oj'));
                        else {
                            let _0x4da0e5 = JSON[_0x562aeb(0x6ff, '&[MC')](_0x4aa94b);
                            if (_0x254800['cnpea'](_0x4da0e5[_0x562aeb(0x89f, 'Yo*r')], 0x0)) _0x254800[_0x562aeb(0x167, '^8@B')](DoubleLog, _0x562aeb(0x823, ')3Og') + this[_0x562aeb(0x92f, '^H2k')] + _0x562aeb(0x7c1, '7htc'));
                            else _0x254800[_0x562aeb(0x5a3, 'W6*u')](_0x4da0e5[_0x562aeb(0x840, 'Ato%')], 0x2713) ? _0x254800[_0x562aeb(0x357, 'Bu2E')] === _0x254800[_0x562aeb(0x69b, 'fhKC')] ? DoubleLog(_0x562aeb(0x847, 'WaIa') + this[_0x562aeb(0xaad, 'WaIa')] + _0x562aeb(0x844, '#yB#')) : _0x5e17b8['WLEtG'](_0x574dec, '
 ❌ 【' + this[_0x562aeb(0x629, 'Tx3e')] + _0x562aeb(0x152, '6GlL')) : DoubleLog(_0x562aeb(0x489, '&[MC') + this[_0x562aeb(0x6b7, 'ksby')] + _0x562aeb(0x768, 'r2Oj') + _0x4da0e5[_0x562aeb(0x7cd, 'MyTQ')]);
                        }
                    } else _0x2a9890[_0x562aeb(0x45b, ')eXz')](_0x46cbcd);
                } catch (_0x2e579d) {
                    $[_0x562aeb(0x94e, 'W6*u')](_0x2e579d, _0x1f6b16);
                } finally {
                    _0x4da467();
                }
            }, _0x45a31f);
        });
    }
    async['queryFarmSignStatus'](_0x2a03f8 = 0x7d0) {
        const _0x74748 = _0xa91301,
            _0x2ef68d = {
                'PBZpW': 'KAeoc',
                'nvrsA': function(_0x28cf82, _0x4da6a2) {
                    return _0x28cf82 == _0x4da6a2;
                },
                'wJzFI': function(_0xb0f113, _0x33848c) {
                    return _0xb0f113 !== _0x33848c;
                },
                'BIzHV': _0x74748(0x397, 'ev8C'),
                'CuCUh': _0x74748(0x77b, '3!Dt'),
                'bCEob': function(_0x235fe1, _0x3a84db) {
                    return _0x235fe1 * _0x3a84db;
                },
                'uSRBp': function(_0x364f06, _0x168d3e) {
                    return _0x364f06(_0x168d3e);
                },
                'mkOZv': _0x74748(0x310, 'm#vA'),
                'kpWgW': function(_0x552db9) {
                    return _0x552db9();
                },
                'Smhpw': _0x74748(0x6ce, '!y(t'),
                'tUGDJ': _0x74748(0x46c, 'JZxU'),
                'DUgql': _0x74748(0x460, 'WXl3')
            };
        return new Promise(_0x36d7ab => {
            const _0x3e5da0 = _0x74748,
                _0x2c7320 = {
                    'tOMQm': function(_0x69480, _0x3ebefd) {
                        return _0x69480 == _0x3ebefd;
                    },
                    'dTTTt': function(_0x5519bf, _0x402d3c) {
                        return _0x2ef68d['uSRBp'](_0x5519bf, _0x402d3c);
                    }
                };
            if (_0x2ef68d[_0x3e5da0(0x9b4, '9iq9')](_0x2ef68d[_0x3e5da0(0x8f3, 'Tx3e')], _0x2ef68d['Smhpw'])) _0xd21436(_0x3e5da0(0x5c9, '2(N#') + this[_0x3e5da0(0x901, 'UC%d')] + _0x3e5da0(0x552, '!y(t'));
            else {
                let _0x37144a = {
                    'url': _0x3e5da0(0x9b9, '#2Hi') + this['ck'][0x0],
                    'headers': {
                        'Host': _0x2ef68d[_0x3e5da0(0x4ac, 'fhKC')],
                        'Connection': _0x2ef68d[_0x3e5da0(0x98f, 'A]*R')],
                        'Content-Type': 'application/json',
                        'User-Agent': this['ck'][0x4],
                        'Cookie': this['ck'][0x1],
                        'x-argus': this['ck'][0x2],
                        'x-ladon': this['ck'][0x3]
                    }
                };
                $['get'](_0x37144a, async(_0x2824ed, _0x53ffb5, _0x10f640) => {
                    const _0x2e69b7 = _0x3e5da0;
                    try {
                        if (_0x2e69b7(0x7d9, 'vvN[') !== _0x2ef68d[_0x2e69b7(0x987, 'Y^n*')]) {
                            if (_0x2824ed) $['logErr'](_0x2824ed);
                            else {
                                let _0x55d054 = JSON[_0x2e69b7(0x978, 'r2Oj')](_0x10f640);
                                if (_0x2ef68d['nvrsA'](_0x55d054[_0x2e69b7(0x210, '#2Hi')], 0x0)) {
                                    if (_0x2ef68d[_0x2e69b7(0x67f, 'L%wM')](_0x2e69b7(0x192, 'm#vA'), _0x2ef68d['BIzHV']))
                                        for (let _0x37b438 of _0x55d054[_0x2e69b7(0x465, 'K7Hk')][_0x2e69b7(0x186, '&[MC')]) {
                                            if (_0x2ef68d[_0x2e69b7(0x733, '6GlL')](_0x37b438['status'], 0x1)) {
                                                if (_0x2ef68d['wJzFI'](_0x2e69b7(0x543, 'UC%d'), _0x2ef68d[_0x2e69b7(0x383, 'Tx3e')])) {
                                                    await this['farmSign'](_0x2ef68d['bCEob'](0x2, 0x3e8));
                                                    break;
                                                } else {
                                                    let _0x2d81e0 = _0x34f29f[_0x2e69b7(0x8a1, 'Tx3e')](_0x700cb5);
                                                    if (_0x2c7320[_0x2e69b7(0x14b, '9wX]')](_0x2d81e0['err_no'], 0x0)) {} else _0x2c7320[_0x2e69b7(0x26e, '#yB#')](_0x30af12, _0x2e69b7(0x5bb, 'Y^n*') + this[_0x2e69b7(0x6c8, 'Mt$M')] + _0x2e69b7(0x5f2, 'W6*u') + _0x2d81e0['err_tips']);
                                                }
                                            }
                                        } else _0x2249a0 = _0x10858d[_0x2e69b7(0x92d, ')eXz')](/scriptVersion = "([\d\.]+)"/)[0x1], _0x4c6b11 = _0x41baac['match'](/update_data = "(.*?)"/)[0x1];
                                } else _0x2ef68d[_0x2e69b7(0x809, 'Ato%')](DoubleLog, _0x2e69b7(0x80c, ')eXz') + this[_0x2e69b7(0x6ab, '^8@B')] + '】农场签到: ' + _0x55d054[_0x2e69b7(0x3f9, 'Tx3e')]);
                            }
                        } else _0x35a7d7('
 ❌ 【' + this[_0x2e69b7(0x6c8, 'Mt$M')] + _0x2e69b7(0x507, 'JZxU') + _0x5913f4['err_tips']);
                    } catch (_0x336a01) {
                        $[_0x2e69b7(0x18f, 'A]*R')](_0x336a01, _0x53ffb5);
                    } finally {
                        _0x2ef68d['mkOZv'] !== _0x2ef68d[_0x2e69b7(0x39f, 'A]*R')] ? _0x17cd40[_0x2e69b7(0x803, 'm#vA')](_0x12bca6) : _0x2ef68d['kpWgW'](_0x36d7ab);
                    }
                }, _0x2a03f8);
            }
        });
    }
    async[_0xa91301(0xa80, ']A!w')](_0x5a93aa = 0x7d0) {
        const _0x40a441 = _0xa91301,
            _0x397b98 = {
                'uovTf': function(_0x140e45) {
                    return _0x140e45();
                },
                'TzSfK': function(_0x4cbde1, _0x3c2951) {
                    return _0x4cbde1 !== _0x3c2951;
                },
                'bvWJA': _0x40a441(0x93c, 'qmDl'),
                'tvDpa': function(_0x500dd0, _0x2e3bc1) {
                    return _0x500dd0 !== _0x2e3bc1;
                },
                'cKlOM': function(_0x3e6157, _0x5ca782) {
                    return _0x3e6157 === _0x5ca782;
                },
                'LYreM': function(_0x3d5bcd, _0x14060d) {
                    return _0x3d5bcd(_0x14060d);
                },
                'OvkQM': function(_0x34c233, _0x2ead31) {
                    return _0x34c233(_0x2ead31);
                },
                'vjVGb': _0x40a441(0x973, 'A]*R'),
                'bykvs': _0x40a441(0x871, 'z9*t')
            };
        return new Promise(_0x152441 => {
            const _0x4c7ee8 = _0x40a441,
                _0x10d014 = {
                    'TCnzj': function(_0x2a9d0b) {
                        return _0x397b98['uovTf'](_0x2a9d0b);
                    },
                    'zMSNR': function(_0x1f1f82, _0x4a5ae0) {
                        const _0x25df2c = _0x3899;
                        return _0x397b98[_0x25df2c(0x711, '7htc')](_0x1f1f82, _0x4a5ae0);
                    },
                    'WRrLO': _0x397b98[_0x4c7ee8(0x1d6, '@m24')],
                    'yeuez': function(_0x2a4e22, _0x28e77e) {
                        return _0x397b98['tvDpa'](_0x2a4e22, _0x28e77e);
                    },
                    'MKjAF': _0x4c7ee8(0x1d0, 'uvdB'),
                    'GNqaG': function(_0x2076f2, _0x2e00f6) {
                        return _0x2076f2 == _0x2e00f6;
                    },
                    'dtWQp': function(_0xac8ceb, _0x2b81ae) {
                        const _0xd82a87 = _0x4c7ee8;
                        return _0x397b98[_0xd82a87(0x85c, 'K7Hk')](_0xac8ceb, _0x2b81ae);
                    },
                    'JCpMf': _0x4c7ee8(0x902, 'Ato%'),
                    'RusNe': 'Ppsab',
                    'VBSTw': function(_0x591626, _0x408501) {
                        return _0x591626 == _0x408501;
                    },
                    'izYqV': function(_0x762f2f, _0x13503d) {
                        const _0x416ff9 = _0x4c7ee8;
                        return _0x397b98[_0x416ff9(0x9e2, '^$ND')](_0x762f2f, _0x13503d);
                    },
                    'FVCsF': function(_0xc4528, _0x262f49) {
                        return _0xc4528 * _0x262f49;
                    },
                    'ovkQK': function(_0x411ebb, _0x377de9) {
                        return _0x397b98['OvkQM'](_0x411ebb, _0x377de9);
                    }
                };
            let _0x36eeb2 = {
                'url': _0x4c7ee8(0x5bf, '!y(t') + this['ck'][0x0],
                'headers': {
                    'Host': 'minigame5-normal-lq.zijieapi.com',
                    'Connection': _0x397b98[_0x4c7ee8(0x5af, 'r2Oj')],
                    'Content-Type': _0x397b98['bykvs'],
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                }
            };
            $[_0x4c7ee8(0xa3a, ')eXz')](_0x36eeb2, async(_0x2b0867, _0x4bb16e, _0x14b68c) => {
                const _0x1eeb22 = _0x4c7ee8;
                try {
                    if (_0x10d014[_0x1eeb22(0x2ee, 'WqE!')]('HlkxZ', _0x10d014['WRrLO'])) {
                        if (_0x2b0867) _0x10d014['yeuez'](_0x10d014[_0x1eeb22(0x2a0, 'WXl3')], 'JTyAS') ? $['logErr'](_0x2b0867) : _0x1eee25[_0x1eeb22(0x456, 'Tx3e')](_0x4fd129);
                        else {
                            let _0x354151 = JSON[_0x1eeb22(0x2e0, '9wX]')](_0x14b68c);
                            if (_0x10d014[_0x1eeb22(0x2b1, '#yB#')](_0x354151[_0x1eeb22(0x69e, 'Y^n*')], 0x0)) {
                                if (_0x10d014[_0x1eeb22(0x598, 'UC%d')](_0x10d014['JCpMf'], _0x10d014[_0x1eeb22(0x61a, '^$ND')])) _0x5b8ebc['logErr'](_0x4f6dbb);
                                else {
                                    let _0x4b3052 = _0x10d014['VBSTw'](_0x354151['data']['reward_type'], 0x1) ? '水滴' : '化肥';
                                    _0x10d014['izYqV'](DoubleLog, _0x1eeb22(0x2aa, 'WqE!') + this[_0x1eeb22(0x68d, '##))')] + _0x1eeb22(0x60d, 'z9*t') + _0x354151[_0x1eeb22(0x885, 'Y^n*')][_0x1eeb22(0x787, 'ksby')] + ' ' + _0x4b3052 + '，剩余' + _0x354151[_0x1eeb22(0x699, '^$ND')]['cur_reward_num'] + ' ' + _0x4b3052), await this['farmSignDouble'](_0x10d014[_0x1eeb22(0x9ff, 'Bu2E')](0x2, 0x3e8));
                                }
                            } else _0x10d014[_0x1eeb22(0x61d, '6GlL')](DoubleLog, _0x1eeb22(0x1da, '^ut3') + this[_0x1eeb22(0x4dc, 'Y^n*')] + _0x1eeb22(0x866, 'fhKC') + _0x354151['message']);
                        }
                    } else _0x10d014['TCnzj'](_0x165232);
                } catch (_0x475244) {
                    $[_0x1eeb22(0x2d2, '2(N#')](_0x475244, _0x4bb16e);
                } finally {
                    _0x152441();
                }
            }, _0x5a93aa);
        });
    }
    async[_0xa91301(0x3cc, '&[MC')](_0x56e230 = 0x7d0) {
        const _0x4a93e2 = _0xa91301,
            _0x384e11 = {
                'nEQZQ': function(_0x2101f3, _0x42c246) {
                    return _0x2101f3(_0x42c246);
                },
                'cWzZC': 'kOzFk',
                'aiaUE': 'XKLZp',
                'zVBfQ': function(_0x31cbca, _0x1dd98b) {
                    return _0x31cbca == _0x1dd98b;
                },
                'PKFBB': 'snVCy',
                'afenb': function(_0x142712, _0x4be4f4) {
                    return _0x142712 == _0x4be4f4;
                },
                'KotTG': function(_0x9e0708, _0x4097ef) {
                    return _0x9e0708 * _0x4097ef;
                },
                'SqJlo': function(_0x9ca6d0, _0x492636) {
                    return _0x9ca6d0 !== _0x492636;
                },
                'GzVud': _0x4a93e2(0x331, 'qmDl'),
                'obgpW': _0x4a93e2(0x16e, 'Zw8m'),
                'AFYOg': _0x4a93e2(0x886, '@m24'),
                'BTAdZ': _0x4a93e2(0x96a, 'R$sB'),
                'xpJFX': 'Yzgut',
                'kUAYU': function(_0x900af2) {
                    return _0x900af2();
                },
                'ZuHsa': function(_0x4139f7) {
                    return _0x4139f7();
                },
                'ntFar': _0x4a93e2(0x8d3, 'R$sB'),
                'JjdtY': 'minigame5-normal-lq.zijieapi.com',
                'IVlgz': 'Keep-Alive',
                'qeApC': 'application/json; charset=utf-8'
            };
        return new Promise(_0x10e721 => {
            const _0x2e7085 = _0x4a93e2,
                _0x4bae5f = {
                    'mxNGV': function(_0x415374, _0x25c22f) {
                        return _0x415374(_0x25c22f);
                    },
                    'YSiom': function(_0x551207) {
                        return _0x384e11['ZuHsa'](_0x551207);
                    }
                };
            if (_0x384e11['SqJlo']('MJlnN', _0x384e11[_0x2e7085(0x85f, 'z9*t')])) _0x211168();
            else {
                let _0xdd5f06 = {
                    'url': _0x2e7085(0x23e, 'Tx3e') + this['ck'][0x0],
                    'headers': {
                        'Host': _0x384e11[_0x2e7085(0xa4f, '^8@B')],
                        'Connection': _0x384e11[_0x2e7085(0x58a, 'WXl3')],
                        'Content-Type': _0x384e11[_0x2e7085(0x155, 'W#uE')],
                        'User-Agent': this['ck'][0x4],
                        'Cookie': this['ck'][0x1],
                        'x-argus': this['ck'][0x2],
                        'x-ladon': this['ck'][0x3]
                    }
                };
                $[_0x2e7085(0x745, '9iq9')](_0xdd5f06, async(_0xc3c0b1, _0x2d5e59, _0x263423) => {
                    const _0x3763ce = _0x2e7085,
                        _0x30fd34 = {
                            'ejxPa': function(_0x52bbc8, _0x18969d) {
                                const _0x5b33db = _0x3899;
                                return _0x384e11[_0x5b33db(0x9af, '@m24')](_0x52bbc8, _0x18969d);
                            }
                        };
                    try {
                        if (_0xc3c0b1) _0x384e11['cWzZC'] !== _0x384e11[_0x3763ce(0x8ed, 'JZxU')] ? $[_0x3763ce(0x162, '#2Hi')](_0xc3c0b1) : _0x3b7687['logErr'](_0x1cdcd5);
                        else {
                            let _0x502a63 = JSON[_0x3763ce(0x997, ')3Og')](_0x263423);
                            if (_0x384e11['zVBfQ'](_0x502a63[_0x3763ce(0xa34, 'A]*R')], 0x0)) {
                                if (_0x384e11['PKFBB'] !== 'snVCy') _0x4eab74(_0x3763ce(0x9a7, 'Zw8m') + this['index'] + '】解锁土地: ' + _0x196ab0[_0x3763ce(0x393, 'L%wM')]);
                                else {
                                    let _0x50a0c2 = _0x384e11[_0x3763ce(0xa3e, '9Ir0')](_0x502a63[_0x3763ce(0x784, '2(N#')][_0x3763ce(0x89e, 'W#uE')], 0x1) ? '水滴' : '化肥';
                                    _0x384e11['nEQZQ'](DoubleLog, _0x3763ce(0x3e2, '^8@B') + this[_0x3763ce(0xa97, 'A]*R')] + _0x3763ce(0x874, 'uvdB') + _0x502a63['data']['reward_num'] + _0x50a0c2 + _0x3763ce(0x896, 'm#vA') + _0x50a0c2 + '数量' + _0x502a63[_0x3763ce(0x721, 'JZxU')][_0x3763ce(0x6e5, 'UC%d')]), await this['farmSignDouble'](_0x384e11[_0x3763ce(0x619, 'Y^n*')](0x2, 0x3e8));
                                }
                            } else _0x384e11['SqJlo'](_0x384e11[_0x3763ce(0x29e, '!y(t')], _0x384e11['obgpW']) ? DoubleLog(_0x3763ce(0x28a, '##))') + this[_0x3763ce(0xa5e, 'MyTQ')] + _0x3763ce(0x969, 'qmDl') + _0x502a63[_0x3763ce(0x86b, 'W#uE')]) : _0x4bae5f[_0x3763ce(0xa60, '#yB#')](_0x5987dd, '
 ❌ 【' + this[_0x3763ce(0x93b, '#yB#')] + '】吃饭视频: 执行任务过快，继续执行任务');
                        }
                    } catch (_0x3af361) {
                        _0x384e11[_0x3763ce(0x9c5, 'W6*u')] !== _0x3763ce(0x718, 'UC%d') ? $[_0x3763ce(0xa5a, '^ut3')](_0x3af361, _0x2d5e59) : _0x30fd34['ejxPa'](_0x35f8d3, _0x3763ce(0xa90, 'A]*R') + this[_0x3763ce(0x927, '2(N#')] + _0x3763ce(0x18e, 'W#uE') + _0x257aa7[_0x3763ce(0x2c4, 'Tx3e')]['amount'] + _0x3763ce(0x2b7, 'fhKC'));
                    } finally {
                        _0x384e11[_0x3763ce(0x9d7, 'UC%d')](_0x384e11[_0x3763ce(0x3c5, '@m24')], _0x384e11['xpJFX']) ? _0x384e11[_0x3763ce(0x857, 'ygf[')](_0x10e721) : _0x4bae5f['YSiom'](_0x4bad94);
                    }
                }, _0x56e230);
            }
        });
    }
    async[_0xa91301(0x53e, '^8@B')](_0x5aa811 = 0x7d0) {
        const _0x642cd8 = _0xa91301,
            _0x41ae41 = {
                'RASeX': function(_0x3e22f7, _0x16cf19) {
                    return _0x3e22f7(_0x16cf19);
                },
                'DzvrO': _0x642cd8(0x938, '7htc'),
                'rKjMu': function(_0x11eb4e, _0x15def0) {
                    return _0x11eb4e == _0x15def0;
                },
                'DEiME': function(_0x123e32, _0xf5f6e5) {
                    return _0x123e32 === _0xf5f6e5;
                },
                'OPNwW': 'TPykt',
                'evDzX': function(_0x3ecc36, _0x4f7c4b) {
                    return _0x3ecc36 > _0x4f7c4b;
                },
                'KhjKl': function(_0x2daf77, _0x4fe762) {
                    return _0x2daf77 === _0x4fe762;
                },
                'WmYyX': _0x642cd8(0x899, '^ut3'),
                'YNCtJ': function(_0x5ce244, _0xee393c) {
                    return _0x5ce244 * _0xee393c;
                },
                'TQMJw': function(_0x1bed82, _0x4e96a7) {
                    return _0x1bed82 > _0x4e96a7;
                },
                'uvcYY': function(_0x2cb15a, _0x24828c) {
                    return _0x2cb15a < _0x24828c;
                },
                'DdEPa': function(_0x209852, _0x758101) {
                    return _0x209852(_0x758101);
                },
                'MLpMm': function(_0x100916, _0x439e4b) {
                    return _0x100916(_0x439e4b);
                },
                'ErNqd': 'sqGGP',
                'ysdlc': _0x642cd8(0x4f8, '9iq9'),
                'aGynH': _0x642cd8(0x9a1, '^$ND'),
                'kDAXs': _0x642cd8(0xa83, 'm#vA'),
                'czOdM': _0x642cd8(0x355, 'A]*R'),
                'zEYjt': function(_0x494fb4) {
                    return _0x494fb4();
                },
                'EdoCl': function(_0xb07b8e, _0x35ebfd) {
                    return _0xb07b8e(_0x35ebfd);
                },
                'yBbRq': _0x642cd8(0xa75, '2(N#'),
                'JiBTY': _0x642cd8(0x65d, '^ut3'),
                'ryGyb': _0x642cd8(0x22a, 'Yo*r')
            };
        return new Promise(_0x3f7257 => {
            const _0x41a4c8 = _0x642cd8,
                _0x1a23cc = {
                    'txluP': function(_0xde35b4, _0x11adc8) {
                        return _0x41ae41['EdoCl'](_0xde35b4, _0x11adc8);
                    }
                };
            let _0x1ef7d0 = {
                'url': 'https://minigame5-normal-lq.zijieapi.com/ttgame/game_farm/gift/list?' + this['ck'][0x0],
                'headers': {
                    'Host': _0x41ae41['yBbRq'],
                    'Connection': _0x41ae41[_0x41a4c8(0x807, 'K7Hk')],
                    'Content-Type': _0x41ae41[_0x41a4c8(0x223, ')eXz')],
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                }
            };
            $['get'](_0x1ef7d0, async(_0x369ec1, _0x1cd5f9, _0x2b96d6) => {
                const _0x46dbce = _0x41a4c8,
                    _0x29d8f3 = {
                        'nXCRb': function(_0x138922, _0x1802ae) {
                            const _0x3db5bb = _0x3899;
                            return _0x41ae41[_0x3db5bb(0x59c, 'W#uE')](_0x138922, _0x1802ae);
                        }
                    };
                try {
                    if (_0x369ec1) _0x41ae41['DzvrO'] === _0x46dbce(0x2f8, 'qmDl') ? $[_0x46dbce(0x456, 'Tx3e')](_0x369ec1) : _0x5689d8[_0x46dbce(0x28b, 'W#uE')](_0x100d09, _0x3d50a8);
                    else {
                        let _0x271637 = JSON[_0x46dbce(0x8d1, '^8@B')](_0x2b96d6);
                        if (_0x41ae41[_0x46dbce(0x247, '6GlL')](_0x271637['status_code'], 0x0)) {
                            if (_0x41ae41[_0x46dbce(0x526, 'K7Hk')](_0x41ae41[_0x46dbce(0x414, '^$ND')], _0x41ae41['OPNwW'])) {
                                let _0x3e316b = parseInt($[_0x46dbce(0x299, '^ut3')]('HH'));
                                if (_0x41ae41[_0x46dbce(0x881, 'z9*t')](_0x3e316b, 0x7) && _0x3e316b < 0x9) _0x41ae41[_0x46dbce(0x50f, 'ksby')](_0x41ae41[_0x46dbce(0x7ab, 'z9*t')], _0x41ae41[_0x46dbce(0x64f, '9wX]')]) ? (DoubleLog(_0x46dbce(0x71c, 'Ato%') + this[_0x46dbce(0x941, '3!Dt')] + _0x46dbce(0x3f4, '7htc')), await $['wait'](0x3e8), await this[_0x46dbce(0x4bc, 'Yo*r')](0x1, _0x41ae41[_0x46dbce(0x1d9, 'W#uE')](0x2, 0x3e8))) : _0x40c513['logErr'](_0x5d5686);
                                else {
                                    if (_0x41ae41['TQMJw'](_0x3e316b, 0xb) && _0x41ae41['uvcYY'](_0x3e316b, 0xe)) _0x41ae41[_0x46dbce(0x810, 'UC%d')](DoubleLog, _0x46dbce(0x823, ')3Og') + this['index'] + _0x46dbce(0x51e, ')eXz')), await $[_0x46dbce(0x668, 'z9*t')](0x3e8), await this[_0x46dbce(0x641, 'm#vA')](0x2, _0x41ae41['YNCtJ'](0x2, 0x3e8));
                                    else _0x3e316b > 0x12 && _0x41ae41[_0x46dbce(0x443, '&[MC')](_0x3e316b, 0x15) ? (_0x41ae41[_0x46dbce(0x98e, 'WqE!')](DoubleLog, '
 ✅ 【' + this[_0x46dbce(0x723, 'ev8C')] + _0x46dbce(0x735, 'K7Hk')), await $[_0x46dbce(0x150, 'A]*R')](0x3e8), await this[_0x46dbce(0x550, '&[MC')](0x3, _0x41ae41['YNCtJ'](0x2, 0x3e8))) : _0x41ae41[_0x46dbce(0x5b1, '9iq9')](DoubleLog, _0x46dbce(0x3f5, 'QGOg') + this[_0x46dbce(0x3da, 'L%wM')] + _0x46dbce(0xaa4, '6GlL'));
                                }
                            } else _0x1cdd68();
                        } else _0x41ae41[_0x46dbce(0x707, 'ksby')] !== _0x41ae41[_0x46dbce(0x50b, 'MyTQ')] ? DoubleLog('
 ❌ 【' + this[_0x46dbce(0x395, 'vvN[')] + _0x46dbce(0x863, '9iq9') + _0x271637['message']) : _0x1a23cc[_0x46dbce(0x240, '6GlL')](_0x3aaff1, _0x46dbce(0x56f, 'r2Oj') + this['index'] + '】观看视频: 每天看广告赚金币已达上限');
                    }
                } catch (_0xc34293) {
                    _0x41ae41['aGynH'] !== _0x41ae41[_0x46dbce(0x9d3, '7htc')] ? _0x29d8f3[_0x46dbce(0xaa1, 'WqE!')](_0x1dad0a, _0x46dbce(0x269, 'UC%d') + _0x53aa77 + _0x46dbce(0x426, '2(N#')) : $['logErr'](_0xc34293, _0x1cd5f9);
                } finally {
                    _0x41ae41[_0x46dbce(0x258, '^$ND')] === _0x41ae41[_0x46dbce(0x829, '&[MC')] ? _0x4d6993[_0x46dbce(0x3d9, '#yB#')](_0x41db01, _0x670630) : _0x41ae41['zEYjt'](_0x3f7257);
                }
            }, _0x5aa811);
        });
    }
    async[_0xa91301(0x41a, 'Tx3e')](_0x12a9b5, _0x56591f = 0x7d0) {
        const _0x21bb52 = _0xa91301,
            _0x4f4ee3 = {
                'VCbqv': function(_0x134783, _0x1a1bdf) {
                    return _0x134783 == _0x1a1bdf;
                },
                'OxLId': function(_0x4dd4ea, _0x245a19) {
                    return _0x4dd4ea(_0x245a19);
                },
                'JKQpg': function(_0x49ed8e, _0x45e268) {
                    return _0x49ed8e * _0x45e268;
                },
                'crePt': _0x21bb52(0x195, '!y(t'),
                'zNtZn': function(_0x251813, _0x314ffb) {
                    return _0x251813 == _0x314ffb;
                },
                'RNmQk': 'FFhNJ',
                'THfWm': function(_0x5ed27c) {
                    return _0x5ed27c();
                },
                'OJXbe': function(_0x2b0bcf, _0x46f422) {
                    return _0x2b0bcf !== _0x46f422;
                },
                'OXYYp': 'OVrEz',
                'UEAsF': _0x21bb52(0x282, 'W6*u'),
                'Hkxgq': _0x21bb52(0x4a6, '9wX]')
            };
        return new Promise(_0x51326a => {
            const _0x5bf79e = _0x21bb52,
                _0x343e60 = {
                    'KcSFC': function(_0x32b0e6, _0xf9b434) {
                        const _0x222b12 = _0x3899;
                        return _0x4f4ee3[_0x222b12(0xaa6, 'ev8C')](_0x32b0e6, _0xf9b434);
                    },
                    'ARLDB': function(_0x3999cc, _0x1b7814) {
                        const _0x271042 = _0x3899;
                        return _0x4f4ee3[_0x271042(0x493, 'Zw8m')](_0x3999cc, _0x1b7814);
                    },
                    'TQBBq': _0x5bf79e(0x2db, '^8@B'),
                    'ZHHdx': function(_0x4b2d9c, _0x4546c3) {
                        return _0x4f4ee3['JKQpg'](_0x4b2d9c, _0x4546c3);
                    },
                    'fFaEQ': function(_0x5200b8, _0x2fe7a7) {
                        return _0x5200b8 !== _0x2fe7a7;
                    },
                    'KnSHq': _0x4f4ee3[_0x5bf79e(0x448, 'm#vA')],
                    'SJPKo': function(_0x3e530e, _0x29d51f) {
                        return _0x4f4ee3['zNtZn'](_0x3e530e, _0x29d51f);
                    },
                    'OmlNo': _0x4f4ee3[_0x5bf79e(0x359, 'W#uE')],
                    'ExWjF': _0x5bf79e(0xa16, 'z9*t'),
                    'vYaKl': function(_0x91dd51) {
                        return _0x4f4ee3['THfWm'](_0x91dd51);
                    }
                };
            if (_0x4f4ee3['OJXbe'](_0x4f4ee3[_0x5bf79e(0x64d, '##))')], _0x4f4ee3[_0x5bf79e(0x1dc, '9Ir0')])) {
                let _0x5b89eb = _0x3d403a[_0x5bf79e(0x8fe, 'z9*t')][_0x5bf79e(0x59a, 'ygf[')][_0x446c89];
                if (_0x343e60['KcSFC'](_0x5b89eb[_0x5bf79e(0x82b, 'Mt$M')], 0x410)) {
                    let _0x231598 = _0x45319e[_0x5bf79e(0x97b, '^H2k')](_0x5b89eb[_0x5bf79e(0x3c3, ']A!w')]);
                    _0x343e60[_0x5bf79e(0x6c4, 'ksby')](_0x3d9064, _0x5bf79e(0x71a, 'uvdB') + this[_0x5bf79e(0x941, '3!Dt')] + '】视频统计: 已赚 ' + _0x231598[_0x5bf79e(0x66b, 'Bu2E')] + ' 金，阅读时长 ' + _0x5b8e49[_0x5bf79e(0x2ad, '&[MC')](_0x343e60['TQBBq'], _0x343e60['ZHHdx'](_0x231598[_0x5bf79e(0x88c, 'W6*u')], 0x3e8)) + _0x5bf79e(0x35d, '^8@B'));
                }
            } else {
                let _0x4a46f = {
                    'url': _0x5bf79e(0x761, 'Zw8m') + _0x12a9b5 + '&watch_ad=0&double=0&' + this['ck'][0x0],
                    'headers': {
                        'Host': _0x4f4ee3[_0x5bf79e(0x43e, 'Zw8m')],
                        'Connection': _0x5bf79e(0x380, '9iq9'),
                        'Content-Type': _0x4f4ee3[_0x5bf79e(0x8dc, 'MyTQ')],
                        'User-Agent': this['ck'][0x4],
                        'Cookie': this['ck'][0x1],
                        'x-argus': this['ck'][0x2],
                        'x-ladon': this['ck'][0x3]
                    }
                };
                $[_0x5bf79e(0x91d, 'UC%d')](_0x4a46f, async(_0x4e2cab, _0x5371dc, _0x2414b2) => {
                    const _0x3ea931 = _0x5bf79e,
                        _0x448f16 = {
                            'zlovC': function(_0x5ce7c0) {
                                return _0x5ce7c0();
                            }
                        };
                    try {
                        if (_0x343e60[_0x3ea931(0x475, 'Yo*r')](_0x343e60[_0x3ea931(0x679, 'Zw8m')], 'dQkOA')) _0x343e60[_0x3ea931(0x7a3, 'r2Oj')](_0x2058cd, _0x3ea931(0x988, '^8@B') + this[_0x3ea931(0x395, 'vvN[')] + _0x3ea931(0x9e4, 'uvdB'));
                        else {
                            if (_0x4e2cab) $[_0x3ea931(0x38b, 'Mt$M')](_0x4e2cab);
                            else {
                                let _0x596e5b = JSON[_0x3ea931(0xa5d, 'm#vA')](_0x2414b2);
                                _0x343e60[_0x3ea931(0x411, 'R$sB')](_0x596e5b['status_code'], 0x0) ? _0x343e60[_0x3ea931(0x919, '9wX]')] !== _0x3ea931(0x224, '#2Hi') ? _0x2e0866['logErr'](_0x42bef7) : DoubleLog(_0x3ea931(0x500, ')eXz') + this['index'] + _0x3ea931(0x156, 'uvdB') + _0x596e5b[_0x3ea931(0x6e8, 'ygf[')][_0x3ea931(0x787, 'ksby')] + _0x3ea931(0x542, '6GlL')) : _0x343e60[_0x3ea931(0x991, 'JZxU')](_0x343e60[_0x3ea931(0xa02, '#2Hi')], _0x3ea931(0x2ed, 'L%wM')) ? DoubleLog(_0x3ea931(0x524, 'z9*t') + this[_0x3ea931(0x6c8, 'Mt$M')] + _0x3ea931(0x86c, 'A]*R') + _0x596e5b[_0x3ea931(0x22e, 'ev8C')]) : _0x448f16['zlovC'](_0x3f0681);
                            }
                        }
                    } catch (_0x326113) {
                        $[_0x3ea931(0x73e, 'MyTQ')](_0x326113, _0x5371dc);
                    } finally {
                        _0x343e60[_0x3ea931(0x83a, 'vvN[')](_0x51326a);
                    }
                }, _0x56591f);
            }
        });
    }
    async[_0xa91301(0x5fe, '7htc')](_0x5f4343 = 0x7d0) {
        const _0x16f09c = _0xa91301,
            _0x117bb3 = {
                'WcaiC': function(_0x436d8e, _0x333453) {
                    return _0x436d8e(_0x333453);
                },
                'jyBuU': function(_0x59cef9, _0x4c635) {
                    return _0x59cef9 == _0x4c635;
                },
                'rwLFw': function(_0x133b24, _0x32bf9a) {
                    return _0x133b24 === _0x32bf9a;
                },
                'LDcNW': 'NsuAN',
                'KetVC': function(_0x17f195, _0x895456) {
                    return _0x17f195 * _0x895456;
                },
                'YYogd': function(_0x5f4a51, _0x4bb268) {
                    return _0x5f4a51 >= _0x4bb268;
                },
                'JhLxh': function(_0x14c6a2, _0x5009f9) {
                    return _0x14c6a2 > _0x5009f9;
                },
                'ZaNtG': function(_0x383211, _0x357a80) {
                    return _0x383211 !== _0x357a80;
                },
                'QWOJJ': _0x16f09c(0x940, ']A!w'),
                'fObjl': function(_0x59c910, _0x27eb52) {
                    return _0x59c910 * _0x27eb52;
                },
                'ubnst': 'xHAOD',
                'ciyEg': function(_0x21c08b) {
                    return _0x21c08b();
                },
                'DrkJP': 'rZrjy',
                'QrWUu': 'minigame5-normal-lq.zijieapi.com',
                'mhlWu': _0x16f09c(0x790, '#yB#'),
                'HIKTZ': _0x16f09c(0x871, 'z9*t')
            };
        return new Promise(_0x430140 => {
            const _0x26d723 = _0x16f09c,
                _0x5c0602 = {
                    'sXWdP': function(_0xeb51c9, _0x4438b0) {
                        const _0x505255 = _0x3899;
                        return _0x117bb3[_0x505255(0x849, '#2Hi')](_0xeb51c9, _0x4438b0);
                    }
                };
            if (_0x117bb3['ZaNtG']('TNKQI', _0x117bb3[_0x26d723(0x94b, 'Tx3e')])) {
                let _0x535677 = {
                    'url': _0x26d723(0x172, '^$ND') + this['ck'][0x0],
                    'headers': {
                        'Host': _0x117bb3[_0x26d723(0x1f5, 'Y^n*')],
                        'Connection': _0x117bb3['mhlWu'],
                        'Content-Type': _0x117bb3[_0x26d723(0x2be, 'Yo*r')],
                        'User-Agent': this['ck'][0x4],
                        'Cookie': this['ck'][0x1],
                        'x-argus': this['ck'][0x2],
                        'x-ladon': this['ck'][0x3]
                    }
                };
                $[_0x26d723(0x585, ')3Og')](_0x535677, async(_0x56362f, _0x54865e, _0x443959) => {
                    const _0x2d1d5e = _0x26d723,
                        _0x11437d = {
                            'MaSTo': function(_0x2cdb60, _0x1cf39f) {
                                const _0x446580 = _0x3899;
                                return _0x117bb3[_0x446580(0x1f3, '##))')](_0x2cdb60, _0x1cf39f);
                            }
                        };
                    try {
                        if (_0x56362f) $[_0x2d1d5e(0x766, 'Y^n*')](_0x56362f);
                        else {
                            let _0x59637c = JSON[_0x2d1d5e(0x93d, 'WqE!')](_0x443959);
                            _0x117bb3[_0x2d1d5e(0x7bc, '9iq9')](_0x59637c['status_code'], 0x0) ? (_0x59637c[_0x2d1d5e(0x15d, '#2Hi')][_0x2d1d5e(0x510, 'r2Oj')]['offline_production'] && (_0x117bb3[_0x2d1d5e(0x309, '2(N#')](_0x2d1d5e(0x349, 'A]*R'), _0x117bb3['LDcNW']) ? await this[_0x2d1d5e(0x33f, 'vvN[')](_0x117bb3['KetVC'](0x2, 0x3e8)) : _0x11437d['MaSTo'](_0x34d3a5, '
 ❌ 【' + this[_0x2d1d5e(0x230, '7htc')] + _0x2d1d5e(0x1b4, 'WaIa') + _0x12fb54[_0x2d1d5e(0x1a9, '#yB#')])), _0x117bb3[_0x2d1d5e(0x5f4, '^8@B')](_0x59637c[_0x2d1d5e(0x767, '!y(t')]['info']['water'], 0xa) && await this[_0x2d1d5e(0x93f, '9Ir0')](_0x117bb3[_0x2d1d5e(0x68f, '^H2k')](0x2, 0x3e8)), _0x117bb3[_0x2d1d5e(0x3fe, 'vvN[')](_0x59637c['data'][_0x2d1d5e(0x4dd, '@m24')][_0x2d1d5e(0x5a0, 'WqE!')], 0x0) && (_0x117bb3[_0x2d1d5e(0x2dd, 'Bu2E')](_0x2d1d5e(0x959, '^$ND'), _0x117bb3[_0x2d1d5e(0x8ea, 'W6*u')]) ? await this[_0x2d1d5e(0x906, 'Mt$M')](_0x117bb3['fObjl'](0x2, 0x3e8)) : _0x58ffa6[_0x2d1d5e(0x18d, 'Zw8m')](_0x3815fb, _0x290cbb))) : DoubleLog('
 ❌ 【' + this[_0x2d1d5e(0x723, 'ev8C')] + '】农场状态: ' + _0x59637c['message']);
                        }
                    } catch (_0x2dca4f) {
                        _0x117bb3[_0x2d1d5e(0x8b1, ')eXz')] === _0x117bb3[_0x2d1d5e(0x470, '#2Hi')] ? $['logErr'](_0x2dca4f, _0x54865e) : _0x2f4ef8();
                    } finally {
                        _0x117bb3[_0x2d1d5e(0x1c5, '3!Dt')](_0x430140);
                    }
                }, _0x5f4343);
            } else {
                let _0x46060a = _0x3c3605[_0x26d723(0x845, '#yB#')](_0x53ecad);
                if (_0x5c0602[_0x26d723(0x384, 'vvN[')](_0x46060a[_0x26d723(0x25e, 'Tx3e')], 0x0)) {} else _0x3559d2('
 ❌ 【' + this[_0x26d723(0x4dc, 'Y^n*')] + _0x26d723(0x8d5, 'm#vA') + _0x46060a['message']);
            }
        });
    }
    async['farmOfflineDouble'](_0x411eee = 0x7d0) {
        const _0x30000b = _0xa91301,
            _0x4e96b7 = {
                'IHySZ': function(_0x360a5f, _0x5d9b68) {
                    return _0x360a5f(_0x5d9b68);
                },
                'MGsrU': 'mm:ss',
                'WAUpP': function(_0x5bc256) {
                    return _0x5bc256();
                },
                'HORTM': function(_0x4002b9, _0x31ae18) {
                    return _0x4002b9(_0x31ae18);
                },
                'PrROY': function(_0x480ebd, _0x55f8f5) {
                    return _0x480ebd == _0x55f8f5;
                },
                'BibVT': _0x30000b(0x3c1, '!y(t'),
                'HbAAF': 'FGAHI',
                'duPXb': function(_0x3eb8cd, _0x1f2757) {
                    return _0x3eb8cd === _0x1f2757;
                },
                'DAeIY': _0x30000b(0x30b, 'K7Hk'),
                'YEGzz': _0x30000b(0x608, 'Ato%')
            };
        return new Promise(_0xb7d34b => {
            const _0x13afe7 = _0x30000b,
                _0x13b14d = {
                    'yQEbq': function(_0x153fce, _0x122fd9) {
                        return _0x4e96b7['IHySZ'](_0x153fce, _0x122fd9);
                    },
                    'xptgl': _0x4e96b7[_0x13afe7(0x153, 'QGOg')],
                    'QDory': function(_0x1b856d) {
                        return _0x4e96b7['WAUpP'](_0x1b856d);
                    },
                    'jmetg': function(_0xd0fe44, _0x14d567) {
                        const _0x5caa9a = _0x13afe7;
                        return _0x4e96b7[_0x5caa9a(0xa51, ')3Og')](_0xd0fe44, _0x14d567);
                    },
                    'oQxdu': function(_0x358d53, _0x5498c2) {
                        return _0x358d53 !== _0x5498c2;
                    },
                    'WvlqU': _0x13afe7(0x6cd, 'z9*t'),
                    'DURPA': function(_0x59c195, _0x612ad6) {
                        return _0x59c195 === _0x612ad6;
                    },
                    'rCEak': _0x13afe7(0x85a, 'Yo*r'),
                    'AMyJb': function(_0x3b9684, _0x2e824d) {
                        const _0x4195c5 = _0x13afe7;
                        return _0x4e96b7[_0x4195c5(0x89a, 'r2Oj')](_0x3b9684, _0x2e824d);
                    },
                    'kvpnf': function(_0x33914b, _0x399834) {
                        return _0x4e96b7['IHySZ'](_0x33914b, _0x399834);
                    },
                    'WGADA': _0x4e96b7['BibVT'],
                    'iygNz': _0x4e96b7[_0x13afe7(0xa21, 'WqE!')]
                };
            if (_0x4e96b7[_0x13afe7(0x764, 'ygf[')](_0x4e96b7['DAeIY'], _0x13afe7(0x29c, 'MyTQ'))) {
                let _0x2a6f77 = {
                    'url': _0x13afe7(0x62e, '##))') + this['ck'][0x0],
                    'headers': {
                        'Host': _0x4e96b7[_0x13afe7(0x700, 'Yo*r')],
                        'Connection': 'Keep-Alive',
                        'Content-Type': 'application/json; charset=utf-8',
                        'User-Agent': this['ck'][0x4],
                        'Cookie': this['ck'][0x1],
                        'x-argus': this['ck'][0x2],
                        'x-ladon': this['ck'][0x3]
                    }
                };
                $['get'](_0x2a6f77, async(_0x1d93c3, _0x377264, _0x1d09a1) => {
                    const _0x36647f = _0x13afe7,
                        _0x275faf = {
                            'QXoLy': function(_0x3c51fe) {
                                const _0x56dfef = _0x3899;
                                return _0x13b14d[_0x56dfef(0x68a, '##))')](_0x3c51fe);
                            },
                            'EcuPl': function(_0xc20193, _0xaebda9) {
                                const _0x53fb0c = _0x3899;
                                return _0x13b14d[_0x53fb0c(0x221, 'Zw8m')](_0xc20193, _0xaebda9);
                            }
                        };
                    try {
                        if (_0x13b14d[_0x36647f(0x312, 'QGOg')]('eDiRC', _0x13b14d['WvlqU'])) {
                            if (_0x1d93c3) _0x13b14d[_0x36647f(0xa05, 'UC%d')](_0x13b14d[_0x36647f(0xa9f, 'Yo*r')], _0x36647f(0x3a5, 'm#vA')) ? $[_0x36647f(0x379, '!y(t')](_0x1d93c3) : _0x275faf[_0x36647f(0x920, 'ygf[')](_0x15c4db);
                            else {
                                let _0x3bf983 = JSON[_0x36647f(0x738, '3!Dt')](_0x1d09a1);
                                if (_0x13b14d['AMyJb'](_0x3bf983[_0x36647f(0x851, ')3Og')], 0x0)) _0x13b14d[_0x36647f(0x5d0, 'ygf[')](DoubleLog, _0x36647f(0x5d7, '^ut3') + this[_0x36647f(0x40d, 'z9*t')] + '】农场离线: 离线产量翻倍成功');
                                else {
                                    if (_0x13b14d[_0x36647f(0x22d, '^ut3')] === _0x13b14d[_0x36647f(0x821, 'Mt$M')]) _0x13b14d[_0x36647f(0x538, 'uvdB')](DoubleLog, _0x36647f(0x26c, 'MyTQ') + this['index'] + _0x36647f(0x1a8, '9wX]') + _0x3bf983[_0x36647f(0x9e8, 'WaIa')]);
                                    else {
                                        let _0x34cbe8 = _0x42f35a[_0x36647f(0x2e0, '9wX]')](_0x4e90df[_0x36647f(0x741, '9wX]')]);
                                        _0x13b14d[_0x36647f(0xa31, 'ksby')](_0x50525f, _0x36647f(0x160, 'vvN[') + this[_0x36647f(0xa57, 'R$sB')] + _0x36647f(0xa3b, 'qmDl') + _0x34cbe8['coin'] + _0x36647f(0x45d, 'Ato%') + _0x1078f6[_0x36647f(0x5ad, ']A!w')](_0x13b14d[_0x36647f(0x57c, '^ut3')], _0x34cbe8['duration'] * 0x3e8) + ' 分钟');
                                    }
                                }
                            }
                        } else _0x275faf[_0x36647f(0x4e7, '^H2k')](_0x4df950, '
 ❌ 【' + this[_0x36647f(0x93b, '#yB#')] + _0x36647f(0xaaa, 'ev8C') + _0xbf8376[_0x36647f(0x6b1, '&[MC')]);
                    } catch (_0x3644b1) {
                        _0x13b14d[_0x36647f(0x9c7, '##))')] === _0x36647f(0x222, 'A]*R') ? $[_0x36647f(0x73a, '6GlL')](_0x3644b1, _0x377264) : _0x1921d0[_0x36647f(0x456, 'Tx3e')](_0x35e859);
                    } finally {
                        _0xb7d34b();
                    }
                }, _0x411eee);
            } else _0x20b972[_0x13afe7(0x308, 'r2Oj')](_0x383162, _0xa62c24);
        });
    }
    async[_0xa91301(0x62c, 'Mt$M')](_0xcf4920 = 0x7d0) {
        const _0x31086a = _0xa91301,
            _0x5b7514 = {
                'zbDWo': function(_0x41fe80, _0x463635) {
                    return _0x41fe80 === _0x463635;
                },
                'UlYdm': 'QijBG',
                'fPsax': _0x31086a(0x960, '^H2k'),
                'LSZiS': function(_0x2c439c, _0x165a41) {
                    return _0x2c439c == _0x165a41;
                },
                'gEOVn': 'tTLhC',
                'DAVPO': function(_0x50a216, _0x50b9e7) {
                    return _0x50a216 >= _0x50b9e7;
                },
                'UogIo': function(_0x1a81f7, _0x8f49f7) {
                    return _0x1a81f7 * _0x8f49f7;
                },
                'gThJi': function(_0x5e8b0a, _0x187f82) {
                    return _0x5e8b0a(_0x187f82);
                },
                'MBOkz': function(_0x2c8a6f, _0x3b606a) {
                    return _0x2c8a6f !== _0x3b606a;
                },
                'LgtTW': 'mRpBQ'
            };
        return new Promise(_0x403d59 => {
            const _0x11c3d5 = _0x31086a;
            if (_0x5b7514['MBOkz'](_0x5b7514[_0x11c3d5(0xa3d, '9wX]')], _0x11c3d5(0x40c, 'QGOg'))) {
                let _0x31ebe8 = {
                    'url': _0x11c3d5(0x59f, '@m24') + this['ck'][0x0],
                    'headers': {
                        'Host': 'minigame5-normal-lq.zijieapi.com',
                        'Connection': _0x11c3d5(0x5cc, '7htc'),
                        'Content-Type': 'application/json; charset=utf-8',
                        'User-Agent': this['ck'][0x4],
                        'Cookie': this['ck'][0x1],
                        'x-argus': this['ck'][0x2],
                        'x-ladon': this['ck'][0x3]
                    }
                };
                $[_0x11c3d5(0x585, ')3Og')](_0x31ebe8, async(_0x4f0b62, _0x17f073, _0x278c9d) => {
                    const _0x29b3a5 = _0x11c3d5;
                    if (_0x5b7514['zbDWo']('TOvuQ', _0x5b7514[_0x29b3a5(0x34a, 'W#uE')])) _0x3993d0[_0x29b3a5(0x18f, 'A]*R')](_0x427641);
                    else try {
                        if (_0x4f0b62) $['logErr'](_0x4f0b62);
                        else {
                            if (_0x5b7514['zbDWo'](_0x29b3a5(0x613, 'qmDl'), _0x5b7514[_0x29b3a5(0x643, 'ygf[')])) {
                                let _0xa2a0e1 = JSON['parse'](_0x278c9d);
                                _0x5b7514[_0x29b3a5(0x7ed, 'ev8C')](_0xa2a0e1['status_code'], 0x0) ? _0x5b7514[_0x29b3a5(0x690, 'vvN[')](_0x5b7514[_0x29b3a5(0x1ee, '9iq9')], _0x29b3a5(0x97d, 'W6*u')) ? _0x5e9a7e(_0x29b3a5(0x28a, '##))') + this[_0x29b3a5(0xa57, 'R$sB')] + '】视频领水: ' + _0x2176c0['message']) : (DoubleLog('
 ✅ 【' + this[_0x29b3a5(0x901, 'UC%d')] + _0x29b3a5(0x51c, '##))') + _0xa2a0e1[_0x29b3a5(0x4b7, '@m24')][_0x29b3a5(0x931, '9Ir0')] + _0x29b3a5(0x4d7, 'L%wM')), _0x5b7514[_0x29b3a5(0x87a, '7htc')](_0xa2a0e1['data'][_0x29b3a5(0x435, ')3Og')], 0xa) && (await $[_0x29b3a5(0x737, 'Tx3e')](0x5dc), await this[_0x29b3a5(0x9a9, 'Ato%')](_0x5b7514['UogIo'](0x2, 0x3e8)))) : _0x5b7514['gThJi'](DoubleLog, _0x29b3a5(0x847, 'WaIa') + this[_0x29b3a5(0x1fa, '@m24')] + _0x29b3a5(0x665, ')eXz') + _0xa2a0e1[_0x29b3a5(0xa54, 'Y^n*')]);
                            } else _0x2f4070(_0x29b3a5(0x5bb, 'Y^n*') + this['index'] + '】吃饭打卡: ' + _0x547029['err_tips']);
                        }
                    } catch (_0x523089) {
                        $['logErr'](_0x523089, _0x17f073);
                    } finally {
                        _0x403d59();
                    }
                }, _0xcf4920);
            } else _0x45ffd6('
 ❌ 【' + this[_0x11c3d5(0x47f, 'WXl3')] + '】观看视频: 该账号没有可执行任务，可能是新号');
        });
    }
    async['farmOpenBox'](_0x4f712d = 0x7d0) {
        const _0x323235 = _0xa91301,
            _0x386a53 = {
                'rqzMp': function(_0x282644, _0x5a4fdd) {
                    return _0x282644 / _0x5a4fdd;
                },
                'QzTgg': _0x323235(0x43b, '9iq9'),
                'vEksH': function(_0x490a8b, _0x44220c) {
                    return _0x490a8b == _0x44220c;
                },
                'ePDtq': function(_0x186cb6, _0xcf2d0b) {
                    return _0x186cb6 > _0xcf2d0b;
                },
                'ikfHk': function(_0x2a49f6, _0x248d6b) {
                    return _0x2a49f6 !== _0x248d6b;
                },
                'aYuea': _0x323235(0x6e4, '#yB#'),
                'SwfGq': 'minigame5-normal-lq.zijieapi.com',
                'tYazy': _0x323235(0x4a7, 'WaIa')
            };
        return new Promise(_0x3bac5d => {
            const _0x4f7f08 = _0x323235,
                _0x26e960 = {
                    'bsnuv': function(_0x50fe0c, _0x2dd044) {
                        return _0x50fe0c(_0x2dd044);
                    },
                    'qAQNo': function(_0x43d53e, _0xd18e1a) {
                        const _0x28c521 = _0x3899;
                        return _0x386a53[_0x28c521(0x32a, 'R$sB')](_0x43d53e, _0xd18e1a);
                    },
                    'aXmNp': 'DcPaF',
                    'cVhcY': _0x386a53[_0x4f7f08(0x342, 'ksby')],
                    'uzuMD': function(_0x33d470, _0x624a9d) {
                        const _0x280e66 = _0x4f7f08;
                        return _0x386a53[_0x280e66(0x7ad, 'W#uE')](_0x33d470, _0x624a9d);
                    },
                    'LBwLw': function(_0x500c36, _0xc31016) {
                        const _0x4e5d55 = _0x4f7f08;
                        return _0x386a53[_0x4e5d55(0xa26, 'z9*t')](_0x500c36, _0xc31016);
                    },
                    'UdcUW': _0x4f7f08(0x2ea, 'WqE!'),
                    'mIhUQ': function(_0x27480b, _0xfef87b) {
                        return _0x386a53['ikfHk'](_0x27480b, _0xfef87b);
                    },
                    'StXPQ': _0x386a53[_0x4f7f08(0x36f, ')eXz')]
                };
            let _0x3e8b44 = {
                'url': 'https://minigame5-normal-lq.zijieapi.com/ttgame/game_farm/box/open?' + this['ck'][0x0],
                'headers': {
                    'Host': _0x386a53[_0x4f7f08(0x17d, 'L%wM')],
                    'Connection': _0x386a53[_0x4f7f08(0x55f, '3!Dt')],
                    'Content-Type': _0x4f7f08(0x6da, 'JZxU'),
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                }
            };
            $['get'](_0x3e8b44, async(_0x2a3006, _0x1b2e96, _0x2a983b) => {
                const _0x55b97b = _0x4f7f08,
                    _0x49bded = {
                        'BwTCe': function(_0x3c285b, _0x316db4) {
                            return _0x3c285b == _0x316db4;
                        },
                        'CzcbT': function(_0x1bf609, _0x522069) {
                            const _0x227a8c = _0x3899;
                            return _0x26e960[_0x227a8c(0x9d6, '#yB#')](_0x1bf609, _0x522069);
                        }
                    };
                try {
                    if (_0x2a3006) $[_0x55b97b(0x637, 'WXl3')](_0x2a3006);
                    else {
                        if (_0x26e960[_0x55b97b(0x8de, 'UC%d')] !== _0x26e960['cVhcY']) {
                            let _0x4f1618 = JSON[_0x55b97b(0x4fc, 'A]*R')](_0x2a983b);
                            _0x26e960['uzuMD'](_0x4f1618[_0x55b97b(0x38c, '#yB#')], 0x0) ? (_0x26e960[_0x55b97b(0x19c, '3!Dt')](DoubleLog, _0x55b97b(0xa6b, ']A!w') + this[_0x55b97b(0x14c, '9wX]')] + _0x55b97b(0xa17, 'WqE!') + _0x4f1618[_0x55b97b(0x767, '!y(t')][_0x55b97b(0x9ed, 'Ato%')] + ' 金币'), _0x26e960[_0x55b97b(0x926, 'fhKC')](_0x4f1618[_0x55b97b(0x900, 'Zw8m')][_0x55b97b(0x3e6, 'W6*u')], 0x0) && await this['farmOpenBoxVideo'](0x2 * 0x3e8)) : _0x26e960[_0x55b97b(0x962, 'fhKC')] === _0x26e960[_0x55b97b(0x81e, 'WXl3')] ? DoubleLog('
 ❌ 【' + this[_0x55b97b(0x792, '&[MC')] + '】农场宝箱: ' + _0x4f1618[_0x55b97b(0x86b, 'W#uE')]) : _0x26e960[_0x55b97b(0xa0f, '&[MC')](_0x16c17a, '
 ✅ 【' + this['index'] + _0x55b97b(0x952, '##))') + _0x544ba7['data']['income_info'][_0x55b97b(0x6a8, 'K7Hk')] + '金币,现金:' + _0x26e960[_0x55b97b(0x5c6, '^ut3')](_0x5ea07b['data'][_0x55b97b(0x2e4, '&[MC')]['cash_balance'], 0x64) + '元');
                        } else {
                            let _0x24ba16 = _0x30a248[_0x55b97b(0x5d8, 'Ato%')](_0x549645);
                            _0x49bded[_0x55b97b(0x924, 'qmDl')](_0x24ba16[_0x55b97b(0x671, 'm#vA')], 0x0) ? _0x49bded[_0x55b97b(0x32d, 'K7Hk')](_0x37bfb4, '
 ✅ 【' + this[_0x55b97b(0x65b, 'Ato%')] + _0x55b97b(0x407, '3!Dt') + _0x4b0c94 + ' 号土地') : _0xc2561a(_0x55b97b(0x9a7, 'Zw8m') + this[_0x55b97b(0x6ab, '^8@B')] + _0x55b97b(0x3d5, 'ygf[') + _0x24ba16[_0x55b97b(0xa12, 'r2Oj')]);
                        }
                    }
                } catch (_0x7f8bda) {
                    _0x26e960[_0x55b97b(0x3dc, 'qmDl')](_0x26e960['StXPQ'], _0x26e960['StXPQ']) ? _0x198bed[_0x55b97b(0x73e, 'MyTQ')](_0x51f6bd, _0x6c04eb) : $[_0x55b97b(0x84a, 'ev8C')](_0x7f8bda, _0x1b2e96);
                } finally {
                    _0x3bac5d();
                }
            }, _0x4f712d);
        });
    }
    async[_0xa91301(0x2e3, 'qmDl')](_0x27b50d = 0x7d0) {
        const _0x189722 = _0xa91301,
            _0x3e36e7 = {
                'RfjNl': function(_0x20b9b9, _0x41697a) {
                    return _0x20b9b9(_0x41697a);
                },
                'BkAtr': function(_0x4d8f93, _0x1bfad7) {
                    return _0x4d8f93 + _0x1bfad7;
                },
                'YdpMr': function(_0x273263, _0x3aa69e) {
                    return _0x273263 + _0x3aa69e;
                },
                'byyTi': function(_0x266e21, _0x403bab) {
                    return _0x266e21 < _0x403bab;
                },
                'THgIN': function(_0x4d1d14, _0x3961e6) {
                    return _0x4d1d14 + _0x3961e6;
                },
                'LTKtc': function(_0x2c27e5, _0x198718) {
                    return _0x2c27e5 < _0x198718;
                },
                'hwMFF': function(_0x480ea2, _0x58522b) {
                    return _0x480ea2 !== _0x58522b;
                },
                'tXeBl': function(_0x15a2c4, _0x437d4a) {
                    return _0x15a2c4(_0x437d4a);
                },
                'iMhge': function(_0x316424, _0x20a628) {
                    return _0x316424 === _0x20a628;
                },
                'fAuAk': 'OoWxX',
                'wGAvB': _0x189722(0x87e, 'W#uE'),
                'SZYrp': _0x189722(0x6f0, 'A]*R'),
                'YXHnE': _0x189722(0x581, '&[MC')
            };
        return new Promise(_0x500bb9 => {
            const _0x2a88b2 = _0x189722,
                _0xfe2884 = {
                    'zIqgk': function(_0xb1a105) {
                        return _0xb1a105();
                    },
                    'Eipzq': function(_0x4080b9, _0x11e82c) {
                        const _0x3079c4 = _0x3899;
                        return _0x3e36e7[_0x3079c4(0x5a9, '^$ND')](_0x4080b9, _0x11e82c);
                    },
                    'kbhdp': function(_0x571237, _0xa4f142) {
                        const _0x3f7fbc = _0x3899;
                        return _0x3e36e7[_0x3f7fbc(0x3db, 'WaIa')](_0x571237, _0xa4f142);
                    },
                    'ZexGN': function(_0x48be16, _0x4719ed) {
                        return _0x3e36e7['byyTi'](_0x48be16, _0x4719ed);
                    },
                    'UTTAD': function(_0x3ef627, _0x4ea671) {
                        const _0x25da4a = _0x3899;
                        return _0x3e36e7[_0x25da4a(0xa64, 'Ato%')](_0x3ef627, _0x4ea671);
                    },
                    'GuWQZ': function(_0x21561d, _0x1f9510) {
                        return _0x3e36e7['LTKtc'](_0x21561d, _0x1f9510);
                    },
                    'sUERX': function(_0x2339c8, _0x303363) {
                        const _0x1968dd = _0x3899;
                        return _0x3e36e7[_0x1968dd(0xaab, 'JZxU')](_0x2339c8, _0x303363);
                    },
                    'jCEyh': function(_0x2952c5, _0x5a346d) {
                        const _0x52206f = _0x3899;
                        return _0x3e36e7[_0x52206f(0x7e9, ')eXz')](_0x2952c5, _0x5a346d);
                    },
                    'OICoB': function(_0x14af76, _0x2e235a) {
                        return _0x14af76 + _0x2e235a;
                    },
                    'obJXi': function(_0x1b31b1, _0x1058a0) {
                        return _0x1b31b1 + _0x1058a0;
                    },
                    'pVXLY': _0x2a88b2(0x22f, ')eXz'),
                    'HezYr': function(_0x32ae76, _0x560916) {
                        return _0x32ae76 == _0x560916;
                    },
                    'lGjrg': function(_0x2bcf72, _0x41ee80) {
                        const _0x353345 = _0x2a88b2;
                        return _0x3e36e7[_0x353345(0x2ae, 'Ato%')](_0x2bcf72, _0x41ee80);
                    },
                    'yTCqD': _0x2a88b2(0x9c9, '^8@B'),
                    'hFgjP': function(_0x5bdfbf, _0x3e18d9) {
                        return _0x3e36e7['tXeBl'](_0x5bdfbf, _0x3e18d9);
                    }
                };
            if (_0x3e36e7['iMhge'](_0x3e36e7['fAuAk'], _0x3e36e7['wGAvB'])) _0x3e36e7[_0x2a88b2(0x1bf, '^ut3')](_0x11c07f, '
 ✅ 【' + this['index'] + _0x2a88b2(0x2e7, '##))') + _0x86fe39[_0x2a88b2(0x648, 'QGOg')][_0x2a88b2(0x4e6, 'L%wM')] + ' 金币');
            else {
                let _0x3d0191 = {
                    'url': 'https://minigame5-normal-lq.zijieapi.com/ttgame/game_farm/excitation_ad/add?excitation_ad_score_amount=134&' + this['ck'][0x0],
                    'headers': {
                        'Host': _0x3e36e7[_0x2a88b2(0x3d6, 'MyTQ')],
                        'Connection': _0x2a88b2(0x814, 'ev8C'),
                        'Content-Type': _0x3e36e7[_0x2a88b2(0x559, 'A]*R')],
                        'User-Agent': this['ck'][0x4],
                        'Cookie': this['ck'][0x1],
                        'x-argus': this['ck'][0x2],
                        'x-ladon': this['ck'][0x3]
                    }
                };
                $[_0x2a88b2(0x30c, 'Ato%')](_0x3d0191, async(_0x1abace, _0x2ac838, _0x20593f) => {
                    const _0x232729 = _0x2a88b2;
                    if (_0xfe2884['pVXLY'] === _0xfe2884[_0x232729(0x9a3, '&[MC')]) try {
                        if (_0x1abace) $[_0x232729(0x1ed, 'QGOg')](_0x1abace);
                        else {
                            let _0x39f45c = JSON[_0x232729(0x2e0, '9wX]')](_0x20593f);
                            _0xfe2884[_0x232729(0x5ee, '9Ir0')](_0x39f45c[_0x232729(0x210, '#2Hi')], 0x0) ? _0xfe2884['lGjrg'](_0xfe2884[_0x232729(0x494, 'JZxU')], _0xfe2884[_0x232729(0x7d0, '^ut3')]) ? _0xfe2884[_0x232729(0x3cb, 'A]*R')](_0x4bf949) : _0xfe2884[_0x232729(0x3f2, 'qmDl')](DoubleLog, '
 ✅ 【' + this[_0x232729(0x2bd, 'K7Hk')] + _0x232729(0x93a, '!y(t') + _0x39f45c['data'][_0x232729(0x8ac, '&[MC')] + ' 金币') : DoubleLog('
 ❌ 【' + this[_0x232729(0x14c, '9wX]')] + _0x232729(0x647, 'ksby') + _0x39f45c[_0x232729(0xa06, 'W6*u')]);
                        }
                    } catch (_0x12ab4a) {
                        _0x232729(0x8e0, 'qmDl') === _0x232729(0x8e0, 'qmDl') ? $[_0x232729(0x2e5, 'Yo*r')](_0x12ab4a, _0x2ac838) : _0x49a190[_0x232729(0x637, 'WXl3')](_0x1ca106);
                    } finally {
                        _0xfe2884['zIqgk'](_0x500bb9);
                    } else {
                        var _0x59c80e = new _0x4029fd(_0x2f3ef6);
                        let _0x453723 = _0x59c80e['getFullYear'](),
                            _0x1422bf = _0xfe2884[_0x232729(0x2d4, '!y(t')](_0x59c80e['getMonth'](), 0x1) < 0xa ? _0xfe2884[_0x232729(0x948, 'Y^n*')]('0', _0x59c80e[_0x232729(0x373, 'W6*u')]() + 0x1) : _0xfe2884[_0x232729(0x7b8, '2(N#')](_0x59c80e[_0x232729(0x31e, 'Ato%')](), 0x1),
                            _0x4dfc0e = _0xfe2884[_0x232729(0x5ed, 'ksby')](_0x59c80e[_0x232729(0x7b1, 'A]*R')](), 0xa) ? _0xfe2884['UTTAD']('0', _0x59c80e['getDate']()) : _0x59c80e[_0x232729(0x640, '^H2k')](),
                            _0x1e0bfd = _0xfe2884[_0x232729(0x6f9, '^ut3')](_0x59c80e[_0x232729(0x706, 'ksby')](), 0xa) ? '0' + _0x59c80e[_0x232729(0x86d, 'UC%d')]() : _0x59c80e[_0x232729(0x788, '9wX]')](),
                            _0x74db2b = _0xfe2884[_0x232729(0x1df, '^$ND')](_0x59c80e[_0x232729(0x15e, 'QGOg')](), 0xa) ? _0xfe2884[_0x232729(0x468, 'fhKC')]('0', _0x59c80e[_0x232729(0x5a6, '6GlL')]()) : _0x59c80e['getMinutes'](),
                            _0x5d423c = _0xfe2884[_0x232729(0x5b9, 'qmDl')](_0x59c80e[_0x232729(0x995, 'L%wM')](), 0xa) ? _0xfe2884[_0x232729(0xaa5, 'L%wM')]('0', _0x59c80e[_0x232729(0x953, '9wX]')]()) : _0x59c80e['getSeconds']();
                        return _0xfe2884[_0x232729(0x62f, 'W#uE')](_0xfe2884[_0x232729(0x2fc, 'vvN[')](_0xfe2884[_0x232729(0x43c, 'r2Oj')](_0xfe2884[_0x232729(0x9e6, '##))')](_0xfe2884[_0x232729(0xa30, 'Bu2E')](_0x453723, '-') + _0x1422bf, '-'), _0x4dfc0e), ' ') + _0x1e0bfd, ':') + _0x74db2b + ':' + _0x5d423c;
                    }
                }, _0x27b50d);
            }
        });
    }
    async['queryFarmLandStatus'](_0x3e0d1c = 0x7d0) {
        const _0x149ebd = _0xa91301,
            _0x135b8b = {
                'CPIGp': function(_0x492395, _0x5f508d) {
                    return _0x492395 || _0x5f508d;
                },
                'XEDWz': function(_0x448252, _0x1acb91) {
                    return _0x448252 * _0x1acb91;
                },
                'NkGCl': function(_0x319bd4) {
                    return _0x319bd4();
                },
                'nHUwT': function(_0x40ef99, _0xef1c78) {
                    return _0x40ef99(_0xef1c78);
                },
                'jBIAH': function(_0x31076c, _0x4bbed0) {
                    return _0x31076c !== _0x4bbed0;
                },
                'JXTFD': _0x149ebd(0xa23, 'W#uE'),
                'jfAYS': 'PNrbM',
                'doHRf': _0x149ebd(0x6e9, 'Yo*r'),
                'hZEvd': function(_0x13f9a1, _0x25ba0c) {
                    return _0x13f9a1 == _0x25ba0c;
                },
                'UtLUh': function(_0x37e71f, _0x32d40d) {
                    return _0x37e71f == _0x32d40d;
                },
                'CjlGk': 'EarSm',
                'CEzYq': _0x149ebd(0x437, 'ev8C'),
                'oEYVq': 'Keep-Alive',
                'YMKzi': _0x149ebd(0x398, 'qmDl')
            };
        return new Promise(_0x3828e9 => {
            const _0x57af09 = _0x149ebd,
                _0x355829 = {
                    'deYLo': function(_0x3d29a6, _0x2817f8) {
                        return _0x135b8b['CPIGp'](_0x3d29a6, _0x2817f8);
                    },
                    'mgMri': function(_0x3137e6, _0x419928) {
                        return _0x135b8b['XEDWz'](_0x3137e6, _0x419928);
                    },
                    'MiZeQ': function(_0x39a310) {
                        return _0x135b8b['NkGCl'](_0x39a310);
                    },
                    'asPnN': function(_0x3a4223, _0x4213a9) {
                        const _0x172ac5 = _0x3899;
                        return _0x135b8b[_0x172ac5(0x553, '#yB#')](_0x3a4223, _0x4213a9);
                    },
                    'eKCgl': function(_0x237109, _0x10ba09) {
                        const _0x17a556 = _0x3899;
                        return _0x135b8b[_0x17a556(0x69d, ')eXz')](_0x237109, _0x10ba09);
                    },
                    'ROSzU': _0x135b8b[_0x57af09(0x5d6, '##))')],
                    'hFKXa': _0x57af09(0x2f5, '!y(t'),
                    'VWBQl': function(_0x441255, _0x4297ec) {
                        const _0x23a1b8 = _0x57af09;
                        return _0x135b8b[_0x23a1b8(0x53b, 'Zw8m')](_0x441255, _0x4297ec);
                    },
                    'Hfzxw': _0x135b8b[_0x57af09(0x786, 'Bu2E')],
                    'hfFKG': function(_0xdb1865, _0x42a8fb) {
                        return _0xdb1865 === _0x42a8fb;
                    },
                    'gXgmB': _0x135b8b[_0x57af09(0x4cb, 'qmDl')],
                    'NgCvG': function(_0x5b301f, _0x54f9a9) {
                        const _0x7f9fde = _0x57af09;
                        return _0x135b8b[_0x7f9fde(0x405, ')3Og')](_0x5b301f, _0x54f9a9);
                    },
                    'RfxRY': function(_0x58035b, _0x141ea4) {
                        const _0x4a5715 = _0x57af09;
                        return _0x135b8b[_0x4a5715(0x9f8, 'W6*u')](_0x58035b, _0x141ea4);
                    },
                    'wlGyT': function(_0x2135a8, _0x225d39) {
                        const _0x1692fa = _0x57af09;
                        return _0x135b8b[_0x1692fa(0x522, ')3Og')](_0x2135a8, _0x225d39);
                    },
                    'VSRIy': _0x135b8b[_0x57af09(0x60b, '^H2k')]
                };
            if (_0x135b8b[_0x57af09(0x666, 'MyTQ')] !== _0x135b8b[_0x57af09(0x4c5, '2(N#')]) {
                _0x35307c = _0x355829['deYLo'](_0x2f9e78, 0x20);
                let _0x3fa3c5 = _0x4f2913[_0x57af09(0x6c0, '^8@B')],
                    _0x59d50b = '';
                for (let _0x3d1189 = 0x0; _0x3d1189 < _0x468dc0; _0x3d1189++) _0x59d50b += _0x267f46['charAt'](_0x26e693[_0x57af09(0x4d3, 'Bu2E')](_0x355829['mgMri'](_0x3cee3d['random'](), _0x3fa3c5)));
                return _0x59d50b;
            } else {
                let _0x34efc3 = {
                    'url': 'https://minigame5-normal-lq.zijieapi.com/ttgame/game_farm/home_info?' + this['ck'][0x0],
                    'headers': {
                        'Host': _0x57af09(0x858, 'Yo*r'),
                        'Connection': _0x135b8b[_0x57af09(0x81f, ')3Og')],
                        'Content-Type': _0x135b8b[_0x57af09(0x7ac, '2(N#')],
                        'User-Agent': this['ck'][0x4],
                        'Cookie': this['ck'][0x1],
                        'x-argus': this['ck'][0x2],
                        'x-ladon': this['ck'][0x3]
                    }
                };
                $[_0x57af09(0xa33, '2(N#')](_0x34efc3, async(_0x50c3c8, _0x459165, _0x3a99e7) => {
                    const _0x5b2cbb = _0x57af09;
                    if (_0x355829['eKCgl'](_0x355829[_0x5b2cbb(0x4f2, 'A]*R')], _0x355829[_0x5b2cbb(0x4b4, 'Mt$M')])) try {
                        if (_0x355829[_0x5b2cbb(0x812, '&[MC')](_0x355829[_0x5b2cbb(0xa4e, 'm#vA')], _0x355829[_0x5b2cbb(0x58c, '6GlL')])) _0xec04b4[_0x5b2cbb(0x5ce, '&[MC')](_0x4d1368, _0x40e199);
                        else {
                            if (_0x50c3c8) _0x355829['hfFKG'](_0x355829['gXgmB'], _0x5b2cbb(0x2ce, '&[MC')) ? $[_0x5b2cbb(0x9d4, '^H2k')](_0x50c3c8) : _0x355829['MiZeQ'](_0xa5401b);
                            else {
                                let _0x3a9f67 = JSON[_0x5b2cbb(0x982, '#2Hi')](_0x3a99e7);
                                if (_0x355829[_0x5b2cbb(0x311, 'JZxU')](_0x3a9f67[_0x5b2cbb(0x2a1, 'r2Oj')], 0x0))
                                    for (let _0x2a90e9 of _0x3a9f67[_0x5b2cbb(0x67d, '9Ir0')][_0x5b2cbb(0x358, 'm#vA')][_0x5b2cbb(0x8ff, '^8@B')]) {
                                        if (_0x355829[_0x5b2cbb(0x756, 'WaIa')](_0x2a90e9[_0x5b2cbb(0x6a5, 'WXl3')], ![]) && _0x355829[_0x5b2cbb(0x8dd, 'Mt$M')](_0x2a90e9[_0x5b2cbb(0x94c, 'A]*R')], !![])) {
                                            await this[_0x5b2cbb(0x71f, '9Ir0')](_0x2a90e9[_0x5b2cbb(0x26f, 'Mt$M')]);
                                            break;
                                        }
                                    } else _0x355829[_0x5b2cbb(0x55b, 'W6*u')]('EarSm', _0x355829[_0x5b2cbb(0x5e2, '&[MC')]) ? _0x355829[_0x5b2cbb(0x7bd, '^8@B')](DoubleLog, '
 ❌ 【' + this[_0x5b2cbb(0x23a, 'W#uE')] + _0x5b2cbb(0x338, 'QGOg') + _0x3a9f67[_0x5b2cbb(0x25a, '2(N#')]) : _0x355829['asPnN'](_0x5310db, _0x5b2cbb(0x820, 'Mt$M') + this[_0x5b2cbb(0xa57, 'R$sB')] + _0x5b2cbb(0x638, 'WqE!') + _0x4b802a[_0x5b2cbb(0x88f, 'qmDl')]);
                            }
                        }
                    } catch (_0x2fbc59) {
                        $['logErr'](_0x2fbc59, _0x459165);
                    } finally {
                        _0x355829['MiZeQ'](_0x3828e9);
                    } else _0x1e0171[_0x5b2cbb(0x621, 'fhKC')](_0x7390e1, _0x45b53b);
                }, _0x3e0d1c);
            }
        });
    }
    async[_0xa91301(0x2cf, 'QGOg')](_0x2b53b5, _0x599ed6 = 0x7d0) {
        const _0x2b9473 = _0xa91301,
            _0x2c8168 = {
                'vQPXz': function(_0x57df4a, _0x425d65) {
                    return _0x57df4a === _0x425d65;
                },
                'VAhmS': _0x2b9473(0x24e, '2(N#'),
                'BVvCO': _0x2b9473(0x2ff, 'vvN['),
                'OYAfM': function(_0x5e5db0, _0x21d1c9) {
                    return _0x5e5db0(_0x21d1c9);
                },
                'DsPik': function(_0x559fe9) {
                    return _0x559fe9();
                },
                'xQcvi': function(_0x4a71f3, _0x89ecf6) {
                    return _0x4a71f3 == _0x89ecf6;
                },
                'WzkhO': function(_0x1c73b5, _0x4f5adc) {
                    return _0x1c73b5 == _0x4f5adc;
                },
                'UBseO': function(_0x206e2f, _0x57e55e) {
                    return _0x206e2f(_0x57e55e);
                },
                'wnXSs': function(_0x2265c7, _0x405d2f) {
                    return _0x2265c7 === _0x405d2f;
                },
                'gDUpr': _0x2b9473(0x14e, 'r2Oj'),
                'polUh': _0x2b9473(0x4ca, 'z9*t')
            };
        return new Promise(_0x3d6481 => {
            const _0x38328a = _0x2b9473,
                _0x3d6e04 = {
                    'MMTlZ': function(_0x9db65d, _0x1f6631) {
                        const _0x414d1e = _0x3899;
                        return _0x2c8168[_0x414d1e(0x50d, 'Ato%')](_0x9db65d, _0x1f6631);
                    },
                    'pROXs': function(_0x2d4aa9, _0x4bee66) {
                        const _0x3c9c62 = _0x3899;
                        return _0x2c8168[_0x3c9c62(0x57d, '##))')](_0x2d4aa9, _0x4bee66);
                    },
                    'HiyqA': function(_0x128139, _0x3dfe3d) {
                        const _0x2f8c5d = _0x3899;
                        return _0x2c8168[_0x2f8c5d(0x2d3, '6GlL')](_0x128139, _0x3dfe3d);
                    },
                    'AHfny': function(_0x23c1e3, _0x4cb53e) {
                        return _0x2c8168['UBseO'](_0x23c1e3, _0x4cb53e);
                    },
                    'FAGOU': function(_0x210731, _0x3f0378) {
                        const _0x2652af = _0x3899;
                        return _0x2c8168[_0x2652af(0x33e, 'ev8C')](_0x210731, _0x3f0378);
                    }
                };
            if (_0x2c8168[_0x38328a(0x49e, ')3Og')](_0x2c8168[_0x38328a(0xa37, 'JZxU')], _0x2c8168[_0x38328a(0x234, 'A]*R')])) {
                let _0x410e86 = {
                    'url': _0x38328a(0x180, '^ut3') + _0x2b53b5 + '&' + this['ck'][0x0],
                    'headers': {
                        'Host': _0x38328a(0xa8b, 'MyTQ'),
                        'Connection': _0x2c8168['polUh'],
                        'Content-Type': 'application/json; charset=utf-8',
                        'User-Agent': this['ck'][0x4],
                        'Cookie': this['ck'][0x1],
                        'x-argus': this['ck'][0x2],
                        'x-ladon': this['ck'][0x3]
                    }
                };
                $[_0x38328a(0x20b, 'Mt$M')](_0x410e86, async(_0x5f9ffc, _0x3bdca4, _0x5e1881) => {
                    const _0x59a685 = _0x38328a;
                    try {
                        if (_0x2c8168[_0x59a685(0x1c9, 'Zw8m')]('QmQVM', 'QmQVM')) {
                            if (_0x5f9ffc) $[_0x59a685(0x989, '9iq9')](_0x5f9ffc);
                            else {
                                if (_0x2c8168[_0x59a685(0x597, 'ygf[')](_0x2c8168[_0x59a685(0x7c2, 'm#vA')], _0x2c8168[_0x59a685(0x55a, 'r2Oj')])) {
                                    let _0x36b949 = _0x549618[_0x59a685(0x51a, 'fhKC')](_0x261b5b);
                                    if (_0x3d6e04[_0x59a685(0x839, '&[MC')](_0x36b949[_0x59a685(0x225, '^H2k')], 0x0)) _0x3d6e04[_0x59a685(0x609, 'WaIa')](_0x38da6b, _0x59a685(0x76f, '^H2k') + this[_0x59a685(0x17c, '!y(t')] + _0x59a685(0x6ea, 'R$sB') + _0x36b949['data'][_0x59a685(0x508, 'uvdB')] + _0x59a685(0x239, 'ev8C'));
                                    else _0x3d6e04[_0x59a685(0x19f, 'Y^n*')](_0x36b949[_0x59a685(0x549, 'QGOg')], 0x2716) ? _0x3d6e04['AHfny'](_0x1231fe, _0x59a685(0x399, 'ygf[') + this[_0x59a685(0x61e, '^$ND')] + '】广告赚金: 每天看广告赚金币已达上限') : _0x3d6e04[_0x59a685(0x3ab, 'm#vA')](_0x252eaa, _0x59a685(0x544, 'ksby') + this[_0x59a685(0x723, 'ev8C')] + _0x59a685(0x21d, '9wX]') + _0x36b949['err_tips']);
                                } else {
                                    let _0x519dbb = JSON[_0x59a685(0x7dc, '^ut3')](_0x5e1881);
                                    _0x519dbb[_0x59a685(0x1aa, 'K7Hk')] == 0x0 ? _0x2c8168[_0x59a685(0xa52, '6GlL')](DoubleLog, _0x59a685(0x50e, 'ksby') + this[_0x59a685(0xaad, 'WaIa')] + _0x59a685(0x861, 'MyTQ') + _0x2b53b5 + ' 号土地') : _0x2c8168[_0x59a685(0x843, 'Tx3e')](DoubleLog, _0x59a685(0xa2e, 'ev8C') + this[_0x59a685(0x23a, 'W#uE')] + _0x59a685(0x241, '#yB#') + _0x519dbb[_0x59a685(0x421, '##))')]);
                                }
                            }
                        } else _0x1c76a4('
 ❌ 【' + this['index'] + _0x59a685(0x283, '^ut3'));
                    } catch (_0x1af390) {
                        $[_0x59a685(0x408, '9Ir0')](_0x1af390, _0x3bdca4);
                    } finally {
                        _0x2c8168['DsPik'](_0x3d6481);
                    }
                }, _0x599ed6);
            } else _0x3f6822(_0x38328a(0x5bb, 'Y^n*') + this[_0x38328a(0x6b7, 'ksby')] + '】吃饭打卡: ' + _0x1990ee['err_tips']);
        });
    }
    async['queryFarmTask'](_0x5a7dd2 = 0x7d0) {
        const _0x3f5de1 = _0xa91301,
            _0x401199 = {
                'eghhi': function(_0x173bc4, _0x491716) {
                    return _0x173bc4(_0x491716);
                },
                'xLVIt': function(_0x1f8d8e, _0x339b29) {
                    return _0x1f8d8e == _0x339b29;
                },
                'QfyfH': function(_0x372638, _0x21e216) {
                    return _0x372638 !== _0x21e216;
                },
                'lgnYa': _0x3f5de1(0x9bd, 'Zw8m'),
                'AzCFo': _0x3f5de1(0x381, 'ygf['),
                'qrocN': function(_0x59eadf, _0x50bb97) {
                    return _0x59eadf == _0x50bb97;
                },
                'UxBkm': _0x3f5de1(0x903, 'r2Oj'),
                'Atkon': _0x3f5de1(0x76e, 'fhKC'),
                'kXyOO': _0x3f5de1(0x739, 'z9*t'),
                'aPDlf': function(_0x1f8442) {
                    return _0x1f8442();
                },
                'vWzif': function(_0x278316, _0x11ffb3) {
                    return _0x278316(_0x11ffb3);
                },
                'FSNRq': _0x3f5de1(0x9bb, '&[MC'),
                'ZWTfi': _0x3f5de1(0x5d9, '^8@B')
            };
        return new Promise(_0x414f9d => {
            const _0x74a219 = _0x3f5de1,
                _0x378459 = {
                    'hPaAc': function(_0x37fe87) {
                        const _0x2ccabe = _0x3899;
                        return _0x401199[_0x2ccabe(0x770, 'Yo*r')](_0x37fe87);
                    },
                    'OYdcZ': function(_0x3d3578, _0x3197d4) {
                        const _0x2647a1 = _0x3899;
                        return _0x401199[_0x2647a1(0x674, '##))')](_0x3d3578, _0x3197d4);
                    }
                };
            let _0x683e7 = {
                'url': _0x74a219(0x2b9, 'Ato%') + this['ck'][0x0],
                'headers': {
                    'Host': _0x401199[_0x74a219(0x822, 'R$sB')],
                    'Connection': _0x74a219(0x490, 'QGOg'),
                    'Content-Type': _0x401199[_0x74a219(0x827, 'z9*t')],
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                }
            };
            $['get'](_0x683e7, async(_0x4d031e, _0x1f376a, _0x46587a) => {
                const _0x4dd6b6 = _0x74a219,
                    _0x14ab5f = {
                        'syLSh': function(_0x41a7d3, _0x1595ff) {
                            const _0x852c5a = _0x3899;
                            return _0x401199[_0x852c5a(0x5be, 'Tx3e')](_0x41a7d3, _0x1595ff);
                        }
                    };
                try {
                    if (_0x4d031e) $[_0x4dd6b6(0x204, 'uvdB')](_0x4d031e);
                    else {
                        let _0x1f331 = JSON['parse'](_0x46587a);
                        if (_0x401199[_0x4dd6b6(0x1fc, 'R$sB')](_0x1f331[_0x4dd6b6(0x4c8, 'Tx3e')], 0x0)) {
                            if (_0x401199[_0x4dd6b6(0x51d, 'W6*u')](_0x401199[_0x4dd6b6(0x8ee, 'K7Hk')], _0x401199[_0x4dd6b6(0x828, 'A]*R')]))
                                for (let _0x2a07a4 of _0x1f331[_0x4dd6b6(0xa32, 'qmDl')]) {
                                    _0x401199[_0x4dd6b6(0x698, '&[MC')](_0x2a07a4[_0x4dd6b6(0x99d, 'W#uE')], 0x1) && (_0x401199[_0x4dd6b6(0x51d, 'W6*u')](_0x401199[_0x4dd6b6(0x869, '6GlL')], _0x4dd6b6(0x732, 'z9*t')) ? _0x378459[_0x4dd6b6(0x6b8, 'fhKC')](_0x1c276b) : await this[_0x4dd6b6(0x77e, 'Bu2E')](_0x2a07a4[_0x4dd6b6(0x82b, 'Mt$M')]));
                                } else _0xe1daa4[_0x4dd6b6(0x18d, 'Zw8m')](_0x216383);
                        } else _0x401199[_0x4dd6b6(0x776, '^8@B')] !== 'GimoJ' ? _0x378459['OYdcZ'](_0x272924, _0x4dd6b6(0xa71, 'UC%d') + this[_0x4dd6b6(0xa5e, 'MyTQ')] + '】广告赚金: 每天看广告赚金币已达上限') : _0x401199[_0x4dd6b6(0x684, '6GlL')](DoubleLog, _0x4dd6b6(0x1da, '^ut3') + this[_0x4dd6b6(0x165, 'm#vA')] + '】农场任务: ' + _0x1f331[_0x4dd6b6(0x412, 'WqE!')]);
                    }
                } catch (_0x3a1951) {
                    $[_0x4dd6b6(0x5ce, '&[MC')](_0x3a1951, _0x1f376a);
                } finally {
                    _0x401199[_0x4dd6b6(0x457, '2(N#')] === _0x401199[_0x4dd6b6(0x907, 'WqE!')] ? _0x414f9d() : _0x14ab5f['syLSh'](_0x175ba7, _0x4dd6b6(0x236, '^$ND') + this['index'] + _0x4dd6b6(0x632, 'WqE!'));
                }
            }, _0x5a7dd2);
        });
    }
    async['rewardFarmTask'](_0x80cb67, _0x57fa7c = 0x7d0) {
        const _0x32a0ea = _0xa91301,
            _0x2ae41e = {
                'jABMI': function(_0x5e8adb) {
                    return _0x5e8adb();
                },
                'eCHzc': _0x32a0ea(0xa2c, ')eXz'),
                'ZQhVm': function(_0x22f80f, _0x9b1efc) {
                    return _0x22f80f(_0x9b1efc);
                },
                'owNtW': function(_0x19cd34, _0x1ba5b6) {
                    return _0x19cd34 === _0x1ba5b6;
                },
                'fAnep': _0x32a0ea(0x705, '^$ND'),
                'mlFaQ': _0x32a0ea(0x21f, '9Ir0'),
                'hLEzs': _0x32a0ea(0x772, 'W#uE'),
                'XCSER': 'Keep-Alive'
            };
        return new Promise(_0x58cbdc => {
            const _0x18e520 = _0x32a0ea,
                _0x2ee57b = {
                    'gsiot': function(_0x3aa6dc) {
                        return _0x2ae41e['jABMI'](_0x3aa6dc);
                    },
                    'owRXe': function(_0x5f12f2, _0x51d55e) {
                        return _0x5f12f2 === _0x51d55e;
                    },
                    'udGiC': _0x2ae41e[_0x18e520(0x615, 'MyTQ')],
                    'zmqtF': function(_0x540047, _0x60f383) {
                        return _0x540047 == _0x60f383;
                    },
                    'dNXSv': function(_0x3b1f65, _0x24902e) {
                        const _0x470d53 = _0x18e520;
                        return _0x2ae41e[_0x470d53(0xa28, 'UC%d')](_0x3b1f65, _0x24902e);
                    },
                    'NKnKU': function(_0x8d181a, _0x45f058) {
                        const _0x4bbf42 = _0x18e520;
                        return _0x2ae41e[_0x4bbf42(0x691, '@m24')](_0x8d181a, _0x45f058);
                    },
                    'Kqjhq': _0x2ae41e[_0x18e520(0x5d4, '#yB#')],
                    'kONUt': _0x2ae41e[_0x18e520(0x92b, 'JZxU')]
                };
            if (_0x18e520(0x64b, 'A]*R') !== _0x18e520(0x74d, 'Tx3e')) _0x2ee57b[_0x18e520(0x653, 'ygf[')](_0x6684c7);
            else {
                let _0x29de2e = {
                    'url': _0x18e520(0x2e9, 'Yo*r') + _0x80cb67 + '&' + this['ck'][0x0],
                    'headers': {
                        'Host': _0x2ae41e[_0x18e520(0x890, 'fhKC')],
                        'Connection': _0x2ae41e[_0x18e520(0x6a0, '^H2k')],
                        'Content-Type': _0x18e520(0x5c0, 'ygf['),
                        'User-Agent': this['ck'][0x4],
                        'Cookie': this['ck'][0x1],
                        'x-argus': this['ck'][0x2],
                        'x-ladon': this['ck'][0x3]
                    }
                };
                $[_0x18e520(0x2ec, 'z9*t')](_0x29de2e, async(_0x332d1f, _0x5f46bf, _0x1f7174) => {
                    const _0x1f74a7 = _0x18e520,
                        _0x3c31d2 = {
                            'XOENv': function(_0x9aa357) {
                                const _0x428b7f = _0x3899;
                                return _0x2ee57b[_0x428b7f(0x689, 'Mt$M')](_0x9aa357);
                            }
                        };
                    if (_0x2ee57b['owRXe']('xrdRT', _0x1f74a7(0x1cc, 'fhKC'))) _0x12994f[_0x1f74a7(0x31d, 'ksby')](_0x53f1fd, _0x310cf1);
                    else try {
                        if (_0x332d1f) $[_0x1f74a7(0x87f, 'Ato%')](_0x332d1f);
                        else {
                            let _0xf51e45 = JSON['parse'](_0x1f7174);
                            if (_0xf51e45[_0x1f74a7(0x942, '##))')] == 0x0) {
                                if (_0x2ee57b['owRXe'](_0x2ee57b[_0x1f74a7(0x4db, 'Y^n*')], 'vRVtz')) _0x417b0c(_0x1f74a7(0x988, '^8@B') + this[_0x1f74a7(0x23a, 'W#uE')] + '】免费领水: ' + _0x492b38[_0x1f74a7(0x7ce, '3!Dt')]);
                                else {
                                    let _0x2b7778 = _0x2ee57b[_0x1f74a7(0x36a, 'Y^n*')](_0xf51e45[_0x1f74a7(0x9b6, '^8@B')][_0x1f74a7(0x527, 'fhKC')], 0x1) ? '水滴' : '化肥';
                                    _0x2ee57b['dNXSv'](DoubleLog, _0x1f74a7(0x9cc, 'ygf[') + this[_0x1f74a7(0x23a, 'W#uE')] + _0x1f74a7(0x8b6, 'fhKC') + _0xf51e45['data'][_0x1f74a7(0x39a, '6GlL')] + ']获得' + _0xf51e45[_0x1f74a7(0x2f3, 'WXl3')]['reward_num'] + _0x2b7778 + '，剩余' + _0x2b7778 + '数量' + _0xf51e45['data'][_0x1f74a7(0x3a8, 'Mt$M')]);
                                }
                            } else _0x2ee57b['dNXSv'](DoubleLog, _0x1f74a7(0x988, '^8@B') + this['index'] + _0x1f74a7(0x7bb, '3!Dt') + _0xf51e45[_0x1f74a7(0x530, 'K7Hk')]);
                        }
                    } catch (_0x3991c1) {
                        $[_0x1f74a7(0x915, '##))')](_0x3991c1, _0x5f46bf);
                    } finally {
                        _0x2ee57b[_0x1f74a7(0x4f4, 'WaIa')](_0x2ee57b[_0x1f74a7(0xa9c, 'A]*R')], _0x2ee57b[_0x1f74a7(0x6ac, 'WaIa')]) ? _0x3c31d2[_0x1f74a7(0xa24, ')3Og')](_0x232a68) : _0x2ee57b[_0x1f74a7(0x60e, 'qmDl')](_0x58cbdc);
                    }
                }, _0x57fa7c);
            }
        });
    }
    async[_0xa91301(0x4d8, 'm#vA')](_0xcdbf45 = 0x7d0) {
        const _0x58d3fa = _0xa91301,
            _0x5d4fd3 = {
                'QTUTi': _0x58d3fa(0x599, 'Tx3e'),
                'HZZwq': _0x58d3fa(0x2c8, 'Bu2E'),
                'AXtjd': function(_0x186ebb, _0x1d75f0) {
                    return _0x186ebb == _0x1d75f0;
                },
                'sljyh': function(_0x43a0eb, _0x3a7760) {
                    return _0x43a0eb < _0x3a7760;
                },
                'NsZfX': _0x58d3fa(0x5ac, '^$ND'),
                'huOlp': _0x58d3fa(0x932, 'JZxU'),
                'zaZge': 'TXWHc',
                'IRgaf': function(_0x4a075f, _0x6572b5) {
                    return _0x4a075f(_0x6572b5);
                },
                'JcTuU': function(_0x4ee348, _0x2bf33a) {
                    return _0x4ee348 !== _0x2bf33a;
                },
                'Elrfd': _0x58d3fa(0x32b, '9Ir0'),
                'LRWjk': function(_0x159c8d) {
                    return _0x159c8d();
                },
                'ajtpg': _0x58d3fa(0x600, '#2Hi'),
                'QqrIB': _0x58d3fa(0x623, 'Mt$M')
            };
        return new Promise(_0x45d16e => {
            const _0x5016ea = _0x58d3fa;
            let _0x1fea7d = {
                'url': 'https://minigame5-normal-lq.zijieapi.com/ttgame/orchard_melon/tasks/list?' + this['ck'][0x0],
                'headers': {
                    'Host': _0x5d4fd3['ajtpg'],
                    'Connection': _0x5d4fd3[_0x5016ea(0x20a, '&[MC')],
                    'Content-Type': _0x5016ea(0x8db, 'ev8C'),
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                },
                'body': '{}'
            };
            $[_0x5016ea(0x1f4, 'r2Oj')](_0x1fea7d, async(_0x2ab005, _0x15b4e1, _0x453446) => {
                const _0xc046e5 = _0x5016ea;
                try {
                    if (_0x2ab005) $[_0xc046e5(0x8df, 'Bu2E')](_0x2ab005);
                    else {
                        if (_0x5d4fd3['QTUTi'] !== _0x5d4fd3[_0xc046e5(0x5f9, 'ksby')]) {
                            let _0x1aa35e = JSON[_0xc046e5(0x52c, 'JZxU')](_0x453446);
                            if (_0x5d4fd3[_0xc046e5(0xa77, '9wX]')](_0x1aa35e[_0xc046e5(0x25e, 'Tx3e')], 0x0)) {
                                let _0x1e1432 = JSON[_0xc046e5(0x982, '#2Hi')](_0x1aa35e[_0xc046e5(0x648, 'QGOg')]);
                                if (_0x1e1432['tasks'] && Array[_0xc046e5(0x25b, 'vvN[')](_0x1e1432[_0xc046e5(0x2ba, 'WXl3')]))
                                    for (let _0x1994a2 = 0x0; _0x5d4fd3['sljyh'](_0x1994a2, _0x1e1432[_0xc046e5(0x43a, 'Zw8m')][_0xc046e5(0x6c0, '^8@B')]); _0x1994a2++) {
                                        let _0x18b0be = _0x1e1432[_0xc046e5(0x583, 'ev8C')][_0x1994a2];
                                        _0x5d4fd3[_0xc046e5(0x97a, '##))')](_0x18b0be['id'], 0x2) && (_0x18b0be['rounds'] == _0x18b0be[_0xc046e5(0x1e9, '9iq9')] ? _0x5d4fd3['NsZfX'] === 'ckyWy' ? _0x1e3aca() : DoubleLog(_0xc046e5(0x796, '9wX]') + this[_0xc046e5(0x659, 'Zw8m')] + _0xc046e5(0x268, 'W6*u')) : await this[_0xc046e5(0x80e, 'Mt$M')](0x2 * 0x3e8));
                                    }
                            } else _0x5d4fd3[_0xc046e5(0x3e4, '2(N#')] !== _0x5d4fd3['zaZge'] ? _0x5d4fd3[_0xc046e5(0x48f, 'm#vA')](DoubleLog, _0xc046e5(0x399, 'ygf[') + this[_0xc046e5(0x92f, '^H2k')] + _0xc046e5(0x471, 'Yo*r') + _0x1aa35e[_0xc046e5(0x20f, '&[MC')]) : _0x11aa74(_0xc046e5(0x8f2, '#yB#') + this[_0xc046e5(0x68d, '##))')] + _0xc046e5(0x898, '^8@B') + _0x2765e7[_0xc046e5(0x193, 'A]*R')] + _0xc046e5(0x816, ')3Og'));
                        } else _0x3a3d3f['logErr'](_0x584508, _0x1d7232);
                    }
                } catch (_0x38d7d1) {
                    _0x5d4fd3['JcTuU'](_0x5d4fd3[_0xc046e5(0x56e, 'r2Oj')], 'euuaT') ? $['logErr'](_0x38d7d1, _0x15b4e1) : _0x3f4180[_0xc046e5(0x2f9, 'K7Hk')](_0x171e20);
                } finally {
                    _0x5d4fd3[_0xc046e5(0x48b, 'UC%d')](_0x45d16e);
                }
            }, _0xcdbf45);
        });
    }
    async['open_egggift'](_0x196fdc = 0x7d0) {
        const _0x5b3989 = _0xa91301,
            _0x5d82bd = {
                'PUAme': function(_0x71f47e, _0x3bc11a) {
                    return _0x71f47e === _0x3bc11a;
                },
                'IwakO': _0x5b3989(0x8fb, 'K7Hk'),
                'ojNkZ': function(_0x314220, _0x10f1d7) {
                    return _0x314220(_0x10f1d7);
                },
                'writp': function(_0x49f5c5, _0x386f94) {
                    return _0x49f5c5(_0x386f94);
                },
                'UixML': function(_0x4b80cf, _0x45cf8e) {
                    return _0x4b80cf !== _0x45cf8e;
                },
                'oetYu': 'lNlHG',
                'qUJaq': _0x5b3989(0x536, ')3Og'),
                'zWZdB': function(_0x1732cd) {
                    return _0x1732cd();
                },
                'fjZtu': function(_0x1b00e3, _0x40b2ee) {
                    return _0x1b00e3 === _0x40b2ee;
                },
                'Fgigq': 'rOOlh',
                'xnOUA': _0x5b3989(0x523, 'WXl3'),
                'oWpHX': _0x5b3989(0x250, 'vvN['),
                'XxTqj': _0x5b3989(0x610, 'WaIa')
            };
        return new Promise(_0x4fdf32 => {
            const _0xa001d9 = _0x5b3989,
                _0x5bac4e = {
                    'Bcpje': function(_0x3a92cc) {
                        const _0x1ea08c = _0x3899;
                        return _0x5d82bd[_0x1ea08c(0x791, 'JZxU')](_0x3a92cc);
                    },
                    'ngXLC': function(_0x265f95, _0x4e105d) {
                        const _0x16299d = _0x3899;
                        return _0x5d82bd[_0x16299d(0x68e, 'uvdB')](_0x265f95, _0x4e105d);
                    }
                };
            if (_0x5d82bd[_0xa001d9(0x4ff, '7htc')](_0x5d82bd['Fgigq'], _0x5d82bd['xnOUA'])) _0x5bac4e[_0xa001d9(0x6a3, '9iq9')](_0x31bd13);
            else {
                let _0x384db8 = {
                    'url': 'https://minigame5-normal-lq.zijieapi.com/ttgame/orchard_melon/tasks/reward?' + this['ck'][0x0],
                    'headers': {
                        'Host': _0x5d82bd[_0xa001d9(0xa70, 'Y^n*')],
                        'Connection': _0xa001d9(0xa35, 'L%wM'),
                        'Content-Type': _0x5d82bd[_0xa001d9(0x983, '^ut3')],
                        'User-Agent': this['ck'][0x4],
                        'Cookie': this['ck'][0x1],
                        'x-argus': this['ck'][0x2],
                        'x-ladon': this['ck'][0x3]
                    },
                    'body': '{"do_action":1,"extra_ad_num":0,"task_id":"2","version":18}'
                };
                $['post'](_0x384db8, async(_0x515c66, _0x2579f5, _0x419883) => {
                    const _0x189abd = _0xa001d9;
                    try {
                        if (_0x189abd(0x374, 'WaIa') !== _0x189abd(0x151, '!y(t')) {
                            if (_0x515c66) _0x5d82bd[_0x189abd(0xa6c, '3!Dt')](_0x189abd(0x935, 'uvdB'), _0x5d82bd['IwakO']) ? $[_0x189abd(0x456, 'Tx3e')](_0x515c66) : _0x5bac4e[_0x189abd(0x54c, 'Ato%')](_0x9ab8d1, _0x189abd(0x579, 'Mt$M') + this['index'] + '】打开宝箱: 获得 ' + _0x1f38f0['data']['amount'] + _0x189abd(0x256, 'Y^n*'));
                            else {
                                let _0x5a15b8 = JSON[_0x189abd(0x97b, '^H2k')](_0x419883);
                                _0x5a15b8['code'] == 0x0 ? _0x5d82bd[_0x189abd(0x3b6, 'ev8C')](DoubleLog, '
 ✅ 【' + this[_0x189abd(0x659, 'Zw8m')] + '】视频信息: 获得 30 水滴') : _0x5d82bd[_0x189abd(0x4d4, '#2Hi')](DoubleLog, _0x189abd(0x1da, '^ut3') + this['index'] + '】视频领水: ' + _0x5a15b8[_0x189abd(0x1cd, 'A]*R')]);
                            }
                        } else _0x5bac4e[_0x189abd(0x307, ')3Og')](_0xcb1a15);
                    } catch (_0x1ee915) {
                        _0x5d82bd[_0x189abd(0x39d, 'vvN[')](_0x5d82bd[_0x189abd(0x9eb, '^8@B')], _0x5d82bd[_0x189abd(0x744, 'A]*R')]) ? $[_0x189abd(0x2e5, 'Yo*r')](_0x1ee915, _0x2579f5) : _0x5738fd(_0x189abd(0x35e, 'W#uE') + this['index'] + _0x189abd(0x63e, '9wX]') + _0xb68794[_0x189abd(0x6cb, 'UC%d')]);
                    } finally {
                        _0x5d82bd['zWZdB'](_0x4fdf32);
                    }
                }, _0x196fdc);
            }
        });
    }
    async['doublefirst'](_0x44aea6 = 0x7d0) {
        const _0x5ae1e9 = _0xa91301,
            _0x3d670e = {
                'LFtxV': _0x5ae1e9(0x9de, '#yB#'),
                'aqnoE': function(_0x115d2e, _0x14f6c1) {
                    return _0x115d2e * _0x14f6c1;
                },
                'Lrfgp': function(_0x1b2761, _0x54fefb) {
                    return _0x1b2761(_0x54fefb);
                },
                'SEYpD': function(_0x5e2475, _0x3e87f3) {
                    return _0x5e2475 == _0x3e87f3;
                },
                'QnoOW': 'HhUVP',
                'PIUuk': _0x5ae1e9(0x157, '9Ir0'),
                'eytUr': function(_0x773915, _0x306fb5) {
                    return _0x773915 !== _0x306fb5;
                },
                'jFjWc': function(_0x5d7e79, _0x408883) {
                    return _0x5d7e79 == _0x408883;
                },
                'vfkBu': function(_0x58c88b, _0x1bac3e) {
                    return _0x58c88b !== _0x1bac3e;
                },
                'mevBj': _0x5ae1e9(0x77f, 'Yo*r'),
                'clozo': 'FneiN',
                'rWLwW': function(_0x175f59, _0x2f33ab) {
                    return _0x175f59 !== _0x2f33ab;
                },
                'VLxAk': _0x5ae1e9(0x8e8, 'L%wM'),
                'Xkgqm': function(_0x785a0f, _0x24cea4) {
                    return _0x785a0f === _0x24cea4;
                },
                'ceaLu': _0x5ae1e9(0x817, 'WqE!'),
                'PtpLK': _0x5ae1e9(0x89c, ')3Og'),
                'fyPSt': function(_0x235aa8) {
                    return _0x235aa8();
                },
                'FMiut': 'GNOWL',
                'BnNix': _0x5ae1e9(0x46b, 'L%wM'),
                'BEiPg': _0x5ae1e9(0x8ca, 'Bu2E'),
                'LRUyb': _0x5ae1e9(0x7df, 'UC%d')
            };
        return new Promise(_0x217591 => {
            const _0x5f27ab = _0x5ae1e9,
                _0x32e04f = {
                    'BMryU': function(_0x2ad86a, _0x1a4e86) {
                        return _0x2ad86a || _0x1a4e86;
                    },
                    'berKJ': _0x3d670e['LFtxV'],
                    'UeZYi': function(_0x1e1863, _0x1bb65b) {
                        return _0x1e1863 < _0x1bb65b;
                    },
                    'ltBaB': function(_0x2d1717, _0x2439fb) {
                        return _0x3d670e['aqnoE'](_0x2d1717, _0x2439fb);
                    },
                    'lJmZF': function(_0x3244d6, _0x1fdb1a) {
                        const _0x46e176 = _0x3899;
                        return _0x3d670e[_0x46e176(0x3d8, 'fhKC')](_0x3244d6, _0x1fdb1a);
                    },
                    'qKkVs': function(_0x3a4ffa, _0x489626) {
                        const _0x482ba0 = _0x3899;
                        return _0x3d670e[_0x482ba0(0x2c0, '3!Dt')](_0x3a4ffa, _0x489626);
                    },
                    'xglKN': _0x3d670e[_0x5f27ab(0x6e2, '9iq9')],
                    'jrLmB': _0x3d670e[_0x5f27ab(0x273, '!y(t')],
                    'LNeys': function(_0xb6d3db, _0x19a466) {
                        const _0x3cc509 = _0x5f27ab;
                        return _0x3d670e[_0x3cc509(0x6c9, 'm#vA')](_0xb6d3db, _0x19a466);
                    },
                    'pTeYA': 'lEPeU',
                    'KfjBN': _0x5f27ab(0x3ca, 'A]*R'),
                    'sYGXQ': _0x5f27ab(0xa2f, 'z9*t'),
                    'devTo': function(_0x3b8b03, _0x46458d) {
                        const _0x43d323 = _0x5f27ab;
                        return _0x3d670e[_0x43d323(0x7b5, '6GlL')](_0x3b8b03, _0x46458d);
                    },
                    'NxHpw': function(_0x218503, _0x58edb2) {
                        return _0x218503 < _0x58edb2;
                    },
                    'fmQvg': function(_0x3aad30, _0x33ae87) {
                        return _0x3d670e['vfkBu'](_0x3aad30, _0x33ae87);
                    },
                    'fyQnM': _0x5f27ab(0xa9e, 'z9*t'),
                    'tHXRu': _0x3d670e[_0x5f27ab(0x593, 'Yo*r')],
                    'fajTA': function(_0x177561, _0x1a43b6) {
                        return _0x177561(_0x1a43b6);
                    },
                    'uYPwp': _0x3d670e[_0x5f27ab(0x8bc, ')3Og')],
                    'mScnN': function(_0x116cd9, _0x5921f6) {
                        const _0x3145e8 = _0x5f27ab;
                        return _0x3d670e[_0x3145e8(0xa8e, 'Mt$M')](_0x116cd9, _0x5921f6);
                    },
                    'SvXBz': 'ARGxz',
                    'KBjcl': _0x3d670e[_0x5f27ab(0x44e, 'Ato%')],
                    'xKfpW': function(_0x49078c, _0x4f8fd0) {
                        return _0x49078c(_0x4f8fd0);
                    },
                    'AlQCV': function(_0x39afeb, _0x569549) {
                        const _0x57aff3 = _0x5f27ab;
                        return _0x3d670e[_0x57aff3(0x630, '@m24')](_0x39afeb, _0x569549);
                    },
                    'ILnqi': _0x3d670e[_0x5f27ab(0x253, 'MyTQ')],
                    'vbRDK': _0x3d670e[_0x5f27ab(0x272, 'W#uE')],
                    'MPYGV': function(_0x33d127) {
                        const _0x4516ca = _0x5f27ab;
                        return _0x3d670e[_0x4516ca(0x8a6, 'MyTQ')](_0x33d127);
                    }
                };
            if (_0x5f27ab(0x264, 'qmDl') !== _0x3d670e['FMiut']) {
                let _0x238f3c = {
                    'url': _0x5f27ab(0x860, 'm#vA') + this['ck'][0x0],
                    'headers': {
                        'Host': _0x3d670e['BnNix'],
                        'Connection': _0x3d670e[_0x5f27ab(0x2df, 'WaIa')],
                        'Content-Type': _0x3d670e['LRUyb'],
                        'User-Agent': this['ck'][0x4],
                        'Cookie': this['ck'][0x1],
                        'x-argus': this['ck'][0x2],
                        'x-ladon': this['ck'][0x3]
                    },
                    'body': '{}'
                };
                $[_0x5f27ab(0x7d4, 'z9*t')](_0x238f3c, async(_0x303065, _0x4ff97f, _0x570ccb) => {
                    const _0x5b388c = _0x5f27ab,
                        _0x125206 = {
                            'hVycl': function(_0x45dc7e, _0x560a7f) {
                                return _0x32e04f['qKkVs'](_0x45dc7e, _0x560a7f);
                            },
                            'lExYx': function(_0x60bf74, _0x5d114f) {
                                return _0x60bf74(_0x5d114f);
                            }
                        };
                    try {
                        if (_0x32e04f['xglKN'] === _0x32e04f['jrLmB']) {
                            _0x2e943a = _0x32e04f[_0x5b388c(0xa7d, 'K7Hk')](_0x3e6648, 0x20);
                            var _0x1f56d5 = _0x32e04f['berKJ'],
                                _0x493b81 = _0x1f56d5[_0x5b388c(0x9dc, 'QGOg')],
                                _0xc2d5a7 = '';
                            for (_0x56e5c6 = 0x0; _0x32e04f[_0x5b388c(0x4a9, 'K7Hk')](_0x5eaa8d, _0x24f8c4); _0x17b41a++) _0xc2d5a7 += _0x1f56d5['charAt'](_0x4fb506['floor'](_0x32e04f[_0x5b388c(0x396, 'z9*t')](_0x52370c[_0x5b388c(0x627, '3!Dt')](), _0x493b81)));
                            return _0xc2d5a7;
                        } else {
                            if (_0x303065) _0x32e04f['LNeys'](_0x32e04f[_0x5b388c(0x626, '!y(t')], _0x32e04f[_0x5b388c(0x2b6, '9Ir0')]) ? $[_0x5b388c(0x18d, 'Zw8m')](_0x303065) : _0x12696e();
                            else {
                                if (_0x32e04f[_0x5b388c(0x21c, 'WqE!')] !== _0x5b388c(0x909, '&[MC')) _0x32e04f['lJmZF'](_0x506c98, _0x5b388c(0x3b1, 'W6*u') + this['index'] + _0x5b388c(0x529, 'fhKC') + _0x1e42ea[_0x5b388c(0x466, '9iq9')]);
                                else {
                                    let _0x205b03 = JSON[_0x5b388c(0xa5d, 'm#vA')](_0x570ccb);
                                    if (_0x32e04f['devTo'](_0x205b03[_0x5b388c(0x472, '3!Dt')], 0x0)) {
                                        let _0x4f4291 = JSON[_0x5b388c(0x323, 'QGOg')](_0x205b03[_0x5b388c(0x5f6, 'Bu2E')]);
                                        if (_0x4f4291['tasks'] && Array[_0x5b388c(0x430, 'WaIa')](_0x4f4291[_0x5b388c(0xa58, 'Bu2E')]))
                                            for (let _0x5a7369 = 0x0; _0x32e04f[_0x5b388c(0x43f, 'r2Oj')](_0x5a7369, _0x4f4291[_0x5b388c(0x293, '^H2k')][_0x5b388c(0x769, 'W6*u')]); _0x5a7369++) {
                                                let _0x3dea55 = _0x4f4291[_0x5b388c(0x688, 'uvdB')][_0x5a7369];
                                                _0x32e04f[_0x5b388c(0x6c2, 'ev8C')](_0x3dea55['id'], 0x1) && (_0x32e04f[_0x5b388c(0x984, '@m24')](_0x32e04f[_0x5b388c(0xa5b, 'MyTQ')], _0x32e04f[_0x5b388c(0x6c5, 'qmDl')]) ? _0x3dea55['rounds'] == _0x3dea55[_0x5b388c(0x977, ')eXz')] ? _0x32e04f[_0x5b388c(0x7a2, '7htc')](DoubleLog, '
 ❌ 【' + this['index'] + _0x5b388c(0x5a5, 'vvN[')) : 'rRDkw' !== _0x32e04f[_0x5b388c(0x76c, '9iq9')] ? await this[_0x5b388c(0x8ab, 'L%wM')](_0x32e04f[_0x5b388c(0x95b, 'uvdB')](0x2, 0x3e8)) : _0x401e32[_0x5b388c(0x486, 'qmDl')](_0x3d719a, _0x3d50ba) : _0x278797['logErr'](_0x429686, _0x4f4045));
                                            }
                                    } else _0x32e04f[_0x5b388c(0x4d5, 'ev8C')](_0x32e04f['SvXBz'], _0x32e04f['KBjcl']) ? _0x32e04f[_0x5b388c(0x4c7, 'W#uE')](DoubleLog, '
 ❌ 【' + this['index'] + _0x5b388c(0x54a, 'WaIa') + _0x205b03[_0x5b388c(0x6df, '#yB#')]) : _0x1ec7fc[_0x5b388c(0x621, 'fhKC')](_0x3587c5);
                                }
                            }
                        }
                    } catch (_0x4e4ea3) {
                        $[_0x5b388c(0x196, '7htc')](_0x4e4ea3, _0x4ff97f);
                    } finally {
                        if (_0x32e04f[_0x5b388c(0x32f, 'QGOg')](_0x32e04f['ILnqi'], _0x32e04f[_0x5b388c(0x9fe, 'UC%d')])) {
                            let _0x2db8e1 = _0x53410d[_0x5b388c(0x97b, '^H2k')](_0x5d5ea0);
                            _0x125206['hVycl'](_0x2db8e1[_0x5b388c(0xaa2, 'R$sB')], 0x0) ? _0x125206['lExYx'](_0x500ee5, _0x5b388c(0xa90, 'A]*R') + this[_0x5b388c(0x659, 'Zw8m')] + _0x5b388c(0x423, 'qmDl') + _0x2db8e1[_0x5b388c(0x5eb, '3!Dt')][_0x5b388c(0x375, '9wX]')] + _0x5b388c(0xa09, '2(N#')) : _0x125206['lExYx'](_0x3d98ba, _0x5b388c(0x78e, 'uvdB') + this['index'] + _0x5b388c(0x670, 'WXl3') + _0x2db8e1['message']);
                        } else _0x32e04f[_0x5b388c(0x8aa, '7htc')](_0x217591);
                    }
                }, _0x44aea6);
            } else _0x32e04f['lJmZF'](_0x2bae4f, '
 ❌ 【' + this[_0x5f27ab(0x265, '6GlL')] + _0x5f27ab(0x658, '7htc') + _0x5add2b['daily_max_count'] + _0x5f27ab(0x1f6, 'A]*R') + _0x19c71b[_0x5f27ab(0x96f, 'JZxU')] + '/' + _0x5e92f1[_0x5f27ab(0x17a, '@m24')] + ' 次');
        });
    }
    async[_0xa91301(0x9bf, 'WqE!')](_0x589168 = 0x7d0) {
        const _0x3eee05 = _0xa91301,
            _0x3b737e = {
                'DoaRE': function(_0x51755d, _0x1934f8) {
                    return _0x51755d(_0x1934f8);
                },
                'lobFv': function(_0x18a453, _0x3a9a83) {
                    return _0x18a453 == _0x3a9a83;
                },
                'wExwX': _0x3eee05(0x46e, 'Mt$M'),
                'HKEHi': _0x3eee05(0x481, 'Yo*r'),
                'lsizx': function(_0x45bef1, _0x3c762b) {
                    return _0x45bef1 === _0x3c762b;
                },
                'SFwMg': _0x3eee05(0x72c, 'WaIa'),
                'rkjbu': _0x3eee05(0x3a4, 'Bu2E'),
                'rIKeP': 'IfXLC',
                'pBkjl': _0x3eee05(0x6fa, '2(N#')
            };
        return new Promise(_0x558886 => {
            const _0x1ceb36 = _0x3eee05,
                _0x2d3e3e = {
                    'aWqVb': function(_0x4745a4, _0x2a6c54) {
                        return _0x3b737e['DoaRE'](_0x4745a4, _0x2a6c54);
                    },
                    'PNCYW': function(_0x428e38, _0x2034b4) {
                        return _0x3b737e['lobFv'](_0x428e38, _0x2034b4);
                    },
                    'CcpSQ': _0x3b737e[_0x1ceb36(0x392, 'MyTQ')],
                    'WtGuP': _0x3b737e[_0x1ceb36(0x2e1, 'r2Oj')],
                    'tnNqA': function(_0x19ea2a, _0x34fe0a) {
                        const _0xfbfa80 = _0x1ceb36;
                        return _0x3b737e[_0xfbfa80(0x9a8, 'vvN[')](_0x19ea2a, _0x34fe0a);
                    },
                    'KOjUK': function(_0x3eccf6, _0x4223f7) {
                        return _0x3b737e['lsizx'](_0x3eccf6, _0x4223f7);
                    },
                    'lhpmR': _0x3b737e['SFwMg'],
                    'VFpgG': _0x3b737e[_0x1ceb36(0x207, 'WqE!')]
                };
            if ('IfXLC' === _0x3b737e[_0x1ceb36(0x5fd, 'UC%d')]) {
                let _0x44cb99 = {
                    'url': _0x1ceb36(0xa67, 'WaIa') + this['ck'][0x0],
                    'headers': {
                        'Host': _0x1ceb36(0x5b6, 'WqE!'),
                        'Connection': _0x3b737e[_0x1ceb36(0x971, '6GlL')],
                        'Content-Type': _0x1ceb36(0x36b, 'ksby'),
                        'User-Agent': this['ck'][0x4],
                        'Cookie': this['ck'][0x1],
                        'x-argus': this['ck'][0x2],
                        'x-ladon': this['ck'][0x3]
                    },
                    'body': '{"do_action":0,"extra_ad_num":0,"task_id":"1","version":18}'
                };
                $[_0x1ceb36(0x64c, '!y(t')](_0x44cb99, async(_0xdee805, _0x5b88a3, _0x2eac22) => {
                    const _0xe243ba = _0x1ceb36;
                    try {
                        if (_0xdee805) $['logErr'](_0xdee805);
                        else {
                            let _0x11ac05 = JSON[_0xe243ba(0x845, '#yB#')](_0x2eac22);
                            _0x2d3e3e[_0xe243ba(0x351, 'uvdB')](_0x11ac05['code'], 0x0) ? _0x2d3e3e[_0xe243ba(0x277, '@m24')] !== _0x2d3e3e['WtGuP'] ? _0x2d3e3e[_0xe243ba(0x3e3, 'ev8C')](DoubleLog, _0xe243ba(0x489, '&[MC') + this[_0xe243ba(0x93b, '#yB#')] + '】免费领水: 获得 10 水滴') : _0x229b6f[_0xe243ba(0xa1e, ')3Og')](_0x2f4dcb) : _0x2d3e3e[_0xe243ba(0x7b4, 'WqE!')](DoubleLog, _0xe243ba(0x639, '^H2k') + this['index'] + '】免费领水: ' + _0x11ac05[_0xe243ba(0x60f, '^H2k')]);
                        }
                    } catch (_0x4a29e5) {
                        _0x2d3e3e[_0xe243ba(0x3fd, 'qmDl')](_0x2d3e3e[_0xe243ba(0x37a, 'QGOg')], _0x2d3e3e[_0xe243ba(0x7c8, ')eXz')]) ? $[_0xe243ba(0x204, 'uvdB')](_0x4a29e5, _0x5b88a3) : _0x2d3e3e[_0xe243ba(0x5cd, 'WXl3')](_0x3973e1, _0xe243ba(0x544, 'ksby') + this[_0xe243ba(0xa57, 'R$sB')] + _0xe243ba(0x929, 'QGOg') + _0x5bc434[_0xe243ba(0x8cb, '#2Hi')]);
                    } finally {
                        _0x2d3e3e[_0xe243ba(0x1f8, 'K7Hk')] === _0x2d3e3e[_0xe243ba(0x578, 'UC%d')] ? _0x558886() : _0x2d3e3e['aWqVb'](_0x4a9d1e, _0xe243ba(0x2fe, '!y(t') + this[_0xe243ba(0x265, '6GlL')] + _0xe243ba(0x298, '#yB#') + _0x4b3af7[_0xe243ba(0x605, '@m24')]);
                    }
                }, _0x589168);
            } else _0x22d2f1[_0x1ceb36(0x31d, 'ksby')](_0x3fcbcc);
        });
    }
    async[_0xa91301(0xaac, '9iq9')](_0x4e25f5 = 0x7d0) {
        const _0x5c66dc = _0xa91301,
            _0x874d45 = {
                'rxjlI': function(_0x1c9e00) {
                    return _0x1c9e00();
                },
                'CyILq': function(_0x56efcb, _0x2fa193) {
                    return _0x56efcb !== _0x2fa193;
                },
                'VFbac': _0x5c66dc(0x515, '@m24'),
                'iGPSK': 'XdbpK',
                'VORnb': function(_0x1b0953, _0x1ffe96) {
                    return _0x1b0953(_0x1ffe96);
                },
                'atMRA': function(_0x34ce6a, _0x4de000) {
                    return _0x34ce6a === _0x4de000;
                },
                'CItYS': _0x5c66dc(0x8c0, '9Ir0'),
                'uVALq': 'Keep-Alive',
                'dZObS': _0x5c66dc(0x7df, 'UC%d')
            };
        return new Promise(_0x411a79 => {
            const _0x2b38d9 = _0x5c66dc,
                _0x5bde1b = {
                    'EfBsh': function(_0x315c8f) {
                        return _0x874d45['rxjlI'](_0x315c8f);
                    },
                    'vDWth': function(_0x57eb95, _0x177621) {
                        return _0x874d45['CyILq'](_0x57eb95, _0x177621);
                    },
                    'HoUNY': _0x874d45[_0x2b38d9(0x369, 'UC%d')],
                    'FmMAN': _0x874d45['iGPSK'],
                    'uHVBe': function(_0x21d1a6, _0xddc6cb) {
                        return _0x21d1a6 == _0xddc6cb;
                    },
                    'IBErH': function(_0x2e409c, _0x4e01a6) {
                        return _0x874d45['VORnb'](_0x2e409c, _0x4e01a6);
                    },
                    'yocfF': function(_0x26b179, _0x1f1abc) {
                        const _0x374618 = _0x2b38d9;
                        return _0x874d45[_0x374618(0x432, '#2Hi')](_0x26b179, _0x1f1abc);
                    },
                    'faKqn': _0x874d45[_0x2b38d9(0x5dc, 'W#uE')]
                };
            let _0x5ce9a1 = {
                'url': _0x2b38d9(0x159, '^H2k') + this['ck'][0x0],
                'headers': {
                    'Host': _0x2b38d9(0x635, 'ksby'),
                    'Connection': _0x874d45[_0x2b38d9(0x90b, 'ygf[')],
                    'Content-Type': _0x874d45[_0x2b38d9(0x21a, 'z9*t')],
                    'User-Agent': this['ck'][0x4],
                    'Cookie': this['ck'][0x1],
                    'x-argus': this['ck'][0x2],
                    'x-ladon': this['ck'][0x3]
                },
                'body': '{}'
            };
            $[_0x2b38d9(0x1ef, '7htc')](_0x5ce9a1, async(_0x1140f9, _0x26e764, _0x5dfa2d) => {
                const _0xa1ebd3 = _0x2b38d9,
                    _0x1317a2 = {
                        'yImVD': function(_0x3f5be2, _0x74c879) {
                            return _0x3f5be2(_0x74c879);
                        }
                    };
                try {
                    if (_0x5bde1b[_0xa1ebd3(0x71e, 'UC%d')]('KIwpS', _0x5bde1b['HoUNY'])) _0x4db73d[_0xa1ebd3(0x408, '9Ir0')](_0x5b077b, _0x24ca29);
                    else {
                        if (_0x1140f9) $[_0xa1ebd3(0x517, '@m24')](_0x1140f9);
                        else {
                            if (_0x5bde1b[_0xa1ebd3(0x734, '@m24')] === _0x5bde1b[_0xa1ebd3(0x557, ']A!w')]) {
                                let _0x787b63 = JSON[_0xa1ebd3(0x2d0, 'WXl3')](_0x5dfa2d);
                                _0x5bde1b[_0xa1ebd3(0x216, 'z9*t')](_0x787b63[_0xa1ebd3(0x4c2, '#2Hi')], 0x0) ? _0x5bde1b['IBErH'](DoubleLog, _0xa1ebd3(0x96e, 'Zw8m') + this[_0xa1ebd3(0x68d, '##))')] + _0xa1ebd3(0x586, 'W#uE')) : DoubleLog(_0xa1ebd3(0x26c, 'MyTQ') + this['index'] + '】每日领水: ' + _0x787b63['message']);
                            } else _0x1317a2[_0xa1ebd3(0x75b, '9iq9')](_0x3547d1, _0xa1ebd3(0x360, '&[MC') + this['index'] + _0xa1ebd3(0x6c7, 'WXl3') + _0x2d825d[_0xa1ebd3(0x5e9, 'm#vA')][_0xa1ebd3(0x934, 'WqE!')][_0xa1ebd3(0x6ee, 'R$sB')] + _0xa1ebd3(0x815, 'ygf['));
                        }
                    }
                } catch (_0x1cba85) {
                    _0x5bde1b[_0xa1ebd3(0x771, 'Tx3e')](_0x5bde1b['faKqn'], 'RvYDQ') ? $['logErr'](_0x1cba85, _0x26e764) : _0x5bde1b[_0xa1ebd3(0x4f0, 'WaIa')](_0x30671f);
                } finally {
                    _0x5bde1b['EfBsh'](_0x411a79);
                }
            }, _0x4e25f5);
        });
    }
    async[_0xa91301(0x7cc, ')3Og')](_0x504234 = 0x7d0) {
        const _0x4988a4 = _0xa91301,
            _0x23f9dc = {
                'PSqCR': function(_0x583e1e, _0x30d8a7) {
                    return _0x583e1e(_0x30d8a7);
                },
                'Wydny': function(_0x207ddd, _0x1f49bd) {
                    return _0x207ddd === _0x1f49bd;
                },
                'zTrAf': _0x4988a4(0x7c0, '##))'),
                'HqZpH': _0x4988a4(0x6ed, '9wX]'),
                'IPkOF': 'YlIoH',
                'rrNdR': function(_0x329e15, _0x441e04) {
                    return _0x329e15 !== _0x441e04;
                },
                'SImxF': 'AQzJa',
                'nDnSN': _0x4988a4(0x46c, 'JZxU')
            };
        return new Promise(_0x392f48 => {
            const _0x53b384 = _0x4988a4,
                _0x49c9f7 = {
                    'yCRRy': function(_0x2e2e21, _0x12d0b9) {
                        const _0x305ab1 = _0x3899;
                        return _0x23f9dc[_0x305ab1(0x8f6, ')3Og')](_0x2e2e21, _0x12d0b9);
                    },
                    'LdGZd': function(_0x1d3b2e, _0x409b89) {
                        return _0x23f9dc['Wydny'](_0x1d3b2e, _0x409b89);
                    },
                    'CGMgI': _0x23f9dc[_0x53b384(0x95a, 'L%wM')],
                    'XRztq': _0x53b384(0x6d8, 'qmDl'),
                    'RfZIw': _0x23f9dc[_0x53b384(0x7d5, '#2Hi')],
                    'qnyoc': function(_0x78d3ba, _0x46c67b) {
                        return _0x23f9dc['PSqCR'](_0x78d3ba, _0x46c67b);
                    },
                    'JlPOn': _0x23f9dc[_0x53b384(0x95f, '^8@B')],
                    'QvqTY': function(_0x2c7467) {
                        return _0x2c7467();
                    }
                };
            if (_0x23f9dc['rrNdR'](_0x23f9dc['SImxF'], _0x23f9dc[_0x53b384(0x483, 'K7Hk')])) _0x49c9f7[_0x53b384(0x47c, 'R$sB')](_0xf1a508, '
 ❌ 【' + this[_0x53b384(0x395, 'vvN[')] + '】激励广告: ' + _0x39660a[_0x53b384(0x235, '2(N#')]);
            else {
                let _0x5862e8 = {
                    'url': _0x53b384(0x66e, 'z9*t') + this['ck'][0x0],
                    'headers': {
                        'Host': _0x23f9dc[_0x53b384(0x752, 'L%wM')],
                        'Connection': 'Keep-Alive',
                        'Content-Type': 'application/json; charset=utf-8',
                        'User-Agent': this['ck'][0x4],
                        'Cookie': this['ck'][0x1],
                        'x-argus': this['ck'][0x2],
                        'x-ladon': this['ck'][0x3]
                    },
                    'body': '{}'
                };
                $['post'](_0x5862e8, async(_0x1ad2cf, _0xd0713f, _0x1845a4) => {
                    const _0x1c14b1 = _0x53b384;
                    try {
                        if (_0x49c9f7['LdGZd'](_0x49c9f7[_0x1c14b1(0x23b, 'WXl3')], _0x49c9f7[_0x1c14b1(0xa0a, 'ygf[')])) _0x49c9f7['yCRRy'](_0x2ba460, '
 ❌ 【' + this['index'] + '】吃饭打卡: 该时间段不在指定任务当中');
                        else {
                            if (_0x1ad2cf) _0x1c14b1(0x7fa, 'Bu2E') !== _0x1c14b1(0x7f3, 'ygf[') ? $[_0x1c14b1(0x73e, 'MyTQ')](_0x1ad2cf) : (this['index'] = ++_0x4264a5, this['ck'] = _0x3e5d5f[_0x1c14b1(0x498, '^8@B')]('#'));
                            else {
                                if (_0x49c9f7[_0x1c14b1(0x4ea, '^ut3')](_0x1c14b1(0x2da, 'ev8C'), _0x49c9f7[_0x1c14b1(0x9da, '2(N#')])) _0x5c9151[_0x1c14b1(0x18f, 'A]*R')](_0x38f69d, _0x257a01);
                                else {
                                    let _0x49d939 = JSON['parse'](_0x1845a4);
                                    if (_0x49d939['code'] == 0x0) {} else _0x49c9f7[_0x1c14b1(0xa08, '#yB#')](DoubleLog, _0x1c14b1(0x544, 'ksby') + this['index'] + _0x1c14b1(0x418, 'Y^n*') + _0x49d939[_0x1c14b1(0xa12, 'r2Oj')]);
                                }
                            }
                        }
                    } catch (_0xdad87d) {
                        $[_0x1c14b1(0x3d9, '#yB#')](_0xdad87d, _0xd0713f);
                    } finally {
                        _0x49c9f7[_0x1c14b1(0x35c, 'Tx3e')](_0x49c9f7[_0x1c14b1(0x8b8, 'fhKC')], _0x49c9f7[_0x1c14b1(0x74e, '^ut3')]) ? _0x49c9f7['QvqTY'](_0x392f48) : _0x14ff61[_0x1c14b1(0x73e, 'MyTQ')](_0x2ee459, _0x37b1c3);
                    }
                }, _0x504234);
            }
        });
    }
}

function _0x3899(_0x29aa9f, _0x474e0) {
    const _0x1d3d60 = _0x1d3d();
    return _0x3899 = function(_0x389965, _0x13e945) {
        _0x389965 = _0x389965 - 0x14b;
        let _0x3be72f = _0x1d3d60[_0x389965];
        if (_0x3899['figKZt'] === undefined) {
            var _0x1ff80b = function(_0x55931a) {
                const _0x4264a5 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x3e5d5f = '',
                    _0x16dac1 = '';
                for (let _0x500ce0 = 0x0, _0x263d46, _0xd39774, _0x143841 = 0x0; _0xd39774 = _0x55931a['charAt'](_0x143841++); ~_0xd39774 && (_0x263d46 = _0x500ce0 % 0x4 ? _0x263d46 * 0x40 + _0xd39774 : _0xd39774, _0x500ce0++ % 0x4) ? _0x3e5d5f += String['fromCharCode'](0xff & _0x263d46 >> (-0x2 * _0x500ce0 & 0x6)) : 0x0) {
                    _0xd39774 = _0x4264a5['indexOf'](_0xd39774);
                }
                for (let _0xc4f515 = 0x0, _0x366355 = _0x3e5d5f['length']; _0xc4f515 < _0x366355; _0xc4f515++) {
                    _0x16dac1 += '%' + ('00' + _0x3e5d5f['charCodeAt'](_0xc4f515)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x16dac1);
            };
            const _0x5f3a20 = function(_0x2f5d33, _0x28a8b5) {
                let _0x547db3 = [],
                    _0xf89c39 = 0x0,
                    _0xee9b17, _0x1cc035 = '';
                _0x2f5d33 = _0x1ff80b(_0x2f5d33);
                let _0x540e7c;
                for (_0x540e7c = 0x0; _0x540e7c < 0x100; _0x540e7c++) {
                    _0x547db3[_0x540e7c] = _0x540e7c;
                }
                for (_0x540e7c = 0x0; _0x540e7c < 0x100; _0x540e7c++) {
                    _0xf89c39 = (_0xf89c39 + _0x547db3[_0x540e7c] + _0x28a8b5['charCodeAt'](_0x540e7c % _0x28a8b5['length'])) % 0x100, _0xee9b17 = _0x547db3[_0x540e7c], _0x547db3[_0x540e7c] = _0x547db3[_0xf89c39], _0x547db3[_0xf89c39] = _0xee9b17;
                }
                _0x540e7c = 0x0, _0xf89c39 = 0x0;
                for (let _0x554139 = 0x0; _0x554139 < _0x2f5d33['length']; _0x554139++) {
                    _0x540e7c = (_0x540e7c + 0x1) % 0x100, _0xf89c39 = (_0xf89c39 + _0x547db3[_0x540e7c]) % 0x100, _0xee9b17 = _0x547db3[_0x540e7c], _0x547db3[_0x540e7c] = _0x547db3[_0xf89c39], _0x547db3[_0xf89c39] = _0xee9b17, _0x1cc035 += String['fromCharCode'](_0x2f5d33['charCodeAt'](_0x554139) ^ _0x547db3[(_0x547db3[_0x540e7c] + _0x547db3[_0xf89c39]) % 0x100]);
                }
                return _0x1cc035;
            };
            _0x3899['XpJiMy'] = _0x5f3a20, _0x29aa9f = arguments, _0x3899['figKZt'] = !![];
        }
        const _0xe4dd74 = _0x1d3d60[0x0],
            _0x1bee58 = _0x389965 + _0xe4dd74,
            _0x3adeef = _0x29aa9f[_0x1bee58];
        return !_0x3adeef ? (_0x3899['dCGkNR'] === undefined && (_0x3899['dCGkNR'] = !![]), _0x3be72f = _0x3899['XpJiMy'](_0x3be72f, _0x13e945), _0x29aa9f[_0x1bee58] = _0x3be72f) : _0x3be72f = _0x3adeef, _0x3be72f;
    }, _0x3899(_0x29aa9f, _0x474e0);
}!(async() => {
    const _0x341183 = _0xa91301,
        _0x14152c = {
            'AKybU': function(_0x2d19b6) {
                return _0x2d19b6();
            },
            'ICrwI': function(_0x510ae4, _0x50d8b0) {
                return _0x510ae4(_0x50d8b0);
            },
            'mSubK': function(_0x5a1e8c, _0x840000) {
                return _0x5a1e8c + _0x840000;
            },
            'pjNHj': function(_0x3a984d, _0x16af16) {
                return _0x3a984d * _0x16af16;
            },
            'mDpYJ': function(_0x77829f, _0x4d49de) {
                return _0x77829f * _0x4d49de;
            },
            'neQsc': function(_0x384241, _0x49cb56) {
                return _0x384241 * _0x49cb56;
            },
            'IkoUl': function(_0x411dfe, _0x426c12) {
                return _0x411dfe === _0x426c12;
            },
            'rYQBu': _0x341183(0x79f, 'r2Oj'),
            'CEtAg': function(_0x5063cc, _0x4fa576) {
                return _0x5063cc(_0x4fa576);
            },
            'HRQhn': function(_0x50151e, _0x49158b) {
                return _0x50151e != _0x49158b;
            },
            'JMbQh': _0x341183(0x3a7, 'WqE!'),
            'bXQno': function(_0x5758fe, _0x1e30e1) {
                return _0x5758fe(_0x1e30e1);
            },
            'FWnUW': function(_0x32b5b8, _0x1ad858) {
                return _0x32b5b8(_0x1ad858);
            },
            'JpMSu': function(_0x3413f3, _0x3a6e45) {
                return _0x3413f3(_0x3a6e45);
            },
            'UFJcq': function(_0x49a983) {
                return _0x49a983();
            }
        };
    if (!await _0x14152c[_0x341183(0x6bb, 'L%wM')](checkEnv)) return;
    if (userList[_0x341183(0x556, '^H2k')] > 0x0) {
        _0x14152c[_0x341183(0xa5c, 'Bu2E')](DoubleLog, _0x341183(0x263, 'K7Hk') + name_data + '用户版：' + update_data + _0x341183(0x6aa, '^H2k')), _0x14152c[_0x341183(0x80f, 'ygf[')](DoubleLog, '
 🎉 交流Q群：104062430 作者:乐客播 欢迎前来提交bug'), DoubleLog(_0x341183(0x447, ']A!w') + userList[_0x341183(0x891, 'Zw8m')] + _0x341183(0x778, 'vvN[') + new Date(_0x14152c[_0x341183(0x537, 'uvdB')](new Date()['getTime']() + _0x14152c[_0x341183(0x1a4, ')eXz')](_0x14152c[_0x341183(0x5ba, 'Tx3e')](new Date()['getTimezoneOffset'](), 0x3c), 0x3e8), _0x14152c['mDpYJ'](_0x14152c[_0x341183(0x663, 'ygf[')](_0x14152c['mDpYJ'](0x8, 0x3c), 0x3c), 0x3e8)))[_0x341183(0x47e, 'Zw8m')]() + ' ');
        versionupdate == 0x1 ? _0x14152c[_0x341183(0x958, '9wX]')]('eLyLr', _0x14152c[_0x341183(0x315, '3!Dt')]) ? _0x49e2cd(_0x341183(0x544, 'ksby') + this['index'] + _0x341183(0x6a2, 'Tx3e')) : (await _0x14152c[_0x341183(0x2cd, 'JZxU')](getVersion), _0x14152c[_0x341183(0x6b0, ']A!w')](DoubleLog, _0x341183(0x34c, '2(N#')), _0x14152c['HRQhn'](scriptVersionLatest, scriptVersion) ? _0x14152c[_0x341183(0x5e3, 'WXl3')] !== _0x14152c['JMbQh'] ? _0x3a2886[_0x341183(0x73a, '6GlL')](_0x471c2c) : (_0x14152c[_0x341183(0x80f, 'ygf[')](DoubleLog, '
 当前版本：' + scriptVersion + _0x341183(0x366, '6GlL') + update_tines), _0x14152c[_0x341183(0x463, '##))')](DoubleLog, _0x341183(0x6fc, 'JZxU') + scriptVersionLatest), _0x14152c[_0x341183(0x199, 'MyTQ')](DoubleLog, _0x341183(0x25d, ')3Og') + update_data)) : DoubleLog(_0x341183(0x895, 'Bu2E') + scriptVersion + _0x341183(0x9c6, 'Zw8m'))) : (_0x14152c[_0x341183(0x57b, 'K7Hk')](DoubleLog, _0x341183(0x171, '##))')), _0x14152c['JpMSu'](DoubleLog, _0x341183(0x36c, '^ut3') + scriptVersion + _0x341183(0x9fb, '#2Hi') + update_tines + _0x341183(0x48d, 'uvdB')));
        DoubleLog(_0x341183(0x3b0, '#2Hi'));
        if (signTime > update_data) DoubleLog(_0x341183(0xa8f, '#yB#'));
        else userList[_0x341183(0x254, '^$ND')] > name_data ? _0x14152c[_0x341183(0x5b5, 'MyTQ')](DoubleLog, _0x341183(0x3e8, 'ksby')) : await _0x14152c[_0x341183(0x7b9, 'Ato%')](start);
    }
})()[_0xa91301(0x9b2, '^$ND')](_0x3438f1 => console['log'](_0x3438f1))[_0xa91301(0x3b7, '^H2k')](() => $[_0xa91301(0x20c, 'Zw8m')]());
async
function checkEnv() {
    const _0x236045 = _0xa91301,
        _0x286e1d = {
            'yrqBh': function(_0x4a3fc7, _0x9b3c6d) {
                return _0x4a3fc7 > _0x9b3c6d;
            },
            'reYxH': function(_0x371bbd, _0xb930b7) {
                return _0x371bbd === _0xb930b7;
            },
            'XKQbP': 'UOtba',
            'FRpqR': '
 乐客播提示：系统变量未填写 Token'
        };
    if (userCookie) {
        let _0x589606 = envSplitor[0x0];
        for (let _0x2da4da of envSplitor)
            if (_0x286e1d[_0x236045(0x290, 'WaIa')](userCookie[_0x236045(0x1ae, '6GlL')](_0x2da4da), -0x1)) {
                _0x589606 = _0x2da4da;
                break;
            }
        for (let _0x9f06b7 of userCookie[_0x236045(0x484, 'JZxU')](_0x589606)) _0x9f06b7 && userList[_0x236045(0x6ca, 'R$sB')](new UserInfo(_0x9f06b7));
        userCount = userList[_0x236045(0x1b3, 'ksby')];
    } else {
        if (_0x286e1d['reYxH'](_0x236045(0x226, 'fhKC'), _0x286e1d[_0x236045(0x82d, 'Ato%')])) {
            console['log'](_0x286e1d['FRpqR']);
            return;
        } else _0x1e20bc();
    }
    return !![];
}

function getVersion(_0x1b47aa = 0x3 * 0x3e8) {
    const _0x243a7a = _0xa91301,
        _0x4e168e = {
            'VgSfq': function(_0x368223, _0x4bb234) {
                return _0x368223 === _0x4bb234;
            },
            'mmzdJ': _0x243a7a(0x7a0, '^8@B'),
            'aoyUT': _0x243a7a(0x27b, '^H2k')
        };
    return new Promise(_0x52692b => {
        const _0x3010af = _0x243a7a;
        let _0x28216a = {
            'url': _0x3010af(0x70f, 'r2Oj')
        };
        $[_0x3010af(0x404, 'WqE!')](_0x28216a, async(_0x1219c1, _0x232089, _0x2d4a7f) => {
            const _0xc50d00 = _0x3010af;
            try {
                _0x4e168e[_0xc50d00(0x580, 'A]*R')]('VdtAl', _0x4e168e[_0xc50d00(0x5cb, 'Tx3e')]) ? _0x1c980e(_0xc50d00(0x579, 'Mt$M') + this[_0xc50d00(0x6d2, 'WqE!')] + _0xc50d00(0x3b5, ')eXz') + _0x325c3c + _0xc50d00(0x692, '@m24')) : (scriptVersionLatest = _0x2d4a7f[_0xc50d00(0x63a, '^ut3')](/scriptVersion = "([\d\.]+)"/)[0x1], update_data = _0x2d4a7f[_0xc50d00(0x806, '#yB#')](/update_data = "(.*?)"/)[0x1]);
            } catch (_0x4fa95a) {
                _0x4e168e[_0xc50d00(0x4de, 'Mt$M')](_0x4e168e['aoyUT'], _0x4e168e[_0xc50d00(0x57e, 'A]*R')]) ? $['logErr'](_0x4fa95a, _0x232089) : _0x40c218['logErr'](_0x36dde1);
            } finally {
                _0x52692b();
            }
        }, _0x1b47aa);
    });
}

function randomString(_0x3f3e6c) {
    const _0x863cc7 = _0xa91301,
        _0x3253cf = {
            'Ofkji': function(_0x27de5b, _0x439b06) {
                return _0x27de5b || _0x439b06;
            },
            'wJfdo': _0x863cc7(0x867, 'z9*t'),
            'naowJ': function(_0x284e19, _0x22da12) {
                return _0x284e19 < _0x22da12;
            }
        };
    _0x3f3e6c = _0x3253cf['Ofkji'](_0x3f3e6c, 0x20);
    var _0x3f108c = _0x3253cf[_0x863cc7(0x751, 'K7Hk')],
        _0xf2e3cb = _0x3f108c[_0x863cc7(0x211, '9Ir0')],
        _0x3bf1e0 = '';
    for (i = 0x0; _0x3253cf[_0x863cc7(0x6de, 'Yo*r')](i, _0x3f3e6c); i++) _0x3bf1e0 += _0x3f108c[_0x863cc7(0x8b4, 'Zw8m')](Math[_0x863cc7(0x8d9, 'A]*R')](Math[_0x863cc7(0x34d, '#2Hi')]() * _0xf2e3cb));
    return _0x3bf1e0;
}

function randomsstring(_0x485747, _0x3da456 = _0xa91301(0x464, 'WaIa')) {
    const _0x271ae7 = _0xa91301,
        _0x5651d7 = {
            'EOOcK': function(_0x29c96e, _0x5ae8ad) {
                return _0x29c96e || _0x5ae8ad;
            },
            'zFzpQ': function(_0x41df4c, _0x3d8ffa) {
                return _0x41df4c * _0x3d8ffa;
            }
        };
    _0x485747 = _0x5651d7[_0x271ae7(0x58d, '##))')](_0x485747, 0x20);
    let _0x4bd8de = _0x3da456[_0x271ae7(0x9b7, '9iq9')],
        _0x1b478d = '';
    for (let _0x3426f1 = 0x0; _0x3426f1 < _0x485747; _0x3426f1++) _0x1b478d += _0x3da456[_0x271ae7(0x757, 'uvdB')](Math[_0x271ae7(0x84b, 'Ato%')](_0x5651d7[_0x271ae7(0x63c, '!y(t')](Math['random'](), _0x4bd8de)));
    return _0x1b478d;
}

function randomNum(_0x18d9a8, _0x753b02) {
    const _0x512874 = _0xa91301,
        _0x249508 = {
            'CWqhZ': function(_0x28fd93, _0x4a715b) {
                return _0x28fd93 === _0x4a715b;
            },
            'etxDI': function(_0x464f6e, _0x1f04ba) {
                return _0x464f6e - _0x1f04ba;
            },
            'RFANJ': function(_0x3829e7, _0x4a78c0) {
                return _0x3829e7 | _0x4a78c0;
            },
            'ALPri': function(_0x572111, _0x3dc873) {
                return _0x572111 + _0x3dc873;
            },
            'TVoJC': function(_0x48ce18, _0x809676) {
                return _0x48ce18 * _0x809676;
            },
            'fQkaG': function(_0x5f5881, _0x504f80) {
                return _0x5f5881 - _0x504f80;
            }
        };
    if (_0x249508[_0x512874(0x774, 'W#uE')](arguments['length'], 0x0)) return Math['random']();
    if (!_0x753b02) _0x753b02 = _0x249508[_0x512874(0x753, ')eXz')](0xa * * _0x249508[_0x512874(0x7e8, 'W#uE')](Math[_0x512874(0x9ba, '9wX]')](_0x18d9a8) * Math[_0x512874(0xa8d, 'WqE!')] + 0x1, 0x0), 0x1);
    return Math[_0x512874(0x9cf, 'L%wM')](_0x249508[_0x512874(0x873, 'qmDl')](_0x249508[_0x512874(0x6a9, 'R$sB')](Math['random'](), _0x249508[_0x512874(0x992, '6GlL')](_0x753b02, _0x18d9a8) + 0x1), _0x18d9a8));
}

function getTime(_0xcf1f7d) {
    const _0x32f171 = _0xa91301,
        _0x39a3ab = {
            'DQlVL': function(_0x3ccf4e, _0x5b57e1) {
                return _0x3ccf4e < _0x5b57e1;
            },
            'NbULU': function(_0xa17495, _0xa7bc7b) {
                return _0xa17495 + _0xa7bc7b;
            },
            'uMHYN': function(_0x5c5c55, _0x1dffc2) {
                return _0x5c5c55 + _0x1dffc2;
            },
            'oxNWJ': function(_0x3abe49, _0x13fa07) {
                return _0x3abe49 < _0x13fa07;
            },
            'YePgx': function(_0x574e5d, _0x14ac3b) {
                return _0x574e5d + _0x14ac3b;
            },
            'qEPae': function(_0x8cb0fc, _0x54afe2) {
                return _0x8cb0fc + _0x54afe2;
            },
            'zcrLD': function(_0x568739, _0x4228dd) {
                return _0x568739 + _0x4228dd;
            },
            'FroSU': function(_0x1e1a0a, _0x29fe93) {
                return _0x1e1a0a + _0x29fe93;
            },
            'xScDj': function(_0x1401a2, _0x3a9565) {
                return _0x1401a2 + _0x3a9565;
            },
            'mXwkh': function(_0x2b4770, _0xe55ff6) {
                return _0x2b4770 + _0xe55ff6;
            },
            'NwXrX': function(_0x291e18, _0x9e7f99) {
                return _0x291e18 + _0x9e7f99;
            },
            'wwOPi': function(_0x1c175a, _0x18a846) {
                return _0x1c175a + _0x18a846;
            }
        };
    var _0x3abe72 = new Date(_0xcf1f7d);
    let _0xccd068 = _0x3abe72[_0x32f171(0xa92, '2(N#')](),
        _0x44e203 = _0x39a3ab[_0x32f171(0x5da, ')3Og')](_0x3abe72[_0x32f171(0x672, 'ev8C')]() + 0x1, 0xa) ? '0' + _0x39a3ab[_0x32f171(0x8f8, '#yB#')](_0x3abe72[_0x32f171(0x30a, '6GlL')](), 0x1) : _0x39a3ab[_0x32f171(0x795, ')3Og')](_0x3abe72[_0x32f171(0x33c, '3!Dt')](), 0x1),
        _0x1343d9 = _0x39a3ab['DQlVL'](_0x3abe72['getDate'](), 0xa) ? '0' + _0x3abe72[_0x32f171(0x33b, 'W6*u')]() : _0x3abe72['getDate'](),
        _0x217770 = _0x3abe72['getHours']() < 0xa ? _0x39a3ab['uMHYN']('0', _0x3abe72['getHours']()) : _0x3abe72[_0x32f171(0x376, 'W#uE')](),
        _0x5414e1 = _0x39a3ab[_0x32f171(0x883, 'WqE!')](_0x3abe72['getMinutes'](), 0xa) ? _0x39a3ab[_0x32f171(0x169, ')3Og')]('0', _0x3abe72['getMinutes']()) : _0x3abe72['getMinutes'](),
        _0xf66947 = _0x3abe72['getSeconds']() < 0xa ? '0' + _0x3abe72[_0x32f171(0x3bd, 'z9*t')]() : _0x3abe72[_0x32f171(0x966, 'WaIa')]();
    return _0x39a3ab[_0x32f171(0x243, '^8@B')](_0x39a3ab['qEPae'](_0x39a3ab['zcrLD'](_0x39a3ab[_0x32f171(0x78b, '^H2k')](_0x39a3ab[_0x32f171(0x8a3, '9Ir0')](_0x39a3ab[_0x32f171(0x85e, 'L%wM')](_0x39a3ab[_0x32f171(0x75d, 'r2Oj')](_0x39a3ab['NwXrX'](_0x39a3ab['wwOPi'](_0xccd068, '-'), _0x44e203), '-'), _0x1343d9) + ' ', _0x217770), ':'), _0x5414e1), ':'), _0xf66947);
}

function _0x1d3d() {
    const _0x1a1b71 = (function() {
        return [version_, 'PYjbBsGDjSWQirawmRipq.DcQloJYmY.ARv7rqAN==', 'ySkNWRVcTmkLW5hcGW', '44o156Yo5yQL5l2f5Oo7i3S', 'sSoYas8', 'WPBcLJSTW57cJq', 'nH3cSCk8W6hdT8ovwdOSsa', 'kvPTWQu', 'lLP2WQjF', 'WOJdSMNcRwJcGSkWW4r4WQBdGh5z', 'eJNcVSk9W4i', 'nZNcI8k8W5W', '44cy5Pgm5Qgh6Ao/6ys/WQxcOa', 'cSokWQzwEmk6u8kScSk0', 'AexcGmkhna', 'WOxcOtWpW7y', 'qJ7dTq8D', 'uSoTj8k2xW', 'WPPHnd9vW758W4iIaCoNWQ51W5GjWOujy2r/feOTESo/WRizv37dNJu', 'wmkHoSkPFG', 't8kwW5mCaq', 'W6zPs8oibW', 'WOK7WRPFWRqn', 'WRCaW7NdKmom', '44c85zcO6AAd6ksO6AoigCoj5QYB5As45zoC6AA65BI95zk+6lsU6yEd5BMK5BA76lYz5lUo6zIr', 'FeNcQ8kSga', 'sSkojcKK', '44go5Q685Ps36Agv5Rk4WQJcQUAiRowlHoMJNUwpVW', 'AEMfJ+w7NU+/I+AvVowhG+s9VEwaGoASV+AkKUIIPW', 'W61tqKhcOSke', '44kr5R2R5yQ65BQT5zoBumoE5OQc6kkj5lUr5yIG6lYu5B2477Yt57Iz57QL5OQt6kkj5lUq5yQ3', 'WR3cNYWMW6y', 'p0hdOXPIWRqhWQZdGG', 'WRuNW5RdRSoE', 'WOldK1ZcKxO', 'W5NdVf7cH8oz', 'uL8DWPex', 'taVcPr3dTa', 'WQ11ptXj', 'zmkRmCkLud4Pfmkk', 'W5hdP+kEUSkc44co', 'W5hdP+kFS8kc44co', 'W4ygWO7dRH8', 'WQGAW47dQZtdQWVcP3nNa8o4W63cIG', 'nGOAma4', 'qSkMvSo8W54', 'wSkmDmoNW4O', 'WPxcPCkJW65l', 'WQdcSdmbW7C', 's8ovatPa', 'EdBcKqJdKq', 'WP/cIsWUW6dcNrhdPSoxWPeXAq', 's0yUWP46', 'vmkxWORcMG', 'mLPQWRvj', 's8k7aCo6', 'W65FqSoJdW', 'pe/dGrH/', 'W5hdK2RcO8o2', 'vmkaCNDU', 'W4y0W7LyW7/dJ8k5WPy', 'xSkBW6yigSo6d8oVECoUia', 'WRrqW6KLW4e', 'WOWdWPTnWRu', 'yc/cJYtcUq', 'u8oVi8ka', 'W7rGBwRcPW', 'WPXcW7TFW6y', 'sCohv8kfkfe/Cr19FIDZbmoKuCkfaSoQds96W5bVW59XW4BdO8k3WOhcHmorj8ouW6lcNc0zm8kwCh/dNf5nWRtcQSkR', 'b8o3D0qd', 'smoRoW1u', 'WQVcQmkfW5y', 'WQC1DNy', 'WRBcQHWYW7i', 'WPxcIZSFW5hcLG', 'o8opjSoLW4a', 'e8oYk8obW4VdUa', 'WPhMSzZMU4W', 'kCo/WOfsWRi', 'W7FdU2FcQSo4', 'W6f4E8kpFW', 'orBINlddPoobGG', '44cP5Pwk5OUF5AsZ5yUKWRbk5BwZ6Ak95y2xEa', 'vCo5mXrF', 'W6buuG', 'ErWNvmkh', 'cCoqDKXugCoeWONcQfFdJmoO', 'W5bUq2RcRW', 'zSkmWOBcQqy', 'WPlcKtmXW5K', '44c+5zoz6Asy5OUi5yYhW7BdQUAlSUIHHEs4OEwkGoI/SUw8Oo++TUE6O+E4RoAkQ+IHTEs5OowjSq', 'WOCFW4ddMmoH', 'W6T+ALtcMG', 'ywNcMCkIlG', 'WOyTWPdcU8kB', 'DSkuu8oE', '44gi5yE15z2O5lMs6AwQiSkz', 'qI89WORdGG', 'xLO6WQud', 'W4NdU2VcU3dcNSkHW5DPW6RdL2vAW7jKgCojgeyaW5ayWOCVWQVcQCoDWPrPzG', 'wY7dJMtdSq', '44cX55we5OU85l6L5Oo6W65u', 'WR4UyxVdQq', 'x1KBWOeGW50', 'W4yjtgX+', 'xLOTWPea', 'rSkDcsqp', 'WRTPW7KgW7DdW4eDq3CNWPJcHeFdUmoLdSoY', 'EYyoWRddNW', '44go5BIm5zky6lAj6ywDWQJcQUIVMEI1VEwoR+AYIoAFGUwmGUAjJoIIIEs5TowjNE+9NowmKoIcQoAAVEAuK+wpGW', 'wN10mZG', 'aMynB8oS', 'D8k8WOFcGY8', '44o85AYG56+g6kwP6AcVd37OJ6BLVOFVVim', 'WRlcQCksW4DM', 'WPqDW63dMSo8', 'WQ9PW6izW6S', 'W7a+WRZdUs8', 'W5CjsMrBnYzOW6G', 'WQyYW5hdQdC', 'bCoBWQ1DWRO', 'dmoPlCoWW4ZdUCkEeCkrx8kE', 'W556zmk1', 'WOJdJWxdSmoqwG', 'WPNdNatdHmoHxdO', 'EIFcUaZcJ8ozWQ7dVYfPWQjw', 'j8oLWPPpWRe', 't3T9hXa', 'WQqfW7VdRSoQW4u', 'WPWvWRjTWOS', 'W5ezWO3dLdG', 'utZdTG8mWRJcJCocW5RcSvu', 'WPHvW510W50', 'WOGFW7ldOCoMAW', 'WRTeo2aw', 'BfpcMmk6ha', 'WQhcImkLW4Tq', '44gU5PAR55Qg5l2L5OowWRddOEs6UowNL+AuJEwgNNC', 'W4LWy8ksDuWNiNZdTG', '44cd5OYL5y+X54Yp6ywDrvi', 'qSk1f8oYcSkP', 'pqG7nWnhW5/cIsrsqSkQW6/dOCkwW73cGgi', '44c15A+p56YR6kAM6Ao+W6NdSUATRowMKEwTGoEUGEw4LEwqRoI1P+MgU+w6S+w1LUI/JUs4GEMyGG', 'W6D+EmkuFa', 'tSoUASk9mW', 'WORcRtSbW5K', 'tWGwWP3dMq', 'W48PWQpdHcq', 'WQxdR07cOhO', 'z8kvWOZcKSkW', 'f2TVWP58', 'WOi5ug/dOa', 'W5BdUhpcH8oM', 'Ee/cJCk7dG', 'tCo0bJnsECoFbG', 'WQ7dGvNcOwe', 'vmk0cW8M', 'WRj0owObW6OFWOxdV8oZ', 'u8oddmkzuW', 'x8k1bSoV', '44ou56Yw5yQK572G5ykjWOVdPG', 'dtFcOCkDW78', 'qHGlWPRdUSkwW5eUWRhcQcxcPqJdL8ovtMz8W43cPSocWRJcVrhcQSo/xq9ShSkRWRZdSCkWCvBdOw4Aw8kMw8ovurbemtpcTeFdQGJcThTdW6hcUSo1W7TrqbNcVwxdPmkXtmo3W406WO3dH8khFePLmL7dU3BdRYpcMurdWQb/vSkfWQuia07cKSkPWOZcPCo9D8kWxJTOu34MW49CbxqgWPxdIIBdQhnEumoEy8oyW5lcOW', 'fcaylXq', 'FNn+dJ7dUYO', 'jCo64P2WWRVJGBy', 'v1CvWQGRW7ddUmoaW7yaW7ldOHOHrmk1fmoD', 'WPCrW6ZdICof', 'oCoCWRtcRsy', 'zwjOcZ7dPcFcLCkkW70', 'BZFdVXbcWPlcVSokW47cUa', 'wCkvWOJcMtG', 'DJ8iwSkO', 'rmoyqmkSm0a', 'vtRdIhxdVaLXBZhdNLvwh8kX', 'W7ddINNcOCo0', 'E8kWWQ3cPSk3W4pcLmkZ', 'pSofomoUW50', 'WQCHD23dTa', 'W7iJCuP5', 'WRmsW5RdGSoh', 'k8oJyxCJ', 'B2RcHCkBda', 'ASk3A8oRW58', '44gy5O2o5yYj54236yABWPWt', 'F8kJWRRcTmkH', 'sa83ySkp', 'o8oFDLyX', 'WP9wW5VcO1uFyf4QW4lcL8kyECkFWO8kW5985OMP6kgc6lss5y615zo46Aw76lE26yElwXNdUCoObSknWQRdGSk6W63cU8oRW57cGZe8oa', 'pM7dSGfi', 'wLbxfty', 'vbVINyJdSEoaQG', 'WPHRW71FW67dSG', 'vmo6pCkbyG', 'WOedW6FdSSoo', 'ua/cOJhdPq', 'tmkClZuU', 'WPTSW5u6W68', 'yaFdVred', 'WPyuWRBcRmkX', 'vxaDWOed', 'l8opWRtcPG0', 'uZegWQNdIa', 'wmkfnH0', 'WPFcNd0tW5RcMHhdPSowWOC', 'qCofySk6eq', 'ySkuvComW6K', 'pmocv0W/WPe8WO3dOCo3mWtdS8oFBSkwuCkSW4/dN8kCWRxdObmXW7xcH394BCkpbrW', 'DSo+g8kbvG', 'W44LCgmjWQ1KW4u6dmoMW5a', 'WQCLWO3cJmkK', 'xKlcICkame3cTSkIEmk7WRiTWQShzGO5', 'umkyxxrtW7S', 'WRRcT8kgW453k2/cJ0/dHhnRW5NcTHJdHelcTaWGWO7cVqhcPZxdNSkvWQGQWQviW51NW67dLunwymkcWPn6yb7cTmkFmCkgqa', 'AJ/dMWyP', 'jKyrrCob', 'ACoBA8kOaa', '44kq6kE055YN6kEG6AghW5yv6i6t5BYr5Asz5yUnWRa', 'zqhcHs7cIq', 'hbRdM8oxAXpdMCoJsCkuWPGdWPCy', 'zmkLeCk6FtSUaa', 'hSouWQbzWPe', 'jCo64PY5WRVJGBy', 'EmkliY4K', 'luhdOHXQWRKAWRRdHa', 'A2j9cqJdSs/cHCkgW73cLmkvW4VcPCkwW53cLCowWOyNvCoSW6W8W5H7W6ZdHmkUW4zza8kwW4L0j8omW48OWQfMWPPVemkQvCk2WP0', 'W7qpWRNdUaLomqf2WPZdGCkyiSodW55eWOD6A2baj8kjsCokAbrjW7NcUeldR8oHWPBdOSkNW5NcTCkcW41Kj2XFjb3dIhhcSCkYvCowAx02cCkyW5RcGJufW6LbcSkSkSkGgCojW61TWPtdKCoZkCkHW4rKWPferHxcJSoRkCkyEXhcPu/cQH0CetLBWQpdVColWOhcJd7dTSoziCkstSoHW4BdSXn2xCkoFXBdTefLaCokpSo9WQ4AsCkaC8kDW6X1rSkmW7rRW5ZdPq', 'WQKuW6/dGmow', 'v8ks4PYIaoobHG', 's8kDbsyx', 'm8o3DNOh', 'oXlcPSkY', 'WRewW43dTIpdVbJcOKLYbCoUW6ZcUSkmFuudW6a', 's8owu8kkkq', 'WOpdPwZcH2/cJSkYW4u', 'WOnoW6bCW5u', 'laFcS8kNW7NdOCovwsmSw8kQ', 'oLPWWRa', 'WPHHW7r9W6JdQa', 'EfmzWRr/W67dSSoaW64m', 'z8k2WRZcT8k3WOZdICo5CrtcLIBdOCk2WRpcPWxdQCk2W71ZwHWjW47dICogBre6WOhcJSklfaP4Bmk2W7KkbSoaW7lcI0qrWO/dT2ldGCk2W7pcOSkYWPvOeSoKW6fTfCkLW6CKw8oOxsWMo1K', 'W4j6Ca', 'Ed7cSWVcT8oCWQZdTheHWQ1nzKJdHhuVmmkLhLvmWR1DnSkVW57dHCkFzLdcLa', 'xhVcHCk4mG', 'rCkknmoUia', 'xXmYwmkd', 'WRb4W7ueW5f4W5KjvxGQWQhcN1ddUmoK', 'r8kKWRhcLCkd', 'wmkrmb0vqmosWPq', 'W7azWPtdGqzn', 'WOFdMGFdLCoU', 'ofldKJrK', 'WQu2W4ZdQ8oZ', 'd++/LUw2H+AAToADPUAvVoEkGUAEUEAxQEMFMUABLEAwHEw/I+wLSEAiO+IIJEIhLUACLq', 'fSoKk8okW4m', 'WO4LW57dO8oq', 'nvb0WPLp', 'zNSZf8kXW6ZdQComWRRcOCkx', 'ur4ssSk2', 'WOSw4PYPbUodHG', 'Ef82WQyM', '77Y05PIo5PsK5PAt6zAHWRa', 'WPBcLsyVW40', 'WPOHWO3cU8kG', '44gi5PwF55Qy5l665OcviSkz', 'WRTPW6ql', 'mwGmtSoM', 'WRSVyLVdO0a', 'y8kpmSoXmW', 'WRNcTmkyW5DO', 'W5raBmoQga', 'W6nquSoN', 'dX8Ifs8', 'WR0LWQ7cL8ku', 'F8kTWRVcSW', 'nqW8pa5W', 'W7tdINJcUCoobSkxWPBcSq', 'WORcKmkZW7bkevVcSMNdU1WxW6xdNsJdU3/dKIyvWQtcK3RcKaNdV8obW7r6W74zWO40W63dJba', 'W7n0vLtcSG', '44oe5zcs6AsG5OMQ5yYfWRnq6i2C5BYmWQa', 'WQWhW5VdTYxdQJxcS0n1dW', 'zmoUvCkmda', 'v0moWQuMW4BdSCoh', '44cY6kA66Aof6Ag65RkVW4dcNEIMIUMHGEMHJEAXUUA5Row2NoI8Ios6S+MzRE+8J+IUREAASEwNQUweUoAEVa', '44c15PEI5OUr5As25yUEW6NdSG', 'mmoud8oRW7S', 'vvejWRi7', 'WRH0pKOfW64v', 'WRfWovG', 'v8oVm8kzrG', 'mv5WWOHp', '44go5BIm5zky6lAj6ywDWQJcQUAVS+wLSUwoT+wUPEAlMW', 'iK7dSWnIWRSbWRBdMa', 'WOadW63dRCo8', 'WO4VWPG', 'CSoEuKm9WOS+WPJdVmk3juldRmkhEmooumkWWOBdHmkpWQVcPKKNW7BcJhq0y8kppW/cJmoYrgNdJKn6WQX5r8kuxSkklmkGW7NcKq', 'xJlcUbldVCo8WQ3dUdjP', 'WQaAW6BdHmoQW54', 'WRhcLSkqW4vj', 'WRxcVGyzW4K', 'W54Wtv5c', 'c8o8p8oVW6BdO8kL', 'amoqWQjDWQbNe8o0W7jMW5lcRZaokqXpWRC', 'WOWQW5ddKSoW', 'yctcUbdcJ8ouWQu', 'WPyfW5BdVmof', '77Yd5PI25Pw45PsX6zsWWOW', 'o25EWRz9', 'tSo0hmkLCG', 'W7ftDmocpa', 'WQmcWP5PWOa', '44gy5ysc5z+L56655yM6WPWt', 'iujtjSosWQZcRXHTW6VdIJdcRq', 'sSk6WP/cRCkc', 'WObvW6T8W50', 'WRNcRSkmW7vm', 'W4nKDmownG', 'WOKvW6BdL8o1FJ4', 'WQz4kLCnW6C', 'WQRcQCkpW419', 'W4/MSBFMUia', 'W5LKvLlcPW', 'a+wNHE+8SoMyHEIVNEAvVUMvUCkgo8oDdYddRvRLIAtPKia', 'uJKwWOBdGW', 'W78zBhnK', 'stRdTsCl', 'DYtcSXFcPG', 'WRyTAMVdV0y', 'mCoxsuCIWPO', 'W63dJNJcOCoWdCkB', 'dCoyWQznWQX8', 'BaTNWPnzWOhcRKm', 'vSo8kWL5', 'ACk5WPNcGYu', '44oo5yAu5z6Q5A+356Y/jSkw6i+l5B6G77Yo', 'eSoZxK83', 'BhKKjSkAW7BdSmoy', 'nLLXWPnZ', 'b1JdVZjR', 'uSkzwxjFW45NW5rMWRLuy8k2', 'BGxcGcRdVa', 'FSkAqmo6W74n', 'o0e5wSoe', '44oQ562V5yM05l6Y5OgtWQC95lM85AwI5BAC56+35yQX77Yt5Bwz6l6457Ig562m5yMZjW', 'WPDQW5eRW4G', 'qZFdRG', 'CmkNtMX1', 'sSk6ySoXW7O', '44c156YS5yQQ5l6b5OcaW6NdSUs5QEwMKEw0R+ETJUwjMU+9QUw3J+I+ToE5N+EVMUwjGcS', 'vCkMWRRcJZW', 'zSoYWQRcPchdN1a9kCoAWPpcK8oSWQT+WQOoWP8olmoXhf8ivvBcKYCM', 'W51GtSoqgG', 'w8krW58Xdq', 'W7qBWPFdJIe', 'WOJdJWxdSmokxc4I', 'zaRdRgtdKa', 'wd7cNcRcVW', 'W7eX4PYiC+oaRa', 'rCkoWQZcVsq', 'WOO2WPDcWQ8', 'WP/dHLVcUMO', 'WQejW6ddUG', 'WOGMWOa', 'vYBdUXqAWQdcJCoaW5FcUvu', 'WRVcNcWWWPlcUbldOCoeWPe', 'WOZdJqFdG8oxvJ8LExzPW5tdOCkUW6baW4vJW5tcUCo7z8ovCSksBX/dP8onmSoNW57cQX7cRGRdPW7cPCoCWQmsW6XltCoSW5/cPG', 'vhiPWRqG', 'FSkaWQlcKmks', 'WQ8sW4JdSdu', 'usRdJG', '44ou6kAU6Acf57Me6kYLWOVdPUw3JoI3HIi', 'c8oKWQnBWRi', 'W6jYy8kvrW', 'W5aoxwDU', 'v8kMuxz8', '44cP5ywM5z6U5lMS6AwfWRbk6iY25B6SWQe', 'vCkZomkyta', '44gA6kEI556B6kA36AkSW6jo5OQ46ko65lUX5yMt6l6F5B6C776W57IQ57Ms5OU96kg75lQQ5yI5', 'EhD+ea3dPJJcMmklW7FcLq', 'WOlcNd4HW43cNshdPSohWPK', 'w8kBW6CncSoOc8oTwSoVoXK', 'WOpdPwZcH3xcIa', '44cT5zoN6AsV6kA66AoWe8kD5QY15AEW5zc26AEo5BUg5zov6lEZ6yA/5BM45BAB6lY05lIO6zIT', 'x8kVbSoZ', 'v8kFDeXk', 'tCkfoIy0', 'WRTIgoEZSUE7K+AoHUELQo+8L+IgGoACRUs9K+EvUEAvG+MvLow3SowlSEAFV++/QEAAGEAvGUISUowlVCot576G77+iW5HQWRm7BmoIWOaGr3JcOa', 'xCkiW6y6o8oL', '44gi56Yx5yMI6kAD6AoRiSkz6kYf6lwS5y+m5Rkq5P+l5y2F5OUL6kk15lMZ5yMp77YA5y206ioV5PIz5Pw85y+J', 'qw0SaCkz', 'fffGWQvJ', 'WPyuyw3dQW', 'wSk6DCoRW4e', 'bSohWP7cOqC', 'vcFdQqG', 'z3D+fGddTsS', 'W7ydC2P7', 'zSk1ibOO', 'nH3cTSk2W7q', 'WPe1WQ5XWRu', 'g8oYiSoHW5ZdQ8k1lCkiuSkFkam', 'FbGevSkxW60', 'DSkZe8kGqG', 'WQWxWQ9TWO8', 'EwOKcSkl', 'ECkKjSkRDW', 'r8oidCk7xq', 'WRBcV8k4W6vi', 'gSoVpSoBW5FdPq', 'vmkvrLLx', 'WOZdHKVcQM8', 'h2JdTZHZ', 'xNTAiWG', 'C0bokcy', 'WR1LouKxWRnFW4tdTSoPW6JdSSo9BmowAfRdJmkdW6hdJ1/dOYKaWPJdVSonW5OuyfNdOSkmkbVcGeVcQr/dGmoDamozW6mYj8klkghdJ8oDWPqkeCkoffzZWRHGySkAWQ5HW7jZW7PlgwxdGCoBW6Gc', 'smkBW6ywma', 'sCoBsW', 'CSkzCw1S', 'W5vt4P6/WQpJGya', 'pmoGWOHvWQC', 'BhKKjSkaW7a', 'qqdLV4pLIlZNIBxMN7ru', 'uCkBWPhcJIpdPq', 'zuv9ltK', 'WO0r4P2QWQBJGAC', 'WOZdMsJdICoFwtiZCxPSW4BdV8oIW7TeW5DOW4dcS8o+A8kky8k/Ca7dQmojomk+WONdQuZdOaRdOalcSSoWWQ8cW6WVkCkAW4VcQmkdpCkwWPqUW5rfW7NcSSo5FSk/E8kbAXpdOCktnKW9W6r9WQZcNNFcUKTT', 'xeZcI8kQlG', 'W5L0FSk1', 'WOiQWPRcT8keyKfKWQXHiuFcUJJcQs3cGItdN8ojW5BdJGNcRSocWOGaWP5tWOXGnG', 'W709WR7dLZi', 'W69ny8kRDa', 'obKInXn7W5JcLcnux8oTW4JcR8koW7/cMtVdVx1eWQe5WOimW4lcQSoMD8otW5aKeNBdSwVcKb1pACkxWQGOmhyldmkj', 'WOecW6FdU8o6DG', 'hxBdNbnY', '44cE6ksa55+d6ksb6AgvWOZdHUASMEwKTEEDTUw6H+wqHEI3NoMeHUw7N+w0SoI+JUs7JUMAIa', 'WRFdLWddMmo4', 'yIhcUt3dGa', '44o85BUc5zc96lE16ywVd34', 'WQ/cRSkBW4C', 'WRKsW4JdRGpdSa3cVG', 'usKTWORdIq', 'j1H0WPnR', 'rv0Wf8kC', '44cY5BQt5zg26lwA6yE3WRiM6iYr5B6C5AA75yQema', 'W6HWtuxcNG', 's8kbmquj', 'AMOLeCkXW73dOCohWRxcPSkAW48', 'WRpcJCkCW5Pp', 'yCkxWOxcOSkk', 'zSo7CSkFfq', 'FCkJlmkNAdmTaSolW7bFWRldVSoKW61Sta3cVmkTW6vZWPJdULxcTMTQtbpcHCoS', 'WRKIW43dIsm', 'WPnhW5DBWR5z', 'sSkTW5GsaG', 'W5hdJCow57gz57Ub5O6y56s077+H6is85P6h5l2I55wS5Pwx6zwV5BAD5yQd5PYQ776v5PQE5PE/6kYl5yUGFEE9TU+9NCkdW4ddSNNdVb7cJdddPCo/kG', 'lNlINP9a44g/', 'WQhdMrRdO8op', 'WOGMWOdcMmkwB0byW7WTpq', 'od5MtmozWQZcT8ooWRNcI8kGW6LP', 'W7vKAfdcTa', 'W7hdOMlcKmoY', '44cT566A5yMY6kA66AoWe8kD6kYF6lE/5y+c5Rcc5P6W5y2W5OUo6kcI5lQc5yUi776g5y+n6ika5PIC5PEx5y+U', 'ttZdVGux', 'lJ4votS', 's8k7hmo3h8ktWQZdVgFcS1jDWPtdMsVcTmkItq', 'WOlcVcCfW7m', 'WRaSW47dNSo0', 'BYpdSaGE', 'WRj0oq', 'DmkcWOJcQcC', 'vSond8kvFa', 'W6tdIN/cSW', 'WRfqW5m4W6W', 'laFcS8kNW7NdOCovxZq8ta', 'uaKqWPhdTG', '44gy5lQx6AEp56E75y2pWPWt6k655PAR6zsb5Q2E5lU35z6J5O+z5A6f5lM+5yUz5B+95lIm', 'WPVcMYeKW48', 'WQ1sjIjk', 'WRvMaWz2', 'WOuXWO3cMSkQ', 'WOL2aX90', '44oQ5PAH5OIp5Asf5yQnWQC9', 'z34BWO0C', 'WOnLW65/W67dOSkDWPmvWPL2', 'WRX/kvWC', 'W5PAwSkqFq', 'W4D7C8kKAa', 'W7zvymoUnG', 'W5ddUuNcVSo9', 'w8oegd1J', 'uZpdSXq', 'WQhdMWpdMCo/', '44gy5R2E5yMU5BQ45zcaWPWt5OI76kcr5lIo5yMk6lY95B2G77+s57U457MO5OIF6koI5lUA5yU5', 'fc4Hks8', 'ASkWWRRcMmkWW5/cLSkL', 'uSkjFxbL', '44cY5yEG5z2U5lU16AAlW4dcNEIpU+w9H8oR', 'W5CBqK91', 'WO0dW5tdLSoMEci', 'WR80Cw7dOGHDCSkTW5C6W5/dNmoAa8o4W7HPWO48WRVcLeNcSGxcQCoFW67cRSkjW7ZdS3tdU0dcISkbW6ddTCoMv8oIWQ9AWQOsWPRdLgJdMmoHWP1erJjzgCksW7KmW50gyNzkWOrdW65IeJ49Emo4WQbzeComW5fZWQml', 'WQygtw7dHa', 'A8kgA8oTW6m', '44gm6kwW55YS6kEM6AohW4H95QY25AAH556t5BII5zgH6lEr6ysJ5BIy5Bst6l6y5lQl6zU5', 'A8kJWRZcPG', 'pGWMfHn2W4ZcLc9i', 'jgfWWOb5', 'nSoe4P2hxoobSq', 'rr7cUrVdU8k7', 'y8kTWQ/cGSk2W4q', 'rJRdIw8', 'vX0NWPFdHmkwW5q/WQq', 'yguYhmkw', 'FMO/dq', 'd3HRWPvR', 'W49Lz8kTEuWPohhdQSo0x8oWW5ldSSoas8ktWOlcUSo4W4BdJSoiWOj4W6G1ACkoWRVdT03dTSoRW5rUW4PSWR7dPSkhjSo0WRXBp8ot', 's8kqD8oyW7q', 'WQXQW7CpW70', 'W7NdIexcNSod', 'W4aLWQ7dLW0', 'mw0yB8oF', 'zSkVh8o5lG', 'F8k1itOX', 'yapdU1pdRa', 'DCkGCCk5WOtcT8o8t8odbSogCffaWPyxW4X854IV5P6G5A+R5QYX5Qkx5PYe5PQf5PsjW4xcLCkoACkZWPPnW4rBDs1vWPBcGe1z', 'qmodu8kzmGHXkHL7FMfSsmo+q8ohaSoIds96WPX2WObXW5lcO8kUWOFcISoDjSkoWRlcLMSBlSkioN/cLwX4WP/dOSk8pgldSgpcJSo2WOpcHvyDWRNcT8k8EM9WWOn0e8kkeCoDW6O', 'WRX/lKS7W6OFWOldTq', 'BCkXW6awbq', 'D8k5qCovW4q', 'FWCgFCk6W6JdSqLOW4ZdOrlcGG', 'FEMfO+w4PG', 'WPtcMcaSW4BcPHpdQCokWQSZCKlcRd8', 'c8oaxM0V', 'oCottKWVWQ0WWPJdSmohpKtdVSkCBq', 'tdZdK0ddRa', 'WOtdKXpdISog', 'WQpcJI8hW44', 'sHiWWPNdOW', 'W648WQbFWRGPWOjivf0nWQ7cJhm', 'Eamxy8kwWQxcT1jTW4hdVrRcKSkPW750cuXlm17dV8kvW7XLdSoeWQ3cJJj6W71cWPqViYCPgmknC8kPW7ddLs7dGmoEWQ1QWP5BzcaFdCoXWRRdO8k8WQFcGSo+W7FcHSkLWQacWPlcMG0zFmkrkSo1WOBdUqe', 'nWG/pG', 'nXFcG8kAW5u', 'tSk+kSoTd8kOWQ/dULBcQvvAWRS', 'WPaKWRD7WRu', 'W7RdMEkDJgdJGQ8', 'zJ7cUGW', 'qHBcVaddOa', 'omoGygqD', 'W4FdSutcUmoW', 'WPxdVNlcTgldISkMW5DPWQddM2vqW6i', 'kbGkiIG', '44cd5A2O566w6kw56AcDrvlMRztLPAxLRQNNR6xLUO/LKAZOTQFPHkpLUiJLTOhOVRVKUixPMiu', 'q8k1eSoEfmk+', '44cY5RYS5yQn5BM/5zgSWRiM6iYr5B6C5AA75yQema', 'sd3dVsuDWQe', 'amoSWOFcTI8', 'W4TgrvBcUq', 'yxGJdmke', 'rt/dTrubWQC', 'WOrLW6HPW7K', 'WONdRbZdOmo/', 'peaszCoCyG', 'qtNcGcZdSW', 's8kalCoAcq', 'wCkjmmk5rG', 'Ax1KcW', 'WOGqWP/cSSkX', 'dSogWQDnWRq', 'Fmk2WQNcS8kXW4xcUCkZzaNcII4', 'W4e/WQ7dUHK', 'qNT0fca', 'W6bgxeRcV8kpvfddRYasWR8XW63cPWXIjCkGWPWeWQfzW6tcQqJcHCoyW6VcTmoIB8kG', 'zSkv4P+mgoodKG', 'q8kfWRVcNam', 'W4FdOvZcI8oG', 'rIxdTe/dSW', 'yLnuhca', 'WPX0ma', 'wvNcI8kpkLBcM8kXtSkPWR4MWPeBtry9W4BcSdqm', '44k/5yAj5zYT56w657QVfwG', 'WR7cTCkeW71Qix7cIa', 'uXJcQJddOmkNk1FdIZNdPq', 'lCoru2Kf', '44o15yES5z6V56sF57IRi3VNP4/NUAhKU6lPHztNV5tLG7BMIPVLIia', 'kGuEpai', 'imoWWRVcOJldQvu', 'WPlcKCkJW456', 'm8owc8oSW64', 'WONcJYCVW4C', 'hI4vary', 'WORdSNdcV2/cJW', '44oe57+Q5yga5Asi6lwbWRnq', 'W5DjsmoIdq', 'W7RdMEkCHwdJGQ8', 'WO7dH1FcQ1W', 'WR7cTCkeW71WjW', 'mSoByLqA', 'A8kwv8o9W50', 'W6yEWOxdVq1rlG', 'tCofvCk2l10', 'WP9rW5XdW7e', 'W5ilt29A', 'qHejxCkj', 'W6amBv5I', 'W5GDWRddRtW', 'WQ8MDfVdTa', 'omoTWPNcIsu', 'WQBdLd3dJCok', 'd8oCWRb9WQu', 'WPhcNryMW57cLrldQSotWPC7ifhcOYFdVsxcVq4sW7joW7hcOCoqdNujAsuEWPn9W6RdMsK7ffBcNMFdLgfFWPxcJrmeWOOYeSoVW6tcUcVdSZCGWOnJWQ10WPdcLCoKWO/cHmkOpNFdPsbRA1PBW7VdHSozC0vfW6ySW7ntiexcI8kfWOLeW73dVSkXWP/cS0vhW4xdQHVcQmoCW5KTW4jXcCkRW7pcI3/cNapcM105WR4jt8kjlCo/eHiJWOldOW12W6ZdQSoWW4VcJf/cLfDVWQlcTG', 'EmofnbzM', 'sW/cPttdKq', 'wCkljCodha', '44cP5ywM5z6U5RsI5RgHWRbk', 'W744WRtdJX0', 'wNpcImk3ea', 'stFdQrmoWRtcTW', 'b3ybrSox', 'W6OWWQHtWRGSW5mAvwukWQa', 'tI4rWPNdRG', 'WRy9WQv9WO4', '44cX6kAU55+a6kAc6AceW65u6k+r6lAc5y6Q5RcH5P6S5yYx5OMd6kkl5lUn5yQa77+p5yYh6ikp5PME5PEJ5y2j', 'ySoKpWfg', '44gi5zgQ6As/5OIi5yYBiSkz', 'tCoGkCkgshxdMCoqWOu', 'p8oeCgOx', 'W7yyWOldUb8', 'WPypAxNdPa', 'ESkIF3rS', 'gLFINk8Z44o1', '5QYUW67dQow0TEwTIoAkPSog', 'W74Wyvb8', '44gU56+J5yM86kwc6AcOWRddOEIpHEw9QEwLREwjIM0', 'W6X+ACoxbq', 'B8ocCmk4gW', 'WPqFWOHtWOm', 'aoMgVEw7IG', 'WPP8kYzsW6K', 'W5eEWOxdVXS', 'kfFdQsLe', '44ok5A2A562h5Q6d5PwUCI7MRltLPi/LJytLRPhMIzq', 'v8kHWR/cJc8', 'BelcN8k3cG', 'cfCCtCoa', 'WPDXW6HOW7NdRSkgWRGtWPPMWPjkW50', 'WOqZWOpcMSkG', 'zNSyySo7EdG', 'WQ8gW4NdQW', 'nqy1hGHQ', 'WPnbW5vmW7i', 'ieagva', 'veBcMSk2pW', 'mbOtkqH5W4a', 'WPHuaxGN', 'kmo+lCoTW7O', 'W7ddHhJcPG', 'w2bAmbq', '5QYfFSk65BAs5A+J5OUdW7i', 'WPqfW6BdJa', 'DIRcUYpdKG', 'aYVINjPz44o+', 'nmoCq0uU', 'wSkLWRhcSsa', 'jZ/cHmkAW7G', '44oH5BQg5zcd6lsA6ywUW4nE5OUV6ko+5lIp5yUX6l+A5B+C77+o57QS57MJ5OIN6kox5lQh5yUw', '44og5OIt5BYf5A6d56YGcfi', 'jSorlSonW7C', 'C8kysmokW6il', 'nNSfsSoN', 'WRFdMxhcM0m', 'DcVdN0BdKq', 'tXmZWRNdQCki', 'WQPMW6iYW7C', 'vSkFF2PX', 'WQ1JW7OiW7S', 'W6u5tKHy', 'WQ0cCwNdMa', 'rcBcRYVcKG', 'x8kFW6a', 's8k1g8o+', 'vrddUaOR', 'WQaKFwNdMq', 'EdlcRHhcSCoAWQq', 'Fmk2WQNcS8kXW4xcUCk1CXNcNq', 'W50nvM54pG', 'W4aVWOhcVCkiEK9GW61Jn0hcRYdcQw7dMxNcGCktW43dLaJdQmoxWOGxWPjc', 'WRb2kL4nW68e', 'WP0Zt0ZdGa', 'rSkdomoyca', 'rCk+WQJcUsG', 'mUMePow4PU++S+AwUUweMUs8VowdH+ASRUAjK+IGMa', 'WQ0wW4NdTJZdRrZcUuH0bq', 'W7vesuFcPCkzr0hdMtKvW7qSWQ/cJWHHACkYWOyf', 'vmkSWRhcMr4', 'dSoyh8oXW4m', 'WQXrW5CYW58', '44k/5OMg5BYx5A2C566HfwG', 'WRJcO8k9W49T', 'W5OXsuPg', 'mYVcPCkEW70', 'rCk3emoVaq', 'yHxdMYGM', 'rdBdVx7dUW', 'sCkeWQdcICko', 'WRiYD0hdV10', 'EgtcMSkmoa', 'rCkrs8oYW4q', 'W6NdHw/cT8oP', 'kmoUWQ/cQYpdHviOnmkAWOxdLCoZW7nOW7ipWOnhn8oIaHLsv1VcKsX6W67dKg/dV2dcJ8kmDH/dPCkJWQDIFNy3tCk7rW', 'rCo+oSkyFNxdL8onWOlcKCkKEL7cSCklW6FdGIiNff3cJclcGJBdLmkrWRbyWPz3', 'W6S5yK1v', 'DHmoWORdQq', 'rZaIv8kK', 'WPz0nYbDW7P4', 'FdNdNMNdMW', 'ouerrCow', 'omovC2WA', 'o1tdPWri', 'WPjRdHH6', 'qXBdJXaD', 'WOOXWOBcGCkxALXY', 'iSkx4P2RW4NJGze', 'eCowsMWN', 'wHjihCktlwZcLXNdPSoKFfGnW7FdTLVdV+AFTUIUVEI1PUwpTEAxIoEyQEwoOEwjSCo2W5imhmoubhpcVexdUKCfxtxcKY5B', 'W5VPH4dLUyu', 'sSkcwgvE', 'ECoApZX/', 'krWHmW', 'vCkZlCk2Eq', 'W70FWPldRHSyCKX6WPBdHmomi8odW59sW5DXygfgl8kAESkbDGOkWR7cVfhdMCoYWP7dT8k5WQJcTCkmW5mJDxfwjH/dGdVcICk6xmkobYTNqSodW4xdHa9dWRGhwCkYF8o3wSksWRm9W7/dVCkREmo3WQi1W4Xk', 'WR/cPSkcW4m', 'pCoMWRpcSHO', '44ok6ksK6zE35z695zYUCI4', 'BmodyCkcaW', 'efLrWP1V', 'W4i9WQJdUWO', 'C8koWQ7cGYW', 'maC2pGi', 'o8ovWRxcIJ8', 'BrVdKIOR', '44gy5ysc5z+L5lI85yURWPWt', '44oQ6kEx6Aov5l6Y5OgtWQC96iYb5B+CtSk6WRe/5RkF5RQs', '44cY5yEG5z2U5lIh5yI6W4dcNq', '44ke5BIu5zkS6lEe6yA5gh3MRQZLPl7OPlNPOlVLU5RLKi7OT7JPHApLUlBLTjdOV6lKUitPMz4', '6ywr5BQQj+EnOUMfGfa', 'WRuxWRhcLmkL', 'z8kpySo6W5y', 'uCknlbugsmoqWP/dRbJdJCowW63dHa8vrmoMu1njdNnNWRdcJx7cHCk5W4SiEW', 'u8kfj8kRra', 'WOuYW4ddImo4', 'C8kVi8kcEG', 'rmossCkonvO', 'hSoWi8oXW5FdVG', 'kUMhG+w4Ja', 'sSkOb8oecmkJ', 'q8oZzSkXmG', 'WQeaW5pdOCoz', 'WOiMWOFcRCkczeK', 'vCkxaW4tsmoe', 'WPCXWQP7WRqBWOZdVmk/W67cVMZdMq', 'gmov5PUt5Psp5l2T5Ocq772O', 'W7yeWOldUW', 'CSoKiqnW', 'WRbJW41GW7y', 'sqVcRZ7dJW', 'zIxcTZtcNG', 'kKZXJB+nWRu', 'WO0LW4ZdNCoC', 'imoWWRVcOJi', 'WRndW51aW7a', 'WP0bW5pdPJG', '44o16kA26Ace6AcI5RkGi3VOPRlPOy/PO4pMSQ/MU5VLTiNOVlxKUPxPMR/VVlxORRZMM4/LPjhLHiNMN4m', 'WO0r54MU5P6Q5l6w5Ocn77YZ', 'FriqymkeW7JdVq', 'yCkmo8kJwa', 'gSoQ4PYoW67JGj8', '44cb56605yMY6ksi6AkEAga', 'WR/cK8kIW7zQ', 'vmkBW7ObcSoJdG', 'WOpdTxFcS3i', 'W4KBEN1R', 'C8kyteXT', 'WR3dTcldMSov', 'yflcJmkLoW', 'WRyDW57dPIG', 'hSo5e8oYW5ddRSkKhq', 'hSorv3mh', 'zblcLZhcIq', 'W7npEuhcOa', 'r8k8D05l', 'WPuQxfddSa', 'WRujW6BdQmoH', 'ESkGxKLO', 'WOymWRhcISkq', 'kSoqWQzrWQm', 'DCk4mmkryt0', 'rCo+oSkyFNxdL8onWOlcKCkKEKZdR8ktW77cJI8Ie07cK3ZcKJdcHCkbWQPDW5qRnCkPASoTW7/cPrddV8k0W691gSofxqVcMCkw', 'WOKzW7VdJCoZEdyrW6TOW7vaWONdPSo+WOmuj8kWfSo+W4/dRWldS8k4WPhcGNRcR0vI', '44cb5lM+6AwZ56sV5y+GWQxcUoIUMoAxTUMvNoASPUs5VUwFNEApJ+wSIEs7QUwkNEw8SUs4Ia', 'sCkge8kkyW', '44gm5Q295PEc6AkM5RgIW4H9', 'WOSNW7ldPYe', 'WRPgfqjT'].concat((function() {
            return ['crJcPmk5W7q', 'z8oAdSkcxa', 'DCk94PYaWQtJGQK', 't8kdw0vuW7O', 'kKmLBmoG', 'tmkSeX4p', 'smkCW44TnG', '44gm5R2Y5yQw5BMF5zcCW4H95OQE6koe5lMJ5yU86l+S5B2G77++57U+57Im5OMb6kon5lMs5yIr', 'WQXJphSm', 'WPuHW77dLcy', 'sNigWOS0', 'WQmHDNxdOG', 'W5qbWPldJJe', 'WQawWR9lWQi', '44oL6kEg556r6kEC6AcnWRRdKG', 'W6ukWRhdQa0', '44ok56655yUg6kwK6AkpCI4', 'zb4oDG', 'W6FdJN8', 'rG4MWQpdR8ktW40/', 'z8kpnSk5Fa', 'l8oujCoxW7q', 'WQRdHYhdMSoA', 'WP4etwPNlZfSW64TvdJdKSovy8oUWPBdLfRcHSkUWR7dQsVcO8kCp8o1CNxcTCovzX4CW43cNa', 'D8owgbPW', 'W7pdN2RcPSoKgCkHWOBcQK7dPa', 'uZ3dIfJdRq51qW', 'WPi8W4pdJZi', 'sK09fmkS', '44oQ5A6m56+16kAv6AkTWQC96iYb5B+C5As45yI4WQe', 'ENn/fGq', '44cP5RY65yIL5BIA5zcFWRbk', '44cR5R2D5yUd5BIK5zg8mCkE6i+g5BYN5AwL5yI/W7q', 's8knnHqfw8oCWO0', 'W5uO4P6vsUocNG', 'uI7dJMy', 'WQmOWPdcICkq', 'yt7cSaC', 'i1FdNtD7', 'Dmofhmk6FG', 'ASk6AwXc', 'WPZcICkhW4nz', 'q8k+4P6tW6FJGzO', '44gb6kET552+6kEM6Ac/kNhMRAxLPi3NN5dLUQBLKiVOTl/PH6hLU4VLTlNOV5JKU5xPMym', 'xYhdNMldOq', 'W7mPu3Xz', 'W7OouKTc', 'dEMhUUw7RW', '44c15A+p56YR6kAM6Ao+W6NdSG', 'i1tdPafoW6jbW7ddM2pcNdeqW53cOmoAWQ8Ap8o3gghcTmoSW6jfuHbBA8o7mSobW7ddR8ocjgqjW6RdQCoDW4pdUmoOW4blWOFdMrvet3GoW4C+WQj/WPtcSHWZg2y1caeXr8oPnmkCWQ87', 'tSo8atbf', 'oqVcGSk2W4e', '44oe5Pgw5QgC6Ak/6yA1WRnq', 'sqlcRYhdRq', 'BmohaCkGtq', '44c15PA455Qa5lYv5Og4lmkw5lMZ5AEc5PEi5yAVBW', 'p8oWWPbiWOy', 'FCocg8kWEW', 'W7nWiva7W7KrWPldHmo0W7/dQ8o/mmkjkW7cGSkoW6hdIfZdTNG', 'r8kpWRNcOtS', 'W7ekWPldVW', 'WRydfCoFoavQWRtcHG', 'kKZINODK44kf', '44cY5zg/6As56ks66AckW4dcNEAiQ+IINos4SowlR+I9N+w+HE++UUE5NUE7KoAjPoIGLUs5HowjOG', 'WR8GWRnkWO8', 'ch5bWPDr', 'rSkEtL9iW6C', '44og5yEC5zY/56AL57IUcfi', 'qmkurKX1', 'CN0fWQyh', 'qZNcJcBcGq', 'pWGGnI92W5xcJYLq', 'sSo8acHt', 'omo6WPNcRWS', 'WOmSWPpcM8krCq', 'hSoKWRtcRWu', 'WQJdLaFdLCop', 'lmoSWQ3cMctdIq', 'qJ/cRrFdOG', 'vb09WOG', 'W7ryxN7cRW', 'WOC+W6/dLmoC', 'WPLJfJXD', 'm1y+WQjj', 'lCo+WRTpWPS', 'WR81WPnUWOe', 'xJqwvmkU', 'WPDujgKd', 'W550zCkYDq', 'W4JdOe7cMSo4', 'WO4UWPVcQ8knDW', 'WQmjW6BdTSolW4hcO1ddNM3dKCkGW4FdRCo0rG', 'FdNcVG3cVCoyWP7dUcPQWQW', 'smoHlCkXzwq', 'dCofWRLuWQTRlCo4W7X6W4ZdNWTmmrbrW79eWPRcJmkAWRhdHZvUtmonjmkaW5W3W6C6W5WZneddOvRcJmoZg8kJWRu7nqa', '44gU5zkE6AsH5OUx5y+yWRddOEIpHEw9QrS', 'WQfLW797W4O', 'tmo6pSkezcZcMCkwWOBcL8kKpfpcO8kjW6ZdJc8Qe07cKZdcI2/cHCkvW6PeW5iLoCkOmmk9W7xdOXldOSkQWQv1u8o3AcddKCkbWPDrCmkVW7FdQKtdHu8XFxqPbuDWitZcQSkoDSo8WQddGa7dU39EkCoY', 'WPjEW4CPW5O', 'aSovWPdcQZi', 'v8ktWOO', 'WP/cVbKgW4K', 'WQvfW4mKW5W', 'EKODp8ka', 'wCkkW6qjpmoPc8o1uSoUnLnIadTjWQFdPfa9WPPdsSoVWPyAnGT0W5FdTaVdN8o8W69yC0OFWRNdJCk2W4JcSmoXW4dcN8oR', '44oe6kEt552g6kE/6Ao1WRnq6kYo6lA95y235RcN5P6s5y215OMQ6ko35lU25yUo77+T5yYc6igZ5PQs5PAc5y21', 'yH/cSrFcVa', 'xSo8bJO', 'ofr2WQvpWQdcGezpWPNcTG', 'WQ7dIWldVCov', 'WQ/dH37cSCo6e8kDWOtcSqxdUCk6W7rQWP9NWOldTarId8oEzXqiW5ODW5GxWQadmKXwW61olSoCW6JdHCo2WRFcH3pdTmoJW5ybcgC', 'W5apD29R', 'WPCHW6ZdLmog', 'tapcRahdP8kM', 'r8knvwXFW5DXW4D/WO5Dt8kVhXhdQICI', 'cCoSc8ooW7u', 't8kXbY45', '44cd5A2O566w6kw56AcDrvlORB7OTARLJ4pMS7xMN7NLJ4NMIPROOR7KU7lLI5lVViNLJ6dOGQJMMQFML4VLJ7i', 'W6FcNEkCU8kp44kU', 'A8kDic4y', 'WQ7dKKNcSNe', 'WQOHW5tdKCoD', 'wG/INBaa44k+', 'WOeYAhldHW', 'WPT0W790W4pdSSkxWPquWPLNWOPhW4RcN8k3', 'WPu7WQ5U', 'WOjUW7XpW5K', 'umkwv8ovW6K', 'W6ZdHgZcL8oJga', 'WP00WRJcMmku', 'lSo7WQVcIIxdIeC0', 'vYNcVZpdPG', 'lexdPa', '44cH5RY25yMp5BQe5zchWQVcRUAVS+wLL+A/MUwjLEw4TEwsToI1ToMhSEw7P+w1LoI8Uos7O+MAOa', 'W6qJFMaRW64ZWO/dRW', 'p8kVW7hdSa', 'E3e7imkA', 'Fve/WRiv', 'nJGQpW8', 'WOq4W6ldVSov', 'WP8xyLhdQW', 'hSoSWPH6WRC', 'WOytWRHmWRC', '44kr5zkO6AwM6ksu6AcaumoE5OQc6kkj5lUr5yIG6lYu5B2477Yt57Iz57QL5OQt6kkj5lUq5yQ3', '44g956+l5yU56kE+6AgtmMZORANOTRpLJ6lMSipMN7NLJPZMIiBOOiRKUPZLIOFVV57LJ43OGiJMM5hMLyFLJAS', 'kshcGmkgW5K', 'ydddSdyM', 'q3PSfXu', 'tSkQhmkUs8kIWQxdP2tcU00yWRRdJY3cOSoHvCoQW77dVmkgW4WcW7xdS17cIdGC', 'WORdUhNcNwNcLq', 'lexdPdXsWRyAWRC', 'e0K6CCoO', 'l2n8WPXE', 'D8oLmrzA', 'qmoVpSkv', 'kqGGkb8', 'pemFuCou', 'W7eSEw4bWQaGWOT2u8k0WRWIWPzBW5ypy+AjOoIHM+I1K+wpJ+AoJUwpIEEmU+MfNKWEjCoommkRFxzqkmk8adPQWQC1vW', 'o0L2WO5uWQe', 'q8kJW6ldUNFcMW5HymoiW5BdH8k2W6mIWRHfWO7MIyBOOjtOTRBLJPJNRyRLIjFOTB/PKOBdLh8KWRZcItFcPMBcKSosi0pcQSoTW78RFG', 'rX09WPddOSkLW5aTWQJcLc3dTXVdMmon', 'ESkwi8o4ba', 'lqlcQmkEW7W', 'W7OCtw9L', 'DCkEW64bfW', 'yXBcQcBdGq', 'AmoopWfs', 'gaudgcW', 'WRGXW4ZdTdm', 'WO0JW7JdMCow', 'WRTi4P20kEoaNa', 'WObLW6LXW4pdRmkBWPqv', 'WQ4eWR7cVCkK', 'WQTPW6mbW5f1W5i', 'WO7dTNxcLhu', '44ke5zgO6AAl5OUn5yYjgh3OROBML6hPLiVMRj/NMkhLPjlLIjpLTydNU7JPOAtLJOROV4NKUOG', '44gi5z225z2I54UT5Og7iSkz', 'WP9l4P+JWR7JGBG', 'WRxdVwZcTxO', 'WOmvW6hdOmo1Bt4', 'c8oqWR11WQ1MomoK', 'tbpdMYCc', 'WRribtvX', 'wSkfmbeUt8oBWPBcSfVdHSo9W7ddNaWvda', 'aKFcM8knmLRcISk1zCoWWQ8RWPmbC0O/WPBdQZywcshdHq/cT8ovW4BdRa4iWRD2p8o5trxdNCoIWQ3cTtKzEsjnvCkrtmo1bLxdTSosdSo6kIdcI8kXWOKkW4rkh180q0xdKSoW', 'j0Cps8o9', 'WRFdRuRcV3W', 'kLrWWRbwWPhcGvneWO8', 'WQivW7RdJCo1', '44cN6kAn556X6kEb6AcixsxOJOFLV5tLP6FLIPey', 'sSoum8kGwq', 'oLxdTqneWP4pWQ3dM0pcNd4y', 'oJlcMmkdW7S', 'AIhdRYeH', 'DSkazwrl', 'CsG3WRldJa', 'W6v+W4NdO8oEpHe8WQrXCHxdTwJdTxZcKMJNI6BMN4VLRzxMRBpMOQpMNklMMzpMLzLqW4PaW5iYzSoSW4ZdOmoKWQdcTSoMWQWZvG', 'FCkJWQBcO8kRW5S', 'lXZcOCkN', 'ysulqmko', 'rxK5gmkL', 'CZixWQxdJa', 'kCom4PY5iooaTG', 'CmolaGfb', 'WOOKWRH0WPKrWRBdQSkNW7lcRNddN1FdG8kfhuG', 'BaBdKYC/', 'pSoKWQ1YWPC', 'WP8FWQTtWPm', 'yguWfG', 'CCkIuvfn', 'r8kdswjkW61WW49VWOHA', 'rCkGWQNcQ8kP', 'W5KpWQhdHaW', 'FUwiVEMsMW', 'kCom4P2WiooaTG', 'WQldTKJcL04', 'h3FIN5Hc44oa', 'WRijW73dRW', '44kr5ys35zYX54MK5OkqumoE', 'F8oFpdf0', 'WODTW7rcW7u', 'W43dMM3cG8oG', '772f5PMQ5PwV5PsX6zA+7768', 'w8knWQNcJSko', 'WONdSvZcOfy', 'W5f3rmoNfa', 'Ch98esC', 'WOFdP27cThlcHmkJW4j0WQRdGsnxW7rQwmkecqOCW5GhWPe4W7ddOmobWOnKDmon', 'gLFLVldLIz7NIQ3MNRpcOG', 'r8knsge', 'WP1SW6GzW68', 'vXBdJ2ldUa', '77+J5yIQ5l6T', 'WPRcNd8RW7S', 'xub3dJG', 'WOmvW6hdQCo7DY8C', 'WObJkuKN', 'W5XWymkGyKSxiM3dQa', 'rmkjseHjW710W5u', 'DXtcIcZdHG', 'W6FcNEkDSSkp44kU', 'WOhdKHddQSomrW', 'nqeInIG', 'WPZdQchdICoA', 'yXBdU2ldVW', 'WQmTWPPUWPq', 'a3FcGJ7cR1DGvIhdGgvF', 'W6SIC21V', 'WR9HW79QWRhdGCkEWO4xWPa', 'W5TmDxlcRa', 'WPv6iane', 'W5yEWQxdIWa', 't8k8frGX', 'W67dIMBcTW', 'zmosA8k+kG', 'WRRcQSkzW5DWpa', 'DfCoWOGy', 'WPqAu23dKa', 'W6XVyx/cKa', 'vmkvW7mGj8o4', 'WQJcS8kxW5zRo1hcMeNdJ3G', 'WQX3W5vEW6O', 'r8oEc8kGxG', 'WRqWW6ZdLSoG', 'WPSIWP/cU8k8ye1YW7eto1hcUdddTxdcIshdNCk4W4/dJWlcQCoaWOWVWPyEWOXGlSk/WOxdOmoOWRVdQmk6W6jMnmkyWQ9/W6HDW7fzW6maASkcWOHNAGVdMSkhWQbeW5LKW685W6DZbSoDtrRcJYW9tJuFqhtcO8ovsXVdRq', 'omoavx84WP0', 'z8kpoSk5vW', 'WP3cNdOZW57cNHS', 'WRzsW5X5W5K', 'vCkkjHKz', 'xmkcWRZcMG8', 'WRP5nJjB', 'WQqyW6tdT8oTW5lcP0RdTw3dH8ozW4tdUSo+r8ojyCkumw0HChu8aq3cM8kMW6NcMG', 'WOSw4P2GbUodHG', 'pCo/WQZcRbxdJ1C', 'W5vt4P+2WQpJGya', 'lSo4reWf', 'ACknoJeT', '44cY5A2X566n6kEg6Ak3WRiM5OUb6kgh5lIw5yQu6l+x5BY2772257Qf57MY5OIS6kcA5lQN5yIh', 'stNdLtOz', 'rmkeWPVcMJ7dPmo8wsfSWO0UWPTb', 'FZlcQWNcLa', 'oCoRWQZcRW', 'WP5JnGXiW7rTW4u', 'WQGaWPLkWRC', 'B107d8ku', 'dx92WRrC', 'WRHsW4qZW74', 'w8kpW6yxmmoKhSoEvCo0nq', '44cP5BQf5zoE6ls/6yAeWRbk5Q2o5Ass556k5BIN5zc26lwa6yE85BMn5BEm6l2U5lUd6zMM', 'E8k2aSo9ha', 't0OrnSk7', 'WOa6W53dJSow', 'WRObW4JdNctdSbRcOW', 'W7jrFgtcOq', 'WOFcMca0', 'bCo/W7xdUSo5WOVdM8oRiuddHxlcU8oQW6pdVW3dPow/MowLMEAjPUIHU+s9P+wqVEIhUEAEICkxFLzUW5BdMSotseCSF8oOWQTAfmkj', 'W65q4P+zWOtJGOq', 'WRP2lKed', '44cY5Pwk55QE5lYD5Oo0W4dcNq', 'ydqeEmkZ', '44cN6kAS6zA75zYy5z6PxsxMIkdLI5ZOPzlPLkey', 'WPr7cJHM', 'WRePA3/dVv4l', 'hCoWWOnRWPS', 'khn8WQjp', '44cB562S5yI96kAJ6AoWWQHU', 'jWVIN6VdJUobIq', 'WQ4wWRVcPSkl', 'v8ktWORcQcJdSSoHuHPP', 'DsJcVcFdVa', 'vay5W6WhW7pdMa8aW4hdRHtcJaW5W4hcSudNI4ZMN63LR5VMRAFMOQhMN4ZMM7/ML7ddOJ4Es8kGW5Slw1BcRmogW7rfsedcJa', 'tmkrmrq', 'WP7dNaddUmoV', 'zCkHa8khDW', 'WQWhW5VdTYxdQJxcTvrLgmo9', 'vKqoWPS8W4a', 'h8oMzKqm', '44c15OUD5B2k5A2P566Mlmkw', 'FayoxCki', 'uJFdIqqg', 'smkya8oSbq', 'uYFdSIOK', 'xHVdQWCe', 'CZBcRW/cG8ouWQBdVWbJWRzaEea', 'WO0xW5ddSmoB', 'xtxcLcJcMW', 'DaWWWP7dJa', 'WQjWje0', 'zmotDmkDlG', '44cB5O+c54695BIA5zcRWQHU', 'WQrQW75/W48', 'WQfuW4PkW7m', '44kq6kEv6zsT5zY55z+MW5yv', 'q8kqg8k8FW', 'eHGtpaS', 'yvNcImkjkq', 'WRFcQmkrW6DSoG', 'WPNcLY0LW4C', 'WOX1pxqw', 'WQGHW7ZdJSov', 'mmk94PY+E+oaPG', 'WRejW6FdSmoBW53cR03dQa', 'moMeM+w5GW', 'xCkSlmo0ea', 'WPuXvx3dGa', 'vbVINihdSEoaQG', 'WO9/cIj9', 'WOC2WRVcSSkt', 'WOOwWO7cN8ke', 'WOeiW7BdJCoGEc8DWReRW4roWP/dLmoSWOXwoCkKz8oLW4VdQH7dUmkT', 'pmojcmoQW54', 'W6ZcNt7NSkpNU4tMJlFNP7JVVQZKVB3NMyhOTONLJ7VLT4/OTilLH7/KVAROGRRMJk7LR7pNM7dML4NPHRRMMAdMLQVKUONMIRROO7JOH63MNk5tW78', 'uWdcHYpdRq', 'lSoBWRpcQq4', '44cY5yEG5z2U566c5yQRW4dcNq', 'ihpdKr5x', 'vSkNWOVcRWK', 'urS+WRxdOW', 'DCk+ncGg', 'xSkdnZ0l', 't8osu8k9kf87', 'WQ0UW7pdSCou', 'WOy3WQBcJSku', '44gb5PEg6AwL56sC5y6RkNhORy/ML5lPLk/KU6pMLQJPPBxMROxVV4BMIQZOOkRMLlBPPipKUQtLI6e', 'u0NINj5744gQ', 'WP4etwPNlZfSW64TvdJdKSovy8oUWPBdLfRcHSkUWR7dQsVcTSkgnmoIjdVcTmoRzbygW4NdI8kOrmorWPCQW6ZcRmk3fSorqwjj', 'WQWgW7ddVSo8', 'B3/cM8kmoG', 'W7GoWPxdRqLfoa', 'fCoXbZHDCSoDemoehmo2WR3dKqezeZudWQPmW5ZcRvBdQSkFW53cSCkxWORcUdhdS8kOW7FcTaO/peVcGdC+Chu', 'bGdcLmkLW6e', 'qmkjWR3cSSk1', 'WO4NW77dJSop', 'DSkmdGqj', 'sCo+hsLtvmoCemoCuSoGWRFdKW', 'WP1QW75/W6q', 'hdeNfs0', 'qs7dK3m', '44oo5yEV5z6a5lM45yUXWQnk', 'WRHTW6q', 'ESkVySojW6G', 'WRxcKSk7W4Dq', '44g96kww6zEi5zYN5z+YmMZMIPZLIiROP7BPLQpdKa', 'W50hx0X+ja', 'W58jvwW', 'uY7dLKRdNq', 'WOW6WRL/WR4', 'erG8mqa', 'wCkyWPRcNJu', 'a18Ey8oO', 'iujxiCoDW7hdVIX5W7ZdGW', 'bhH1WPv5', 'ddNcGSkyW6m', 'WRjTW6mzW697W5m', 'W4SCW6ddH8o/ydGvWQPQW6ngWPZdVSo+W4bpESoUtmoLW5xdRKtdSSk2WO/cJNVcR0vMccCar8kayvK7', 'z8oNACkEfG', 'WRvqW75PW6y', 'BmkrWQZcGmka', 'W5tPH5xLUPVVVjBMLQRLH6xKVRZLGRVMRipMIPlOOz8', '44cB5Pgv5QcC6AoJ6yAWWQHU', '44cH5A2R562p6ks96AoCWQVcRUIVMEI1MowpREAXHEADG+wmKEAjIEIHRos4NEwiH+++IUwmHUIaJEABHoAwLowpJq', 'W6CoWPhdVXPggWjLWPldVSonnSohW5DWWOS6EG', 'xHdcPcBcSG', '44ok56655yUg6kwK6AkpCI7OJyZLVRhLP73LIQXK', 'WPWLWOZcHmkb', 'WOpcVdehW4C', 'p19BWRDBWQlcIvbCWP/cUbtdL1bOWO/dQuBdOCkVvSowe3zTmSkTBH4rW7lcILifbmo4WPxcLGGqe8ovsaVdNbKmB8kHgxpdMb88W7/dPSoiWQi5fCktrd7dNdHAWRmxW5CaW7TRFCkgrN7dMrRcGcaQwa/cJSoYefj4BJ7cS2VdVCkDWRbHwCo4W7fNgrbiW47dTZBdSce9WQWeWOBdTCkpqCoocIeOxXFcR8ooyCkXWQRdKtfIW7JcIbnQkZtcISoEW4xdJCo/WQnefMxdQxHQAMzfW6n6W64ECNa', 'wLGyWQeQ', 'eSo4p8o3W5JdRCkK', 'WRtcSSk1W5H8', '44ou5yE05z6U5lQs6AAuWOVdPUIoIEw8IYi', 'WRSMrMZdMW', 'WONdJbZdG8oi', 'W4/VVy/LTiBMM7hMN6pMLRpNIAtMNk3MLBNPNyZMMRVMLPJLV4JLPP7MIQ/OOi3OHRxMNAq', 't8oUfYLPySoA', 'DdiYWPBdOW', 's8kfkWG', 'xrW2yCkp', 'fmoZamo+W5m', 'WRpdM1ZcRv8', 'lCotvvmZ', '44c+6ksy552+6kwD6Ao3W7BdQUITSoI0R+wmREAYGoACVowmPoAlNEIGIos4UUwjRE+8TEwnToIaREAAUUAvJUwnKG', 'tbNdTgldOa', 'WRXIdeSwW6Gj', 'W5jCwgdcTa', 'BSk2WOxcLCkf', 'lSocs0KI', 'WQnNW45nW5C', 'zCkuu8oAW74', 'W7nqvCoTkaTn', 'WPvZfrrg', 'yJBcTby', 'ASkWWRRcMmkQW5K', 'w8k7bSoWfq', 'WRntW7nkW54', 'W6RdQe7cQ8o5', 'W4eXWQxdTsS', 'ESkFnmoOia', 'W47dK0pcOSoM', 'WO8KA2RdMG', 'uCkdsw5c', '44oH5zo66AsK5OIt5y+EW4nE5OUV6ko+5lIp5yUX6l+A5B+C77+o57QS57MJ5OIN6kox5lQh5yUw', 'ychcVJVcIq', 'WPbOn28N', 'W6OeW6hdUmoVW4JcPv/dQc3dKCkFW4NdVmoWbSkeCmoylwu+zMjNuH3cMmkFWRhdKxJcQgtcOsddK8o/WQBcImkAWPPXD8k0WO9c', 'W7qiWPldTX5lkrPiWPVdI8oC', 'W5voWOFcVM3cPfFdRreSv8kHWRxdMmohkrXg5yE+5OQG5yMFW4a', 'ANKZkCkA', 'smkpW6Cn', 'W6LdqmkSqG', 'xKlcUSkzdW', 'ss46sSoiW5ldLvbeW6W', '44oQ5A6m56+16kAv6AkTWQC95OUr6kch5lQv5yIO6l2g5B+0776N57Qb57Ig5OMv6kcp5lU85yQ2', 'hwZdQdbw', 'WOldTMRcUq', 'b0KGzCoy', 'dWdcVIFdVSkTf1xdKhldUmomWP9rWQyzv8oYW4CgecddLCo5w3xdSrFdSmksh8ksDSkruLzyWQnq', 'W6Hoy2FcHq', 'BSkcW4WmeW', 'x8kfmrq+s8oCWPBcUfVdGmoC', 'WQzRW78zW6S', 'W7KeWOhdMXPq', 'WOqBWO3cKCkS', '44cP55Es5OQJ5l6e5Oc6WRbk', 'gCovqu8/', '44c55ysR5zYD5lIs5yUGch7LPzpLI4vj', 'wIddNuldQXu', 'WP9eh3aw', 'A+MhSE++NoMzToIVHUAuRUMuKCo/', '44ke6kAP55+T6kwy6Ao5gh0', 'qmkPxxvf', 'CCo4fYSBsSosgmogvG', 'p8kMn8kTzcSJbSkkW7jjWRtdQ8o8W60Vf1ddOSo3W75PWPNcVftcUg5HdHxdHCoLWQddMJfJWPi6WRrVW7ldV8ka', 'vSknbmoWdG', 'hCofhCoQW5y', 'WRrZlL0bW68yWOldSCoRW6VdTCoQF8oiErJcMCkuW7tcJadcSxeyW4lcUmoBWPK', 'ra3cVYu', 'WPLHW6LPW73dP8kx', 'WReVD3pdSey', 'Eh/cUSkVhq', 'd8o8pSo3W5W', 'FSkQmtGl', 'WP3cKcCPW5JcMbpdRCkhW5K+CKxcRYRdOM3dTW1zW79gW6NcRmoQhhebicnmW4W', 'xL8sWQ01W47dS8omWQ1eW6/dPtCVsSkSv8ofjsdcKSk2D8kBWRNcNgzJfaXPW7C', 'fCoXbZHDCSoDemoehmo2WR3dKqezeZudWQPmW5ZcRvBdQSklW5pcUmkxWPO', 's8k/W6ypla', 'yJBcQqFcOSoFWQ7dPtbGWQy', 'ESkGWQBcTmkW', '44c16kwi6AoB6AgY5RcJlmkw', 'd8oAWQ1D', 'mv8eCmoN', 'rCoIjG', 'qSoik8kXrG', 'DdJcGYddPa', 'AhSMfCkhW7ZdOCoFWR3cP8kxWOvjnmkAB14XWR7cGSkcFY/cSCo/WP0LobtcPmkpy1NdNt/cSSoYW7ekwqBdO8kJWRnLW7XDlW', 'W5qAsLzIoq', 'FCkfqSorW5mnf8oOovGGWOzpWPNcL2ySDNS0W7WoDG', 'WQejW73dT8o9W67cSv/dQghdGCkPW5ZdRmoIxmkEnq', 'WPqrW6FdL8oX', 'jJdcGmkbW7u', 'WPRdNb7dMW', 'w8k1oCo0bCkTWQBdSfRcRLnCWQxdNq', 'u8oZfJ5o', '44ou5O645y2c54YR6ywvWOVdPUAiRUwiG+ApKUEmMq', 'DCo+kCkqrW', 'W5uO4P+CsUocNG', 'CYxcPJZdKW', 'qeyqWQ0M', 'W74K4P6FoUocJa', 'WQKhW7pdNSo2W4m', 'uCkcW5SKbG', 'qbNcLsVcTq', 'h3FINPfc44oa', 'bslcSmk1W4u', 'W4TJCCoSha', 'WRtcIrKeW6K', '77YV5BAo6k+Q5lUX5PMV5Pwk54U15P2G', 'k8otWPbIWPO', 'qfKXgmki', 'eGW3k1DzW5xcItXE', 'fCk4F8odis7cJSowWQFcTmkZbLC', 'WRL+kNWwW7S', 'ymkIoCosaG', 'sMi/WRuw', 'wmowvCkAja', '44kG56Yw5yIi6kEp6AkDBhlMR4lLPRpNRBZLIjZLUk7LK7/OT7RPH5pLU4dLTjlOVzVKUB/PMQi', 'WOddQbpdI8oK', 'luTOWRHo', 'WRmCW53dHIldQW', 'fbBcT8kJWQhdK8oMvs09', 'gmoQuM4b', 'WOarW6hdHq', 'Bev1msi', 'zCkBF8oSW78', 'WPiqW6xdTSo9', 'zJlcVJ3cPCooWQtdOXTLWQC', 'DSkSW5CCmG', 'WR5SW48mW69WW5OEvNCKW7RcKepdP8oJb8kGWRZcSCokW6POq8o8WRy1WO8wzepdImosW49rW6bbWOFdPYZdVmkmhCkxBhizE1RdPCouW6ryWRvwWQVdNrNdVSoPF8k2e8oIDCkXW7xdNmoHWRDCWRCQW77dHMNcUblcHCoJDSosW7ddMmoyhWpcNCoSW7dcQI/dPMS1u1eyW6GtW5BcR8ofWOCwW5v5WQtcM8kEvCkzwfGJrtbD', '44gU56+J5yM85l2L5OowWRddOEIpHEw9QrS', 'WQHkW5i/W4W', 'WPtdGL/cLM8', 'W49Lz8kTEuWPohhdQSo0x8oIWOZdQSozb8kEWOFcVCoRW5NcKmoyWOqPW7GVBmomW6C', 'WP50keLjW4GCWOldRCoL', 'gxKMu8o4', 'DqNcKr3dVa', 'l8oxbSohW78', 'cCo1kCoiW5a', 'wx7cQCkQeW', 'W4HMBmorgq', 'WPjDW6ObW40', 'h8kAWOVcMcBdQmoTxqO1WPWJWPLBqCojW5dcT8ogWOtcILDrcNtcVbdcSwBcKSkSoSoOj0RcJ8oxcSo3WOjmW6BdKa', 'WROhWPpdVqnBpGjJW5ddKSomi8oxW5myWPrTixPvmCkqoCoiDrvbW6VcTf/dR8oGWP7dS8kZW67cICkhW59LBxXUjHxdHh3cGmoK', 'WPJcItaRW5G', 'WP9Wmdi', '44cy5zci6As76kA/6Ag/WQxcOoATPowNVEwtI+MMLow7LEwrU+I1G+MeVow4MEw3M+I+OUs7KUMAVq', 'umk8W589na', 'WP7dUe/cGL8', 'zSkv4P6fgoodKG', 'oCotu0e', 'WRHsW7f9W7a', 'nCorv0yM', 'Emo5cIHx', 'nCoLB3at', 'vSoRpCkvzxldSmoyWPNcK8kEpuBcP8kbW47cKgqW', 'imonWQzRWRa', 'DHlcVbFcSW', 'zZFdMWC9', 'WRhcI8k5W6Xx', 'CbuSWPVdKW', 'BmkTWQZcOG', 'A8kJWQhcQ8k9W6NcGmk/CHtcIYFdMCk0WRhcT17cSa', 'W63dPwBcVSoj', 'WQWgWO7cH8ks', 'moMeM+w5G++/GUAuUEweT+s8JUwaU+AUNoAkUUIHVq', 'w8kNwNbX', 'W6yFWOFdQH1raGb4WPVdJW', 'WR09W63dLd4', 'E8ktWPVcI2ddKmoIvqH/', 'WQehW5ZdICoI', 'zrZdTbO/', 'sNNcGmkaga', 'WPxdGfFcV0e', 'y8krmCo2fq', 'EKqiWRC3', 'kmoUWQ/cQYpdHviOnmkAWOxdLCoZW7nOW7ipWOnhn8oIaHLsv1VcKsX6W67dKg/dVW', 'd+wlNoMtQG', 'WOm4WRj1WRq', 'EmkWWQhcS8k0', 'WPzcjZ1Y', 'WQzLle0rW7OVWO7dO8o0W7tdUG', 'W5dMS43MUR0', 'BgWXhSkhW7NdTa', 'ECk4D8o9W7G', 'i8ouWO1HWRm', 'F3zkdci', 'y3XPabK', 'nmoCqu8', 'BSkDW4Cdja', 'W61zs2pcPmkE', 'W6jaumkRrq', 'AcOeWPFdJW', 'usRdJKRdVaPNvthdOKnxcCkN', 'kEwiJEMtIq', '44cI5BMj5zc26lAE6yAdWPxcVUs6OUAUUEEDOUw7VUwtGo+9NW', 'E2lcN8kEhG', 'WPhcLcy1W5hcJq', 'WPiJCe7dVq', 'W6qEWRpdQGm', 'W7GiWQFdLqe', 'xbmKsCkb', 'xCkOh8oFfa', 'W4JdUvlcOSo0', 'WQWgW7FdTmoPW5tcMvFdSMtdHG', 'W7xLPlJVVyhPMlZORP/MLB/PLi/dIW', 'WRHiagaI', 'WPb3d0Om', 'WP8IWOBcRCkg', 'DH3dIrO6', 'urNcSYtcQa', 'WPTAi3iX', 'W4P6ECkKDu48', 'DCouiZvC', 'lmoSWQ3cMd7dJ0mV', 'WQvWW5TnW4K', 'r0qzWQuHW5RdRmomW4CFW6JdRIaT', '44cN5A+s56Yl6kEb6AcixsxOR5xOTAxLJyBMSOhMNlhLJPtMIQxOOjJKUztLIPpVVBpLJipOG77MMl7MLA/LJlu', 'smoRjmkty34', 'vdpdQbmk', 'W6ZdGe3cOmob', 'Fmk+W6uFnW', 'nKuVvmoB', 'pg/INR8N44kj', 'aCoGWQ1CWPG', 'rXJdSGOa', 'uf8umSk4', 'AEMfJ+w7NG', 'oHWGkr92W43cVYroxa', 'dCoYoCoQW50', '44cI5O+M54+m5BQ75zcyWPxcVG', 'qHe7WONdTCko', 'DmkjW6Cjdq', 'WPNcV8kWW6He', 'ACk5jSkIBa', 'Cmk4t8owW5q', 'm3hdSWDu', 'W6ZcT+kCM8o444cl', 'WQ3dV3tcK3C', 'W6NdHw3cVq', 't8kBW70r', 'yLRcJ8kudW', 'oJVcQahcU8oeWQldSdaJWRTlC1ddHdz0BCo7re5wWRWBn8kHW4ddICkEyf7cJCk8dCoKWRi', 'E8kBq8oAW7q', 'fSo7ufaf', 'dCozWQu', 'mCoDqguKWOa', 'WP7dS3pcVLm', 'pbZcTSk2', 'xuRcNmkDpa', 'xrZdKwRdSq', '44gU5REA5Rg45OQu5yIMWRddOEwiM+s+P++8Oq', 'WRuwW6ZdGSoC', '44cN5yYh6AAQ56s75y6CxsxOR5xMLRxPLyxKUjRLJBdPPAVMRBFVVzJMI4JOOB7MLPBPP7ZKU7JLIRa', 'sJi5rSkM', 'W5GgxgX0', 'W6S6wu19', 'r8kbA8oQW6q', 'vmoyirzZ', 'oSow4P6YW5VJGz0', 'x2aGe8kw', 'zcNcOGNdKa', 'x07cMCkpk0FcTSkGAmkVWRi', 'lCo5WRLaWO4', '44c85yA35z+u56wv57UMgCoj', 'WRTi4PY9kEoaNa', 'rtiqWRBdGW', 'q1CoWRC3', 'WR3dTb7dVmoZ', 'CJlcQq', 'WPrTW7uAWQnDW5Ovqxe', 'tqNcUdFdTmkZeq', 'BM4IhCkpW6VdOq', '44o05BIR5zkx6lwa6ysxrCoZ5Q2s5AE76kwh6AgA5BM95zoN6lwO6ywX5BUR5BAD6l6s5lQ66zId', 'lSkU4PYgW5tJGiC', 'smktWOtcRYy', 'qmkQemo1oCk+WQ/dPNZcTLvdWQldNIhcRSktsSoVWR/dPq', 'DSkuuCoNW58', 'tI8HWP7dKa', 'sreXWOJdVa', '44c8562v5yUE6ksO6AoigCoj5QYB5As4566H5yUN5BI95zk+6lsU6yEd5BMK5BA76lYz5lUo6zIr', 'zc7dNfxdIW', 'rCkypmoAlG', 'WOGLWQxcJmke', 'hmo5b8oPW4O', 'l05HWQndWOJcHebqWQJcU1VdLfrdWPxdQHq', 'DCk94P2jWQtJGQK', 'oGhcOmkmW7JdU8o6tW', 'WP8yC0tdVq', 'AEAYQUA4QW', 'W41RxSoZlW', 'W6ZcT+kDKSo444cl', 'ne4bqq', 'AK3cT8k0aq', 'vvpIN5FdS+ocNa', '44c55AYQ566w6ksV6Aoqch4', 'pbSGbbr3', '44oe5ywC6lw06Ak/5RgqWRnq', 'iSkx4PYIW4NJGze', 'juFdId1+', '44oo5ys+6lAd6Acf5RgKWQnk', 'nGdcJCkWW6pdV8o6ud4StmkV', 'WPLgW5v/W7e', 'zZlcQGpcOSozWOFdSdzHWPDkzKddGf5RoSkG', 'W6xPHRNLUPu', '44o85zk+6AsA6kwP6AcVd37MIlBOOzZKU6lLIQBOVlZLVBlVVO/NUBdNU5RMI5xOOilKUyNLIBC', 'WRxcJ8kJW5vk', 'rX0GWP0', 'dCofWRLuWQTRlCo4W7X6W4ZdNXKskqKDW7jbWP3cN8kfW6/dLZm/xmoxiCocWOa', 'WRSLA3NdPvO', 'WPKEW7FdGH4', 'cSoPWOZcJWC', 'FqRdKG4Q', 'W4ldVx3cKCoE', 'WOWwW5pdR8ot', 'W4ujs2jtoJT+W64', 'qSkrW6WUeq', 'W4C8WOhdMIK', 'gmoSWQHcWRS', 'AgC6', 'W4PtsvBdU8kTwu3dScO', '44cI6kE055236ksc6AodWPxcVG', 'WORcI+kCJSoY44kb', 'WQ1WmWDR', 'mwyYB8o4', 'vaFcSG3dHG', 'j8orWQRcOGS', 'tXddIa8E', 'D8khvCoGW6iq', 'zJyowmkw', 'W7iGAx1j', 'WPddVNRcVxq', 'WRnzW7C4W54', 'W4xdH3NcTmo1', 'WORcI+kDH8oY44kb', 'bNGqvSoO', 'W6vsA8orjG', 'mcxcTSk3W70', 'kSottLq', '44cY566s5yIm5l+H5OgjWRiM', 'WPbLW657', 'vf8zWQaQ', 'sSkFW6mej8oUnCoVtSoS', 'W5f3vSoHma', 'mSoA4P6rrEobHq', '44gA5OMZ5B6q5A+S566mW6jo', 'zJVcPrhdGG', 'AaCxDmkj', 'mmoedCoIW7q', 'rt3dOZu7', 'WPD0lZzEW7jcW44ShCo5W55CW4qjWObBjG', 'CJxdIqyE', 'DcFcRq7cUCoEWQddPs1JWQ0nFLBdINC5Fmk3we5xWQrrj8oZW5VdMmoxkaC', 'W7eX5BYx5yIE54M05P6X77Yh', 'WO9WnZHp', 'WQ8cWRn4WR4', 'DCkquW', '44cY5QYJ5PEz6Akg5RcsWRiM5OQ25yQu6AgR5y+J', 'vmoVomkhCG', 'w8kol8oRjW', 'kKtdJXDCWRqcWR3dL2NcMwurW53cOComW78rnmo2hMNcP8oFWQLBtfmCB8oObmosW7JdUSoCvwqhW7tcRSkpW57dSCoQW4jdW43dOr1nfXzyWPz1W7LGW4BcJerVwWXZweTTw8kZBSoAWOq1WPBcQg1yBSkOWRS4Fs9TWRDDlfpdOYLTfeP/jcpcGtTBWQX9dhBdUXyOW6bEW6JcMMziza3cO3rl', 'C8olhJXm', 'ACkzW5mHgG', 'aCo4WQxcVZ0', 'oSosa8oNW7i', '44oe5zcs6AsG5OMQ5yYfWRnq6kYo5PwT6zw05QYZ5lQw5z6Y5OYk5AYH5lU25yUo5B6Y5lUa', 'xKlcICkOla', 'DcFcRdlcMq', 'gCoGqLqH', 'wCoYgZu', 'sCoRpmk2Fq', 'lNlIN5za44g/', 'xmoLi8khzW', 'zXykzW', 'W7DNFh7cRa', 'W6nfCCoxbW', 'W5aYWRZdNd4', 'W7vxx03cICkaxfFdSG', 'WPrHit1JW6LVW5mQhCo8W7n6', 'CCkTB2v+', 'W7WoWQ3dVZ8', 'fSouWO5DWQS', 'nCogu1aLW4HYW5BdPCoXm0ldRmktDmkee8kSW4FdN8kCWRxcRaPUW7xcKZ9HA8kbcr3cJmo2tI/dSKH2W6PHsSkSxSkakmoMW7ddJ8oqct/cHeissSoUcN5qztfdecZcGCkHW6m', 'WR1NW6G1W6bPW5S', 'W4GzxN57', 'pxvkWRb9', 'WOCEW6xdGCo1', '44cY5OQ/5BY85A6D566xWRiM6iYr5B6CW40', '44cT5yAP6lw76Ao65Rgve8kD5yA36lEG6AkZ5Rkx5RMn5BwT6lYx5lMK6zIP772L6k295PIS5Awu5yA+5PYc', 'lSo7WQVcIIpdIeyOomkg', 'oNO7DSoL', 'WO/dO3hcI0W', 'ASoCzSkDmW'].concat((function() {
                return ['gLBdHWTA', '44ke6kAP55+T6kwy6Ao5gh3OROBOTlhLJiJMSiVMNQZLJQVMI4xOO77KU4ZLIypVVzdLJ6hOG7pMMjVML7lLJiW', 'wSotCCkofW', 'WQSAW5FdPG', 'vCkeWOZcPcpdVG', 'W7BdGv3cLCoZ', 'rapcVIBdUCkXaL3dGdJdRW', 'WRLiW6PxW7e', 'W6HNqmknAG', 'CtBcQqm', 'z8o+DSkhkW', 'u8kpnSkpAa', 'WRjHW74dW6L9W5SzaJKHWQJcHe/dQSo8t8oQWQJdSCoeW6zWDCo/WQuQWOSfDuNdKG', '44o05R6u5yMS5BML5zkmrCoZ6k246lE05y225RgQ5PYl5y2c5OMv6koS5lIr5yUo77YG5y2F6ikU5PQj5Pwf5y2x', 'W6v+W4NdO8oEpHe8WQrXCHxdTwJdTxZcKMJMI4NOOQVOPA7NNQZOPQxPOzBOT73PHlHqW4PaW5iYzSoSW4ZdOmoKWQdcTSoMWQWZvSoe', 'WP8nW6ZdNmok', 'W6ubWQJdLGi', 'adlINyff44gX', 'WRyffSkZqvCDW6tcKCoywN1WWPK', 'vmkaWR/cScC', 'W7amWO7dTGe', 'WOxdIqpdN8ond3f+FxbPWPldVSoIW7PsWODJW5ZcUCo7z8kzA8onBWVcP8ounmoPW5lcQKtdVGdcOqZcUmocW6KsWQv5EmohWPFcSCouBCkKW4bbWOSrWRNdRSoVo8oPoSotlcJdV8owzXjQWOKHW7hcLG', 'W6bgxeRcV8kpvfddRYasWR8JWRpcVXuUkmkLWPSxWR4hW7tcR1NcLCocW67dTSk+', 'sSkSW4uGoa', 'wmkWWP/cVJC', 'WOq5WRjVWQGl', 'smkvW6Cr', 'tINdI0ldVa', 'ytyYxCkk', 'WPJdVIpdMSoN', '44cY5zoV6Awr6kEg6Ak3WRiM', 'W6vJ4P64W77JG7m', 'hJ0laJi', 'W7GgWPZdUIi', 'g0Oqumkdut3dG1lcVG', 'w8okaW1u', 'EtJcUIFcOSop', 'WQzHivaq', 'W6PaxeJcSa', 'exRdLGbi', 'W5vIzelcPW', '44cY5RYS5yQn5BM/5zgSWRiM5Q2P5AsI5RYT5yQe5BMV5zkx6lsG6yAZ5BQE5BA56l+O5lMw6zU2', 'WR3cHSkyW4DU', 'yHFdSqi/', 'nCofgmocW70', 'gLFINAyZ44o1', 'o0hdOGjy', 'p0T0WR1tWQ3cHezuWPpcVqBdM0jRWPlcT0ddP8kPq8obeKX/FCk3D0vBWQu', 'vSkKs8oPW4a', 'FSkxWOFcKqq', 'ymkLsfL1', 'smkTmHKB', 'FwOLeSkXW7pdQCoyWQa', 'xCkBW4tcId4', 'W4TNzCkEFKa', 'nuTZWPv5', 'qWtcJYVcQq', 'CmoqeaPE', 'aqqDksa', '44o05PEK5OQw5Awm5yM3rCoZ', 'ErKhDSkD', 'W6zXw0JcNW', 'qfm4WQWB', 'BwOIga', 'W49i4P+yWRVJGPq', 'cmouWR1z', 'W6KRu3Py', 'WRZdSMBcN1u', 'W7KnqLb+', 'W7yaWQ3dIJa', '44oH5ywL5z2Z5lQ75yIEW4nE5AEE5yIdWQ8', 'WQNdIthdHmo8', '44o15PEa5OUE5AEY5yILi3S', 'WOaZWPhcSmk8DuvLW7WJ', 'b2jRWRzE', 'tCoGlSkrBW', 'WOe1WQL7', 'DSkVW4eogq', 'uapcUda', 'WQ7dJutcR2O', 'WRmHBhldQg0Fpmk4W6e3W5NdJSovgG', 'WOGUWPDlWOS', 'DSktWPhcKIW', 'W7v4BCoJjW', 'ivOquSoxvJddMeNcKSk3jWO', 'WOyDWP5uWRa', 'ySkRWQBcRSkJW5FcI8kZkvdcLIddTmk6WR/cRH3cQmkPWRX7xHCmWOBdHmohkKuWWOtcIG', 'zmknWOFcLSk2', 'WPBdGeBcKg0', 'DIywr8kH', 'WRNcJSkUW4HF', 'omoavx8IWPSTWOO', 'WQmfW7/dK8oG', 'v1CvWQGRW7ddQCoiW6WkW6NdLtCNwmk1fSoD', 'jKNdVHHAWRKdWRRcGYFcNdCfW5hcRmotWRDBimk2egxcV8oPWQPiu1CpyCo+nG', 'WQvdaMex', 'W5aNWPldQIC', 'WPqQAvNdUG', 'W4yZWPtdJsW', '44cH5ywQ5z+e566f5yM9WQVcRUIoI+w/QE+8Ga', 'WQiBW73dTmoW', 'WROLDM3dSfux', 'WRrHpvunW6OrWP/dSSoVW6JcTmoWFSouy1tdGCkoW6BdNeddSsbzW4NdUSkxW4zqmG', 'qCo8omkRy3/dHSok', 'vvpINP7dS+ocNa', 'WParW4hdQSo1', '44gA5R+G5yIH5BIo5zg3W6jo', 'DCkjcSk0Ba', 'qdpdRGe', 'xmkzWPNcVJ/dOW', '44cN5O6F5y2S54636ywixsxMIkdLI5ZMJAhNJPa', 'qx15msy', 'ESocvmkNja', 'WRPLbIvx', '44ce5OIe5B+D5A+/562HWOFdOEs6MUATPEw8JowTNUEUK++8JG', 'jSoOWRtcLGe', 'qCozq8kmoq', '44cN5Q6a5PwF6Akb5RkTxsxMIkdLI5ZPOlFLJ7y', '44cb6ksi552j6ksi6AkEAgdOJ5dLVANLPOVLIOddVq', 'qutcICkRk1e', 'W6iaWRBdIt4', 'C8kFW7evEmolbSoOtCoK', 'cmoKc8oEW48', 'WRtdTd/dM8ow', 'WP3dQrldTSo/', 'hSouWQDCWQ1L', 'rdVdIMNdQq', 'W7WfWOldUXa', 'W50YE2Hb', 'r8ksa8kgxW', 'xSkBW6yiaSoRhSoKsq', 'lvjJWR9tWQdcUKruWPJcTKy', 'f8oPomo0W4RcSmoUxCktuSkvjaSCW4zpW4rXcCoJymkinSknxmovWPtcHSojpCoKW44vWPGwit4lW4tdKf8qWQe0wedcJSoAaLBcMrzmlWLfW7/cSCoFWPSrkSkEvhBdU8olW7VcH8osW5NcLSopWO/cUCo5W7hdQW3dPWvlW7O', 'DSk4AefI', 'bCozqfe7', 'WR0zW7ldICow', '44oo56225yQG6kAS6AcFjSkw5Q6Z5AsE562Q5yM/5BQ45zk86lw46ywA5BQr5BAq6lY45lUt6zQp', 'tfWJkmk9', 'WQq14PYsW6hJGia', 'WOVdVNdcSxZcHSkVW5mOW6JdGwnpW6PKwSksrrHAW4mCWOG0W6hcVmoeWP4SoSkAEG', 'fuCCrCok', 'vSoYfr5eEq', '44oo5O+y5y2g54+A6ywFjSkw', 'W51G4P2jpUocGq', 'FryxCmkn', 'E8kRWQxcOG', 'WPFdUW3dN8oV', 'EG/cTdhcPq', '44k/562R5yIN5lYG5Og/fwG', 'uSktemkTFa', 'WRaLCvRdSeyx', 'E24HgmkCW7VdHSokWQBcPCkTW4jdFmkix0b6WQW', 'Dt7dGcmU', 'W6DMx0FcRG', 'puWdySob', 'AtRcMdFdGW', 'W7rxxSoCfq', '44o35AYk566V6ksE6AkkW53dOG', 'pqGMoG', 'WPZcLI4fW43cIW', 'WP1In1Wk', 'yqRdKIud', 'WP3dKGtdMW', 'mmoffCoDW4K', 'xmkvW7OammoRhSoEtCoOpbL1CJ9kWR/cUq', 'W7L4tSk4sa', 'dColc8okW70', 'zmodx8kMba', '44oH6ks7552c6kAg6AcUW4nE6iY/5BYL5AAI5yUHpq', 'W6zfruNcOG', '44oo6kEk556B6kAS6AcFjSkw6i+l5B6G5Awc5yU+W6C', 'WQ0XW5xdTrS', 'WQ11iuWq', 'hSolf8kvCe5REubUiNq4', '44gb5BMq5zc/6lw66yw/kNhMRAxLPi3LJltLRzxMIze', 'rSk0eCo+hG', '44gy6kwC55+u6ksb6AoBWPWt', 'iK7dTbrf', 'sCkNabGc', 'wXigy8oiW57dTbr2W40', 'sSkiaCojaa', 'udpdQqSWWRRcTG', 'WPKkWRJcNCkN', 'EadcIXpcUG', 'pvrQWQvFWQdcKw1jWOxcO0ZcJae', 'W69tFvxcTq', 'xhirWO0X', '44cN5yEt5z6a5Rwa5RkTxsu', 'u8kpomkxFG', 'jWVINQldJUobIq', 'r8kxWPFcJW', 'y8kVmCk9zJ0UomkvWRHi', 'W49i4P6rWRVJGPq', 'WOy7WRr0', 'hmo2b8oqW6e', 'W6ugDgTf', 'wmkcWORcIZ7cQ8kHeXnZWOOJWPLptCkdWPpcQ8khWP/cMuLBst3cVW/dUJpcMmkPoSoJgvNcJSkCgSoSWRacW7BcM8ovWPNcSSkOm8o7WP08WPdcPbrCWQykCuhcOXtcR3yTW5hcUSojAhXxemoAWQOxd8oOWOdcMaHdDq', 'umkjx19tW7TJW5ruWOrr', '44cR5ysb5z2i5lMs6AsMmCkE', 'EN83dCkBW6ZdN8oiWRVcRmkC', 'WPX0mb5tW7nPW54', '44oe5R+r5yU85BMg5zcUWRnq6kYo6lA95y235RcN5P6s5y215OMQ6ko35lU25yUo77+T5yYc6igZ5PQs5PAc5y21', 'cCoknSoTW58', 'rcRdJwBdQWnAus7dNLvwdW', 'uZ3dIfJdTWG', 'mr8vhc4', 'bKHbWOTv', 'zmk0jSotfW', 'W7rsBSoomq', 'WRnNW7CVW7XU', 'hSoNWOBcJX4', 'W5ujtgG', 'WOGMWOdcISkkBKK', 'WOFcSZmgW7y', 'W752smoSdG', 'WO0WWOXtWP8', 'qsddQd8bWRW', 'y8osqSkzBhmYBaj3', 'lmo5WRFcRYm', 'WQZcO8ktW6HN', 'CCk6mSkIzJeHe8kxWRjFW7ldTmkKW7T3fKZcQ8oSW613W5/dPKlcU35Tar/cJSoKWQu', 'wCkblYGg', 'vX0NWPFdQa', 'x8kjW70kiq', 'lSozi8o2W4a', 'rG4MWQpdTCkv', '44cy6kEj552D6kA/6Ag/WQxcOoATPowNVEEFG+w6HUwtOoI1Q+MhIow7Row3QUI+L+s4LUMAIa', 'fSoZkmoHW4e', 'va49WOJdQW', 'WPWLCuJdKG', 'rSkgbISo', 'mSofAvqb', 'FEwnHEwCUowCKa', 'W5vPBmoTmW', 'CSoqnrHt', '44cT5A2556+Z6kA66AoWe8kD6i2n5B2o77YV', 'qmkxWOZcIcG', 'W5KgDePl', 'zcxcSGhcNG', 'tmowu8ki', 'mapcT8k9W5pdTSoLuJ49smk/', 'v2dcMmkNda', 'WQ5UW61TW5O', 'xa3dS0BdKq', 'EwzSertdOrhcKSkaW7BcNW', 'WPldM1FcJ2G', 'WO8dvLVdGW', 'W611B2ZcSW', '44ke56Yv5yUw6kwy6Ao5gh3OROBOTlhLJiJMSiVMNQZLJQVMI4xOO77KU4ZLIypVVzdLJ6hOG7pMMjVML7lLJiW', 'WRzNW6PWW7K', 'WRP0kgGC', 'sCoPeY9dEa', '44cT566A5yMY6kA66AoWe8kD6i2n5B2o5AwJ5yIsWPK', 'WQ4rAfpdGa', 'uW/cPdBdSmklfLxdIdZdRSogWP0', 'cYxcVCkzW48', '5yUN5P2F77Yj5PUQ5PsH6k+f5yMcdoE9Po++PgxcHSkpWOTyWQ/dUxFdKa', 'n1vGWRrc', 'WR5Ea2Wq', 'cmo1WPxcJXK', 'y0CZf8kV', 'W4TNzCkEzey4pW', 'WPW2W47dGJC', 'CcxcRZ3cPmouWRhdOG', 'tmoyuSkllvC4BazHza', 'WPidW57dJCoS', 'W41mrhtcKG', '44oQ5zcs6AsP6kAv6AkTWQC95Q255AwI5zgT6AEK5BU+5zgv6lEX6yA35BUQ5BEa6l+95lIn6zMh', 'zSoFyCkyla', 'WO/dUxRcVwm', 'rxVcJ8kVoG', 'qqdIN5Xr44cT', 'DaBcQshcVW', 'WRhcSJaIW6O', 'FmkIWOZcIWq', 'wmotrCkgkW', 'WRJcQmkZW6Lq', 'WR1eW4GDW6e', 'mL5QWRzoWQy', 'hCosWQX8WRu', 'WP90mGDt', 'E8kmkmkdxq', 'WQFdHvlcNfK', 'WReGW4ZdICoX', 'h8kAWOVcMcBdQmoTxqO1WPWJWPLBqCojW5dcT8ogWOtcILDrcMdcSHNcSxy', '44cR6kwF55256kAD6AkNmCkE6i+g5BYN5AwL5yI/W7q', 'uCkuW7aalq', 'BhiIlmkC', 'lWBcOCk7', 'W6jdvmozaWTzWQm', 'WO1OW7DWW6O', 'smkEWRJcLHS', 'WR3dKr7dQ8oZ', 'WPmrW7ZdKa', 'ybGqzW', 'WPLVW5ruW5y', 'WRzMW7qpW7y', '44cd566l5yIx6kw56AcDrvlMI7ZOOidKU4/LI7xOVlFLV43VV7hNUjxNU6tMIjtOOyNKU7tLI7q', 'B2b/oG/dVq', 'p0T0WR1tWQ3cHezuWPpcVqBdIrXZWOVdU03dOSkUumoEtfX5lmkNBuazW7NcG1jDs8oYWPpcQaOggmoffdddVhLioq', 'WOK+WQHcWOq', 'WR4EW5xdTJ7dRq', 'WQCfW53dICoD', 'FmojdSkgBW', 'uKymWQG7W4ZdV8oDW7egW6/cPs8XrmkUqCkjn2BcICkTBSkxWQJdGgn+xei+', '44c+5BQL5zc/6lEb6yA3W7BdQUATMUwKOowmTEwUREAiPq', 'WOf9fb9Y', 'sSkaCCouW7q', 'sSoVjCkdxq', 'WRBcOSkfW5f/l2S', 'W6HysepcRG', 'WRzYW7L5W68', 'WQvQW7vvW4S', '44cY5A+H56+L6ks66AckW4dcNEIpU+w9H+wMNEwlV8k4', 'WRdcJmkKW4n6', 'W6revmozbqDEWRhcGmo1r3P/WQu', 'WPRdPa/dRSoq', 'le1nWODy', 'W6vxweC', 'CSoGg8kWrG', '44go5OIG5B+s5A2o56Y9WQJcQUIoI+w/JhG', 'WPvcftzx', 'B8kawwDY', 'W4vutSkiyq', 'pH7cVCkMW6ldPG', 'o8onWRHvWRS', 'stVdTaKiWRlcV8ogWO3dSf4fffalW57cIrX6FmoWWOTxWQNdH8kHWR0cW5JcUGDo', 'WRCKW7ldKXu', 'WP1WiIDD', 'g8o8omoL', 'ySo5v8kGaG', 'wt0oqmkm', '44cP5yA36lAT6AoJ5RgHWRbk', 'ytVcLXpcKG', 'nv0hF8oAEshdMq', 'sHiBvmkR', 'WQqMWPhcRSooqKbOW68P', 'wCkwmcmprG', 'orBMNBZMLBtNIjRMNOpVVOq', 'rCkZWQZcRdC', 'D8kdWPFcRGq', 'ztBcRXhcTq', 'FColdCkoBq', '44o85Psn5OI85AE55yIpd34', 'mqhcPmk8W60', 'zrNcIrBdTG', 'WPHRW5X+W5i', 'y8oFC8kCoq', 'WOhdSMRcKhtcKSkWW4u', 'WQpdPvdcQx8', 'tbCzWOZdMG', 'WQrAW5pcP1OsBvrpWRtdPCoKj8oo', 'g0j+WPva', 'WO0r4PYJWQBJGAC', 'W6BdM3RcVCoD', 'DSkEvK13', 'mSocqK4jWOa4WORdVCo0kv3dOSkwFmko', 'W6JdN3/cOSoIumorW4RcOKldSCkHW7XNWODMWPFcQKy5bSozEeSFWO9CWPjkWQaqq1XEW61fm8oHW7NdL8o6WQNcNupdU8oWW5igeNz7WQ9qWQNdPSocW6JcRuVdRCkKCgtdLutdN8kNW5/cGCk6f8k1W4xcO13cUfNcP0WoFbabWP7cGvyPWRvbWPnM', '77YK5PMd5PAx5PsF6zA177YO', 'bfuMrSoL', 'q8k+4P+AW6FJGzO', '44oQ5yAn5z2+5lMA6AsSWQC9', 'WR3cNIS6W7C', 'qmk5y8o3W5q', 'EEMgUow5KW', 'gmoCWQrD', 'W7jgB8oXbW', 'W6vhtmomgW', 'kvZINzhdNoocIW', 'W7tcQ8kdW4f1mw3cMLlcHguTW4BdRG7cNepcQeu4WPxcPetcTJxdK8khW6K9WQThW51CWRBcLfnwpG', 'qqdINPvr44cT', 'WRBdOeZcIhm', 'W7f1CCoYhW', 'W5CjsMrzod5IW7LP', 'rZFdK2/dMG', 'v1CiWQu', '44oo5OIG5B665AYE56+HWQnk', 'WPj/idze', 'WP9l4P6QWR7JGBG', 'tSoFh8kgyW', 'D8kMWOpcO8kd', 'zYBcSJZdTW', 'kLfMWPTX', 'sHi3WPpdTSkFW6iLWR7cRse', 'DdRcSHFcVSoj', '44ce5O6h5yYl54+s6ysbWOFdOEMfGoMJMEs4GEI1So+8RUAxToAZSoAnTEEoQq', 'WP5Ij0eM', 'WRqkW63dKSoD', 'jCocxLOt', 'r1CpWQ8nW4pdT8oAW6W', 'W74K4P+woUocJa', 'WQ5oW5GAW5S', 'yCkoWP/cIIO', 'j8oOWQ3cTaS', 'g8oFAMey', '44cX5PI26AEB56w45y6qW65u6k+r5Pws6zAP5lQ65PU/6AEO5Q6r77+l5OMr6kgT5PsQ6AE45lQj5yUq', '44gm56+m5yIx5l+b5Oc5W4H9', 'W6ikWO/dQG', 'hmouWRTlWQC', 'u8kZWPhcNqS', 'jCoXWRJcGJJdLa', 'bCoIWO9VWRe', 'W7FLIyBPKPO', 'qSowjCkGEa', 'FmkLjCklFsa', 'tmkWW7KtdW', 'WRySAq', 'W51HDSk1zvWxkwddSCoOeq', 'W70fx2rO', 'F8kqvmomW60yfW', 'vqFdKaeE', 'WPnHW64', '44oL5A6z56YR6kEC6AcnWRRdKUAkGoIGREs4JUwkSUI8U+w/HE++OUE4NEE4TEAjJoIIO+s7RUwkPW', 'WOqNW7JdVmoX', 'WRxcOSkbW5DTlxZcIupdIhi2W4xdHbNdMLhdVauqWO/cPepcOG', 'zfaPWOeK', 'qaqUWRddIa', 'WPi1WRrU', 'W7vuuCoNbqz2WQtcI8oHFq', 'W5aZWQ7dMWq', 'wHSZxmkl', '5QYoW7zv5BwP5A+Q5OUCW6O', 'EmkZWR/cNWW', 'vYBcRsddUG', 'WP7cVsCtW7e', 'uZVdGKpdKa', 'WPxdSwZcRNa', 'WQ7dLdddO8oX', 'WOD3nwS9', 'qbq1WO7dMSko', 'WPNdJXldJSonqcW0t29UWP/dVmoSW4HeW4yHW4i', 'W41CvmkpzG', 'WRZcOSkc', 'WO1nW7DmW5G', 'WO7PH4tLUjy', 'W7hdRLVcS8o0', '44cb5yAh6lw76Agi5Rc7AgdLHkROT4FPOzVMSixMUkNLTB7OVlFKUOBPMzdVVA3ORPBMM4pLPQRLHjlMNB8', 'wePhdIu', 'wYRdIxtdUabG', 'r8kUaCoRfCo2W6xcUMtcS09CWQZdMYNcPmo5fmo1WR/dP8ktW4qjWQ3dVGhdHs0yi07cMSoyt2tdUSkzy8kFe0meW6hcNSklW5rXW7r2W7ukW73dGmobWP/cVCkfzZH8W7bIB8keW7BcIKdcUwzgnMNdI8ocWPtcO8oCdSkaW4Kjbczkzb4rsSoTbdfxW4hdNaSiBCohDSo0fY47W50', 'AWhdJaCw', 'W7FdIMlcPG', 'W6vdFh7cTa', 'wG/INlKa44k+', 'zN1QibpdOa', 'WONdNapdJG', '44kr5O275y+D542I6ywaumoE', 'WOGvW7VdG8oGCq', '44kq5BMj5zgM6lw86yshW5yv6i6t5BYr5Asz5yUnWRa', 'umk2W6qmoa', 'WOfDW4PTW6W', '44kr5AY256666ksu6AcaumoE6kYa6lEJ5y+D5RcG5P+A5y285OM46kkY5lQZ5yMv77+j5y+e6ioR5PMb5PsD5y+7', 'AKlcG8kbeW', 'W51G4PYapUocGq', 'rCoEdSkyCq', 'W6WeWOxdUc4', 'tSkfuMLbW6LRW4m+W4bBF8kVfWpdS2y6lCkix8oLWQHOWQhcT8kQW5iuWOFdQse', 'z8kRk8k6', 'ymk7twH8', 'vKqoWPSMW4BdRSoA', 'h09VWR5u', 'k8oBvui/', 'hos7JUI1PowoI0euWOddH8oKcmkEWOtcOSkuu0ruWRCFqa5heWtdTEIhTUACOUAkI+IJM+kEPownSos6UUAxVUMvM8kkC8omWRGtdfdVVRu', 'W7aFW4/dOdVdOaNcSvG+eSo1W6/cKmkBo1DxWQdcQG7cKZrsyL9YAHW4W7VcTL0lkf1TkCojFLtcOmktaCo4kCkbCWNdMa', '772r5yUB5l2+', 'd8oSWPnUWRS', 'WQWMWRxcUCkX', 'WQOFW4ddV8oO', 'WPCXWQP7WRqBWPxdVmkGW6ZcN2pdNLK', 'ySoRimk/Da', 'WO4ZWOtcSSkkye11W7aJiqFcShJcVZBdMgxdImkiW57dIK7cSSovWOuvWPKEWObRpSk1', 'WPqzW7ZdISo1', 'smklh8otlW', 'WQCWWO7cU8kn', 'WOSIWOdcVW', 'x1lcU8kjlW', 'WO8YWPXdWPu', 'WPtdSMNcUwNcG8kDW5HOWQG', 'W4LWy8kjF1O6pW', 'moAVQ+IMGoEFHEINIEMJG++9JoIUKoEUT+w9Mb/dS8kI', 'WOmvW6e', 'WPeYAK3dHa', 'WR5LW78FW6bO', 'W6P+vLZcSG', 'kvZINjJdNoocIW', 'WOTKnZS', 'WPdcOSktW5iZcwlcKLddJG', 'sweMWQaq', 'FdNcUqFcQa', 'WQJdNeVcNfy', 'v8ks4P2RaoobHG', 'xmkxCSoZW5K', 'WQq14P2BW6hJGia', 'sCoAsmkCl0y', 'WPxcNSkvW6z9', 'qguhcCkC', 'bCoI4P6eW6FJG5q', 'oLPTWR1dWPhcKLnjWP/cU3BdG1r3WONdObq', 'nv0hF8oaFW', 'sYldVW4WWQhcT8oqW43cSuqCd1KpW53dUWn/pCo6', 'qSkpWQVcNdS', 'W4BdJ2NcQmo+', 'eLvcWOnn', 'WQX0W4PJW7K', 'nK4FDmoV', 'W4hdUuFcLSot', 'W7WmWQpdIIC', 'W4uYWQ8TWQRcUmokWOGTWR9QWQ9n', 'wCk8WP/cKWG', 'W7nqvCoTka5aWQpcHG', 'q1KpWRa', 'hvzXWPzT', 'WOT7ptr+', 'z8kBWQFcGHu', 'WRyoWR/cPmkk', 'vCkPv3nU', 'WQTPW6mbW5fWW58pqW', 'FSkdW7mKoq', 'WQyDW6pdVCo8', 'qZFdRIqoWQFcTW', '44gm5PAe55UT5l+b5Oc5W4H95lIZ5AAH5PAU5ys4eq', 'xJNdOISR', 'WQTMW54BW48', 'i8oyWRxcKcK', 'B2b/oHxdUZ7cGG', 'W4eoyKfV', 'WOqHWPZcUSkt', 'hMBdMHjm', 'WOldOMZcUw/cJSkTW5G', '44g95ysP5z+Z5lUd5yMJmMW', 'WP59W5HVW4K', 'p0HuWR90', '44ok56655yUg6kwK6AkpCI7MIPZOOARKUzdLIRZOVOpLVyRVVPFNUOJNUz7MIzlOO5xKUPhLI64', 'vSofbrzh', 'hCoOa8oYW4W', '44gb5O+/5y6J546q6yw/kNhMIRRLIRVMJiVNJAK', 'x0O+fmk9', 'W4XyBmoKaW', 'W7fHANlcPq', 'W5bHELpcNW', 'Amk6kSk4sa', 'xIi2EmkP', 'wIFdIMRdIW', 'WRPHkfC7W60FWOxdVSoLW6FdRW', 'zsxcQIxdVq', 'scRcHaVdKW', 'DmkAvColW7Krf8oVpLeX', 'DCk4mmkrEZSWfa', 'aCoqWRPlWQnVkq', 'W6FcNEADT+AuN+ElTUACME+9Ha', 'AsmGySkH', 'WRFcNXaAW6C', 'sCkdWOBcMcm', 'qYBdINBdRa', 'qmkzWO3cJW', 'r8kZWPlcT8km', 'suRcMSkp', 'W6TEqCodbra', 'A+MhSEw6Kq', 'w8kRlHGo', 'W4rwxCkBsG', 'reCzWRa3', 'ybyrymka', 'W5HDFw/cPq', 'W6vWCSkXpw4Kjw7dOa', 'W6zbvSoQhGfiWQtcM8o+DJTGWRSTW7BdS8kgtbBdVfZdTCkUWQivbmkjeqFdMa', 'zM4FdSk+', 'foImQEw9Ia', 'W5bcDSoQia', 'W4iAvfXa', 'W4rMBSkesq', '44oH6ks7552c6kAg6AcUW4nE5OUV6ko+5lIp5yUX6l+A5B+C77+o57QS57MJ5OIN6kox5lQh5yUw', 'vaNcSZpdPW', 'W6vxruRcR8kZwexdVHaFW788WQ7cPa', 'CCkQFu5S', 'DctdU3pdQW', 'WP13W5r1W7JdPq', 'xImAzCkR', 'vCoja8kdwW', 'WRDchJPV', 'fmoqhmogW40', 'jK/dSHHrWR0', 'jexdGcvr', 'pbSGba5XW4NcKW', 'W4j6CmkeyL0', 'W5jMveZcTa', 'WRP6W6i1W6bZ', 'vrqXWRddSG', 'WQ8FW6ldMqy', 'WObIg0an', 'WOhdLWldT8o8', 'WQK/WRLnWRu', 'WPWsWRjoWQO', 'q8ktWO3cIctdVSoGyXv/WP0', 'WQOkW7RdPSot', '44k/5O+f5y+b542X6yEbfwJMG6tOV4dMSktMNPpLOjVLHjhMJk/NJlxKVzBMGzpVVRlMLitMSidMJzRNJjS', 'yCo/hSk4Ea', 'bKVdHqnx', 'W5voWOFcVM3cPfFdRreSv8kHWRxdMmohkrXg5OUO6kks5yEZ5z+A5ysK5Q+R6yEx5BIXpdiozmkIW5qxv2edoeVcKciaW7hdLW', 'oCottKWVWQ0QWPJdVmo7nxtdUCkxASkusSo1', 'rmkjse1dW6vKW4n5WQrBDSkY', 'zwqXpmkCW60', 'bWRcI8kAW5K', 'W63dHJhcOCoI', 'WRBcPSkcW4f2', 'AGxcIrddJa', 'yWmcz8kqW6ZdHX5VW4ZdTG', 'pNpdGJnn', 'goMeQ+++MoMzOoIURUAvVoMuLCkH', 'WPDhW61jW7q', 'pg/IN7yN44kj', 'WQL4fbLy', 'v8kkW7elcSoVdCoMxmoOpGG', 'W4H1xLhcNW', 'W5vWDCoJlW', 'WRVcKamIW4S', 'qWdcNZpcVa', 'WRP6W6i1W7P1W4yp', 'WRb0ismrW5XXW589cW', 'WQhPH6FLUk0', 'mUMePow4PG', 'WRnnW7eyW68', 'umoOhrbI', 'WPKcW47dSIC', 'qmofs8kyda', '44cR5Q2s5PAx6AoD5RccmCkE', 'WPJcICkrW7Hm', 'rCoQfCkcFNldK8owWRtcJCk+oKq', 'B8o5eq5H', 'FCkWFSoPW70', 'mSoA4P+yrEobHq', 'B8k9W5uHfa', 'gsdcNmkbW70', 'gmov4PYIWP/JGPW', 'dgRdHYHm', 'BHtdLaCP', 'DSkdpCoiiW', 'ASkHWQRcNsq', 'zsJdMsya', 'DI3cKGBcNq', 'qIRdGNddQW', 'tmkBW6CocSoJdG', 'fSoxqLb7WRmXWPddVSo9', 'e2VdGrnT', 'acifmsO', 'r8kUlSkdrW', 'WPGHquFdOa', 'u8kzt2G', 'u8k/WPBcLce', 'wmk7hmoV', 'W4hdJKZcH8o3', 'W7b0tKZcKG', 'qrZcUYJdVmk3fuddJtldRSkkWOajWRbbvSoUWO4DaZ7cK8kJtxBdUHZcVmkygSkdEW', 'adlMM7NML5xKVOdMG73VVzq', 'WQqXWQlcP8kv', 'wbRcIq7cIG', 'sSk9iZCn', 'WPldTM3cS0tcI8kRW4vP', 'WQj4oveaW7SrWPZdHmo2W6/dV8o/yG', 'atOQaYa', 'WPP7W5yOW5S', 'y8kViCkrEIeLfCkHWRrv', 'lLldOI5tWRC', 'WO0EW7hdGCoS', 'q8kwWRRcT8kn', 'W5OYWQFdUcu', '44ok5OYx5yYG54Ys6yEpCI7MGzpOV77MSiRMNjtLOk/LHlJMJyVNJ5/KVzlMGzRVVPxMLORMSPRMJkZNJAa', 'WQVcPSkeW5f7', '44cY5A+H56+L6ks66AckW4dcNEAiQ+IINos4SowlR+I9N+w+HE++UUE5NUE7KoAjPoIGLUs5HowjOG', 'W58X4PYbgEobTa', 'nSoe4PYoxoobSq', 'zCk7WORcSSkr', 'WPD+iXzoW68', 'luZdVX5p', 'rIlcJW7dJq', 'aCoTWQxcOIq', 'W6hdOvJcMCo+', 'F8kDWRRcKG4', '44o35zku6AwZ6ksE6AkkW53dOUAlKEIHKEs4VUwiJUI/I+w/LU++I+E7OUE7M+AlMoIHPEs6KUwlLq', 'yCkbrSolW7KmlCo4i1aX', 'toMfPow7Ia', 'rexcISkliq', 'WONcJGGcW6y', 'WQjCW4L5W5G', 'Fmk/u8oEW50', 'W6PJBx/cGW', 'sCoNjmkDChFdM8oCW57dK8kKoKBcR8kfW6xdLg41uKBcLZVcJIFcImkuWQ0qW5GGpq', 'FgfzcHq', 'qSoyj8kcBq', 'W4XFymoUmG', 'qYFcPWVdMa', 'W5LmB8kaFG', 'WP3cOt4RW5C', 'xSkcWRJcMJ8', 'yx8IcCkDWQxcR8keWRNcOCkxW4nwEmkaFrWXWRBcGSkcF2pcQmkGWP0XEa3cOSkbB1JcH2/cUmk0W7mxr0ZdO8oQWOfqW5Cvoe0Vb8kkW4ZdMKP2n3lcSCoAWP5TW7OlgSobW5xcUMtdJfRdLKm', '44cb6ksP6zwd5z+r5zY/AgdMIBFLIAhOPl7PLlddVq', 'qmkFWPFcLsW', '44oL5yAy5z6G5lIt6AAmWRRdKG', 'W4T7yq', 'yaiqEW', '44c85yA35z+u566q5yMPgCoj', 'yCkHWRVcQrNdImoBDtfkWQuzWRPOz8kUW6ZdJCkLWQRcS2DSz17cNK/dPNRdHCo2zCkXqbddLW', 'WOxdSIddPSoC', 'hmoMWP3cRcC', 'wx/cVmkuoG', 'tSkjt3nhW69J', '44c15yEo5z6G5lMP6Aw/W6NdSG', 'W6buuSoogbDBWQm', 'lCo/WRBcQZpdUuq9kCkwWOpcPCo5WRTSW7auW5O', '44cb5zg06Aso6kEv6Ag0WQxcUoIpIUw+L+wNVUwiOLm', 'xCkiW6y6iCoJgSoY', 'uCkgWO7cLYtdSSoVsbD1WOPLWPrDt8kiWP3cPSkkWPJcILzjqgtdRGVcOc/dNmo7', 'BSkMWPFcOCkLW5RcISk0Fr7cK3ldOmk2WRlcSvxdOSkQW7D2vG8bWRZdLSodiGW2W5BdLCoihbrYlCk4W7m4qmoqWRVdNrvmW5pdRJxcLSkeWQFdJCoTW4eOtSoYWQu3rmo4WO0sbmoXcxXSFvpcGKv2pe3cRW', 'WOqKW4tdQCoT', '44cY56Yc5yMK57Yh5ykwW4dcNEIpU+w9H++/Kq', 'oGhcOmkmW6ldVq', 'sGNcQqRdKa', 'n8ovnSowW6S', 'c8kOrMKozCoyimojz8oE', 'aSoeWRlcNI8', 'fg4JCmoH', 'wGyoWPtdIW', 'ECk9xMzV', 'WOpcNdOZW5BcLHddL8ozWPeP', 'rCkRBezh', 'j0/dTZrpWQO', '44cb5A+Q56+s6kEv6Ag0WQxcUoIpIUw+L+wNVUwiOLm', 'vCkaWRRcGru', 'WRDOccbB', 'WRbWW549W4q', 'zSkSWQZcOSk8', 'BNn5ba', 'dCoODNGL', '44cd566l5yIx5l2E5OoJrvi', '44c1576P5ykx5Awr6lwkW6NdSG', 'WO4cW5/dRmoT', 'bN5mWR9/', '44gy6kwC55+u6ksb6AoBWPWt5OI76kcr5lIo5yMk6lY95B2G77+s57U457MO5OIF6koI5lUA5yU5', 'WOafW6FdHCoGCdqA', 'F8kpWRhcSsu', 'DCkjir0d', 'WQaAW6BdHmoWW5JcTK0', 'rwFcQ8kukG', 'q8k/g8o8eSkK', 'lqGHmcv0W5dcKZ4', 'zZlcQGpcOSozWP7dVZfH', 'WPu1W4ddSSoW', 'W69054Qv5PY25lYN5Ocq77+j', '77Yf5yMI5lYp', 'rt/dSw/dTa', '44gp562f5yI05lYW5OgvW7tdHEIoHEw+QSoC', 'FsiXE8kU', 'W5ddMvNcNCoi', 'WRPfW6j1W7O', 'z8ktDCo0W4S', 'D8kncbmc', 'uCkjs2fuW6XzW5jYWP1q', 'qCo8omkRExK', '44oL56265yQQ6kEC6AcnWRRdKG', 'W6ukWPtdRq0', 'WQK8WQHoWP4', 'W4K7w01M', '44oL5A6z56YR6kEC6AcnWRRdKUASQowLIowTQoEUOUw6G+wrPoI3ToMeQ+w7MEw3MEI9KEs4N+MzLG', 'WPnHW65xW7NdRCkqWOitWRX9WPPb', 'DSkZeSkDEW', 'WOanWPvCWRm', 'tmkCww55W7PJW5v+WOfbzSk0hGFdSbqLkmohuCo5WRe', 'W4m5WQ7dMs4', 'hx8Sz8o4', 'WP/cIsWUW6dcNrhdVCoqWPG1E17cSdJdUG', 'FdNcVHdcJ8oEWQ7dUcO', 'WQVdMbJdHSoF', 'xCk8W78YpG', 'WOi1uwNdGG', 'yCk/j8k8DHqHfCktWO5yWRRdOSoAW7HHfrtcVG', 'qY3dLhtdRq', 'Cmk2FSoUW4S', 'W6hdM3VcVSo4cCkFWPhcRexdR8o8W6SYWOK/WOpdQe15hmoaiu4EW5KwW5nBWQ4dcf8mWRLolSoIW77dL8o6WQ/dG3NdGCocWPPq', 'tmkYfmoPj8k4', 'kSo7WR1CWPu', '44c85yA35z+u5lIv5yU4gCoj5AAc5yQGWOq', 'd8oYp8oW', 'z0FcVSkHnW', 'y8o1x8kWca', 'tmkBW6CocSoMa8oYtW', '44go5R6Z5yMJ5BQS5zogWQJcQUAVS+wLSUA+MowkMow6TowsP+I1SEMeLow6JUw0JUI/RUs7TEMyHq', 'CCkzsmofW6m', 'DmkoWQtcTWS', '44g95AYO56246kE+6AgtmMZORANOTRpLJ6lMSipMN7NLJPZMIiBOOiRKUPZLIOFVV57LJ43OGiJMM5hMLyFLJAS', '44c16kAq556r6kAM6Ao+W6NdSUATRowMKEEFLUw5J+wqOoI0VoMhRow5Q+w1GoI8MUs5UUMzMW', 'W6mEyu1D', '44ou5A+156YL6kwD6AcvWOVdPUAjMEIJKos7UEwiIoI8SEw9HE++HEE5TUE7HoAkLEIGJEs4JowlUa', 'uCkEWQ7cSZS', 'mXZcTCkwW77dOa', 'zdpcMWRcKq', 'WPq2WRj+WQi', 'bCoAWQjFWPu', 'qSk/bSoOb8kRWQ8', 'BCoygCkhqq', 'WQO6WQDdWQ4', 'WQ4XWRHQW6S+WR/dTmkKW6q'];
            }()));
        }()));
    }());
    _0x1d3d = function() {
        return _0x1a1b71;
    };
    return _0x1d3d();
};
var version_ = 'jsjiami.com.v7';
// ============================================结束项目所需参数============================================ \\
function DoubleLog(data) {
    if ($.isNode()) {
        if (data) {
            console.log(`${data}`);
            msg += `${data}`
        }
    } else {
        console.log(`${data}`);
        msg += `${data}`
    }
}
async
function SendMsg(message) {
    if (!message) return;
    if (Notify > 0) {
        if ($.isNode()) {
            var notify = require("./sendNotify");
            await notify.sendNotify($.name, message)
        } else {
            $.msg($.name, '', message)
        }
    } else {
        console.log(message)
    }
}

function MD5Encrypt(a) {
    function b(a, b) {
        return a << b | a >>> 32 - b
    }

    function c(a, b) {
        var c, d, e, f, g;
        return e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f
    }

    function d(a, b, c) {
        return a & b | ~a & c
    }

    function e(a, b, c) {
        return a & c | b & ~c
    }

    function f(a, b, c) {
        return a ^ b ^ c
    }

    function g(a, b, c) {
        return b ^ (a | ~c)
    }

    function h(a, e, f, g, h, i, j) {
        return a = c(a, c(c(d(e, f, g), h), j)), c(b(a, i), e)
    }

    function i(a, d, f, g, h, i, j) {
        return a = c(a, c(c(e(d, f, g), h), j)), c(b(a, i), d)
    }

    function j(a, d, e, g, h, i, j) {
        return a = c(a, c(c(f(d, e, g), h), j)), c(b(a, i), d)
    }

    function k(a, d, e, f, h, i, j) {
        return a = c(a, c(c(g(d, e, f), h), j)), c(b(a, i), d)
    }

    function l(a) {
        for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i;) b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | a.charCodeAt(i) << h, i++;
        return b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g
    }

    function m(a) {
        var b, c, d = "",
            e = "";
        for (c = 0; 3 >= c; c++) b = a >>> 8 * c & 255, e = "0" + b.toString(16), d += e.substr(e.length - 2, 2);
        return d
    }

    function n(a) {
        a = a.replace(/\r\n/g, "\n");
        for (var b = "", c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128))
        }
        return b
    }
    var o, p, q, r, s, t, u, v, w, x = [],
        y = 7,
        z = 12,
        A = 17,
        B = 22,
        C = 5,
        D = 9,
        E = 14,
        F = 20,
        G = 4,
        H = 11,
        I = 16,
        J = 23,
        K = 6,
        L = 10,
        M = 15,
        N = 21;
    for (a = n(a), x = l(a), t = 1732584193, u = 4023233417, v = 2562383102, w = 271733878, o = 0; o < x.length; o += 16) p = t, q = u, r = v, s = w, t = h(t, u, v, w, x[o + 0], y, 3614090360), w = h(w, t, u, v, x[o + 1], z, 3905402710), v = h(v, w, t, u, x[o + 2], A, 606105819), u = h(u, v, w, t, x[o + 3], B, 3250441966), t = h(t, u, v, w, x[o + 4], y, 4118548399), w = h(w, t, u, v, x[o + 5], z, 1200080426), v = h(v, w, t, u, x[o + 6], A, 2821735955), u = h(u, v, w, t, x[o + 7], B, 4249261313), t = h(t, u, v, w, x[o + 8], y, 1770035416), w = h(w, t, u, v, x[o + 9], z, 2336552879), v = h(v, w, t, u, x[o + 10], A, 4294925233), u = h(u, v, w, t, x[o + 11], B, 2304563134), t = h(t, u, v, w, x[o + 12], y, 1804603682), w = h(w, t, u, v, x[o + 13], z, 4254626195), v = h(v, w, t, u, x[o + 14], A, 2792965006), u = h(u, v, w, t, x[o + 15], B, 1236535329), t = i(t, u, v, w, x[o + 1], C, 4129170786), w = i(w, t, u, v, x[o + 6], D, 3225465664), v = i(v, w, t, u, x[o + 11], E, 643717713), u = i(u, v, w, t, x[o + 0], F, 3921069994), t = i(t, u, v, w, x[o + 5], C, 3593408605), w = i(w, t, u, v, x[o + 10], D, 38016083), v = i(v, w, t, u, x[o + 15], E, 3634488961), u = i(u, v, w, t, x[o + 4], F, 3889429448), t = i(t, u, v, w, x[o + 9], C, 568446438), w = i(w, t, u, v, x[o + 14], D, 3275163606), v = i(v, w, t, u, x[o + 3], E, 4107603335), u = i(u, v, w, t, x[o + 8], F, 1163531501), t = i(t, u, v, w, x[o + 13], C, 2850285829), w = i(w, t, u, v, x[o + 2], D, 4243563512), v = i(v, w, t, u, x[o + 7], E, 1735328473), u = i(u, v, w, t, x[o + 12], F, 2368359562), t = j(t, u, v, w, x[o + 5], G, 4294588738), w = j(w, t, u, v, x[o + 8], H, 2272392833), v = j(v, w, t, u, x[o + 11], I, 1839030562), u = j(u, v, w, t, x[o + 14], J, 4259657740), t = j(t, u, v, w, x[o + 1], G, 2763975236), w = j(w, t, u, v, x[o + 4], H, 1272893353), v = j(v, w, t, u, x[o + 7], I, 4139469664), u = j(u, v, w, t, x[o + 10], J, 3200236656), t = j(t, u, v, w, x[o + 13], G, 681279174), w = j(w, t, u, v, x[o + 0], H, 3936430074), v = j(v, w, t, u, x[o + 3], I, 3572445317), u = j(u, v, w, t, x[o + 6], J, 76029189), t = j(t, u, v, w, x[o + 9], G, 3654602809), w = j(w, t, u, v, x[o + 12], H, 3873151461), v = j(v, w, t, u, x[o + 15], I, 530742520), u = j(u, v, w, t, x[o + 2], J, 3299628645), t = k(t, u, v, w, x[o + 0], K, 4096336452), w = k(w, t, u, v, x[o + 7], L, 1126891415), v = k(v, w, t, u, x[o + 14], M, 2878612391), u = k(u, v, w, t, x[o + 5], N, 4237533241), t = k(t, u, v, w, x[o + 12], K, 1700485571), w = k(w, t, u, v, x[o + 3], L, 2399980690), v = k(v, w, t, u, x[o + 10], M, 4293915773), u = k(u, v, w, t, x[o + 1], N, 2240044497), t = k(t, u, v, w, x[o + 8], K, 1873313359), w = k(w, t, u, v, x[o + 15], L, 4264355552), v = k(v, w, t, u, x[o + 6], M, 2734768916), u = k(u, v, w, t, x[o + 13], N, 1309151649), t = k(t, u, v, w, x[o + 4], K, 4149444226), w = k(w, t, u, v, x[o + 11], L, 3174756917), v = k(v, w, t, u, x[o + 2], M, 718787259), u = k(u, v, w, t, x[o + 9], N, 3951481745), t = c(t, p), u = c(u, q), v = c(v, r), w = c(w, s);
    var O = m(t) + m(u) + m(v) + m(w);
    return O.toLowerCase()
}

function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => {
                const {
                    message: s,
                    response: i
                } = t;
                e(s, i, i && i.body)
            }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}