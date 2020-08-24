/*
* Copyright (C) 2011-2019 ShenZhen iBOXCHAIN Information Technology Co.,Ltd.
* All right reserved.
*
* This software is the confidential and proprietary
* information of iBOXCHAIN Company of China.
* ("Confidential Information"). You shall not disclose
* such Confidential Information and shall use it only
* in accordance with the terms of the contract agreement
* you entered into with iBOXCHAIN inc.
*
*/

const PRODUCTION_VALUE = ['production', 'test']
const NODE_ENV = process.env.NODE_ENV || 'production'
const NODE_ENV_IS_PRODUCTION = PRODUCTION_VALUE.includes(NODE_ENV)

module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': !NODE_ENV_IS_PRODUCTION ? 'error' : 'off',
    'no-debugger': !NODE_ENV_IS_PRODUCTION ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
