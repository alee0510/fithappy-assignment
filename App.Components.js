import React from "react"
import { TouchableOpacity, ActivityIndicator, View, Text, Image } from "react-native"
import MaterialIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Styles, Colors } from "./App.Styles"

export const RenderNewsCard = ({ data }) => {
	return data?.map((item, index) => (
		<View style={Styles.card} key={index}>
			<View style={Styles.cardContent}>
				<View style={Styles.cardThumbnail}>
					<Image source={{ uri : item.urlToImage }} 
						style={Styles.thubmnail}
						resizeMode="cover"
					/>
				</View>
				<Text style={Styles.cardTitle}>{item.title}</Text>
			</View>
			<View style={Styles.cardFooter}>
				<Text style={Styles.cardText}>Source : {item.source?.name}</Text>
				<TouchableOpacity>
					<MaterialIcons name='heart-outline' color="#404040" size={22}/>
				</TouchableOpacity>
			</View>
		</View>
	))
}

const CHIPS = [
    { 
        id : 1,
        tag : "All"
    },
    {
        id : 2,
        tag : "CNN"
    },
    {
        id : 3,
        tag : "Daily Mail"
    }
]
export const RenderChips = ({ selected, onPress }) => {
	return CHIPS.map(item => (
		<TouchableOpacity key={item.id} 
            style={[
                Styles.chip,
                {
                    backgroundColor : selected === item.id ? Colors.primary : null
                }
            ]}
            onPress={() => onPress(item.id)}
        >
			<Text style={[
                Styles.chipText,
                { color : selected === item.id ? Colors.white : Colors.black }
            ]}>
                {item.tag}
            </Text>
		</TouchableOpacity>
	))
}

const OPTIONS = [{ id : 1, tag : "view-list" }, { id : 2, tag : "view-grid" }]
export const RenderViewOptions = ({ selected, onPress }) => {
	return OPTIONS.map(item => (
		<TouchableOpacity key={item.id} 
            style={[
                Styles.options,
                {
                    backgroundColor : selected === item.id ? Colors.primary : null
                }
            ]}
            onPress={() => onPress(item.id)}
        >
			<MaterialIcons 
				name={item.tag}
				size={20}
				color={selected === item.id ? Colors.white : Colors.primary}
			/>
		</TouchableOpacity>
	))
}

export const Loader = () => {
	return (
		<View style={Styles.loader}>
			<ActivityIndicator color="#004F36" size={30}/>
		</View>
	)
}