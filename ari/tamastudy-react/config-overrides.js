const { override, addBabelPreset } = require('customize-cra'); //cra는 create-react-app말함. 웹팩을 간접적으로 수정할 수 있는 방법!!
module.exports = override(addBabelPreset('@emotion/babel-preset-css-prop')); //css라는 속성으로 css줄 수 있게(원래 이모션은 classname=css''이런식으로 써주어야 함)
