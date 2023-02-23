import { StyleSheet } from "react-native"

// @colors
export const Colors = Object.freeze({
    base : "#EAEAEA",
    white : "#FCFCFC",
    black : "#002318",
    primary : "#004F36",
    error : "#D44D5C",
})

// @styles
export const Styles = StyleSheet.create({
	loader : {
		flex : 1,
		backgroundColor : Colors.base,
		display : "flex",
		justifyContent : "center",
		alignItems : "center"
	},
	container: {
		flex: 1,
		backgroundColor: Colors.base,
	},
	header : {
		display : "flex",
		flexDirection : "row",
		alignItems : "center",
		justifyContent : "space-between",
		height : 70,
		backgroundColor : Colors.primary,
		paddingHorizontal : 20,
	},
	headerTitle : {
		fontSize : 30,
		fontWeight : "bold",
		color : Colors.white,
	},
	favorite : {
		display : "flex",
		flexDirection : "row",
		alignItems : "center",
	},
	count : {
		fontSize : 25,
		color : Colors.white,
		fontWeight : "bold",
		padding : 10
	},
    filter : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        paddingHorizontal : 20,
        paddingVertical : 15
    },
    chips : {
        display : "flex",
        flexDirection : "row"
    },
    chip : {
        paddingHorizontal : 20,
        marginRight : 5,
        borderRadius : 50,
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        borderWidth : 1,
        borderColor : Colors.black
        
    },
    chipText : {
        fontSize : 15
    },
    viewOptions : {
        display : "flex",
        flexDirection : "row",
    },
    options : {
        padding : 6,
        marginLeft : 5,
        borderWidth : 1,
        borderRadius : 8
    },
	content  : {
		flex : 1,
		paddingHorizontal : 20,
		paddingVertical : 0
	},
	card : {
		height : 150,
		width : "100%",
		backgroundColor : Colors.white,
		paddingHorizontal : 10,
		paddingVertical : 10,
		marginVertical : 5,
		borderRadius : 8,
		shadowColor: Colors.black,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.20,
		shadowRadius: 1.41,
		elevation: 2,
	},
	cardContent : {
		flex : 4,
		display : "flex",
		flexDirection : "row",
	},
	cardFooter : {
		flex : 1,
		display : "flex",
		flexDirection : "row",
		justifyContent : "space-between",
		alignItems : "flex-end",
	},
	cardTitle : {
		flex : 2,
		paddingHorizontal : 10,
		fontSize : 21,
		fontWeight : "bold",
		color : Colors.black
	},
	cardThumbnail : {
		flex : 1,
		borderRadius : 8,
		overflow : "hidden"
	},
	thubmnail : {
		width : "100%",
		height : "100%"
	},
	cardText : {
		fontSize : 13,
		color :Colors.black,
		fontStyle : "italic"
	},
	box : {
		height : 20,
		width : "100%"
	}
});
