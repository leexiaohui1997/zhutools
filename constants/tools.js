export default [
  {
    name: 'password-creator',
    title: '密码生成器',
    desc: '生成高强度随机密码',
    icon: '',
    args: {
      len: 12,
      count: 5,
      num: true,
      lower: true,
      upper: true,
      char: false
    },
    translate: {
      len: '密码长度',
      count: '生成数量',
      num: '数字',
      lower: '小写字母',
      upper: '大写字母',
      char: '符号'
    },
    template: 'form-fields',
    confirm: '生成密码'
  }
]
