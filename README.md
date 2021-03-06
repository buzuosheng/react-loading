# @buzuosheng/loading

React loading style Component.

![](https://badgen.net/npm/v/@buzuosheng/loading) ![](https://badgen.net/npm/dw/@buzuosheng/loading) ![](https://badgen.net/bundlephobia/minzip/@buzuosheng/loading) ![](https://badgen.net/bundlephobia/tree-shaking/@buzuosheng/loading) ![](https://img.shields.io/snyk/vulnerabilities/npm/@buzuosheng/loading)

## Demo

[https://app-demo-buzuosheng.vercel.app/loading](https://app-demo-buzuosheng.vercel.app/loading)

## Installation

``` powershell
npm i @buzuosheng/loading
```

## Usage

``` React
import { Loading } from "@buzuosheng/loading"

const Loading = () => {
  return(
    <Loading type="Oval" color="#1890ff" hegiht={40} width={40} />
  );
};
```

All properties are optional, default:

``` react
<Loading type="Oval" color="#1890ff" height={40} width={40} />
```

`type` is one of these values:

|      type      |                             svg                              |
| :------------: | :----------------------------------------------------------: |
|      Oval      | ![](https://buzuosheng.com/React/%E7%BA%AFcss%E5%AE%9E%E7%8E%B0loading%E6%A0%B7%E5%BC%8F/1.svg) |
|  LittleCircle  | ![](https://buzuosheng.com/React/%E7%BA%AFcss%E5%AE%9E%E7%8E%B0loading%E6%A0%B7%E5%BC%8F/2.svg) |
|   HalfCircle   | ![](https://buzuosheng.com/React/%E7%BA%AFcss%E5%AE%9E%E7%8E%B0loading%E6%A0%B7%E5%BC%8F/3.svg) |
|     Audio      | ![](https://buzuosheng.com/React/%E7%BA%AFcss%E5%AE%9E%E7%8E%B0loading%E6%A0%B7%E5%BC%8F/4.svg) |
|      Rain      | ![](https://buzuosheng.com/React/%E7%BA%AFcss%E5%AE%9E%E7%8E%B0loading%E6%A0%B7%E5%BC%8F/5.svg) |
|    Stretch     | ![](https://buzuosheng.com/React/%E7%BA%AFcss%E5%AE%9E%E7%8E%B0loading%E6%A0%B7%E5%BC%8F/6.svg) |
|    Flicker     | ![](https://buzuosheng.com/React/%E7%BA%AFcss%E5%AE%9E%E7%8E%B0loading%E6%A0%B7%E5%BC%8F/7.svg) |
| StretchFlicker | ![](https://buzuosheng.com/React/%E7%BA%AFcss%E5%AE%9E%E7%8E%B0loading%E6%A0%B7%E5%BC%8F/8.svg) |

