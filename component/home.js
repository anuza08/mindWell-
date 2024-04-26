import * as React from "react"
import Svg, { G, Mask, Path, Defs, Pattern, Use, Image } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function HomeComponent(props) {
  return (
    <Svg
      width={64}
      height={83}
      viewBox="0 0 64 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <G filter="url(#filter0_d_26_13)">
        <Mask
          id="a"
          style={{
            maskType: "alpha"
          }}
          maskUnits="userSpaceOnUse"
          x={4}
          y={0}
          width={56}
          height={75}
        >
          <Path fill="url(#pattern0_26_13)" d="M4 0H60V75H4z" />
        </Mask>
        <G mask="url(#a)">
          <Path fill="#fff" d="M-11 -20H76.7333V87.5H-11z" />
        </G>
      </G>
      <Defs>
        <Pattern
          id="pattern0_26_13"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_26_13"
            transform="matrix(.01111 0 0 .0083 0 .127)"
          />
        </Pattern>
        <Image
          id="image0_26_13"
          width={90}
          height={90}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACuUlEQVR4nO2cPY8NYRiGr2RlURDaJSoKOpr1D2joJRQalY9Sq3PwC1SKFT0Vf8BHY1UKKuKjFDZBQtwyyUzC2D1md96Z93mfea7kbs7ZM3Pf93nznvPsTA4EQRAEQRAEf7MDuAF8AD4Cs/qxICFLwFNALT0HDkTTaTgKvFmn5EbvgeUoux/ngG9zSm5U/c3Zjsdc/GMLar9hs/r5ybAA3OpQcFs369fOY/afY1TPT4JdwP0tlNzoIbBnzvHbK7mt6oPWPQeBlz1KbvQKOLzBObq83jUngE8JSm70BTi1znkmXfQF4EfCkhv9BK62zjXJorcDdwYouK17wM6pFr20wRAylJrhZlJFL9ffWzWyup7TBWeArxlK3oyKZqHDsGBFRQ8hDwwU6LroQ4mGkCh6xCFEsaL/5Uo9MKhAFUF11WPFQFnqIfNXbsYeQjSQTF+5OQa8NVCSEqn6d+pxjFHCEKIt6DtwHgOUNISoh24D23KVvLuwIUQ99QjYO3bJJQ4hSqDXwJGxSj5Z6BCihFduTg9dcslDiBLqF3BtiIKrex3uGggoY1pJfR/IdQOhZFRVN8nIcTVEBQ02UTTDF/0uZdFTGEpkYetYrMuOLYQ8N0VqYspG7uCKovOXoljRZC8stg5sK/ZooujsqzBWNPmLi62D/KW636On4M1VGBn25iqMDHtzFUaGvbkKI8PeXIWRYW+uwsiwN1dhZNibqzAy7M1VGBn25iqMDHtzFUaGvbkKI8PeXIWRYW+uwsiwN1dhZNibqzAy7M1VGBn25iqMDHtzFUaGvbkKI8PeXIWRYW+uwsiwN1dhZNjbplkbKJAM6nPOop8ZKEAj6UnOoi8bKEAj6WLu3xZ9YaAEDaxVC7+Uvt952avAPoxQrexL9T7m4QNyDXhcbxfZV3IQBEEQBEEQBEEQBAHG+A35uRv+u/0KggAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  )
}

export default HomeComponent;
