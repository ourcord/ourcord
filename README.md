<div align="center">
  <img src="assets/logo.svg" alt="ourcord"/>

[![https://nodei.co/npm/ourcord.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/ourcord.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/ourcord)

[![npm](https://img.shields.io/npm/v/ourcord?color=red&style=for-the-badge)](https://npmjs.com/package/ourcord)
[![npm](https://img.shields.io/bundlephobia/min/ourcord?color=red&style=for-the-badge)](https://npmjs.com/package/ourcord)
[![npm](https://img.shields.io/npm/dm/ourcord?color=red&style=for-the-badge)](https://npmjs.com/package/ourcord)
[![npm](https://img.shields.io/github/contributors/ourcord/ourcord?color=red&style=for-the-badge)](https://npmjs.com/package/ourcord)
[![Discord](https://img.shields.io/discord/671056591088517162?color=7289da&logo=discord&logoColor=white&style=for-the-badge)](https://discord.gg/3yDQKDXXdk)
</div>

## About

Ourcord is a new and alternative discord library for js that focuses on speed and simplicity while retaining low level functions of the discord API.

## Table of Contents

- [About](#about)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Client Config <a href="src/websocket.ts#L33"></></a>](#client-config-)
- [Links](#links)

## Installation

```cmd
npm i ourcord
```

That's it for installation 🎈

## Usage

```js
const {Client} = require('ourcord');
const client = new Client('<TOKEN>');

client.on('ready', () => {
  console.log('Client connected!');
});
```

View the full documentation [here](https://ourcord.js.org).

---

## Client Config <a href="src/websocket.ts#L33"></></a>

| Option             | Type      | Default     | Description                                                   | Optional? |
| ------------------ | --------- | ----------- | ------------------------------------------------------------- | --------- |
| browser            | `string`  | `'ourcord'` | Specify the browser you want to connect via (can be anything) | `yes`     |
| device             | `string`  | `'ourcord'` | The device you want to connect with (can be anything)         | `yes`     |
| prefix             | `string`  | `null`      | Specify the prefix for the bot                                | `yes`     |
| cacheChannels      | `boolean` | `false`     | Whether or not to cache channels                              | `yes`     |
| cacheGuilds        | `boolean` | `false`     | Whether or not to cache guilds                                | `yes`     |
| cacheUsers         | `boolean` | `false`     | Whether or not to cache users                                 | `yes`     |
| cacheMembers       | `boolean` | `false`     | Whether or not to cache guild members                         | `yes`     |
| activity           | `object`  | `null`      | The activity you want to appear on your client on connect     | `yes`     |
| status             | `string`  | `'dnd'`     | The status you want your client to connect with               | `yes`     |
| defaultImageFormat | `string`  | `null`      | Default image extension to display.                           | `yes`     |
| defaultImageSize   | `number`  | `null`      | Default image size to display.                                | `yes`     |

## Links

[**Discord server**](https://discord.gg/3yDQKDXXdk)  

[**Examples**](https://github.com/ourcord/examples)

[**Documentation**](https://ourcord.js.org)

[**Contributing**](CONTRIBUTING.md)
