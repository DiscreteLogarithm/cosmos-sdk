(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{762:function(e,o,t){"use strict";t.r(o);var a=t(1),s=Object(a.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"hooks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[e._v("#")]),e._v(" Hooks")]),e._v(" "),t("p",[e._v("This section contains a description of the module's "),t("code",[e._v("hooks")]),e._v(". Hooks are operations that are executed automatically when events are raised.")]),e._v(" "),t("h2",{attrs:{id:"staking-hooks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#staking-hooks"}},[e._v("#")]),e._v(" Staking hooks")]),e._v(" "),t("p",[e._v("The slashing module implements the "),t("code",[e._v("StakingHooks")]),e._v(" defined in "),t("code",[e._v("x/staking")]),e._v(" and are used as record-keeping of validators information. During the app initialization, these hooks should be registered in the staking module struct.")]),e._v(" "),t("p",[e._v("The following hooks impact the slashing state:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("AfterValidatorBonded")]),e._v(" creates a "),t("code",[e._v("ValidatorSigningInfo")]),e._v(" instance as described in the following section.")]),e._v(" "),t("li",[t("code",[e._v("AfterValidatorCreated")]),e._v(" stores a validator's consensus key.")]),e._v(" "),t("li",[t("code",[e._v("AfterValidatorRemoved")]),e._v(" removes a validator's consensus key.")])]),e._v(" "),t("h2",{attrs:{id:"validator-bonded"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validator-bonded"}},[e._v("#")]),e._v(" Validator Bonded")]),e._v(" "),t("p",[e._v("Upon successful first-time bonding of a new validator, we create a new "),t("code",[e._v("ValidatorSigningInfo")]),e._v(" structure for the\nnow-bonded validator, which "),t("code",[e._v("StartHeight")]),e._v(" of the current block.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"b25WYWxpZGF0b3JCb25kZWQoYWRkcmVzcyBzZGsuVmFsQWRkcmVzcykKCiAgc2lnbmluZ0luZm8sIGZvdW5kID0gR2V0VmFsaWRhdG9yU2lnbmluZ0luZm8oYWRkcmVzcykKICBpZiAhZm91bmQgewogICAgc2lnbmluZ0luZm8gPSBWYWxpZGF0b3JTaWduaW5nSW5mbyB7CiAgICAgIFN0YXJ0SGVpZ2h0ICAgICAgICAgOiBDdXJyZW50SGVpZ2h0LAogICAgICBJbmRleE9mZnNldCAgICAgICAgIDogMCwKICAgICAgSmFpbGVkVW50aWwgICAgICAgICA6IHRpbWUuVW5peCgwLCAwKSwKICAgICAgVG9tYnN0b25lICAgICAgICAgICA6IGZhbHNlLAogICAgICBNaXNzZWRCbG9za0NvdW50ZXIgIDogMAogICAgfQogICAgc2V0VmFsaWRhdG9yU2lnbmluZ0luZm8oc2lnbmluZ0luZm8pCiAgfQoKICByZXR1cm4K"}})],1)}),[],!1,null,null,null);o.default=s.exports}}]);