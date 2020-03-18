module.exports = {
    root: true,
    "env": {
        "jest": true
    },
    extends: [
        "@react-native-community",
        "airbnb-typescript",
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/react",
    ],
    rules: {
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "no-underscore-dangle": "off",
        "no-console": "off",
        "react/prop-types": "off",
        "import/no-extraneous-dependencies": [
            {
                devDependencies: [
                    ".storybook/**",
                    "stories/**" 
                ]
            }
        ]
    },
};
