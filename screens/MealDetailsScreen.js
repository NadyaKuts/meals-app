import React from 'react'
import { Button, StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { Item, HeaderButtons } from 'react-navigation-header-buttons'
import DefaultText from '../components/DefaultText'
import HeaderButton from '../components/HeaderButton'
import { MEALS } from '../data/dummy-data'

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  )
}

const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam('mealId')
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}min</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.afordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingrdients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  )
}

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId')
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title='Favorite' iconName='ios-star' onPress={() => {}} />
        </HeaderButtons>
      )
    },
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
})

export default MealDetailsScreen
