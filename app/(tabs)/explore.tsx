import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, ScrollView, TextInput, ActivityIndicator } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import CategoriesHeader from '@/components/CategoriesHeader';
import { Feather, FontAwesome6 } from '@expo/vector-icons';
import Users from '@/components/Users'
import { useEffect, useState } from 'react';
import { users } from '../../data.js'
export default function TabTwoScreen() {


  const [selectedCategory, setSelectedCategory] = useState('')
  const [workers, setWorkers] = useState(users)
  const [searchString, setSearchString] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (selectedCategory.length > 0) {
      const categoryWorkers = users.filter((worker) => selectedCategory === worker.category.Worker_Role)

      setWorkers(categoryWorkers)
    } else {
      setWorkers(users)
    }
  }, [selectedCategory])

  useEffect(() => {
    setLoading(true)


    const delayDebpounceFn = setTimeout(() => {

      if (searchString === '') { setWorkers(users) }
      else {
        const regex = new RegExp(searchString, 'i')
        const filteredWorkers = users.filter((worker) => regex.test(worker.name))
        setWorkers(filteredWorkers)

      }
    }, 500)

    setLoading(false)

    return () => clearTimeout(delayDebpounceFn)
  }, [searchString])
  return (


    <ThemedView style={styles.viewport}>
      <CategoriesHeader setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />

      {/*search bar */}
      <View style={styles.searchAndFilter}>
        <View style={styles.searchBar}>
          <View style={styles.searchIcon}>
            <Feather name='search' size={24} />
          </View>

          <TextInput
            placeholder='Search Workers'
            value={searchString}
            onChangeText={setSearchString}
          />
        </View>
        <View style={styles.filterIcon}>
          <FontAwesome6
            name="bars-staggered"
            size={22}

          />
        </View>
      </View>

      {
        loading ? <ActivityIndicator size={'large'} color={'blue'} /> : <Users users={workers} />
      }


    </ThemedView>


  );
}

const styles = StyleSheet.create({

  viewport: {
    paddingTop: 40
  },
  searchAndFilter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    marginTop: 2
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    width: 360,
    backgroundColor: '#ffff'
  },
  filterIcon: {
    padding: 10,
    backgroundColor: '#ffff'
  },
  searchIcon: {
    padding: 10
  }
});
