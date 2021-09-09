# fcx-grid

Plataforma de espaçamentos e grids para uso em projetos de interface do FCx Labs.

## Installation

`yarn add @fcxlabs/grid`

or

`npm i @fcxlabs/grid`

## Usage

### Example:

```js
import { fcxSpacing, toScale } from "@fcxlabs/grid";

const styles = StyleSheet.create({
  container: {
    padding: fcxSpacing.capital,
    fontSize: toScale(12),
  },
});
```

## Methods

```js
toScale(value: number) => return value * scale
```

## Properties

### fcxSpacing:

- unit
- tiny
- xSmall
- small
- regular
- large
- xLarge
- xxLarge
- capital
