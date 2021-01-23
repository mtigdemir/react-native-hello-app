import React from 'react';
import { View } from 'react-native';
import { Avatar, ListItem, SocialIcon, Text } from 'react-native-elements';


export function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

export function List() {

  const list = [
    {
      name: 'Gulistan Boylu',
      avatar_url: 'https://images.squarespace-cdn.com/content/v1/5bcdd76a81551217e12a7a2b/1602681246299-7ZSHCJDBCODNYPANWGBG/ke17ZwdGBToddI8pDm48kIFW6nz5ghgCWNM4klpe5QNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxUjztifvRlmtPwJ3FllRmrdPtkjpX8_i1l0JyvWdwXmq7oMZC2odwXMJ7f2QYjijE/G%C3%BClistan+Rose+Boylu.jpg?format=1500w',
      subtitle: 'Vice President',
      icon: 'github'
    },
    {
      name: 'Muharrem Tigdemir',
      avatar_url: 'https://muharremtigdemir.com/assets/img/profile2.png',
      subtitle: 'Vice Chairman',
      icon: 'twitter'
    },
  ]

  return (
      <View>
        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar source={{uri: l.avatar_url}} />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                <SocialIcon
                  raised={false}
                  type={l.icon}
                />
              </ListItem.Content>
            </ListItem>
          ))
        }
      </View>
  );
}