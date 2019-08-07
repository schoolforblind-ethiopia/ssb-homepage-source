# Shashamane School for the Blind Website

## Getting Started

### Prerequisites

You should have node.js and npm already up and running. The project uses webpack to generate the final files.

### Installing

To get startet clone the repository and install webpack dependencies

```
$ npm install
```

## Usage

### Development

Start a development server on localhost:9000 by running

```
$ npm run dev
```

All the source files are located in the src/ directory.
Import files in src/index.js
Everything in src/static will be copied directly into dist/ without any processing.

### Building

To build the project run

```
$ npm run build
```

This will write all files to the dist/ folder
