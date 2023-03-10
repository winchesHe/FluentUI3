const checkType = (header) => {
  header = `${header}`
  const enumType = ['feat', 'fix', 'style', 'chore', 'test', 'ci', 'refactor', 'revert', 'reformat', 'docs', 'perf', 'update']
  const realType = header.split(':')[0]
  return enumType.includes(realType)
}

const checkSubject = (header) => {
  header = `${header}`
  const realSubject = header.split(':')[1]
  if (!realSubject)
    return false

  return realSubject.length > 0
}

module.exports = {
  rules: {
    // 'body-leading-blank': [2, 'always'], // body换行
    // 'header-max-length': [2, 'never', 72], // header 最长72
    'type-enum-rule': [2, 'never'],
    'subject-enum-rule': [2, 'never'],
    'type-enum': [0, 'never'],
    'type-empty': [0, 'always'],
    'subject-empty': [0, 'always'],
  },
  plugins: [
    {
      rules: {
        'type-enum-rule': ({ header }) => {
          return [
            checkType(header),
            '需要包含提交类型，格式如: "feat: 开发新功能" 中的feat, '
            + '可选值有: feat/fix/style/test/chore/ci/..., 类型后面紧跟英文冒号分隔主题信息',
          ]
        },
        'subject-enum-rule': ({ header }) => {
          return [checkSubject(header), '需要包含提交主题, 格式如: "feat: 开发新功能" 中的 开发新功能']
        },
      },
    },
  ],
}
