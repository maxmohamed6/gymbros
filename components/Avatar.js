import React from 'react';
import {Image, Stylesheet} from 'react-native';

const Avatar = ({source, size}) => {
    return (
      <Image
        source = {source}
        style = {{
          width: size,
          height: size,
          borderRadius: size / 2,
          alignItems: 'center'
        }}
      />
    )

};

export default Avatar;
