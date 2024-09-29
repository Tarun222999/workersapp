import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { categories } from '../data.js'
import { Image } from 'expo-image'
import { ThemedText } from '@/components/ThemedText'
import Svg, { Path } from 'react-native-svg'

const CategoriesHeader = ({ setSelectedCategory, selectedCategory }) => {



    return (
        <FlatList
            horizontal
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatlistContainer}
            renderItem={({ item, index }) => (
                <CategoryItem
                    item={item}
                    setSelectedCategory={setSelectedCategory}
                    selectedCategory={selectedCategory}
                />
            )}

        />
    )
}

const CategoryItem = ({ item, setSelectedCategory, selectedCategory }) => {

    const isSelected = item.Worker_Role === selectedCategory;

    const handleChangeCateogry = () => {
        setSelectedCategory(item.Worker_Role)
    }

    const handleDeselectCategory = () => {
        setSelectedCategory(''); // Reset to show all items
    };
    return (
        <Pressable onPress={handleChangeCateogry}>
            <View style={[styles.categoryContainer,
            isSelected ? styles.selectedCategory : null]}>
                <Image
                    source={{ uri: item.icon }}
                    style={styles.categoryImage}
                />
                <ThemedText style={styles.categoryTitle}>{item.Worker_Role}</ThemedText>
            </View>

            {
                isSelected && <Pressable onPress={handleDeselectCategory} style={styles.crossIcon}>
                    <Svg height="24" width="24" viewBox="0 0 24 24">
                        <Path
                            d="M18 6L6 18M6 6l12 12"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </Svg>
                </Pressable>
            }
        </Pressable>
    )
}

export default CategoriesHeader

const styles = StyleSheet.create({
    flatlistContainer: {
        backgroundColor: '#ffdbac',
        marginBottom: 1
    },
    categoryContainer: {
        alignItems: 'center',
        margin: 8,
        paddingBottom: 10
    },
    categoryImage: {
        width: 80,
        height: 80,
        borderRadius: 40

    },
    categoryTitle: {
        marginTop: 3
    },
    selectedCategory: {

    },
    crossIcon: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 3
    }
})