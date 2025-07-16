# eslint-config-bobpark 
이것은 `Bob Park` 의 eslint 9 을 적용한 Shared Configuration Repository 이다.

## 적용 된 것
- react
- a11y
- typescript
- prettier
- rushstack
- tasnstack query


## custom 된 것
- intent switch 변경 
- import 시 `../` 이상의 상대경로 사용하는 것
- `React` 를 import 하는것
  - ex:) import React from "react"
- 


## 적용 예시
```bash
yarn add eslint --dev
```

```javascript
// eslint.config.mjs
import { defineConfig } from "eslint/config";
import eslintConfig from "@bob-park/eslint-config-bobpark";

export default defineConfig([
    {
        extends: [eslintConfig],
    },
]);


```
