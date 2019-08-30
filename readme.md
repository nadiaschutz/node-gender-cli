# Node.js CLI

Provides the output in a console. Names are ordered by highest probability of a name being female.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Installing


Type git clone, and then paste the URL you copied.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

Install dependencies

```
npm i
```

### Using

Open a terminal, cd into the project folder

```
$ cd gender
```

Start the app with your list of names

```
$ node gender.js tom 55 jack maria anna Alexis
```

You will get data back in your terminal

```
[ { name: 'anna', gender: 'female', probability: 1, count: 4755 },
  { name: 'maria', gender: 'female', probability: 0.99, count: 8402 },
  { name: 'Alexis', gender: 'male', probability: 0.52, count: 1224 },
  { name: 'jack', gender: 'male', probability: 0.99, count: 1993 },
  { name: 'tom', gender: 'male', probability: 1, count: 3736 } ]
```