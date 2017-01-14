// Get polyfill so we can use full ES6 in the tests
import 'babel-polyfill'
import randomword from 'random-word'

const arraysize = 20000000
const data = []

console.log( 'Generating data' )
for (let i = arraysize - 1; i >= 0; i--) {
	data.push( randomword( ) )
}

describe( arraysize + ' iterations of for loops', function( ) {

	this.slow( 1 )

	it( 'Traditional for loop', done => {
		let storage =[]
		for (var i = 0; i < data.length; i++) {
			storage.push( data[i] )
		}
		done( )
	} )

	it( 'Improved native for loop', done => {
		let storage = []
		for (var i = data.length - 1; i >= 0; i--) {
			storage.push( data[i] )
		}
		done( )
	} )

	it( 'For of loop', done => {
		let storage = []
		for( let thing of data ) {
			storage.push( thing )
		}
		done( )
	} )

} )