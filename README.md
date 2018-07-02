# track-things-react-native

Same app created 3 different ways

## TrackThingsRN

Plain React Native, can include custom native modules at any time

```bash
brew install node watchman [yarn]
# npm i -g react-native-cli
yarn global add react-native-cli
react-native init TrackThingsRN
cd TrackThingsRN

# start iOS simulator
react-native run-ios
```

## TrackThingsCRNA

Uses Expo, must `npm run eject`	to include custom native modules

```bash
# npm i -g create-react-native-app
yarn global add create-react-native-app
create-react-native-app TrackThingsCRNA
cd TrackThingsCRNA

# start dev server and generate Expo link
# npm start
yarn start
```

## track-things-exp

Uses Expo, must `npm run eject`	to include custom native modules

```bash
npm i -g exp
exp init track-things-exp
cd track-things-exp

# start dev server and generate Expo link
exp start
```

