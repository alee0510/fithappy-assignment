import { useEffect, useState } from 'react';
import { 
	StatusBar, 
	ScrollView,
	Text, 
	View
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialCommunityIcons';

import API, { URI } from "./Service.Api"
import { RenderNewsCard, RenderChips, RenderViewOptions, Loader } from "./App.Components"
import { Styles, Colors } from "./App.Styles"

// @main component
export default function App() {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)

	// @events
	const fetchData = async () => {
		try {
			const { data } = await API.get(URI.path("health"))
			if (data?.status !== "ok") throw ({ message : data?.message, code : data?.code})

			setData(data?.articles)
			setLoading(false)
		} catch (error) {
			console.log("#ERORR : ", error)
		}
	}

	const onLoveSelect = (index) => {}
	const onChipSelect = (id) => {}
	const onOptionSelect = (id) => {}

	// @side-effect
	useEffect(() => {
		fetchData()
	}, [])
	
	
	// @loader
	if (loading) return <Loader/>
	
	return (
		<View style={Styles.container}>
			<StatusBar barStyle="light-content" backgroundColor={Colors.primary}/>

			{/* @header component */}
			<View style={Styles.header}>
				<Text style={Styles.headerTitle}>News</Text>
				<View style={Styles.love}>
					<MaterialIcons 
						name='heart' 
						color={Colors.error} 
						size={25}
					/>
					<Text style={Styles.count}>0</Text>
				</View>
			</View>

			{/* Filter Component */}
			<View style={Styles.filter}>
				<View style={Styles.chips}>
					<RenderChips
					 	selected={1}
						onPress={onChipSelect}
					/>
				</View>
				<View style={Styles.viewOptions}>
					<RenderViewOptions
						selected={1}
						onPress={onOptionSelect}
					/>
				</View>
			</View>
			
			{/* @new content */}
			<ScrollView style={Styles.content}>
				<RenderNewsCard data={data} onPress={onLoveSelect}/>
				<View style={Styles.box}/>
			</ScrollView>
		</View>
	);
}